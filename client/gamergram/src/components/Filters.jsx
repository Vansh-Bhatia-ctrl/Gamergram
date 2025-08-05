import { Bell, Gamepad2, Target, Star } from "lucide-react";
import { useState } from "react";

const filters = [
  { id: "all", label: "All News", icon: Gamepad2 },
  { id: "trailers", label: "Trailers & Videos", icon: Target },
  { id: "events", label: "Events & Launches", icon: Star },
  { id: "announcements", label: "Official Announcements", icon: Bell },
];

const Filters = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
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
  );
};

export default Filters;
