import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Search, Menu, Check, ChevronDown, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GameCards from "../components/GameCards";
import Sidebar from "../components/Sidebar";

const GameBuletien = () => {
  const [filter, setFilter] = useState("Relevance");
  const [platform, setPlatform] = useState("Platform");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPlatformChange, setIsPlaformChage] = useState(false);

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
          <div className="p-4 flex justify-between items-center  gap-4 ">
            <div className="flex items-center gap-2 lg:fixed">
              <Menu size={19} color="#fff" className="lg:hidden" />
              <h1 className="text-white tracking-widest font-extrabold md:text-lg orbitron lg:text-xl">
                GAMERGRAM
              </h1>
            </div>
            <div className="relative">
              <input
                className="w-[170px] bg-neutral-700 p-1 rounded-2xl placeholder-neutral-400 pl-8 sm:w-[300px] md:w-[400px] lg:w-[600px] lg:p-3 lg:pl-8 lg:rounded-4xl lg:ml-[870px]"
                placeholder="Search games"
              />
              <Search
                color="#a3a3a3"
                size={18}
                className="absolute top-1.5 left-2 lg:top-3.5 lg:left-[880px]"
              />
            </div>
          </div>
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
                          {[
                            "Relevance",
                            "Date Added",
                            "Release Date",
                            "Popularity",
                          ].map((option) => (
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
                          {["PlayStation", "Xbox", "Nintendo", "PC"].map(
                            (option) => (
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
                            )
                          )}
                        </motion.div>
                      </DropdownMenu.Content>
                    )}
                  </AnimatePresence>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/*Game Cards Section*/}
            <GameCards />
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBuletien;
