import { useState } from "react";
import { Eye, EyeOff, Gamepad2, Lock, Mail, User, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    bio: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/login");
      } else {
        setError(data.message || "Sign-up failed. Try again!");
        setTimeout(() => setError(""), 3000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again!");
      setTimeout(() => setError(""), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center px-4 flex-col gap-4">
      <div className="w-full max-w-sm mx-auto md:max-w-lg bg-neutral-800 border border-neutral-700 p-6 rounded-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Gamepad2 className="w-10 h-10 text-white" />
          <h1 className="text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-widest font-extrabold orbitron cursor-pointer">
            GAMERGRAM
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Enter Username"
                required
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <div className="relative">
              <UserCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full pl-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Enter your Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bio (Optional) */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Bio <span className="text-gray-400">(optional)</span></label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="Tell us something about you..."
            />
          </div>

          {/* Sign Up Button */}
          <div className="mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-medium rounded-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </div>

          {/* Navigate to Login */}
          <div className="mt-3 text-center">
            <p className="text-white">
              Already have an account?
              <span
                onClick={handleNavigateToLogin}
                className="ml-2 text-cyan-500 cursor-pointer hover:text-cyan-300"
              >
                Log in
              </span>
            </p>
          </div>
        </form>
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-red-600 text-white p-3 font-bold rounded-xl"
        >
          <span>{error}</span>
        </motion.div>
      )}
    </div>
  );
}
