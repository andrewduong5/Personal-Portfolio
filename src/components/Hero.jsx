import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Terminal, Shield } from "lucide-react";

// TCG Pocket Holographic Overlay Component - Tuned for Ultra-Smooth Mobile & PC Physics
function GoldCard() {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const processInput = (clientX, clientY, pointerType) => {
      const rect = card.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Detect if interaction is touch/mobile vs mouse and amplify sensitivity for touch
      const isTouch = pointerType === 'touch' || pointerType === 'pen';
      const sensitivity = isTouch ? 1.35 : 1.0; 

      const rotateX = ((centerY - y) / centerY) * 30 * sensitivity; 
      const rotateY = ((x - centerX) / centerX) * 30 * sensitivity;

      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;

      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
      card.style.setProperty("--px", `${px}%`);
      card.style.setProperty("--py", `${py}%`);
      card.style.setProperty("--opacity", "1");
    };

    const handlePointerMove = (e) => {
      processInput(e.clientX, e.clientY, e.pointerType);
    };

    const handlePointerOver = (e) => {
      setIsHovered(true);
      processInput(e.clientX, e.clientY, e.pointerType);
    };

    const handlePointerOut = () => {
      setIsHovered(false);
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--opacity", "0");
      card.style.setProperty("--px", "50%");
      card.style.setProperty("--py", "50%");
    };

    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerover", handlePointerOver);
    card.addEventListener("pointerout", handlePointerOut);
    card.addEventListener("touchcancel", handlePointerOut);
    
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--opacity", "0");
    card.style.setProperty("--px", "50%");
    card.style.setProperty("--py", "50%");

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerover", handlePointerOver);
      card.removeEventListener("pointerout", handlePointerOut);
      card.removeEventListener("touchcancel", handlePointerOut);
    };
  }, []); 

  return (
    <div className="perspective-[1200px] w-full max-w-[340px] aspect-[2.5/3.5] mx-auto z-20 group relative">
      {/* Ambient back-glow behind card */}
      <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-white/10 to-blue-500/20 rounded-[22px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div
        ref={cardRef}
        className={`w-full h-full relative rounded-[18px] cursor-pointer preserve-3d ${
          isHovered 
            ? "transition-[transform,box-shadow,opacity] duration-[100ms] ease-out" 
            : "transition-[transform,box-shadow,opacity] duration-[600ms] cubic-bezier(0.23, 1, 0.32, 1)"
        }`}
        style={{
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.95), calc(var(--ry) * -1px) calc(var(--rx) * 1px) 40px rgba(250, 204, 21, 0.4)",
          touchAction: "none" // Prevents mobile browser scrolling while inspecting the card
        }}
      >
        <img 
          src="/GoldCard.avif" 
          alt="Mew ex Gold Secret Rare" 
          className="absolute inset-0 w-full h-full object-cover rounded-[18px]"
        />

        {/* Continuous Idle Shine */}
        <div
          className={`absolute inset-0 rounded-[18px] pointer-events-none mix-blend-color-dodge transition-opacity duration-700 z-10 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
          style={{
            background: `linear-gradient(
              105deg,
              transparent 10%,
              rgba(255, 255, 255, 0.4) 20%,
              rgba(255, 230, 100, 0.8) 40%,
              rgba(255, 255, 255, 0.4) 60%,
              transparent 70%
            )`,
            backgroundSize: "200% 100%",
            animation: "idleShine 5s linear infinite",
          }}
        />

        {/* Interactive Pointer Glare */}
        <div
          className="absolute inset-0 rounded-[18px] pointer-events-none transition-opacity duration-300 mix-blend-color-dodge z-10"
          style={{
            opacity: "var(--opacity, 0)",
            background: `
              radial-gradient(
                farthest-corner circle at var(--px) var(--py), 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(255, 255, 255, 0.2) 30%, 
                transparent 60%
              ),
              linear-gradient(
                115deg, 
                transparent 0%, 
                rgba(255, 100, 150, 0.6) calc(var(--px) - 25%), 
                rgba(255, 255, 100, 0.8) calc(var(--px) - 10%), 
                rgba(100, 200, 255, 0.8) calc(var(--px)), 
                rgba(100, 200, 255, 0.6) calc(var(--px) + 10%), 
                transparent calc(var(--px) + 30%)
              )
            `
          }}
        />

        {/* Foil Texture */}
        <div 
          className="absolute inset-0 rounded-[18px] pointer-events-none mix-blend-overlay transition-opacity duration-300 z-20"
          style={{
            opacity: "calc(var(--opacity, 0) * 0.4)",
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.4) 3px, rgba(255,255,255,0.4) 4px)"
          }}
        />
      </div>
    </div>
  );
}

// Main Hero Layout
export default function Hero({ onStartClick }) {
  const handleStartTransition = () => {
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
      className="min-h-screen flex items-center bg-[#070707] text-white pt-20 pb-10 px-6 sm:px-12 relative overflow-hidden selection:bg-white selection:text-black"
    >
      <style>
        {`
          @keyframes cinematicReveal {
            0% { opacity: 0; transform: translateY(25px) scale(0.97); filter: blur(12px); }
            100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
          }
          .animate-reveal {
            opacity: 0;
            animation: cinematicReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          @keyframes ambientPulse {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.35; transform: scale(1.12); }
          }
          .animate-ambient-pulse {
            animation: ambientPulse 7s ease-in-out infinite;
          }

          @keyframes idleShine {
            0% { background-position: -200% 0%; }
            100% { background-position: 200% 0%; }
          }

          @keyframes diamondGlint {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          .animate-diamond-glint {
            background-image: linear-gradient(
              110deg,
              #ffffff 38%,
              #ffffff 44%,
              #fef08a 48%,
              #ffffff 52%,
              #ffffff 62%
            );
            background-size: 250% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: diamondGlint 3.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          }

          .scanlines {
            background: linear-gradient(
              to bottom,
              rgba(255,255,255,0),
              rgba(255,255,255,0) 50%,
              rgba(0, 0, 0, 0.3) 50%,
              rgba(0, 0, 0, 0.3)
            );
            background-size: 100% 4px;
          }
        `}
      </style>

      {/* Cybernetic ambient glow layers */}
      <div className="absolute -left-20 top-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-600/15 via-blue-600/10 to-transparent rounded-full blur-[120px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-gradient-to-bl from-purple-600/10 via-white/5 to-transparent rounded-full blur-[100px] pointer-events-none animate-ambient-pulse" style={{ animationDelay: "3.5s" }} />

      {/* Subtle Scanline Grid overlay */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1.5px,transparent_1.5px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-10">
        
        {/* Left Side: Professional Intro */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <div 
            className="animate-reveal inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/[0.06] mb-6 backdrop-blur-2xl shadow-[0_0_25px_rgba(255,255,255,0.06)] group cursor-default"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <Terminal size={13} className="text-white" />
            <span className="geist-mono text-[11px] text-white tracking-[0.25em] uppercase font-semibold">
              UCR BIS GRAD // AWS & COMPTIA A+
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tighter mb-6 leading-[1.02]">
            <span className="animate-reveal block text-neutral-400 font-light tracking-tight" style={{ animationDelay: "0.2s" }}>
              ANDREW
            </span>
            <span className="animate-reveal block drop-shadow-[0_15px_30px_rgba(255,255,255,0.15)]" style={{ animationDelay: "0.3s" }}>
              <span className="animate-diamond-glint block">
                DUONG.
              </span>
            </span>
          </h1>

          <div className="animate-reveal max-w-lg mb-10 relative" style={{ animationDelay: "0.4s" }}>
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-white via-amber-400 to-transparent rounded-full" />
            <p className="geist-mono text-sm sm:text-base text-neutral-300 leading-relaxed font-light pl-4 backdrop-blur-sm">
              Information Systems graduate from UC Riverside[cite: 3]. Certified AWS Cloud Practitioner and CompTIA A+ professional[cite: 3] expanding into cloud security and security analysis through hands-on labs and continuous learning.
            </p>
          </div>

          <div className="animate-reveal flex flex-wrap gap-4 items-center" style={{ animationDelay: "0.5s" }}>
            <button
              onClick={handleStartTransition}
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-100 transition-all duration-300 active:scale-95 shadow-[0_0_35px_rgba(255,255,255,0.25)] overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/70 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="geist-mono text-xs font-bold tracking-[0.2em] uppercase relative z-10">
                Explore Work
              </span>
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1.5 transition-transform relative z-10 shadow-md">
                <ArrowRight size={14} className="text-white" />
              </div>
            </button>

            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <Shield size={16} className="text-amber-400" />
              <span className="geist-mono text-[11px] text-neutral-400 tracking-wider uppercase">
                Cloud Security & Analysis Focus
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: The Ultra-Smooth Mobile/PC Interactive Gold Card */}
        <div 
          className="animate-reveal lg:col-span-5 flex justify-center lg:justify-end"
          style={{ animationDelay: "0.6s" }}
        >
          <GoldCard />
        </div>

      </div>
    </section>
  );
}