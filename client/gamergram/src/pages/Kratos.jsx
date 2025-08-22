// import React, { useState } from 'react';
// import { Gamepad2, User, Lock, Eye, EyeOff, Zap, Shield, Trophy } from 'lucide-react';

// export default function GamerGramLogin() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate login process
//     await new Promise(resolve => setTimeout(resolve, 1500));
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
//       {/* Main Login Container */}
//       <div className="w-full max-w-md">
//         {/* Logo Section */}
//         <div className="text-center mb-8">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
//             <Gamepad2 className="w-8 h-8 text-white" />
//           </div>
//           <h1 className="text-3xl font-bold text-white mb-2">
//             GAMER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GRAM</span>
//           </h1>
//           <p className="text-gray-400 text-sm">Connect. Play. Dominate.</p>
//         </div>

//         {/* Login Form */}
//         <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-lg">
//           <div className="space-y-5">
//             {/* Email Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Email
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
//                   placeholder="Enter your email"
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type={showPassword ? 'text' : 'password'}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
//                   placeholder="Enter your password"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
//                 >
//                   {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex items-center justify-between text-sm">
//               <label className="flex items-center text-gray-300 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-neutral-700 border-neutral-600 rounded mr-2" />
//                 Remember me
//               </label>
//               <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
//                 Forgot password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
//                   Signing in...
//                 </div>
//               ) : (
//                 <div className="flex items-center justify-center">
//                   <Zap className="w-4 h-4 mr-2" />
//                   Sign In
//                 </div>
//               )}
//             </button>
//           </div>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 border-t border-neutral-600" />
//             <span className="px-3 text-gray-500 text-sm">or</span>
//             <div className="flex-1 border-t border-neutral-600" />
//           </div>

//           {/* Social Login */}
//           <div className="grid grid-cols-2 gap-3">
//             <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
//               <Shield className="w-4 h-4 mr-2" />
//               Steam
//             </button>
//             <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
//               <Trophy className="w-4 h-4 mr-2" />
//               Discord
//             </button>
//           </div>

//           {/* Sign Up Link */}
//           <div className="text-center text-gray-400 text-sm mt-6">
//             New to GamerGram?{' '}
//             <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
//               Create account
//             </button>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6">
//           <div className="flex justify-center space-x-6 text-xs text-gray-500">
//             <span>Privacy</span>
//             <span>Terms</span>
//             <span>Help</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }











































import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Gamepad2, Trophy, XCircle, ArrowRight, RotateCcw, Home } from 'lucide-react';

const GamergramQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Sample gaming questions - you can expand this array
  const questions = [
    {
      question: "Which company developed The Witcher 3?",
      options: ["CD Projekt Red", "Ubisoft", "Rockstar Games", "Bethesda"],
      correctAnswer: 0
    },
    {
      question: "In which year was Minecraft first released?",
      options: ["2009", "2011", "2010", "2012"],
      correctAnswer: 0
    },
    {
      question: "What is the maximum level in most Call of Duty games?",
      options: ["50", "100", "55", "60"],
      correctAnswer: 2
    },
    {
      question: "Which gaming console was released first?",
      options: ["PlayStation", "Nintendo 64", "Sega Saturn", "Atari 2600"],
      correctAnswer: 3
    },
    {
      question: "What is the main character's name in The Legend of Zelda series?",
      options: ["Zelda", "Link", "Ganondorf", "Epona"],
      correctAnswer: 1
    }
  ];

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isAnswered && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      handleTimeUp();
    }
  }, [timeLeft, isAnswered, quizCompleted]);

  const handleTimeUp = () => {
    setIsAnswered(true);
    setShowResult(true);
    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    setShowResult(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      nextQuestion();
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setShowResult(false);
      setTimeLeft(30);
    } else {
      setQuizCompleted(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setTimeLeft(30);
    setIsAnswered(false);
    setQuizCompleted(false);
    setShowResult(false);
  };

  const getAnswerColor = (index) => {
    if (!showResult) return "bg-gray-700 hover:bg-gray-600 border-gray-600";
    
    if (index === questions[currentQuestion].correctAnswer) {
      return "bg-green-600 border-green-500";
    } else if (index === selectedAnswer && index !== questions[currentQuestion].correctAnswer) {
      return "bg-red-600 border-red-500";
    } else {
      return "bg-gray-700 border-gray-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const isWin = percentage >= 60;

    return (
      <div className="min-h-screen bg-neutral-900 p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="mb-6"
            >
              {isWin ? (
                <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4" />
              ) : (
                <XCircle className="w-24 h-24 text-red-400 mx-auto mb-4" />
              )}
            </motion.div>

            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {isWin ? "Victory!" : "Game Over"}
            </h2>
            
            <div className="mb-6">
              <div className="text-6xl font-bold text-white mb-2">{score}/{questions.length}</div>
              <div className="text-xl text-gray-300">Correct Answers</div>
              <div className={`text-2xl font-bold mt-2 ${isWin ? 'text-green-400' : 'text-red-400'}`}>
                {percentage}% Accuracy
              </div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="w-full bg-gray-700 rounded-full h-4 mb-8 overflow-hidden"
            >
              <div className={`h-full ${isWin ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-pink-500'} rounded-full`} />
            </motion.div>

            <div className="flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={restartQuiz}
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <RotateCcw className="w-5 h-5" />
                Play Again
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Dashboard
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 p-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-purple-400" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Gamergram Quiz Arena
            </h1>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="bg-gray-800/50 rounded-2xl p-4 border border-gray-700">
            <div className="flex justify-between items-center mb-3">
              <span className="text-white font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-purple-400 font-bold">
                Score: {score}/{currentQuestion + (isAnswered ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Timer */}
        <motion.div variants={itemVariants} className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700">
            <Clock className={`w-6 h-6 ${timeLeft <= 10 ? 'text-red-400' : 'text-purple-400'}`} />
            <span className={`text-2xl font-bold font-mono ${timeLeft <= 10 ? 'text-red-400' : 'text-white'}`}>
              {timeLeft}s
            </span>
          </div>
          {timeLeft <= 10 && (
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-red-400 text-sm mt-2 font-medium"
            >
              Time running out!
            </motion.div>
          )}
        </motion.div>

        {/* Question */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="mb-8"
        >
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-relaxed">
              {questions[currentQuestion].question}
            </h2>

            {/* Answer Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence>
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: isAnswered ? 1 : 1.02 }}
                    whileTap={{ scale: isAnswered ? 1 : 0.98 }}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={isAnswered}
                    className={`${getAnswerColor(index)} text-white font-semibold py-4 px-6 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden group disabled:cursor-default`}
                  >
                    <div className="absolute inset-0 bg-white/5 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && index === questions[currentQuestion].correctAnswer && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-green-300"
                        >
                          ✓
                        </motion.div>
                      )}
                      {showResult && index === selectedAnswer && index !== questions[currentQuestion].correctAnswer && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-red-300"
                        >
                          ✗
                        </motion.div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>

            {/* Result Message */}
            <AnimatePresence>
              {showResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6"
                >
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                    <div className="text-green-400 font-bold text-xl">
                      🎉 Correct! Great job!
                    </div>
                  ) : timeLeft === 0 ? (
                    <div className="text-orange-400 font-bold text-xl">
                      ⏰ Time's up!
                    </div>
                  ) : (
                    <div className="text-red-400 font-bold text-xl">
                      ❌ Incorrect. Better luck next time!
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Next Button (when answered) */}
        <AnimatePresence>
          {isAnswered && currentQuestion < questions.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextQuestion}
                className="flex items-center gap-2 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Next Question
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default GamergramQuiz;

























// import { useState } from "react";
// import { motion } from "framer-motion";

// const QuizPage = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);

//   // Dummy data for now
//   const questions = [
//     {
//       question: "Which company developed The Witcher 3?",
//       options: ["CD Projekt Red", "Ubisoft", "Rockstar Games", "Bethesda"],
//       answer: "CD Projekt Red",
//     },
//     {
//       question: "Who is the main protagonist in Ghost of Tsushima?",
//       options: ["Jin Sakai", "Hayato", "Kazuma Kiryu", "Takeda Shingen"],
//       answer: "Jin Sakai",
//     },
//   ];

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//       setSelectedOption(null);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-neutral-900 text-white flex flex-col items-center p-6">
//       {/* Header */}
//       <motion.h1
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-extrabold tracking-wider text-purple-400 drop-shadow-lg mb-6"
//       >
//         🎮 Gamergram Quiz Arena
//       </motion.h1>

//       {/* Progress Bar */}
//       <div className="w-full max-w-xl bg-gray-700 rounded-full h-3 mb-6">
//         <motion.div
//           initial={{ width: 0 }}
//           animate={{
//             width: `${((currentQuestion + 1) / questions.length) * 100}%`,
//           }}
//           transition={{ duration: 0.5 }}
//           className="h-3 bg-purple-500 rounded-full shadow-[0_0_15px_#a855f7]"
//         />
//       </div>

//       {/* Quiz Card */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         className="bg-neutral-800 p-6 rounded-2xl shadow-2xl w-full max-w-xl border border-purple-500/20 hover:border-purple-400/50 transition"
//       >
//         <h2 className="text-xl font-bold mb-4 text-purple-300">
//           {questions[currentQuestion].question}
//         </h2>

//         <div className="grid gap-3">
//           {questions[currentQuestion].options.map((option, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => setSelectedOption(option)}
//               className={`px-4 py-3 rounded-xl border transition duration-200 text-left 
//                 ${
//                   selectedOption === option
//                     ? "bg-purple-600 border-purple-400 shadow-[0_0_15px_#a855f7]"
//                     : "bg-neutral-700 border-gray-600 hover:border-purple-400"
//                 }`}
//             >
//               {option}
//             </motion.button>
//           ))}
//         </div>

//         {/* Next Button */}
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={handleNext}
//           disabled={!selectedOption}
//           className={`mt-6 w-full px-4 py-3 rounded-xl font-bold text-lg tracking-wide 
//             ${
//               selectedOption
//                 ? "bg-purple-500 hover:bg-purple-600 shadow-[0_0_20px_#a855f7]"
//                 : "bg-gray-600 cursor-not-allowed"
//             }`}
//         >
//           {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default QuizPage;
















































































