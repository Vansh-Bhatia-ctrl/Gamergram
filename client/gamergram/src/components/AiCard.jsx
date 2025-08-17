import { MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import useAiProfileStore from "../store/useAiProfileStore";
import { useEffect } from "react";

const aiCharacters = [
  {
    id: 1,
    name: "Master Chief",
    game: "Halo",
    category: "FPS",
    description:
      "Legendary Spartan super-soldier ready for tactical discussions",
    avatar: "🎖️",
    color: "from-green-500 to-blue-600",
    specialty: "Combat Strategy",
    status: "online",
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
    status: "online",
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
    status: "online",
  },
  {
    id: 4,
    name: "Geralt of Rivia",
    game: "The Witcher",
    category: "RPG",
    description:
      "Witcher with knowledge of monsters, potions, and tough choices",
    avatar: "🗡️",
    color: "from-gray-500 to-yellow-600",
    specialty: "Monster Hunting",
    status: "online",
  },
  {
    id: 5,
    name: "Commander Shepard",
    game: "Mass Effect",
    category: "RPG",
    description:
      "N7 operative ready to discuss galactic politics and alien species",
    avatar: "🚀",
    color: "from-blue-600 to-indigo-700",
    specialty: "Space Exploration",
    status: "online",
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
    status: "online",
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
    status: "online",
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
    status: "online",
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
    status: "online",
  },
];

const AiCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { aiProfiles, isLoading, error, getAiProfiles } = useAiProfileStore();
  useEffect(() => {
    getAiProfiles();
  }, []);

  return (
    <>
      <div className="p-3 flex flex-col gap-5 mt-4 md:max-w-7xl md:mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {aiProfiles.map((character) => (
          <div
            key={character.characterId}
            onClick={() => setModalIsOpen(true)}
            className="bg-neutral-800 h-auto p-4 rounded-xl border hover:bg-neutral-700 border-neutral-600 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 lg:w-23 lg:h-23 bg-gradient-to-br px-3 py-2 text-lg rounded-xl inline-block">
                <img
                  src={character.imageURL}
                  className="w-full h-full rounded-2xl object-cover lg:object-cover"
                />
              </div>
              <div>
                <h1 className="text-white font-bold">{character.name}</h1>
                <h1 className="text-gray-400 font-semibold">
                  {character.game}
                </h1>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-neutral-300">{character.bio}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <Star className="w-3 h-3 text-yellow-400" />
                </div>
                <p className="text-xs text-yellow-400 font-medium">
                  {character.specialty}
                </p>
              </div>

              <div>
                <div className="px-2 py-1 bg-neutral-600 rounded-full text-xs text-neutral-300 whitespace-nowrap">
                  {character.tag}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-blue-400">
                <div>
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium">Start chat</p>
              </div>
            </div>
          </div>
        ))}

        {/**Chat Window */}
        <ChatWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </div>
    </>
  );
};

export default AiCard;
