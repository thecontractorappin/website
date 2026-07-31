import { useState } from "react";
import { LayoutDashboard, UserCheck, Tractor, Users, MapPin, ShoppingCart, Coins, BarChart3 } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    label: "Project Command Center",
    color: "#00C9D4",
    desc: "Command every site from your screen. Prevent budget overruns and eliminate delays with real-time BOQ and progress tracking.",
    bullets: ["Live Budget vs. Actuals", "One-Click BOQ Syncing", "Visual Progress Timelines", "Automated Client Reports"],
    proof: "Contractors catch 94% of budget overruns before they happen using our live BOQ tracking."
  },
  {
    icon: UserCheck,
    label: "Geofenced Attendance",
    color: "#FF6B2B",
    desc: "Stop paying for ghost workers. GPS-locked and selfie-verified clock-ins guarantee you only pay for actual time on site.",
    bullets: ["GPS Boundary Enforcement", "Live Selfie Verification", "Auto-Muster Roll Sync", "Late & Absent Alerts"],
    proof: "Recapture up to 15% of your labor costs in the first month by eliminating time-theft."
  },
  {
    icon: Tractor,
    label: "Machinery & Fleet Control",
    color: "#00C9D4",
    desc: "Plug fuel leaks and maximize asset ROI. Track every hour, meter reading, and drop of diesel across your entire fleet.",
    bullets: ["Live Fuel Consumption Logs", "Meter-Based Billing", "Preventative Maintenance", "Idle Time Alerts"],
    proof: "Reduce unaccounted fuel loss to absolute zero with mandatory start/stop photo logging."
  },
  {
    icon: Users,
    label: "Complete Workforce HR",
    color: "#FF6B2B",
    desc: "End labor disputes instantly. Centralize your entire workforce database, tracking everything from daily advances to long-term loans.",
    bullets: ["Digital Labor Database", "Advance & Loan Tracking", "Trade-Specific Wages", "Worker Performance History"],
    proof: "Never overpay a contractor again. Advance payments are auto-deducted from final settlements."
  },
  {
    icon: MapPin,
    label: "Live Site Tracking",
    color: "#00C9D4",
    desc: "See your entire operation on a live map. Monitor crew movements, material drops, and site conditions without leaving the office.",
    bullets: ["Real-Time GPS Mapping", "Geo-Tagged Site Photos", "Daily Activity Logs", "100% Offline Capability"],
    proof: "Field teams using our offline-first architecture report 3x faster daily logging."
  },
  {
    icon: ShoppingCart,
    label: "B2B Procurement Hub",
    color: "#FF6B2B",
    desc: "Take total control of your supply chain. Instantly raise requisitions, manage vendor payouts, and track material transit.",
    bullets: ["One-Tap Requisitions", "Vendor Payment Tracking", "In-Transit Inventory", "Automated Purchase Orders"],
    proof: "Streamline material drops and prevent site stoppages by tracking inventory in real-time."
  },
  {
    icon: Coins,
    label: "Automated Payroll",
    color: "#00C9D4",
    desc: "Turn days of wage calculations into seconds. Auto-generate flawless payslips reflecting exact attendance, advances, and overtime.",
    bullets: ["One-Click Wage Calculation", "Auto-Deduction Engine", "Overtime & EPF Handling", "Digital Payslip Distribution"],
    proof: "Save an average of 12 hours per week on manual payroll entry and compliance math."
  },
  {
    icon: BarChart3,
    label: "Master Financial Ledgers",
    color: "#FF6B2B",
    desc: "Know your exact bottom line down to the rupee. Dynamic T-Ledgers automatically reconcile expenses against capital in real-time.",
    bullets: ["Dynamic T-Ledger Tracking", "Live Net Balance", "Subcontractor Billing (SC Bills)", "Capital Injection Logs"],
    proof: "Gain absolute financial clarity. 100% of our enterprise clients report improved cash flow visibility."
  },
];

export function CoreFeatures() {
  const [active, setActive] = useState(0);
  const current = features[active];
  const Icon = current.icon;

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-bold text-[#00C9D4] uppercase tracking-wider bg-[#00C9D4]/10 px-4 py-1.5 rounded-full">
            Your Digital Headquarters
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] tracking-tight">
            Everything Your Business Needs to Scale
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Eight interconnected modules designed to eliminate paperwork, stop financial leaks, and put you in total control.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Tab list */}
          <div className="space-y-2">
            {features.map(({ icon: Icon, label, color }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 ${
                  i === active
                    ? "bg-white shadow-lg border-l-4 border-[#00C9D4] scale-[1.02]"
                    : "hover:bg-white/60 border-l-4 border-transparent hover:scale-[1.01]"
                }`}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                  <Icon style={{ color }} size={20} strokeWidth={2.5} />
                </div>
                <span className={`text-sm font-bold ${i === active ? "text-[#0A1628]" : "text-gray-500"}`}>{label}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transform transition-all duration-500">
            <div className="flex items-center space-x-5 mb-8 border-b border-gray-50 pb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-inner" style={{ backgroundColor: `${current.color}15` }}>
                <Icon style={{ color: current.color }} size={32} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-2xl font-extrabold text-[#0A1628] tracking-tight">{current.label}</h3>
                <p className="text-gray-500 text-sm mt-1.5 leading-relaxed max-w-lg">{current.desc}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm" style={{ backgroundColor: `${current.color}20` }}>
                    <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke={current.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-[#0A1628]">{b}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-5 rounded-xl flex items-start space-x-3" style={{ backgroundColor: `${current.color}08`, border: `1px solid ${current.color}25` }}>
              <div className="mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={current.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: current.color }}>
                {current.proof}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}