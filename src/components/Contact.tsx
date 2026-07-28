import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Reveal, SectionLabel } from "./Reveal";
import { Send, MessageCircle, Instagram, Mail } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

// EmailJS config
const EMAILJS_SERVICE_ID = "service_kclo7ii";
const EMAILJS_TEMPLATE_ID = "template_lrz8gjx";
const EMAILJS_PUBLIC_KEY = "4E6EDkFAdffA9XVE3";

export function Contact() {
  const { t } = useTranslation();
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSending(true);

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        toast.success(t("contact.sent"));
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast.error(t("contact.error") || "Something went wrong. Please try again.");
      })
      .finally(() => setSending(false));
  };
  const inputCls =
    "w-full rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-card)]/60 px-5 py-4 text-sm text-white placeholder:text-white/40 outline-none transition-colors focus:border-[color:var(--color-gold)]/60";

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[color:var(--color-bg-2)]/40">
      <div className="container-x">
        <Reveal>
          <SectionLabel>{t("contact.label")}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] text-white">
            {t("contact.heading")}
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-[color:var(--color-paragraph)]">{t("contact.sub")}</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <form ref={formRef} onSubmit={submit} className="glass-card rounded-3xl p-6 md:p-10">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  required
                  name="from_name"
                  placeholder={t("contact.name")}
                  className={inputCls}
                />
                <input
                  required
                  type="email"
                  name="from_email"
                  placeholder={t("contact.email")}
                  className={inputCls}
                />
                <input name="phone" placeholder={t("contact.phone")} className={inputCls} />
                <input
                  name="profession"
                  placeholder={t("contact.profession")}
                  className={inputCls}
                />
                <select
                  required
                  name="course"
                  defaultValue=""
                  className={inputCls + " md:col-span-2"}
                >
                  <option value="" disabled>
                    {t("contact.course")}
                  </option>
                  <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                </select>
                <textarea
                  rows={5}
                  name="message"
                  placeholder={t("contact.message")}
                  className={inputCls + " md:col-span-2 resize-none"}
                />
              </div>
              <button
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-4 text-sm font-semibold text-black transition-all hover:shadow-[0_0_60px_-10px_rgba(212,175,55,0.7)] disabled:opacity-60"
              >
                <Send size={16} /> {sending ? t("cta.sending", "Sending...") : t("cta.send")}
              </button>
            </form>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal direction="right">
              <a
                href="https://wa.me/919941987164"
                target="_blank"
                rel="noreferrer"
                className="glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div className="font-display text-xl text-white">{t("contact.whatsapp")}</div>
                  <div className="text-sm text-[color:var(--color-paragraph)]">+91 99419 87164</div>
                  <div className="text-xs text-white/40 mt-1">{t("contact.whatsappSub")}</div>
                </div>
              </a>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <a
                href="https://www.instagram.com/keegerman.in" target="_blank" rel="noreferrer" className="glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40"
                target="_blank"
                rel="noreferrer"
                className="glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]">
                  <Instagram size={22} />
                </div>
                <div>
                  <div className="font-display text-xl text-white">Instagram</div>
                  <div className="text-sm text-[color:var(--color-paragraph)]">
                    {t("contact.instagram")}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{t("contact.instagramSub")}</div>
                </div>
              </a>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <a
                href="mailto:keegermanacademy@gmail.com"
                className="glass-card group flex items-center gap-5 rounded-3xl p-6 transition-all hover:border-[color:var(--color-gold)]/40"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--color-gold)]/10 text-[color:var(--color-gold)]">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="font-display text-xl text-white">Email</div>
                  <div className="text-sm text-[color:var(--color-paragraph)]">
                    {t("contact.email_card")}
                  </div>
                  <div className="text-xs text-white/40 mt-1">{t("contact.emailSub")}</div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
