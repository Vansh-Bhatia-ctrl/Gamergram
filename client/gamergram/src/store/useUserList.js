import { create } from "zustand";

const useUserList = create((set, get) => ({
  userList: {},
  loading: false,
  error: null,

  fetchUserList: async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/getlist/get-userlist`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.log("Error fetching list");
        set({ loading: false });
        return;
      }

      const data = await response.json();
      console.log("Fetched user list:", data);

      const userListMap = {};
      data.forEach((item) => {
        userListMap[item.gameID] = item.status;
      });

      set({
        userList: userListMap,
        loading: false,
      });
    } catch (error) {
      set({ loading: false, error: error.message });
      console.log("Error fetching user list: ", error.message);
    }
  },

  addToUserList: async (gameID, addType) => {
    set({ loading: true });
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/userlist/user-list`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            gameID: gameID,
            addType: addType,
          }),
        }
      );

      if (!response.ok) {
        console.log("Error adding to list");
      }

      const data = await response.json();
      console.log(`Added game to the list ${addType}`, data);

      if (data.removed || data.message === "Game removed from list.") {
        set((state) => {
          const newUserList = { ...state.userList };
          delete newUserList[gameID];
          return {
            userList: newUserList,
            loading: false,
          };
        });
      } else {
        set((state) => ({
          userList: {
            ...state.userList,
            [gameID]: addType,
          },
          loading: false,
        }));
      }
    } catch (error) {
      set({ loading: false, error: error.message });
      console.log("Error adding the game to the list: ", error.message);
    }
  },
}));

export default useUserList;
