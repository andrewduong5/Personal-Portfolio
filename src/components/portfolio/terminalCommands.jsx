import { profile, skills, certifications, homelab, metrics } from "@/data/portfolio";
import CopyToken from "@/components/portfolio/CopyToken";

export const COMMANDS = ["help", "skills", "certs", "homelab", "metrics", "contact", "clear"];

const heading = (t) => <span className="text-cyan-300">{t}</span>;

const outputs = {
  help: () => [
    "Available commands:",
    ...COMMANDS.map((c) => `  ${c.padEnd(8)} ${helpText[c]}`),
  ],
  skills: () =>
    Object.entries(skills).map(([cat, items]) => (
      <span key={cat}>
        {heading(`[${cat}]`)} {items.map((i) => i.name).join(", ")}
      </span>
    )),
  certs: () =>
    certifications.map((c) => (
      <span key={c.name}>
        <span className="text-emerald-400">✔</span> {c.name} — {c.status}
      </span>
    )),
  homelab: () => [
    <span key="d">{heading("Domain:")} {homelab.domain} (Windows Server AD DS)</span>,
    <span key="v">{heading("Virtualization:")} Proxmox VE, VirtualBox</span>,
    <span key="n">{heading("Network:")} DNS zones, DHCP scopes, static IPs</span>,
    <span key="s">{heading("Security:")} segmented networks, isolated test VMs, RDP/SSH</span>,
    <span key="c">{heading("Containers:")} Docker, network bridges, uptime monitoring</span>,
  ],
  metrics: () =>
    metrics.map((m) => (
      <span key={m.id}>
        {heading(`${m.prefix || ""}${m.value.toLocaleString()}${m.suffix || ""}`)} {m.label}
      </span>
    )),
  contact: () => [
    <span key="e">{heading("email:")} <CopyToken value={profile.email} /></span>,
    <span key="p">{heading("phone:")} <CopyToken value={profile.phone} /></span>,
    <span key="l">{heading("location:")} {profile.location}</span>,
  ],
};

const helpText = {
  help: "list commands",
  skills: "categorized skill matrix",
  certs: "active certifications",
  homelab: "virtualized lab specs",
  metrics: "impact numbers",
  contact: "email & phone (click to copy)",
  clear: "clear the screen",
};

export function runCommand(name) {
  const key = name.trim().toLowerCase();
  if (!key) return [];
  if (key === "clear") return null;
  if (outputs[key]) return outputs[key]();
  return [<span key="u" className="text-rose-400">command not found: {key} — try 'help'</span>];
}