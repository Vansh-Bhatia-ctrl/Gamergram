import {
  Gamepad2,
  Bell,
  MessageCircleMore,
  Heart,
  MessageSquare,
  Bookmark,
} from "lucide-react";
import Stories from "../components/Stories";
import MiniDiscussionPage from "../components/MiniDiscussionPage";

const FeedPage = () => {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-b from-custompurple-100 to-customblue-100">
        <div className="text-white">
          <div className="p-3 flex justify-between items-center">
            <div className="flex gap-2 items-center cursor-pointer">
              <Gamepad2 size={32} color="#00f5c0" className="" />
              <h1 className="text-customgreen-100 orbitron text-xl font-semibold">
                Gamergram
              </h1>
            </div>

            <div className="flex gap-4 items-center">
              <Bell size={22} color="#6B7280" />
              <MessageCircleMore size={22} color="#6B7280" />
            </div>
          </div>
          <Stories />
        </div>

        <div className="w-full mt-5">
          <div className="ml-2 w-[100px] flex items-center justify-center mb-3 gap-2">
            <img
              src="/kratos.png"
              className="rounded-full h-[50px] w-[50px] object-contain border-2 border-gray-500"
            />
            <p className="text-white text-[15px] orbitron">Kratos</p>
          </div>

          <div className="w-full h-[470px] overflow-hidden">
            <img src="/kratos.png" className="w-full h-full object-cover" />
          </div>

          <div className="flex gap-7 mt-3 ml-3">
            <div className="flex items-center gap-[3px]">
              <Heart size={28} color="#00f5c0" />
              <p className="text-white text-[14px] font-semibold">120</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <MessageSquare size={28} color="#00f5c0" />
              <p className="text-white text-[14px] font-semibold">120</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <Bookmark size={28} color="#00f5c0" />
            </div>
          </div>

          <div className="mt-2 flex gap-2 ml-4">
            <p className="text-white text-[15px] orbitron font-semibold">
              Kratos
            </p>
            <p className="text-white text-[15px]">This is me.</p>
          </div>
          <div className="ml-4">
            <p className="text-gray-600 text-[11px]">7th December 2025</p>
          </div>
        </div>
        <div className="flex overflow-hidden mt-4">
        <MiniDiscussionPage />
        <MiniDiscussionPage />
        </div>
      </div>
    </>
  );
};

export default FeedPage;
