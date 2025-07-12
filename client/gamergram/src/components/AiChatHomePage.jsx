import { motion } from "framer-motion";

const AiChatHomePage = () => {
  return (
    <div>
       <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 flex flex-col items-end w-full px-4 sm:px-6 md:px-12 lg:px-20"
          >
            <div className="mr-4 sm:mr-6 md:mr-12 mb-2">
              <h1 className="text-[#A4FF4F] audiowide font-extrabold text-xl sm:text-2xl md:text-3xl tracking-wide drop-shadow-[0_0_4px_#A4FF4F]">
                Chat with Legends. Powered by AI.
              </h1>
            </div>

            <div className="p-2 sm:p-3 bg-[#1A1A1A] rounded-3xl shadow-lg shadow-[#A4FF4F]/30 transition-transform duration-500 hover:scale-[1.015]">
              <video
                src="/kratos.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[60vw] h-[30vh] sm:h-[450px] rounded-2xl object-cover border-2 border-[#A4FF4F]/30"
              />
            </div>
          </motion.div>
    </div>
  )
}

export default AiChatHomePage
