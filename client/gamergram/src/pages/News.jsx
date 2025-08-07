import {
  Menu,
  Bell,
  TrendingUp,
  MessageCircle,
  Heart,
  ExternalLink,
} from "lucide-react";
import SubHeader from "../components/SubHeader";
import Filters from "../components/Filters";
import PlatformFilters from "../components/PlatformFilters";
import NewsCard from "../components/NewsCard";

const News = () => {
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
        </div>

        {/*Filters*/}
        <Filters />

        {/*Platforms filter*/}
        <PlatformFilters />

        {/*Trending Section*/}
        <div className="mt-10 sm:items-center sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
          <div>
            {/*Trending Header Section*/}
            <div className="flex items-center gap-4">
              <div className="ml-1 p-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
                <TrendingUp className="text-white" />
              </div>
              <p className="tracking-wide sm:tracking-wider font-black bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent text-3xl">
                🔥 TRENDING NOW
              </p>
            </div>

            {/*News cards*/}
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
