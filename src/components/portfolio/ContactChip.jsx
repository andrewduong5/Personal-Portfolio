import { useState } from "react";
import { Check, Copy, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactChip({ icon: Icon, label, value, copyValue, href }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(copyValue || value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="group relative flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/90 p-3 [transform:translateZ(0)] transition-colors hover:border-cyan-400/30">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950">
        <Icon className="h-3.5 w-3.5 text-cyan-400" />
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="min-w-0 flex-1 text-left"
      >
        <span className="block font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-500">
          {label}
        </span>
        <span className="mt-0.5 block truncate font-mono text-[12px] text-slate-200">{value}</span>
      </button>

      {href && (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={`Open ${label}`}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-zinc-800 text-slate-500 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}

      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-md border transition-all duration-200",
          copied
            ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
            : "border-zinc-800 text-slate-500 hover:border-zinc-700 hover:text-slate-200"
        )}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>

      <span
        className={cn(
          "pointer-events-none absolute -top-2 right-2 rounded-md border border-emerald-400/30 bg-zinc-950 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-300 transition-opacity duration-200",
          copied ? "opacity-100" : "opacity-0"
        )}
        aria-live="polite"
      >
        {copied ? "Copied!" : ""}
      </span>
    </div>
  );
}