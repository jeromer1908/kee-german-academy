import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "../assets/Logo.png";

const links = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "courses", key: "courses" },
  { id: "features", key: "features" },
  { id: "reviews", key: "reviews" },
  { id: "faq", key: "faq" },
  { id: "contact", key: "contact" },
];

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setLang = (l: "en" | "de") => {
    i18n.changeLanguage(l);
    try {
      localStorage.setItem("kg-lang", l);
    } catch {}
  };

  const active = (i18n.language || "en").startsWith("de") ? "de" : "en";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#090909]/70 border-b border-[color:var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4 md:py-5">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Kee German Academy logo"
            className="h-16 w-16 rounded-lg object-cover"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="relative text-xs uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-white"
            >
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative flex items-center rounded-full border border-[color:var(--color-line)] bg-white/5 p-1 text-xs">
            <motion.span
              layout
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-gold-gradient`}
              style={{ left: active === "en" ? 4 : "calc(50% - 4px)" }}
            />
            <button
              onClick={() => setLang("en")}
              className={`relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors ${active === "en" ? "text-black" : "text-white/70"}`}
              aria-label="Switch to English"
            >
              🇬🇧 EN
            </button>
            <button
              onClick={() => setLang("de")}
              className={`relative z-10 rounded-full px-3 py-1.5 font-medium transition-colors ${active === "de" ? "text-black" : "text-white/70"}`}
              aria-label="Auf Deutsch umstellen"
            >
              🇩🇪 DE
            </button>
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-4 py-2 text-xs font-semibold text-black transition-transform hover:scale-[1.03] hover:shadow-[0_0_40px_-5px_rgba(212,175,55,0.55)]"
          >
            <MessageCircle size={14} /> {t("nav.enroll")}
          </a>

          <button
            className="lg:hidden rounded-full border border-[color:var(--color-line)] p-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-[color:var(--color-line)] bg-[#090909]/95 backdrop-blur-xl"
          >
            <div className="container-x flex flex-col gap-4 py-6">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-white/80"
                >
                  {t(`nav.${l.key}`)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
