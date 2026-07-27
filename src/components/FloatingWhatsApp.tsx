import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "919941987164";
const WHATSAPP_MESSAGE = "Hi! I'd like to know more about Kee German Academy courses.";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-black shadow-[0_8px_30px_-6px_rgba(212,175,55,0.6)]"
      aria-label="Chat on WhatsApp"
    >
      {/* pulsing ring */}
      <span className="absolute inset-0 rounded-full bg-[color:var(--color-gold)]/40 animate-ping" />
      <MessageCircle size={28} strokeWidth={2} className="relative z-10" />
    </motion.a>
  );
}
