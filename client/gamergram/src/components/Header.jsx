import { Menu } from "lucide-react";

const Header = () => {
  return (
    <>
      <div>
        <div className="p-4 flex justify-between items-center  gap-4 ">
          <div className="flex items-center gap-2 ">
            <Menu size={19} color="#fff" className="cursor-pointer" />
            <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold md:text-lg orbitron lg:text-xl cursor-pointer">
              GAMERGRAM
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
