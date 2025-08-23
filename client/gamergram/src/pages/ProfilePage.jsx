import { BookmarkIcon, Grid, X } from "lucide-react";
import Header from "../components/Header";
import useUIStore from "../store/useUIStore";
import { useEffect, useState } from "react";
import useUserList from "../store/useUserList";

const ProfilePage = () => {
  const { tabs, setSelected, isSelected } = useUIStore();
  const [userData, setUserData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [bio, setBio] = useState(null);
  const [gameDetails, setGameDetails] = useState([]);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/getlist/get-userlist`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          console.log("Error fetching list");
          return;
        }

        const data = await response.json();
        setUserData(data.userName);
        setAvatar(data.avatar);
        setBio(data.bio);
        console.log("data: ", data);
        const entireGameData = data.userList.map(async (item) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/gamedata/${item.gameID}`,
            {
              method: "GET",
              headers: {
                "Content-type": "application/json",
              },
            }
          );

          if (!response.ok) {
            console.log("Error fetching game details.");
          }

          const gamedata = await response.json();
          return {
            ...item,
            gameData: gamedata,
          };
        });

        const getGameData = await Promise.all(entireGameData);
        setGameDetails(getGameData);
      } catch (error) {
        console.log("Error fetching game details:", error.message);
      }
    };

    fetchGameData();
  }, []);

  console.log("full gameDetails: ", gameDetails);

  const selectedTab = tabs.find((tab) => tab.id === isSelected);

  return (
    <>
      <div className="min-h-screen min-w-screen overflow-x-hidden bg-neutral-900">
        <div className="border-b border-gray-700">
          <Header />
        </div>

        <div className="lg:max-w-6xl mx-auto">
          <div className="px-4 py-10 md:flex md:items-center md:gap-4 md:leading-relaxed">
            <div className="w-35  flex-shrink-0">
              <img src={avatar} className="rounded-full" />
            </div>
            <div className="text-left">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {userData}
              </h1>
              <p className="mt-4 text-white tracking-wide">{bio}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 p-4 -mt-7 md:grid md:grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <div
                  key={tab.id}
                  className="bg-neutral-800 h-auto p-4 rounded-2xl text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                  <p className="text-2xl font-bold text-white">
                    {
                      gameDetails.filter((game) => game.status === tab.id)
                        .length
                    }
                  </p>
                  <p className="text-sm text-gray-400">{tab.label}</p>
                </div>
              );
            })}
          </div>

          <div className="px-4 mt-10">
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelected(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      isSelected === tab.id
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "bg-neutral-800 text-gray-400 hover:bg-neutral-700 hover:text-white"
                    } cursor-pointer`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div className="text-white font-bold text-lg">
              {selectedTab ? selectedTab.label : ""} Games
            </div>

            <div className="mt-5 w-[550px] lg:w-[1130px] overflow-x-auto flex gap-2 scrollbar-custom">
              {gameDetails.length > 0 ? (
                gameDetails
                  .filter((collection) => collection.status === selectedTab?.id)
                  .map((collection) => {
                    return (
                      <div
                        key={gameDetails._id}
                        className="flex-shrink-0 w-[180px] mb-5 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
                      >
                        <div className="aspect-[3/4] ">
                          <img
                            src={collection.gameData.coverImages}
                            className="rounded-t-xl w-full h-full object-cover"
                          />
                          <div className=" flex flex-col justify-end px-2 py-3 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
                            <p className="text-white font-bold">
                              {collection.gameData.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })
              ) : (
                <div className="mb-4">
                  <p className="text-white text-2xl font-extrabold md:text-4xl">
                    No games added!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
