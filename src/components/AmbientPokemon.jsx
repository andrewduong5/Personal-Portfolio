import React from "react";

const POKEMON_MAP = {
  porygonz: {
    name: "Shiny Porygon-Z",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/474.gif",
    glow: "drop-shadow-[0_0_12px_rgba(59,130,246,0.75)] drop-shadow-[0_0_24px_rgba(236,72,153,0.4)]",
    size: "w-12 h-12 sm:w-14 sm:h-14",
  },
  rotom: {
    name: "Shiny Rotom",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/479.gif",
    glow: "drop-shadow-[0_0_12px_rgba(249,115,22,0.75)] drop-shadow-[0_0_24px_rgba(234,179,8,0.4)]",
    size: "w-11 h-11 sm:w-13 sm:h-13",
  },
  metagross: {
    name: "Shiny Mega Metagross",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10076.gif",
    glow: "drop-shadow-[0_0_12px_rgba(203,213,225,0.75)] drop-shadow-[0_0_24px_rgba(56,189,248,0.4)]",
    size: "w-16 h-16 sm:w-20 sm:h-20",
  },
  alakazam: {
    name: "Shiny Mega Alakazam",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10037.gif",
    glow: "drop-shadow-[0_0_12px_rgba(234,179,8,0.75)] drop-shadow-[0_0_24px_rgba(168,85,247,0.4)]",
    size: "w-14 h-14 sm:w-16 sm:h-16",
  },
  magnezone: {
    name: "Shiny Magnezone",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/462.gif",
    glow: "drop-shadow-[0_0_12px_rgba(45,212,191,0.75)] drop-shadow-[0_0_24px_rgba(59,130,246,0.4)]",
    size: "w-13 h-13 sm:w-15 sm:h-15",
  },
  lucario: {
    name: "Shiny Mega Lucario",
    url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/10059.gif",
    glow: "drop-shadow-[0_0_12px_rgba(132,204,22,0.75)] drop-shadow-[0_0_24px_rgba(234,179,8,0.4)]",
    size: "w-13 h-13 sm:w-15 sm:h-15",
  },
};

export default function SectionPokemon({ species = "porygonz" }) {
  // Normalizes input: lowercases, removes "shiny", "mega", hyphens, and whitespace
  const normalizedKey = species
    .toLowerCase()
    .replace(/\b(shiny|mega)\b/g, "")
    .replace(/[^a-z0-9]/g, "");

  const mon = POKEMON_MAP[normalizedKey] || POKEMON_MAP.porygonz;

  return (
    <div
      className="inline-flex items-center justify-center select-none transition-transform duration-300 hover:scale-115 cursor-pointer shrink-0"
      title={`Pokémon Companion: ${mon.name}`}
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