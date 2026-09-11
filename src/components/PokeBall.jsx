import React, { useId } from "react";

/**
 * Poké Ball rendered as crisp SVG, accurate to the in-game variants.
 * Bottom hemisphere is always a SOLID fill (never transparent) so the ball
 * reads as a physical object against any dark background.
 */

const GLOW = {
  poke: "#EE1515", great: "#4A90D9", ultra: "#FFD700", master: "#C4419A",
  premier: "#E74C3C", net: "#1B3C6E", dive: "#3A6EA5", nest: "#E89B3D",
  repeat: "#EE1515", timer: "#E67E22", luxury: "#D4AF37", heal: "#F4B7C8",
  quick: "#3A6EA5", dusk: "#2E7D32", fast: "#F1C40F", level: "#E67E22",
  lure: "#3498DB", heavy: "#5D6D7E", love: "#F5A0B8", friend: "#5BBF4A",
  moon: "#3A6EA5", safari: "#D4AC0D", sport: "#E74C3C", park: "#27AE60",
  cherish: "#E74C3C", dream: "#F5A0C8", beast: "#8E44AD", strange: "#EE1515",
  feather: "#85C1E9", wing: "#5DADE2", jet: "#AED6F1", leaden: "#566573",
  gigaton: "#F1C40F", ancient: "#8B5A2B", origin: "#C0392B",
};

