import LiveStreamSection from "../components/LiveStreamSection";
import TrendingGames from "../components/TrendingGames";
import GamergramLogo from "./GamergramLogo";

const HomePage = () => {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#0f0f1a] relative overflow-x-hidden">
        <img
          src="/homepage_bg.png"
          alt="Homepage background"
          className="w-full h-full object-cover blur-[2px] md:object-fill"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0f0f1a]">
          <GamergramLogo />
          {/*Trending games section*/}
          <TrendingGames />

          {/*Live stream image*/}
          <LiveStreamSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
