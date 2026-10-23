import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText, Terminal } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
      const offset = window.scrollY + 140;
      let current = "";
      navLinks.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el.offsetTop <= offset) current = href;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[2px] bg-zinc-900/60" aria-hidden="true">
        <div
          className="h-full origin-left bg-gradient-to-r from-zinc-100/70 via-white to-zinc-400/50"
          style={{ transform: `scaleX(${progress})`, transition: "transform 120ms linear" }}
        />
      </div>
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled
            ? "border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
            : "border-zinc-800/40 bg-zinc-950/40 backdrop-blur-md"
        )}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10">
            <Terminal className="h-4 w-4 text-cyan-400" />
          </span>
          <span className="font-mono text-[13px] font-semibold tracking-tight text-slate-100">
            andrew<span className="text-cyan-400">.</span>duong
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200",
                active === link.href
                  ? "bg-zinc-800/70 text-cyan-300"
                  : "text-slate-400 hover:text-slate-100"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/resume"
            className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-100 transition-colors hover:border-white/50 hover:bg-white/15 hover:text-white sm:flex"
          >
            <FileText className="h-3.5 w-3.5" />
            Résumé
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-slate-300 transition-colors hover:border-zinc-700 hover:text-white md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col p-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-slate-400 transition-colors hover:bg-zinc-900 hover:text-slate-100"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 font-mono text-xs uppercase tracking-[0.14em] text-white hover:bg-zinc-900"
            >
              <FileText className="h-3.5 w-3.5" /> Résumé
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="mt-1 truncate rounded-lg px-3 py-2.5 font-mono text-[11px] text-slate-500 hover:bg-zinc-900 hover:text-slate-300"
            >
              {profile.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}