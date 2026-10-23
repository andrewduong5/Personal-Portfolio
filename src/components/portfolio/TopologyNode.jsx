import { Cpu, KeyRound, Network, ShieldCheck, Container } from "lucide-react";
import { cn } from "@/lib/utils";

const icons = { Cpu, KeyRound, Network, ShieldCheck, Container };

export default function TopologyNode({ node, onSelect, onHover, className, style }) {
  const Icon = icons[node.icon];
  return (
    <button
      type="button"
      onClick={() => onSelect(node.id)}
      onMouseEnter={() => onHover?.(node.id)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(node.id)}
      onBlur={() => onHover?.(null)}
      style={style}
      className={cn(
        "group flex items-center gap-3 rounded-xl border border-zinc-700 bg-zinc-950 p-3 text-left transition-all duration-200 hover:border-cyan-400/60 hover:shadow-[0_0_30px_-8px_rgba(34,211,238,0.5)]",
        className
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
        <Icon className="h-4 w-4 text-cyan-400" />
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-slate-100">{node.label}</span>
        <span className="block font-mono text-[10px] text-slate-500">{node.sub}</span>
      </span>
    </button>
  );
}