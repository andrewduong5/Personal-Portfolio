import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, ChevronDown, Compass, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrainerProfile from "@/components/TrainerProfile";
import AdventureLog from "@/components/AdventureLog";
import FieldNotes from "@/components/FieldNotes";
import SkillDex from "@/components/SkillDex";
import Badges from "@/components/Badges";
import LinkCable from "@/components/LinkCable";
import Footer from "@/components/Footer";
import PokeRadio from "@/components/PokeRadio";

const SECTIONS = [
  { id: "hero", label: "START", title: "TITLE SCREEN", component: Hero },
  { id: "about", label: "01", title: "TRAINER PROFILE", component: TrainerProfile },
  { id: "experience", label: "02", title: "ADVENTURE LOG", component: AdventureLog },
  { id: "projects", label: "03", title: "FIELD NOTES", component: FieldNotes },
  { id: "skills", label: "04", title: "SKILL-DEX", component: SkillDex },
  { id: "badges", label: "05", title: "BADGES EARNED", component: Badges },
  { id: "contact", label: "06", title: "LINK CABLE", component: LinkCable },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionState, setTransitionState] = useState("active"); // "active" | "exiting" | "entering"
  const [direction, setDirection] = useState("next");
  const [showMenu, setShowMenu] = useState(false);
  const isBusy = useRef(false);

  const goToSection = (newIndex) => {
    if (newIndex === currentIndex || isBusy.current) return;
    if (newIndex < 0 || newIndex >= SECTIONS.length) return;

    isBusy.current = true;
    const moveDir = newIndex > currentIndex ? "next" : "prev";
    setDirection(moveDir);
    setShowMenu(false);

    // Phase 1: Slow deliberate exit wipe
    setTransitionState("exiting");

    setTimeout(() => {
      // Phase 2: Switch component and reset viewport
      setCurrentIndex(newIndex);
      window.scrollTo({ top: 0, behavior: "instant" });
      setTransitionState("entering");

      // Phase 3: Smoothly enter new screen
      requestAnimationFrame(() => {
        setTimeout(() => {
          setTransitionState("active");
          isBusy.current = false;
        }, 60);
      });
    }, 700);
  };

  const handleNext = () => goToSection(currentIndex + 1);
  const handlePrev = () => goToSection(currentIndex - 1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["input", "textarea"].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const CurrentComponent = SECTIONS[currentIndex].component;
  const currentSection = SECTIONS[currentIndex];

  let animationClass = "screen-active";
  if (transitionState === "exiting") {
    animationClass = direction === "next" ? "screen-exit-to-next" : "screen-exit-to-prev";
  } else if (transitionState === "entering") {
    animationClass = direction === "next" ? "screen-enter-from-next" : "screen-enter-from-prev";
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-poke-red selection:text-white relative overflow-x-hidden">
      {/* Scanline CRT overlay */}
      <div className="scanline" aria-hidden="true" />

      {/* Ambient glow accents */}
      <div className="fixed -top-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-poke-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed top-1/2 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-poke-blue/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Fixed Navbar */}
      <Navbar
        activeId={currentSection.id}
        onNavigate={(targetId) => {
          const found = SECTIONS.findIndex((s) => s.id === targetId);
          if (found !== -1) goToSection(found);
        }}
      />

      {/* Main Viewport Container */}
      <main className="relative z-10 min-h-[calc(100vh-80px)] pt-20 pb-28">
        <div className={`screen-wrapper ${animationClass}`}>
          <CurrentComponent onStartClick={handleNext} />
        </div>
      </main>

      {/* 📻 RETRO POKÉ-RADIO PLAYER */}
      <PokeRadio />

      {/* 🎮 RETRO ARCADE CONTROLLER HUD */}
      <aside
        aria-label="Navigation HUD"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 select-none"
      >
        {/* Quick Jump Route Menu */}
        {showMenu && (
          <div className="absolute bottom-16 right-0 w-60 sm:w-64 bg-[#0F0F0F]/95 backdrop-blur-md border-2 border-poke-red/80 p-3 rounded-sm shadow-[0_0_25px_rgba(239,68,68,0.35)]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
              <span className="press-start text-[8px] text-poke-yellow">SELECT ROUTE</span>
              <span className="geist-mono text-[9px] text-white/40">{currentIndex + 1}/7</span>
            </div>
            <div className="space-y-1">
              {SECTIONS.map((sec, idx) => (
                <button
                  key={sec.id}
                  onClick={() => goToSection(idx)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-sm flex items-center justify-between transition-colors cursor-pointer ${
                    idx === currentIndex
                      ? "bg-poke-red text-black font-bold"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="press-start text-[7px] flex items-center gap-2">
                    {idx === currentIndex && <Play size={8} className="fill-current" />}
                    {sec.title}
                  </span>
                  <span className="geist-mono text-[9px] opacity-75">{sec.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Page Counter Indicator */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-sm border border-white/20 bg-black/85 backdrop-blur-md hover:border-poke-yellow hover:bg-white/5 transition-all text-left shadow-lg cursor-pointer group"
          title="Click to select route"
        >
          <Compass size={14} className="text-poke-yellow group-hover:rotate-45 transition-transform duration-300" />
          <div>
            <p className="press-start text-[6px] text-white/40">PAGE</p>
            <p className="geist-mono text-xs font-bold text-white tracking-wider">
              0{currentIndex + 1} <span className="text-white/30 font-normal">/ 0{SECTIONS.length}</span>
            </p>
          </div>
        </button>

        {/* D-Pad Controls */}
        <div className="flex items-center bg-black/90 border-2 border-white/20 p-1 rounded-sm shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0 || transitionState !== "active"}
            className={`p-2.5 rounded-sm transition-all flex items-center justify-center cursor-pointer active:scale-90 ${
              currentIndex === 0
                ? "opacity-25 cursor-not-allowed"
                : "hover:border-poke-blue/50 hover:bg-poke-blue/10 hover:text-poke-blue text-white"
            }`}
            aria-label="Previous page"
          >
            <ChevronUp size={18} strokeWidth={2.5} />
          </button>

          <div className="w-px h-6 bg-white/15 mx-1" />

          <button
            onClick={handleNext}
            disabled={currentIndex === SECTIONS.length - 1 || transitionState !== "active"}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-sm border transition-all flex items-center gap-2 cursor-pointer active:scale-90 ${
              currentIndex === SECTIONS.length - 1
                ? "opacity-25 cursor-not-allowed border-transparent"
                : "border-poke-red/80 bg-poke-red/10 text-white hover:bg-poke-red hover:text-black shadow-[0_0_12px_rgba(239,68,68,0.4)]"
            }`}
            aria-label="Next page"
          >
            <span className="press-start text-[8px] tracking-wider font-bold">NEXT</span>
            <ChevronDown size={16} strokeWidth={2.5} />
          </button>
        </div>
      </aside>

      {/* Footer displays on final section */}
      {currentIndex === SECTIONS.length - 1 && <Footer />}
    </div>
  );
}