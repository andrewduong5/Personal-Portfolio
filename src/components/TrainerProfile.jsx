import React, { useState } from "react";
import { User, ShieldCheck, MapPin, Zap, GraduationCap, Award, Cpu, Database, RotateCcw } from "lucide-react";
import PokeBall from "./PokeBall";
import SectionPokemon from "./AmbientPokemon";
import TypewriterTitle from "./TypewriterTitle";

// Authentic Gen 3 Battle Mechanics Engine
const CHARIZARD_DEFENSE = {
  ELECTRIC: 2.0,
  WATER: 2.0,
  ICE: 2.0,
  FIRE: 0.5,
  GRASS: 0.25,
  STEEL: 0.5,
  NORMAL: 1.0,
  GROUND: 0.0,
};

const PARTY_ROSTER = {
  pikachu: {
    id: "pikachu",
    name: "PIKACHU",
    lvl: 99,
    maxHp: 100,
    backSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/25.gif",
    spriteSize: "w-20 h-20 sm:w-24 sm:h-24",
    type: "ELECTRIC",
    defense: { FIRE: 1.0, FLYING: 0.5, DRAGON: 1.0, NORMAL: 1.0, GROUND: 2.0, ELECTRIC: 0.5 },
    moves: [
      { name: "THUNDERBOLT", type: "ELECTRIC", baseDamage: 28 },
      { name: "VOLT TACKLE", type: "ELECTRIC", baseDamage: 34 },
      { name: "IRON TAIL", type: "STEEL", baseDamage: 18 },
      { name: "QUICK ATTACK", type: "NORMAL", baseDamage: 14 },
    ],
  },
  blastoise: {
    id: "blastoise",
    name: "BLASTOISE",
    lvl: 98,
    maxHp: 120,
    backSprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/9.gif",
    spriteSize: "w-24 h-24 sm:w-28 sm:h-28",
    type: "WATER",
    defense: { FIRE: 0.5, WATER: 0.5, STEEL: 0.5, ICE: 0.5, ELECTRIC: 2.0, GRASS: 2.0 },
    moves: [
      { name: "HYDRO PUMP", type: "WATER", baseDamage: 36 },
      { name: "ICE BEAM", type: "ICE", baseDamage: 24 },
      { name: "SURF", type: "WATER", baseDamage: 26 },
      { name: "EARTHQUAKE", type: "GROUND", baseDamage: 28 },
    ],
  },
};

const INITIAL_BAG = [
  { id: "maxpotion", name: "MAX POTION", count: 2, type: "HEAL", amount: 999 },
  { id: "hyperpotion", name: "HYPER POTION", count: 3, type: "HEAL", amount: 60 },
  { id: "xattack", name: "X ATTACK", count: 2, type: "BUFF", amount: 12 },
];

