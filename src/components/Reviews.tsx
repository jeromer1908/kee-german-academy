import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";
import { Quote, Star } from "lucide-react";
import { ensureArray } from "@/lib/utils";

export function Reviews() {
  const { t } = useTranslation();
  const list = ensureArray<{ q: string; n: string; r: string }>(
    t("reviews.list", { returnObjects: true }),
  );

  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40">
      <div className="container-x">
        <Reveal>
          <SectionLabel>{t("reviews.label")}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
            {t("reviews.heading")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {list.map((r, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="glass-card flex h-full flex-col rounded-3xl p-8 transition-all hover:border-[color:var(--color-gold)]/40">
                <Quote className="text-[color:var(--color-gold)]/70" size={28} />
                <div className="mt-4 flex gap-1 text-[color:var(--color-gold)]">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 flex-1 font-display text-xl italic leading-snug text-white/90">
                  "{r.q}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-[color:var(--color-line)] pt-6">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] font-display text-lg text-[color:var(--color-gold)]">
                    {r.n
                      .split(" ")
                      .map((x) => x[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-medium text-white">{r.n}</div>
                    <div className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-gold)]/80">
                      {r.r}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
