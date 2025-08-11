import { create } from "zustand";

const useUIStore = create((set, get) => ({
  readingProgress: 0,

  setReadingProgress: () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    set({ readingProgress: scrollPercent });
  },
}));

export default useUIStore;
