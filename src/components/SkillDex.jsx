import React, { useState } from "react";
import { Database, Cloud, Target } from "lucide-react";
import PokeBall from "./PokeBall";
import {
  PythonIcon, SqlIcon, JavaScriptIcon, CppIcon, PowerShellIcon,
  AwsIcon, ProxmoxIcon, DockerIcon, WindowsIcon, LinuxIcon,
  MetaIcon, AbTestingIcon, KpiIcon, ExcelIcon, LlmEvalIcon,
} from "./TechIcons";

const SKILLS = {
  DATA: [
    { name: "Python", Icon: PythonIcon, desc: "Scripting, automation, data processing & backend services." },
    { name: "SQL", Icon: SqlIcon, desc: "Relational query design, joins, aggregation & optimization." },
    { name: "JavaScript", Icon: JavaScriptIcon, desc: "Frontend interactivity, Node tooling & API integration." },
    { name: "C++", Icon: CppIcon, desc: "Systems-level programming & performance-critical logic." },
    { name: "PowerShell", Icon: PowerShellIcon, desc: "Windows automation, AD scripting & admin task batching." },
  ],
  CLOUD: [
    { name: "AWS", Icon: AwsIcon, desc: "EC2, S3, IAM & cloud practitioner foundations." },
    { name: "Proxmox VE", Icon: ProxmoxIcon, desc: "Self-hosted virtualization & cluster management." },
    { name: "Docker", Icon: DockerIcon, desc: "Containerized environments & reproducible builds." },
    { name: "Windows Server", Icon: WindowsIcon, desc: "Active Directory, GPO, DNS & enterprise admin." },
    { name: "Linux", Icon: LinuxIcon, desc: "Bash, system administration & security hardening." },
  ],
  STRATEGY: [
    { name: "Meta Ads Manager", Icon: MetaIcon, desc: "Campaign build, audience targeting & budget pacing." },
    { name: "A/B Testing", Icon: AbTestingIcon, desc: "Creative & funnel experiments for ROAS lift." },
    { name: "KPI Tracking", Icon: KpiIcon, desc: "Performance dashboards & reporting cadence." },
    { name: "Excel / Sheets", Icon: ExcelIcon, desc: "Modeling, pivot analysis & data wrangling." },
    { name: "LLM Evaluation", Icon: LlmEvalIcon, desc: "Response grading, reasoning checks & feedback loops." },
  ],
};

const CAT_META = {
  DATA: { color: "text-poke-red", border: "border-poke-red/50", ball: "poke", Icon: Database },
  CLOUD: { color: "text-poke-blue", border: "border-poke-blue/50", ball: "net", Icon: Cloud },
  STRATEGY: { color: "text-poke-yellow", border: "border-poke-yellow/50", ball: "quick", Icon: Target },
};

function Chip({ skill, active, onClick }) {
  const { name, Icon } = skill;
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 border px-3 py-2 transition-all ${
        active
          ? "border-white/70 bg-white/5"
          : "border-white/20 hover:border-white/50 hover:bg-white/5"
      }`}
    >
      <Icon size={18} className="shrink-0" />
      <span className="geist-mono text-xs text-white/80">{name}</span>
    </button>
  );
}

export default function SkillDex() {
  const [active, setActive] = useState({ cat: "DATA", idx: 0 });

  const currentList = SKILLS[active.cat];
  const current = currentList[active.idx];
  const meta = CAT_META[active.cat];

  return (
    <section id="skills" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 04</span>
          </div>
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-poke-red" />
            <h2 className="press-start text-sm md:text-base text-white tracking-wide">SKILL-DEX</h2>
            <PokeBall size={20} variant={meta.ball} />
          </div>
          <p className="geist-mono text-[10px] text-white/40 mt-3 ml-8">
            Click a skill to view its entry
          </p>
        </div>

        <div className="space-y-8">
          {Object.entries(SKILLS).map(([cat, list]) => {
            const m = CAT_META[cat];
            const CatIcon = m.Icon;
            return (
              <div key={cat}>
                <div className="flex items-center gap-2 mb-3">
                  <CatIcon size={14} className={m.color} />
                  <span className={`press-start text-[8px] tracking-widest ${m.color}`}>
                    {cat} TYPE
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {list.map((s, i) => (
                    <Chip
                      key={s.name}
                      skill={s}
                      active={active.cat === cat && active.idx === i}
                      onClick={() => setActive({ cat, idx: i })}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active entry detail */}
        <div className="mt-8 border border-white/15 p-6 relative corner-brackets min-h-[120px]">
          <div className="flex items-start gap-4">
            <div className="shrink-0 border border-white/20 p-3 bg-[#0A0A0A]">
              <current.Icon size={28} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`press-start text-[7px] ${meta.color} border ${meta.border} px-2 py-0.5`}>
                  {active.cat}
                </span>
                <h3 className="press-start text-sm text-white">{current.name}</h3>
              </div>
              <p className="geist-mono text-sm text-white/70 leading-relaxed">{current.desc}</p>
            </div>
            <PokeBall size={36} variant={meta.ball} className="hidden sm:block shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}