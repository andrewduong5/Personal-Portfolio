import React from "react";
import { User, ShieldCheck, MapPin, Zap } from "lucide-react";
import PokeBall from "./PokeBall";
import TrainerCard from "./TrainerCard";

export default function TrainerProfile() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      
      {/* Background glow lamp */}
      <div className="absolute top-1/3 -right-24 w-72 h-72 bg-poke-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest flex items-center gap-1">
              <Zap size={10} className="text-poke-yellow fill-poke-yellow" />
              SECTION 01
            </span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-poke-red animate-pulse" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">TRAINER PROFILE</h2>
            <PokeBall size={20} variant="great" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Bio + stats */}
          <div>
            <div className="border border-white/20 bg-white/[0.02] p-7 mb-6 relative rounded-sm shadow-lg hover:border-poke-red/50 transition-colors duration-300">
              <div className="flex items-start gap-3.5 mb-4">
                <span className="press-start text-[8px] text-poke-red mt-1 animate-ping" aria-hidden="true">▶</span>
                <p className="geist-mono text-sm text-white/85 leading-relaxed">
                  Information Systems graduate from UC Riverside with a foundation in cloud infrastructure, information security, and risk analysis. Proven ability to evaluate complex systems, identify operational vulnerabilities, and translate data insights into secure, scalable solutions.
                </p>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="press-start text-[8px] text-poke-yellow mt-1 animate-pulse" aria-hidden="true">▶</span>
                <p className="geist-mono text-sm text-white/65 leading-relaxed">
                  Backed by practical experience in AI evaluation and data analysis. AWS Cloud Practitioner and CompTIA A+ certified, with active CompTIA credentialing in progress.
                </p>
              </div>
            </div>

            {/* Retro Stat Tiles with Hover Elevation */}
            <div className="grid grid-cols-3 gap-3.5">
              {[
                { k: "CLASS", v: "TRAINER", icon: ShieldCheck, color: "text-poke-blue" },
                { k: "REGION", v: "VENTURA, CA", icon: MapPin, color: "text-poke-yellow" },
                { k: "LEVEL", v: "LVL. 99", icon: Zap, color: "text-poke-red" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div 
                    key={s.k} 
                    className="border border-white/15 bg-white/[0.015] p-3.5 text-center rounded-sm hover:border-white/50 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300 group cursor-default shadow-sm"
                  >
                    <div className="flex items-center justify-center gap-1 mb-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                      <Icon size={12} className={s.color} />
                      <p className="press-start text-[6px] text-white/60 tracking-wider">{s.k}</p>
                    </div>
                    <p className="geist-mono text-xs text-white font-semibold tracking-wide group-hover:text-poke-yellow transition-colors">
                      {s.v}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trainer Card */}
          <div className="transform hover:scale-[1.02] transition-transform duration-500 ease-out">
            <TrainerCard />
          </div>
        </div>
      </div>
    </section>
  );
}