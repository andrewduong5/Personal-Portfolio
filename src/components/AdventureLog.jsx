import React from "react";
import { Briefcase } from "lucide-react";
import PokeBall from "./PokeBall";

const EXPERIENCE = [
  {
    type: "AI",
    typeColor: "text-poke-blue border-poke-blue/50",
    title: "HANDSHAKE AI",
    role: "AI Trainer",
    period: "Apr 2026 — Present",
    location: "Remote",
    points: [
      "Trained and evaluated LLMs by reviewing AI-generated responses for accuracy, instruction following, reasoning quality, and overall usefulness.",
      "Identified errors, inconsistencies, and weak responses, providing structured feedback to improve model performance.",
      "Contributed to improving LLM reliability, task completion, and user experience.",
    ],
  },
  {
    type: "ADV",
    typeColor: "text-poke-yellow border-poke-yellow/50",
    title: "BIIGHT DENTAL",
    role: "Account Manager",
    period: "Dec 2024 — Present",
    location: "Las Vegas, NV (Remote)",
    points: [
      "Spearheaded account management for a 3-client portfolio, growing from $100K to $250K annual revenue — a 150% growth rate.",
      "Generated 2,500+ qualified leads through bespoke ad campaigns, driving ~$700K in client revenue.",
      "Managed $150,000+ advertising budget across Meta Ads Manager — 40+ campaigns with A/B testing for maximum ROAS.",
    ],
  },
];

export default function AdventureLog() {
  return (
    <section id="experience" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 02</span>
          </div>
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-poke-yellow" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">ADVENTURE LOG</h2>
            <PokeBall size={20} variant="ultra" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCE.map((job) => (
            <div
              key={job.title}
              className="border border-white/15 p-6 relative hover:border-white/40 transition-all group"
            >
              <div className="absolute top-3 right-3">
                <span className={`press-start text-[7px] px-2 py-1 border ${job.typeColor}`}>
                  {job.type}
                </span>
              </div>
              <h3 className="press-start text-sm text-white mb-1 pr-16">{job.title}</h3>
              <p className="geist-mono text-xs text-poke-yellow mb-1">{job.role}</p>
              <p className="geist-mono text-[10px] text-white/40 mb-4">
                {job.period} · {job.location}
              </p>
              <ul className="space-y-3">
                {job.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-poke-red text-xs mt-1">◆</span>
                    <span className="geist-mono text-xs text-white/70 leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}