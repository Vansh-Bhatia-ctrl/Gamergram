import { motion } from "framer-motion";

const HighLights_2 = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10 flex flex-col items-start w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-6"
      >
        <div className="ml-2 sm:ml-4 md:ml-8 mb-2">
          <h1 className="text-[#F9B233] audiowide font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_4px_#F9B233]">
            Forge your legacy with the community
          </h1>
        </div>

        <div className="p-2 sm:p-3 bg-[#1A1A1A] rounded-3xl shadow-lg shadow-[#F9B233]/30 transition-transform duration-500 hover:scale-[1.015]">
          <video
            src="/fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] h-[30vh] sm:h-[450px] rounded-2xl object-cover border-2 border-[#F9B233]/20"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HighLights_2;
