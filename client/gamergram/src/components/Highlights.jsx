import { motion } from "framer-motion";

const Highlights = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="mb-10 flex flex-col items-end w-full px-4 sm:px-6 md:px-12 lg:px-20 mt-6"
      >
        <div className="mr-2 sm:mr-4 md:mr-8 mb-2">
          <h1 className="text-[#00FF00] audiowide font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_4px_#00FF00]">
            Highlights that hit harder
          </h1>
        </div>

        <div className="p-2 sm:p-3 bg-[#111111] rounded-3xl shadow-lg shadow-[#00FF00]/30 transition-transform duration-500 hover:scale-[1.015]">
          <video
            src="/highlights.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] h-[30vh] sm:h-[450px] rounded-2xl object-cover border-2 border-[#00FF00]/20"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Highlights;
