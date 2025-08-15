// // KratosSaga.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// /**
//  * KratosSaga - a full-page scroll timeline with gamer HUD and expanded lore.
//  * Requires Tailwind CSS. Optional: framer-motion for smooth animations.
//  */
// export default function KratosSaga() {
//   const containerRef = useRef(null);
//   const nodesRef = useRef([]);
//   const [visibleSet, setVisibleSet] = useState(new Set());
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [xpPop, setXpPop] = useState({ index: null, show: false });

//   // Expanded, cinematic storyline (11 entries) — extremely detailed
//   const timeline = [
//     {
//       id: 1,
//       chapter: "Chapter I",
//       title: "The Spartan General",
//       year: "c. 500 BCE",
//       location: "Sparta — Mountain Holds",
//       short:
//         "A child of war raised to kill. The Spartan general known as Kratos earns his stripes by fire and blood.",
//       long:
//         "Born into the unbending iron of Spartan custom, Kratos learns that mercy is a weakness and discipline its only salvation. His tactical mind is sharpened in the scorched passes and frozen ridgelines where boys become men—where a single misstep ends in blood. By twenty summers he commands columns of hardened hoplites, his voice a blade that cleaves order from chaos. Every stride whispers the same prophecy: a marked warrior will turn the tide of gods and men.",
//       icon: "⚔️",
//       color: "from-red-600 to-orange-500",
//       stats: { battles: "47", victories: "47", renown: "Feared" },
//       bgGlyph: "🏛️",
//     },
//     {
//       id: 2,
//       chapter: "Chapter II",
//       title: "The Fields Run Red",
//       year: "c. 499 BCE",
//       location: "Fields of Attica",
//       short:
//         "Outnumbered, pinned, and broken—Kratos feels death at his throat and bargains for salvation.",
//       long:
//         "The enemy tide is endless: thousands of barbarians swell across the plain like a living sea. Spears tear banners to shreds. Kratos watches brothers fall beneath the pounding sky, and for a single, unbearable moment the world narrows to the rasp of his own breath. He cries out, not in prayer but in savage hunger for deliverance. In that plea the war-weary god answers—Ares hears the howl and the bargain is sealed in blood.",
//       icon: "🛡️",
//       color: "from-orange-500 to-red-700",
//       stats: { enemies: "50K+", spartans: "300", survival: "Impossible" },
//       bgGlyph: "⛰️",
//     },
//     {
//       id: 3,
//       chapter: "Chapter III",
//       title: "Chains and Flames — Pact of Ares",
//       year: "c. 499 BCE",
//       location: "Blood-soaked Plain",
//       short:
//         "Power for servitude: the god of war offers a blade and fate binds to flesh.",
//       long:
//         "Ares descends like a storm of iron and hunger, his hand extended with the chill of destiny. In exchange for the lives of Kratos's brothers, the god brands him with infernal chains and the Blades of Chaos—twin instruments of fury welded to his wrists and soul. They burn as they bind; they sing when swung. Kratos stands reborn, a weapon bound, a man whose freedom is the coin of a bargain he cannot recall making without cost.",
//       icon: "🔥",
//       color: "from-red-700 to-purple-700",
//       stats: { power: "Unnatural", servitude: "Absolute", scars: "Deep" },
//       bgGlyph: "⚡",
//     },
//     {
//       id: 4,
//       chapter: "Chapter IV",
//       title: "Juggernaut of the Gods",
//       year: "c. 498–492 BCE",
//       location: "Across the Mediterranean",
//       short:
//         "Kratos becomes Olympus' weapon. Cities fall; his name becomes a whisper and a curse.",
//       long:
//         "Ares sends him like a scythe through city-states. Kratos knows only the rhythm of battle: a swing, a fall, a sea of motionless bodies. He razes sanctuaries, topples walls, and brings victory where the gods desire it. Each triumph tightens the chains of servitude; each scream softens whatever mercy remained in his chest. Legends call him the Ghost of Sparta—an unstoppable storm whose wake is ash.",
//       icon: "👑",
//       color: "from-purple-600 to-blue-700",
//       stats: { cities: "23+", years: "6", heart: "Hardened" },
//       bgGlyph: "🏙️",
//     },
//     {
//       id: 5,
//       chapter: "Chapter V",
//       title: "The Temple and the Blood",
//       year: "c. 492 BCE",
//       location: "Forgotten Village",
//       short:
//         "Deceived by the god he serves — Kratos destroys what he loves most.",
//       long:
//         "Under orders, Kratos storms a humble temple and slaughters those within; the echo of steel drowns prayer. When the frenzy clears, his hands clutch the cold forms of his wife Lysandra and his daughter Calliope. The realization is a lance driven into his chest—Ares engineered the atrocity to break his soul. The god's laughter erupts like thunder. Kratos's world fractures and a new hunger wakes: not for glory, but for vengeance that will swallow Olympus.",
//       icon: "💀",
//       color: "from-gray-800 to-black",
//       stats: { innocents: "All", family: "Lost", guilt: "Infinite" },
//       bgGlyph: "🏺",
//     },
//     {
//       id: 6,
//       chapter: "Chapter VI",
//       title: "Ashes of Remembrance",
//       year: "c. 492 BCE",
//       location: "Cursed Temple",
//       short:
//         "The ashes of his family are bound to his skin; he becomes the Ghost—marked by grief.",
//       long:
//         "The Oracle curses Kratos: the ash of his loved ones will cling to his flesh for all time, a pallid tapestry that announces his sin. Flesh white as bone; eyes like hollow coals. He is exiled, haunted by the sound of laughter that once was warmth. The ash is not only punishment but an identity—no ritual cleanses, no river washes away the weight. He wanders seeking a purpose beyond doom.",
//       icon: "👻",
//       color: "from-gray-300 to-gray-700",
//       stats: { curse: "Eternal", nightmares: "Tethered", purpose: "Unknown" },
//       bgGlyph: "🌫️",
//     },
//     {
//       id: 7,
//       chapter: "Chapter VII",
//       title: "Ten Years of the Gods’ Axe",
//       year: "c. 492–482 BCE",
//       location: "The Known World",
//       short:
//         "A decade of tasks and torment—Kratos becomes the gods' instrument to mend their errors.",
//       long:
//         "Bound by promises and broken bargains, Kratos is set upon quests the gods dare not touch. He slays monsters birthed from vanity and hubris, bargained with titans and plucked fate's threads. Athena whispers of redemption like a fragile reed—promises of absolution traded for loyalty. But apologies do not mend bone-deep sorrow, and the years salt the wound until vengeance tastes like air.",
//       icon: "⚡",
//       color: "from-blue-400 to-purple-600",
//       stats: { labors: "100+", years: "10", hope: "Diminished" },
//       bgGlyph: "🏔️",
//     },
//     {
//       id: 8,
//       chapter: "Chapter VIII",
//       title: "Revelation and Betrayal",
//       year: "c. 482 BCE",
//       location: "Athens — Stricken City",
//       short:
//         "Kratos sees the gods’ hand laid bare—he is a tool, not a son. Fury ignites a revolt.",
//       long:
//         "As war boils, secrets spill. Athena’s counsel is a veil that hid manipulation; Zeus himself curbed Kratos's path. The gods deny any real atonement—only the illusion of it. Kratos's oath of servitude snaps like dry rope. When your benefactors are your exploiters, the only prayer left is to break them. A new campaign begins: not for a god’s favor, but to end the reign of those who made him a monster.",
//       icon: "🏛️",
//       color: "from-yellow-500 to-red-600",
//       stats: { hope: "Shattered", fury: "Ignited", target: "Ares & Olympus" },
//       bgGlyph: "🔥",
//     },
//     {
//       id: 9,
//       chapter: "Chapter IX",
//       title: "Pandora's Trial",
//       year: "c. 481 BCE",
//       location: "Temple of Hephaestus — The Labyrinth",
//       short:
//         "To slay a god, Kratos must claim what the ancients hid: Pandora’s Box.",
//       long:
//         "Hephaestus’s forges and Pandora's cunning produce a temple that is equal parts machine and mind. Puzzles rip at memory, corridors devour time, and the soul is the primary price of entry. Kratos pushes onward—losing pieces of memory, sacrificing comforts, trading peace for possibility. When the box is finally pried free, its light is not salvation but the cold edge of consequence: power without guarantee of peace.",
//       icon: "📦",
//       color: "from-purple-600 to-pink-600",
//       stats: { trials: "Relentless", sacrifice: "Everything", power: "God-bound" },
//       bgGlyph: "🏺",
//     },
//     {
//       id: 10,
//       chapter: "Chapter X",
//       title: "Titanic End — Deicide",
//       year: "c. 480 BCE",
//       location: "Over Athens — The Final Duel",
//       short:
//         "A battle to shake the heavens: Kratos and Ares collide in a storm of divine ruin.",
//       long:
//         "On the smoking heights above a crumbling city, men and gods alike bear witness. Ares, furious with the rage of an unbound mortal, rains divine fury; Kratos, with Pandora's terrible boon, answers with raw and honed hatred. Steel and flame become poetry of ruin; at the height of motion Kratos drives a blade into the god’s heart. Olympus trembles. The God of War falls, but Kratos's victory is a hollow throne—he has toppled one monster only to become something else entirely.",
//       icon: "🗡️",
//       color: "from-red-600 to-gold-500",
//       stats: { clash: "World-shattering", witness: "Gods & mortals", outcome: "Deicide" },
//       bgGlyph: "⚡",
//     },
//     {
//       id: 11,
//       chapter: "Epilogue",
//       title: "Crown of Ashes — New God of War",
//       year: "c. 479 BCE",
//       location: "Mount Olympus",
//       short:
//         "Kratos takes Ares' mantle—but the throne doesn't answer the ache inside him.",
//       long:
//         "Zeus offers Olympus' seat, a crown heavy with consequence. Kratos accepts, not for glory but because the path forward is burned into him. Divinity gives him reach but not reprieve; ghosts of Lysandra and Calliope ride the wind and cry out at night. The God of War now carries not only power but an oath: to burn the rot of deceit from the heavens. The saga is never truly finished; it mutates into a new war beneath new suns.",
//       icon: "👑",
//       color: "from-gold-400 to-red-600",
//       stats: { power: "Divine", peace: "None", vengeance: "Eternal" },
//       bgGlyph: "🏛️",
//     },
//   ];

