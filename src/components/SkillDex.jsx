import React, { useState } from "react";
import { Database, Cloud, Target, Sparkles, Activity } from "lucide-react";
import PokeBall from "./PokeBall";
import {
  PythonIcon, SqlIcon, JavaScriptIcon, CppIcon, PowerShellIcon,
  AwsIcon, ProxmoxIcon, DockerIcon, WindowsIcon, LinuxIcon,
  MetaIcon, AbTestingIcon, KpiIcon, ExcelIcon, LlmEvalIcon,
} from "./TechIcons";

const SKILLS = {
  DATA: [
    { name: "Python", Icon: PythonIcon, power: 90, desc: "Scripting, automation, data processing & backend services." },
    { name: "SQL", Icon: SqlIcon, power: 85, desc: "Relational query design, joins, aggregation & optimization." },
    { name: "JavaScript", Icon: JavaScriptIcon, power: 80, desc: "Frontend interactivity, Node tooling & API integration." },
    { name: "C++", Icon: CppIcon, power: 75, desc: "Systems-level programming & performance-critical logic." },
    { name: "PowerShell", Icon: PowerShellIcon, power: 85, desc: "Windows automation, AD scripting & admin task batching." },
  ],
  CLOUD: [
    { name: "AWS", Icon: AwsIcon, power: 88, desc: "EC2, S3, IAM & cloud practitioner foundations." },
    { name: "Proxmox VE", Icon: ProxmoxIcon, power: 92, desc: "Self-hosted virtualization & cluster management." },
    { name: "Docker", Icon: DockerIcon, power: 82, desc: "Containerized environments & reproducible builds." },
    { name: "Windows Server", Icon: WindowsIcon, power: 85, desc: "Active Directory, GPO, DNS & enterprise admin." },
    { name: "Linux", Icon: LinuxIcon, power: 88, desc: "Bash, system administration & security hardening." },
  ],
  STRATEGY: [
    { name: "Meta Ads Manager", Icon: MetaIcon, power: 95, desc: "Campaign build, audience targeting & budget pacing." },
    { name: "A/B Testing", Icon: AbTestingIcon, power: 90, desc: "Creative & funnel experiments for ROAS lift." },
    { name: "KPI Tracking", Icon: KpiIcon, power: 88, desc: "Performance dashboards & reporting cadence." },
    { name: "Excel / Sheets", Icon: ExcelIcon, power: 92, desc: "Modeling, pivot analysis & data wrangling." },
    { name: "LLM Evaluation", Icon: LlmEvalIcon, power: 90, desc: "Response grading, reasoning checks & feedback loops." },
  ],
};

const CAT_META = {
  DATA: { color: "text-poke-red", border: "border-poke-red", bg: "bg-poke-red", glow: "shadow-[0_0_15px_rgba(239,68,68,0.4)]", ball: "poke", Icon: Database },
  CLOUD: { color: "text-poke-blue", border: "border-poke-blue", bg: "bg-poke-blue", glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]", ball: "net", Icon: Cloud },
  STRATEGY: { color: "text-poke-yellow", border: "border-poke-yellow", bg: "bg-poke-yellow", glow: "shadow-[0_0_15px_rgba(250,204,21,0.4)]", ball: "quick", Icon: Target },
};

export default function SkillDex() {
  const [active, setActive] = useState({ cat: "DATA", idx: 0 });

  const currentList = SKILLS[active.cat];
  const current = currentList[active.idx];
  const meta = CAT_META[active.cat];

  return (
    <section id="skills" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      
      {/* Background neon glow */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-poke-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest flex items-center gap-1.5">
              <Sparkles size={11} className="animate-spin text-poke-yellow" />
              SECTION 04
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-poke-red animate-pulse" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">SKILL-DEX DATABASE</h2>
            <div className="hover:rotate-180 transition-transform duration-500 cursor-pointer">
              <PokeBall size={22} variant={meta.ball} />
            </div>
          </div>
          <p className="geist-mono text-[11px] text-white/40 mt-3 ml-8">
            Select an entry below to analyze stats & proficiencies
          </p>
        </div>

        {/* Category & Chip Grid */}
        <div className="space-y-8">
          {Object.entries(SKILLS).map(([cat, list]) => {
            const m = CAT_META[cat];
            const CatIcon = m.Icon;
            return (
              <div key={cat} className="group">
                <div className="flex items-center gap-2 mb-3">
                  <CatIcon size={14} className={m.color} />
                  <span className={`press-start text-[8px] tracking-widest ${m.color}`}>
                    {cat} TYPE
                  </span>
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-white/25 transition-colors" />
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {list.map((s, i) => {
                    const isSelected = active.cat === cat && active.idx === i;
                    const Icon = s.Icon;
                    return (
                      <button
                        key={s.name}
                        onClick={() => setActive({ cat, idx: i })}
                        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-sm border transition-all duration-300 transform active:scale-95 ${
                          isSelected
                            ? `${m.border} bg-white/10 ${m.glow} translate-y-[-2px] text-white`
                            : "border-white/15 bg-white/[0.02] text-white/70 hover:border-white/40 hover:bg-white/[0.06] hover:text-white"
                        }`}
                      >
                        <div className={`transition-transform duration-300 ${isSelected ? "scale-110" : ""}`}>
                          <Icon size={18} className="shrink-0" />
                        </div>
                        <span className="geist-mono text-xs font-medium tracking-wide">{s.name}</span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-poke-yellow animate-ping" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Pokédex Screen Detail */}
        <div className={`mt-10 border-2 ${meta.border} bg-[#0A0A0A] p-6 relative rounded-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden`}>
          {/* Subtle animated scanline */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.03] to-transparent h-16 w-full animate-grid-drift pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4 flex-1">
              <div className="shrink-0 border-2 border-white/20 p-3.5 bg-black/80 shadow-inner rounded-sm relative group">
                <current.Icon size={34} className="text-white transform group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-poke-red rounded-full animate-ping" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className={`press-start text-[7px] ${meta.color} border ${meta.border} px-2.5 py-1 bg-white/[0.03]`}>
                    TYPE: {active.cat}
                  </span>
                  <span className="geist-mono text-[10px] text-poke-yellow font-bold uppercase tracking-wider flex items-center gap-1">
                    <Activity size={12} /> LVL.{current.power}
                  </span>
                  <h3 className="press-start text-sm sm:text-base text-white tracking-wide">{current.name}</h3>
                </div>

                <p className="geist-mono text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl">
                  {current.desc}
                </p>

                {/* HP/EXP Stat Bar */}
                <div className="mt-4 max-w-md">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="press-start text-[7px] text-white/40">PROFICIENCY EXP</span>
                    <span className="geist-mono text-xs font-semibold text-white/90">{current.power}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out ${meta.bg}`}
                      style={{ width: `${current.power}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center pl-6 border-l border-white/10">
              <PokeBall size={48} variant={meta.ball} glow className="animate-float" />
              <span className="press-start text-[7px] text-white/30 mt-3 tracking-widest">DATA SCAN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}