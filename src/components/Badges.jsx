import React from "react";
import { Award, Sparkles, CheckCircle2, Lock } from "lucide-react";
import PokeBall from "./PokeBall";
import SectionPokemon from "./AmbientPokemon";
import TypewriterTitle from "./TypewriterTitle";

const BADGES = [
  { 
    name: "AWS CLOUD PRACTITIONER", 
    status: "OBTAINED", 
    ball: "poke",
    desc: "Cloud Infrastructure & Core Architecture",
  },
  { 
    name: "COMPTIA A+", 
    status: "OBTAINED", 
    ball: "great",
    desc: "Hardware, OS, Security & Virtualization",
  },
  { 
    name: "COMPTIA NETWORK+", 
    status: "IN PROGRESS", 
    ball: "net",
    desc: "Routing, Switching & Network Topologies",
  },
  { 
    name: "COMPTIA SECURITY+", 
    status: "IN PROGRESS", 
    ball: "dusk",
    desc: "Threat Intelligence, IAM & Risk Mitigation",
  },
];

export default function Badges() {
  return (
    <section id="badges" className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-poke-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest flex items-center gap-1">
              <Sparkles size={11} className="text-poke-yellow animate-spin" />
              SECTION 05
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <Award className="w-5 h-5 text-poke-yellow animate-bounce" />
              <TypewriterTitle
                text="BADGES & CERTS"
                className="press-start text-xs sm:text-sm md:text-base text-white tracking-wide"
              />
              <PokeBall size={22} variant="master" />
            </div>
            <SectionPokemon species="dialga" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {BADGES.map((b) => {
            const obtained = b.status === "OBTAINED";
            return (
              <div
                key={b.name}
                className={`group relative p-6 text-center rounded-sm transition-all duration-500 transform hover:-translate-y-2 border ${
                  obtained
                    ? "border-poke-yellow/40 bg-gradient-to-b from-poke-yellow/[0.07] via-transparent to-transparent hover:border-poke-yellow hover:shadow-[0_10px_30px_-5px_rgba(250,204,21,0.25)]"
                    : "border-white/10 bg-white/[0.01] hover:border-white/30 opacity-75 hover:opacity-100"
                }`}
              >
                {obtained && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none badge-shine" />
                )}

                <div className="absolute top-3.5 right-3.5">
                  {obtained ? (
                    <CheckCircle2 size={16} className="text-poke-yellow drop-shadow-[0_0_5px_currentColor]" />
                  ) : (
                    <Lock size={15} className="text-white/30" />
                  )}
                </div>

                <div className="flex justify-center mb-5 relative">
                  <div className={`transition-transform duration-500 group-hover:scale-110 ${obtained ? "animate-float" : "grayscale"}`}>
                    <PokeBall size={60} variant={b.ball} glow={obtained} />
                  </div>
                </div>

                <h3 className="press-start text-[9px] text-white leading-relaxed mb-2 min-h-[36px] flex items-center justify-center tracking-wide group-hover:text-poke-yellow transition-colors">
                  {b.name}
                </h3>

                <p className="geist-mono text-[10px] text-white/50 leading-normal mb-4 min-h-[30px]">
                  {b.desc}
                </p>

                <div className="inline-flex items-center gap-1.5">
                  <span
                    className={`press-start text-[7px] px-3 py-1.5 border tracking-wider transition-all duration-300 ${
                      obtained
                        ? "text-poke-yellow border-poke-yellow/60 bg-poke-yellow/10 shadow-[0_0_10px_rgba(250,204,21,0.2)]"
                        : "text-white/40 border-white/20 bg-white/5"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}