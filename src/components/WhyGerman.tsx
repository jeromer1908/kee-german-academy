import { useTranslation } from "react-i18next";
import { GraduationCap, Briefcase, Globe, ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";
import studyImg from "@/assets/study-germany.jpg";
import { ensureArray } from "@/lib/utils";

const icons = [GraduationCap, Briefcase, Globe];

export function WhyGerman() {
  const { t } = useTranslation();
  const cards = ensureArray<{ t: string; d: string }>(t("why.cards", { returnObjects: true }), [
    { t: "", d: "" },
  ]);

  return (
    <section id="why" className="relative py-28 md:py-36">
      <div className="container-x">
        <Reveal>
          <SectionLabel>{t("why.label")}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-white">
            {t("why.heading")}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-paragraph)]">
            {t("why.intro")}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Left: image card */}
          <Reveal direction="left">
            <div className="relative h-full min-h-[560px] overflow-hidden rounded-3xl border border-[color:var(--color-gold)]/25 group">
              <img
                src={studyImg}
                alt="Study in Germany"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105"
                width={1024}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-between p-8">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-[color:var(--color-gold)]/50 bg-black/50 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.35)] backdrop-blur-sm">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white">{cards[0].t}</h3>

                  <div className="my-4 flex items-center gap-1.5">
                    <span className="h-px w-10 bg-white/20" />
                    <span className="h-1 w-4 rounded-full bg-[color:var(--color-gold)]" />
                  </div>

                  <p className="max-w-xs text-[color:var(--color-paragraph)]">{cards[0].d}</p>

                  <button
                    type="button"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--color-gold)]/50 px-6 py-3 text-sm font-medium text-[color:var(--color-gold)] transition-all hover:bg-[color:var(--color-gold)] hover:text-black"
                  >
                    {t("why.cta", "Learn More")}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: stacked feature cards */}
          <div className="grid gap-6 lg:col-span-2 lg:grid-cols-1">
            {cards.slice(1).map((c, i) => {
              const Icon = icons[i + 1];
              return (
                <Reveal key={c.t} direction="right" delay={0.1 * i}>
                  <div className="glass-card group relative flex h-full min-h-[260px] items-start gap-6 rounded-3xl border border-[color:var(--color-line)] p-8 md:p-10 transition-all hover:border-[color:var(--color-gold)]/40">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/40 bg-[color:var(--color-gold)]/5 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-transform group-hover:scale-105">
                      <Icon size={26} />
                    </div>

                    <div className="flex-1 pr-16">
                      <h3 className="font-display text-2xl md:text-3xl text-white">{c.t}</h3>

                      <div className="my-3 flex items-center gap-1.5">
                        <span className="h-px w-10 bg-white/20" />
                        <span className="h-1 w-4 rounded-full bg-[color:var(--color-gold)]" />
                      </div>

                      <p className="text-[color:var(--color-paragraph)]">{c.d}</p>
                    </div>

                    <button
                      type="button"
                      aria-label={`Learn more about ${c.t}`}
                      className="absolute bottom-8 right-8 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/40 text-[color:var(--color-gold)] transition-all hover:bg-[color:var(--color-gold)] hover:text-black"
                    >
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
