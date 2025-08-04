import React from "react";

const SubHeader = () => {
  return (
    <div>
      <div>
        <p className="mt-2 text-center tracking-wide font-extrabold text-5xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse md:text-6xl">
          🎮 NEWS 🎮
        </p>
        <p className="text-cyan-300/80 p-2 text-center font-bold text-lg">
          Stay ahead of the game with breaking news & insider intel
        </p>
        <div className="mx-auto mt-1 h-1 w-30 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full sm:mt-3" />
      </div>
    </div>
  );
};

export default SubHeader;
