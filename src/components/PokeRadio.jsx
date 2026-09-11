import React, { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, SkipForward, Radio } from "lucide-react";

// Local project audio files served directly from public/audio/
const PLAYLIST = [
  {
    title: "TITLE / OPENING",
    region: "KANTO (GEN 1)",
    src: "/audio/opening.mp3",
  },
  {
    title: "ROUTE 1",
    region: "KANTO (GEN 1)",
    src: "/audio/route-1.mp3",
  },
  {
    title: "LAVENDER TOWN",
    region: "KANTO (GEN 1)",
    src: "/audio/lavender-town.mp3",
  },
  {
    title: "POKÉMON CENTER",
    region: "HEALING THEME",
    src: "/audio/pokemon-center.mp3",
  },
];

export default function PokeRadio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const audioRef = useRef(null);

  const currentTrack = PLAYLIST[currentTrackIndex];

  // Reload and play smoothly when changing channels
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.35;
    setHasError(false);

    if (isPlaying) {
      audio.load();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Audio playback interrupted:", err);
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIndex]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.load();
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch((err) => {
            console.error("Playback error:", err);
            setHasError(true);
            setIsPlaying(false);
          });
      }
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length);
  };

  const handleAudioError = () => {
    setHasError(true);
    setIsPlaying(false);
  };

  return (
    <aside
      aria-label="Retro Poke-Radio Player"
      className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 select-none"
    >
      <audio
        ref={audioRef}
        src={currentTrack.src}
        preload="metadata"
        onError={handleAudioError}
        onEnded={nextTrack}
      />

      {/* Expanded Radio Interface Popup */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 w-64 bg-[#0A0A0A]/95 border-2 border-poke-red backdrop-blur-md p-3.5 rounded-sm shadow-[0_0_25px_rgba(239,68,68,0.3)]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <Radio size={12} className="text-poke-red animate-pulse" />
              <span className="press-start text-[8px] text-poke-red tracking-wider">POKÉ-RADIO</span>
            </div>
            <span className="geist-mono text-[9px] text-poke-yellow">
              CH. {currentTrackIndex + 1}/{PLAYLIST.length}
            </span>
          </div>

          {/* Now Playing Screen */}
          <div className="bg-black/80 border border-white/10 p-2.5 rounded-sm mb-3">
            <p className="press-start text-[8px] text-white truncate mb-1">
              {hasError ? "MISSING FILE" : currentTrack.title}
            </p>
            <p className="geist-mono text-[9px] text-white/40 tracking-wider">
              {hasError ? "CHECK PUBLIC/AUDIO/" : currentTrack.region}
            </p>

            {/* Retro 8-bit Equalizer Bars */}
            <div className="flex items-end gap-1 h-4 mt-2">
              {[60, 100, 40, 80, 50, 90, 70, 30].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-xs bg-poke-red transition-all duration-300 ${
                    isPlaying && !isMuted ? "animate-pulse" : "opacity-20"
                  }`}
                  style={{
                    height: isPlaying && !isMuted ? `${h}%` : "20%",
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Playback Controls */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={togglePlay}
                className="px-3 py-1.5 border border-white/20 hover:border-poke-yellow bg-white/5 hover:bg-poke-yellow hover:text-black transition-colors rounded-sm flex items-center gap-1 text-white cursor-pointer active:scale-95"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={10} className="fill-current" /> : <Play size={10} className="fill-current" />}
                <span className="press-start text-[7px]">{isPlaying ? "PAUSE" : "PLAY"}</span>
              </button>

              <button
                type="button"
                onClick={nextTrack}
                className="p-1.5 border border-white/20 hover:border-white text-white/70 hover:text-white transition-colors rounded-sm cursor-pointer active:scale-95"
                title="Next Tune"
              >
                <SkipForward size={12} />
              </button>
            </div>

            <button
              type="button"
              onClick={toggleMute}
              className={`p-1.5 border rounded-sm transition-colors cursor-pointer active:scale-95 ${
                isMuted
                  ? "border-poke-red/80 text-poke-red bg-poke-red/10"
                  : "border-white/20 text-white/70 hover:text-white"
              }`}
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          </div>
        </div>
      )}

      {/* Mini Radio Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3 py-2 border-2 border-white/20 bg-black/90 hover:border-poke-red hover:bg-white/5 backdrop-blur-md rounded-sm transition-all shadow-[0_0_15px_rgba(0,0,0,0.8)] cursor-pointer group"
      >
        <Radio
          size={14}
          className={`transition-colors ${
            isPlaying && !isMuted
              ? "text-poke-red animate-pulse"
              : "text-white/40 group-hover:text-white"
          }`}
        />
        <div className="text-left hidden sm:block">
          <p className="press-start text-[6px] text-white/40">TUNER</p>
          <p className="geist-mono text-[10px] text-white font-bold tracking-wider">
            {isPlaying && !isMuted ? currentTrack.title : "RADIO OFF"}
          </p>
        </div>

        <div className="pl-1 border-l border-white/10 text-white/50 group-hover:text-white">
          {isPlaying && !isMuted ? (
            <Volume2 size={12} className="text-poke-yellow" />
          ) : (
            <VolumeX size={12} />
          )}
        </div>
      </button>
    </aside>
  );
}