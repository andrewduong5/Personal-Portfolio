import React, { useState } from "react";
import PokeBall from "./PokeBall";

export default function Hero() {
  const [ballWiggle, setBallWiggle] = useState(false);

  const handlePressStart = (e) => {
    e.preventDefault();
    const target = document.querySelector("#about") || document.querySelector("#trainer-card");
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const triggerBallWiggle = () => {
    setBallWiggle(true);
    setTimeout(() => setBallWiggle(false), 800);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A] screen-glass dither-overlay pt-20"
    >
      {/* Animated Moving Retro Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div
          className="w-full h-full animate-grid-drift"
          style={{
            backgroundImage:
              "linear-gradient(rgba(253,253,253,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(253,253,253,0.25) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* Radial backlight spotlight */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-poke-red/10 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[
          { l: "12%", t: "18%", c: "bg-poke-red" },
          { l: "22%", t: "38%", c: "bg-poke-yellow" },
          { l: "32%", t: "58%", c: "bg-poke-blue" },
          { l: "48%", t: "78%", c: "bg-poke-red" },
          { l: "62%", t: "22%", c: "bg-poke-yellow" },
          { l: "74%", t: "42%", c: "bg-poke-blue" },
          { l: "84%", t: "62%", c: "bg-poke-red" },
          { l: "92%", t: "82%", c: "bg-poke-yellow" },
        ].map((p, i) => (
          <div
            key={i}
            className={`absolute w-1.5 h-1.5 rounded-sm ${p.c} opacity-60 animate-float shadow-[0_0_8px_currentColor]`}
            style={{ left: p.l, top: p.t, animationDelay: `${i * 0.4}s` }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-6 max-w-xl mx-auto">
        {/* Interactive Floating Poké Ball */}
        <div 
          className="flex justify-center mb-8 cursor-pointer select-none" 
          onClick={triggerBallWiggle}
          title="Click to catch!"
          aria-label="Interactive PokeBall"
        >
          <div className={`animate-float animate-poke-glow transition-transform duration-300 ${ballWiggle ? "scale-125 rotate-12" : "hover:scale-110"}`}>
            <PokeBall size={90} variant="poke" glow />
          </div>
        </div>

        {/* Version Badge with animated shine */}
        <div className="inline-flex items-center gap-3 justify-center mb-4 px-4 py-1 rounded-full border border-poke-red/40 bg-poke-red/5 backdrop-blur-sm relative overflow-hidden badge-shine">
          <span className="w-2 h-2 rounded-full bg-poke-red animate-ping" />
          <span className="press-start text-[8px] text-poke-red tracking-widest uppercase">TRAINER PROFILE v1.0</span>
        </div>

        <h1 className="press-start text-lg sm:text-2xl text-white mb-4 leading-relaxed tracking-wider transition-colors hover:text-poke-yellow">
          ANDREW DUONG
        </h1>

        <div className="inline-block px-3 py-1 mb-2 rounded bg-white/5 border border-white/10">
          <p className="geist-mono text-white/80 text-xs sm:text-sm tracking-widest font-semibold">
            INFORMATION SYSTEMS · CLOUD · AI
          </p>
        </div>
        
        <p className="geist-mono text-poke-yellow text-xs mb-10 tracking-widest opacity-90">
          ◆ REGION: UC RIVERSIDE ◆
        </p>

        {/* Interactive Retro Arcade Start Button */}
        <div>
          <a
            href="#about"
            onClick={handlePressStart}
            className="group relative inline-flex items-center gap-2 press-start text-[11px] text-white px-8 py-4 border-2 border-poke-red/80 bg-black/60 hover:bg-poke-red hover:border-poke-red hover:text-black transition-all duration-300 ease-out shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.8)] transform active:scale-95 cursor-pointer overflow-hidden"
            aria-label="Start portfolio"
          >
            <span className="animate-press-flash">▶</span>
            <span>PRESS START</span>
          </a>
        </div>
      </div>

      {/* Retro Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="geist-mono text-[9px] text-white/40 tracking-widest">SCROLL TO EXPLORE</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-poke-red via-poke-yellow to-transparent animate-bounce" />
      </div>
    </section>
  );
}