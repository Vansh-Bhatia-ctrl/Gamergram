import { create } from "zustand";

const useQuizStore = create((set, get) => ({
  quizData: [],
  userData: [],
  error: null,
  loading: false,
  token: null,

  fetchQuizData: async () => {
    const token = localStorage.getItem("token");
    set({ loading: true });
    try {
      if (!token) {
        set({ error: "User must be authenticated." });
        return;
      }

      set({ token: token });
      const response = await fetch("http://localhost:3000/getquiz/quizes", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.log("Error fetching quiz.");
        return;
      }

      const data = await response.json();
      console.log(data);
      set({ loading: false, error: null, quizData: data });
    } catch (error) {
      set({ loading: false, error: error.message });
      console.log("Error fetching quiz", error.message);
    }
  },

  fetchUserData: async () => {
    const token = localStorage.getItem("token");
    set({ loading: true });
    try {
      if (!token) {
        set({ error: "User must be authenticated." });
        return;
      }

      set({ token: token });
      const response = await fetch(
        "http://localhost:3000/getuserdata/userdata",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.log("Error fetching data.");
        return;
      }

      const data = await response.json();
      console.log(data);
      set({ userData: data, loading: false });
    } catch (error) {
      console.log("Error fetching data", error.message);
      set({ error: error.message, loading: false });
    }
  },
}));

export default useQuizStore;
