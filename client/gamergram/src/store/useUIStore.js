import { create } from "zustand";
import {
  House,
  ClipboardX,
  Radio,
  BotMessageSquare,
  Newspaper,
  LibraryBig,
  User,
  Bookmark,
  Play,
  CheckCircle,
  Heart,
} from "lucide-react";

const useUIStore = create((set, get) => ({
  readingProgress: 0,
  pages: [
    { id: "home", label: "Home", icon: House, link: "/gamebuletien" },
    { id: "events", label: "Events", icon: ClipboardX, link: "/events" },
    { id: "broadcast", label: "Broadcast", icon: Radio, link: "/broadcast" },
    {
      id: "ai Chat",
      label: "AI Chat",
      icon: BotMessageSquare,
      link: "/aiChatBox",
    },
    { id: "News", label: "News", icon: Newspaper, link: "/news" },
    { id: "saga", label: "Saga", icon: LibraryBig, link: "/kratos" },
    { id: "profile", label: "Profile", icon: User, link: "/profile" },
  ],
  tabs: [
    {
      id: "bookmarked",
      label: "Bookmarked",
      icon: Bookmark,
      count: 24,
    },
    { id: "playing", label: "Playing", icon: Play, count: 8 },
    {
      id: "completed",
      label: "Completed",
      icon: CheckCircle,
      count: 156,
    },
    {
      id: "wishlist",
      label: "Wishlist",
      icon: Heart,
      count: 42,
    },
  ],
  selectedPage: "home",
  selectedCharacter: null,
  isSelected: "bookmarked",

  setReadingProgress: () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    set({ readingProgress: scrollPercent });
  },

  setSelectedPage: (pageID) => {
    set({ selectedPage: pageID });
  },

  setSelectedCharacter: (character) => {
    set({ selectedCharacter: character });
  },
  setSelected: (id) => {
    set({ isSelected: id });
  },
}));

export default useUIStore;
