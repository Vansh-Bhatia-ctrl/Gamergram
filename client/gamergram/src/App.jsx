import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import AiChatBox from "./pages/AiChatBox";
import GameBuletien from "./pages/GameBuletien";
import GameDetails from "./pages/GameDetails";
import News from "./pages/News";
import KratosSaga from "./pages/Kratos";
import NewsDetails from "./pages/NewsDetails";

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
    path: "gamebuletien/:gameID",
    element: <GameDetails />,
  },
  {
    path: "aiChatBox",
    element: <AiChatBox />,
  },
  {
    path: "news",
    element: <News />,
  },
  {
    path: "news/:newsID",
    element: <NewsDetails />,
  },
  {
    path: "kratos",
    element: <KratosSaga />,
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
