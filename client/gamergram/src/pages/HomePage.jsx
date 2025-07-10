import TrendingGames from "../components/TrendingGames";

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#0f0f1a] relative">
        <img
          src="/homepage_bg.png"
          alt="Homepage background"
          className="w-full h-[50vh] object-cover blur-[2px] sm:h-[80vh] md:h-[100vh] md:object-fill"
        />

        <div className="absolute top-0 left-0 w-full h-[50%] sm:h-[80%] md:h-[100%] bg-gradient-to-b from-transparent to-[#0f0f1a]">
          <div>
            <h1 className="text-white">GAMERGRAM</h1>
          </div>
          {/*Trending games section*/}
          <TrendingGames /> 
        </div>
      </div>
    </>
  );
};

export default HomePage;
