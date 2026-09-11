import React from "react";
import PokeBall from "./PokeBall";

const HEADSHOT = "headshot.jpg"

const STATS = [
  { k: "SCHOOL", v: "UC Riverside" },
  { k: "DEGREE", v: "B.S. Info Systems" },
  { k: "GPA", v: "3.5 / 4.0" },
  { k: "GRAD", v: "June 2026" },
  { k: "LANG", v: "EN / VI / ES" },
  { k: "REGION", v: "Ventura CA" },
];

export default function TrainerCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* holographic glow behind card */}
      <div
        className="absolute -inset-3 rounded-2xl blur-2xl opacity-50"
        style={{ background: "linear-gradient(135deg, rgba(238,21,21,0.35), rgba(255,203,5,0.25), rgba(59,76,202,0.35))" }}
        aria-hidden="true"
      />

      {/* classic yellow card frame */}
      <div className="relative rounded-xl p-2 bg-[#FFCB05] shadow-[0_0_40px_rgba(255,203,5,0.22)]">
        <div className="rounded-lg bg-[#0E0E0E] border border-[#FFCB05]/40 overflow-hidden">
          {/* header: name + level + type icon */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
            <span className="press-start text-[9px] text-white tracking-wide">ANDREW DUONG</span>
            <div className="flex items-center gap-1.5">
              <span className="geist-mono text-[8px] text-white/40 tracking-widest">LVL</span>
              <span className="press-start text-[10px] text-poke-yellow">99</span>
              <PokeBall size={16} variant="poke" />
            </div>
          </div>

          {/* artwork window - clean, crisp, no overlays */}
          <div className="relative z-10 aspect-[4/3] m-2 overflow-hidden border border-[#FFCB05]/30 bg-black isolate">
            <img 
              src={HEADSHOT} 
              alt="Andrew Duong graduation portrait" 
              className="w-full h-full object-cover block" 
            />
            {/* name plate */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent px-3 py-2">
              <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">TRAINER · INFORMATION SYSTEMS</span>
            </div>
          </div>

          {/* ability + attack */}
          <div className="px-3 pb-2 space-y-2">
            <div className="border border-white/10 rounded p-2 bg-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="press-start text-[8px] text-white">CLOUD INFRASTRUCTURE</span>
                <span className="geist-mono text-[8px] text-poke-blue tracking-widest">ABILITY</span>
              </div>
              <p className="geist-mono text-[9px] text-white/60 leading-relaxed">
                Deploys secure, scalable systems with zero-downtime resilience across AWS, virtualization & container environments.
              </p>
            </div>
            <div className="border border-white/10 rounded p-2 bg-white/5">
              <div className="flex items-center justify-between mb-1">
                <span className="press-start text-[8px] text-white">DATA ANALYSIS</span>
                <span className="press-start text-[11px] text-poke-red">150</span>
              </div>
              <p className="geist-mono text-[9px] text-white/60 leading-relaxed">
                Translates complex datasets into actionable, risk-aware decisions and reporting.
              </p>
            </div>
          </div>

          {/* profile data grid */}
          <div className="px-3 py-2 border-t border-white/10 grid grid-cols-2 gap-x-4 gap-y-1.5">
            {STATS.map((s) => (
              <div key={s.k} className="flex justify-between">
                <span className="geist-mono text-[8px] text-white/40 tracking-widest">{s.k}</span>
                <span className="geist-mono text-[8px] text-white/80">{s.v}</span>
              </div>
            ))}
          </div>

          {/* weakness / resistance / retreat */}
          <div className="px-3 py-2 border-t border-white/10 flex items-center justify-between geist-mono text-[8px] text-white/50">
            <span>WKNESS: <span className="text-white/70">NONE</span></span>
            <span>RESIST: <span className="text-white/70">DOWNTIME</span></span>
            <span className="flex items-center gap-1">
              RETREAT:
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-poke-red" />
                <span className="w-2 h-2 rounded-full bg-white/20" />
              </span>
            </span>
          </div>

          {/* illustrator footer */}
          <div className="px-3 py-1.5 border-t border-white/10 flex justify-between">
            <span className="geist-mono text-[7px] text-white/30">Illus. UC Riverside &rsquo;26</span>
            <span className="geist-mono text-[7px] text-white/30">&copy;2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}