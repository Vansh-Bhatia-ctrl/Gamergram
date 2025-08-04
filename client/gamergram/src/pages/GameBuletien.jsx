import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Check, ChevronDown, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";
import HeaderSection from "../components/HeaderSection";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const GameBuletien = () => {
  const Platforms = ["PlayStation", "Xbox", "PC"];
  const Filters = ["Relevance", "Release Date", "Popularity"];

  const [filter, setFilter] = useState("Filter");
  const [platform, setPlatform] = useState("Platform");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPlatformChange, setIsPlaformChage] = useState(false);
  const [gameData, setGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getGameData() {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          navigate("/login");
        }
        const response = await fetch(
          "http://localhost:3000/games/getallgames",
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        setGameData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
      setIsLoading(false);
    }

    getGameData();
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -8, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeOut" },
    },
  };

  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden lg:p-4">
        {/*Header section*/}
        <div>
          <HeaderSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </div>

        {/*Heading game section*/}
        <div className="lg:flex">
          {/*SideBar Section*/}
          <div className="hidden lg:block bg-transparent min-h-screen w-[250px] fixed px-10 py-7">
            <div className="flex flex-col justify-between h-ful">
              {/* TOP Menu Items */}
              <Sidebar />

              <div className="mt-10">
                <div className="flex items-center gap-2">
                  <LogOut size={25} color="#fff" />
                  <h1 className=" text-white text-[18px] font-bold">Log-out</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-[250px]">
            <div className="text-center mt-4 ">
              <h1 className="text-white font-semibold text-4xl tracking-wide orbitron lg:text-5xl">
                New and trending games
              </h1>
              <p className="text-neutral-400 mt-2 lg:text-start lg:text-lg">
                Discover What’s Hot: Trending Games You’ll Love
              </p>
            </div>

            {/*Filters Section*/}
            <div className="flex gap-4 mt-5 ml-2 sm:flex sm:justify-center lg:flex lg:justify-start lg:ml-0 ">
              {/*filter dropdown*/}
              <DropdownMenu.Root
                open={isFilterOpen}
                onOpenChange={setIsFilterOpen}
              >
                <DropdownMenu.Trigger asChild>
                  <button className="bg-neutral-800 p-2 rounded-xl flex items-center gap-1 text-white font-semibold cursor-pointer">
                    Search by: {filter} <ChevronDown size={16} />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <AnimatePresence>
                    {isFilterOpen && (
                      <DropdownMenu.Content forceMount sideOffset={5} asChild>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="bg-neutral-800 text-white p-2 rounded-md shadow-lg"
                        >
                          {Filters.map((option) => (
                            <DropdownMenu.Item
                              key={option}
                              className="px-4 py-2 cursor-pointer hover:bg-neutral-700 rounded-md flex items-center justify-between"
                              onSelect={(event) => {
                                event.preventDefault();
                                setFilter(option);
                              }}
                            >
                              {option}
                              {filter == option && <Check size={16} />}
                            </DropdownMenu.Item>
                          ))}
                        </motion.div>
                      </DropdownMenu.Content>
                    )}
                  </AnimatePresence>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>

              {/*Platform filter*/}
              <DropdownMenu.Root
                open={isPlatformChange}
                onOpenChange={setIsPlaformChage}
              >
                <DropdownMenu.Trigger asChild>
                  <button className="bg-neutral-800 p-3 rounded-xl flex items-center gap-1 text-white font-semibold cursor-pointer">
                    {platform}
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenu.Trigger>

                <DropdownMenu.Portal>
                  <AnimatePresence>
                    {isPlatformChange && (
                      <DropdownMenu.Content forceMount sideOffset={5} asChild>
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={dropdownVariants}
                          className="bg-neutral-800 text-white p-2 rounded-md shadow-lg"
                        >
                          {Platforms.map((option) => (
                            <DropdownMenu.Item
                              key={option}
                              className="px-4 py-2 cursor-pointer hover:bg-neutral-700 rounded-md flex Items-center justify-between"
                              onSelect={(event) => {
                                event.preventDefault();
                                setPlatform(option);
                              }}
                            >
                              {option}
                              {platform === option && <Check size={16} />}
                            </DropdownMenu.Item>
                          ))}
                        </motion.div>
                      </DropdownMenu.Content>
                    )}
                  </AnimatePresence>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/*Game Cards Section*/}
            <GameCards
              gameData={gameData}
              platForms={platform}
              filters={filter}
              searchTerm={searchTerm}
            />

            {isLoading && (
              <div className="flex items-center justify-center ">
                <DotLottieReact
                  src="https://lottie.host/7803dbda-7802-4570-b64c-6adb3d9cce04/3173B4Qe5z.lottie"
                  loop
                  autoplay
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBuletien;
