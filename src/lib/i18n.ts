import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        courses: "Courses",
        features: "Features",
        reviews: "Reviews",
        faq: "FAQ",
        contact: "Contact",
        enroll: "Enroll",
      },
      cta: {
        enroll: "Enroll Now",
        demo: "Book a Free Demo",
        send: "Send Message",
        sending: "Sending...",
      },
      hero: {
        eyebrow: "Online German Classes — A1 to B1",
        title1: "Learn German.",
        words: ["Build Your Future.", "Build Your Career.", "Build Your Dreams."],
        tagline: "Dein Deutsch. Deine Zukunft.",
        sub: "Live online German classes for students and professionals. Practical A1 to B1 learning with speaking practice, small batches, and exam-focused guidance.",
        trust: "Beginner-friendly. Live sessions. Career-focused learning.",
      },
      about: {
        label: "01 — The Academy",
        heading: "German, made practical.",
        copy: "Kee German Academy helps students and working professionals learn German through live, interactive online classes. The training is designed to make German simple, useful, and goal-oriented for exams, higher studies, and career growth.",
        points: [
          {
            t: "Live & Interactive",
            d: "Real-time classes with a mentor, not pre-recorded videos.",
          },
          {
            t: "A1 to B1 Pathway",
            d: "A structured journey from your first word to confident conversation.",
          },
          {
            t: "Career-Focused",
            d: "Practical German built for study, work, and global opportunity.",
          },
        ],
      },
      why: {
        label: "02 — Why Learn German",
        heading: "One language. A world of doors.",
        intro:
          "German can open doors to education, global careers, and stronger communication opportunities.",
        cards: [
          {
            t: "Study in Germany",
            d: "Access a stronger language foundation for university plans and life in Germany.",
          },
          {
            t: "Career Growth",
            d: "Build skills that support roles in German-linked companies and international work environments.",
          },
          {
            t: "Global Confidence",
            d: "Speak with clarity in interviews, exams, and daily conversation.",
          },
        ],
      },
      courses: {
        label: "03 — Courses",
        heading1: "Choose",
        heading2: "your",
        heading3: "level.",
        note: "Transparent pricing. Small batches. Real mentorship.",
        popular: "Most Popular",
        month: "/month",
        months: "months",
        list: [
          {
            level: "A1",
            duration: "3",
            price: "₹5,000",
            desc: "Start from zero with greetings, grammar basics, essential vocabulary, and simple everyday conversation.",
          },
          {
            level: "A2",
            duration: "3",
            price: "₹7,500",
            desc: "Build confidence with better sentence flow, richer vocabulary, and more practical speaking.",
          },
          {
            level: "B1",
            duration: "4",
            price: "₹10,000",
            desc: "Learn to communicate more independently for study, work, and real-world situations.",
          },
        ],
      },
      features: {
        label: "04 — What's Included",
        heading1: "Everything you need to",
        heading2: "succeed.",
        intro: "Designed to keep you consistent, supported, and actively involved.",
        items: [
          { t: "Live Online Classes", d: "Learn in real time with direct trainer support." },
          { t: "Study Materials", d: "Get notes and structured learning resources." },
          { t: "Speaking Practice", d: "Improve fluency through regular conversation tasks." },
          { t: "Weekly Assessments", d: "Track progress with simple checkpoints." },
          { t: "Small Batch Size", d: "Get better attention and more interaction." },
          { t: "WhatsApp Support", d: "Stay connected for updates and quick help." },
        ],
      },
      reviews: {
        label: "05 — Student Reviews",
        heading: "Voices from our classroom.",
        list: [
          {
            q: "The live classes and speaking practice helped me become more confident in just a few months.",
            n: "Karan",
            r: "Engineering Student",
          },
          {
            q: "The small batch format gave me personal attention and helped me prepare better for my level exams.",
            n: "Rahul",
            r: "Working Professional",
          },
          {
            q: "Simple explanations, flexible support, and regular practice made it easier to stay consistent.",
            n: "Priyanka",
            r: "University Aspirant",
          },
        ],
      },
      faq: {
        label: "06 — FAQ",
        heading1: "Questions,",
        heading2: "answered.",
        list: [
          {
            q: "Do I need any prior knowledge of German?",
            a: "No. The beginner-level course is designed for learners starting from zero.",
          },
          {
            q: "Are the classes live or recorded?",
            a: "The main classes are live and interactive, so you can ask questions and practice in real time.",
          },
          {
            q: "How big are the batches?",
            a: "Batches are kept small to improve attention, participation, and speaking practice.",
          },
          {
            q: "Will this help me study or work in Germany?",
            a: "Yes. The course builds practical language skills that support higher studies, career plans, and exam preparation.",
          },
          {
            q: "What do the fees include?",
            a: "Fees can include live classes, practice support, and study materials depending on the course plan.",
          },
          {
            q: "How do I enroll or book a demo?",
            a: "Contact us via WhatsApp, phone, or the contact form to book a demo or enroll.",
          },
        ],
      },
      contact: {
        label: "07 — Get Started",
        heading: "Begin your German journey.",
        sub: "Send us a message or reach out directly. We reply fast.",
        name: "Full Name",
        email: "Email Address",
        phone: "Phone Number",
        profession: "Profession",
        course: "Select a course",
        message: "Your Message",
        whatsapp: "Chat on WhatsApp",
        whatsappSub: "Fastest way to ask about batches & demos.",
        instagram: "@keegermanacademy",
        instagramSub: "Social updates and student activity.",
        email_card: "keegermanacademy@gmail.com",
        emailSub: "Best for detailed questions.",
        sent: "Message sent. We'll reply shortly.",
      },
      footer: {
        tagline: "Dein Deutsch. Deine Zukunft.",
        desc: "Live online German language academy — A1 to B1. Interactive, career-focused.",
        navigate: "Navigate",
        connect: "Connect",
        rights: "All rights reserved.",
        made: "Designed & Developed by Jerome.",
      },
    },
  },
  de: {
    translation: {
      nav: {
        home: "Start",
        about: "Über uns",
        courses: "Kurse",
        features: "Leistungen",
        reviews: "Stimmen",
        faq: "FAQ",
        contact: "Kontakt",
        enroll: "Anmelden",
      },
      cta: {
        enroll: "Jetzt anmelden",
        demo: "Kostenlose Demo buchen",
        send: "Nachricht senden",
        sending: "Wird gesendet...",
      },
      hero: {
        eyebrow: "Online-Deutschkurse — A1 bis B1",
        title1: "Deutsch lernen.",
        words: ["Baue deine Zukunft.", "Baue deine Karriere.", "Baue deine Träume."],
        tagline: "Dein Deutsch. Deine Zukunft.",
        sub: "Live-Online-Deutschkurse für Studierende und Berufstätige. Praxisnahes A1–B1-Lernen mit Sprechübungen, kleinen Gruppen und prüfungsorientierter Betreuung.",
        trust: "Anfängerfreundlich. Live-Sitzungen. Karriereorientiertes Lernen.",
      },
      about: {
        label: "01 — Die Akademie",
        heading: "Deutsch, praktisch gelernt.",
        copy: "Die Kee German Academy hilft Studierenden und Berufstätigen, Deutsch durch interaktive Online-Live-Kurse zu lernen. Das Training ist einfach, nützlich und zielorientiert — für Prüfungen, Studium und Karriere.",
        points: [
          {
            t: "Live & Interaktiv",
            d: "Echtzeit-Unterricht mit einem Mentor, keine Aufzeichnungen.",
          },
          {
            t: "A1 bis B1 Weg",
            d: "Ein strukturierter Weg vom ersten Wort bis zum sicheren Gespräch.",
          },
          { t: "Karriere-Fokus", d: "Praktisches Deutsch für Studium, Beruf und globale Chancen." },
        ],
      },
      why: {
        label: "02 — Warum Deutsch lernen",
        heading: "Eine Sprache. Eine Welt voller Türen.",
        intro: "Deutsch öffnet Türen zu Bildung, globalen Karrieren und stärkerer Kommunikation.",
        cards: [
          {
            t: "Studium in Deutschland",
            d: "Zugang zu erstklassigen, günstigen oder kostenlosen Universitäten.",
          },
          {
            t: "Karriere-Wachstum",
            d: "Gefragte Rollen bei deutschen MNCs und sprachnahen Unternehmen.",
          },
          {
            t: "Globales Selbstvertrauen",
            d: "Klar sprechen in Interviews, Prüfungen und im Alltag.",
          },
        ],
      },
      courses: {
        label: "03 — Kurse",
        heading1: "Wähle",
        heading2: "dein",
        heading3: "Niveau.",
        note: "Transparente Preise. Kleine Gruppen. Echte Betreuung.",
        popular: "Am beliebtesten",
        month: "/Monat",
        months: "Monate",
        list: [
          {
            level: "A1",
            duration: "3",
            price: "₹5.000",
            desc: "Absolute Anfängergrundlagen — Grüße, Grammatik, Alltagsgespräche.",
          },
          {
            level: "A2",
            duration: "3",
            price: "₹7.500",
            desc: "Flüssigkeit aufbauen — Vergangenheit, reicherer Wortschatz, sichere Alltagsinteraktion.",
          },
          {
            level: "B1",
            duration: "4",
            price: "₹10.000",
            desc: "Selbstständigkeit — Meinungen äußern, Arbeits- & Studiensituationen, prüfungsbereit.",
          },
        ],
      },
      features: {
        label: "04 — Was enthalten ist",
        heading1: "Alles, was du brauchst, um",
        heading2: "erfolgreich zu sein.",
        intro: "Damit du konsequent, unterstützt und aktiv beteiligt bleibst.",
        items: [
          { t: "Live-Online-Kurse", d: "Echtzeit-Betreuung durch Trainer." },
          { t: "Lernmaterialien", d: "Strukturierte Notizen & Ressourcen." },
          { t: "Sprechpraxis", d: "Flüssigkeit durch Konversation." },
          { t: "Wöchentliche Tests", d: "Fortschritt regelmäßig prüfen." },
          { t: "Kleine Gruppen", d: "Mehr Aufmerksamkeit, mehr Austausch." },
          { t: "WhatsApp-Support", d: "Schnelle Hilfe bei Fragen." },
        ],
      },
      reviews: {
        label: "05 — Erfahrungen",
        heading: "Stimmen aus unserem Klassenzimmer.",
        list: [
          {
            q: "Die Live-Kurse und Sprechpraxis haben mir in wenigen Monaten viel Selbstvertrauen gegeben.",
            n: "Ananya Sharma",
            r: "Ingenieurstudentin",
          },
          {
            q: "Kleine Gruppen bedeuten echte Aufmerksamkeit — ideale Prüfungsvorbereitung.",
            n: "Rahul Mehta",
            r: "Softwareentwickler",
          },
          {
            q: "Einfache Erklärungen, flexible Unterstützung und regelmäßige Praxis — konsequent bleiben leicht gemacht.",
            n: "Priya Nair",
            r: "Berufstätige",
          },
        ],
      },
      faq: {
        label: "06 — FAQ",
        heading1: "Fragen,",
        heading2: "beantwortet.",
        list: [
          {
            q: "Brauche ich Vorkenntnisse in Deutsch?",
            a: "Nein. Der Anfängerkurs beginnt bei Null.",
          },
          {
            q: "Sind die Kurse live oder aufgezeichnet?",
            a: "Die Hauptkurse sind live und interaktiv.",
          },
          {
            q: "Wie groß sind die Gruppen?",
            a: "Klein — für bessere Aufmerksamkeit und Sprechpraxis.",
          },
          {
            q: "Hilft mir das für Studium/Arbeit in Deutschland?",
            a: "Ja. Der Kurs baut praktische Sprachkompetenzen auf.",
          },
          {
            q: "Was ist in den Gebühren enthalten?",
            a: "Live-Kurse, Übungsunterstützung und Materialien — je nach Plan.",
          },
          {
            q: "Wie melde ich mich an oder buche eine Demo?",
            a: "Kontaktiere uns über WhatsApp, Telefon oder das Formular.",
          },
        ],
      },
      contact: {
        label: "07 — Loslegen",
        heading: "Beginne deine Deutsch-Reise.",
        sub: "Sende uns eine Nachricht oder melde dich direkt. Wir antworten schnell.",
        name: "Vollständiger Name",
        email: "E-Mail-Adresse",
        phone: "Telefonnummer",
        profession: "Beruf",
        course: "Kurs auswählen",
        message: "Deine Nachricht",
        whatsapp: "Chat auf WhatsApp",
        whatsappSub: "Schnellste Antwort zu Gruppen & Demos.",
        instagram: "@keegermanacademy",
        instagramSub: "Updates und Student:innen-Aktivität.",
        email_card: "keegermanacademy@gmail.com",
        emailSub: "Am besten für ausführliche Fragen.",
        sent: "Nachricht gesendet. Wir melden uns bald.",
      },
      footer: {
        tagline: "Dein Deutsch. Deine Zukunft.",
        desc: "Live-Online-Deutschakademie — A1 bis B1. Interaktiv, karriereorientiert.",
        navigate: "Navigation",
        connect: "Verbinden",
        rights: "Alle Rechte vorbehalten.",
        made: "Design & Entwicklung: Jerome.",
      },
    },
  },
};

if (!i18n.isInitialized) {
  const saved = typeof window !== "undefined" ? window.localStorage.getItem("kg-lang") : null;
  i18n.use(initReactI18next).init({
    resources,
    lng: saved ?? "en",
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    nonExplicitSupportedLngs: true,
    defaultNS: "translation",
    ns: ["translation"],
    interpolation: { escapeValue: false },
    returnObjects: true,
    react: { useSuspense: false },
    initImmediate: false,
  });
}

export default i18n;
