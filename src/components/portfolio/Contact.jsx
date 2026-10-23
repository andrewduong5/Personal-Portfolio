import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/portfolio";
import SectionHeading from "@/components/portfolio/SectionHeading";
import ContactChip from "@/components/portfolio/ContactChip";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry — ${form.name || "Website visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section id="contact" className="relative border-t border-zinc-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.07),transparent_70%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading
          index="06"
          label="Contact"
          title="Let's talk infrastructure."
          description={profile.availability}
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <ContactChip
              icon={Mail}
              label="Email"
              value={profile.email}
              copyValue={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactChip
              icon={Phone}
              label="Phone"
              value={profile.phone}
              copyValue={profile.phoneHref.replace("tel:", "")}
              href={profile.phoneHref}
            />
            <ContactChip
              icon={Linkedin}
              label="LinkedIn"
              value="in/andrew-duong85"
              copyValue={profile.linkedin}
              href={profile.linkedin}
            />
            <ContactChip
              icon={Github}
              label="GitHub"
              value="andrewduong5"
              copyValue={profile.github}
              href={profile.github}
            />

            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400/80" /> {profile.location}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-line" />
                  {profile.status}
                </span>
              </div>
              <p className="mt-3 text-[12px] leading-relaxed text-slate-400">
                {profile.tagline} — AWS Cloud Practitioner &amp; CompTIA A+ certified.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 backdrop-blur-md sm:p-6"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-500">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@company.com"
                  className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-slate-500">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Role, project, or question…"
                  className="mt-1.5 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:border-cyan-400/60 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-zinc-200 active:scale-[0.99] sm:w-auto"
              >
                <Send className="h-3.5 w-3.5" /> Send message
              </button>
              {sent && (
                <p className="flex items-center gap-1.5 font-mono text-[10.5px] text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Mail client opened — message ready to send.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}