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
import ProtectedRoute from "./components/ProtectedRoute ";
import ProfilePage from "./pages/ProfilePage";

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
    element: (
      <ProtectedRoute>
        <GameBuletien />
      </ProtectedRoute>
    ),
  },
  {
    path: "gamebuletien/:gameID",
    element: <GameDetails />,
  },
  {
    path: "aiChatBox",
    element: (
      <ProtectedRoute>
        <AiChatBox />
      </ProtectedRoute>
    ),
  },
  {
    path: "news",
    element: (
      <ProtectedRoute>
        <News />
      </ProtectedRoute>
    ),
  },
  {
    path: "news/:newsID",
    element: <NewsDetails />,
  },
  {
    path: "kratos",
    element: <KratosSaga />,
  },
  {
    path: "profile",
    element: <ProfilePage />,
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
