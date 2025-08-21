import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import useGameCharactersStore from "../store/useGameCharacters";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CharacterCards = () => {
  const {
    gameCharacters,
    loading,
    fetchGameCharacters,
    setSearchedCharacter,
    notFound,
    searchedCharacter,
  } = useGameCharactersStore();
  useEffect(() => {
    fetchGameCharacters();
  }, []);

  return (
    <>
      <div className="p-3 flex flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 max-w-7xl mx-auto">
        {searchedCharacter.map((character) => {
          return (
            <Link
              to={`/saga/${character._id}`}
              key={character.id}
              className={`text-center h-auto w-full p-4 bg-neutral-800  hover:bg-neutral-700 border-neutral-600 rounded-xl border  cursor-pointer hover:scale-105 duration-300 transition-all ease-in-out`}
            >
              <motion.div whileHover="hover" initial="initial">
                <div className="inline-block rounded-full">
                  <img
                    src={character.imageURL}
                    className="text-white font-bold w-25 h-25 md:w-30 md:h-30 object-cover rounded-full"
                  />
                </div>
                <h1 className="text-white text-xl font-bold">
                  {character.name}
                </h1>
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
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CharacterCards;
