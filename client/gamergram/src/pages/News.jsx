import { Menu, Bell, Gamepad2, Target, Star } from "lucide-react";
import SubHeader from "../components/SubHeader";
import { useState } from "react";

const filters = [
  { id: "all", label: "All News", icon: Gamepad2 },
  { id: "trailers", label: "Trailers & Videos", icon: Target },
  { id: "events", label: "Events & Launches", icon: Star },
  { id: "announcements", label: "Official Announcements", icon: Bell },
];

const News = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden">
        {/*Header Section*/}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600" />
          <div className="p-4 flex justify-between items-center  gap-4">
            <div className="flex items-center gap-2 ">
              <Menu size={19} color="#fff" className="cursor-pointer" />
              <h1 className="text-white tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
                GAMERGRAM
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center mt-7">
          {/*Sub-heading*/}
          <SubHeader />

          <div className="sm:flex sm:items-center sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
            {/*Search bar and  news letter button*/}
            <div className="mt-12 sm:flex-[4] md:flex-[6] lg:flex-[10]">
              <input
                className="text-white border-1 border-cyan-300/80 placeholder:text-cyan-300/50 p-4 w-[98%] ml-[2px] rounded-xl sm:w-full focus:border-cyan-400 focus:outline-none focus:shadow-lg focus:shadow-cyan-500/30 transition-all duration-300"
                placeholder="🔍 Search gaming news, reviews, leaks..."
              />
            </div>
            <div className="mt-4 sm:mt-12 ">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 p-4 w-[98%] ml-[1%] rounded-xl flex items-center justify-center gap-2 text-lg font-bold sm:w-full hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer hover:shadow-lg hover:shadow-purple-500">
                <Bell /> ⚡ GET UPDATES
              </button>
            </div>
          </div>

          {/*Filters*/}
          <div className="sm:flex sm:items-center sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
            <div className="flex flex-wrap lg:flex gap-3 mt-6 ">
              {filters.map((filter) => {
                const IconComponent = filter.icon;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`font-bold cursor-pointer  text-sm p-4 border-1 bg-neutral-800/60 ml-[1%] rounded-xl flex flex-row gap-2 items-center hover:bg-gradient-to-r from-cyan-500 to-purple-500  hover:text-black hover:scale-105 transition-transform duration-600 ease-in-out ${
                      selectedFilter === filter.id
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-black shadow-2xl shadow-cyan-500/30 "
                        : "bg-neutral-800/60 text-cyan-500 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/60 "
                    }`}
                  >
                    <IconComponent className="" />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
