import { useTranslation } from "react-i18next";
import { MonitorPlay, Milestone, Briefcase } from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

const icons = [MonitorPlay, Milestone, Briefcase];

export function About() {
  const { t } = useTranslation();
  const points = t("about.points", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <section id="about" className="relative section-glow py-28 md:py-36">
      <div className="container-x grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left column */}
        <div>
          <Reveal><SectionLabel>{t("about.label")}</SectionLabel></Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[1.05] text-white">
              German,
              <br />
              <span className="text-[color:var(--color-gold)]">made</span>
              <br />
              practical.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex items-center gap-1.5">
              <span className="h-px w-10 bg-white/20" />
              <span className="h-1 w-4 rounded-full bg-[color:var(--color-gold)]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[color:var(--color-paragraph)]">
              {t("about.copy")}
            </p>
          </Reveal>
        </div>

        {/* Right column: stacked feature cards */}
        <div className="flex flex-col gap-6">
          {points.map((p, i) => {
            const Icon = icons[i] ?? Briefcase;
            return (
              <Reveal key={i} delay={0.1 * i}>
                <div className="group flex items-center gap-6 rounded-3xl border border-[color:var(--color-gold)]/20 bg-black/30 p-8 transition-all hover:border-[color:var(--color-gold)]/40">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-[color:var(--color-gold)]/50 text-[color:var(--color-gold)] shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-transform group-hover:scale-105">
                    <Icon size={30} />
                  </div>

                  <div className="h-16 w-px shrink-0 bg-white/10" />

                  <div>
                    <span className="font-display text-2xl italic text-[color:var(--color-gold)]">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl text-white">{p.t}</h3>
                    <p className="mt-1 text-[color:var(--color-paragraph)]">{p.d}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}