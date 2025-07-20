import { Heart, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

const GameCards = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    async function getGameData() {
      try {
        const response = await fetch(
          "http://localhost:3000/games/getallgames",
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );

        const data = await response.json();
        setGameData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getGameData();
  }, []);
  return (
    <>
      <div className="p-2 mt-2 flex flex-col gap-4 game-card-size-1 sm:flex sm:flex-col sm:justify-center sm:items-center sm:flex-nowrap sm:gap-[1rem] lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3">
        {gameData.length > 0 &&
          gameData.map((game) => (
            <div
              key={game._id}
              className="h-[560px] bg-[#1E1E1E] rounded-xl hover:shadow-2xl hover:scale-[1.05] shadow-lg shadow-black transition-all ease-in duration-300 cursor-pointer game-card sm:w-[450px] sm:shrink-0 lg:w-[350px] xl:w-[400px]"
            >
              <div className="h-full w-full">
                <img
                  src={game.coverImages}
                  className="h-[65%] w-full object-cover rounded-t-xl"
                />

                <div className="flex gap-4 p-4">
                  <FontAwesomeIcon
                    icon={faWindows}
                    className="text-xl text-blue-500"
                  />
                  <FontAwesomeIcon
                    icon={faXbox}
                    className="text-xl text-green-600"
                  />
                  <FontAwesomeIcon
                    icon={faPlaystation}
                    className="text-xl text-white"
                  />
                </div>

                <div className="px-4">
                  <h1 className="text-white text-3xl font-bold tracking-wider">
                    {game.title}
                  </h1>
                </div>

                <div className="p-4 flex gap-2">
                  <button className="px-2 py-2 text-white flex items-center gap-1 bg-neutral-700 rounded-3xl w-[100px]">
                    <Heart size={20} color="#FF0000" />
                    Wishlist
                  </button>

                  <button className="px-2 py-2 text-white flex items-center gap-1 bg-neutral-700 rounded-3xl w-[100px]">
                    <Plus size={20} color="#FFF" />
                    Follow
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default GameCards;
