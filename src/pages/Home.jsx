import React from "react";
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
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="scanline" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <TrainerProfile />
        <AdventureLog />
        <FieldNotes />
        <SkillDex />
        <Badges />
        <LinkCable />
      </main>
      <Footer />
    </div>
  );
}