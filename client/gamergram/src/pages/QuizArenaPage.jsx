import { useEffect, useState } from "react";
import he from "he";
import useQuizStore from "../store/useQuizStore";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

const QuizArenaPage = () => {
  const [isSelected, setIsSelected] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const {
    fetchQuizData,
    quizData,
    error,
    loading,
    token,
    userData,
    fetchUserData,
  } = useQuizStore();
  useEffect(() => {
    fetchQuizData();
    fetchUserData();
  }, []);

  console.log("User data for the quiz: ", userData);
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-screen bg-neutral-900">
        <DotLottieReact
          src="https://lottie.host/7803dbda-7802-4570-b64c-6adb3d9cce04/3173B4Qe5z.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center mt-20 text-xl">
        Error: {error}
      </div>
    );
  }

  const quiz = quizData?.results?.[currentQuestionIndex];
  if (!quiz) {
    return (
      <div className="text-white text-center mt-20 text-xl">
        No quiz data found.
      </div>
    );
  }

  console.log(quiz);
  const options = [...quiz.incorrect_answers, quiz.correct_answer].sort();

  const handleNextQuestion = () => {
    if (isSelected === quiz.correct_answer) {
      setCorrectAnswer((prev) => prev + 1);
    }

    if (currentQuestionIndex < quizData.results.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsSelected(null);
    } else {
      alert("Quiz completed. Kindly check the dashboard for updated scores.");
      setIsSelected(null);
      setQuizCompleted(true);
      saveDataToDb();
    }
  };

  const saveDataToDb = async () => {
    const previousWins = userData[0]?.quizesWon || 0;
    const previousLost = userData[0]?.quizesLost || 0;
    const previousPlayed = userData[0]?.quizesPlayed || 0;
    const isWon = correctAnswer >= 6;

    const quizResults = {
      quizesWon: isWon ? previousWins + 1 : previousWins,
      quizesPlayed: previousPlayed + 1,
      quizesLost: !isWon ? previousLost + 1 : previousLost,
      score: correctAnswer,
      isWon: isWon,
    };
    try {
      const response = await fetch(
        "http://localhost:3000/saveusertodb/saveuserdata",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(quizResults),
        }
      );

      if (!response.ok) {
        console.log("Error saving data.");
        return;
      }

      console.log("Quiz result saved successfully");
      fetchUserData();
    } catch (error) {
      console.log("Error saving quiz result:", error.message);
    }
  };

  if (quizCompleted) {
    navigate("/quiz");
  }

  return (
    <>
      <div className="min-h-screen w-screen overflow-x-hidden bg-neutral-900">
        <div className="mt-5">
          <div className="text-center">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent font-extrabold text-4xl tracking-wide md:text-5xl">
              Quiz Arena
            </span>
          </div>

          <div className="md:max-w-4xl md:mx-auto p-3 mt-8">
            <div className="bg-neutral-800 p-2 border border-neutral-700 rounded-xl text-center">
              <div className="md:p-4">
                <span className="text-white font-bold text-2xl tracking-wide md:text-4xl">
                  {he.decode(quiz.question)}
                </span>
              </div>
              <div className="">
                <div className=" flex flex-col gap-5 md:p-8 mt-3">
                  {options.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => setIsSelected(option)}
                      className={`p-4 border border-neutral-600 rounded-xl   hover:bg-neutral-600 transition-all duration-300 ease-in-out cursor-pointer ${
                        isSelected === option
                          ? "bg-neutral-500"
                          : "bg-neutral-700"
                      }`}
                    >
                      <p className="text-white font-semibold text-lg md:text-xl">
                        {he.decode(option)}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    onClick={handleNextQuestion}
                    disabled={!isSelected}
                    className={`text-black p-4   rounded-xl cursor-pointer font-bold text-lg   mt-3 md:mt-0 ${
                      !isSelected
                        ? "bg-gray-500 cursor-"
                        : "bg-green-400 hover:bg-green-300 hover:scale-101 transition-all duration-300 ease-in-out"
                    } disabled:cursor-not-allowed`}
                  >
                    {currentQuestionIndex === quizData.results.length - 1
                      ? "Finish Now"
                      : "Next Question"}
                  </button>
                </div>
              </div>
            </div>
            )
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizArenaPage;
