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

































import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    username: "GamerX01",
    rating: 4.9,
    review:
      "Absolutely loved Elden Ring! The world is stunning and the combat feels amazing.",
  },
  {
    id: 2,
    username: "KratosFan",
    rating: 4.8,
    review:
      "God of War: Ragnarok delivers an emotional story with epic gameplay. Highly recommended!",
  },
  {
    id: 3,
    username: "WitcherMaster",
    rating: 4.7,
    review:
      "The Witcher 3 has the most immersive quests I've ever experienced. A must-play!",
  },
];

export default function ReviewsPage() {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ username: "", rating: "", review: "" });

  const filteredReviews = reviews.filter((review) =>
    review.username.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddReview = () => {
    if (newReview.username && newReview.rating && newReview.review) {
      reviews.push({
        id: reviews.length + 1,
        ...newReview,
      });
      setNewReview({ username: "", rating: "", review: "" });
      setIsModalOpen(false);
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen px-6 md:px-12 py-10">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8 tracking-wide"
      >
        Game Reviews
      </motion.h1>

      {/* Search & Add Review Button */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <input
          type="text"
          placeholder="Search usernames..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-neutral-800 text-white px-4 py-3 rounded-xl w-full max-w-md focus:outline-none border border-neutral-700 focus:border-purple-500 transition"
        />

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-3 rounded-xl transition shadow-lg shadow-purple-700/30"
        >
          + Add Review
        </motion.button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredReviews.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-800/70 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-purple-500/30 transition cursor-pointer border border-neutral-700 hover:border-purple-500/40"
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {game.username}
            </h2>
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={
                    i < Math.round(game.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-600"
                  }
                />
              ))}
              <span className="ml-2 text-sm text-gray-400">
                {game.rating.toFixed(1)}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {game.review}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-500 text-center mt-10"
        >
          No reviews found.
        </motion.p>
      )}

      {/* Add Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-800/80 backdrop-blur-xl p-6 rounded-2xl shadow-xl w-full max-w-md border border-purple-500/30"
            >
              <h2 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Add Review
              </h2>

              <input
                type="text"
                placeholder="Your Username"
                value={newReview.username}
                onChange={(e) => setNewReview({ ...newReview, username: e.target.value })}
                className="bg-neutral-700/50 text-white w-full px-4 py-3 rounded-lg mb-3 focus:outline-none border border-neutral-600 focus:border-purple-500"
              />

              <input
                type="number"
                placeholder="Rating (1-5)"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: parseFloat(e.target.value) })}
                className="bg-neutral-700/50 text-white w-full px-4 py-3 rounded-lg mb-3 focus:outline-none border border-neutral-600 focus:border-purple-500"
              />

              <textarea
                placeholder="Write your review..."
                value={newReview.review}
                onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                className="bg-neutral-700/50 text-white w-full px-4 py-3 rounded-lg mb-4 focus:outline-none border border-neutral-600 focus:border-purple-500"
                rows="4"
              ></textarea>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="bg-neutral-700/50 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddReview}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-5 py-2 rounded-lg transition shadow-lg"
                >
                  Add
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


























































































