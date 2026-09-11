import React from "react";

// All-Shiny Roster: Animated Showdown sprites with dual-layer neon auras
const POKEMON_MAP = {
  groudon: {
    name: "Shiny Primal Groudon",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10078.gif",
    glow: "drop-shadow-[0_0_12px_rgba(234,179,8,0.75)] drop-shadow-[0_0_24px_rgba(249,115,22,0.4)]",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  kyogre: {
    name: "Shiny Primal Kyogre",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10077.gif",
    glow: "drop-shadow-[0_0_12px_rgba(236,72,153,0.75)] drop-shadow-[0_0_24px_rgba(168,85,247,0.4)]",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  rayquaza: {
    name: "Shiny Mega Rayquaza",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10079.gif",
    glow: "drop-shadow-[0_0_12px_rgba(34,197,94,0.75)] drop-shadow-[0_0_24px_rgba(16,185,129,0.4)]",
    size: "w-16 h-16 sm:w-20 sm:h-20",
  },
  mewtwo: {
    name: "Shiny Mega Mewtwo Y",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10044.gif",
    glow: "drop-shadow-[0_0_12px_rgba(168,85,247,0.75)] drop-shadow-[0_0_24px_rgba(192,132,252,0.4)]",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  dialga: {
    name: "Shiny Dialga",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/483.gif",
    glow: "drop-shadow-[0_0_12px_rgba(45,212,191,0.75)] drop-shadow-[0_0_24px_rgba(6,182,212,0.4)]",
    size: "w-13 h-13 sm:w-15 sm:h-15",
  },
  kyurem: {
    name: "Shiny Black Kyurem",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10022.gif",
    glow: "drop-shadow-[0_0_12px_rgba(250,204,21,0.75)] drop-shadow-[0_0_24px_rgba(245,158,11,0.4)]",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
};

export default function SectionPokemon({ species = "groudon" }) {
  const mon = POKEMON_MAP[species.toLowerCase()] || POKEMON_MAP.groudon;

  return (
    <div
      className="inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-115 cursor-pointer shrink-0"
      title={`Shiny Legendary: ${mon.name}`}
    >
      <img
        src={mon.url}
        alt={mon.name}
        className={`${mon.size} ${mon.glow} animate-float image-pixelated object-contain`}
        loading="lazy"
      />
    </div>
  );
}