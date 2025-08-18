import { BookmarkIcon, Grid, X } from "lucide-react";
import Header from "../components/Header";
import useUIStore from "../store/useUIStore";
import { useState } from "react";

const collections = [
  {
    id: 1,
    name: "RPG Masterpieces",
    count: 12,
    cover: "/ciri.png",
  },
  {
    id: 2,
    name: "Indie Gems",
    count: 8,
    cover: "/aloy.png",
  },
];

const filterGames = [
  {
    id: 1,
    name: "RPG Masterpieces",
    count: 12,
    cover: "/ciri.png",
  },
  {
    id: 2,
    name: "Indie Gems",
    count: 8,
    cover: "/aloy.png",
  },
  {
    id: 3,
    name: "I'll Play",
    count: 4,
    cover: "/bayek.png",
  },
  {
    id: 4,
    name: "Lovely Gems",
    count: 9,
    cover: "/doomguy.png",
  },
];

const ProfilePage = () => {
  const { tabs, setSelected, isSelected } = useUIStore();
  const [modalOpen, setModalOpen] = useState(false);
  const selectedTab = tabs.find((tab) => tab.id === isSelected);
  return (
    <>
      <div className="min-h-screen min-w-screen overflow-x-hidden bg-neutral-900">
        <div className="border-b border-gray-700">
          <Header />
        </div>
        <div className="lg:max-w-6xl mx-auto">
          <div className="px-4 py-10 md:flex md:items-center md:gap-4 md:leading-relaxed">
            <div className="w-35">
              <img src="/kratos.png" className="rounded-full" />
            </div>
            <div className="">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                GamerLegend21
              </h1>
              <p className="mt-4 text-white tracking-wide">
                Passionate gamer exploring virtual worlds and legendary stories.
                Always hunting for the next great adventure!
              </p>
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
                  <p className="text-2xl font-bold text-white">{tab.count}</p>
                  <p className="text-sm text-gray-400">{tab.label}</p>
                </div>
              );
            })}
          </div>

          <div className="px-4 mt-10">
            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-3">
                <Grid className="w-6 h-6 text-cyan-400" />
                <h1 className="text-white font-bold text-xl whitespace-nowrap">
                  My Collections
                </h1>
              </div>
              <div>
                <div className="">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-4     py-2 rounded-lg flex items-center gap-2 transition-all cursor-pointer text-white"
                  >
                    + Create Collection
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 w-[550px] lg:w-[1130px] overflow-x-auto flex gap-2 scrollbar-custom">
              {collections.map((collection) => (
                <div className="flex-shrink-0 w-[180px] mb-5 bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={collection.cover}
                      className="rounded-xl w-full h-full object-cover "
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
                      <p className="text-white font-bold">{collection.name}</p>
                      <p className="text-cyan-400 text-sm">
                        {collection.count}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
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
                    <span className="bg-black/30 px-2 py-1 rounded text-xs">
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="text-white font-bold text-lg">
              {selectedTab ? selectedTab.label : ""} Games
            </div>
            <div className="mt-5 w-[550px] lg:w-[1130px] overflow-x-auto flex gap-2 scrollbar-custom">
              {filterGames.map((collection) => (
                <div className="flex-shrink-0 w-[180px] mb-5 bg-neutral-800 rounded-xl overflow-hidden hover:bg-neutral-700 transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="aspect-[3/4] ">
                    <img
                      src={collection.cover}
                      className="rounded-t-xl w-full h-full object-cover "
                    />
                    <div className="  flex flex-col justify-end px-2 py-3 bg-gradient-to-t from-black/60 to-transparent rounded-xl">
                      <p className="text-white font-bold">{collection.name}</p>
                      <p className="text-cyan-400 text-sm">
                        {collection.count}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalOpen && (
          <div className="flex items-center justify-center fixed inset-0 bg-black/80 min-h-screen w-screen p-2">
            <div className="flex justify-center overflow-x-hidden">
              <div className="bg-neutral-800 rounded-xl w-md p-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-white font-bold text-lg">
                    Create New Collection
                  </h1>
                  <X
                    onClick={() => setModalOpen(false)}
                    size={20}
                    className="text-white cursor-pointer"
                  />
                </div>
                <form className="mt-5">
                  <label className="font-semibold text-gray-300 text-sm">
                    Collection Name
                  </label>
                  <input
                    className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none mt-3 mb-3"
                    placeholder="Enter collection name..."
                  />

                  <label className="font-semibold text-gray-300 text-sm">
                    Description (Optional)
                  </label>
                  <textarea
                    className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none resize-none mt-3"
                    placeholder="Describe your collection..."
                  />
                  <div className="flex flex-row gap-3">
                    <button
                      onClick={() => setModalOpen(false)}
                      className=" mt-4 flex-1 bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>

                    <button className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-lg transition-all whitespace-nowrap mt-4 cursor-pointer">
                      Create Collection
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
