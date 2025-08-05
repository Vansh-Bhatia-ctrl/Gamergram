import { useState } from "react";

const platforms = [
  { id: "all", label: "🎮 All" },
  { id: "playstation", label: "🎮 PS" },
  { id: "xbox", label: "🎯 Xbox" },
];

const PlatformFilters = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("all");
  return (
    <div className="sm:flex sm:items-center sm:ml-1 sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
      <div className="flex flex-wrap gap-2 mt-4">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`text-sm font-bold px-4 py-2 p-2 rounded-4xl border border-purple-500/30 cursor-pointer ${
              selectedPlatform === platform.id
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl"
                : "bg-neutral-800/60 text-purple-300 border border-purple-500/30 hover:scale-107 transition-all duration-600 ease-in-out hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white"
            }`}
          >
            {platform.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PlatformFilters;
