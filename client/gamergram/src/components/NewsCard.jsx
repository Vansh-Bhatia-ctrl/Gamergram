import { MessageCircle, Heart, ExternalLink } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "Bethesda's Biggest Games Are Discounted Ahead Of QuakeCon 2025",
    summary:
      "Major discounts on Doom, Fallout, The Elder Scrolls, and more Bethesda franchises ahead of the annual QuakeCon event.",
    description:
      "QuakeCon is almost here, and multiple stores are offering big discounts on Doom, Fallout, The Elder Scrolls, and more Bethesda franchises. The annual convention brings together gaming enthusiasts from around the world...",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=225&fit=crop",
    source: "GameSpot",
    publishedDate: "2 hours ago",
    category: "deals",
    platform: "pc",
    likes: 234,
    comments: 45,
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: 2,
    title: "PlayStation 5 Pro Specs Revealed in Latest Developer Leak",
    summary:
      "New leak reveals enhanced GPU performance and ray tracing capabilities for the rumored PS5 Pro console.",
    description:
      "According to recent developer documentation leaks, the PlayStation 5 Pro is expected to feature significant improvements in GPU performance, enhanced ray tracing capabilities, and support for 8K gaming...",
    image:
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=225&fit=crop",
    source: "IGN",
    publishedDate: "4 hours ago",
    category: "leaks",
    platform: "playstation",
    likes: 456,
    comments: 128,
    isBookmarked: true,
    isTrending: true,
  },
  {
    id: 3,
    title: "Xbox Game Pass Adds 5 New Games This Week",
    summary:
      "Microsoft announces five new titles joining Game Pass, including a surprise day-one release.",
    description:
      "Microsoft has announced that five new games will be joining Xbox Game Pass this week, including both PC and console versions. The lineup features a mix of indie darlings and AAA experiences...",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=225&fit=crop",
    source: "Xbox",
    publishedDate: "6 hours ago",
    category: "announcements",
    platform: "xbox",
    likes: 189,
    comments: 67,
    isBookmarked: false,
    isTrending: true,
  },
  {
    id: 4,
    title: "Cyberpunk 2077 Sequel Officially Announced by CD Projekt RED",
    summary:
      "CD Projekt RED confirms development of Cyberpunk 2077 sequel with new engine and expanded team.",
    description:
      "CD Projekt RED has officially announced that they are working on a sequel to Cyberpunk 2077. The new game will be built using Unreal Engine 5 instead of the company's proprietary REDengine...",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=225&fit=crop",
    source: "IGN",
    publishedDate: "1 day ago",
    category: "announcements",
    platform: "pc",
    likes: 892,
    comments: 234,
    isBookmarked: false,
    isTrending: true,
  },
];

const trendingNews = newsData.filter((news) => news.isTrending);

const NewsCard = () => {
  return (
    <div className="p-2 flex flex-col md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 gap-5 mt-4 md:mt-6">
      {trendingNews.map((news) => (
        <div
          key={news.id}
          className="bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden"
        >
          <div className="w-[100%]">
            <img src={news.image} className="w-full object-cover" />
            <div className="relative -top-10">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 font-bold px-3 py-1.5 text-black text-sm rounded-full ml-2">
                {news.source}
              </span>
              <span className="bg-black/40 backdrop-blur-sm px-2 py-1 font-semibold text-white/90 text-sm rounded-full ml-2">
                {news.publishedDate}
              </span>
            </div>
          </div>
          <div className="-mt-7">
            <h1 className="text-white px-5 py-6 text-lg font-bold">
              {news.title}
            </h1>
            <p className="text-cyan-300/80 text-sm font-medium px-5 mb-4 -mt-3 line-clamp-2">
              {news.summary}
            </p>
            <div className="mx-auto mt-1 h-[0.3px] w-[90%] lg:w-[95%] bg-cyan-400 rounded-full sm:mt-3 mb-4" />
          </div>
          <div className="flex mb-2 justify-between">
            <div className="flex">
              <div className="flex items-center text-neutral-400 px-5 gap-2 mb-3">
                <MessageCircle />
                <p className="text-sm">390</p>
              </div>
              <div className="flex  items-center text-neutral-400 px-5 gap-2 mb-3">
                <Heart />
                <p className="text-sm">240</p>
              </div>
            </div>
            <div className="flex items-center text-cyan-400 px-5 gap-1 mb-3">
              <p className="font-bold text-sm">READ MORE</p>
              <ExternalLink size={15} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
