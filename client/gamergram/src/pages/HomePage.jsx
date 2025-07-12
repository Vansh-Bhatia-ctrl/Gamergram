import AiChatHomePage from "../components/AiChatHomePage";
import Highlights from "../components/Highlights";
import HighLights_2 from "../components/HighLights_2";
import LiveStreamSection from "../components/LiveStreamSection";
import TrendingGames from "../components/TrendingGames";
import GamergramLogo from "./GamergramLogo";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0f0f1a] relative overflow-x-hidden">
        <video
          src="/bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="min-h-screen w-full h-full object-cover backdrop-blur-2xl"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0f0f1a]">
          {/*GamerGram Logo Section*/}
          <GamergramLogo />

          {/*Trending games section*/}
          <TrendingGames />

          {/*Live stream image*/}
          <LiveStreamSection />

          {/*Captured moments section*/}
          <Highlights />

          {/*Highlights Image Section*/}
          <HighLights_2 />

          {/*AI chat  Section*/}
          <AiChatHomePage />
        </div>
      </div>
    </>
  );
};

export default HomePage;
