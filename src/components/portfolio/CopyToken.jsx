import { useState } from "react";

export default function CopyToken({ value, children }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={copy}
        title="Click to copy"
        className="break-all text-left text-cyan-300 underline decoration-dotted underline-offset-4 hover:text-cyan-200"
      >
        {children || value}
      </button>
      {copied && (
        <span className="absolute -top-6 left-0 whitespace-nowrap rounded-md border border-emerald-400/30 bg-zinc-950 px-2 py-0.5 text-[9px] uppercase tracking-[0.1em] text-emerald-300">
          Copied to clipboard!
        </span>
      )}
    </span>
  );
}