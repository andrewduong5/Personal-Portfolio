import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "PROFILE", href: "#about" },
  { label: "ADVENTURE", href: "#experience" },
  { label: "FIELD NOTES", href: "#projects" },
  { label: "SKILL-DEX", href: "#skills" },
  { label: "BADGES", href: "#badges" },
  { label: "LINK CABLE", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      const d = new Date();
      setTime(d.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0A0A0A]/90 backdrop-blur-sm border-b border-white/10">
        <a href="#hero" className="press-start text-[8px] text-white/60 tracking-widest hover:text-white transition-colors">
          <span className="text-poke-red">●</span> ANDREW.DUONG
        </a>
        <div className="flex items-center gap-4">
          <span className="geist-mono text-[10px] text-white/40 hidden sm:inline">
            {time}
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="press-start text-[9px] text-white hover:text-white/70 transition-all selection-bracket px-3 py-2 border border-white/30 hover:border-white/60 flex items-center gap-1"
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block press-start text-[9px] text-white/70 hover:text-poke-yellow hover:bg-white/5 px-4 py-3 border-b border-white/10 transition-colors"
            >
              ▶ {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}