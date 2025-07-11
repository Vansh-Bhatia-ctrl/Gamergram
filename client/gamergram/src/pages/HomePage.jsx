import { motion } from "framer-motion";

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
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.4 }}
            className="mb-4 relative p-3 rounded-xl"
          >
            <img
              src="/liveSteam2.png"
              className=" w-full h-full object-cover sm:h-[450px] md:w-[100vh] rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
