// KratosSaga.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * KratosSaga - a full-page scroll timeline with gamer HUD and expanded lore.
 * Requires Tailwind CSS. Optional: framer-motion for smooth animations.
 */
export default function KratosSaga() {
  const containerRef = useRef(null);
  const nodesRef = useRef([]);
  const [visibleSet, setVisibleSet] = useState(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [xpPop, setXpPop] = useState({ index: null, show: false });

  // Expanded, cinematic storyline (11 entries) — extremely detailed
  const timeline = [
    {
      id: 1,
      chapter: "Chapter I",
      title: "The Spartan General",
      year: "c. 500 BCE",
      location: "Sparta — Mountain Holds",
      short:
        "A child of war raised to kill. The Spartan general known as Kratos earns his stripes by fire and blood.",
      long:
        "Born into the unbending iron of Spartan custom, Kratos learns that mercy is a weakness and discipline its only salvation. His tactical mind is sharpened in the scorched passes and frozen ridgelines where boys become men—where a single misstep ends in blood. By twenty summers he commands columns of hardened hoplites, his voice a blade that cleaves order from chaos. Every stride whispers the same prophecy: a marked warrior will turn the tide of gods and men.",
      icon: "⚔️",
      color: "from-red-600 to-orange-500",
      stats: { battles: "47", victories: "47", renown: "Feared" },
      bgGlyph: "🏛️",
    },
    {
      id: 2,
      chapter: "Chapter II",
      title: "The Fields Run Red",
      year: "c. 499 BCE",
      location: "Fields of Attica",
      short:
        "Outnumbered, pinned, and broken—Kratos feels death at his throat and bargains for salvation.",
      long:
        "The enemy tide is endless: thousands of barbarians swell across the plain like a living sea. Spears tear banners to shreds. Kratos watches brothers fall beneath the pounding sky, and for a single, unbearable moment the world narrows to the rasp of his own breath. He cries out, not in prayer but in savage hunger for deliverance. In that plea the war-weary god answers—Ares hears the howl and the bargain is sealed in blood.",
      icon: "🛡️",
      color: "from-orange-500 to-red-700",
      stats: { enemies: "50K+", spartans: "300", survival: "Impossible" },
      bgGlyph: "⛰️",
    },
    {
      id: 3,
      chapter: "Chapter III",
      title: "Chains and Flames — Pact of Ares",
      year: "c. 499 BCE",
      location: "Blood-soaked Plain",
      short:
        "Power for servitude: the god of war offers a blade and fate binds to flesh.",
      long:
        "Ares descends like a storm of iron and hunger, his hand extended with the chill of destiny. In exchange for the lives of Kratos's brothers, the god brands him with infernal chains and the Blades of Chaos—twin instruments of fury welded to his wrists and soul. They burn as they bind; they sing when swung. Kratos stands reborn, a weapon bound, a man whose freedom is the coin of a bargain he cannot recall making without cost.",
      icon: "🔥",
      color: "from-red-700 to-purple-700",
      stats: { power: "Unnatural", servitude: "Absolute", scars: "Deep" },
      bgGlyph: "⚡",
    },
    {
      id: 4,
      chapter: "Chapter IV",
      title: "Juggernaut of the Gods",
      year: "c. 498–492 BCE",
      location: "Across the Mediterranean",
      short:
        "Kratos becomes Olympus' weapon. Cities fall; his name becomes a whisper and a curse.",
      long:
        "Ares sends him like a scythe through city-states. Kratos knows only the rhythm of battle: a swing, a fall, a sea of motionless bodies. He razes sanctuaries, topples walls, and brings victory where the gods desire it. Each triumph tightens the chains of servitude; each scream softens whatever mercy remained in his chest. Legends call him the Ghost of Sparta—an unstoppable storm whose wake is ash.",
      icon: "👑",
      color: "from-purple-600 to-blue-700",
      stats: { cities: "23+", years: "6", heart: "Hardened" },
      bgGlyph: "🏙️",
    },
    {
      id: 5,
      chapter: "Chapter V",
      title: "The Temple and the Blood",
      year: "c. 492 BCE",
      location: "Forgotten Village",
      short:
        "Deceived by the god he serves — Kratos destroys what he loves most.",
      long:
        "Under orders, Kratos storms a humble temple and slaughters those within; the echo of steel drowns prayer. When the frenzy clears, his hands clutch the cold forms of his wife Lysandra and his daughter Calliope. The realization is a lance driven into his chest—Ares engineered the atrocity to break his soul. The god's laughter erupts like thunder. Kratos's world fractures and a new hunger wakes: not for glory, but for vengeance that will swallow Olympus.",
      icon: "💀",
      color: "from-gray-800 to-black",
      stats: { innocents: "All", family: "Lost", guilt: "Infinite" },
      bgGlyph: "🏺",
    },
    {
      id: 6,
      chapter: "Chapter VI",
      title: "Ashes of Remembrance",
      year: "c. 492 BCE",
      location: "Cursed Temple",
      short:
        "The ashes of his family are bound to his skin; he becomes the Ghost—marked by grief.",
      long:
        "The Oracle curses Kratos: the ash of his loved ones will cling to his flesh for all time, a pallid tapestry that announces his sin. Flesh white as bone; eyes like hollow coals. He is exiled, haunted by the sound of laughter that once was warmth. The ash is not only punishment but an identity—no ritual cleanses, no river washes away the weight. He wanders seeking a purpose beyond doom.",
      icon: "👻",
      color: "from-gray-300 to-gray-700",
      stats: { curse: "Eternal", nightmares: "Tethered", purpose: "Unknown" },
      bgGlyph: "🌫️",
    },
    {
      id: 7,
      chapter: "Chapter VII",
      title: "Ten Years of the Gods’ Axe",
      year: "c. 492–482 BCE",
      location: "The Known World",
      short:
        "A decade of tasks and torment—Kratos becomes the gods' instrument to mend their errors.",
      long:
        "Bound by promises and broken bargains, Kratos is set upon quests the gods dare not touch. He slays monsters birthed from vanity and hubris, bargained with titans and plucked fate's threads. Athena whispers of redemption like a fragile reed—promises of absolution traded for loyalty. But apologies do not mend bone-deep sorrow, and the years salt the wound until vengeance tastes like air.",
      icon: "⚡",
      color: "from-blue-400 to-purple-600",
      stats: { labors: "100+", years: "10", hope: "Diminished" },
      bgGlyph: "🏔️",
    },
    {
      id: 8,
      chapter: "Chapter VIII",
      title: "Revelation and Betrayal",
      year: "c. 482 BCE",
      location: "Athens — Stricken City",
      short:
        "Kratos sees the gods’ hand laid bare—he is a tool, not a son. Fury ignites a revolt.",
      long:
        "As war boils, secrets spill. Athena’s counsel is a veil that hid manipulation; Zeus himself curbed Kratos's path. The gods deny any real atonement—only the illusion of it. Kratos's oath of servitude snaps like dry rope. When your benefactors are your exploiters, the only prayer left is to break them. A new campaign begins: not for a god’s favor, but to end the reign of those who made him a monster.",
      icon: "🏛️",
      color: "from-yellow-500 to-red-600",
      stats: { hope: "Shattered", fury: "Ignited", target: "Ares & Olympus" },
      bgGlyph: "🔥",
    },
    {
      id: 9,
      chapter: "Chapter IX",
      title: "Pandora's Trial",
      year: "c. 481 BCE",
      location: "Temple of Hephaestus — The Labyrinth",
      short:
        "To slay a god, Kratos must claim what the ancients hid: Pandora’s Box.",
      long:
        "Hephaestus’s forges and Pandora's cunning produce a temple that is equal parts machine and mind. Puzzles rip at memory, corridors devour time, and the soul is the primary price of entry. Kratos pushes onward—losing pieces of memory, sacrificing comforts, trading peace for possibility. When the box is finally pried free, its light is not salvation but the cold edge of consequence: power without guarantee of peace.",
      icon: "📦",
      color: "from-purple-600 to-pink-600",
      stats: { trials: "Relentless", sacrifice: "Everything", power: "God-bound" },
      bgGlyph: "🏺",
    },
    {
      id: 10,
      chapter: "Chapter X",
      title: "Titanic End — Deicide",
      year: "c. 480 BCE",
      location: "Over Athens — The Final Duel",
      short:
        "A battle to shake the heavens: Kratos and Ares collide in a storm of divine ruin.",
      long:
        "On the smoking heights above a crumbling city, men and gods alike bear witness. Ares, furious with the rage of an unbound mortal, rains divine fury; Kratos, with Pandora's terrible boon, answers with raw and honed hatred. Steel and flame become poetry of ruin; at the height of motion Kratos drives a blade into the god’s heart. Olympus trembles. The God of War falls, but Kratos's victory is a hollow throne—he has toppled one monster only to become something else entirely.",
      icon: "🗡️",
      color: "from-red-600 to-gold-500",
      stats: { clash: "World-shattering", witness: "Gods & mortals", outcome: "Deicide" },
      bgGlyph: "⚡",
    },
    {
      id: 11,
      chapter: "Epilogue",
      title: "Crown of Ashes — New God of War",
      year: "c. 479 BCE",
      location: "Mount Olympus",
      short:
        "Kratos takes Ares' mantle—but the throne doesn't answer the ache inside him.",
      long:
        "Zeus offers Olympus' seat, a crown heavy with consequence. Kratos accepts, not for glory but because the path forward is burned into him. Divinity gives him reach but not reprieve; ghosts of Lysandra and Calliope ride the wind and cry out at night. The God of War now carries not only power but an oath: to burn the rot of deceit from the heavens. The saga is never truly finished; it mutates into a new war beneath new suns.",
      icon: "👑",
      color: "from-gold-400 to-red-600",
      stats: { power: "Divine", peace: "None", vengeance: "Eternal" },
      bgGlyph: "🏛️",
    },
  ];

  // IntersectionObserver for reveal + set current index
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newSet = new Set(visibleSet);
        entries.forEach((entry) => {
          const idx = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            newSet.add(idx);
            // trigger XP popup for this item briefly
            triggerXp(idx);
          } else {
            // optionally remove when out of view
            // newSet.delete(idx);
          }
        });
        setVisibleSet(newSet);

        // compute current index by highest visible index or fallback to scroll
        const visibleArray = Array.from(newSet).sort((a, b) => a - b);
        if (visibleArray.length) {
          setCurrentIndex(visibleArray[visibleArray.length - 1]);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0.25, 0.6],
      }
    );

    nodesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodesRef.current]);

  // scroll progress calculation and parallax transforms
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const winH = window.innerHeight;
      const docH =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const prog = Math.min(1, Math.max(0, scrollY / docH));
      setScrollProgress(prog);

      // simple parallax by translating background layers
      const layers = document.querySelectorAll("[data-parallax]");
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth) || 0.2;
        layer.style.transform = `translateY(${scrollY * depth}px)`;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // XP popup trigger
  const triggerXp = (index) => {
    setXpPop({ index, show: true });
    setTimeout(() => setXpPop((s) => ({ ...s, show: false })), 1400);
  };

  // helper to set refs
  const setNodeRef = (el, i) => {
    nodesRef.current[i] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
      {/* HUD Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-red-600/30">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300">
              GAMERGRAM
            </div>
            <div className="flex flex-col text-xs text-gray-300">
              <span className="tracking-wider">SAGA MODE</span>
              <span className="text-gray-400 text-[11px]">KRATOS — THE GHOST</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-300">Chapter</div>
            <div className="px-3 py-1 rounded-lg bg-black/60 border border-red-600/40 text-sm">
              {currentIndex + 1}/{timeline.length}
            </div>

            <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-200"
                style={{ width: `${Math.floor(scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Parallax & Particles (background layers) */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div
          data-parallax
          data-depth="0.08"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#6b0000_0%,_transparent_30%)] opacity-40"
        />
        <div
          data-parallax
          data-depth="0.04"
          className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#1f0a0a_0%,_transparent_25%)] opacity-30"
        />
        {/* embers + digital noise */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
              className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60 animate-[ember_3s_linear_infinite]"
            />
          ))}
        </div>
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <filter id="grain"><feTurbulence baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"></feTurbulence></filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Hero */}
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/60" />
        <div className="text-center z-10 px-6 max-w-4xl">
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-9xl md:text-[140px] leading-none mb-6">⚔️</div>
            <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-yellow-300">
              KRATOS
            </h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              The Ghost of Sparta — a soldier remade by gods, a legend forged in ash,
              and a vengeful force that will tear the heavens down.
            </p>

            <div className="mt-8 inline-flex items-center gap-4 bg-black/60 border border-red-600/30 px-5 py-3 rounded-xl">
              <div className="text-xs text-gray-200 uppercase tracking-widest">Scroll to begin</div>
              <div className="text-xs text-red-300 font-semibold">+ XP on milestones</div>
            </div>
          </motion.div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <div className="w-9 h-12 rounded-full border-2 border-red-500 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-red-500 rounded animate-bounce" />
          </div>
        </div>
      </section>

      {/* Timeline container */}
      <main className="relative max-w-6xl mx-auto px-6 pb-36" ref={containerRef}>
        {/* central spine line (desktop center) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 opacity-80" />

        <div className="space-y-28 md:space-y-40 mt-10">
          {timeline.map((item, i) => {
            const isVisible = visibleSet.has(i);
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <article
                key={item.id}
                data-index={i}
                ref={(el) => setNodeRef(el, i)}
                className={`timeline-item relative md:min-h-[18rem] flex flex-col md:flex-row items-stretch md:items-start gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {/* NODE - visible on both small & large */}
                <div className={`md:w-1/2 md:px-8 ${side === "left" ? "md:pr-12 md:order-1" : "md:pl-12 md:order-2"} order-2 md:order-1`}>
                  <motion.div
                    initial={{ x: side === "left" ? -30 : 30, opacity: 0 }}
                    animate={{ x: 0, opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.7, delay: 0.05 * i }}
                    className="relative group"
                  >
                    <div className="absolute -left-6 md:-left-12 top-4 md:top-6 w-14 h-14 md:w-20 md:h-20 rounded-full bg-black/60 border-4 border-red-600/40 flex items-center justify-center text-2xl md:text-3xl shadow-xl z-10">
                      <span className="select-none">{item.icon || "⚔️"}</span>
                    </div>

                    <div className="bg-black/70 backdrop-blur-md border border-red-700/20 rounded-3xl p-6 md:pl-28 md:pt-6 shadow-2xl relative overflow-hidden">
                      {/* animated glow */}
                      <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} style={{ background: `linear-gradient(90deg, rgba(255,90,70,0.06), rgba(255,160,70,0.04))` }} />

                      <div className="flex items-start gap-4">
                        <div>
                          <div className="text-sm text-red-300 font-semibold tracking-wide">{item.chapter}</div>
                          <div className="text-xs text-gray-400">{item.bgGlyph} • {item.location}</div>
                        </div>
                        <div className="ml-auto text-sm text-gray-400">{item.year}</div>
                      </div>

                      <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">{item.title}</h3>
                      <p className="mt-3 text-gray-300 leading-relaxed text-base">{item.long}</p>

                      <div className="mt-6 grid grid-cols-3 gap-4">
                        {Object.entries(item.stats).map(([k, v]) => (
                          <div key={k} className="text-center">
                            <div className="text-xl md:text-2xl font-extrabold text-red-400">{v}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest">{k}</div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex items-center justify-between gap-4">
                        <div className="px-3 py-2 rounded-full bg-black/50 border border-red-600/20 text-sm text-red-300 font-semibold">KEY: {item.title}</div>
                        <div className="text-sm text-gray-400 italic">Hover for ambient glow</div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* spacer / center column for node visuals on large screens */}
                <div className="hidden md:flex md:w-[80px] items-center justify-center order-1 md:order-2">
                  {/* vertical connector + animated node ring */}
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl border-4 border-black flex items-center justify-center">
                      <div className="w-7 h-7 rounded-full bg-black/60 border-2 border-red-600 flex items-center justify-center text-sm">{i + 1}</div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-red-600 to-transparent opacity-80"></div>
                  </div>
                </div>

                {/* mirror side content */}
                <div className={`md:w-1/2 md:px-8 ${side === "left" ? "md:pl-12 md:order-3" : "md:pr-12 md:order-3"} order-3 md:order-3`}>
                  {/* On smaller screens the right column becomes another stacked card - keep it light or add flavor */}
                  <div className="hidden md:block">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
                      transition={{ duration: 0.6, delay: 0.06 * i }}
                      className="bg-black/60 border border-red-700/20 rounded-2xl p-4 shadow-inner"
                    >
                      <div className="text-sm text-gray-300">SUMMARY</div>
                      <div className="mt-2 text-gray-400 text-sm">{item.short}</div>
                      <div className="mt-4 flex gap-3">
                        <div className="px-3 py-2 bg-red-900/30 rounded-full text-xs">+{100 * (i + 1)} XP</div>
                        <div className="px-3 py-2 bg-gray-800/40 rounded-full text-xs">ACHIEVEMENT: {item.chapter.replace("Chapter", "Ch")}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* XP popup */}
      <AnimatePresence>
        {xpPop.show && xpPop.index !== null && (
          <motion.div
            initial={{ y: 20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -10, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.45 }}
            className="fixed right-8 bottom-20 z-50 bg-black/80 border border-red-600/40 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-sm font-bold">+{100 * (xpPop.index + 1)}</div>
            <div className="text-sm">
              <div className="text-xs text-gray-300">MILESTONE</div>
              <div className="font-semibold">Chapter {xpPop.index + 1} Complete</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="mt-24 bg-black/80 border-t border-red-700/10">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="text-6xl mb-6">👑</div>
          <h3 className="text-3xl font-bold mb-3 text-white">The Saga Continues</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            This timeline is the first act of Kratos' story — a brutal, haunted journey through gods, monsters, and the broken threads of fate.
            Continue exploring to unlock deep lore, artifacts, and audio-backed cutscenes integrated with your Gamergram profile.
          </p>
          <div className="mt-6 text-red-400 font-semibold">GAMERGRAM — WHERE LEGENDS LIVE</div>
        </div>
      </footer>

      {/* small style for ember animation (Tailwind JIT custom) */}
      <style>{`
        @keyframes ember {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-30px) scale(0.9); opacity: 0.6; }
          100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
        }
        .animate-[ember_3s_linear_infinite] {
          animation: ember 6s linear infinite;
        }
      `}</style>
    </div>
  );
}

