import React from "react";
import { User } from "lucide-react";
import PokeBall from "./PokeBall";
import TrainerCard from "./TrainerCard";

export default function TrainerProfile() {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 01</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="w-5 h-5 text-poke-red" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">TRAINER PROFILE</h2>
            <PokeBall size={20} variant="great" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Bio + stats */}
          <div>
            <div className="border border-white/15 p-6 mb-6 relative corner-brackets">
              <div className="flex items-start gap-3 mb-4">
                <span className="press-start text-[7px] text-white/30 mt-1" aria-hidden="true">▶</span>
                <p className="geist-mono text-sm text-white/80 leading-relaxed">
                  Information Systems graduate from UC Riverside with a foundation in cloud infrastructure, information security, and risk analysis. Proven ability to evaluate complex systems, identify operational vulnerabilities, and translate data insights into secure, scalable solutions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="press-start text-[7px] text-white/30 mt-1" aria-hidden="true">▶</span>
                <p className="geist-mono text-sm text-white/60 leading-relaxed">
                  Backed by practical experience in AI evaluation and data analysis. AWS Cloud Practitioner and CompTIA A+ certified, with active CompTIA credentialing in progress.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { k: "CLASS", v: "TRAINER" },
                { k: "REGION", v: "VENTURA CA" },
                { k: "LEVEL", v: "99" },
              ].map((s) => (
                <div key={s.k} className="border border-white/15 p-3 text-center hover:border-poke-red/50 transition-colors">
                  <p className="press-start text-[6px] text-white/30 mb-2">{s.k}</p>
                  <p className="geist-mono text-xs text-white font-medium">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trainer Card */}
          <TrainerCard />
        </div>
      </div>
    </section>
  );
}