//   // IntersectionObserver for reveal + set current index
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const newSet = new Set(visibleSet);
//         entries.forEach((entry) => {
//           const idx = Number(entry.target.dataset.index);
//           if (entry.isIntersecting) {
//             newSet.add(idx);
//             // trigger XP popup for this item briefly
//             triggerXp(idx);
//           } else {
//             // optionally remove when out of view
//             // newSet.delete(idx);
//           }
//         });
//         setVisibleSet(newSet);

//         // compute current index by highest visible index or fallback to scroll
//         const visibleArray = Array.from(newSet).sort((a, b) => a - b);
//         if (visibleArray.length) {
//           setCurrentIndex(visibleArray[visibleArray.length - 1]);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: [0.25, 0.6],
//       }
//     );

//     nodesRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [nodesRef.current]);

//   // scroll progress calculation and parallax transforms
//   useEffect(() => {
//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       const winH = window.innerHeight;
//       const docH =
//         document.documentElement.scrollHeight - window.innerHeight || 1;
//       const prog = Math.min(1, Math.max(0, scrollY / docH));
//       setScrollProgress(prog);

//       // simple parallax by translating background layers
//       const layers = document.querySelectorAll("[data-parallax]");
//       layers.forEach((layer) => {
//         const depth = Number(layer.dataset.depth) || 0.2;
//         layer.style.transform = `translateY(${scrollY * depth}px)`;
//       });
//     };

