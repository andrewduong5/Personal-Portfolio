import React from "react";
import { Award } from "lucide-react";
import PokeBall from "./PokeBall";

const BADGES = [
  { name: "AWS CLOUD PRACTITIONER", status: "OBTAINED", ball: "poke" },
  { name: "COMPTIA A+", status: "OBTAINED", ball: "great" },
  { name: "COMPTIA NETWORK+", status: "IN PROGRESS", ball: "net" },
  { name: "COMPTIA SECURITY+", status: "IN PROGRESS", ball: "dusk" },
];

export default function Badges() {
  return (
    <section id="badges" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 05</span>
          </div>
          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-poke-yellow" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">BADGES EARNED</h2>
            <PokeBall size={20} variant="master" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {BADGES.map((b) => {
            const obtained = b.status === "OBTAINED";
            return (
              <div
                key={b.name}
                className={`border p-5 text-center relative transition-all hover:-translate-y-1 ${
                  obtained ? "border-poke-yellow/40 hover:border-poke-yellow" : "border-white/15 hover:border-white/40"
                }`}
              >
                <div className="flex justify-center mb-3">
                  <PokeBall size={56} variant={b.ball} glow={obtained} className={obtained ? "" : "opacity-70"} />
                </div>
                <p className="press-start text-[8px] text-white/80 leading-relaxed mb-3 min-h-[32px] flex items-center justify-center">
                  {b.name}
                </p>
                <span
                  className={`press-start text-[7px] px-2 py-1 border ${
                    obtained
                      ? "text-poke-yellow border-poke-yellow/50"
                      : "text-white/50 border-white/20"
                  }`}
                >
                  {b.status}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}