import useGameStore from "../store/useGameStore";
import NewsCard from "./NewsCard";

const NewsSection = ({ type, children }) => {
  const { searchItem, searchedNews, psNews, xboxNews, news } = useGameStore();
  const gradientClasses = {
    trending: "from-red-400 to-pink-400",
    playstation: "from-blue-400 via-indigo-500 to-purple-500",
    xbox: "from-green-400 via-emerald-500 to-lime-400",
  };

  const gradientClass = gradientClasses[type] || gradientClasses.trending;

  let newsList = [];

  if (searchItem) {
    if (type === "playstation") {
      newsList = searchedNews.filter((n) => n.sourceName === "Playstation");
    } else if (type === "xbox") {
      newsList = searchedNews.filter((n) => n.sourceName === "Xbox");
    } else {
      newsList = searchedNews;
    }
  } else {
    if (type === "playstation") {
      newsList = psNews;
    } else if (type === "xbox") {
      newsList = xboxNews;
    } else {
      newsList = news;
    }
  }

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
