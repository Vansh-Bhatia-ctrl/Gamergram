import { Menu, Bell } from "lucide-react";
import SubHeader from "../components/SubHeader";
import Sidebar from "../components/Sidebar";
import Filters from "../components/Filters";
import PlatformFilters from "../components/PlatformFilters";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import NewsSection from "../components/NewsSection";
import useGameStore from "../store/useGameStore";
import { useEffect } from "react";
import VideoCards from "../components/VideoCards";

const News = () => {
  const {
    loading,
    fetchNews,
    selectedFilter,
    selectedPlatform,
    searchSelectedItem,
    searchItem,
  } = useGameStore();

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden">
        {/*Header Section*/}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600" />
          <div className="p-4 flex justify-between items-center  gap-4">
            <div className="flex items-center gap-2 ">
              <Menu size={19} color="#fff" className="cursor-pointer" />
              <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
                GAMERGRAM
              </h1>
            </div>
          </div>
        </div>

              {/* <Sidebar /> */}
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center mt-7">
          {/*Sub-heading*/}
          <SubHeader />

          <div className="sm:flex sm:items-center sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
            {/*Search bar and  news letter button*/}
            <div className="mt-12 sm:flex-[4] md:flex-[6] lg:flex-[10]">
              <input
                value={searchItem}
                onChange={(e) => searchSelectedItem(e.target.value)}
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
        {selectedFilter === "all" && <PlatformFilters />}

        {/*Trending Section*/}
        <div className="mt-10 sm:items-center sm:gap-4 sm:min-w-screen md:max-w-4xl md:px-8 lg:max-w-6xl lg:mx-auto lg:px-14">
          {loading ? (
            <div className="flex items-center justify-center ">
              <DotLottieReact
                src="https://lottie.host/7803dbda-7802-4570-b64c-6adb3d9cce04/3173B4Qe5z.lottie"
                loop
                autoplay
              />
            </div>
          ) : (
            <div>
              {selectedFilter === "all" && selectedPlatform === "all" && (
                <>
                  <NewsSection type="trending">
                    {!searchItem && "🔥 TRENDING NOW"}
                  </NewsSection>
                </>
              )}

              {selectedFilter === "all" &&
                selectedPlatform === "playstation" && (
                  <NewsSection type="playstation">
                    {!searchItem && "🎮 NEW IN PLAYSTATION"}
                  </NewsSection>
                )}

              {selectedFilter === "all" && selectedPlatform === "xbox" && (
                <NewsSection type="xbox">
                  {!searchItem && "💚 NEW IN XBOX"}
                </NewsSection>
              )}

              {selectedFilter === "trailers" && (
                <>
                  <VideoCards />
                </>
              )}

              {selectedFilter === "announcements" && (
                <>
                  <NewsSection type="playstation">
                    {!searchItem && "OFFICIAL PLAYSTATION NEWS"}
                  </NewsSection>
                  <NewsSection type="xbox">
                    {!searchItem && "OFFICIAL XBOX NEWS"}
                  </NewsSection>
                </>
              )}

              {selectedFilter === "gameplay" && (
                <>
                  <VideoCards />
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default News;
