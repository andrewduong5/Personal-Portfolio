import React, { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";

const LINKEDIN = "https://www.linkedin.com/in/andrew-duong85";
const GITHUB = "https://github.com/andrewduong5";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const t = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="bg-[#070707] border-t border-white/10 py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: trainer since */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-poke-red animate-pulse" />
            <span className="press-start text-[8px] text-white/70 tracking-widest">
              TRAINER SINCE 2004
            </span>
          </div>

          {/* Center: social cluster */}
          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-white/70 hover:text-poke-blue transition-colors"
            >
              <Linkedin size={26} />
            </a>
            <div className="w-px h-6 bg-white/15" />
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Github size={26} />
            </a>
          </div>

          {/* Right: system time + status */}
          <div className="flex items-center gap-4">
            <span className="geist-mono text-[10px] text-white/40 tracking-widest">
              {time}
            </span>
            <span className="geist-mono text-[10px] text-poke-green flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-poke-green animate-pulse" />
              STATUS: ONLINE
            </span>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5 text-center">
          <p className="geist-mono text-[9px] text-white/30 tracking-widest">
            © {new Date().getFullYear()} ANDREW DUONG · PORTFOLIO v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}