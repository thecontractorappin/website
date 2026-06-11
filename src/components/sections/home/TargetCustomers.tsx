import { Wrench, Zap, Thermometer, HardHat, Paintbrush, Scissors } from "lucide-react";

const segments = [
  { icon: Wrench, label: "Plumbers", desc: "Job cards, compliance certs, and quoting built for trade workflows.", color: "#00C9D4" },
  { icon: Zap, label: "Electricians", desc: "SWMS, certificate of compliance, and test-and-tag tracking.", color: "#FF6B2B" },
  { icon: Thermometer, label: "HVAC & Refrigeration", desc: "Service run scheduling, preventative maintenance, and parts inventory.", color: "#00C9D4" },
  { icon: HardHat, label: "Builders & Concreters", desc: "Multi-stage project management, subcontractor coordination, and progress billing.", color: "#FF6B2B" },
  { icon: Paintbrush, label: "Painters & Tilers", desc: "Fast quoting, crew scheduling, and before/after photo documentation.", color: "#00C9D4" },
  { icon: Scissors, label: "Landscapers", desc: "Recurring maintenance routes, seasonal scheduling, and client agreements.", color: "#FF6B2B" },
];

export function TargetCustomers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Who It's For</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Built for Every Trade</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Whether you're a solo tradie or running a 50-person crew, thecontractorapp scales with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map(({ icon: Icon, label, desc, color }) => (
            <div key={label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${color}18` }}>
                <Icon style={{ color }} size={22} />
              </div>
              <h3 className="font-semibold text-[#0A1628] mb-2">{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 bg-gradient-to-r from-[#00C9D4]/10 to-[#FF6B2B]/10 rounded-2xl p-8 border border-[#00C9D4]/20 text-center">
          <p className="text-lg font-semibold text-[#0A1628]">Don't see your trade?</p>
          <p className="text-gray-500 mt-1">thecontractorapp is fully customisable. If you work in the field, we work for you.</p>
          <a href="/contact" className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
