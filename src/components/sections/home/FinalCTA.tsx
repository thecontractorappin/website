import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

export function FinalCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0A1628] via-[#0D1F38] to-[#0A1628] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00C9D4]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-[#FF6B2B] rounded-full animate-pulse" />
          <span className="text-sm text-[#FF6B2B]">14-Day Free Trial — No Credit Card Needed</span>
        </div>

        <h2 className="text-5xl font-bold text-white leading-tight">
          Ready to Run a Smarter{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#FF6B2B]">
            Contracting Business?
          </span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
          Join 1,200+ contractors who've cut admin time, accelerated invoicing, and grown their business with thecontractorapp.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            to="/login"
            className="px-10 py-4 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl font-semibold hover:shadow-[0_0_30px_rgba(255,107,43,0.5)] transition-all flex items-center justify-center space-x-2 group"
          >
            <span>Start Free Trial</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/contact"
            className="px-10 py-4 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/15 border border-white/20 transition-all"
          >
            Book a Demo
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-gray-400">
          {["No credit card required", "Setup in under 10 mins", "Cancel anytime"].map((t) => (
            <div key={t} className="flex items-center space-x-2">
              <CheckCircle2 size={16} className="text-[#00C9D4]" />
              <span>{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
