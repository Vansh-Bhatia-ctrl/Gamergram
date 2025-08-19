

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











































































//STORY LANDING PAGE


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sword, Shield, Zap, Crown, Flame, Mountain, Star, Heart,
  Target, Gamepad2, Skull, Trophy, Swords, Eye, Users,
  Wind, Snowflake, Sun, Moon, Compass, Gem
} from 'lucide-react';

const GAMING_CHARACTERS = [
  {
    id: 1,
    name: "Kratos",
    title: "God of War",
    game: "God of War Series",
    icon: Sword,
    color: "from-red-600 to-orange-500",
    bgGlow: "bg-red-500/10",
    borderGlow: "border-red-500/30",
    description: "The Ghost of Sparta - A tale of rage, revenge, and redemption",
    available: true
  },
  {
    id: 2,
    name: "Master Chief",
    title: "Spartan-117",
    game: "Halo Series",
    icon: Shield,
    color: "from-green-600 to-blue-500",
    bgGlow: "bg-green-500/10",
    borderGlow: "border-green-500/30",
    description: "Humanity's greatest defender against the Covenant",
    available: true
  },
  {
    id: 3,
    name: "Geralt",
    title: "The White Wolf",
    game: "The Witcher Series",
    icon: Swords,
    color: "from-gray-400 to-amber-400",
    bgGlow: "bg-amber-500/10",
    borderGlow: "border-amber-500/30",
    description: "Monster hunter with a code of honor",
    available: true
  },
  {
    id: 4,
    name: "Link",
    title: "Hero of Hyrule",
    game: "The Legend of Zelda",
    icon: Shield,
    color: "from-green-500 to-emerald-400",
    bgGlow: "bg-emerald-500/10",
    borderGlow: "border-emerald-500/30",
    description: "The legendary hero destined to save Hyrule",
    available: true
  },
  {
    id: 5,
    name: "Solid Snake",
    title: "Legendary Soldier",
    game: "Metal Gear Series",
    icon: Target,
    color: "from-gray-600 to-blue-600",
    bgGlow: "bg-blue-500/10",
    borderGlow: "border-blue-500/30",
    description: "Tactical espionage operative extraordinaire",
    available: true
  },
  {
    id: 6,
    name: "Samus Aran",
    title: "Intergalactic Bounty Hunter",
    game: "Metroid Series",
    icon: Zap,
    color: "from-orange-600 to-red-500",
    bgGlow: "bg-orange-500/10",
    borderGlow: "border-orange-500/30",
    description: "The galaxy's most feared bounty hunter",
    available: true
  },
  {
    id: 7,
    name: "Dante",
    title: "Devil Hunter",
    game: "Devil May Cry Series",
    icon: Flame,
    color: "from-red-600 to-purple-600",
    bgGlow: "bg-red-500/10",
    borderGlow: "border-red-500/30",
    description: "Half-demon with a flair for style",
    available: true
  },
  {
    id: 8,
    name: "Lara Croft",
    title: "Tomb Raider",
    game: "Tomb Raider Series",
    icon: Compass,
    color: "from-amber-600 to-orange-500",
    bgGlow: "bg-amber-500/10",
    borderGlow: "border-amber-500/30",
    description: "Adventurous archaeologist and explorer",
    available: true
  },
  {
    id: 9,
    name: "Arthur Morgan",
    title: "Outlaw",
    game: "Red Dead Redemption 2",
    icon: Star,
    color: "from-amber-700 to-red-600",
    bgGlow: "bg-amber-500/10",
    borderGlow: "border-amber-500/30",
    description: "A gunslinger's tale in the dying Wild West",
    available: true
  },
  {
    id: 10,
    name: "Ezio Auditore",
    title: "Master Assassin",
    game: "Assassin's Creed Series",
    icon: Eye,
    color: "from-red-700 to-gray-600",
    bgGlow: "bg-red-500/10",
    borderGlow: "border-red-500/30",
    description: "Renaissance assassin fighting for freedom",
    available: true
  },
  {
    id: 11,
    name: "Gordon Freeman",
    title: "Theoretical Physicist",
    game: "Half-Life Series",
    icon: Zap,
    color: "from-orange-600 to-yellow-500",
    bgGlow: "bg-orange-500/10",
    borderGlow: "border-orange-500/30",
    description: "Scientist turned resistance leader",
    available: true
  },
  {
    id: 12,
    name: "Aloy",
    title: "Machine Hunter",
    game: "Horizon Series",
    icon: Target,
    color: "from-cyan-500 to-blue-600",
    bgGlow: "bg-cyan-500/10",
    borderGlow: "border-cyan-500/30",
    description: "Hunter in a world dominated by machines",
    available: true
  },
  {
    id: 13,
    name: "Shepard",
    title: "Commander",
    game: "Mass Effect Series",
    icon: Star,
    color: "from-blue-600 to-purple-600",
    bgGlow: "bg-blue-500/10",
    borderGlow: "border-blue-500/30",
    description: "Galaxy's last hope against ancient threats",
    available: true
  },
  {
    id: 14,
    name: "Doom Slayer",
    title: "Hell Walker",
    game: "DOOM Series",
    icon: Skull,
    color: "from-green-600 to-red-600",
    bgGlow: "bg-green-500/10",
    borderGlow: "border-green-500/30",
    description: "Hell's worst nightmare",
    available: true
  },
  {
    id: 15,
    name: "Sub-Zero",
    title: "Grandmaster",
    game: "Mortal Kombat Series",
    icon: Snowflake,
    color: "from-cyan-500 to-blue-700",
    bgGlow: "bg-cyan-500/10",
    borderGlow: "border-cyan-500/30",
    description: "Cryomancer ninja with ice-cold precision",
    available: true
  },
  {
    id: 16,
    name: "Ryu",
    title: "World Warrior",
    game: "Street Fighter Series",
    icon: Flame,
    color: "from-red-600 to-orange-500",
    bgGlow: "bg-red-500/10",
    borderGlow: "border-red-500/30",
    description: "Eternal warrior seeking true strength",
    available: true
  },
  {
    id: 17,
    name: "Leon Kennedy",
    title: "Special Agent",
    game: "Resident Evil Series",
    icon: Shield,
    color: "from-blue-600 to-gray-600",
    bgGlow: "bg-blue-500/10",
    borderGlow: "border-blue-500/30",
    description: "Zombie apocalypse survivor and government agent",
    available: true
  },
  {
    id: 18,
    name: "Raiden",
    title: "God of Thunder",
    game: "Mortal Kombat Series",
    icon: Zap,
    color: "from-blue-400 to-white",
    bgGlow: "bg-blue-500/10",
    borderGlow: "border-blue-500/30",
    description: "Elder God protector of Earthrealm",
    available: true
  },
  {
    id: 19,
    name: "Jill Valentine",
    title: "S.T.A.R.S. Member",
    game: "Resident Evil Series",
    icon: Target,
    color: "from-blue-600 to-purple-600",
    bgGlow: "bg-blue-500/10",
    borderGlow: "border-blue-500/30",
    description: "Elite operative fighting bioterrorism",
    available: true
  },
  {
    id: 20,
    name: "Cloud Strife",
    title: "Ex-SOLDIER",
    game: "Final Fantasy VII",
    icon: Sword,
    color: "from-yellow-500 to-purple-600",
    bgGlow: "bg-yellow-500/10",
    borderGlow: "border-yellow-500/30",
    description: "Mercenary with a mysterious past",
    available: true
  },
  {
    id: 21,
    name: "Marcus Fenix",
    title: "COG Soldier",
    game: "Gears of War Series",
    icon: Target,
    color: "from-gray-600 to-red-600",
    bgGlow: "bg-gray-500/10",
    borderGlow: "border-gray-500/30",
    description: "Hardened soldier fighting the Locust Horde",
    available: true
  },
  {
    id: 22,
    name: "Nathan Drake",
    title: "Treasure Hunter",
    game: "Uncharted Series",
    icon: Compass,
    color: "from-amber-600 to-brown-600",
    bgGlow: "bg-amber-500/10",
    borderGlow: "border-amber-500/30",
    description: "Adventurous fortune hunter",
    available: true
  },
  {
    id: 23,
    name: "Ellie",
    title: "Survivor",
    game: "The Last of Us Series",
    icon: Heart,
    color: "from-green-600 to-amber-600",
    bgGlow: "bg-green-500/10",
    borderGlow: "border-green-500/30",
    description: "Immune survivor in a post-apocalyptic world",
    available: true
  },
  {
    id: 24,
    name: "Bayonetta",
    title: "Umbra Witch",
    game: "Bayonetta Series",
    icon: Moon,
    color: "from-purple-600 to-pink-600",
    bgGlow: "bg-purple-500/10",
    borderGlow: "border-purple-500/30",
    description: "Stylish witch with supernatural powers",
    available: true
  }
];

