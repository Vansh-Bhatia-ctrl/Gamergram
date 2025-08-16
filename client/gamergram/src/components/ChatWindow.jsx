import { X, Send } from "lucide-react";

const ChatWindow = ({ modalIsOpen, setModalIsOpen }) => {
  return (
    <>
      {modalIsOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-neutral-800 min-h-[75.6%] w-[90%] lg:w-[80%] xl:w-[70%] rounded-xl border border-neutral-600 shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-gray-600 p-4 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-t-xl">
              <div className="flex  items-center gap-4">
                <div className="bg-gradient-to-br from-green-500 to-blue-600 px-3 py-2 text-lg rounded-xl inline-block">
                  🎖️
                </div>
                <div>
                  <h1 className="text-white font-bold">Master Chief</h1>
                  <h1 className="text-gray-400 font-semibold">Halo</h1>
                </div>
              </div>
              <div>
                <X
                  onClick={() => setModalIsOpen(false)}
                  className="w-4 h-4 text-neutral-400 cursor-pointer lg:w-7 lg:h-7"
                />
              </div>
            </div>

            <div className="h-83 p-4 overflow-y-auto">
              <div className=" w-70 px-3 py-4 bg-neutral-700 rounded-xl">
                <div className="flex  items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-xs">
                    🎖️
                  </div>
                  <p className="text-neutral-300 text-xs">Master Chief</p>
                </div>
                <div className="mt-2">
                  <p className="text-white text-sm">
                    Spartan-117 reporting for duty. What's the situation,
                    soldier?
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-neutral-400 text-xs">05:33 AM</p>
                </div>
              </div>

              <div className=" -w-70 flex justify-end mt-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl">
                  <p className="text-sm">What's up?</p>{" "}
                  <div className="mt-3">
                    <p className="text-neutral-300 text-xs text-end">
                      05:33 AM
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 w-70 px-3 py-4 bg-neutral-700 rounded-xl">
                <div className="flex  items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-xs">
                    🎖️
                  </div>
                  <p className="text-neutral-300 text-xs">Master Chief</p>
                </div>
                <div className="mt-2">
                  <p className="text-white text-sm">
                    Spartan-117 reporting for duty. What's the situation,
                    soldier?
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-neutral-400 text-xs">05:33 AM</p>
                </div>
              </div>
            </div>

            <div className="border-t border-neutral-700 bg-neutral-800/50 p-2 items-center">
              <div className="flex items-center gap-3 xl:mt-4">
                <input
                  className="w-full bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Write your message..."
                />
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-neutral-600 disabled:to-neutral-600 p-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25">
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWindow;
