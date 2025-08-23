import { Menu, X, LogOut } from "lucide-react";
import SubHeader from "../components/SubHeader";
import Filters from "../components/Filters";
import PlatformFilters from "../components/PlatformFilters";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import NewsSection from "../components/NewsSection";
import useGameStore from "../store/useGameStore";
import { useEffect, useState } from "react";
import VideoCards from "../components/VideoCards";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useUIStore from "../store/useUIStore";
import { motion, AnimatePresence } from "framer-motion";
import useLogoutStore from "../store/useLogoutStore";

const News = () => {
  const {
    loading,
    fetchNews,
    selectedFilter,
    selectedPlatform,
    searchSelectedItem,
    searchItem,
    tokens,
    authChecked,
  } = useGameStore();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);
  const { pages, selectedPage, setSelectedPage } = useUIStore();
  const location = useLocation();
  const { logOutUser } = useLogoutStore();
  useEffect(() => {
    const currentLocation = pages.find((p) => p.link === location.pathname);

    if (currentLocation) {
      setSelectedPage(currentLocation.id);
    }
  }, [location.pathname, pages, setSelectedPage]);
  
  useEffect(() => {
    if (authChecked && !tokens) {
      navigate("/login");
    }
  }, [authChecked, navigate, tokens]);

  if (!authChecked) {
    return null;
  }
  return (
    <>
      <div className="min-h-screen min-w-screen bg-neutral-900 overflow-x-hidden">
        {/*Header Section*/}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-600" />
          <div className="p-4 flex justify-between items-center  gap-4">
            <div className="flex items-center gap-2 ">
              <Menu
                onClick={() => setSidebarOpen(true)}
                size={19}
                color="#fff"
                className="cursor-pointer"
              />
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

      <AnimatePresence>
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/40">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ x: -250, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-screen w-60 bg-gradient-to-b from-neutral-900 to-neutral-800"
            >
              <div className="">
                <div>
                  <div className="flex items-center justify-between border-b border-b-neutral-600 p-3">
                    <div>
                      <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold text-xl tracking-wide">
                        GAMERGRAM
                      </h1>
                      <span className="text-neutral-400 text-sm">
                        Gaming hub
                      </span>
                    </div>
                    <div>
                      <button className="px-2 py-1 bg-neutral-700 rounded-lg">
                        <X
                          onClick={() => setSidebarOpen(false)}
                          className="w-4 cursor-pointer"
                          color="#fff"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 mt-5 p-4 lg:p-6">
                    {pages.map((page) => {
                      const IconComponent = page.icon;
                      return (
                        <Link
                          to={page.link}
                          className={`flex items-center gap-2 ${
                            selectedPage === page.id
                              ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                              : "text-white hover:scale-115 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:bg-clip-text hover:text-transparent"
                          }`}
                        >
                          <IconComponent
                            size={25}
                            color="#fff"
                            className={`cursor-pointer`}
                          />
                          <button
                            onClick={() => setSelectedPage(page.id)}
                            className={`text-[26px] font-bold cursor-pointer`}
                          >
                            {page.label}
                          </button>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r bg-clip-text p-4 lg:p-6 text-white hover:scale-115 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:bg-clip-text hover:text-transparent mt-5">
                    <LogOut
                      size={25}
                      color="#fff"
                      className={`cursor-pointer`}
                    />
                    <button
                      onClick={logOutUser}
                      className={`text-[20px] font-bold cursor-pointer`}
                    >
                      Log-out
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default News;
