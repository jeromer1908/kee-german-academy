import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";
import { Video, BookOpen, Mic, LineChart, Users, MessageCircle } from "lucide-react";

const icons = [Video, BookOpen, Mic, LineChart, Users, MessageCircle];

export function Features() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as { t: string; d: string }[];

  const marqueeWords = [
    "Live Classes",
    "Speaking Practice",
    "Weekly Assessments",
    "Small Batch Size",
    "WhatsApp Support",
    "Study Materials",
  ];

  return (
    <section id="features" className="relative py-28 md:py-36 overflow-hidden">
     {/* marquee band */}
<div className="absolute top-8 left-0 right-0 overflow-hidden bg-[color:var(--color-gold)] py-4">
  <div className="marquee-track flex w-max whitespace-nowrap gap-16 font-display text-6xl italic text-black">
    {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((w, i) => (
      <span key={i} className="flex items-center gap-16">
        {w} <span className="text-white">✦</span>
      </span>
    ))}
  </div>
</div>

      <div className="container-x relative">
        <div className="pt-24">
          <Reveal>
            <SectionLabel>{t("features.label")}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
              {t("features.heading1")}
              <br />
              <span className="text-[color:var(--color-gold)]">{t("features.heading2")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-[color:var(--color-paragraph)]">
              {t("features.intro")}
            </p>
          </Reveal>

          {/* gold divider line under intro, like the screenshot */}
          <Reveal delay={0.25}>
            <div className="mt-10 h-px w-full bg-gradient-to-r from-[color:var(--color-gold)]/60 via-[color:var(--color-gold)]/10 to-transparent" />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => {
              const Icon = icons[i] ?? Video;
              return (
                <Reveal key={it.t} delay={0.05 * i}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/50 p-7 h-full transition-all hover:border-[color:var(--color-gold)]/40 hover:bg-[color:var(--color-card)]">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[color:var(--color-gold)]/30 bg-[color:var(--color-gold)]/5 text-[color:var(--color-gold)] transition-transform group-hover:scale-110">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-display text-2xl text-white">{it.t}</h3>
                      <span className="mt-2 mb-3 block h-[2px] w-8 rounded-full bg-[color:var(--color-gold)]" />
                      <p className="text-sm leading-relaxed text-[color:var(--color-paragraph)]">
                        {it.d}
                      </p>
                    </div>
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
