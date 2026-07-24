import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const { t } = useTranslation();
  const list = t("faq.list", { returnObjects: true }) as { q: string; a: string }[];
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal><SectionLabel>{t("faq.label")}</SectionLabel></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
            {t("faq.heading1")}{" "}
            <span className="text-[color:var(--color-gold)]">{t("faq.heading2")}</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-4">
          {list.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border px-6 md:px-8 transition-all ${
                  isOpen
                    ? "border-[color:var(--color-gold)]/60 bg-[color:var(--color-card)]/40 shadow-[0_0_40px_-10px_rgba(212,175,55,0.35)]"
                    : "border-[color:var(--color-line)] bg-transparent"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center gap-5 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <motion.span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[color:var(--color-gold)] ${
                      isOpen ? "border-[color:var(--color-gold)]" : "border-[color:var(--color-line)]"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </motion.span>
                  <span className="font-display text-lg md:text-2xl text-white">{f.q}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="flex gap-4 pb-7 pl-14">
                        <span className="w-[2px] shrink-0 rounded-full bg-[color:var(--color-gold)]" />
                        <p className="max-w-3xl text-sm md:text-base text-[color:var(--color-paragraph)]">
                          {f.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}