import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Github, Lock } from "lucide-react";

export default function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);
  const [workflowOpen, setWorkflowOpen] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="spotlight-card group flex h-full flex-col rounded-2xl border border-zinc-800/80 bg-zinc-900/90 p-5 [transform:translateZ(0)] transition-colors duration-200 hover:border-zinc-700 sm:p-6"
    >
      <div className="relative z-10 flex items-center justify-between gap-3">
        <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate-500">
          {project.category}
        </span>
        <span className="font-mono text-[10px] text-slate-600">{project.year}</span>
      </div>

      <h3 className="relative z-10 mt-4 text-lg font-semibold tracking-[-0.015em] text-slate-50 transition-colors group-hover:text-cyan-200 sm:text-xl">
        {project.title}
      </h3>

      <p className="relative z-10 mt-2.5 text-[13px] leading-relaxed text-slate-400">
        {project.description}
      </p>

      <ul className="relative z-10 mt-4 space-y-2 border-l border-zinc-800 pl-3.5">
        {project.notes.map((note) =>
          typeof note === "string" ? (
            <li key={note} className="text-[12px] leading-relaxed text-slate-400/90">
              {note}
            </li>
          ) : (
            <li key={note.title} className="text-[12px] leading-relaxed text-slate-400/90">
              <span className="font-medium text-slate-300">{note.title}:</span> {note.text}
            </li>
          )
        )}
      </ul>

      <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1 font-mono text-[10px] text-slate-400 transition-colors group-hover:border-cyan-400/20 group-hover:text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {project.workflow && (
        <div className="relative z-10 mt-5">
          <button
            type="button"
            onClick={() => setWorkflowOpen((v) => !v)}
            aria-expanded={workflowOpen}
            className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-cyan-300/90 transition-colors hover:text-cyan-200"
          >
            {workflowOpen ? "Hide Workflow Architecture" : "View Workflow Architecture"}
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${workflowOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence initial={false}>
            {workflowOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3.5">
                  <p className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-slate-500">
                    Lead lifecycle
                  </p>
                  <ol className="mt-2.5 space-y-2.5 border-l border-dashed border-zinc-700/70 pl-4">
                    {project.workflow.map((stage, i) => (
                      <li key={stage} className="relative flex items-start gap-2.5">
                        <span className="absolute -left-[22px] flex h-3 w-3 items-center justify-center rounded-full border border-cyan-400/50 bg-zinc-950">
                          <span className="h-1 w-1 rounded-full bg-cyan-400" />
                        </span>
                        <span className="font-mono text-[9px] text-zinc-600">{String(i + 1).padStart(2, "0")}</span>
                        <span className="font-mono text-[10.5px] leading-relaxed text-slate-300">{stage}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      <div className="relative z-10 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-zinc-800/80 pt-4">
        {project.proprietary ? (
          <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500">
            <Lock className="h-3 w-3" />
            {project.proprietary}
          </span>
        ) : (
          project.links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <a
                key={link.label}
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label === "GitHub" ? (
                  <Github className="h-3.5 w-3.5" />
                ) : (
                  <ArrowUpRight className="h-3.5 w-3.5" />
                )}
                {link.label === "GitHub" ? "Repository" : link.label}
              </a>
            );
          })
        )}
      </div>
    </motion.article>
  );
}