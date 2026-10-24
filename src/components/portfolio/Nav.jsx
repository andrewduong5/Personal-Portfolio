import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText, Terminal } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    // Cache element lookups so we don't query the DOM on every pixel
    const targets = navLinks
      .map(({ href }) => ({ href, el: document.querySelector(href) }))
      .filter((item) => item.el !== null);

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Direct DOM manipulation for the progress bar (Zero React re-renders)
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBarRef.current) {
        const ratio = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }

      // 2. Only update state when scrolled boolean actually changes
      setScrolled((prev) => {
        const isPastThreshold = scrollY > 12;
        return prev !== isPastThreshold ? isPastThreshold : prev;
      });

      // 3. Determine active section with low overhead
      const offset = scrollY + 140;
      let current = "";
      for (let i = targets.length - 1; i >= 0; i--) {
        if (targets[i].el.offsetTop <= offset) {
          current = targets[i].href;
          break;
        }
      }

      setActive((prev) => (prev !== current ? current : prev));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 [transform:translateZ(0)]">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-[2px] bg-zinc-900/60" aria-hidden="true">
        <div
          ref={progressBarRef}
          className="h-full origin-left bg-gradient-to-r from-zinc-100/70 via-white to-zinc-400/50 [transform:scaleX(0)] [will-change:transform]"
        />
      </div>
      <nav
        className={cn(
          "mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-colors duration-200 sm:px-5",
          scrolled
            ? "border-zinc-800/80 bg-zinc-950/90 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.9)]"
            : "border-zinc-800/40 bg-zinc-950/70"
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
                "rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-150",
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
        <div className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 p-2 md:hidden">
          <div className="flex flex-col">
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