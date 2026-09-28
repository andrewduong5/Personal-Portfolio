import React, { useState } from "react";
import { ArrowDownRight, Sparkles, Terminal, Swords, Shield, MapPin, Play } from "lucide-react";
import PokeBall from "./PokeBall";

export default function Hero({ onStartClick }) {
  const [battleState, setBattleState] = useState("idle");

  const handleStartTransition = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      const target = document.querySelector("#about") || document.querySelector("#trainer-card");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleEncounter = () => {
    if (battleState !== "idle") return;
    setBattleState("summoning");

    setTimeout(() => {
      setBattleState("challenged");
      setTimeout(() => {
        handleStartTransition();
      }, 1200);
    }, 600);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between relative overflow-hidden bg-[#0A0A0A] text-white pt-24 pb-10 px-6 sm:px-12 select-none"
    >
      {/* Subtle modern background grid */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none" 
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true" 
      />

      {/* Gentle ambient gradient orb */}
      <div
        className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-poke-red/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Editorial Status Bar */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between border-b border-white/10 pb-4 text-[11px] geist-mono text-white/50 tracking-wider">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-white/80 font-medium">TRAINER ID: #02026</span>
          <span className="text-white/30 hidden sm:inline">|</span>
          <span className="hidden sm:inline text-white/50">SYS.VER 3.5</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="hidden md:flex items-center gap-1.5 text-poke-yellow">
            <MapPin size={12} /> VENTURA, CA · UCR ALUM
          </span>
          <span className="press-start text-[8px] text-poke-red tracking-widest uppercase">
            STOP 01 // ROSTER
          </span>
        </div>
      </div>

      {/* Main Hero Body: Split Editorial Layout */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
        
        {/* Left Column: Clean, confident typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur-md mb-6">
            <Sparkles size={11} className="text-poke-yellow" />
            <span className="geist-mono text-[10px] sm:text-xs text-white/70 tracking-widest uppercase">
              Cloud Infrastructure · Systems · Security
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.08] mb-4 text-white">
            ANDREW <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
              DUONG.
            </span>
          </h1>

          <p className="geist-mono text-sm sm:text-base text-white/65 max-w-lg leading-relaxed mb-8">
            Information Systems specialist exploring scalable networks, distributed homelabs, and intelligent software systems. Designed with the precision of an engineer and the heart of a trainer.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={handleEncounter}
              disabled={battleState !== "idle"}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 bg-poke-red text-black font-semibold text-xs sm:text-sm rounded-full tracking-wide hover:bg-white hover:text-black transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(239,68,68,0.35)] cursor-pointer"
            >
              <Play size={13} className="fill-current" />
              <span>{battleState === "idle" ? "START ENCOUNTER" : "ENTERING BATTLE..."}</span>
            </button>

            <button
              type="button"
              onClick={handleStartTransition}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/15 hover:border-white/40 bg-white/[0.02] text-xs sm:text-sm geist-mono text-white/80 hover:text-white transition-all duration-200"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight size={14} className="text-white/50" />
            </button>
          </div>
        </div>

        {/* Right Column: Clean Interactive Pokéball Console */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-[340px] bg-[#121212]/90 border border-white/15 rounded-2xl p-6 backdrop-blur-xl shadow-2xl relative group">
            {/* Header info bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
              <span className="press-start text-[8px] text-white/50 tracking-wider">
                COMPANION DECK
              </span>
              <span className="geist-mono text-[10px] text-poke-yellow font-bold tracking-widest">
                LVL. 99
              </span>
            </div>

            {/* Pokéball Stage with smooth organic hover */}
            <div className="flex flex-col items-center py-4">
              <div
                onClick={handleEncounter}
                className={`relative cursor-pointer transition-all duration-500 ${
                  battleState === "idle"
                    ? "hover:scale-105 active:scale-95"
                    : battleState === "summoning"
                    ? "scale-115 rotate-12 brightness-125"
                    : "scale-110"
                }`}
                title="Tap to challenge"
              >
                {/* Glow ring */}
                <div className="absolute -inset-3 bg-poke-red/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <PokeBall size={100} variant="poke" glow={battleState !== "idle"} />
              </div>

              {/* Status dialogue cue */}
              <div className="mt-5 text-center">
                {battleState === "idle" && (
                  <p className="geist-mono text-xs text-white/60 group-hover:text-poke-yellow transition-colors">
                    Click Pokéball to initiate battle
                  </p>
                )}
                {battleState === "summoning" && (
                  <p className="press-start text-[8px] text-poke-red tracking-widest animate-pulse">
                    SUMMONING TRAINER...
                  </p>
                )}
                {battleState === "challenged" && (
                  <p className="press-start text-[8px] text-poke-yellow tracking-widest animate-bounce">
                    BATTLE ENGAGED!
                  </p>
                )}
              </div>
            </div>

            {/* Spec tags at bottom */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-white/10 geist-mono text-[10px]">
              <div className="flex items-center gap-1.5 text-white/50">
                <Shield size={11} className="text-poke-blue" />
                <span>SPEC: SYS_ENG</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/50 justify-end">
                <Terminal size={11} className="text-poke-yellow" />
                <span>STACK: REACT/AWS</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Ribbon */}
      <div className="max-w-6xl w-full mx-auto flex items-center justify-between border-t border-white/10 pt-4 text-[10px] geist-mono text-white/40">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-poke-red rounded-full" />
          <span>SCROLL TO READ DOSSIER</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 tracking-widest">
          <span>[ ↓ ARCHITECTURE & BATTLE ARENA ]</span>
        </div>
      </div>
    </section>
  );
}