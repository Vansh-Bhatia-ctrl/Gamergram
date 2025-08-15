import { MessageCircle, Heart, ExternalLink, BookmarkIcon } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";

const NewsCard = ({ newsList }) => {
  return (
    <div className="p-2 flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-5 mt-4 md:mt-6">
      {newsList.map((newsItem) => (
        <div
          key={newsItem._id}
          className="flex flex-col h-full hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden"
        >
          <div className="w-full h-76 relative">
            <img
              src={newsItem.imageURL}
              className="w-full h-full object-cover"
              alt={newsItem.title}
            />
            <div className="absolute bottom-2 left-2 flex gap-2">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 font-bold px-3 py-1.5 text-black text-sm rounded-full">
                {newsItem.sourceName}
              </span>
              <span className="bg-black/40 backdrop-blur-sm px-2 py-1 font-semibold text-white/90 text-sm rounded-full">
                {format(parseISO(newsItem.publishedDate), "do MMMM yy")}
              </span>
            </div>
          </div>

          <div className="flex flex-col flex-grow p-5">
            <h1 className="text-white text-lg font-bold mb-3 line-clamp-2 leading-tight">
              {newsItem.title}
            </h1>

            <p className="text-cyan-300/80 text-sm font-medium mb-4 line-clamp-2 flex-grow">
              {newsItem.summary}
            </p>

            <div className="w-full h-[0.3px] bg-cyan-400 rounded-full mb-4" />
            <div className="flex justify-between items-center mt-auto">
              <div className="flex gap-4"></div>
              <div className="flex items-center text-cyan-400 gap-1 cursor-pointer hover:text-cyan-300 transition-colors">
                <Link
                  to={`/news/${newsItem._id}`}
                  className="font-bold text-sm"
                >
                  READ MORE
                </Link>
                <ExternalLink size={15} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
