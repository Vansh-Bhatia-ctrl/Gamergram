import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gameNames from "../utils/gameNames";

const TrendingGames = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const apiKey = import.meta.env.VITE_RAWG_API_KEY;
        const gameReq = gameNames.map(async (gameName) => {
          const req = await fetch(
            `https://api.rawg.io/api/games?key=${apiKey}&search=${encodeURIComponent(
              gameName
            )}`,
            {
              method: "GET",
              headers: { "content-type": "application/json" },
            }
          );

          const data = await req.json();
          return data.results[0];
        });

        const gameData = await Promise.all(gameReq);
        setGames(gameData);
      } catch (error) {
        console.error("Failed to fetch images ", error.message);
      }
    };

    fetchGames();
  }, []);

  return (
    <div>
      <div className="px-4 pt-40 md:pt-20">
        <motion.h1
          className="text-[#00CFFF] font-bold text-xl md:text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TRENDING GAMES
        </motion.h1>
        <div className="mt-4 flex gap-x-6 overflow-x-auto flex-nowrap no-scrollbar">
          {games.length > 0 && (
            <motion.div
              className="flex gap-x-6 flex-nowrap w-max "
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 150,
                ease: "linear",
              }}
            >
              {/* Duplicate the game cards for looping */}
              {[...games, ...games].map((card, index) => (
                <div key={index} className="min-w-[8rem]">
                  <img
                    src={card?.background_image}
                    className="rounded-xl object-cover h-35 w-32 md:h-36 md:w-36 lg:h-44 lg:w-[200px]"
                    alt={card?.name}
                    loading="lazy"
                  />
                  <p className="text-white font-semibold orbitron text-sm md:text-base mt-2 text-center">
                    {card?.name}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingGames;
