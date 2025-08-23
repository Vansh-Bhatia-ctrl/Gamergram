import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import useUIStore from "../store/useUIStore";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useLogoutStore from "../store/useLogoutStore";

const Header = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const { pages, selectedPage, setSelectedPage } = useUIStore();
  const { logOutUser } = useLogoutStore();
  const location = useLocation();
  useEffect(() => {
    const currentLocation = pages.find((p) => p.link === location.pathname);

    if (currentLocation) {
      setSelectedPage(currentLocation.id);
    }
  }, [location.pathname, pages, setSelectedPage]);

  return (
    <>
      <div>
        <div className="p-4 flex justify-between items-center  gap-4 ">
          <div className="flex items-center gap-2 ">
            <Menu
              onClick={() => setSideBarOpen(true)}
              size={19}
              color="#fff"
              className="cursor-pointer"
            />
            <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
              GAMERGRAM
            </h1>
          </div>

          <AnimatePresence>
            {sidebarOpen && (
              <div className="fixed inset-0 bg-black/40 z-[1001]">
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
                              onClick={() => setSideBarOpen(false)}
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
                      <div className="flex items-center gap-2 bg-gradient-to-r bg-clip-text p-4 lg:p-6 text-white hover:scale-115 transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:bg-clip-text hover:text-transparent mt-5  ">
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
        </div>
      </div>
    </>
  );
};

export default Header;
