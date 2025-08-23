import { useParams } from "react-router-dom";
import Header from "../components/Header";
import STORIES_DATA from "../utils/stories.json";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const StoryPage = () => {
  const { characterID } = useParams();
  const [expanded, setExpanded] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const currentCharacterStory = STORIES_DATA.filter(
    (story) => story._id === characterID
  );
  console.log(STORIES_DATA);
  console.log(characterID);
  console.log(currentCharacterStory);

  return (
    <>
      <div className="min-h-screen bg-neutral-900 w-screen overflow-x-hidden">
        {/*Header*/}
        <div>
          <Header />
        </div>

        <div className="mt-4 max-w-4xl mx-auto">
          {/*Character Name section*/}
          <div className="text-center space-y-4 p-2">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-orange-800 to-yellow-500 bg-clip-text text-transparent md:text-6xl">
              {currentCharacterStory[0]?.name}
            </h1>
            <p className="text-white text-lg font-semibold">
              {currentCharacterStory[0]?.meta.note}
            </p>
          </div>
          {/*Story cards*/}
          <div className="relative p-5 mt-6 flex flex-col gap-8 timeline-container">
            {currentCharacterStory[0]?.chapters.map((story) => {
              const isActive = currentId === story.id && expanded;
              return (
                <motion.div
                  whileHover="hover"
                  initial="initial"
                  key={story.id}
                  onClick={() => {
                    if (currentId === story.id) {
                      setExpanded(!expanded);
                    } else {
                      setExpanded(true);
                      setCurrentId(story.id);
                    }
                  }}
                  className="bg-red-500/10 p-4 rounded-xl w-full border border-white/10 cursor-pointer hover:scale-103 duration-300 delay-300 ease-in-out timeline-item"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`text-gray-200 font-bold rounded-full bg-gradient-to-b ${story.color} p-4 flex items-start whitespace-nowrap`}
                      >
                        Chapter {story.id}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-red-400">{story.era}</span>
                        <span className="text-white text-lg">
                          {story.title}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={
                        currentId === story.id && expanded
                          ? { rotate: 180 }
                          : { rotate: 0 }
                      }
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown color="#fff" className="w-6 h-6" />
                    </motion.div>
                  </div>
                  <div className="mt-4 py-2">
                    <span className="text-gray-300 text-sm">
                      {story.content.summary}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="overflow-hidden p-2 mt-6 max-w-md mx-auto sm:max-w-full sm:mx-auto border-t-2 border-red-300/10"
                      >
                        {story.content.details.map((detail) => (
                          <div className="border-l-2 border-red-400/60 h-auto p-2 mt-4">
                            <span className="text-gray-200">{detail}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryPage;
