import { ArrowRight, CheckCircle2, TrendingUp, Users, Clock } from "lucide-react";
import { AppDownloadPopup } from "./AppDownloadPopup"; 

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-50">
      
      {/* Modern Wavy SVG Background */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-full">
        {/* PASTE YOUR EXISTING <svg> CODE HERE */}
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00C9D4]/20 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B2B]/15 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* Left copy */}
          <div className="text-slate-900 space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-sm">
              <div className="w-2 h-2 bg-[#00C9D4] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Trusted by India's Top Developers</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Manage all <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008B94] to-[#00C9D4]">PROJECTS</span> from One Place
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              Project Management, Human Resource Management, Machinery Management, Sub-Contractor Management, Management of Personal Finance — all in one powerful platform built for modern Construction Companies and solo contractors.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <a href="https://app.thecontractorapp.in/company-registration.html" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl hover:shadow-[0_0_20px_rgba(255,107,43,0.3)] hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2 group font-semibold">
                <span>Start 28-Day Free Trial</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all border border-slate-200 text-center shadow-sm font-semibold">
                See Features
              </a>
              
              {/* Official Google Play Badge */}
              <a href="https://play.google.com/store/apps/details?id=com.astute.contractor" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex justify-center mt-2 sm:mt-0 transition-transform hover:scale-105">
                <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-14 w-auto object-contain" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-6">
              {[
                { icon: TrendingUp, color: "#00A8B5", value: "85%", label: "Less Admin Time" },
                { icon: CheckCircle2, color: "#FF6B2B", value: "3×", label: "Faster Invoicing" },
                { icon: Users, color: "#00A8B5", value: "Unlimited", label: "Team Members" },
                { icon: Clock, color: "#FF6B2B", value: "Real-Time", label: "Job Tracking" },
              ].map(({ icon: Icon, color, value, label }) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <Icon style={{ color }} size={18} strokeWidth={2.5} />
                    <span className="text-2xl font-extrabold text-slate-900">{value}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right actual app previews */}
          <div className="relative mt-12 lg:mt-0 pl-4 sm:pl-10">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group bg-white">
              <img src="/Desktop-view.png" alt="Astute Dashboard Desktop View" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            <div className="absolute -bottom-12 -left-4 sm:-left-6 w-[40%] min-w-[150px] z-20 rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl group transition-transform duration-500 hover:-translate-y-2 bg-white">
              <img src="/Mobile-view.png" alt="Astute Dashboard Mobile View" className="w-full h-auto object-cover" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#00C9D4]/10 to-[#FF6B2B]/10 rounded-full blur-3xl pointer-events-none -z-10" />
          </div>

        </div>
      </div>
      
      {/* Renders the slide-in popup component */}
      <AppDownloadPopup />
    </section>
  );
}
