import { Wrench, Zap, Thermometer, HardHat, Paintbrush, Scissors } from "lucide-react";

const segments = [
  { icon: Wrench, label: "Real-Estate Repair Management", desc: "All Construction related services managed inside one app", color: "#00C9D4" },
  { icon: Zap, label: "Powerful Tools", desc: "HRMS, CRM, ERP, Personal Finance. All in one app", color: "#FF6B2B" },
  { icon: Thermometer, label: "Saving Environment with less paper", desc: "Paper less company management on your finger-tips", color: "#00C9D4" },
  { icon: HardHat, label: "Build for Real Estate Moguls to Freelance Contractors", desc: "Build for all", color: "#FF6B2B" },
  { icon: Paintbrush, label: "Dedicated Company Logos and Company Code", desc: "Same Company Code for all your employees, Your Logo and Company name on all documentation.", color: "#00C9D4" },
  { icon: Scissors, label: "Cutting Costs", desc: "Cutting Unnecessary Costs and Monitoring Expenses", color: "#FF6B2B" },
];

export function TargetCustomers() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Who It's For</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Built for All</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Whether you're a Freelance/solo Contractor or running a 50-person crew, thecontractorapp scales with you.
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
          <p className="text-lg font-semibold text-[#0A1628]">Don't see What you anticipated?</p>
          <p className="text-gray-500 mt-1">At RHMR ASTUTE Solutions, We believe in building after listening to suggestions. If you work in the field, we work for you.</p>
          <a href="/contact" className="mt-4 inline-block px-6 py-3 bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  );
}
