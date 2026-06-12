import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
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
          <div className="text-white space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-[#00C9D4]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00C9D4]/30">
              <div className="w-2 h-2 bg-[#00C9D4] rounded-full animate-pulse" />
              <span className="text-sm text-[#00C9D4]">Trusted by 200+ Contractors</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Manage Every{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00E5F0]">
                Tender
              </span>{" "}
              from One Place
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

          {/* Right actual app previews */}
          <div className="relative mt-12 lg:mt-0 pl-4 sm:pl-10">
            {/* Desktop View */}
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#00C9D4]/30 shadow-[0_0_50px_rgba(0,201,212,0.15)] group">
              <img 
                src="/Desktop-view.jpg" 
                alt="Astute Dashboard Desktop View" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Mobile View - Floating over the bottom left */}
            <div className="absolute -bottom-12 -left-4 sm:-left-6 w-[40%] min-w-[150px] z-20 rounded-3xl overflow-hidden border-4 border-[#0A1628] shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
              <img 
                src="/Mobile-view.jpg" 
                alt="Astute Dashboard Mobile View" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Backdrop glow specific to the images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#00C9D4]/10 to-[#FF6B2B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}