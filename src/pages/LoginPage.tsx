import { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Zap, ArrowRight } from "lucide-react";

export function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(isSignup ? "Account created! (demo)" : "Logged in! (demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1628] via-[#0D1F38] to-[#0A1628] flex items-center justify-center px-4 pt-16">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#00C9D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-xl flex items-center justify-center shadow-lg">
              <Zap size={20} className="text-white" fill="white" />
            </div>
            <span className="text-white font-bold text-xl">
              the<span className="text-[#00C9D4]">contractor</span><span className="text-[#FF6B2B]">app</span>
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white">{isSignup ? "Create your account" : "Welcome back"}</h1>
          <p className="text-gray-400 mt-1 text-sm">
            {isSignup ? "Start your 14-day free trial — no credit card needed" : "Log in to manage your jobs"}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <div>
                <label className="block text-sm text-gray-300 mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="John Smith"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9D4]/60 focus:bg-white/10 transition-all text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9D4]/60 focus:bg-white/10 transition-all text-sm"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm text-gray-300">Password</label>
                {!isSignup && (
                  <a href="#" className="text-xs text-[#00C9D4] hover:text-[#00E5F0]">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00C9D4]/60 focus:bg-white/10 transition-all text-sm pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(255,107,43,0.4)] transition-all flex items-center justify-center space-x-2 group"
            >
              <span>{isSignup ? "Create Account" : "Log In"}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-5 text-center">
            <p className="text-sm text-gray-400">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => setIsSignup(!isSignup)}
                className="text-[#00C9D4] hover:text-[#00E5F0] font-medium"
              >
                {isSignup ? "Log in" : "Sign up free"}
              </button>
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing you agree to our{" "}
          <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
