import { useEffect, useRef, useState } from "react";
import { COMMANDS, runCommand } from "@/components/portfolio/terminalCommands";
import { homelab } from "@/data/portfolio";

const intro = ["Welcome to dc01. Type 'help' to list commands."];

export default function Terminal() {
  const [entries, setEntries] = useState([{ cmd: null, out: intro }]);
  const [value, setValue] = useState("");
  const [ping, setPing] = useState(14);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    // Only randomize ping periodically if needed, but throttle it gently
    const id = window.setInterval(() => {
      setPing(12 + Math.floor(Math.random() * 5));
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [entries]);

  const run = (cmd) => {
    const out = runCommand(cmd);
    if (out === null) return setEntries([]);
    if (out.length === 0) return;
    setEntries((prev) => [...prev, { cmd, out }]);
  };

  const submit = (e) => {
    e.preventDefault();
    run(value);
    setValue("");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] [transform:translateZ(0)]">
      <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/70 px-4 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <span className="font-mono text-[10px] tracking-[0.14em] text-slate-500">powershell — dc01</span>
      </div>
      <p className="border-b border-zinc-800/80 bg-emerald-400/[0.05] px-4 py-2 font-mono text-[10.5px] leading-relaxed text-emerald-300">
        [STATUS: ACTIVE] Session established with {homelab.domain} (ping: {ping}ms | uptime: 99.9%)
      </p>
      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
        className="h-[290px] space-y-2 overflow-y-auto p-4 font-mono text-[11.5px] leading-relaxed text-slate-300 sm:text-xs"
      >
        {entries.map((entry, i) => (
          <div key={i}>
            {entry.cmd !== null && (
              <p className="break-words text-slate-200">
                <span className="text-cyan-400">PS</span> &gt; {entry.cmd}
              </p>
            )}
            {entry.out.map((line, j) => (
              <div key={j} className="whitespace-pre-wrap break-words text-slate-400">
                {line}
              </div>
            ))}
          </div>
        ))}
        <form onSubmit={submit} className="flex items-center gap-2">
          <span className="shrink-0 text-cyan-400">PS &gt;</span>
          <input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            aria-label="Terminal command input"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder="type a command"
            className="min-w-0 flex-1 bg-transparent text-slate-100 caret-cyan-400 outline-none placeholder:text-zinc-600 focus-visible:outline-none"
          />
        </form>
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-zinc-800/80 bg-zinc-900/50 p-3">
        {COMMANDS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className="rounded-md border border-zinc-800 bg-zinc-950 px-2.5 py-1 font-mono text-[10.5px] text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}