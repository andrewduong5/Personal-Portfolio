import React from "react";
import PokeBall from "./PokeBall";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A] screen-glass dither-overlay pt-20"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(253,253,253,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(253,253,253,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { l: "10%", t: "15%", c: "bg-poke-red/50" },
          { l: "21%", t: "35%", c: "bg-poke-yellow/50" },
          { l: "32%", t: "55%", c: "bg-poke-blue/50" },
          { l: "43%", t: "75%", c: "bg-poke-red/50" },
          { l: "54%", t: "15%", c: "bg-poke-yellow/50" },
          { l: "65%", t: "35%", c: "bg-poke-blue/50" },
          { l: "76%", t: "55%", c: "bg-poke-red/50" },
          { l: "87%", t: "75%", c: "bg-poke-yellow/50" },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${p.c} animate-float`}
            style={{ left: p.l, top: p.t, animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-6">
        {/* Floating Poké Ball */}
        <div className="flex justify-center mb-8" aria-hidden="true">
          <div className="animate-float">
            <PokeBall size={80} variant="poke" glow />
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center mb-3" aria-hidden="true">
          <div className="h-px w-12 bg-poke-red/60" />
          <span className="press-start text-[7px] text-poke-red tracking-widest">PORTFOLIO v1.0</span>
          <div className="h-px w-12 bg-poke-red/60" />
        </div>

        <h1 className="press-start text-base md:text-xl text-white mb-4 leading-relaxed tracking-wide">
          ANDREW DUONG
        </h1>

        <p className="geist-mono text-white/50 text-sm mb-2 tracking-widest">
          INFORMATION SYSTEMS · CLOUD · AI
        </p>
        <p className="geist-mono text-poke-yellow text-xs mb-12 tracking-widest">
          ◆ TRAINER SINCE 2004 ◆
        </p>

        <a
          href="#about"
          className="press-start text-[10px] text-white selection-bracket px-6 py-3 border-2 border-poke-red/60 hover:border-poke-red hover:bg-poke-red/10 transition-all inline-block animate-press-flash"
          aria-label="Start portfolio"
        >
          ▶ PRESS START
        </a>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1">
        <span className="geist-mono text-[9px] text-white/30 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}