function body(v, top, bot) {
  const T = `url(#${top})`;
  const B = `url(#${bot})`;
  switch (v) {
    case "great":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#4A90D9" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M18 18 L40 44 L24 44 Z" fill="#E74C3C" clipPath={T} />
          <path d="M82 18 L60 44 L76 44 Z" fill="#E74C3C" clipPath={T} />
        </>
      );
    case "ultra":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#1A1A1A" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="20" width="100" height="4" fill="#FFD700" clipPath={T} />
          <rect x="0" y="30" width="100" height="4" fill="#FFD700" clipPath={T} />
        </>
      );
    case "master":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#7B3F8E" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M28 44 L28 18 L40 30 L50 18 L60 30 L72 18 L72 44" stroke="#E84A97" strokeWidth="4" fill="none" clipPath={T} />
        </>
      );
    case "premier":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
          <rect x="0" y="14" width="100" height="8" fill="#E74C3C" clipPath={T} />
        </>
      );
    case "net":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#1B3C6E" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <g stroke="#0A0A0A" strokeWidth="1.2" clipPath={T} opacity="0.85">
            <line x1="0" y1="20" x2="100" y2="20" /><line x1="0" y1="32" x2="100" y2="32" /><line x1="0" y1="44" x2="100" y2="44" />
            <line x1="22" y1="2" x2="22" y2="50" /><line x1="37" y1="2" x2="37" y2="50" /><line x1="50" y1="2" x2="50" y2="50" />
            <line x1="63" y1="2" x2="63" y2="50" /><line x1="78" y1="2" x2="78" y2="50" />
          </g>
        </>
      );
    case "dive":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#3A6EA5" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M0 28 Q25 20 50 28 T100 28" stroke="#A9D6F5" strokeWidth="2.5" fill="none" clipPath={T} />
          <path d="M0 40 Q25 32 50 40 T100 40" stroke="#A9D6F5" strokeWidth="2.5" fill="none" clipPath={T} />
        </>
      );
    case "nest":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E89B3D" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#5BBF4A" clipPath={B} />
          <circle cx="50" cy="26" r="6" fill="#5BBF4A" stroke="#3E6B2E" strokeWidth="1" clipPath={T} />
        </>
      );
    case "repeat":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#EE1515" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <circle cx="50" cy="26" r="7" fill="#FFD700" stroke="#0A0A0A" strokeWidth="1.5" clipPath={T} />
        </>
      );
    case "timer":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
          <rect x="0" y="12" width="100" height="6" fill="#1A1A1A" clipPath={T} />
          <rect x="0" y="24" width="100" height="6" fill="#E67E22" clipPath={T} />
          <rect x="0" y="36" width="100" height="6" fill="#1A1A1A" clipPath={T} />
        </>
      );
    case "luxury":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#1A1A1A" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#1A1A1A" clipPath={B} />
          <g stroke="#D4AF37" strokeWidth="2" fill="none" clipPath={T}>
            <path d="M50 8 L62 20 L50 32 L38 20 Z" /><path d="M50 26 L62 38 L50 48 L38 38 Z" />
          </g>
        </>
      );
    case "heal":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#F4B7C8" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="46" y="14" width="8" height="22" fill="#E74C3C" clipPath={T} />
          <rect x="37" y="20" width="26" height="8" fill="#E74C3C" clipPath={T} />
        </>
      );
    case "quick":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#3A6EA5" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M54 10 L36 30 L48 30 L40 46 L62 24 L50 24 Z" fill="#FFD700" clipPath={T} />
        </>
      );
    case "dusk":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#1F3A2F" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#2E5A3F" clipPath={B} />
          <circle cx="50" cy="28" r="8" fill="#E74C3C" stroke="#0A0A0A" strokeWidth="1.5" clipPath={T} />
          <circle cx="47" cy="26" r="2.5" fill="#FFFFFF" clipPath={T} />
        </>
      );
    case "fast":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E74C3C" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#BDC3C7" clipPath={B} />
          <path d="M50 12 L42 30 L52 30 L46 44 L60 26 L50 26 Z" fill="#F1C40F" clipPath={T} />
        </>
      );
    case "level":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E74C3C" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="20" width="100" height="6" fill="#E67E22" clipPath={T} />
          <rect x="0" y="32" width="100" height="6" fill="#E67E22" clipPath={T} />
        </>
      );
    case "lure":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E74C3C" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M0 58 Q25 50 50 58 T100 58 L100 70 Q75 62 50 70 T0 70 Z" fill="#3498DB" clipPath={B} />
        </>
      );
    case "heavy":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#5D6D7E" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="20" width="100" height="6" fill="#2C3E50" clipPath={T} />
        </>
      );
    case "love":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#F5A0B8" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M50 40 C44 28 30 30 30 38 C30 46 50 50 50 50 C50 50 70 46 70 38 C70 30 56 28 50 40 Z" fill="#E74C3C" clipPath={T} />
        </>
      );
    case "friend":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#5BBF4A" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
        </>
      );
    case "moon":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#3A6EA5" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M60 16 A14 14 0 1 0 60 44 A11 11 0 1 1 60 16 Z" fill="#F1C40F" clipPath={T} />
        </>
      );
    case "safari":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#D4AC0D" />
          <rect x="0" y="2" width="100" height="14" fill="#5BBF4A" clipPath={T} />
        </>
      );
    case "sport":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E74C3C" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="20" width="100" height="5" fill="#FFFFFF" clipPath={T} />
          <rect x="0" y="30" width="100" height="5" fill="#FFFFFF" clipPath={T} />
        </>
      );
    case "park":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#E74C3C" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#5BBF4A" clipPath={B} />
        </>
      );
    case "cherish":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" />
          <path d="M50 8 L58 22 L50 36 L42 22 Z" fill="#E74C3C" clipPath={T} />
          <path d="M50 28 L60 44 L40 44 Z" fill="#E74C3C" clipPath={T} />
        </>
      );
    case "dream":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#F5A0C8" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M40 18 a10 8 0 1 0 12 8 a6 5 0 1 1 -12 -8" fill="#FFFFFF" opacity="0.75" clipPath={T} />
        </>
      );
    case "beast":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#6B6B6B" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#6B6B6B" clipPath={B} />
          <g stroke="#E74C3C" strokeWidth="2" fill="none" clipPath={T}>
            <line x1="20" y1="14" x2="40" y2="34" /><line x1="80" y1="14" x2="60" y2="34" />
            <line x1="20" y1="34" x2="40" y2="14" /><line x1="80" y1="34" x2="60" y2="14" />
          </g>
        </>
      );
    case "strange":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#C0392B" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#ECF0F1" clipPath={B} />
          <text x="50" y="36" textAnchor="middle" fontSize="22" fontFamily="monospace" fontWeight="bold" fill="#0A0A0A" clipPath={T}>?</text>
        </>
      );
    case "feather":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#85C1E9" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M50 10 Q64 22 64 38 Q50 42 42 30 Z" fill="#FFFFFF" opacity="0.8" clipPath={T} />
        </>
      );
    case "wing":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#5DADE2" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <path d="M28 14 Q50 26 72 14 Q60 30 50 30 Q40 30 28 14 Z" fill="#FFFFFF" opacity="0.8" clipPath={T} />
        </>
      );
    case "jet":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#AED6F1" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="18" width="100" height="4" fill="#3A6EA5" clipPath={T} />
          <rect x="0" y="30" width="100" height="4" fill="#3A6EA5" clipPath={T} />
        </>
      );
    case "leaden":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#566573" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#ABB2B9" clipPath={B} />
        </>
      );
    case "gigaton":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#ABB2B9" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <rect x="0" y="20" width="100" height="6" fill="#F1C40F" clipPath={T} />
          <rect x="0" y="34" width="100" height="4" fill="#F1C40F" clipPath={T} />
        </>
      );
    case "ancient":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#8B5A2B" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#D2B48C" clipPath={B} />
          <g stroke="#5C3A1E" strokeWidth="1.5" fill="none" clipPath={T}>
            <line x1="0" y1="18" x2="100" y2="22" /><line x1="0" y1="30" x2="100" y2="26" /><line x1="0" y1="40" x2="100" y2="36" />
          </g>
        </>
      );
    case "origin":
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#C0392B" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
          <circle cx="50" cy="26" r="6" fill="#F1C40F" stroke="#0A0A0A" strokeWidth="1.5" clipPath={T} />
        </>
      );
    default:
      return (
        <>
          <circle cx="50" cy="50" r="48" fill="#EE1515" clipPath={T} />
          <circle cx="50" cy="50" r="48" fill="#FFFFFF" clipPath={B} />
        </>
      );
  }
}

