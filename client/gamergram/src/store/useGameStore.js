import { create } from "zustand";

const useGameStore = create((set, get) => ({
  allNews: [],
  news: [],
  loading: false,
  error: null,
  currentNewsIndex: 9,

  fetchNews: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch("http://localhost:3000/getnews/getallnews");

      if (!response.ok)
        throw new Error("Failed to fetch news, please try again.");

      const data = await response.json();
      set({
        allNews: data,
        news: data.slice(0, get().currentNewsIndex),
        loading: false,
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  loadMoreNews: () => {
    try {
      const { currentNewsIndex, allNews } = get();
      const newsIndex = currentNewsIndex + 9;

      if (newsIndex > allNews.length) return;

      set({ currentNewsIndex: newsIndex, news: allNews.slice(0, newsIndex) });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useGameStore;
