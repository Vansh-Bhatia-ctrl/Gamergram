import {
  House,
  ClipboardX,
  Radio,
  BotMessageSquare,
  Newspaper,
  LibraryBig,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Link to="/gamebuletien" className="flex items-center gap-2">
          <House size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            Home
          </h1>
        </Link>

        <Link to="/Events" className="flex items-center gap-2">
          <ClipboardX size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            Events
          </h1>
        </Link>

        <Link to="/broadcast" className="flex items-center gap-2">
          <Radio size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            Broadcast
          </h1>
        </Link>

        <Link to="/aiChatBox" className="flex items-center gap-2">
          <BotMessageSquare size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            AI Chat
          </h1>
        </Link>

        <Link to="/news" className="flex items-center gap-2">
          <Newspaper size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            News
          </h1>
        </Link>

        <Link to="/saga" className="flex items-center gap-2">
          <LibraryBig size={25} color="#fff" className="cursor-pointer" />
          <h1 className=" text-white text-[26px] font-bold cursor-pointer">
            Saga
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
