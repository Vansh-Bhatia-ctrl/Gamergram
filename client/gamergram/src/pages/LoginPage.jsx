import { Eye, EyeOff, Gamepad2, Lock, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const naviagte = useNavigate();

  const handleNavigateToSignUp = () => {
    naviagte("/signup");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    try {
      const req = await fetch(`${process.env.REACT_APP_API_URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const resp = await req.json();
      setIsLoading(false);

      if (resp.token) {
        localStorage.setItem("token", resp.token);
        localStorage.setItem("userId", resp.user.id);
        naviagte("/gamebuletien");
      } else {
        setError(true);
        console.log("Log-in failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error logging-in, please try again.", error.message);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 flex-col gap-4">
      <div className="w-full max-w-sm mx-auto md:max-w-lg md:mx-auto bg-neutral-800 border border-neutral-700 p-4 rounded-lg">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div>
            <Gamepad2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold orbitron cursor-pointer">
            GAMERGRAM
          </h1>
        </div>

        <div>
          <form onSubmit={handleLogin} className="">
            <div className="space-y-5">
              <div className="max-w-lg mx-auto flex flex-col gap-2">
                <label className="text-white">Username</label>
                <input
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="bg-neutral-700 border border-neutral-600 p-2 placeholder:text-neutral-400 rounded-md focus:border-cyan-500 focus:outline-none transition-colors text-white"
                  placeholder="Enter Username..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-7">
              <button
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Signing in...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Sign In
                  </div>
                )}
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="text-white">
                New to GamerGram?
                <span
                  onClick={handleNavigateToSignUp}
                  className="ml-2 text-cyan-500 cursor-pointer hover:text-cyan-300"
                >
                  Create account
                </span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>

      {/*Error state*/}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -1 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-red-600 text-white p-3 font-bold rounded-xl"
        >
          <span>Username or password is not correct!</span>
        </motion.div>
      )}
    </div>
  );
}
