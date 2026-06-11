import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock, FileText, BarChart3, Calendar, Zap } from "lucide-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0D1F38] to-[#0A1628]" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, #00C9D4 1px, transparent 0)",
        backgroundSize: "48px 48px",
      }} />
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C9D4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B2B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left copy */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center space-x-2 bg-[#00C9D4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00C9D4]/30">
              <div className="w-2 h-2 bg-[#00C9D4] rounded-full animate-pulse" />
              <span className="text-sm text-[#00C9D4]">Trusted by 1,200+ Contractors</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Manage Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00E5F0]">
                Contractor
              </span>{" "}
              Job from One Place
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Scheduling, timesheets, invoicing, compliance, and team management — all in one powerful platform built for modern contractors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/login"
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl hover:shadow-[0_0_30px_rgba(255,107,43,0.5)] transition-all flex items-center justify-center space-x-2 group font-semibold"
              >
                <span>Start Free Trial</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="px-8 py-4 bg-white/10 text-white rounded-xl hover:bg-white/15 transition-all border border-white/20 text-center"
              >
                See Features
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-2">
              {[
                { icon: TrendingUp, color: "#00C9D4", value: "85%", label: "Less Admin Time" },
                { icon: CheckCircle2, color: "#FF6B2B", value: "3×", label: "Faster Invoicing" },
                { icon: Users, color: "#00C9D4", value: "Unlimited", label: "Team Members" },
                { icon: Clock, color: "#FF6B2B", value: "Real-Time", label: "Job Tracking" },
              ].map(({ icon: Icon, color, value, label }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Icon style={{ color }} size={18} />
                    <span className="text-xl font-bold">{value}</span>
                  </div>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right dashboard preview */}
          <div className="relative">
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-[#00C9D4]/20 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-md flex items-center justify-center">
                      <Zap size={12} className="text-white" fill="white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm">Dashboard Overview</h3>
                  </div>
                  <span className="text-xs text-[#00C9D4] bg-[#00C9D4]/10 px-3 py-1 rounded-full border border-[#00C9D4]/30">● Live</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: BarChart3, gradient: "from-[#00C9D4]/20 to-[#00C9D4]/5", border: "border-[#00C9D4]/30", iconColor: "#00C9D4", badge: "+18%", value: "24", label: "Active Jobs" },
                    { icon: TrendingUp, gradient: "from-[#FF6B2B]/20 to-[#FF6B2B]/5", border: "border-[#FF6B2B]/30", iconColor: "#FF6B2B", badge: "+6%", value: "92%", label: "On-Time Rate" },
                    { icon: FileText, gradient: "from-[#00C9D4]/20 to-[#00C9D4]/5", border: "border-[#00C9D4]/30", iconColor: "#00C9D4", badge: "Pending: 4", value: "$48k", label: "Invoiced" },
                    { icon: Users, gradient: "from-[#FF6B2B]/20 to-[#FF6B2B]/5", border: "border-[#FF6B2B]/30", iconColor: "#FF6B2B", badge: "3 New", value: "38", label: "Team Members" },
                  ].map(({ icon: Icon, gradient, border, iconColor, badge, value, label }) => (
                    <div key={label} className={`bg-gradient-to-br ${gradient} backdrop-blur-sm p-4 rounded-xl border ${border}`}>
                      <div className="flex items-center justify-between mb-2">
                        <Icon style={{ color: iconColor }} size={18} />
                        <span className="text-[#00C9D4] text-xs">{badge}</span>
                      </div>
                      <p className="text-2xl font-bold text-white">{value}</p>
                      <p className="text-xs text-gray-400">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 rounded-xl border border-white/10 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm text-white font-medium">Project Pipeline</p>
                    <span className="text-xs text-[#FF6B2B]">8 Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div className="bg-gradient-to-r from-[#00C9D4] to-[#FF6B2B] h-2 rounded-full" style={{ width: "68%" }} />
                      </div>
                      <span className="text-xs text-white">68%</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>$124k in pipeline</span>
                      <span>$84k completed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl border border-white/10 p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar style={{ color: "#00C9D4" }} size={16} />
                    <div>
                      <p className="text-sm text-white font-medium">This Week</p>
                      <p className="text-xs text-gray-400">12 jobs scheduled · 3 pending approval · 2 completed today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-[#00C9D4]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#FF6B2B]/15 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
