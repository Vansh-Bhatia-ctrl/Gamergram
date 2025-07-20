import {
  House,
  ClipboardX,
  Radio,
  BotMessageSquare,
  Newspaper,
  LibraryBig,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2">
          <House size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">Home</h1>
        </div>

        <div className="flex items-center gap-2">
          <ClipboardX size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">Forum</h1>
        </div>

        <div className="flex items-center gap-2">
          <Radio size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">Broadcast</h1>
        </div>

        <div className="flex items-center gap-2">
          <BotMessageSquare size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">AI Chat</h1>
        </div>

        <div className="flex items-center gap-2">
          <Newspaper size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">News</h1>
        </div>

        <div className="flex items-center gap-2">
          <LibraryBig size={25} color="#fff" />
          <h1 className=" text-white text-[26px] font-bold">Saga</h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
