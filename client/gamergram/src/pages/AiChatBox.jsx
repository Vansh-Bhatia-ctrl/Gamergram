import { ArrowLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

let images = [
  { src: "/kratos.png", name: "Kratos" },
  { src: "/altair.png", name: "Altair" },
  { src: "/nathandrake.png", name: "Nathan" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
];

let AiCharecters = [
  { src: "/kratos.png", name: "Kratos" },
  { src: "/altair.png", name: "Altair" },
  { src: "/nathandrake.png", name: "Nathan" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
  { src: "/kratos.png", name: "Kratos" },
  { src: "/wukong.png", name: "Wukong" },
  { src: "/jinsakai.png", name: "Jin" },
];

const AiChatBox = () => {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchedCharacters = async () => {
      try {
        const response = await fetch("http://localhost:3000/fetchai/all", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }

        const data = await response.json();
        setCharacters(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch characters", error);
      }
    };

    fetchedCharacters();
  }, []);

  return (
    <>
      <div className="h-full w-full bg-gradient-to-b from-custompurple-100 to-customblue-100">
        {/* Header */}
        <div className="p-4 flex gap-4 items-center">
          <ArrowLeft size={23} color="#00f5c0" />
          <p className="text-white font-semibold orbitron">VanshBhatia</p>
        </div>

        {/* Search bar*/}
        <div className="p-4 -mt-2">
          <div className="relative w-full">
            <Search
              size={20}
              color="#00f5c0"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            />
            <input
              placeholder="Search"
              className="pl-10 placeholder:text-gray-400 border border-gray-600 h-[40px] rounded-xl p-2 w-full bg-transparent text-white"
            />
          </div>
        </div>

        {/*Ai charecters*/}
        <div className="overflow-x-hidden mt-2">
          <div className="flex gap-4 w-max ml-2  ">
            {characters.length > 0 ? (
              characters.map((character) => (
                <div
                  key={character._id}
                  className="flex flex-col items-center relative w-[70px] sm:w-[100px] mx-2"
                  onClick={() =>
                    navigate(`/charecterchatbox/${character.userName}`)
                  }
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                    alt={character.Name}
                    className="w-[60px] h-[60px] rounded-full border-1 border-gray-800 object-contain bg-transparent sm:h-[80px] sm:w-[80px]"
                  />
                  <p className="text-sm mt-1 text-gray-300 orbitron text-center truncate w-full">
                    {character.Name}
                  </p>
                  <div className="w-[15px] h-[15px] rounded-full bg-green-700 absolute bottom-[25px] left-[48px]"></div>
                </div>
              ))
            ) : (
              <p className="text-white">An error occured, please try again.</p>
            )}
          </div>
        </div>

        {/**Messaging section*/}
        <div>
          <div className="p-5 mt-3">
            <p className="text-white">Messages</p>
          </div>

          {characters.length > 0 ? (
            characters.map((character) => (
              <div
                index={character._id}
                className="p-4 flex gap-6 relative focus:bg-gray-600"
                onClick={() =>
                  navigate(`/charecterchatbox/${character.userName}`)
                }
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                  className="h-[50px] w-[50px] rounded-full object-contain border-1 border-gray-600"
                />
                <div className="">
                  <p className="text-white font-bold text-[14px]">
                    {character.Name}
                  </p>
                  <p className="text-gray-400 text-[12.5px]">Active Now</p>
                  <div className="w-[12px] h-[12px] rounded-full bg-green-700 absolute bottom-[17px] left-[53px]"></div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">An error occured, please try again.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default AiChatBox;
