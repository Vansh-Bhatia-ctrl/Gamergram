import { ArrowLeft, UserRoundPlus, SendHorizontal } from "lucide-react";

const AiCharecterChat = () => {
  return (
    <>
      <div
        className="h-full
       w-full
       bg-gradient-to-b from-custompurple-100 to-customblue-100"
      >
        {/*Header and charecter info*/}
        <div className="flex justify-between">
          <div className="p-4  flex gap-10">
            <div className="flex items-center justify-center">
              <ArrowLeft size={23} color="#00f5c0" />
            </div>
            <div className="flex gap-4 relative">
              <img
                src="/kratos.png"
                className="h-[40px] w-[40px] rounded-full object-contain border-1 border-gray-800"
              />
              <div className="w-[10px] h-[10px] rounded-full bg-green-700 absolute bottom-[2px] left-[30px]"></div>
              <div className="flex items-center justify-center flex-col">
                <div className="flex items-start justify-start">
                  <p className="text-white">Kratos</p>
                </div>
                <div>
                  <p className="text-gray-400 text-[11px]">Active now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex items-center justify-center">
            <UserRoundPlus size={26} color="#00f5c0" />
          </div>
        </div>

        {/*Avatar and brief about the charecter*/}
        <div className="mt-8">
          <div className="flex flex-col">
            <div className="p-4 flex items-center justify-center">
              <img
                src="/kratos.png"
                className="h-[120px] w-[120px] rounded-full object-contain border-1 border-gray-800"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-center">
                <p className="text-white text-[20px] font-semibold">Kratos</p>
              </div>
              <div className="flex justify-center">
                <div className="text-center max-w-[500px] mx-auto">
                  <p className="text-gray-400 text-[14px]">
                    Kratos is a legendary Spartan warrior and god-slayer from
                    the God of War series. Known for his brutal strength and
                    iconic Blades of Chaos, he battles gods and monsters alike.
                    Once fueled by rage, Kratos now seeks redemption and guides
                    his son through the harsh realms of Norse mythology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Actual chat between the charecter and the user*/}
        <div className="mt-10 flex justify-start items-start">
          <div className="flex">
            <div className="p-2">
              <img
                src="./kratos.png"
                className="h-[33px] w-[33px] rounded-full object-contain border-1 border-gray-800"
              />
            </div>
            <div
              className="bg-gray-700 p-3 flex items-center justify-center rounded-4xl
            4 max-w-[280px]"
            >
              <div className="w-auto">
                <p className="text-white text-[13px]"> I am Kratos.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex gap-4 items-end justify-end">
          <div
            className="bg-gray-700 p-3 flex items-center justify-center rounded-4xl
            4 max-w-[280px] ml-2"
          >
            <div className="w-auto">
              <p className="text-white text-[13px]"> I am Jin Sakai.</p>
            </div>
          </div>
          <div>
            <img
              src="jinsakai.png"
              className="h-[33px] w-[33px] rounded-full object-contain border-1 border-gray-800"
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="flex">
            <div className="p-2">
              <img
                src="./kratos.png"
                className="h-[33px] w-[33px] rounded-full object-contain border-1 border-gray-800"
              />
            </div>
            <div
              className="bg-gray-700 p-3 flex items-center justify-center rounded-4xl
            4 max-w-[280px]"
            >
              <div className="w-auto">
                <p className="text-white text-[13px]"> Good to meet you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 ml-2 p-2 mt-6">
          <input
            placeholder="Type Something."
            className="placeholder:text-gray-400 border-2 border-gray-800 rounded-2xl p-2 w-[370px] text-white bg-transparent outline-none"
          />
          <SendHorizontal
            size={28}
            color="#00f5c0"
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default AiCharecterChat;