function band(v) {
  const map = {
    premier: "#E74C3C", luxury: "#D4AF37", heavy: "#2C3E50", nest: "#3E6B2E",
    park: "#3E6B2E", dusk: "#1A2E22", leaden: "#34495E", ancient: "#5C3A1E",
  };
  return <rect x="0" y="44" width="100" height="10" fill={map[v] || "#0A0A0A"} />;
}

function button(v) {
  switch (v) {
    case "master":
      return (<><circle cx="50" cy="50" r="16" fill="#E84A97" stroke="#0A0A0A" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#E84A97" stroke="#0A0A0A" strokeWidth="2.5" /></>);
    case "premier":
      return (<><circle cx="50" cy="50" r="16" fill="#FFFFFF" stroke="#E74C3C" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#FFFFFF" stroke="#E74C3C" strokeWidth="2.5" /></>);
    case "luxury":
      return (<><circle cx="50" cy="50" r="16" fill="#D4AF37" stroke="#0A0A0A" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#D4AF37" stroke="#0A0A0A" strokeWidth="2.5" /></>);
    case "dusk":
      return (<><circle cx="50" cy="50" r="16" fill="#E74C3C" stroke="#0A0A0A" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#E74C3C" stroke="#0A0A0A" strokeWidth="2.5" /></>);
    default:
      return (<><circle cx="50" cy="50" r="16" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="4" /><circle cx="50" cy="50" r="8" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2.5" /></>);
  }
}

export default function PokeBall({ size = 80, variant = "poke", className = "", glow = false }) {
  const id = useId().replace(/:/g, "");
  const top = `pb-t-${id}`;
  const bot = `pb-b-${id}`;
  const ball = `pb-c-${id}`;
  const g = GLOW[variant] || "#EE1515";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={glow ? { filter: `drop-shadow(0 0 ${size * 0.16}px ${g}66)` } : undefined}
    >
      <defs>
        <clipPath id={top}><rect x="0" y="0" width="100" height="50" /></clipPath>
        <clipPath id={bot}><rect x="0" y="50" width="100" height="50" /></clipPath>
        <clipPath id={ball}><circle cx="50" cy="50" r="48" /></clipPath>
      </defs>

      <g clipPath={`url(#${ball})`}>{body(variant, top, bot)}</g>
      {band(variant)}
      {button(variant)}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#0A0A0A" strokeWidth="2.5" />
      <ellipse cx="36" cy="28" rx="13" ry="8" fill="#FFFFFF" opacity="0.28" clipPath={`url(#${top})`} />
    </svg>
  );
}