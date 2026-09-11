import React, { useState } from "react";
import { Swords, Sparkles } from "lucide-react";
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
      }, 1500);
    }, 700);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0A0A0A] screen-glass dither-overlay pt-20 select-none"
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
        {/* Interactive Pokéball Throw / Summon */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div
            onClick={handleEncounter}
            className={`cursor-pointer select-none transition-transform duration-300 relative ${
              battleState === "idle" ? "hover:scale-110 active:scale-95" : ""
            }`}
            title={battleState === "idle" ? "Click to initiate battle!" : ""}
            aria-label="Initiate Trainer Battle"
          >
            {battleState !== "idle" && (
              <div className="absolute -inset-4 pointer-events-none flex items-center justify-center">
                <div className="w-28 h-28 bg-poke-red/40 rounded-full blur-xl animate-ping" />
              </div>
            )}

            <div
              className={`transition-all duration-500 ${
                battleState === "idle"
                  ? "animate-float animate-poke-glow"
                  : battleState === "summoning"
                  ? "scale-125 -translate-y-4 rotate-180 filter brightness-150 drop-shadow-[0_0_30px_rgba(239,68,68,1)]"
                  : "scale-110 filter drop-shadow-[0_0_30px_rgba(250,204,21,0.9)]"
              }`}
            >
              <PokeBall size={92} variant="poke" glow={battleState !== "idle"} />
            </div>
          </div>

          {/* Cue indicator under Pokéball */}
          <div className="h-7 mt-3 flex items-center justify-center">
            {battleState === "idle" && (
              <span className="press-start text-[7px] text-white/40 tracking-wider animate-pulse flex items-center gap-1.5">
                <Swords size={11} className="text-poke-red" />
                [ CLICK BALL TO INITIATE BATTLE ]
              </span>
            )}
            {battleState === "summoning" && (
              <span className="press-start text-[7px] text-poke-red tracking-widest animate-bounce">
                ENTERING BATTLE...
              </span>
            )}
            {battleState === "challenged" && (
              <span className="press-start text-[8px] text-poke-yellow tracking-widest flex items-center gap-1.5 animate-pulse">
                <Sparkles size={11} /> BATTLE COMMENCED!
              </span>
            )}
          </div>
        </div>

        {/* RPG Battle Dialogue Box */}
        {battleState === "challenged" ? (
          <div className="mb-6 p-5 border-2 border-poke-red bg-black/95 rounded-sm shadow-[0_0_30px_rgba(239,68,68,0.4)] animate-screenSlideUp text-left">
            <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-poke-red animate-ping" />
              <p className="press-start text-[8px] text-poke-red tracking-widest">
                VS. TRAINER ANDREW
              </p>
            </div>
            <p className="geist-mono text-xs sm:text-sm text-white/95 leading-relaxed">
              <span className="text-poke-yellow font-bold">Trainer ANDREW</span> wants to battle! Loading Trainer Card & Pokédex records...
            </p>
          </div>
        ) : (
          <>
            {/* Version Badge */}
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

            <p className="geist-mono text-poke-yellow text-xs mb-8 tracking-widest opacity-90">
              ◆ REGION: UC RIVERSIDE ◆
            </p>

            {/* Press Start button */}
            <div>
              <button
                type="button"
                onClick={handleEncounter}
                className="group relative inline-flex items-center gap-2 press-start text-[11px] text-white px-8 py-4 border-2 border-poke-red/80 bg-black/60 hover:bg-poke-red hover:border-poke-red hover:text-black transition-colors duration-150 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.8)] active:scale-90 active:translate-y-0.5 cursor-pointer select-none"
                aria-label="Start portfolio"
              >
                <span className="animate-press-flash">▶</span>
                <span>PRESS START</span>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Retro HUD prompt indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="geist-mono text-[9px] text-white/40 tracking-widest">USE HUD CONTROLLER OR KEYS</span>
        <div className="w-0.5 h-6 bg-gradient-to-b from-poke-red via-poke-yellow to-transparent animate-bounce" />
      </div>
    </section>
  );
}