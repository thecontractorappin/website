import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] via-[#0D1F38] to-[#0A1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C9D4]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-3 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 px-5 py-2 rounded-full mb-8 shadow-sm">
          <div className="w-2.5 h-2.5 bg-[#FF6B2B] rounded-full animate-pulse" />
          <span className="text-sm font-bold text-[#FF6B2B] tracking-wide uppercase">28-Day Enterprise Trial — No Credit Card Needed</span>
        </div>

        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
          Ready to Take Absolute Control of Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00E5F0]">
            Heavy Operations?
          </span>
        </h2>
        <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-medium">
          Join India's top developers and civil contractors who have eliminated pilferage, secured their margins, and scaled their businesses with our platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">
          <a
            href="https://app.thecontractorapp.in/company-registration.html"
            className="px-10 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(255,107,43,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Start 28-Day Free Trial</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white/5 text-white rounded-xl font-bold text-lg hover:bg-white/10 border border-white/20 hover:scale-105 transition-all duration-300"
          >
            Book a Strategy Call
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400 font-medium">
          {["No credit card required", "Instant Enterprise Setup", "Bank-Grade Security"].map((t) => (
            <div key={t} className="flex items-center space-x-2">
              <CheckCircle2 size={18} className="text-[#00C9D4]" strokeWidth={2.5} />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}