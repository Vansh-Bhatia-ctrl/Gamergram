import { Menu, ArrowBigLeft, ArrowBigRight, Plus } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, parseISO } from "date-fns";
import Header from "../components/Header";

const GameDetails = () => {
  const [gameData, setGameData] = useState([]);
  const [showAllScreenshots, setShowAllScreenshots] = useState(false);
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [showScreenshotIndex, setShowScreenshotIndex] = useState(0);

  const { gameID } = useParams();
  useEffect(() => {
    async function getGameData() {
      try {
        const response = await fetch(
          `http://localhost:3000/gamedata/${gameID}`,
          {
            method: "GET",
            headers: { "Content-type": "application/json" },
          }
        );

        const data = await response.json();
        console.log(data);
        setGameData(data);
      } catch (error) {
        console.error("Something went wrong", error.message);
      }
    }

    getGameData();
  }, []);

  useEffect(() => {
    if (showScreenshotModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const preLoad = (url) => {
      const img = new Image();
      img.src = url;
    };

    if (gameData?.screenshots?.length > 0) {
      const next = gameData.screenshots[showScreenshotIndex + 1];
      const prev = gameData.screenshots[showScreenshotIndex - 1];
      if (next) preLoad(next);
      if (prev) preLoad(prev);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showScreenshotModal, gameData, showScreenshotIndex]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden lg:p-4 relative">
        <Header />

        {/*Game Details Section*/}
        <div className="sm:px-12 md:px-28 lg:px-45 xl:px-86">
          <div>
            <h1 className="text-white text-center font-bold text-3xl mb-4">
              {gameData.title}
            </h1>

            {/**Cover Image and ScreenShots of the game*/}
            <div className="flex">
              {/*Cover Image of the game*/}
              <div className="p-2 w-[5000px]">
                <img
                  src={gameData.coverImages}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="p-2 flex flex-col gap-3 items-start">
                {/*In-game ScreenShots*/}
                {gameData?.screenshots &&
                  (showAllScreenshots
                    ? gameData.screenshots.map((screenshot, index) => (
                        <div key={index} className="rounded-xl overflow-hidden">
                          <img src={screenshot} className="rounded-xl" />
                        </div>
                      ))
                    : gameData.screenshots
                        .slice(0, 3)
                        .map((screenshot, index) => (
                          <div
                            key={index}
                            className="relative rounded-xl overflow-hidden"
                            onClick={() => {
                              setShowScreenshotIndex(2);
                              setShowScreenshotModal(true);
                            }}
                            style={{
                              cursor: index === 2 ? "pointer" : "default",
                            }}
                          >
                            <img src={screenshot} className="rounded-xl" />
                            {index === 2 && (
                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                <p className="text-white font-semibold text-sm">
                                  View More
                                </p>
                              </div>
                            )}
                          </div>
                        )))}
              </div>
            </div>

            {/*Details about the game*/}
            <div>
              <div className="flex  gap-5 p-2">
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Release Date:</p>
                    <p className="text-neutral-400 text-[13.5px]">
                      {" "}
                      {gameData.releaseDate
                        ? format(parseISO(gameData.releaseDate), "do MMMM yy")
                        : "N/A"}
                    </p>
                  </span>

                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Publisher:</p>
                    {gameData.publisher &&
                      gameData.publisher.map((pub) => (
                        <p className="text-neutral-400 text-[13.5px]">{pub}</p>
                      ))}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Rating:</p>
                    <p className="text-yellow-200 text-[13.5px]">
                      {gameData.ratings}
                    </p>
                  </span>

                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Genre:</p>
                    {gameData.genre &&
                      gameData.genre.map((gen) => (
                        <p className="text-neutral-400 text-[13.5px] line-clamp-1">
                          {gen}
                        </p>
                      ))}
                  </span>
                </div>
              </div>

              {/*Tags & platforms Section*/}
              <div>
                <div className="p-2">
                  <span className="flex items-start gap-2 flex-wrap">
                    <p className="text-white font-bold">Tags:</p>
                    {gameData.tags &&
                      gameData.tags.map((tag) => (
                        <p className="text-neutral-400 text-[13.5px] tracking-wider underline">
                          {" "}
                          {tag}{" "}
                        </p>
                      ))}
                  </span>
                </div>

                <div className="flex gap-2 p-2">
                  <p className="text-white font-bold">Platforms:</p>
                  {gameData.platforms && (
                    <div className="flex items-center gap-4">
                      {gameData.platforms.some((platform) =>
                        platform.includes("PC")
                      ) && (
                        <FontAwesomeIcon
                          icon={faWindows}
                          className="text-xl text-blue-500"
                        />
                      )}
                      {gameData.platforms.some((platform) =>
                        platform.includes("Xbox")
                      ) && (
                        <FontAwesomeIcon
                          icon={faXbox}
                          className="text-xl text-green-600"
                        />
                      )}
                      {gameData.platforms.some((platform) =>
                        platform.includes("PlayStation")
                      ) && (
                        <FontAwesomeIcon
                          icon={faPlaystation}
                          className="text-xl text-white"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/*Storyline Section*/}
              <div className="p-2">
                <span>
                  <p className="text-white font-bold text-3xl">The World</p>
                  <p className="text-white text-[13.5px] mt-2">
                    {gameData.storyLine}
                  </p>
                </span>
              </div>
              {/*Follow button*/}
              <div className="p-4">
                <button className="px-2 py-2 text-white flex items-center gap-1 bg-neutral-700 rounded-3xl w-[100px]">
                  <Plus size={20} color="#FFF" />
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Screenshot Window*/}
        {showScreenshotModal && (
          <div className="min-h-screen w-screen absolute bg-black/90 top-0 left-0 z-50">
            <button
              className="absolute top-4 right-4  text-white text-2xl z-50 cursor-pointer"
              onClick={() => setShowScreenshotModal(false)}
            >
              ✕
            </button>
            <div className="flex items-center justify-around">
              {showScreenshotIndex > 0 ? (
                <div className="mt-[100px] cursor-pointer">
                  <ArrowBigLeft
                    size={35}
                    color="#fff"
                    onClick={() =>
                      setShowScreenshotIndex((prevIndex) =>
                        Math.max(prevIndex - 1, 0)
                      )
                    }
                  />
                </div>
              ) : (
                <div className="w-[155px] md:w-[35px] md:mt-[100px]" />
              )}
              <div className="md:h-[400px] md:p-10 flex items-center justify-center mt-[150px]">
                <img
                  src={gameData.screenshots[showScreenshotIndex]}
                  className="md:h-[500px] rounded-xl md:object-cover"
                />
              </div>
              {showScreenshotIndex < gameData.screenshots.length - 1 ? (
                <div className="mt-[100px] cursor-pointer">
                  <ArrowBigRight
                    size={35}
                    color="#fff"
                    onClick={() =>
                      setShowScreenshotIndex((prevIndex) =>
                        Math.min(prevIndex + 1, gameData.screenshots.length - 1)
                      )
                    }
                  />
                </div>
              ) : (
                <div className="w-[155px] md:w-[35px] mt-[100px]" />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GameDetails;
