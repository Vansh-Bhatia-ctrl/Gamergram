import { Gamepad2, Eye, EyeOff, Zap, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);
    try {
      const req = await fetch(`${import.meta.env.VITE_API_URL}/users/signup`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          Name: name,
          email: email,
          userName: username,
          password: password,
          bio: bio,
        }),
      });

      const resp = await req.json();
      setError(false);
      console.log("User signed-up successfully", resp);
      if (req.ok) {
        navigate("/login");
      } else {
        setError(true);
        console.log("Sign-up failed.");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error logging-in, please try again.", error.message);
      setError(true);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 flex-col gap-4 py-17">
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
            <form onSubmit={handleSignUp} className="">
              <div className="space-y-5">
                <div className="max-w-lg mx-auto flex flex-col gap-2">
                  <label className="text-white">Name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-neutral-700 border border-neutral-600 p-2 placeholder:text-neutral-400 rounded-md focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Enter Name..."
                    required
                  />
                </div>

                <div className="max-w-lg mx-auto flex flex-col gap-2">
                  <label className="text-white">Username</label>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-neutral-700 border border-neutral-600 p-2 placeholder:text-neutral-400 rounded-md focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Enter Username..."
                    required
                  />
                </div>

                <div className="max-w-lg mx-auto flex flex-col gap-2">
                  <label className="text-white">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-neutral-700 border border-neutral-600 p-2 placeholder:text-neutral-400 rounded-md focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Enter Email..."
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

                <div className="max-w-lg mx-auto flex flex-col gap-2">
                  <label className="text-white">Bio</label>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="bg-neutral-700 border border-neutral-600 p-2 placeholder:text-neutral-400 rounded-md focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Enter Username..."
                  />
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
                      Signing up...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Sign up
                    </div>
                  )}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-white">
                  Already have an account?
                  <span
                    onClick={navigateToLogin}
                    className="ml-2 text-cyan-500 cursor-pointer hover:text-cyan-300"
                  >
                    Sign-in
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
            <span>Something went wrong please try again later!</span>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default SignUp;
