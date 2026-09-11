import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainerProfile from "@/components/TrainerProfile";
import AdventureLog from "@/components/AdventureLog";
import FieldNotes from "@/components/FieldNotes";
import SkillDex from "@/components/SkillDex";
import Badges from "@/components/Badges";
import LinkCable from "@/components/LinkCable";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Observer triggers smooth entry transitions as each section scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const revealElements = document.querySelectorAll(".section-reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-poke-red selection:text-white relative overflow-x-hidden">
      {/* Scanline CRT overlay */}
      <div className="scanline" aria-hidden="true" />

      {/* Floating ambient corner spotlights */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-poke-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 -right-40 w-96 h-96 bg-poke-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <Navbar />

      <main className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <Hero />

        <div className="section-reveal">
          <TrainerProfile />
        </div>

        {/* Section divider line */}
        <div className="w-full max-w-5xl mx-auto px-6" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="section-reveal">
          <AdventureLog />
        </div>

        <div className="w-full max-w-5xl mx-auto px-6" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="section-reveal">
          <FieldNotes />
        </div>

        <div className="w-full max-w-5xl mx-auto px-6" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="section-reveal">
          <SkillDex />
        </div>

        <div className="w-full max-w-5xl mx-auto px-6" aria-hidden="true">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        <div className="section-reveal">
          <Badges />
        </div>

        <div className="section-reveal">
          <LinkCable />
        </div>
      </main>

      <Footer />
    </div>
  );
}