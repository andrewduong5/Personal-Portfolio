import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experience } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SpotlightCard from "@/components/portfolio/SpotlightCard";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="05" label="Experience" title="Work history." />

        <div ref={ref} className="relative mt-12 pl-8 sm:pl-10">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-zinc-800" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[7px] top-0 w-px origin-top bg-gradient-to-b from-cyan-300 to-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
          />
          <div className="space-y-8">
            {experience.map((job, i) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[33px] top-6 h-3.5 w-3.5 rounded-full border-2 border-cyan-400 bg-zinc-950 sm:-left-[41px]" />
                <SpotlightCard className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-50">{job.title}</h3>
                      <p className="text-sm text-cyan-300">{job.role}</p>
                    </div>
                    <div className="font-mono text-[11px] text-slate-500 sm:text-right">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className="rounded-md border border-zinc-800 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}