//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // XP popup trigger
//   const triggerXp = (index) => {
//     setXpPop({ index, show: true });
//     setTimeout(() => setXpPop((s) => ({ ...s, show: false })), 1400);
//   };

//   // helper to set refs
//   const setNodeRef = (el, i) => {
//     nodesRef.current[i] = el;
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-x-hidden">
//       {/* HUD Header */}
//       <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b border-red-600/30">
//         <div className="container mx-auto px-6 py-3 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <div className="text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-300">
//               GAMERGRAM
//             </div>
//             <div className="flex flex-col text-xs text-gray-300">
//               <span className="tracking-wider">SAGA MODE</span>
//               <span className="text-gray-400 text-[11px]">KRATOS — THE GHOST</span>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="text-sm text-gray-300">Chapter</div>
//             <div className="px-3 py-1 rounded-lg bg-black/60 border border-red-600/40 text-sm">
//               {currentIndex + 1}/{timeline.length}
//             </div>

//             <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 transition-all duration-200"
//                 style={{ width: `${Math.floor(scrollProgress * 100)}%` }}
//               />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Parallax & Particles (background layers) */}
//       <div className="fixed inset-0 pointer-events-none -z-10">
//         <div
//           data-parallax
//           data-depth="0.08"
//           className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#6b0000_0%,_transparent_30%)] opacity-40"
//         />
//         <div
//           data-parallax
//           data-depth="0.04"
//           className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_#1f0a0a_0%,_transparent_25%)] opacity-30"
//         />
//         {/* embers + digital noise */}
//         <div className="absolute inset-0">
//           {[...Array(30)].map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 4}s`,
//               }}
//               className="absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-60 animate-[ember_3s_linear_infinite]"
//             />
//           ))}
//         </div>
//         <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
//           <filter id="grain"><feTurbulence baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"></feTurbulence></filter>
//           <rect width="100%" height="100%" filter="url(#grain)" />
//         </svg>
//       </div>

//       {/* Hero */}
//       <section className="h-screen flex items-center justify-center relative">
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="text-center z-10 px-6 max-w-4xl">
//           <motion.div
//             initial={{ scale: 0.98, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//           >
//             <div className="text-9xl md:text-[140px] leading-none mb-6">⚔️</div>
//             <h1 className="text-6xl md:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-500 to-yellow-300">
//               KRATOS
//             </h1>
//             <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
//               The Ghost of Sparta — a soldier remade by gods, a legend forged in ash,
//               and a vengeful force that will tear the heavens down.
//             </p>

//             <div className="mt-8 inline-flex items-center gap-4 bg-black/60 border border-red-600/30 px-5 py-3 rounded-xl">
//               <div className="text-xs text-gray-200 uppercase tracking-widest">Scroll to begin</div>
//               <div className="text-xs text-red-300 font-semibold">+ XP on milestones</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* scroll hint */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
//           <div className="w-9 h-12 rounded-full border-2 border-red-500 flex items-start justify-center p-2">
//             <div className="w-1 h-3 bg-red-500 rounded animate-bounce" />
//           </div>
//         </div>
//       </section>

