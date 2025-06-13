import { Heart, MessageSquare } from "lucide-react";

const MiniDiscussionPage = () => {
  return (
    <>
      <div className="h-[360px] w-[200px] border-2 border-gray-600 shadow-xl bg-gradient-to-b from-customblue-200 to-custompurple-100 rounded-xl ml-2 cursor-pointer">
        <div className="flex p-3">
          <img
            src="/kratos.png"
            className="w-[40px] h-[40px] rounded-full border-2 border-transparent object-contain bg-transparent"
          />
          <div className="flex flex-col">
            <p className="text-white orbitron text-[14px]">Alex</p>
            <p className="text-gray-400 orbitron text-[11px]">2h</p>
          </div>
        </div>

        <div className="-mt-[10px]">
          <div className="p-2">
            <p className="text-white orbitron text-[14px] font-semibold">
              What do you think of the new level in Elden Ring?
            </p>
          </div>
          <div className="w-[225px] p-2">
            <img
              src="/elden_ring.png"
              className="h-[180px] w-[180px] object-cover rounded-lg"
            />
          </div>
          <div className="flex gap-10 p-2">
            <div className="flex items-center gap-[3px]">
              <Heart size={22} color="#00f5c0" />
              <p className="text-white orbitron text-[12px]">120</p>
            </div>
            <div className="flex items-center gap-[3px]">
              <MessageSquare size={22} color="#00f5c0" />
              <p className="text-white orbitron text-[12px]">20</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniDiscussionPage;
