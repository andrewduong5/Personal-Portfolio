import { motion } from "framer-motion";
import { metrics } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import SpotlightCard from "@/components/portfolio/SpotlightCard";
import CountUp from "@/components/portfolio/CountUp";

export default function Impact() {
  return (
    <section id="impact" className="border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="02"
          label="Impact"
          title="Measured results from real work."
          description="Quantified outcomes from my work experience."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              <SpotlightCard className="h-full rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5">
                <p className="font-mono text-4xl font-semibold tracking-tight text-white">
                  <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-slate-100">{m.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{m.detail}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}