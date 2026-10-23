import { motion } from "framer-motion";

export default function SkillBars({ items, categoryKey }) {
  return (
    <ul className="space-y-3 self-center">
      {items.map((s, i) => (
        <li key={`${categoryKey}-${s.name}`}>
          <div className="flex justify-between font-mono text-[11px]">
            <span className="text-slate-200">{s.name}</span>
            <span className="text-slate-500">{s.desc}</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-zinc-800">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-sky-400"
              initial={{ width: 0 }}
              animate={{ width: `${s.level}%` }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}