function RetroBattleArena() {
  const [activeMonKey, setActiveMonKey] = useState("pikachu");
  const [partyHp, setPartyHp] = useState({ pikachu: 100, blastoise: 120 });
  const [attackBuffs, setAttackBuffs] = useState({ pikachu: 0, blastoise: 0 });
  const [enemyHp, setEnemyHp] = useState(100);
  const [bag, setBag] = useState(INITIAL_BAG);
  const [menuView, setMenuView] = useState("COMMAND"); // COMMAND | FIGHT | BAG | POKEMON
  const [dialogue, setDialogue] = useState("What will PIKACHU do?");
  const [isBusy, setIsBusy] = useState(false);
  const [battleEnded, setBattleEnded] = useState(false);

  // FX states
  const [playerAttacking, setPlayerAttacking] = useState(false);
  const [enemyAttacking, setEnemyAttacking] = useState(false);
  const [playerBlink, setPlayerBlink] = useState(false);
  const [enemyBlink, setEnemyBlink] = useState(false);
  const [screenShake, setScreenShake] = useState(false);

  const activeMon = PARTY_ROSTER[activeMonKey];
  const currentActiveHp = partyHp[activeMonKey];

  const enemyMoves = [
    { name: "FLAMETHROWER", type: "FIRE", baseDamage: 26 },
    { name: "AIR SLASH", type: "FLYING", baseDamage: 20 },
    { name: "DRAGON CLAW", type: "DRAGON", baseDamage: 22 },
    { name: "FIRE BLAST", type: "FIRE", baseDamage: 32 },
  ];

  const resetBattle = () => {
    setActiveMonKey("pikachu");
    setPartyHp({ pikachu: 100, blastoise: 120 });
    setAttackBuffs({ pikachu: 0, blastoise: 0 });
    setEnemyHp(100);
    setBag(INITIAL_BAG.map((i) => ({ ...i })));
    setMenuView("COMMAND");
    setDialogue("A wild CHARIZARD appeared!\nWhat will PIKACHU do?");
    setIsBusy(false);
    setBattleEnded(false);
    setPlayerAttacking(false);
    setEnemyAttacking(false);
    setPlayerBlink(false);
    setEnemyBlink(false);
    setScreenShake(false);
  };

  const triggerEnemyTurn = (forcedActiveKey = activeMonKey) => {
    const mon = PARTY_ROSTER[forcedActiveKey];
    setTimeout(() => {
      const enemyMove = enemyMoves[Math.floor(Math.random() * enemyMoves.length)];
      setDialogue(`Wild CHARIZARD used\n${enemyMove.name}!`);
      setEnemyAttacking(true);

      setTimeout(() => {
        setEnemyAttacking(false);
        setPlayerBlink(true);

        const eMult = mon.defense[enemyMove.type] ?? 1.0;
        if (eMult >= 2.0) setScreenShake(true);

        const eDamage = Math.floor(enemyMove.baseDamage * eMult + (Math.random() * 4 - 2));
        setPartyHp((prev) => {
          const nextHp = Math.max(0, prev[forcedActiveKey] - eDamage);
          return { ...prev, [forcedActiveKey]: nextHp };
        });

        setTimeout(() => {
          setPlayerBlink(false);
          setScreenShake(false);

          if (eMult >= 2.0) {
            setDialogue("It's super effective!");
          } else if (eMult <= 0.5) {
            setDialogue("It's not very effective...");
          }

          setTimeout(() => {
            setPartyHp((latest) => {
              if (latest[forcedActiveKey] === 0) {
                const otherKey = forcedActiveKey === "pikachu" ? "blastoise" : "pikachu";
                if (latest[otherKey] > 0) {
                  setDialogue(`${mon.name} fainted!\nChoose another POKéMON!`);
                  setMenuView("POKEMON");
                } else {
                  setDialogue("All POKéMON have fainted!\nYou blacked out...");
                  setBattleEnded(true);
                }
              } else {
                setDialogue(`What will ${mon.name} do?`);
                setMenuView("COMMAND");
              }
              return latest;
            });
            setIsBusy(false);
          }, 900);
        }, 600);
      }, 700);
    }, 1100);
  };

  const handleFightSelect = (move) => {
    if (isBusy || currentActiveHp <= 0 || enemyHp <= 0 || battleEnded) return;
    setIsBusy(true);
    setMenuView("COMMAND");
    setDialogue(`${activeMon.name} used\n${move.name}!`);
    setPlayerAttacking(true);

    setTimeout(() => {
      setPlayerAttacking(false);
      setEnemyBlink(true);

      const multiplier = CHARIZARD_DEFENSE[move.type] ?? 1.0;
      if (multiplier >= 2.0) setScreenShake(true);

      const bonusDmg = attackBuffs[activeMonKey];
      const calcDamage = Math.floor((move.baseDamage + bonusDmg) * multiplier + (Math.random() * 4 - 2));
      const nextEnemyHp = Math.max(0, enemyHp - calcDamage);
      setEnemyHp(nextEnemyHp);

      setTimeout(() => {
        setEnemyBlink(false);
        setScreenShake(false);

        if (multiplier >= 2.0) {
          setDialogue("It's super effective!");
        } else if (multiplier <= 0.5) {
          setDialogue("It's not very effective...");
        }

        if (nextEnemyHp === 0) {
          setTimeout(() => {
            setDialogue("Enemy CHARIZARD\nfainted!");
            setTimeout(() => {
              setDialogue(`${activeMon.name} gained\n2,480 EXP. Points!`);
              setBattleEnded(true);
              setIsBusy(false);
            }, 1300);
          }, 1000);
          return;
        }

        triggerEnemyTurn();
      }, 600);
    }, 550);
  };

  const handleUseItem = (item) => {
    if (isBusy || item.count <= 0 || battleEnded) return;
    setIsBusy(true);
    setMenuView("COMMAND");

    setBag((prev) =>
      prev.map((i) => (i.id === item.id ? { ...i, count: i.count - 1 } : i))
    );

    if (item.type === "HEAL") {
      setDialogue(`Used ${item.name} on\n${activeMon.name}!`);
      setPartyHp((prev) => ({
        ...prev,
        [activeMonKey]: Math.min(activeMon.maxHp, prev[activeMonKey] + item.amount),
      }));

      setTimeout(() => {
        setDialogue(`${activeMon.name}'s HP\nwas restored!`);
        setTimeout(() => {
          triggerEnemyTurn();
        }, 900);
      }, 700);
    } else if (item.type === "BUFF") {
      setDialogue(`Used ${item.name}!\n${activeMon.name}'s ATTACK rose!`);
      setAttackBuffs((prev) => ({
        ...prev,
        [activeMonKey]: prev[activeMonKey] + item.amount,
      }));

      setTimeout(() => {
        triggerEnemyTurn();
      }, 900);
    }
  };

  const handleSwitchPokemon = (targetKey) => {
    if (isBusy || targetKey === activeMonKey || battleEnded) return;
    if (partyHp[targetKey] <= 0) {
      setDialogue("There is no will to fight!");
      return;
    }

    setIsBusy(true);
    setMenuView("COMMAND");
    setDialogue(`${activeMon.name}, that's enough!\nCome back!`);

    setTimeout(() => {
      setActiveMonKey(targetKey);
      const incomingMon = PARTY_ROSTER[targetKey];
      setDialogue(`Go! ${incomingMon.name}!`);

      setTimeout(() => {
        triggerEnemyTurn(targetKey);
      }, 800);
    }, 900);
  };

  const handleRun = () => {
    if (isBusy || battleEnded) return;
    setIsBusy(true);
    setMenuView("COMMAND");

    const canRun = Math.random() > 0.3;
    if (canRun) {
      setDialogue("Got away safely!");
      setBattleEnded(true);
      setIsBusy(false);
    } else {
      setDialogue("Can't escape!");
      setTimeout(() => {
        triggerEnemyTurn();
      }, 800);
    }
  };

  const getHpBarColor = (current, max) => {
    const pct = (current / max) * 100;
    if (pct > 50) return "bg-[#28C858]";
    if (pct > 20) return "bg-[#F8A800]";
    return "bg-[#F83800]";
  };

  return (
    <div
      className={`w-full max-w-[490px] mx-auto bg-[#181818] border-[6px] border-[#2A2A2A] rounded-lg p-2.5 shadow-2xl relative select-none font-['Press_Start_2P',monospace] ${
        screenShake ? "animate-[wiggle_0.15s_ease-in-out_infinite]" : ""
      }`}
    >
      {/* Gen 3 Stage Screen */}
      <div className="relative w-full h-[230px] sm:h-[255px] bg-gradient-to-b from-[#70B8E8] via-[#B8D8F0] to-[#E0F0F8] rounded-t border-4 border-[#303030] overflow-hidden flex flex-col justify-between p-3.5 shadow-inner">
        <div className="absolute top-[88px] right-2 w-44 h-12 bg-[#88B860] border-2 border-[#587840] rounded-[50%] opacity-90 shadow-sm pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-52 h-14 bg-[#78A850] border-2 border-[#486830] rounded-[50%] opacity-90 shadow-sm pointer-events-none" />

        {/* Charizard HUD */}
        <div className="relative z-10 w-[190px] sm:w-[210px] bg-[#F8F8F8] border-[3px] border-[#383838] rounded-tl-xl rounded-br-xl p-2 shadow-[2px_2px_0px_#181818]">
          <div className="flex justify-between items-center text-[9px] text-[#282828] font-bold tracking-tight">
            <span>CHARIZARD</span>
            <span className="text-[8px] text-[#585858]">Lv95</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 bg-[#404040] p-1 rounded-sm border border-[#202020]">
            <span className="text-[7px] text-[#F8A800] font-black px-0.5">HP</span>
            <div className="flex-1 bg-[#202020] h-2 rounded-xs overflow-hidden p-0.5">
              <div
                className={`h-full transition-all duration-500 rounded-xs ${getHpBarColor(enemyHp, 100)}`}
                style={{ width: `${enemyHp}%` }}
              />
            </div>
          </div>
        </div>

        {/* Charizard Sprite */}
        <div
          className={`absolute top-6 right-8 z-10 transition-transform duration-200 ${
            enemyAttacking ? "translate-y-4 -translate-x-5" : ""
          } ${enemyBlink ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif"
            alt="Charizard"
            className={`w-24 h-24 sm:w-28 sm:h-28 object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] image-pixelated transition-opacity duration-300 ${
              enemyHp === 0 ? "opacity-0 translate-y-6" : ""
            }`}
          />
        </div>

        {/* Player Sprite */}
        <div
          className={`absolute bottom-2 left-6 z-10 transition-transform duration-200 ${
            playerAttacking ? "-translate-y-4 translate-x-5" : ""
          } ${playerBlink ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={activeMon.backSprite}
            alt={activeMon.name}
            className={`${activeMon.spriteSize} object-contain filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] image-pixelated transition-opacity duration-300 ${
              currentActiveHp === 0 ? "opacity-0 translate-y-6" : ""
            }`}
          />
        </div>

        {/* Player HUD */}
        <div className="relative z-10 ml-auto w-[200px] sm:w-[220px] bg-[#F8F8F8] border-[3px] border-[#383838] rounded-tl-xl rounded-br-xl p-2 shadow-[2px_2px_0px_#181818] mt-auto">
          <div className="flex justify-between items-center text-[9px] text-[#282828] font-bold tracking-tight">
            <span>{activeMon.name}</span>
            <span className="text-[8px] text-[#585858]">Lv{activeMon.lvl}</span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 bg-[#404040] p-1 rounded-sm border border-[#202020]">
            <span className="text-[7px] text-[#F8A800] font-black px-0.5">HP</span>
            <div className="flex-1 bg-[#202020] h-2 rounded-xs overflow-hidden p-0.5">
              <div
                className={`h-full transition-all duration-500 rounded-xs ${getHpBarColor(currentActiveHp, activeMon.maxHp)}`}
                style={{ width: `${(currentActiveHp / activeMon.maxHp) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-right text-[8px] text-[#282828] font-bold mt-0.5">
            {currentActiveHp}/{activeMon.maxHp}
          </div>
        </div>
      </div>

      {/* Control Console */}
      <div className="grid grid-cols-12 bg-[#202020] border-4 border-t-0 border-[#303030] rounded-b overflow-hidden min-h-[102px]">
        {/* Dialogue View */}
        <div className="col-span-7 bg-[#F8F8F8] border-r-4 border-[#303030] p-2.5 flex items-center justify-between">
          <p className="text-[8px] sm:text-[9px] text-[#282828] leading-[1.6] whitespace-pre-line font-bold">
            {dialogue}
          </p>
          {battleEnded && (
            <button
              onClick={resetBattle}
              className="ml-1 bg-amber-400 hover:bg-amber-300 text-black border border-black px-1.5 py-1 text-[7px] font-bold rounded-xs shrink-0 flex items-center gap-0.5"
            >
              <RotateCcw size={9} /> RESTART
            </button>
          )}
        </div>

        {/* Buttons Menu */}
        <div className="col-span-5 bg-[#304858] p-1.5 flex flex-col justify-center border-l border-[#486880]">
          {menuView === "COMMAND" && (
            <div className="grid grid-cols-2 gap-1.5 h-full">
              <button
                disabled={isBusy || currentActiveHp === 0 || enemyHp === 0 || battleEnded}
                onClick={() => setMenuView("FIGHT")}
                className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[8px] font-bold rounded-xs transition-colors flex items-center justify-center disabled:opacity-40"
              >
                FIGHT
              </button>
              <button
                disabled={isBusy || battleEnded}
                onClick={() => setMenuView("BAG")}
                className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[8px] font-bold rounded-xs transition-colors flex items-center justify-center disabled:opacity-40"
              >
                BAG
              </button>
              <button
                disabled={isBusy || battleEnded}
                onClick={() => setMenuView("POKEMON")}
                className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[8px] font-bold rounded-xs transition-colors flex items-center justify-center disabled:opacity-40"
              >
                POKéMON
              </button>
              <button
                disabled={isBusy || battleEnded}
                onClick={handleRun}
                className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[8px] font-bold rounded-xs transition-colors flex items-center justify-center disabled:opacity-40"
              >
                RUN
              </button>
            </div>
          )}

          {/* FIGHT Submenu */}
          {menuView === "FIGHT" && (
            <div className="grid grid-cols-2 gap-1 h-full">
              {activeMon.moves.map((m) => (
                <button
                  key={m.name}
                  onClick={() => handleFightSelect(m)}
                  className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[6.5px] p-1 font-bold rounded-xs transition-colors flex flex-col justify-center items-start text-left"
                >
                  <span className="truncate w-full">{m.name}</span>
                  <span className="text-[5.5px] text-[#585858] font-mono">{m.type}</span>
                </button>
              ))}
              <button
                onClick={() => setMenuView("COMMAND")}
                className="col-span-2 bg-[#D0D0D0] hover:bg-[#E0E0E0] text-[#202020] text-[6.5px] py-0.5 font-bold border border-black rounded-xs text-center"
              >
                ◀ BACK
              </button>
            </div>
          )}

          {/* BAG Submenu */}
          {menuView === "BAG" && (
            <div className="flex flex-col gap-1 h-full justify-between">
              {bag.map((item) => (
                <button
                  key={item.id}
                  disabled={item.count <= 0}
                  onClick={() => handleUseItem(item)}
                  className="bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828] border-2 border-[#181818] text-[6.5px] px-1 py-1 font-bold rounded-xs transition-colors flex justify-between items-center disabled:opacity-30"
                >
                  <span className="truncate">{item.name}</span>
                  <span className="text-[#882020]">×{item.count}</span>
                </button>
              ))}
              <button
                onClick={() => setMenuView("COMMAND")}
                className="bg-[#D0D0D0] hover:bg-[#E0E0E0] text-[#202020] text-[6.5px] py-0.5 font-bold border border-black rounded-xs text-center"
              >
                ◀ BACK
              </button>
            </div>
          )}

          {/* POKÉMON Submenu */}
          {menuView === "POKEMON" && (
            <div className="flex flex-col gap-1 h-full justify-between">
              {Object.keys(PARTY_ROSTER).map((key) => {
                const mon = PARTY_ROSTER[key];
                const hp = partyHp[key];
                const isCurrent = key === activeMonKey;
                return (
                  <button
                    key={key}
                    disabled={isCurrent || hp <= 0}
                    onClick={() => handleSwitchPokemon(key)}
                    className={`border-2 border-[#181818] text-[6.5px] px-1 py-1 font-bold rounded-xs flex justify-between items-center transition-colors ${
                      isCurrent
                        ? "bg-[#80C080] text-black cursor-default"
                        : hp <= 0
                        ? "bg-[#D8D8D8] text-gray-500 opacity-40 cursor-not-allowed"
                        : "bg-[#F8F8F8] hover:bg-[#F8D888] active:bg-[#F8B800] text-[#282828]"
                    }`}
                  >
                    <span>{mon.name}</span>
                    <span className={hp === 0 ? "text-red-700" : "text-black"}>
                      {hp}/{mon.maxHp}
                    </span>
                  </button>
                );
              })}
              <button
                disabled={currentActiveHp === 0}
                onClick={() => setMenuView("COMMAND")}
                className="bg-[#D0D0D0] hover:bg-[#E0E0E0] text-[#202020] text-[6.5px] py-0.5 font-bold border border-black rounded-xs text-center disabled:opacity-40"
              >
                ◀ BACK
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrainerProfile() {
  const cardData = [
    { k: "SCHOOL", v: "UC Riverside" },
    { k: "DEGREE", v: "B.S. Info Systems" },
    { k: "GPA", v: "3.5 / 4.0" },
    { k: "GRAD", v: "June 2026" },
    { k: "LANG", v: "EN / VI / ES" },
    { k: "REGION", v: "Ventura, CA" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
      <div className="absolute top-1/3 -right-24 w-72 h-72 bg-poke-blue/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-4 mb-3" aria-hidden="true">
            <div className="h-px flex-1 bg-white/10" />
            <span className="geist-mono text-[9px] text-poke-yellow tracking-widest flex items-center gap-1">
              <Zap size={10} className="text-poke-yellow fill-poke-yellow" />
              SECTION 01
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
              <User className="w-5 h-5 text-poke-red animate-pulse" />
              <TypewriterTitle
                text="TRAINER PROFILE"
                className="press-start text-xs sm:text-sm md:text-base text-white tracking-wide"
              />
              <PokeBall size={20} variant="great" />
            </div>
            <SectionPokemon species="Shiny Porygon-Z" />
          </div>
        </div>

        {/* 2-Column Layout: Left (Integrated Trainer Dossier) & Right (Interactive Battle Arena) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dossier Information */}
          <div className="lg:col-span-6 space-y-4">
            {/* Bio Narrative Box */}
            <div className="border border-white/20 bg-white/[0.02] p-5 sm:p-6 rounded-md shadow-lg hover:border-poke-red/50 transition-colors duration-300">
              <div className="flex items-start gap-3 mb-3.5">
                <span className="press-start text-[8px] text-poke-red mt-1 animate-ping" aria-hidden="true">▶</span>
                <p className="geist-mono text-xs sm:text-sm text-white/85 leading-relaxed">
                  Information Systems graduate from UC Riverside with a foundation in cloud infrastructure, information security, and risk analysis. Proven ability to evaluate complex systems, identify operational vulnerabilities, and translate data insights into secure, scalable solutions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="press-start text-[8px] text-poke-yellow mt-1 animate-pulse" aria-hidden="true">▶</span>
                <p className="geist-mono text-xs sm:text-sm text-white/65 leading-relaxed">
                  Backed by practical experience in AI evaluation and data analysis. AWS Cloud Practitioner and CompTIA A+ certified, with active CompTIA credentialing in progress.
                </p>
              </div>
            </div>

            {/* Special Abilities & Attacks (Migrated from Trainer Card) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="border border-white/15 bg-white/[0.015] p-3.5 rounded-md hover:border-poke-blue/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="press-start text-[8px] text-white flex items-center gap-1.5">
                    <Cpu size={11} className="text-poke-blue" /> CLOUD INFRA
                  </span>
                  <span className="geist-mono text-[8px] text-poke-blue tracking-widest font-bold">ABILITY</span>
                </div>
                <p className="geist-mono text-[10px] text-white/65 leading-relaxed">
                  Deploys resilient, scalable systems with zero-downtime tolerance across AWS, virtualization & Docker containers.
                </p>
              </div>

              <div className="border border-white/15 bg-white/[0.015] p-3.5 rounded-md hover:border-poke-red/40 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="press-start text-[8px] text-white flex items-center gap-1.5">
                    <Database size={11} className="text-poke-red" /> DATA ANALYSIS
                  </span>
                  <span className="press-start text-[9px] text-poke-red">150</span>
                </div>
                <p className="geist-mono text-[10px] text-white/65 leading-relaxed">
                  Translates complex telemetry into actionable, risk-aware decisions and performance reporting.
                </p>
              </div>
            </div>

            {/* Trainer Stats Grid (Migrated from Trainer Card) */}
            <div className="border border-white/15 bg-white/[0.015] p-4 rounded-md">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <span className="press-start text-[8px] text-poke-yellow tracking-wider flex items-center gap-1.5">
                  <GraduationCap size={12} /> TRAINER CREDENTIALS
                </span>
                <span className="geist-mono text-[9px] text-white/40">STATUS: ACTIVE</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cardData.map((s) => (
                  <div key={s.k} className="bg-white/[0.02] border border-white/10 p-2 rounded-xs">
                    <p className="geist-mono text-[8px] text-white/40 tracking-widest">{s.k}</p>
                    <p className="geist-mono text-[11px] text-white font-semibold mt-0.5 truncate">{s.v}</p>
                  </div>
                ))}
              </div>

              {/* Combat Resistances Strip */}
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between geist-mono text-[9px] text-white/50">
                <span>WEAKNESS: <span className="text-white/80">NONE</span></span>
                <span>RESIST: <span className="text-poke-blue font-bold">DOWNTIME</span></span>
                <span className="flex items-center gap-1">
                  RETREAT:
                  <span className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-poke-red" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Battle Simulator */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <RetroBattleArena />
          </div>

        </div>
      </div>
    </section>
  );
}