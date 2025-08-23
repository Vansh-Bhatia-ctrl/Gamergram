import { io } from "socket.io-client";

const userId = localStorage.getItem("userId");

export const socket = io(`${process.env.REACT_APP_API_URL}`, {
  auth: { userId },
});
