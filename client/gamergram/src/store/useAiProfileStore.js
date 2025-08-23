import { create } from "zustand";

const useAiProfileStore = create((set, get) => ({
  aiProfiles: [],
  isLoading: false,
  error: null,

  getAiProfiles: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/aiprofiles/ai-profiles`
      );

      if (!response.ok) {
        throw new Error("Error fetching ai profiles.");
      }
      const data = await response.json();
      console.log(data);
      set({ aiProfiles: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useAiProfileStore;
