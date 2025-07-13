import { motion } from "framer-motion";

const GamergramLogo = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-5 flex-col">
        <motion.h1
          className="text-5xl font-extrabold orbitron"
          initial={{ textShadow: "0 0 0px #00FFFF, 0 0 0px #00FFFF" }}
          animate={{ textShadow: "0 0 10px #00FFFF, 0 0 15px #BF00FF" }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          GAMERGRAM
        </motion.h1>
        <div>
          <div className="mt-4">
            <h1 className="audiowide text-white md:text-2xl">
              Where Legends Play, Stories Begin.
            </h1>
          </div>
          <div className="flex justify-center mt-13">
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 15px #0ff, 0 0 25px #bf00ff, 0 0 35px #ff00c8",
              }}
              transition={{ duration: 0.3 }}
              className="text-white text-center cursor-pointer audiowide bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-xl px-8 py-3 font-bold shadow-xl hover:brightness-110 transition duration-300"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamergramLogo;
