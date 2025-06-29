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
        <div className="h-full bg-transparent border-r-1 border-gray-600 w-[80px]">
          <div className="flex flex-col gap-20">
            <div className="flex items-center justify-center mt-4">
              <Gamepad2 size={40} color="#00f5c0" className="" />
            </div>
            <div className="flex flex-col gap-10 items-center justify-center mt-15">
              <House size={30} color="#00f5c0" />
              <MessageCirclePlus size={30} color="#00f5c0" />
              <CirclePlus size={30} color="#00f5c0" />
              <Bot size={30} color="#00f5c0" />
            </div>
            <div className="flex items-center justify-center absolute">
              <User
                size={30}
                color="#00f5c0"
                className="relative top-156 left-5"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
