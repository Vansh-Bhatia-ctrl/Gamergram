import { ArrowLeft, UserRoundPlus, SendHorizontal } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import io from "socket.io-client";

const socket = io("http://localhost:3000");

const AiCharecterChat = () => {
  const { userName } = useParams();
  const [character, setCharacter] = useState(null);
  const [message, setMessage] = useState("");
  const [chatLog, setChatlog] = useState([]);

  useEffect(() => {
    socket.on("aiReply", ({ aiReply, userMessage }) => {
      setChatlog((prevLog) => [
        ...prevLog,
        { type: "user", message: userMessage },
        { type: "ai", message: aiReply },
      ]);
    });

    socket.on("error", (error) => {
      console.error("Error starting chat", error.message);
    });

    return () => {
      socket.off("aiReply");
      socket.off("error");
    };
  }, []);

  useEffect(() => {
    const fetchedAiCharacter = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/fetchsingleAI/${userName}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch AI character");
        }

        const data = await res.json();
        setCharacter(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching character:", error);
      }
    };

    if (userName) {
      fetchedAiCharacter();
    }
  }, [userName]);

  const handleChatMessages = () => {
    if (!message.trim()) return;

    socket.emit("sendMessage", {
      aiUserName: userName,
      userMessage: message,
    });

    setMessage("");
  };

  return (
    <>
      <div
        className="h-screen
       w-screen
       bg-gradient-to-b from-custompurple-100 to-customblue-100 relative "
      >
        {/*Header and charecter info*/}
        <div className="flex justify-between">
          <div className="p-4  flex gap-10">
            <div className="flex items-center justify-center">
              <ArrowLeft size={23} color="#00f5c0" />
            </div>

            {character && (
              <div className="flex gap-4 relative">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  className="h-[40px] w-[40px] rounded-full object-contain border-1 border-gray-800"
                />
                <div className="w-[10px] h-[10px] rounded-full bg-green-700 absolute bottom-[2px] left-[30px]"></div>
                <div className="flex flex-col">
                  <div className="flex items-center justify-center">
                    <div className="flex items-start justify-start">
                      <p className="text-white">{character.Name}</p>
                    </div>
                  </div>
                  <div className="">
                    <p className="text-gray-400 text-[11px]">Active now</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/*Avatar and brief about the charecter*/}
        {character && (
          <div className="mt-8">
            <div className="flex flex-col">
              <div className="p-4 flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  className="h-[120px] w-[120px] rounded-full object-contain border-1 border-gray-800"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <p className="text-white text-[20px] font-semibold">
                    {character.Name}
                  </p>
                </div>
                <div className="flex justify-center mt-4">
                  <div className="text-center max-w-[500px] mx-auto">
                    <p className="text-gray-400 text-[14px]">{character.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/*Actual chat between the charecter and the user*/}
        <div className="flex flex-col px-4 mt-4 mb-28 h-[calc(100vh-380px)] overflow-y-auto space-y-4">
          {chatLog.map((entry, index) => (
            <div
              key={index}
              className={`flex ${
                entry.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {entry.type === "ai" && (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  className="h-[33px] w-[33px] rounded-full mr-2"
                />
              )}
              <div className="bg-gray-700 p-3 rounded-3xl max-w-[70%] break-words whitespace-pre-wrap">
                <p className="text-white text-sm">{entry.message}</p>
              </div>
              {entry.type === "user" && (
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  className="h-[33px] w-[33px] rounded-full ml-2"
                />
              )}
            </div>
          ))}
        </div>

        <div className="absolute bottom-1 left-[2px] w-full flex items-center justify-center gap-2 p-2">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type Something."
            className="placeholder:text-gray-400 border-2 border-gray-800 rounded-2xl p-2 w-[370px] text-white bg-transparent outline-none"
          />
          <SendHorizontal
            size={28}
            color="#00f5c0"
            className="cursor-pointer"
            onClick={handleChatMessages}
          />
        </div>
      </div>
    </>
  );
};

export default AiCharecterChat;
