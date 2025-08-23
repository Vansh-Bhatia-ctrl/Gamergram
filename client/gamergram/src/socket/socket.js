import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");

export const socket = io(`${import.meta.env.VITE_API_URL}`, {
  auth: { userId },
});
