import useUIStore from "../store/useUIStore";

const AiFilters = () => {
  const { filters, selectedFilter, setSelectedFilter } = useUIStore();
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-4 px-2 xl:max-w-7xl xl:mx-auto lg:justify-start">
        {filters.map((filter) => (
          <button
            onClick={() => setSelectedFilter(filter.id)}
            className={`text-sm font-bold px-4 py-2 p-2 rounded-4xl border border-purple-500/30 cursor-pointer ${
              selectedFilter === filter.id
                ? "bg-gradient-to-r from-blue-400 to-blue-800 text-white shadow-2xl"
                : "bg-neutral-800/60 text-blue-300 border border-blue-500/30 hover:scale-107 transition-all duration-600 ease-in-out hover:bg-gradient-to-r from-blue-400 to-blue-800 hover:text-white"
            } outline-none focus:ring-0`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </>
  );
};

export default AiFilters;
