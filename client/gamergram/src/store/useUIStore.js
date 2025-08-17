import { create } from "zustand";
import {
  House,
  ClipboardX,
  Radio,
  BotMessageSquare,
  Newspaper,
  LibraryBig,
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
  ],
  selectedPage: "home",

  selectedCharacter: null,

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
}));

export default useUIStore;
