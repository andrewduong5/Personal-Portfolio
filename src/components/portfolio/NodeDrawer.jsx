import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";

export default function NodeDrawer({ node, onClose }) {
  return (
    <Sheet open={!!node} onOpenChange={(open) => !open && onClose()}>
      <SheetContent className="w-full overflow-y-auto border-zinc-800 bg-zinc-950 text-slate-100 sm:max-w-md">
        {node && (
          <>
            <SheetHeader className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">
                Architecture inspector
              </span>
              <SheetTitle className="text-xl text-slate-50">{node.label}</SheetTitle>
              <SheetDescription className="text-sm leading-relaxed text-slate-400">
                {node.summary}
              </SheetDescription>
            </SheetHeader>

            <h4 className="mb-2 mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Configuration
            </h4>
            <dl className="divide-y divide-zinc-800/80 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4">
              {node.configs.map((c) => (
                <div key={c.k} className="flex justify-between gap-4 py-2.5 text-xs">
                  <dt className="font-mono uppercase tracking-[0.1em] text-slate-500">{c.k}</dt>
                  <dd className="text-right font-mono text-slate-200">{c.v}</dd>
                </div>
              ))}
            </dl>

            <h4 className="mb-2 mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Network settings
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {node.network.map((n) => (
                <li key={n} className="flex gap-2">
                  <span className="text-cyan-400">›</span> {n}
                </li>
              ))}
            </ul>

            <h4 className="mb-2 mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Example command
            </h4>
            <pre className="whitespace-pre-wrap break-words rounded-xl border border-zinc-800 bg-black/50 p-3 font-mono text-[11px] leading-relaxed text-cyan-200">
              {node.snippet}
            </pre>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}