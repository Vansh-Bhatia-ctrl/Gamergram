import { MessageCircle, Star } from "lucide-react";
import { useState } from "react";
import ChatWindow from "./ChatWindow";
import useAiProfileStore from "../store/useAiProfileStore";
import { useEffect } from "react";
import useUIStore from "../store/useUIStore";

const AiCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { aiProfiles, isLoading, error, getAiProfiles } = useAiProfileStore();
  const { setSelectedCharacter } = useUIStore();
  useEffect(() => {
    getAiProfiles();
  }, []);

  return (
    <>
      <div className="p-3 flex flex-col gap-5 mt-4 md:max-w-7xl md:mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {aiProfiles.map((character) => (
          <div
            key={character.characterId}
            onClick={() => {
              setModalIsOpen(true);
              setSelectedCharacter(character);
            }}
            className="bg-neutral-800 h-auto p-4 rounded-xl border hover:bg-neutral-700 border-neutral-600 cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 lg:w-23 lg:h-23 bg-gradient-to-br px-3 py-2 text-lg rounded-xl inline-block">
                <img
                  src={character.imageURL}
                  className="w-full h-full rounded-2xl object-cover lg:object-cover"
                />
              </div>
              <div>
                <h1 className="text-white font-bold">{character.name}</h1>
                <h1 className="text-gray-400 font-semibold">
                  {character.game}
                </h1>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-neutral-300">{character.bio}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div>
                  <Star className="w-3 h-3 text-yellow-400" />
                </div>
                <p className="text-xs text-yellow-400 font-medium">
                  {character.specialty}
                </p>
              </div>

              <div>
                <div className="px-2 py-1 bg-neutral-600 rounded-full text-xs text-neutral-300 whitespace-nowrap">
                  {character.tag}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2 text-blue-400">
                <div>
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p className="text-sm font-medium">Start chat</p>
              </div>
            </div>
          </div>
        ))}

        {/**Chat Window */}
        <ChatWindow modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      </div>
    </>
  );
};

export default AiCard;
