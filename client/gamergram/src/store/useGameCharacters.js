import { create } from "zustand";

const useGameCharactersStore = create((set, get) => ({
  token: null,
  gameCharacters: [],
  error: null,
  loading: false,
  fetchGameCharacters: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/get-characters/get-characters",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.log("Error fetching data");
      }

      const data = await response.json();
      console.log(data);
      set({ gameCharacters: data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
      console.log("Something went wrong.", error.message);
    }
  },
}));

export default useGameCharactersStore;
