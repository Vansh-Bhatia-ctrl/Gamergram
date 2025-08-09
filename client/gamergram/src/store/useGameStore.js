import { create } from "zustand";
import { Bell, Gamepad2, Target, PlayCircle } from "lucide-react";

const useGameStore = create((set, get) => ({
  allNews: [],
  news: [],
  loading: false,
  error: null,
  currentNewsIndex: 4,
  psNews: [],
  xboxNews: [],
  filters: [
    { id: "all", label: "All News", icon: Gamepad2 },
    { id: "trailers", label: "Trailers & Videos", icon: Target },
    { id: "gameplay", label: "Gameplays", icon: PlayCircle },
    { id: "announcements", label: "Official Announcements", icon: Bell },
  ],
  selectedFilter: "all",
  videoData: [],

  fetchNews: async () => {
    set({ loading: true, error: null });
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        set({ error: "No token found" });
      }
      const response = await fetch("http://localhost:3000/getnews/getallnews", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok)
        throw new Error("Failed to fetch news, please try again.");

      const data = await response.json();
      set({
        allNews: data,
        news: data.filter(
          (news) =>
            news.sourceName !== "Xbox" && news.sourceName !== "Playstation"
        ),
        loading: false,
      });

      get().getPsNews();
      get().getXboxNews();
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  loadMoreNews: () => {
    try {
      const { currentNewsIndex, allNews } = get();
      const newsIndex = currentNewsIndex + 4;

      if (newsIndex > allNews.length) return;

      set({ currentNewsIndex: newsIndex, news: allNews.slice(0, newsIndex) });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getPsNews: () => {
    try {
      const { allNews } = get();
      const filteredpsNews = allNews.filter(
        (news) => news.sourceName === "Playstation"
      );
      set({ psNews: filteredpsNews });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  getXboxNews: () => {
    try {
      const { allNews } = get();
      const filteredxboxNews = allNews.filter(
        (news) => news.sourceName === "Xbox"
      );
      set({ xboxNews: filteredxboxNews });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  setSelectedFilter: (filterID) => {
    set({ selectedFilter: filterID });
  },

  getYTVideos: async () => {
    try {
      const response = await fetch("http://localhost:3000/ytvideos/videos");
      if (!response.ok)
        throw new Error("Failed to fetch videos, please try again.");

      const data = await response.json();
      console.log(data);
      set({ videoData: data });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useGameStore;
