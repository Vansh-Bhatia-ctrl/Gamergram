import { Search, Menu } from "lucide-react";

const HeaderSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <div className="p-4 flex justify-between items-center  gap-4 ">
        <div className="flex items-center gap-2 lg:fixed">
          <Menu size={19} color="#fff" className="lg:hidden cursor-pointer" />
          <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
            GAMERGRAM
          </h1>
        </div>
        <div className="relative">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-white w-[170px] bg-neutral-700 p-1 rounded-2xl placeholder-neutral-400 pl-8 sm:w-[300px] md:w-[400px] lg:w-[600px] lg:p-3 lg:pl-8 lg:rounded-4xl lg:ml-[870px] border border-neutral-700 focus:border-cyan-500 focus:outline-none"
            placeholder="Search games"
          />
          <Search
            color="#a3a3a3"
            size={18}
            className="absolute top-1.5 left-2 lg:top-3.5 lg:left-[880px]"
          />
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
