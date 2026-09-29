import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Terminal } from "lucide-react";

// TCG Pocket Holographic Overlay Component
function GoldCard() {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -25;
      const rotateY = ((x - centerX) / centerX) * 25;

      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;

      card.style.setProperty("--rx", `${rotateX}deg`);
      card.style.setProperty("--ry", `${rotateY}deg`);
      card.style.setProperty("--px", `${px}%`);
      card.style.setProperty("--py", `${py}%`);
      card.style.setProperty("--opacity", "1");
    };

    const handleMouseEnter = () => setIsHovered(true);

    const handleMouseLeave = () => {
      setIsHovered(false);
      card.style.setProperty("--rx", "0deg");
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--opacity", "0");
      card.style.setProperty("--px", "50%");
      card.style.setProperty("--py", "50%");
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
    card.style.setProperty("--opacity", "0");
    card.style.setProperty("--px", "50%");
    card.style.setProperty("--py", "50%");

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="perspective-[1500px] w-full max-w-[340px] aspect-[2.5/3.5] mx-auto z-20 group">
      <div
        ref={cardRef}
        className="w-full h-full relative rounded-[18px] cursor-pointer preserve-3d transition-[transform,box-shadow] duration-[100ms] ease-out shadow-2xl"
        style={{
          transform: "rotateX(var(--rx)) rotateY(var(--ry))",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8), calc(var(--ry) * -1px) calc(var(--rx) * 1px) 25px rgba(250, 204, 21, 0.4)",
        }}
      >
        <img 
          src="/GoldCard.avif" 
          alt="Mew ex Gold Secret Rare" 
          className="absolute inset-0 w-full h-full object-cover rounded-[18px]"
        />

        {/* IDLE SHINE LAYER */}
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
            animation: "idleShine 6s linear infinite",
          }}
        />

        {/* GLARE LAYER */}
        <div
          className="absolute inset-0 rounded-[18px] pointer-events-none transition-opacity duration-300 mix-blend-color-dodge z-10"
          style={{
            opacity: "var(--opacity, 0)",
            background: `
              radial-gradient(
                farthest-corner circle at var(--px) var(--py), 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(255, 255, 255, 0.3) 20%, 
                transparent 50%
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

        {/* DIAGONAL TEXTURE */}
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
      className="min-h-screen flex items-center bg-[#0A0A0A] text-white pt-20 pb-10 px-6 sm:px-12 relative overflow-hidden selection:bg-white selection:text-black"
    >
      <style>
        {`
          @keyframes blurReveal {
            0% { opacity: 0; transform: translateY(15px); filter: blur(8px); }
            100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
          }
          .animate-reveal {
            opacity: 0;
            animation: blurReveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          }

          @keyframes idleShine {
            0% { background-position: -200% 0%; }
            100% { background-position: 200% 0%; }
          }

          /* Faster, smooth sweep for the metallic text */
          @keyframes textGlistenSweep {
            0% { background-position: 200% center; }
            100% { background-position: -200% center; }
          }
          .animate-infinite-glisten {
            background-image: linear-gradient(
              90deg,
              #ffffff 0%,
              #ffffff 30%,
              #a3a3a3 40%,
              #facc15 50%,
              #a3a3a3 60%,
              #ffffff 70%,
              #ffffff 100%
            );
            background-size: 200% auto;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
            animation: textGlistenSweep 7s linear infinite;
          }

          /* Gentle breathing opacity */
          @keyframes pulseSoftOpacity {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
          .animate-infinite-pulse {
            animation: pulseSoftOpacity 6s ease-in-out infinite;
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 py-10">
        
        <div className="lg:col-span-7 flex flex-col items-start">
          
          <div 
            className="animate-reveal inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/20 bg-white/[0.05] mb-6 backdrop-blur-md"
            style={{ animationDelay: "0.1s" }}
          >
            <Terminal size={12} className="text-white" />
            <span className="geist-mono text-[11px] text-white/90 tracking-widest uppercase font-semibold">
              Systems & Infrastructure
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black tracking-tight mb-6 leading-[1.05]">
            <span className="animate-reveal block" style={{ animationDelay: "0.2s" }}>
              ANDREW
            </span>
            {/* WRAPPED: Now the reveal animation and the glisten animation are on separate layers! */}
            <span className="animate-reveal block" style={{ animationDelay: "0.3s" }}>
              <span className="animate-infinite-glisten block">
                DUONG.
              </span>
            </span>
          </h1>

          {/* WRAPPED: Same here, reveal is on the div, pulse is on the paragraph */}
          <div className="animate-reveal max-w-lg mb-10" style={{ animationDelay: "0.4s" }}>
            <p className="animate-infinite-pulse geist-mono text-sm sm:text-base text-white/90 leading-relaxed">
              Information Systems specialist exploring scalable networks, distributed homelabs, and intelligent software systems. Designed with the precision of an engineer and the heart of a trainer.
            </p>
          </div>

          <button
            onClick={handleStartTransition}
            className="animate-reveal group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full hover:bg-neutral-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] transition-all duration-300 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            style={{ animationDelay: "0.5s" }}
          >
            <span className="geist-mono text-xs font-bold tracking-[0.15em] uppercase">
              Explore Work
            </span>
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight size={14} className="text-white" />
            </div>
          </button>
        </div>

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