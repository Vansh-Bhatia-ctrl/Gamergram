import { motion } from "motion/react";

const CommentsSection = () => {
  return (
    <>
      <motion.div>
        <div className="bg-gradient-to-b from-customblue-200 to-custompurple-100 h-[500px] w-screen rounded-t-2xl">
          <div className="flex items-center justify-center">
            <h3 className="text-white orbitron font-semibold mt-2 border-b-2 border-gray-600">
              Comments
            </h3>
          </div>

          <div className="flex items-start gap-2 mt-3 px-2">
            <div className="w-[35px] h-[35px] flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-600">
              <img src="/kratos.png" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1 mt-1">
                <p className="text-white text-[13px] orbitron">Vansh</p>
                <p className="text-gray-500 text-[11px] orbitron">2h ago</p>
              </div>
              <div className="mt-1 max-w-[90vw]">
                <p className="text-white text-[13px] orbitron break-words overflow-ellipsis line-clamp-2">
                  This is a good post! I really like it. This is a good post! I
                  really like it.This is a good post! I really like it.This is a
                  good post! I really like it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-3">
            <p className="text-gray-500 text-[12px]">Reply</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default CommentsSection;
