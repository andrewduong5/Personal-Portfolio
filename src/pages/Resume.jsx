import { Link } from "react-router-dom";
import { ArrowLeft, Printer, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {
  certifications,
  experience,
  projects,
  profile,
  skills,
  credentials,
  homelab,
} from "@/data/portfolio";

export default function Resume() {
  return (
    <div className="min-h-screen bg-[#09090b] px-4 py-10 text-slate-100 print:min-h-0 print:bg-white print:p-0 sm:px-6 sm:py-14">
      <div className="no-print mx-auto mb-6 flex max-w-3xl flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-slate-400 transition-colors hover:border-white/40 hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-zinc-950 transition-colors hover:bg-zinc-200"
        >
          <Printer className="h-3.5 w-3.5" /> Print / Save PDF
        </button>
      </div>

      <article className="print-page mx-auto max-w-3xl rounded-2xl bg-white p-7 text-zinc-900 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)] print:max-w-none print:rounded-none print:p-0 print:shadow-none sm:p-10">
        <header className="border-b border-zinc-200 pb-5">
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-950">{profile.name}</h1>
          <p className="mt-1 text-[15px] text-zinc-600">{profile.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[11px] text-zinc-600">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-zinc-800">
              <Mail className="h-3 w-3" /> {profile.email}
            </a>
            <a href={profile.phoneHref} className="inline-flex items-center gap-1.5 hover:text-zinc-800">
              <Phone className="h-3 w-3" /> {profile.phone}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3 w-3" /> {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-800"
            >
              <Linkedin className="h-3 w-3" /> andrew-duong85
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-zinc-800"
            >
              <Github className="h-3 w-3" /> andrewduong5
            </a>
          </div>
        </header>

        <section className="mt-5">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
            Summary
          </h2>
          <p className="mt-2 text-[12.5px] leading-relaxed text-zinc-700">{profile.about[0]}</p>
          <p className="mt-1.5 text-[12.5px] leading-relaxed text-zinc-700">{profile.about[1]}</p>
        </section>

        <section className="mt-5">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
            Experience
          </h2>
          <div className="mt-2 space-y-4">
            {experience.map((job) => (
              <div key={job.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <p className="text-[13px] font-semibold text-zinc-900">
                    {job.title} · <span className="font-normal text-zinc-600">{job.role}</span>
                  </p>
                  <p className="font-mono text-[10.5px] text-zinc-500">
                    {job.period} · {job.location}
                  </p>
                </div>
                <ul className="mt-1.5 space-y-1">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-[12px] leading-relaxed text-zinc-700">
                      <span className="mt-[6px] h-1 w-1 shrink-0 rounded-full bg-zinc-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
            Projects
          </h2>
          <div className="mt-2 space-y-3">
            {projects.map((project) => (
              <div key={project.id}>
                <p className="text-[13px] font-semibold text-zinc-900">
                  {project.title}{" "}
                  <span className="font-mono text-[10px] font-normal text-zinc-500">
                    · {project.tech.join(" / ")}
                  </span>
                </p>
                <p className="text-[12px] leading-relaxed text-zinc-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
            Homelab — {homelab.domain}
          </h2>
          <p className="mt-2 text-[12px] leading-relaxed text-zinc-700">
            {homelab.title}. {homelab.summary}
          </p>
          <ul className="mt-1.5 space-y-1">
            {homelab.groups.map((group) => (
              <li key={group.id} className="text-[12px] leading-relaxed text-zinc-700">
                <span className="font-medium text-zinc-900">{group.title}:</span>{" "}
                {group.specs.map((s) => s.v).join(" · ")}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Skills
            </h2>
            <div className="mt-2 space-y-2">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="text-[11px] font-semibold text-zinc-900">{category}</p>
                  <p className="text-[11.5px] leading-relaxed text-zinc-600">
                    {items.map((i) => i.name).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Certifications
            </h2>
            <ul className="mt-2 space-y-1.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="text-[11.5px] leading-relaxed text-zinc-700">
                  <span className="font-medium text-zinc-900">{cert.name}</span>
                  <span className="text-zinc-500"> — {cert.status}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-800">
              Education
            </h2>
            {credentials.slice(0, 4).map((item) => (
              <p key={item.k} className="text-[11.5px] leading-relaxed text-zinc-700">
                <span className="font-medium text-zinc-900">{item.k}:</span> {item.v}
              </p>
            ))}
          </div>
        </section>
      </article>
    </div>
  );
}