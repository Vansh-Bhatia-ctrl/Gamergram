import { create } from "zustand";

const useLogoutStore = create((set, get) => ({
  logOutUser: async () => {
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        console.log("No token found.");
      }
      await fetch(`${import.meta.env.VITE_API_URL}/logout/log-out`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location.href = "login";
    } catch (error) {
      console.log("Error loggin-out: ", error.message);
    }
  },
}));

export default useLogoutStore;
