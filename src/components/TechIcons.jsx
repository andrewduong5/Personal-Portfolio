import React from "react";

/* ---- White variants ---- */
export function AwsIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="#FFFFFF">
        <rect x="16" y="42" width="14" height="20" rx="1" />
        <rect x="43" y="30" width="14" height="32" rx="1" />
        <rect x="70" y="48" width="14" height="14" rx="1" />
      </g>
      <path d="M20 76 Q50 90 80 76" stroke="#FFCB05" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      <circle cx="82" cy="73" r="2.6" fill="#FFCB05" />
    </svg>
  );
}

export function LinuxIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M50 14c-9 0-15 7-15 18 0 6 2 9 3 14 1 5 1 8 1 12 0 6-2 11-6 17-4 6-9 10-9 17 0 5 5 8 13 8h26c8 0 13-3 13-8 0-7-5-11-9-17-4-6-6-11-6-17 0-4 0-7 1-12 1-5 3-8 3-14 0-11-6-18-15-18Z" fill="#FFFFFF" />
      <path d="M50 14c-9 0-15 7-15 18 0 4 1 7 2 11 3-2 7-3 13-3s10 1 13 3c1-4 2-7 2-11 0-11-6-18-15-18Z" fill="#E8ECEF" />
      <ellipse cx="44" cy="30" rx="3.2" ry="4.4" fill="#0A0A0A" />
      <ellipse cx="56" cy="30" rx="3.2" ry="4.4" fill="#0A0A0A" />
      <circle cx="45" cy="29" r="1" fill="#FFFFFF" />
      <circle cx="57" cy="29" r="1" fill="#FFFFFF" />
      <path d="M46 39c0 2 2 4 4 4s4-2 4-4c0-1-2-2-4-2s-4 1-4 2Z" fill="#FFCB05" stroke="#0A0A0A" strokeWidth="1" />
      <path d="M38 86c0 2 3 4 6 4M62 86c0 2-3 4-6 4" stroke="#FFCB05" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ---- Real brand logos ---- */
export function PythonIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <path d="M44 8c-8 0-14 4-14 14v10h28v4H30c-8 0-14 6-14 16s6 16 14 16h6V58c0-6 6-10 12-10h14c8 0 12-6 12-14V22c0-10-6-14-14-14z" fill="#3776AB" />
      <path d="M56 92c8 0 14-4 14-14V68H42v-4h28c8 0 14-6 14-16s-6-16-14-16h-6v10c0 6-6 10-12 10H38c-8 0-12 6-12 14v14c0 10 6 14 14 14z" fill="#FFD43B" />
      <circle cx="38" cy="18" r="2.6" fill="#FFFFFF" />
      <circle cx="62" cy="82" r="2.6" fill="#3776AB" />
    </svg>
  );
}

export function SqlIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="#336791">
        <ellipse cx="50" cy="22" rx="30" ry="11" />
        <path d="M20 22v28c0 6 60 6 60 0V22c0 6-60 6-60 0z" />
        <path d="M20 50v28c0 6 60 6 60 0V50c0 6-60 6-60 0z" opacity="0.85" />
      </g>
      <ellipse cx="50" cy="22" rx="30" ry="11" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.5" />
      <text x="50" y="62" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">SQL</text>
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="10" y="10" width="80" height="80" rx="8" fill="#F7DF1E" />
      <text x="50" y="68" textAnchor="middle" fontSize="38" fontWeight="bold" fill="#0A0A0A" fontFamily="monospace">JS</text>
    </svg>
  );
}

export function CppIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="10" y="16" width="80" height="68" rx="10" fill="#00599C" />
      <text x="50" y="60" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">C++</text>
    </svg>
  );
}

