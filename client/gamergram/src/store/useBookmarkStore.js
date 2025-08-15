import { create } from "zustand";

const useBookmarkStore = create((set, get) => ({
  bookmarks: [],
  isBookmark: false,

  saveBookmarks: async (newsID) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:3000/save/bookmarks/${newsID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newsID: newsID,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      set({ bookmarks: data.bookmarks, isBookmark: true });
    } catch (error) {
      console.log("Error adding to bookmarks", error.message);
    }
  },

  removeBookmark: async (newsID) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/remove/remove-bookmark/${newsID}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      set({ bookmarks: data.bookmarks, isBookmark: false });
      console.log(data);
    } catch (error) {
      console.log("Error removing from bookmarks", error.message);
    }
  },
}));

export default useBookmarkStore;
