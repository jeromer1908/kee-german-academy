import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef, useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.png";

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  const words = t("hero.words", { returnObjects: true }) as string[];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" ref={ref} className="relative isolate overflow-hidden hero-gradient min-h-[100svh]">
      {/* background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          className="h-full w-full object-cover opacity-45"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/40 via-[#090909]/60 to-[#090909]" />
      </motion.div>

      {/* gold glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(212,175,55,0.25),transparent)]" />

      <div className="container-x relative flex min-h-[100svh] flex-col justify-center pt-24 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[11px] font-medium uppercase tracking-[0.4em] text-[color:var(--color-gold)]"
        >
          {t("hero.eyebrow")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-[clamp(2.25rem,6.5vw,6rem)] leading-[1.05] text-white min-h-[1.9em]"
        >
          {t("hero.title1")}
          <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={words[index]}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-block italic text-gold-gradient"
            >
              {words[index]}
            </motion.span>
          </AnimatePresence>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 font-display italic text-lg md:text-xl text-[color:var(--color-gold-2)]"
        >
          {t("hero.tagline")}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-4 max-w-2xl text-sm md:text-base leading-relaxed text-[color:var(--color-paragraph)]"
        >
          {t("hero.sub")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.7)]"
          >
            <MessageCircle size={16} /> {t("cta.enroll")}
          </a>
          
          <a  href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/50 bg-white/[0.02] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-[color:var(--color-gold)] hover:bg-[color:var(--color-gold)]/10"
          >
            {t("cta.demo")} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40"
        >
          {t("hero.trust")}
        </motion.p>
      </div>
    </section>
  );
}