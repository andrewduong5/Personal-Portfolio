import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Mail, Phone, Github, Linkedin, BadgeCheck, FileText } from "lucide-react";
import { Image } from "@/components/ui/image";
import { profile } from "@/data/portfolio";
import Terminal from "@/components/portfolio/Terminal";

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
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32">
      {/* Hardware-accelerated background layers */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 mesh opacity-90 [transform:translateZ(0)]" 
      />
      <div 
        className="pointer-events-none absolute inset-0 -z-10 grid-lines opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)] [transform:translateZ(0)]" 
      />

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="mb-6">
            <span className="inline-flex items-start gap-2 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07] px-3 py-1.5 font-mono text-[10px] uppercase leading-relaxed tracking-[0.1em] text-emerald-300">
              <span className="relative mt-1 flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
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
              <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-cyan-500/40 bg-zinc-900 shadow-[0_0_20px_rgba(6,182,212,0.2)] md:h-24 md:w-24">
                <Image
                  src={profile.headshot}
                  alt="Andrew Duong"
                  className="block h-full w-full scale-105"
                />
              </div>
              <span className="absolute bottom-0 right-1 z-10 h-3.5 w-3.5 animate-pulse rounded-full bg-emerald-500 ring-2 ring-zinc-950" />
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
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40">
              <Mail className="h-3 w-3 text-cyan-400" /> {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40">
              <Phone className="h-3 w-3 text-cyan-400" /> {profile.phone}
            </a>
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900/50 px-2.5 py-1.5 font-mono text-[11px] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300"
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 hover:shadow-[0_10px_40px_-12px_rgba(255,255,255,0.35)] active:scale-[0.98]"
            >
              Explore the Homelab
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700/80 bg-zinc-900/40 px-6 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-cyan-400/40 hover:text-white"
            >
              <FileText className="h-4 w-4" /> Résumé
            </Link>
          </motion.div>

          <p className="mt-7 flex items-center gap-2 font-mono text-[11px] text-slate-500">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 lg:col-span-6"
        >
          <div className="relative">
            {/* Replaced heavy blur-3xl with performant radial gradient */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)]" />
            <Terminal />
          </div>
        </motion.div>
      </div>
    </section>
  );
}