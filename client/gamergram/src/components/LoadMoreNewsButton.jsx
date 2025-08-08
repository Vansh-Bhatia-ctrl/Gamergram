import useGameStore from "../store/useGameStore";

const LoadMoreNewsButton = () => {
  const { loadMoreNews } = useGameStore();

  return (
    <div className="text-center mb-4 mt-8">
      <button
        onClick={loadMoreNews}
        className="bg-gradient-to-r from-neutral-800 to-neutral-700 text-white px-2 py-4 md:px-4 md:py-6 border-1 border-cyan-500/80 rounded-2xl font-bold cursor-pointer hover:scale-105 transition-all duration-600 ease-in-out shadow-lg hover:shadow-cyan-600/70"
      >
        🎮 LOAD MORE EPICNESS
      </button>
    </div>
  );
};

export default LoadMoreNewsButton;
