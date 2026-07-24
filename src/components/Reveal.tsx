import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
};

export function Reveal({
  children,
  as: _as,
  direction = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  as?: string;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      variants={variants[direction]}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-[color:var(--color-gold)]">
      {children}
    </div>
  );
}
