import { Link, useLocation } from "react-router-dom";
import useUIStore from "../store/useUIStore";
import { useEffect } from "react";
import { User } from "lucide-react";

const Sidebar = () => {
  const { pages, selectedPage, setSelectedPage } = useUIStore();
  const location = useLocation();
  useEffect(() => {
    const currentLocation = pages.find((p) => p.link === location.pathname);

    if (currentLocation) {
      setSelectedPage(currentLocation.id);
    }
  }, [location.pathname, pages, setSelectedPage]);

  return (
    <div>
      <div className="flex flex-col gap-10">
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
    </div>
  );
};

export default Sidebar;
