import { motion } from "framer-motion";

const LiveStreamSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="mb-10 flex flex-col items-start w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-6"
    >
      <div className="mb-3 ml-1 sm:ml-2">
        <h1 className="text-[#FF3C3C] audiowide font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_5px_#FF3C3C]">
          Enter the streamverse
        </h1>
      </div>

      <div className="p-2 sm:p-3 bg-[#111111] rounded-3xl shadow-lg shadow-[#FF3C3C]/30 transition-transform duration-500 hover:scale-[1.015]">
        <video
          src="/live_stream.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] h-[30vh] sm:h-[450px] rounded-2xl object-cover border-2 border-[#FF3C3C]/20"
        />
      </div>
    </motion.div>
  );
};

export default LiveStreamSection;
