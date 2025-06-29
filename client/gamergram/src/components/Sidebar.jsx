import {
  Bot,
  CirclePlus,
  Gamepad2,
  House,
  MessageCirclePlus,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <div className="hidden md:block fixed top-0 left-0 h-screen z-50">
        <div className="h-full bg-gradient-to-t from-customblue-200 to-custompurple-100 border-r-1 border-gray-600 w-[80px]">
          <div className="flex flex-col gap-20">
            <div className="flex items-center justify-center mt-4">
              <Gamepad2 size={40} color="#00f5c0" className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center mt-15">
              <House size={30} color="#00f5c0" className="cursor-pointer" />
              <MessageCirclePlus
                size={30}
                color="#00f5c0"
                className="cursor-pointer"
              />
              <CirclePlus
                size={30}
                color="#00f5c0"
                className="cursor-pointer"
              />
              <Bot size={30} color="#00f5c0" className="cursor-pointer" />
            </div>
            <div className="flex items-center justify-center mt-[40px] cursor-pointer lg:mt-[120px]">
              <User size={30} color="#00f5c0" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
