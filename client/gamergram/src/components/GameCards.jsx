import { Heart, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faWindows,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const GameCards = ({ gameData, platForms, filters, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const gamesPerPage = 54;

  let filteredGames = gameData;

  //Platform filters for the games
  if (platForms !== "Platform") {
    filteredGames = filteredGames.filter((game) => {
      if (platForms === "PC") {
        return game.platforms.includes("PC");
      } else if (platForms === "PlayStation") {
        return game.platforms.some((ps) => ps.includes("PlayStation"));
      } else {
        return game.platforms.some((xb) => xb.includes("Xbox"));
      }
    });
  }

  //Filters for the games
  if (filters === "Relevance") {
    filteredGames = [...filteredGames].sort((a, b) => b.ratings - a.ratings);
  } else if (filters === "Release Date") {
    filteredGames = [...filteredGames].sort(
      (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
    );
  }

  if (searchTerm && searchTerm.trim() !== "") {
    filteredGames = filteredGames.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const totalPages = Math.ceil(gameData.length / gamesPerPage);
  const startIndex = currentPage * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  const isSearching = searchTerm && searchTerm.trim() !== "";
  const showPagination = !isSearching && totalPages > 1;
  return (
    <>
      <div className="p-2 mt-2 flex flex-col gap-4 game-card-size-1 sm:flex sm:flex-col sm:justify-center sm:items-center sm:flex-nowrap sm:gap-[1rem] lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-3">
        {currentGames.map((game) => {
          const hasPC = game.platforms.includes("PC");
          const hasXbox = game.platforms.some((p) => p.includes("Xbox"));
          const hasPlaystation = game.platforms.some((p) =>
            p.includes("PlayStation")
          );

          return (
            <Link
              to={`/gamebuletien/${game._id}`}
              key={game._id}
              className="h-[460px] bg-[#1E1E1E] rounded-xl hover:shadow-2xl hover:scale-[1.05] shadow-lg shadow-black transition-all ease-in duration-300 cursor-pointer game-card sm:w-[450px] sm:shrink-0 lg:w-[350px] xl:w-[400px]"
            >
              <div className="h-full w-full">
                <img
                  src={game.coverImages}
                  className="h-[65%] w-full object-cover rounded-t-xl"
                />

                <div className="flex gap-4 p-4">
                  {hasPC && (
                    <FontAwesomeIcon
                      icon={faWindows}
                      className="text-xl text-blue-500"
                    />
                  )}
                  {hasXbox && (
                    <FontAwesomeIcon
                      icon={faXbox}
                      className="text-xl text-green-600"
                    />
                  )}
                  {hasPlaystation && (
                    <FontAwesomeIcon
                      icon={faPlaystation}
                      className="text-xl text-white"
                    />
                  )}
                </div>

                <div className="px-4">
                  <h1 className="text-white text-3xl font-bold tracking-wider line-clamp-2 ">
                    {game.title}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {showPagination && (
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-6 px-2 mb-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`${
                currentPage === index
                  ? "bg-white text-black"
                  : "bg-neutral-700 text-white"
              }   px-4 py-2 rounded-full bg-neutral-700 hover:bg-white hover:text-black transition duration-300 shadow-md text-sm sm:text-base cursor-pointer`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default GameCards;
