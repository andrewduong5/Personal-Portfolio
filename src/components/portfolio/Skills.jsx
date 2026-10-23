import { useState } from "react";
import { skills } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SkillRadar from "@/components/portfolio/SkillRadar";
import SkillBars from "@/components/portfolio/SkillBars";
import { cn } from "@/lib/utils";

const categories = Object.keys(skills);

export default function Skills() {
  const [active, setActive] = useState(categories[0]);
  const items = skills[active];

  return (
    <section id="skills" className="border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="06"
          label="Skills"
          title="Technical skills & languages."
          description="Filter by category. Bars show self-assessed relative proficiency."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="tablist">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-[11px] transition-colors",
                active === c
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300"
                  : "border-zinc-800 text-slate-400 hover:border-zinc-700 hover:text-slate-200"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 lg:grid-cols-2">
          <SkillRadar items={items} />
          <SkillBars items={items} categoryKey={active} />
        </div>
      </div>
    </section>
  );
}