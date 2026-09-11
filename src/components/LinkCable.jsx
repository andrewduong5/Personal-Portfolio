import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import PokeBall from "./PokeBall";
import SectionPokemon from "./AmbientPokemon";

const LINKEDIN = "https://www.linkedin.com/in/andrew-duong85";
const GITHUB = "https://github.com/andrewduong5";
const EMAIL = "andrew.duong85@gmail.com";
const PHONE = "+18056309552";

export default function LinkCable() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`PORTFOLIO LINK — ${form.name || "Trainer"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest">SECTION 06</span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <Send className="w-5 h-5 text-poke-red" />
              <h2 className="press-start text-xs sm:text-sm md:text-base text-white tracking-wide">
                LINK CABLE
              </h2>
              <PokeBall size={20} variant="dive" />
            </div>
            <SectionPokemon species="kyurem" />
          </div>
          <p className="geist-mono text-[10px] text-white/40 mt-2">
            COMMUNICATION CENTER — INITIATE CONNECTION
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="border border-white/15 bg-white/[0.01] p-5 sm:p-6 relative rounded-sm">
            <div className="space-y-4">
              <div>
                <label className="geist-mono text-[9px] text-white/40 tracking-widest block mb-1">
                  TRAINER NAME
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-3 py-2 geist-mono text-sm text-white focus:border-poke-red/70 focus:outline-none transition-colors"
                  placeholder="Enter name"
                />
              </div>
              <div>
                <label className="geist-mono text-[9px] text-white/40 tracking-widest block mb-1">
                  COMM ID
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-3 py-2 geist-mono text-sm text-white focus:border-poke-red/70 focus:outline-none transition-colors"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="geist-mono text-[9px] text-white/40 tracking-widest block mb-1">
                  MESSAGE
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-white/20 px-3 py-2 geist-mono text-sm text-white focus:border-poke-red/70 focus:outline-none transition-colors resize-none"
                  placeholder="Write message..."
                />
              </div>
              <button
                type="submit"
                className="press-start text-[10px] text-white selection-bracket px-6 py-3 border-2 border-poke-red/60 hover:border-poke-red hover:bg-poke-red/10 transition-all inline-flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Send size={12} /> SEND
              </button>
              {sent && (
                <p className="geist-mono text-[10px] text-poke-green">▶ MAIL CLIENT OPENED</p>
              )}
            </div>
          </form>

          {/* Direct links + social */}
          <div className="space-y-6">
            <div className="border border-white/15 bg-white/[0.01] p-5 sm:p-6 rounded-sm">
              <p className="press-start text-[7px] text-white/40 mb-4 tracking-wide">DIRECT LINKS</p>
              <div className="space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 geist-mono text-xs text-white/70 hover:text-poke-yellow transition-colors group"
                >
                  <Mail size={14} className="text-poke-red group-hover:text-poke-yellow shrink-0" />
                  <span className="tracking-wide">EMAIL</span>
                  <span className="text-white/40 ml-auto truncate">{EMAIL}</span>
                </a>
                <div className="h-px bg-white/8" />
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-3 geist-mono text-xs text-white/70 hover:text-poke-yellow transition-colors group"
                >
                  <Phone size={14} className="text-poke-red group-hover:text-poke-yellow shrink-0" />
                  <span className="tracking-wide">PHONE</span>
                  <span className="text-white/40 ml-auto">{PHONE}</span>
                </a>
                <div className="h-px bg-white/8" />
                <div className="flex items-center gap-3 geist-mono text-xs text-white/70">
                  <MapPin size={14} className="text-poke-red shrink-0" />
                  <span className="tracking-wide">LOCATION</span>
                  <span className="text-white/40 ml-auto">Ventura County, CA</span>
                </div>
              </div>
            </div>

            <div className="border border-white/15 bg-white/[0.01] p-5 sm:p-6 rounded-sm">
              <p className="press-start text-[7px] text-white/40 mb-4 tracking-wide">SOCIAL</p>
              <div className="flex items-center gap-4">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="border border-white/20 p-3 hover:border-poke-blue hover:bg-poke-blue/10 transition-all rounded-sm"
                >
                  <Linkedin size={20} className="text-white" />
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="border border-white/20 p-3 hover:border-white hover:bg-white/10 transition-all rounded-sm"
                >
                  <Github size={20} className="text-white" />
                </a>
                <div className="ml-auto flex flex-col items-end gap-1">
                  <span className="geist-mono text-[9px] text-white/30 tracking-widest">STATUS</span>
                  <span className="geist-mono text-[11px] sm:text-xs text-poke-green flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-poke-green animate-pulse" />
                    Open to roles
                  </span>
                </div>
              </div>
              <p className="geist-mono text-[10px] text-white/40 mt-4 leading-relaxed">
                Available for full-time roles in cloud, cybersecurity, AI, IT/Helpdesk, Security Analyst, or digital strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}