const CharacterCard = ({ character, index, onSelect }) => {
  const Icon = character.icon;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => character.available && onSelect(character)}
      className={`
        relative group cursor-pointer rounded-xl border transition-all duration-300
        ${character.available
          ? `${character.bgGlow} ${character.borderGlow} hover:scale-105`
          : 'bg-neutral-800/50 border-neutral-700/50 opacity-60 cursor-not-allowed'
        }
      `}
    >
      {/* Glow Effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300
          ${character.available ? character.bgGlow : ''}
        `}
        animate={{ opacity: isHovered && character.available ? 1 : 0 }}
      />

      <div className="relative p-6">
        {/* Character Icon */}
        <div className="flex justify-center mb-4">
          <motion.div
            className={`
              p-4 rounded-full transition-all duration-300
              ${character.available
                ? `bg-gradient-to-r ${character.color}`
                : 'bg-neutral-700'
              }
            `}
            animate={{
              rotate: isHovered && character.available ? 360 : 0,
              scale: isHovered && character.available ? 1.1 : 1
            }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Character Info */}
        <div className="text-center space-y-2">
          <h3 className={`text-xl font-bold ${character.available ? 'text-white' : 'text-neutral-400'}`}>
            {character.name}
          </h3>
          <p className={`text-sm font-medium ${character.available ? 'text-gray-300' : 'text-neutral-500'}`}>
            {character.title}
          </p>
          <p className={`text-xs ${character.available ? 'text-gray-400' : 'text-neutral-600'}`}>
            {character.game}
          </p>
          <p className={`text-xs leading-relaxed ${character.available ? 'text-gray-400' : 'text-neutral-600'}`}>
            {character.description}
          </p>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          {character.available ? (
            <motion.div
              className="w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: isHovered ? [1, 1.2, 1] : 1 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <div className="px-2 py-1 bg-neutral-700 rounded-full">
              <span className="text-xs text-neutral-400">Soon</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-neutral-600 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

const GamingCharacterHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const filteredCharacters = GAMING_CHARACTERS.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    character.game.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCharacterSelect = (character) => {
    if (character.available) {
      setSelectedCharacter(character);
      // Here you would navigate to the character's saga page
      console.log(`Selected ${character.name} - Navigate to saga page`);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white relative">
      <FloatingParticles />

      {/* Header */}
      <div className="relative z-10 px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            LEGENDARY SAGAS
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore the epic stories of gaming's most iconic characters
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search characters or games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-neutral-800/50 border border-neutral-700 rounded-full text-white placeholder-neutral-400 focus:outline-none focus:border-neutral-500 transition-colors duration-300"
            />
            <Gamepad2 className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-500" />
          </div>
        </motion.div>
      </div>

      {/* Character Grid */}
      <div className="relative z-10 px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {filteredCharacters.map((character, index) => (
              <CharacterCard
                key={character.id}
                character={character}
                index={index}
                onSelect={handleCharacterSelect}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 px-8 pb-8"
      >
        <div className="max-w-4xl mx-auto border-t border-neutral-800 pt-8">
          <div className="flex justify-center gap-12 text-center">
            <div>
              <div className="text-2xl font-bold text-white">
                {GAMING_CHARACTERS.filter(c => c.available).length}
              </div>
              <div className="text-sm text-neutral-400">Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-500">
                {GAMING_CHARACTERS.filter(c => !c.available).length}
              </div>
              <div className="text-sm text-neutral-400">Coming Soon</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{GAMING_CHARACTERS.length}</div>
              <div className="text-sm text-neutral-400">Total Characters</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GamingCharacterHub;


































































































//ACTUAL STORY PAGE

// import React, { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Shield,
//   Sword,
//   Skull,
//   Zap,
//   Crown,
//   Flame,
//   Mountain,
//   Star,
//   Heart,
//   ChevronDown,
//   ChevronUp,
//   Play,
//   Pause,
// } from "lucide-react";

// const STORIES = [
//   {
//     id: 1,
//     era: "The Spartan Warrior",
//     title: "Birth of a Legend",
//     Icon: Shield,
//     color: "from-red-600 to-orange-500",
//     bgPattern: "bg-gradient-to-br from-gray-900 via-red-900 to-black",
//     content: {
//       summary:
//         "Born in Sparta, Kratos was destined for greatness from birth. His journey begins as a mortal warrior driven by rage and ambition.",
//       details: [
//         "Kratos was born to Callisto, a mortal woman, and Zeus, the King of the Gods, though this divine parentage remained hidden for years. Raised in the militant society of Sparta, he was trained from childhood in the arts of war, becoming one of their most fearsome warriors.",
//         "His early years were marked by countless battles across the ancient world. Kratos led Spartan armies with unmatched ferocity, earning the respect of his soldiers and the fear of his enemies. His tactical brilliance was matched only by his raw physical prowess.",
//       ],
//     },
//   },
//   {
//     id: 2,
//     era: "The Servant of Ares",
//     title: "Pact with the God of War",
//     Icon: Sword,
//     color: "from-orange-600 to-red-600",
//     bgPattern: "bg-gradient-to-br from-black via-orange-900 to-red-900",
//     content: {
//       summary:
//         "Facing defeat against barbarian hordes, Kratos makes a fateful pact with Ares that will change his destiny forever.",
//       details: [
//         "In what seemed like his final hour, Kratos found himself overwhelmed by a massive barbarian army led by the Barbarian King. His Spartan forces were decimated, and death seemed certain. In desperation, he called out to the gods for aid, and Ares, the God of War, answered.",
//         "The pact was sealed with divine magic: Ares would grant Kratos the power to defeat his enemies in exchange for eternal servitude. The Blades of Chaos, twin weapons forged in the depths of Tartarus, were permanently fused to Kratos's arms with burning chains that seared his flesh.",
//       ],
//     },
//   },
//   {
//     id: 3,
//     era: "The Village Massacre",
//     title: "The Birth of the Ghost",
//     Icon: Skull,
//     color: "from-gray-600 to-red-700",
//     bgPattern: "bg-gradient-to-br from-gray-800 via-gray-700 to-red-800",
//     content: {
//       summary:
//         "Tricked by Ares, Kratos commits the unforgivable act that transforms him into the Ghost of Sparta.",
//       details: [
//         "On what appeared to be a routine mission to destroy a village that opposed Ares, Kratos led his Spartan warriors in a savage assault. The village was defended by followers of Athena, and Kratos cut through them with his usual ruthless efficiency, lost in the bloodlust that had become his nature.",
//         "In the heat of battle, blinded by rage and divine manipulation, Kratos entered a temple and slaughtered everyone inside, including the Oracle who had tried to warn him. It was only after the carnage ended that the horrible truth was revealed - among the bodies lay his wife Lysandra and daughter Calliope.",
//       ],
//     },
//   },
//   {
//     id: 4,
//     era: "God of War Rises",
//     title: "Slaying Ares",
//     Icon: Crown,
//     color: "from-yellow-500 to-red-600",
//     bgPattern: "bg-gradient-to-br from-yellow-600 via-orange-600 to-red-700",
//     content: {
//       summary:
//         "Kratos confronts and destroys Ares, claiming the throne of the God of War and achieving his long-sought revenge.",
//       details: [
//         "The final confrontation with Ares began when the God of War launched an assault on Athens, Athena's favored city. Kratos was tasked with stopping his former master, but he knew that as a mortal, he stood little chance against a full god.",
//         "With Ares's death, the throne of the God of War stood empty. Zeus, recognizing Kratos's power and perhaps hoping to control him, offered him Ares's position among the Olympians. Kratos accepted, finally achieving the power and recognition he had always sought.",
//       ],
//     },
//   },
//   {
//     id: 5,
//     era: "War on Olympus",
//     title: "The Titan's Assault",
//     Icon: Mountain,
//     color: "from-gray-500 to-red-600",
//     bgPattern: "bg-gradient-to-br from-gray-700 via-red-700 to-black",
//     content: {
//       summary:
//         "Leading the Titans in a final assault on Mount Olympus, Kratos begins the war that will end the age of gods.",
//       details: [
//         "The assault on Olympus was the culmination of a war that had been brewing since the dawn of creation. Kratos led the Titans - Gaia, Cronos, Oceanus, and others - in a direct attack on Mount Olympus itself.",
//         "The initial assault was devastatingly successful. The Titans scaled Mount Olympus like a living mountain range, their massive forms dwarfing even the grandest divine architecture.",
//       ],
//     },
//   },
//   {
//     id: 6,
//     era: "The Norse Lands",
//     title: "A New Beginning",
//     Icon: Heart,
//     color: "from-blue-400 to-green-500",
//     bgPattern: "bg-gradient-to-br from-blue-600 via-green-500 to-gray-700",
//     content: {
//       summary:
//         "Years later, a changed Kratos emerges in the Norse realm of Midgard, seeking a new life away from his past.",
//       details: [
//         "Decades after the fall of Olympus, Kratos had somehow survived his apparent death and traveled to the Norse realms, specifically Midgard. Here, far from the ruins of Greek civilization, he attempted to build a new life free from the ghosts of his past.",
//         "In these northern lands, Kratos met Faye (Laufey), a powerful giant who saw past his reputation as the Ghost of Sparta to the man he was trying to become. Their relationship was built on mutual respect and understanding rather than fear or worship.",
//       ],
//     },
//   },
// ];

// const StoryCard = ({ story, index, isExpanded, onToggle }) => {
//   const { Icon, era, title, color, content } = story;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="group relative"
//     >
//       {/* Timeline connector */}
//       {index < STORIES.length - 1 && (
//         <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-red-500 to-transparent opacity-30" />
//       )}

//       <motion.div
//         className={`relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 cursor-pointer overflow-hidden
//           hover:border-white/20 transition-all duration-300 ${
//             isExpanded ? "ring-1 ring-red-500/50" : ""
//           }`}
//         onClick={onToggle}
//         whileHover={{ scale: 1.02, y: -2 }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {/* Background gradient */}
//         <div
//           className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
//         />

//         {/* Icon and era */}
//         <div className="flex items-center gap-4 mb-4">
//           <motion.div
//             className={`p-3 rounded-full bg-gradient-to-br ${color} shadow-lg`}
//             whileHover={{ rotate: 360 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Icon className="w-6 h-6 text-white" />
//           </motion.div>
//           <div>
//             <h3 className="text-sm font-medium text-red-400 uppercase tracking-wider">
//               {era}
//             </h3>
//             <h2 className="text-xl font-bold text-white">{title}</h2>
//           </div>
//           <motion.div
//             className="ml-auto"
//             animate={{ rotate: isExpanded ? 180 : 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <ChevronDown className="w-5 h-5 text-gray-400" />
//           </motion.div>
//         </div>

//         {/* Summary */}
//         <p className="text-gray-300 text-sm leading-relaxed mb-4">
//           {content.summary}
//         </p>

//         {/* Expanded content */}
//         <AnimatePresence>
//           {isExpanded && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="border-t border-white/10 pt-4 mt-4">
//                 {content.details.map((detail, idx) => (
//                   <motion.p
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.4, delay: idx * 0.1 }}
//                     className="text-gray-300 text-sm leading-relaxed mb-3 pl-4 border-l-2 border-red-500/30"
//                   >
//                     {detail}
//                   </motion.p>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </motion.div>
//   );
// };

// const ParticleField = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {[...Array(20)].map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-red-500/20 rounded-full"
//           initial={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           animate={{
//             x: Math.random() * window.innerWidth,
//             y: Math.random() * window.innerHeight,
//           }}
//           transition={{
//             duration: Math.random() * 10 + 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default function KratosStoryTimeline() {
//   const [expandedCard, setExpandedCard] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const timelineRef = useRef(null);

//   const toggleCard = (id) => {
//     setExpandedCard(expandedCard === id ? null : id);
//   };

//   const toggleAutoPlay = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
//       <ParticleField />

//       {/* Header */}
//       <motion.header
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 text-center py-12"
//       >
//         <motion.h1
//           className="text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
//           animate={{
//             backgroundPosition: ["0%", "100%", "0%"],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{ backgroundSize: "200% 200%" }}
//         >
//           KRATOS
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//           className="text-xl text-gray-300 mb-8"
//         >
//           The Legendary Journey of the Ghost of Sparta
//         </motion.p>

//         {/* Auto-play control */}
//         <motion.button
//           onClick={toggleAutoPlay}
//           className="flex items-center gap-2 mx-auto px-6 py-2 bg-red-600/20 border border-red-500/30 rounded-full text-red-400 hover:bg-red-600/30 transition-colors"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           {isPlaying ? (
//             <Pause className="w-4 h-4" />
//           ) : (
//             <Play className="w-4 h-4" />
//           )}
//           {isPlaying ? "Pause Story" : "Play Story"}
//         </motion.button>
//       </motion.header>

//       {/* Timeline */}
//       <main className="relative z-10 max-w-4xl mx-auto px-6 pb-12">
//         <div ref={timelineRef} className="space-y-8">
//           {STORIES.map((story, index) => (
//             <StoryCard
//               key={story.id}
//               story={story}
//               index={index}
//               isExpanded={expandedCard === story.id}
//               onToggle={() => toggleCard(story.id)}
//             />
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1, duration: 0.8 }}
//         className="relative z-10 text-center py-8 border-t border-white/10"
//       >
//         <p className="text-gray-500 text-sm">
//           The legend continues... Experience the epic saga of Kratos across
//           mythologies
//         </p>
//       </motion.footer>

//       {/* Background effects */}
//       <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-orange-900/5" />
//       <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-x-48 -translate-y-48" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl translate-x-48 translate-y-48" />
//     </div>
//   );
// }
