import { useTranslation } from "react-i18next";
import { MessageCircle, Instagram, Mail } from "lucide-react";
import logo from "../assets/Logo.png";

export function Footer() {
  const { t } = useTranslation();
  const navKeys = ["about", "courses", "features", "faq", "contact"];

  return (
    <footer className="relative border-t border-[color:var(--color-line)] bg-[#070707] py-20">
      <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Kee German Academy logo"
              className="h-11 w-11 rounded-lg object-cover"
            />
            <span className="leading-tight">
              <span className="block font-display text-xl text-white">Kee German</span>
              <span className="block text-[10px] tracking-[0.32em] text-[color:var(--color-gold)]">
                ACADEMY
              </span>
            </span>
          </div>
          <p className="mt-6 font-display italic text-2xl text-gold-gradient">
            {t("footer.tagline")}
          </p>
          <p className="mt-4 max-w-sm text-sm text-[color:var(--color-paragraph)]">
            {t("footer.desc")}
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
            {t("footer.navigate")}
          </div>
          <ul className="mt-6 space-y-3">
            {navKeys.map((k) => (
              <li key={k}>
                <button
                  onClick={() => {
                    document.getElementById(k)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="font-display text-xl text-white/80 transition-colors hover:text-[color:var(--color-gold-2)] cursor-pointer bg-transparent border-none p-0 text-left"
                >
                  {t(`nav.${k}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
            {t("footer.connect")}
          </div>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: MessageCircle, href: "https://wa.me/919876543210" },
              {
                Icon: Instagram,
                href: "https://www.instagram.com/keegerman.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
              },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-[color:var(--color-line)] text-white/70 transition-all hover:border-[color:var(--color-gold)]/60 hover:text-[color:var(--color-gold)]"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <p className="mt-8 text-sm text-[color:var(--color-paragraph)]">
            keegermanacademy@gmail.com
          </p>
          <p className="text-sm text-[color:var(--color-paragraph)]">Chennai, India</p>
        </div>
      </div>

      <div className="container-x mt-16 flex flex-col justify-between gap-3 border-t border-[color:var(--color-line)] pt-8 text-xs text-white/40 md:flex-row">
        <div>
          © {new Date().getFullYear()} Kee German Academy. {t("footer.rights")}
        </div>
        <div>{t("footer.made")}</div>
      </div>
    </footer>
  );
}
