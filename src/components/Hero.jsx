import React, { useState, useEffect } from "react";
import { ArrowRight, Cpu, Globe, Terminal, ShieldCheck } from "lucide-react";
import PokeBall from "./PokeBall";

export default function Hero({ onStartClick }) {
  const [time, setTime] = useState("");

  // Live clock for that precise, technical Elaine Yu feel
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    if (onStartClick) {
      onStartClick();
    } else {
      const target = document.querySelector("#about");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between bg-[#0A0A0A] text-white px-6 sm:px-12 md:px-20 pt-28 pb-12 overflow-hidden selection:bg-white selection:text-black relative"
    >
      {/* Absolute Minimalist Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Light Wash */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      {/* Top Telemetry Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 text-[10px] geist-mono text-neutral-400 tracking-widest uppercase">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-poke-red animate-pulse" />
            SYS.ONLINE
          </span>
          <span className="hidden sm:inline text-neutral-700">|</span>
          <span className="hidden sm:flex items-center gap-1.5">
            <Globe size={12} className="text-neutral-500" />
            VENTURA, CA
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span>{time || "00:00:00"}</span>
          <span className="px-2 py-1 border border-white/10 rounded-sm text-neutral-300">
            ID: 02026
          </span>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center my-auto py-12 relative z-10">
        
        {/* Left Column: Massive, Clean Typography */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <div className="inline-flex items-center gap-2 mb-8">
            <Terminal size={14} className="text-poke-yellow" />
            <span className="geist-mono text-[11px] text-neutral-400 tracking-widest uppercase">
              Information Systems Engineer
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tighter leading-[1.05] text-white mb-8">
            ANDREW <br />
            <span className="text-neutral-500 hover:text-white transition-colors duration-700">
              DUONG.
            </span>
          </h1>

          <p className="geist-mono text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed mb-10">
            Bridging the gap between secure cloud infrastructure and scalable network automation. Designing high-performance systems with the precision of an engineer and the discipline of a trainer.
          </p>

          <button
            onClick={handleStart}
            className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 transition-all duration-300 active:scale-95"
          >
            <span className="geist-mono text-xs font-bold tracking-widest uppercase">
              Explore Profile
            </span>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} className="text-white" />
            </div>
          </button>
        </div>

        {/* Right Column: The "Glass Trainer Badge" Concept */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end perspective-1000">
          {/* 
            This represents a modern, high-tech Trainer Card / Employee Badge.
            No sprites. Pure typography, glassmorphism, and structural design.
          */}
          <div className="w-full max-w-[360px] aspect-[3/4] relative group animate-float">
            
            {/* Holographic glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-poke-red/20 via-transparent to-poke-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* The Physical Card */}
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.12] rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              
              {/* Giant faint Pokéball watermark */}
              <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
                <PokeBall size={240} variant="poke" />
              </div>

              {/* Card Header */}
              <div className="flex justify-between items-start relative z-10">
                <div className="w-10 h-10 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center">
                  <Cpu size={20} className="text-neutral-300" />
                </div>
                <div className="text-right">
                  <p className="geist-mono text-[9px] text-neutral-500 tracking-widest uppercase">
                    Clearance Level
                  </p>
                  <p className="geist-mono text-xs text-white font-bold tracking-wider mt-0.5">
                    LVL. 99
                  </p>
                </div>
              </div>

              {/* Card Mid-Section: Trainer Name & Specs */}
              <div className="relative z-10 mt-auto mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={14} className="text-poke-blue" />
                  <span className="geist-mono text-[10px] text-poke-blue tracking-widest uppercase font-semibold">
                    Verified Trainer
                  </span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-white mb-1">
                  Andrew Duong
                </h2>
                <p className="geist-mono text-[11px] text-neutral-400 tracking-widest uppercase">
                  B.S. Information Systems
                </p>
              </div>

              {/* Card Footer: Abstract Tech Barcode */}
              <div className="relative z-10 pt-5 border-t border-white/[0.08] flex justify-between items-end">
                <div className="flex flex-col gap-1">
                  <span className="geist-mono text-[8px] text-neutral-500 tracking-widest">
                    UC RIVERSIDE &bull; CLOUD &bull; SEC
                  </span>
                  {/* CSS Barcode simulation */}
                  <div className="flex gap-[2px] h-6 mt-1 opacity-60">
                    {[1, 3, 2, 5, 1, 4, 2, 2, 4, 1, 3, 2, 1].map((width, i) => (
                      <div key={i} className="bg-white" style={{ width: `${width}px` }} />
                    ))}
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <PokeBall size={14} variant="poke" />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Bottom Footer Border */}
      <div className="w-full max-w-7xl mx-auto border-t border-white/[0.08] pt-6 flex justify-between items-center text-[10px] geist-mono text-neutral-500 tracking-widest uppercase">
        <span>Portfolio &bull; v1.0.0</span>
        <span className="hidden sm:inline">Scroll to Initialize Sequence</span>
      </div>
    </section>
  );
}