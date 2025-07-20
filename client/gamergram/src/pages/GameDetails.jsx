import { Search, Menu } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindows,
  faXbox,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";

const GameDetails = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden lg:p-4">
        <div>
          <div className="p-4 flex justify-between items-center  gap-4 ">
            <div className="flex items-center gap-2 ">
              <Menu size={19} color="#fff" className="lg:hidden" />
              <h1 className="text-white tracking-widest font-extrabold md:text-lg orbitron lg:text-xl">
                GAMERGRAM
              </h1>
            </div>
          </div>
        </div>

        {/*Game Details Section*/}
        <div>
          <div>
            <h1 className="text-white text-center font-bold text-3xl mb-4">
              CyberPunk 2077
            </h1>

            {/**Cover Image and ScreenShots of the game*/}
            <div className="flex">
              {/*Cover Image of the game*/}
              <img src="/cyberPunk.png" className="w-[63%] p-2 rounded-xl" />

              <div>
                {/*In-game ScreenShots*/}
                <img
                  src="https://media.rawg.io/media/screenshots/814/814c25d6fd1fd34a4e6dade645a3bda7.jpg"
                  className="w-[200px] p-2 rounded-xl"
                />
                <img
                  src="https://media.rawg.io/media/screenshots/2ab/2ab0b67e68b6ede6b19d80094b6f7f2a_qTSfS2g.jpg"
                  className="w-[200px] p-2 rounded-xl"
                />
                <img
                  src="https://media.rawg.io/media/screenshots/cd2/cd22af9d6ac593440defac6082760e4a.jpg"
                  className="w-[200px] p-2 rounded-xl"
                />
              </div>
            </div>

            {/*Details about the game*/}
            <div>
              <div className="flex  gap-5 p-2">
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Release Date:</p>
                    <p className="text-neutral-400 text-[13.5px]">
                      10 Dec 2020
                    </p>
                  </span>

                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Publisher:</p>
                    <p className="text-neutral-400 text-[13.5px]">
                      CD PROJEKT RED
                    </p>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Rating:</p>
                    <p className="text-yellow-200 text-[13.5px]">4.7</p>
                  </span>

                  <span className="flex items-center gap-2">
                    <p className="text-white font-bold">Genre:</p>
                    <p className="text-neutral-400 text-[13.5px] line-clamp-1">
                      Action, Shooter, RPG
                    </p>
                  </span>
                </div>
              </div>

              {/*Tags & platforms Section*/}
              <div>
                <div className="p-2">
                  <span className="flex items-start gap-2">
                    <p className="text-white font-bold">Tags:</p>
                    <p className="text-neutral-400 text-[13.5px] tracking-wider underline">
                      {" "}
                      Singleplayer, Atmospheric, RPG, Story Rich, Open World,
                      First-Person, Sci-fi, Singleplayer, Atmospheric, RPG,
                      Story Rich, Open World, First-Person, Sci-fi,
                      Singleplayer, Atmospheric, RPG, Story Rich, Open World,
                      First-Person, Sci-fi, Singleplayer, Atmospheric, RPG,
                      Story Rich, Open World, First-Person, Sci-fi,
                      Singleplayer, Atmospheric, RPG, Story Rich, Open World,
                      First-Person, Sci-fi,{" "}
                    </p>
                  </span>
                </div>

                <div className="p-2">
                  <span className="flex gap-2">
                    <p className="text-white font-bold">Platforms:</p>
                    <div className="flex items-center gap-4">
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
                  </span>
                </div>
              </div>

              {/*Storyline Section*/}
              <div className="p-2">
                <span>
                  <p className="text-white font-bold text-3xl">The World</p>
                  <p className="text-white text-[13.5px] mt-2">
                    Cyberpunk 2077 is a science fiction game loosely based on
                    the role-playing game Cyberpunk 2020. ###Setting The game is
                    set in the year 2077 in a fictional futuristic metropolis
                    Night City in California. In the world of the game, there
                    are developed cybernetic augmentations that enhance people's
                    strength, agility, and memory. The city is governed by
                    corporations. Many jobs are taken over by the robots,
                    leaving a lot of people poor and homeless. Night City has a
                    roaring underworld, with black markets, underground
                    surgeons, drug dealers, and street gangs abound.
                    ###Characters The main protagonist is fully customizable,
                    including his or her sex and appearance, and goes by the
                    nickname V. He or she is an underground mercenary who does
                    “dirty business” for the various contractors. An NPC
                    companion named Jackie joins the protagonist early at the
                    game, and various other companions may join the player on
                    certain missions as the plot demands. However, the game has
                    no parties and no companion system. ###Gameplay The player
                    controls V from the first person view, with the third-person
                    view used for cutscenes only. The protagonist can travel
                    across the city on feet or using various vehicles, in a
                    manner some observers compared to GTA series. There are many
                    options for the character customization, including three
                    character classes, and a variety of augmentations V can
                    install to enhance his or her abilities.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameDetails;
