import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AiChatBox from "./pages/AiChatBox";
import AiCharecterChat from "./pages/AiCharecterChat";
import GameBuletien from "./pages/GameBuletien";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "gamebuletien",
    element: <GameBuletien />,
  },
  {
    path: "aiChatBox",
    element: <AiChatBox />,
  },
  {
    path: "charecterchatbox/:userName",
    element: <AiCharecterChat />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
