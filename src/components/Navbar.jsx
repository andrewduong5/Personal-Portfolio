import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "START", targetId: "hero" },
  { label: "PROFILE", targetId: "about" },
  { label: "ADVENTURE", targetId: "experience" },
  { label: "FIELD NOTES", targetId: "projects" },
  { label: "SKILL-DEX", targetId: "skills" },
  { label: "BADGES", targetId: "badges" },
  { label: "LINK CABLE", targetId: "contact" },
];

export default function Navbar({ onNavigate, activeId }) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleLinkClick = (targetId) => {
    setOpen(false);
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const target = document.getElementById(targetId);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
        <button
          onClick={() => handleLinkClick("hero")}
          className="press-start text-[8px] text-white/60 tracking-widest hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
        >
          <span className="text-poke-red">●</span> ANDREW.DUONG
        </button>

        <div className="flex items-center gap-4">
          <span className="geist-mono text-[10px] text-white/40 hidden sm:inline">
            {time}
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="press-start text-[9px] text-white hover:text-white/70 transition-all selection-bracket px-3 py-2 border border-white/30 hover:border-white/60 flex items-center gap-1 cursor-pointer"
            aria-expanded={open}
            aria-label="Open navigation menu"
          >
            {open ? <X size={10} /> : <Menu size={10} />} MENU
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed top-[52px] right-0 z-50 w-56 bg-[#0A0A0A] border border-white/20 border-t-0 shadow-2xl">
          {LINKS.map((l) => (
            <button
              key={l.targetId}
              onClick={() => handleLinkClick(l.targetId)}
              className={`w-full text-left block press-start text-[9px] px-4 py-3 border-b border-white/10 transition-colors cursor-pointer ${
                activeId === l.targetId
                  ? "text-poke-yellow bg-white/10"
                  : "text-white/70 hover:text-poke-yellow hover:bg-white/5"
              }`}
            >
              ▶ {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}