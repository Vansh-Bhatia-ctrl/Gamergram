import { create } from "zustand";

const useGameStore = create((set, get) => ({
  allNews: [],
  news: [],
  loading: false,
  error: null,
  currentNewsIndex: 4,
  psNews: [],
  xboxNews: [],

  fetchNews: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("http://localhost:3000/getnews/getallnews");

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
      const { currentNewsIndex, allNews } = get();
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
}));

export default useGameStore;
