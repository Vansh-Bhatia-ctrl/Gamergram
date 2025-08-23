import { create } from "zustand";

const useGameCharactersStore = create((set, get) => ({
  token: null,
  gameCharacters: [],
  error: null,
  loading: false,
  userInput: "",
  searchedCharacter: [],
  notFound: false,

  fetchGameCharacters: async () => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/get-characters/get-characters`,
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
      set({ gameCharacters: data, searchedCharacter: data, loading: false });
    } catch (error) {
      set({ loading: false, error: error.message });
      console.log("Something went wrong.", error.message);
    }
  },

  setSearchedCharacter: (value) => {
    const { gameCharacters } = get();
    set({ userInput: value });
    const query = value.toLowerCase();

    if (!query) {
      set({ notFound: false, searchedCharacter: gameCharacters });
      return;
    }

    const filteredStories = gameCharacters.filter(
      (story) =>
        story.description?.toLowerCase().includes(query) ||
        story.game?.toLowerCase().includes(query) ||
        story.name?.toLowerCase().includes(query) ||
        story.title?.toLowerCase().includes(query)
    );

    set({ notFound: false, searchedCharacter: filteredStories });
  },
}));

export default useGameCharactersStore;
