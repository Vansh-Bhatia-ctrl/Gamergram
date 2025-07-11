import { motion } from "framer-motion";

const LiveStreamSection = () => {
  return (
    <div>
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
  );
};

export default LiveStreamSection;
