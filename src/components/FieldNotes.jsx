import React from "react";
import { FolderGit2 } from "lucide-react";
import PokeBall from "./PokeBall";

const PROJECTS = [
  {
    type: "INFRASTRUCTURE",
    tag: "ADV",
    title: "ENTERPRISE IT & CYBER HOME LAB",
    desc: "Virtualized enterprise IT lab for hands-on exploration of infrastructure, networking, and system administration.",
    tech: ["Proxmox VE", "Windows Server", "Linux", "Docker", "Kali Linux"],
  },
  {
    type: "MOBILE APP",
    tag: "MID",
    title: "FRIDGEPAL",
    desc: "Food waste and budgeting app for college students — tracks inventory, alerts on expiration, and plans meals.",
    tech: ["Python", "C++", "JavaScript", "SQL", "AWS"],
  },
];

export default function FieldNotes() {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 03</span>
          </div>
          <div className="flex items-center gap-3">
            <FolderGit2 className="w-5 h-5 text-poke-blue" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">FIELD NOTES</h2>
            <PokeBall size={20} variant="friend" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="border border-white/15 p-6 relative hover:border-poke-blue/50 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="geist-mono text-[9px] text-white/40 tracking-widest">
                  {p.type}
                </span>
                <span className="press-start text-[7px] text-poke-yellow border border-poke-yellow/40 px-2 py-0.5">
                  {p.tag}
                </span>
              </div>
              <h3 className="press-start text-xs md:text-sm text-white mb-3 group-hover:text-poke-yellow transition-colors">
                {p.title}
              </h3>
              <p className="geist-mono text-xs text-white/60 leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="geist-mono text-[10px] text-white/70 border border-white/20 px-2 py-1 hover:border-poke-blue/60 hover:text-white transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-3 right-3 text-white/20 group-hover:text-poke-yellow transition-colors text-lg">
                ▼
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}