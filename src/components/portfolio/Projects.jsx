import { projects, profile } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            index="03"
            label="Projects"
            title="Built, documented, and hands-on."
            description="Infrastructure labs and shipped software — with the architecture decisions behind each."
          />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.12em] text-slate-400 backdrop-blur-md transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
          >
            <Github className="h-3.5 w-3.5" /> All repositories
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}