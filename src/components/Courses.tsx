import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ensureArray } from "@/lib/utils";

const WHATSAPP_NUMBER = "919941987164";
const WHATSAPP_MESSAGE = "Hi! I'd like to enroll in a German course.";

export function Courses() {
  const { t } = useTranslation();
  const list = ensureArray<{ level: string; duration: string; price: string; desc: string }>(
    t("courses.list", { returnObjects: true }),
  );

  return (
    <section id="courses" className="relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel>{t("courses.label")}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
                {t("courses.heading1")}{" "}
                <span className="text-[color:var(--color-gold)]">{t("courses.heading2")}</span>{" "}
                {t("courses.heading3")}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-xs text-sm text-[color:var(--color-paragraph)] md:text-right">
              {t("courses.note")}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {list.map((c, i) => {
            const popular = i === 1;
            return (
              <Reveal key={c.level} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`relative flex h-full flex-col rounded-3xl border p-8 md:p-10 transition-all ${
                    popular
                      ? "border-[color:var(--color-gold)]/60 bg-gradient-to-b from-[#1a1508] to-[#0d0a04] gold-glow"
                      : "border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 hover:border-[color:var(--color-gold)]/30"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="font-display text-7xl italic text-gold-gradient">{c.level}</div>
                    <span className="rounded-full bg-white/[0.06] px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-widest text-white/60">
                      {c.duration} {t("courses.months")}
                    </span>
                  </div>

                  {/* gold accent line + dot under the level letter */}
                  <div className="mt-3 mb-6 flex items-center gap-2">
                    <span className="h-px w-8 bg-[color:var(--color-gold)]/60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-gold)]" />
                  </div>

                  <p className="min-h-[72px] text-[color:var(--color-paragraph)]">{c.desc}</p>

                  <div className="mt-8 border-t border-dashed border-[color:var(--color-line)] pt-8">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl md:text-5xl text-white">
                        <span className="mr-1 align-top text-2xl md:text-3xl">₹</span>
                        {c.price}
                      </span>
                      <span className="text-sm text-white/50">{t("courses.month")}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
                      window.open(url, "_blank", "noopener,noreferrer");
                    }}
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-all ${
                      popular
                        ? "bg-gold-gradient text-black hover:shadow-[0_0_50px_-10px_rgba(212,175,55,0.7)]"
                        : "border border-[color:var(--color-line)] text-white hover:border-[color:var(--color-gold)]/60"
                    }`}
                  >
                    {t("cta.enroll")} <ArrowUpRight size={16} />
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
