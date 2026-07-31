import { Building2, HardHat, Wrench, Tractor, Ruler, Map } from "lucide-react";
import { Link } from "react-router";

const segments = [
  { 
    icon: Building2, 
    label: "Real Estate Developers", 
    desc: "Maintain absolute financial control across multiple high-rises. Auto-reconcile SC bills and monitor live BOQ burnout.", 
    color: "#00C9D4" 
  },
  { 
    icon: HardHat, 
    label: "Civil Contractors", 
    desc: "Stop material leakage and labor theft. Enforce GPS-locked muster rolls and track cement/steel transit in real-time.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Wrench, 
    label: "MEP Contractors", 
    desc: "Coordinate complex electrical and plumbing deployments. Manage massive inventory hubs and daily material requisitions.", 
    color: "#00C9D4" 
  },
  { 
    icon: Map, 
    label: "Infrastructure Builders", 
    desc: "Command highway and bridge projects. Monitor fleet fuel consumption and manage hundreds of field workers offline.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Tractor, 
    label: "Earthmoving & Fleet Operators", 
    desc: "Maximize heavy asset ROI. Bill precisely with start/stop meter photos and prevent unauthorized diesel drain.", 
    color: "#00C9D4" 
  },
  { 
    icon: Ruler, 
    label: "Turnkey Fit-Out Firms", 
    desc: "Streamline vendor payouts and daily site expenses. Generate one-click client progress reports with geo-tagged photos.", 
    color: "#FF6B2B" 
  },
];

export function TargetCustomers() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            Tailored For Scale
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] tracking-tight">
            Engineered for India's Heavyweights
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            From multi-tower residential projects to massive infrastructure developments, the platform scales to meet the exact demands of serious enterprise operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map(({ icon: Icon, label, desc, color }) => (
            <div 
              key={label} 
              className="bg-[#F7F9FC] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner" 
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon style={{ color }} size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3 tracking-tight">{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-[#0A1628] to-[#0D1F38] rounded-3xl p-10 border border-[#00C9D4]/20 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-r from-[#00C9D4]/10 to-[#FF6B2B]/10 blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2">Run a Specialized Operation?</h3>
            <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium mb-8">
              Our modular architecture adapts to highly specific workflows. If you manage labor, machinery, and materials, we have you covered.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white rounded-xl font-bold text-sm hover:shadow-[0_0_25px_rgba(0,201,212,0.4)] hover:scale-105 transition-all duration-300"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}