//       {/* Timeline container */}
//       <main className="relative max-w-6xl mx-auto px-6 pb-36" ref={containerRef}>
//         {/* central spine line (desktop center) */}
//         <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 opacity-80" />

//         <div className="space-y-28 md:space-y-40 mt-10">
//           {timeline.map((item, i) => {
//             const isVisible = visibleSet.has(i);
//             const side = i % 2 === 0 ? "left" : "right";
//             return (
//               <article
//                 key={item.id}
//                 data-index={i}
//                 ref={(el) => setNodeRef(el, i)}
//                 className={`timeline-item relative md:min-h-[18rem] flex flex-col md:flex-row items-stretch md:items-start gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//               >
//                 {/* NODE - visible on both small & large */}
//                 <div className={`md:w-1/2 md:px-8 ${side === "left" ? "md:pr-12 md:order-1" : "md:pl-12 md:order-2"} order-2 md:order-1`}>
//                   <motion.div
//                     initial={{ x: side === "left" ? -30 : 30, opacity: 0 }}
//                     animate={{ x: 0, opacity: isVisible ? 1 : 0 }}
//                     transition={{ duration: 0.7, delay: 0.05 * i }}
//                     className="relative group"
//                   >
//                     <div className="absolute -left-6 md:-left-12 top-4 md:top-6 w-14 h-14 md:w-20 md:h-20 rounded-full bg-black/60 border-4 border-red-600/40 flex items-center justify-center text-2xl md:text-3xl shadow-xl z-10">
//                       <span className="select-none">{item.icon || "⚔️"}</span>
//                     </div>

//                     <div className="bg-black/70 backdrop-blur-md border border-red-700/20 rounded-3xl p-6 md:pl-28 md:pt-6 shadow-2xl relative overflow-hidden">
//                       {/* animated glow */}
//                       <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} style={{ background: `linear-gradient(90deg, rgba(255,90,70,0.06), rgba(255,160,70,0.04))` }} />

//                       <div className="flex items-start gap-4">
//                         <div>
//                           <div className="text-sm text-red-300 font-semibold tracking-wide">{item.chapter}</div>
//                           <div className="text-xs text-gray-400">{item.bgGlyph} • {item.location}</div>
//                         </div>
//                         <div className="ml-auto text-sm text-gray-400">{item.year}</div>
//                       </div>

//                       <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-tight">{item.title}</h3>
//                       <p className="mt-3 text-gray-300 leading-relaxed text-base">{item.long}</p>

//                       <div className="mt-6 grid grid-cols-3 gap-4">
//                         {Object.entries(item.stats).map(([k, v]) => (
//                           <div key={k} className="text-center">
//                             <div className="text-xl md:text-2xl font-extrabold text-red-400">{v}</div>
//                             <div className="text-xs text-gray-400 uppercase tracking-widest">{k}</div>
//                           </div>
//                         ))}
//                       </div>

//                       <div className="mt-6 flex items-center justify-between gap-4">
//                         <div className="px-3 py-2 rounded-full bg-black/50 border border-red-600/20 text-sm text-red-300 font-semibold">KEY: {item.title}</div>
//                         <div className="text-sm text-gray-400 italic">Hover for ambient glow</div>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>

//                 {/* spacer / center column for node visuals on large screens */}
//                 <div className="hidden md:flex md:w-[80px] items-center justify-center order-1 md:order-2">
//                   {/* vertical connector + animated node ring */}
//                   <div className="relative">
//                     <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-2xl border-4 border-black flex items-center justify-center">
//                       <div className="w-7 h-7 rounded-full bg-black/60 border-2 border-red-600 flex items-center justify-center text-sm">{i + 1}</div>
//                     </div>
//                     <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-red-600 to-transparent opacity-80"></div>
//                   </div>
//                 </div>

//                 {/* mirror side content */}
//                 <div className={`md:w-1/2 md:px-8 ${side === "left" ? "md:pl-12 md:order-3" : "md:pr-12 md:order-3"} order-3 md:order-3`}>
//                   {/* On smaller screens the right column becomes another stacked card - keep it light or add flavor */}
//                   <div className="hidden md:block">
//                     <motion.div
//                       initial={{ y: 20, opacity: 0 }}
//                       animate={{ y: 0, opacity: isVisible ? 1 : 0 }}
//                       transition={{ duration: 0.6, delay: 0.06 * i }}
//                       className="bg-black/60 border border-red-700/20 rounded-2xl p-4 shadow-inner"
//                     >
//                       <div className="text-sm text-gray-300">SUMMARY</div>
//                       <div className="mt-2 text-gray-400 text-sm">{item.short}</div>
//                       <div className="mt-4 flex gap-3">
//                         <div className="px-3 py-2 bg-red-900/30 rounded-full text-xs">+{100 * (i + 1)} XP</div>
//                         <div className="px-3 py-2 bg-gray-800/40 rounded-full text-xs">ACHIEVEMENT: {item.chapter.replace("Chapter", "Ch")}</div>
//                       </div>
//                     </motion.div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </main>

