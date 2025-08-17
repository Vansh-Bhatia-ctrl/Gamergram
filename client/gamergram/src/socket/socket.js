import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");

export const socket = io("http://localhost:5000", {
  auth: { userId },
});

