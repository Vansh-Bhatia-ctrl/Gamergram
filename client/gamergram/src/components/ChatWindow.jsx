import { X, Send } from "lucide-react";
import useUIStore from "../store/useUIStore";
import useChatStore from "../store/useChatStore";
import { useEffect, useState } from "react";

const ChatWindow = ({ modalIsOpen, setModalIsOpen }) => {
  const userId = localStorage.getItem("userId");
  const { selectedCharacter } = useUIStore();
  const { messages, aiTyping, connectSocket, sendMessage, getChatHistory } =
    useChatStore();
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    if ((selectedCharacter, modalIsOpen)) {
      connectSocket(userId);
      getChatHistory(userId, selectedCharacter._id);
    }
  }, [selectedCharacter, modalIsOpen]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    sendMessage(newMessage, userId, selectedCharacter._id);
    setNewMessage("");
  };

  return (
    <>
      {modalIsOpen && selectedCharacter && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
          <div className="bg-neutral-800 min-h-[75.6%] w-[90%] lg:w-[80%] xl:w-[70%] rounded-xl border border-neutral-600 shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-gray-600 p-4 bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-t-xl">
              <div className="flex  items-center gap-4">
                <div className="w-16 h-16 lg:w-19 lg:h-19 bg-gradient-to-br px-3 py-2 text-lg rounded-xl inline-block">
                  <img
                    src={selectedCharacter.imageURL}
                    className="w-full h-full rounded-2xl object-cover lg:object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-white font-bold">
                    {selectedCharacter.name}
                  </h1>
                  <h1 className="text-gray-400 font-semibold">
                    {selectedCharacter.game}
                  </h1>
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
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`w-90 px-3 py-4 rounded-xl my-3 ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white self-end ml-auto"
                      : "bg-neutral-700 text-white self-end"
                  }`}
                >
                  <div className="mt-2">
                    <p className="text-white text-sm">{msg.text}</p>
                  </div>
                  <div className="mt-3">
                    <p
                      className={`${
                        msg.sender === "user"
                          ? "text-neutral-300"
                          : "text-neutral-400"
                      } text-xs`}
                    >
                      {" "}
                      {new Date(msg.timeStamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {aiTyping && (
                <p className="text-gray-400 italic animate-pulse">
                  AI is typing...
                </p>
              )}
            </div>

            <div className="border-t border-neutral-700 bg-neutral-800/50 p-2 items-center">
              <div className="flex items-center gap-3 xl:mt-4">
                <input
                  className="w-full bg-neutral-700 border border-neutral-600 rounded-xl px-4 py-3 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Write your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-neutral-600 disabled:to-neutral-600 p-3 rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
                >
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
