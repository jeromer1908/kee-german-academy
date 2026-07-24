import { useEffect, useRef, useState, useCallback } from "react";

/**
 * ScrollFrameAnimation
 * ---------------------------------------------------------------
 * Renders an image-sequence (e.g. 120 frames) on a <canvas>, scrubbing
 * through frames as the user scrolls past a tall "sticky" section.
 *
 * USAGE
 * -----
 * 1. Put your frames in /public/frames/ named like:
 *      frame_001.jpg, frame_002.jpg, ... frame_120.jpg
 *    (zero-padded to 3 digits — see note below on optimizing them first)
 *
 * 2. Drop this in your page between Hero and Features:
 *
 *    <ScrollFrameAnimation
 *      frameCount={122}
 *      getFrameSrc={(i) => `/frames/frame_${String(i + 1).padStart(3, "0")}.webp`}
 *    />
 *
 * 3. Tweak `scrollHeightMultiplier` to control how much scroll distance
 *    the animation takes to play through (e.g. 3 = 3x viewport height).
 */

interface ScrollFrameAnimationProps {
  frameCount: number;
  getFrameSrc: (index: number) => string;
  scrollHeightMultiplier?: number; // how many viewport-heights of scroll to play the sequence over
  className?: string;
  overlay?: React.ReactNode; // optional content pinned on top of the canvas (headline, CTA, etc.)
}

export function ScrollFrameAnimation({
  frameCount,
  getFrameSrc,
  scrollHeightMultiplier = 3,
  className = "",
  overlay,
}: ScrollFrameAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  // ---- Preload all frames ----
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === frameCount) setReady(true);
      };
      img.onerror = () => {
        // Don't let one bad frame block the whole sequence
        loadedCount++;
        setImagesLoaded(loadedCount);
        if (loadedCount === frameCount) setReady(true);
      };
      images.push(img);
    }
    imagesRef.current = images;

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  // ---- Draw a given frame index onto the canvas, covering the container ----
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const cssWidth = canvas.clientWidth;
    const cssHeight = canvas.clientHeight;

    if (canvas.width !== cssWidth * dpr || canvas.height !== cssHeight * dpr) {
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, cssWidth, cssHeight);

    // "cover" fit
    const canvasRatio = cssWidth / cssHeight;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (imgRatio > canvasRatio) {
      drawHeight = cssHeight;
      drawWidth = drawHeight * imgRatio;
      offsetX = (cssWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = cssWidth;
      drawHeight = drawWidth / imgRatio;
      offsetX = 0;
      offsetY = (cssHeight - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // ---- Scroll handler: map scroll progress -> frame index ----
  useEffect(() => {
    if (!ready) return;

    const onScroll = () => {
      if (rafRef.current) return; // throttle to one draw per animation frame
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        if (scrollableDistance <= 0) return;

        // progress = 0 when top of container hits top of viewport,
        // progress = 1 when bottom of scrollable distance is reached
        const progress = Math.min(
          1,
          Math.max(0, -rect.top / scrollableDistance)
        );

        const frameIndex = Math.min(
          frameCount - 1,
          Math.floor(progress * frameCount)
        );

        if (frameIndex !== currentFrameRef.current) {
          currentFrameRef.current = frameIndex;
        }
        drawFrame(frameIndex);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll(); // draw initial frame

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready, frameCount, drawFrame]);

  const loadProgress = Math.round((imagesLoaded / frameCount) * 100);

  return (
    <section
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${scrollHeightMultiplier * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-black">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ opacity: ready ? 1 : 0, transition: "opacity 0.3s ease" }}
        />

        {!ready && (
          <div className="absolute inset-0 flex items-center justify-center text-white/80 text-sm">
            Loading animation… {loadProgress}%
          </div>
        )}

        {ready && overlay && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {overlay}
          </div>
        )}
      </div>
    </section>
  );
}