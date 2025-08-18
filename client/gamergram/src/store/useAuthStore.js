import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  token: null,

  getToken: () => {
    const localStorageToken = localStorage.getItem("token");

    if (!localStorageToken) {
      console.warn("No token found, please login to use this feature.");
      set({ token: null });
      return null;
    }

    set({ token: localStorageToken });
    return localStorageToken;
  },
}));

export default useAuthStore;