//       {/* XP popup */}
//       <AnimatePresence>
//         {xpPop.show && xpPop.index !== null && (
//           <motion.div
//             initial={{ y: 20, opacity: 0, scale: 0.95 }}
//             animate={{ y: 0, opacity: 1, scale: 1 }}
//             exit={{ y: -10, opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.45 }}
//             className="fixed right-8 bottom-20 z-50 bg-black/80 border border-red-600/40 px-4 py-3 rounded-xl shadow-xl flex items-center gap-3"
//           >
//             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-400 flex items-center justify-center text-sm font-bold">+{100 * (xpPop.index + 1)}</div>
//             <div className="text-sm">
//               <div className="text-xs text-gray-300">MILESTONE</div>
//               <div className="font-semibold">Chapter {xpPop.index + 1} Complete</div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Footer */}
//       <footer className="mt-24 bg-black/80 border-t border-red-700/10">
//         <div className="container mx-auto px-6 py-16 text-center">
//           <div className="text-6xl mb-6">👑</div>
//           <h3 className="text-3xl font-bold mb-3 text-white">The Saga Continues</h3>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             This timeline is the first act of Kratos' story — a brutal, haunted journey through gods, monsters, and the broken threads of fate.
//             Continue exploring to unlock deep lore, artifacts, and audio-backed cutscenes integrated with your Gamergram profile.
//           </p>
//           <div className="mt-6 text-red-400 font-semibold">GAMERGRAM — WHERE LEGENDS LIVE</div>
//         </div>
//       </footer>

//       {/* small style for ember animation (Tailwind JIT custom) */}
//       <style>{`
//         @keyframes ember {
//           0% { transform: translateY(0) scale(1); opacity: 0.9; }
//           50% { transform: translateY(-30px) scale(0.9); opacity: 0.6; }
//           100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
//         }
//         .animate-[ember_3s_linear_infinite] {
//           animation: ember 6s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// }









//LOGIN PAGE

// import React, { useState } from 'react';
// import { Gamepad2, User, Lock, Eye, EyeOff, Zap, Shield, Trophy } from 'lucide-react';

// export default function GamerGramLogin() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate login process
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
//       {/* Main Login Container */}
//       <div className="w-full max-w-md">
//         {/* Logo Section */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
//             <Gamepad2 className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">
//             GAMER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GRAM</span>
//           </h1>
//           <p className="text-gray-400 text-sm">Connect. Play. Dominate.</p>
//         </div>

//         {/* Login Form */}
//         <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-lg">
//           <div className="space-y-5">
//             {/* Email Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center text-gray-300 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-neutral-700 border-neutral-600 rounded mr-2" />
//                 Remember me
//               </label>
//               <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
//                 Forgot password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
//                   Signing in...
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center">
//                   <Zap className="w-4 h-4 mr-2" />
//                   Sign In
//                 </div>
//               )}
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-neutral-600" />
//             <span className="px-3 text-gray-500 text-sm">or</span>
//             <div className="flex-1 border-t border-neutral-600" />
//           </div>

//           {/* Social Login */}
//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
//               <Shield className="w-4 h-4 mr-2" />
//               Steam
//             </button>
//             <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
//               <Trophy className="w-4 h-4 mr-2" />
//               Discord
//             </button>
//           </div>

//           {/* Sign Up Link */}
//           <div className="text-center text-gray-400 text-sm mt-6">
//             New to GamerGram?{' '}
//             <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
//               Create account
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6">
//           <div className="flex justify-center space-x-6 text-xs text-gray-500">
//             <span>Privacy</span>
//             <span>Terms</span>
//             <span>Help</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















//AI CHAT BOX


import React, { useState } from 'react';
import { MessageCircle, Gamepad2, Zap, Crown, Sword, Shield, Star, Send, Mic, Image, Settings, X, Minimize2 } from 'lucide-react';

const AICharactersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiCharacters = [
    {
      id: 1,
      name: "Master Chief",
      game: "Halo",
      category: "FPS",
      description: "Legendary Spartan super-soldier ready for tactical discussions",
      avatar: "🎖️",
      color: "from-green-500 to-blue-600",
      specialty: "Combat Strategy",
      status: "online"
    },
    {
      id: 2,
      name: "Kratos",
      game: "God of War",
      category: "Action",
      description: "God of War with wisdom from his journey of redemption",
      avatar: "⚡",
      color: "from-red-500 to-orange-600",
      specialty: "Mythology & Combat",
      status: "online"
    },
    {
      id: 3,
      name: "GLaDOS",
      game: "Portal",
      category: "Puzzle",
      description: "Sarcastically helpful AI for puzzle-solving and dark humor",
      avatar: "🤖",
      color: "from-blue-500 to-purple-600",
      specialty: "Logic & Puzzles",
      status: "online"
    },
    {
      id: 4,
      name: "Geralt of Rivia",
      game: "The Witcher",
      category: "RPG",
      description: "Witcher with knowledge of monsters, potions, and tough choices",
      avatar: "🗡️",
      color: "from-gray-500 to-yellow-600",
      specialty: "Monster Hunting",
      status: "online"
    },
    {
      id: 5,
      name: "Commander Shepard",
      game: "Mass Effect",
      category: "RPG",
      description: "N7 operative ready to discuss galactic politics and alien species",
      avatar: "🚀",
      color: "from-blue-600 to-indigo-700",
      specialty: "Space Exploration",
      status: "online"
    },
    {
      id: 6,
      name: "Cortana",
      game: "Halo",
      category: "FPS",
      description: "Advanced AI companion with vast tactical knowledge",
      avatar: "💎",
      color: "from-cyan-500 to-blue-600",
      specialty: "AI Intelligence",
      status: "online"
    },
    {
      id: 7,
      name: "Lara Croft",
      game: "Tomb Raider",
      category: "Adventure",
      description: "Adventurous archaeologist ready for exploration discussions",
      avatar: "🏺",
      color: "from-amber-500 to-orange-600",
      specialty: "Archaeology",
      status: "online"
    },
    {
      id: 8,
      name: "Solid Snake",
      game: "Metal Gear",
      category: "Action",
      description: "Legendary soldier with expertise in stealth and espionage",
      avatar: "🥷",
      color: "from-gray-600 to-green-600",
      specialty: "Stealth Operations",
      status: "online"
    },
    {
      id: 9,
      name: "Aloy",
      game: "Horizon",
      category: "Adventure",
      description: "Hunter from post-apocalyptic world with tech knowledge",
      avatar: "🏹",
      color: "from-orange-500 to-red-600",
      specialty: "Technology & Hunting",
      status: "online"
    }
  ];

  const categories = ['All', 'FPS', 'RPG', 'Action', 'Adventure', 'Puzzle'];

  const filteredCharacters = selectedCategory === 'All' 
    ? aiCharacters 
    : aiCharacters.filter(char => char.category === selectedCategory);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
    setChatMessages([
      {
        id: 1,
        type: 'ai',
        message: getWelcomeMessage(character),
        timestamp: new Date(),
        character: character.name
      }
    ]);
  };

  const getWelcomeMessage = (character) => {
    const welcomeMessages = {
      "Master Chief": "Spartan-117 reporting for duty. What's the situation, soldier?",
      "Kratos": "You stand before the Ghost of Sparta. Speak your purpose.",
      "GLaDOS": "Oh, wonderful. Another test subject. Welcome to the Aperture Science Testing Facility.",
      "Geralt of Rivia": "Hmm. Wind's howling. What brings you to a witcher?",
      "Commander Shepard": "Commander Shepard here. How can I assist you, citizen?",
      "Cortana": "Hello! I'm Cortana. Ready to dive into some fascinating conversations?",
      "Lara Croft": "Lara Croft, archaeologist and adventurer. Ready for our next discovery?",
      "Solid Snake": "This is Snake. What's your mission briefing?",
      "Aloy": "Aloy here. What mysteries are we unraveling today?"
    };
    return welcomeMessages[character.name] || `Hello! I'm ${character.name}. Ready to chat?`;
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !selectedCharacter) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      message: inputMessage,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        message: generateAIResponse(inputMessage, selectedCharacter),
        timestamp: new Date(),
        character: selectedCharacter.name
      };
      setChatMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const generateAIResponse = (userMsg, character) => {
    // Simple response generation (in real app, this would call your AI API)
    const responses = {
      "Master Chief": [
        "Roger that. Mission parameters updated.",
        "I need a weapon. And intel on the current situation.",
        "Spartans never die. We just go missing in action.",
        "Stay sharp, soldier. The Covenant could be anywhere."
      ],
      "Kratos": [
        "BOY! *clears throat* I mean... wisdom comes from experience.",
        "We must be better than those who came before us.",
        "The cycle of vengeance ends here.",
        "Strength without purpose is meaningless."
      ],
      "GLaDOS": [
        "Oh, how delightfully... predictable. For science!",
        "That was a joke. Ha ha. Fat chance.",
        "The cake is a lie, but the science is very real.",
        "Your progress has been... adequate. I suppose."
      ]
    };
    
    const characterResponses = responses[character.name] || [
      "That's an interesting perspective.",
      "Tell me more about that.",
      "I understand your point of view."
    ];
    
    return characterResponses[Math.random() * characterResponses.length | 0];
  };

  const closeChatModal = () => {
    setSelectedCharacter(null);
    setChatMessages([]);
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-neutral-800 text-white">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-neutral-800/95 backdrop-blur-sm border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AI Gaming Characters
              </h1>
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
          <p className="text-neutral-400 text-sm mb-4">
            Chat with iconic gaming characters powered by AI
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Characters Grid */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCharacters.map((character) => (
            <div
              key={character.id}
              onClick={() => handleCharacterClick(character)}
              className="group bg-neutral-700 rounded-xl p-5 cursor-pointer transition-all duration-300 hover:bg-neutral-600 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 border border-neutral-600 hover:border-neutral-500"
            >
              {/* Character Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${character.color} flex items-center justify-center text-xl shadow-lg`}>
                    {character.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {character.name}
                    </h3>
                    <p className="text-sm text-neutral-400">{character.game}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Online</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-sm mb-3 leading-relaxed">
                {character.description}
              </p>

              {/* Specialty Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span className="text-xs text-yellow-400 font-medium">
                    {character.specialty}
                  </span>
                </div>
                <div className="px-2 py-1 bg-neutral-600 rounded-full text-xs text-neutral-300">
                  {character.category}
                </div>
              </div>

              {/* Chat Button */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">Start Chat</span>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                  <Zap className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <Gamepad2 className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-neutral-400 mb-2">
              No characters found
            </h3>
            <p className="text-neutral-500 text-sm">
              Try selecting a different category to see more characters.
            </p>
          </div>
        )}
      </div>

      {/* Chat Modal */}
      {selectedCharacter && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl h-[80vh] bg-neutral-800 rounded-2xl border border-neutral-600 shadow-2xl flex flex-col overflow-hidden">
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-700 bg-gradient-to-r from-neutral-800 to-neutral-700">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedCharacter.color} flex items-center justify-center text-xl`}>
                  {selectedCharacter.avatar}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{selectedCharacter.name}</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Online</span>
                    <span className="text-neutral-400">• {selectedCharacter.game}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                  <Minimize2 className="w-4 h-4 text-neutral-400" />
                </button>
                <button className="p-2 hover:bg-neutral-700 rounded-lg transition-colors">
                  <Settings className="w-4 h-4 text-neutral-400" />
                </button>
                <button 
                  onClick={closeChatModal}
                  className="p-2 hover:bg-neutral-700 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                      : 'bg-neutral-700 text-white'
                  } rounded-2xl px-4 py-3 shadow-lg`}>
                    {msg.type === 'ai' && (
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${selectedCharacter.color} flex items-center justify-center text-xs`}>
                          {selectedCharacter.avatar}
                        </div>
                        <span className="text-xs text-neutral-300">{msg.character}</span>
                      </div>
                    )}
                    <p className="text-sm leading-relaxed">{msg.message}</p>
                    <div className="text-xs opacity-60 mt-2">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-neutral-700 rounded-2xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${selectedCharacter.color} flex items-center justify-center text-xs`}>
                        {selectedCharacter.avatar}
                      </div>
                      <span className="text-xs text-neutral-300">{selectedCharacter.name}</span>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-neutral-700 bg-neutral-800/50">
              <div className="flex items-center gap-3">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={`Message ${selectedCharacter.name}...`}
                    className="w-full bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-3 hover:bg-neutral-700 rounded-xl transition-colors group">
                    <Image className="w-5 h-5 text-neutral-400 group-hover:text-blue-400" />
                  </button>
                  <button className="p-3 hover:bg-neutral-700 rounded-xl transition-colors group">
                    <Mic className="w-5 h-5 text-neutral-400 group-hover:text-green-400" />
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim()}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-neutral-600 disabled:to-neutral-600 p-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="border-t border-neutral-700 bg-neutral-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <Crown className="w-4 h-4" />
            <span className="text-sm">Powered by GamerGram AI Technology</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AICharactersPage;








// import React, { useState } from 'react';
// import { MessageCircle, Gamepad2, Zap, Crown, Sword, Shield, Star } from 'lucide-react';

// const AICharactersPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   const aiCharacters = [
//     {
//       id: 1,
//       name: "Master Chief",
//       game: "Halo",
//       category: "FPS",
//       description: "Legendary Spartan super-soldier ready for tactical discussions",
//       avatar: "🎖️",
//       color: "from-green-500 to-blue-600",
//       specialty: "Combat Strategy",
//       status: "online"
//     },
//     {
//       id: 2,
//       name: "Kratos",
//       game: "God of War",
//       category: "Action",
//       description: "God of War with wisdom from his journey of redemption",
//       avatar: "⚡",
//       color: "from-red-500 to-orange-600",
//       specialty: "Mythology & Combat",
//       status: "online"
//     },
//     {
//       id: 3,
//       name: "GLaDOS",
//       game: "Portal",
//       category: "Puzzle",
//       description: "Sarcastically helpful AI for puzzle-solving and dark humor",
//       avatar: "🤖",
//       color: "from-blue-500 to-purple-600",
//       specialty: "Logic & Puzzles",
//       status: "online"
//     },
//     {
//       id: 4,
//       name: "Geralt of Rivia",
//       game: "The Witcher",
//       category: "RPG",
//       description: "Witcher with knowledge of monsters, potions, and tough choices",
//       avatar: "🗡️",
//       color: "from-gray-500 to-yellow-600",
//       specialty: "Monster Hunting",
//       status: "online"
//     },
//     {
//       id: 5,
//       name: "Commander Shepard",
//       game: "Mass Effect",
//       category: "RPG",
//       description: "N7 operative ready to discuss galactic politics and alien species",
//       avatar: "🚀",
//       color: "from-blue-600 to-indigo-700",
//       specialty: "Space Exploration",
//       status: "online"
//     },
//     {
//       id: 6,
//       name: "Cortana",
//       game: "Halo",
//       category: "FPS",
//       description: "Advanced AI companion with vast tactical knowledge",
//       avatar: "💎",
//       color: "from-cyan-500 to-blue-600",
//       specialty: "AI Intelligence",
//       status: "online"
//     },
//     {
//       id: 7,
//       name: "Lara Croft",
//       game: "Tomb Raider",
//       category: "Adventure",
//       description: "Adventurous archaeologist ready for exploration discussions",
//       avatar: "🏺",
//       color: "from-amber-500 to-orange-600",
//       specialty: "Archaeology",
//       status: "online"
//     },
//     {
//       id: 8,
//       name: "Solid Snake",
//       game: "Metal Gear",
//       category: "Action",
//       description: "Legendary soldier with expertise in stealth and espionage",
//       avatar: "🥷",
//       color: "from-gray-600 to-green-600",
//       specialty: "Stealth Operations",
//       status: "online"
//     },
//     {
//       id: 9,
//       name: "Aloy",
//       game: "Horizon",
//       category: "Adventure",
//       description: "Hunter from post-apocalyptic world with tech knowledge",
//       avatar: "🏹",
//       color: "from-orange-500 to-red-600",
//       specialty: "Technology & Hunting",
//       status: "online"
//     }
//   ];

//   const categories = ['All', 'FPS', 'RPG', 'Action', 'Adventure', 'Puzzle'];

//   const filteredCharacters = selectedCategory === 'All' 
//     ? aiCharacters 
//     : aiCharacters.filter(char => char.category === selectedCategory);

//   const handleCharacterClick = (character) => {
//     console.log(`Starting chat with ${character.name}`);
//     // Here you would typically navigate to the chat interface
//     alert(`Starting chat with ${character.name} from ${character.game}!`);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-800 text-white">
//       {/* Header */}
//       <div className="sticky top-0 z-10 bg-neutral-800/95 backdrop-blur-sm border-b border-neutral-700">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center gap-4 mb-4">
//             <div className="flex items-center gap-3">
//               <Gamepad2 className="w-8 h-8 text-blue-400" />
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                 AI Gaming Characters
//               </h1>
//             </div>
//           </div>
//           <p className="text-neutral-400 mb-6">
//             Chat with iconic gaming characters powered by AI. Choose your companion and dive into immersive conversations.
//           </p>
          
//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-3">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                   selectedCategory === category
//                     ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
//                     : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Characters Grid */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCharacters.map((character) => (
//             <div
//               key={character.id}
//               onClick={() => handleCharacterClick(character)}
//               className="group bg-neutral-700 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-neutral-600 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1 border border-neutral-600 hover:border-neutral-500"
//             >
//               {/* Character Header */}
//               <div className="flex items-start justify-between mb-4">
//                 <div className="flex items-center gap-4">
//                   <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${character.color} flex items-center justify-center text-2xl shadow-lg`}>
//                     {character.avatar}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
//                       {character.name}
//                     </h3>
//                     <p className="text-sm text-neutral-400">{character.game}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-green-400 font-medium">Online</span>
//                 </div>
//               </div>

