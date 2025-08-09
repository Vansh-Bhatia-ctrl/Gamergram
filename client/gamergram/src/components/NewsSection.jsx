import useGameStore from "../store/useGameStore";
import NewsCard from "./NewsCard";

const NewsSection = ({ type, children }) => {
  const gradientClasses = {
    trending: "from-red-400 to-pink-400",
    playstation: "from-blue-400 via-indigo-500 to-purple-500",
    xbox: "from-green-400 via-emerald-500 to-lime-400",
  };

  const gradientClass = gradientClasses[type] || gradientClasses.trending;

  const newsList = useGameStore((state) => {
    if (type === "playstation") return state.psNews;
    if (type === "xbox") return state.xboxNews;
    return state.news;
  });

  return (
    <>
      <div className="flex items-center gap-4 mt-10">
        <p
          className={`tracking-wide sm:tracking-wider font-black bg-gradient-to-r  ${gradientClass} bg-clip-text text-transparent text-3xl`}
        >
          {children}
        </p>
      </div>

      {/*News cards*/}
      <NewsCard newsList={newsList} />
    </>
  );
};

export default NewsSection;
