import React, { useState } from 'react';
import { Gamepad2, User, Lock, Eye, EyeOff, Zap, Shield, Trophy } from 'lucide-react';

export default function GamerGramLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-4">
      {/* Main Login Container */}
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mb-4">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">
            GAMER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GRAM</span>
          </h1>
          <p className="text-gray-400 text-sm">Connect. Play. Dominate.</p>
        </div>

        {/* Login Form */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 shadow-lg">
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 bg-neutral-700 border border-neutral-600 rounded-md text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-300 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-cyan-500 bg-neutral-700 border-neutral-600 rounded mr-2" />
                Remember me
              </label>
              <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleSubmit}
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

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-neutral-600" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-1 border-t border-neutral-600" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
              <Shield className="w-4 h-4 mr-2" />
              Steam
            </button>
            <button className="flex items-center justify-center px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-gray-300 hover:bg-neutral-600 transition-colors">
              <Trophy className="w-4 h-4 mr-2" />
              Discord
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="text-center text-gray-400 text-sm mt-6">
            New to GamerGram?{' '}
            <button className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">
              Create account
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <div className="flex justify-center space-x-6 text-xs text-gray-500">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Help</span>
          </div>
        </div>
      </div>
    </div>
  );
}





























































































