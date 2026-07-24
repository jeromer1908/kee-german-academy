import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyGerman } from "@/components/WhyGerman";
import { Courses } from "@/components/Courses";
import { Features } from "@/components/Features";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollFrameAnimation } from "@/components/ScrollFrameAnimation";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kee German Academy — Live Online German Classes (A1 to B1)" },
      { name: "description", content: "Premium live online German language academy. A1 to B1 courses with speaking practice, small batches, and career-focused mentorship." },
      { property: "og:title", content: "Kee German Academy — A1 to B1" },
      { property: "og:description", content: "Live online German classes for students and professionals. Practical, career-focused learning." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Kee German Academy",
          description: "Live online German language academy — A1 to B1.",
          areaServed: "Global",
          url: "/",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-[color:var(--color-bg)] text-white">
      <Navbar />
      <Hero />
      {/* <ScrollFrameAnimation
        frameCount={122}
        getFrameSrc={(i) => `/frames/frame_${String(i + 1).padStart(3, "0")}.webp`}
        scrollHeightMultiplier={3}
      /> */}
      <About />
      <WhyGerman />
      <Courses />
      <Features />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}