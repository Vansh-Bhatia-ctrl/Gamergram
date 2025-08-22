import Header from "../components/Header";
import { Trophy, Target, XCircle, Play, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import useQuizStore from "../store/useQuizStore";
import { useEffect } from "react";

const quizData = [
  {
    id: "won",
    icon: Trophy,
    label: "Quizes Won",
    number: "43",
    color: "#eab308",
    class: "text-[#eab308]",
  },
  {
    id: "lost",
    icon: XCircle,
    label: "Quizes Lost",
    number: "18",
    color: "#EF4444",
    class: "text-[#EF4444]",
  },
  {
    id: "attempted",
    icon: Target,
    label: "Quizes Attempted",
    number: "60",
    color: "#3B82F6",
    class: "text-[#3B82F6]",
  },
  {
    id: "winRate",
    icon: TrendingUp,
    label: "Win Rate",
    number: "70 %",
    color: "#10B981",
    class: "text-[#10B981]",
  },
];
const QuizPage = () => {
  const { userData, fetchUserData } = useQuizStore();
  useEffect(() => {
    fetchUserData();
  }, []);

  const data = userData && userData.length > 0 ? userData[0] : null;

  const winRate =
    data && data.quizesPlayed > 0
      ? Math.round((data.quizesWon / data.quizesPlayed) * 100)
      : 0;

  const quizStats = [
    {
      id: "won",
      icon: Trophy,
      label: "Quizes Won",
      number: data ? data.quizesWon : 0,
      color: "#eab308",
      class: "text-[#eab308]",
    },
    {
      id: "lost",
      icon: XCircle,
      label: "Quizes Lost",
      number: data ? data.quizesLost : 0,
      color: "#EF4444",
      class: "text-[#EF4444]",
    },
    {
      id: "attempted",
      icon: Target,
      label: "Quizes Attempted",
      number: data ? data.quizesPlayed : 0,
      color: "#3B82F6",
      class: "text-[#3B82F6]",
    },
    {
      id: "winRate",
      icon: TrendingUp,
      label: "Win Rate",
      number: `${winRate} %`,
      color: "#10B981",
      class: "text-[#10B981]",
    },
  ];

  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden bg-neutral-900">
        <div>
          <Header />
        </div>

        <div className="p-3">
          <div>
            <div className="text-center space-y-2">
              <h1 className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl tracking-wide md:text-5xl">
                Quiz Dashboard
              </h1>
              <span className="text-gray-400 text-sm font-semibold md:text-lg">
                Track your quiz mastery and level up your gaming knowledge!
              </span>
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-4 md:grid md:grid-cols-2 md:max-w-5xl md:mx-auto">
            {quizStats.map((data) => {
              const Icon = data.icon;
              return (
                <div className="bg-neutral-800 p-8 rounded-xl border border-neutral-700">
                  <div className="flex items-center justify-between">
                    <Icon
                      color={data.color}
                      className="w-8 h-8 md:w-11 md:h-11"
                    />
                    <p
                      className={`${data.class} font-bold text-2xl md:text-3xl`}
                    >
                      {data.number}
                    </p>
                  </div>
                  <div className="mt-4">
                    <span className="text-gray-300 font-bold text-xl md:text-2xl">
                      {data.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          <Link
            to="/quizarena"
            className="flex items-center justify-center mt-8"
          >
            <button className=" flex items-center   gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 hover:scale-105 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group cursor-pointer">
              <Play />
              Start New Quiz
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizPage;
