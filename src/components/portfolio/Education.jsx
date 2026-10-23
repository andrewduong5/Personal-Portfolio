import { GraduationCap, BadgeCheck, ArrowUpRight } from "lucide-react";
import { education, certifications } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SpotlightCard from "@/components/portfolio/SpotlightCard";

export default function Education() {
  return (
    <section id="credentials" className="border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="07" label="Credentials" title="Education & certifications." />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <SpotlightCard className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
            <GraduationCap className="h-5 w-5 text-cyan-400" />
            <h3 className="mt-3 text-lg font-semibold text-slate-50">{education.school}</h3>
            <p className="text-sm text-cyan-300">{education.degree}</p>
            <p className="mt-1 font-mono text-[11px] text-slate-500">
              {education.location} · {education.period} · GPA {education.gpa}
            </p>
            <p className="mb-2 mt-5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              Relevant coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((c) => (
                <span key={c} className="rounded-full border border-zinc-700 bg-zinc-950/60 px-3 py-1 text-xs text-slate-300">
                  {c}
                </span>
              ))}
            </div>
          </SpotlightCard>

          <div className="grid gap-4">
            {certifications.map((c) => (
              <a key={c.name} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
                <SpotlightCard className="rounded-2xl border border-emerald-400/20 bg-zinc-900/60 p-5 transition-shadow hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.5)]">
                  <div className="flex items-start justify-between gap-3">
                    <BadgeCheck className="h-5 w-5 text-emerald-400" />
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">
                      View badge on Credly <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-50">{c.name}</h3>
                  <p className="font-mono text-[11px] text-emerald-300">{c.status}</p>
                  <p className="mt-1 text-xs text-slate-500">{c.desc}</p>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}