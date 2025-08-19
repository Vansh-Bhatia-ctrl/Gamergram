import React from "react";

const SagaSubHeader = () => {
  return (
    <>
      <div>
        <div className="text-center flex flex-col gap-3 mt-3">
          <h1 className="bg-gradient-to-r from-orange-900 to-orange-300 bg-clip-text text-transparent font-extrabold text-5xl ">
            LEGENDARY SAGAS
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
            Explore the epic stories of gaming's most iconic characters
          </p>
        </div>
        <div className="p-4 mt-7 max-w-2xl mx-auto">
          <input
            className="bg-neutral-800/50 w-full px-6 py-4 rounded-4xl border border-neutral-700/50 text-white focus:outline-none focus:border-neutral-500 transition-colors duration-300 placeholder:text-neutral-500 placeholder:text-md"
            placeholder="Search character's name..."
          />
        </div>
      </div>
    </>
  );
};

export default SagaSubHeader;