//               {/* Description */}
//               <p className="text-neutral-300 text-sm mb-4 leading-relaxed">
//                 {character.description}
//               </p>

//               {/* Specialty Tag */}
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2">
//                   <Star className="w-4 h-4 text-yellow-400" />
//                   <span className="text-xs text-yellow-400 font-medium">
//                     {character.specialty}
//                   </span>
//                 </div>
//                 <div className="px-3 py-1 bg-neutral-600 rounded-full text-xs text-neutral-300">
//                   {character.category}
//                 </div>
//               </div>

//               {/* Chat Button */}
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2 text-blue-400 group-hover:text-blue-300 transition-colors">
//                   <MessageCircle className="w-5 h-5" />
//                   <span className="text-sm font-medium">Start Chat</span>
//                 </div>
//                 <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-400 transition-colors">
//                   <Zap className="w-4 h-4 text-white" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State */}
//         {filteredCharacters.length === 0 && (
//           <div className="text-center py-16">
//             <Gamepad2 className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-neutral-400 mb-2">
//               No characters found
//             </h3>
//             <p className="text-neutral-500">
//               Try selecting a different category to see more characters.
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="border-t border-neutral-700 bg-neutral-800/50">
//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex items-center justify-center gap-2 text-neutral-400">
//             <Crown className="w-5 h-5" />
//             <span className="text-sm">Powered by GamerGram AI Technology</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AICharactersPage;





