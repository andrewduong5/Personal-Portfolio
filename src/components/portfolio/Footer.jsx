import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#08080a] py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-mono text-[13px] font-semibold text-slate-200">
              andrew<span className="text-cyan-400">.</span>duong
            </p>
            <p className="mt-2 max-w-xs text-[12px] leading-relaxed text-slate-500">
              IT systems administration, Active Directory infrastructure, cloud &amp; automation.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email Andrew"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Mail className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Github className="h-3.5 w-3.5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 text-slate-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Linkedin className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/resume"
              className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-cyan-300"
            >
              Résumé
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-zinc-900 pt-5 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
            © {new Date().getFullYear()} {profile.name} · v2.0
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500 transition-colors hover:text-cyan-300"
          >
            Back to top <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}