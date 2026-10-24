import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone, Github, Linkedin, BadgeCheck, FileText } from "lucide-react";
import { Image } from "@/components/ui/image";
import { profile } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
};

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Credly", href: profile.credly, icon: BadgeCheck },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 [transform:translateZ(0)] [contain:paint]">
      {/* Static, high-performance background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#09090b]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-20 [transform:translateZ(0)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_70%)] [transform:translateZ(0)]" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-3xl">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-6">
            <span className="inline-flex items-start gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-emerald-300">
              <span className="relative mt-1 flex h-1.5 w-1.5 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              {profile.status}
            </span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.05 }}
            className="flex items-center gap-5"
          >
            <div className="relative shrink-0 select-none">
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-500/40 bg-zinc-900 md:h-24 md:w-24">
                <Image
                  src={profile.headshot}
                  alt="Andrew Duong"
                  className="block h-full w-full scale-105"
                />
              </div>
              <span className="absolute bottom-0 right-1 z-10 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display text-[2.4rem] font-semibold leading-[1.03] tracking-[-0.035em] text-slate-50 sm:text-5xl">
                Andrew Duong<span className="text-cyan-400">.</span>
              </h1>
              <p className="mt-1.5 text-[1.05rem] font-normal leading-tight tracking-[-0.02em] text-slate-400 sm:text-xl">
                Information Systems graduate · IT infrastructure &amp; systems support
              </p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-400"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40">
              <Mail className="h-3 w-3 text-cyan-400" /> {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40">
              <Phone className="h-3 w-3 text-cyan-400" /> {profile.phone}
            </a>
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
              >
                <Icon className="h-3 w-3 text-cyan-400" /> {label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#homelab"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.98]"
            >
              Explore the Homelab
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/70 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-white"
            >
              <FileText className="h-4 w-4" /> Résumé
            </Link>
          </motion.div>

          <p className="mt-7 flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}