export function PowerShellIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="10" y="16" width="80" height="68" rx="10" fill="#012456" />
      <path d="M28 40 L44 50 L28 60" stroke="#5391FE" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="50" y1="60" x2="72" y2="60" stroke="#5391FE" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function ProxmoxIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g fill="#E57000">
        <path d="M28 18 L50 50 L28 82 L18 82 L40 50 L18 18 Z" />
        <path d="M72 18 L50 50 L72 82 L82 82 L60 50 L82 18 Z" />
      </g>
    </svg>
  );
}

export function DockerIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" fill="#2496ED">
      <path d="M14 56h58c0 0-2 16-18 18-10 1-28 1-40-1-4-1-4-5 0-8 1-1 0-5 0-9z" />
      <rect x="28" y="44" width="9" height="9" />
      <rect x="39" y="44" width="9" height="9" />
      <rect x="50" y="44" width="9" height="9" />
      <rect x="39" y="33" width="9" height="9" />
      <rect x="50" y="33" width="9" height="9" />
      <rect x="50" y="22" width="9" height="9" />
    </svg>
  );
}

export function WindowsIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" fill="#0078D4">
      <rect x="14" y="14" width="32" height="32" />
      <rect x="54" y="14" width="32" height="32" />
      <rect x="14" y="54" width="32" height="32" />
      <rect x="54" y="54" width="32" height="32" />
    </svg>
  );
}

export function MetaIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke="#0866FF" strokeWidth="7" strokeLinecap="round">
      <path d="M14 50c0-12 6-20 14-20 7 0 11 5 16 14 5-9 9-14 16-14 8 0 14 8 14 20s-6 20-14 20c-7 0-11-5-16-14-5 9-9 14-16 14-8 0-14-8-14-20z" />
    </svg>
  );
}

export function AbTestingIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="34" fill="none" stroke="#E74C3C" strokeWidth="4" />
      <line x1="50" y1="18" x2="50" y2="82" stroke="#E74C3C" strokeWidth="4" />
      <text x="35" y="59" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#E74C3C" fontFamily="monospace">A</text>
      <text x="65" y="59" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#27AE60" fontFamily="monospace">B</text>
    </svg>
  );
}

export function KpiIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true" fill="#F1C40F">
      <rect x="20" y="50" width="13" height="30" />
      <rect x="43" y="36" width="13" height="44" />
      <rect x="66" y="22" width="13" height="58" />
    </svg>
  );
}

export function ExcelIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="14" y="14" width="72" height="72" rx="6" fill="#217346" />
      <g stroke="#FFFFFF" strokeWidth="1.5" opacity="0.35">
        <line x1="30" y1="30" x2="30" y2="70" /><line x1="50" y1="30" x2="50" y2="70" /><line x1="70" y1="30" x2="70" y2="70" />
        <line x1="20" y1="40" x2="80" y2="40" /><line x1="20" y1="55" x2="80" y2="55" />
      </g>
      <text x="50" y="66" textAnchor="middle" fontSize="34" fontWeight="bold" fill="#FFFFFF" fontFamily="monospace">X</text>
    </svg>
  );
}

export function LlmEvalIcon({ size = 24, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect x="28" y="28" width="44" height="44" rx="6" fill="none" stroke="#9B59B6" strokeWidth="4" />
      <circle cx="50" cy="50" r="9" fill="#9B59B6" />
      <g stroke="#9B59B6" strokeWidth="3" strokeLinecap="round">
        <line x1="28" y1="38" x2="20" y2="38" /><line x1="28" y1="50" x2="20" y2="50" /><line x1="28" y1="62" x2="20" y2="62" />
        <line x1="72" y1="38" x2="80" y2="38" /><line x1="72" y1="50" x2="80" y2="50" /><line x1="72" y1="62" x2="80" y2="62" />
        <line x1="38" y1="28" x2="38" y2="20" /><line x1="62" y1="28" x2="62" y2="20" />
        <line x1="38" y1="72" x2="38" y2="80" /><line x1="62" y1="72" x2="62" y2="80" />
      </g>
    </svg>
  );
}