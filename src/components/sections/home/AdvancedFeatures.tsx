import { Globe, MapPin, Wallet, ShoppingCart, Activity, Receipt, Cloud, Lock } from "lucide-react";

const items = [
  { 
    icon: Globe, 
    title: "Global Tender Marketplace", 
    desc: "Access live eNITs and instantly bid on lucrative government and private contracts directly from your dashboard.", 
    color: "#00C9D4" 
  },
  { 
    icon: MapPin, 
    title: "Geofenced Attendance", 
    desc: "Eliminate time-theft with GPS-locked, photo-verified labor attendance and instant muster roll generation.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Wallet, 
    title: "Automated T-Ledgers", 
    desc: "Ditch the messy spreadsheets. Auto-reconciling ledgers track every rupee across projects and personal parties.", 
    color: "#00C9D4" 
  },
  { 
    icon: ShoppingCart, 
    title: "Integrated Supply Hub", 
    desc: "Procure materials and machinery directly from our built-in vendor network, complete with instant digital payments.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Activity, 
    title: "Fleet & Fuel Tracking", 
    desc: "Stop fuel leakage and maximize ROI with real-time machinery utilization logs and precise meter tracking.", 
    color: "#00C9D4" 
  },
  { 
    icon: Receipt, 
    title: "One-Click Payroll", 
    desc: "Process complex labor wages and staff salaries instantly with automated deductions, EPF, and allowance calculations.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Cloud, 
    title: "Cloud Document Vault", 
    desc: "Military-grade cloud storage secures your blueprints, SC bills, and invoices so you are always audit-ready.", 
    color: "#00C9D4" 
  },
  { 
    icon: Lock, 
    title: "Role-Based Security", 
    desc: "Maintain absolute control with granular permissions—ensure your site engineers only see exactly what they need to.", 
    color: "#FF6B2B" 
  },
];

export function AdvancedFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            The Enterprise Advantage
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] tracking-tight">
            Built for India's Top Developers
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Stop managing chaos and start scaling your business. Discover the proprietary tools that give our contractors an unfair advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div 
              key={title} 
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300" 
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon style={{ color }} size={24} strokeWidth={2.5} />
              </div>
              <h3 className="font-bold text-[#0A1628] mb-2 text-lg tracking-tight">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}