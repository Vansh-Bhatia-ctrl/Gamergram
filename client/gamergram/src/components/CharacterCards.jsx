import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import useGameCharactersStore from "../store/useGameCharacters";
import { useEffect } from "react";

const CharacterCards = () => {
  const { gameCharacters, loading, fetchGameCharacters } =
    useGameCharactersStore();
  useEffect(() => {
    fetchGameCharacters();
  }, []);

  return (
    <>
      <div className="p-3 flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto">
        {gameCharacters.map((character) => {
          const IconComponent = LucideIcons[character.icon];
          return (
            <motion.div
              key={character.id}
              className={`text-center h-auto w-full p-4 ${character.bgGlow} rounded-xl border  ${character.borderGlow} cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out`}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                variants={{
                  initial: { rotate: 0 },
                  hover: {
                    rotate: 360,
                    transition: { duration: 0.5, ease: "easeInOut" },
                  },
                }}
                className={`inline-block p-4 bg-gradient-to-l ${character.color} rounded-full`}
              >
                <IconComponent size={27} className="text-white font-bold" />
              </motion.div>
              <h1 className="text-white text-xl font-bold">{character.name}</h1>
              <div className="space-y-2 mt-4">
                <p className="text-gray-300 text-sm font-semibold">
                  {character.title}
                </p>
                <p className="text-gray-300 text-[12px]">{character.game}</p>
                <p className="text-gray-300 text-[12px]">
                  {character.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default CharacterCards;
