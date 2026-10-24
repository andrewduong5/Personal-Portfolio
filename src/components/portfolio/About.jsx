import { motion } from "framer-motion";
import { abilities, credentials, profile } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import { Cpu, LineChart } from "lucide-react";

const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
};

const icons = [Cpu, LineChart];

export default function About() {
  return (
    <section id="overview" className="relative border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="01"
          label="Profile"
          title="Systems thinking, applied to real infrastructure."
          description="A foundation in cloud infrastructure, information security and risk analysis — built through hands-on labs and continuous learning."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div {...reveal} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 sm:p-7 [transform:translateZ(0)]">
              <div className="space-y-5">
                {profile.about.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-relaxed text-slate-300 sm:text-[15px]">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {abilities.map((ability, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <div
                      key={ability.title}
                      className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4 transition-colors hover:border-cyan-400/30"
                    >
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-200">
                          <Icon className="h-3.5 w-3.5 text-cyan-400" />
                          {ability.title}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/70">
                          {ability.meta}
                        </span>
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-slate-400">{ability.body}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.06 }} className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/90 p-6 [transform:translateZ(0)]">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Credentials
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                  Active
                </span>
              </div>
              <dl className="mt-4 divide-y divide-zinc-800/80">
                {credentials.map((item) => (
                  <div key={item.k} className="flex items-baseline justify-between gap-4 py-2.5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {item.k}
                    </dt>
                    <dd className="text-right font-mono text-xs text-slate-200">{item.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 rounded-lg border border-zinc-800 bg-zinc-950/70 p-3 font-mono text-[11px] leading-relaxed text-slate-400">
                AWS Cloud Practitioner &amp; CompTIA A+ certified — active CompTIA credentialing in
                progress.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}