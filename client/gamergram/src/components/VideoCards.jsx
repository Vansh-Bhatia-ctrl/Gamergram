import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import useGameStore from "../store/useGameStore";
import { format, parseISO } from "date-fns";
import { useEffect } from "react";
import LoadMoreNewsButton from "./LoadMoreNewsButton";

const VideoCards = () => {
  const {
    videoData,
    searchedVideos,
    gamePlayData,
    searchedGameplays,
    selectedFilter,
    searchItem,
    getYTVideos,
  } = useGameStore();

  useEffect(() => {
    getYTVideos();
  }, [getYTVideos]);

  const videosToShow = () => {
    if (!searchItem) {
      if (selectedFilter === "trailers") return videoData;
      if (selectedFilter === "gameplay") return gamePlayData;
    } else {
      if (selectedFilter === "trailers") return searchedVideos;
      if (selectedFilter === "gameplay") return searchedGameplays;
    }
    return [];
  };

  const videoType = videosToShow();

  return (
    <div className="flex flex-col gap-4 p-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
      {videoType.map((video) => (
        <div
          key={video._id}
          className="hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl"
        >
          <img
            src={video.thumbnailURL}
            className="w-[100%] h-[300px] object-cover rounded-t-2xl"
          />
          <div className="p-2">
            <div>
              <p className="text-white font-semibold line-clamp-2">
                {video.title}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {format(parseISO(video.publishedDate), "do MMMM yy")}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-4">
                <div className="text-sm text-gray-400 flex items-center gap-1 mt-3">
                  <Heart
                    size={18}
                    className="cursor-pointer hover:text-red-400"
                  />
                  890
                </div>

                <div className="text-sm text-gray-400 flex items-center gap-1 mt-3 ">
                  <MessageCircle
                    size={18}
                    className="cursor-pointer hover:text-blue-400"
                  />
                  1240
                </div>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={video.videoURL}
                className="text-sm text-cyan-400 flex items-center gap-1 mt-3 cursor-pointer font-bold hover:text-cyan-300 transition-colors"
              >
                WATCH
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCards;
