import { 
  LayoutDashboard, 
  UserCheck, 
  Globe, 
  Wallet, 
  Tractor, 
  ShoppingCart, 
  Coins, 
  Receipt, 
  MapPin, 
  Cloud 
} from "lucide-react";

const modules = [
  { icon: LayoutDashboard, label: "Project Management", color: "#00C9D4" },
  { icon: UserCheck, label: "Geofenced Attendance", color: "#FF6B2B" },
  { icon: Globe, label: "Global Tenders", color: "#00C9D4" },
  { icon: Wallet, label: "T-Ledger Financials", color: "#FF6B2B" },
  { icon: Tractor, label: "Machinery & Fleet", color: "#00C9D4" },
  { icon: ShoppingCart, label: "B2B Supply Hub", color: "#FF6B2B" },
  { icon: Coins, label: "Automated Payroll", color: "#00C9D4" },
  { icon: Receipt, label: "SC Bills & Payouts", color: "#FF6B2B" },
  { icon: MapPin, label: "Live Field Tracking", color: "#00C9D4" },
  { icon: Cloud, label: "Cloud Document Vault", color: "#FF6B2B" },
];

const features = [
  "End-to-end BOQ and project budget tracking",
  "GPS-locked attendance & automated muster rolls",
  "Live machinery meter and fuel consumption logs",
  "Centralized T-Ledgers for real-time financial clarity",
];

export function SolutionOverview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Features */}
          <div>
            <span className="text-sm font-bold text-[#00C9D4] uppercase tracking-wider bg-[#00C9D4]/10 px-4 py-1.5 rounded-full">
              The Ecosystem
            </span>
            <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] leading-tight tracking-tight">
              One Unified Command Center for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00A8B5]">
                Heavy Operations
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed font-medium">
              The Contractor App replaces scattered spreadsheets, messy WhatsApp groups, and disconnected accounting software with a single, military-grade platform. Scale your operations without scaling your admin.
            </p>
            
            <ul className="mt-8 space-y-4">
              {features.map((item) => (
                <li key={item} className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full bg-[#0A1628] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg width="12" height="10" viewBox="0 0 10 8" fill="none">
                      <path 
                        d="M1 4L3.5 6.5L9 1" 
                        stroke="#00C9D4" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Modules Grid */}
          <div className="grid grid-cols-2 gap-4">
            {modules.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 bg-[#F7F9FC] hover:bg-white hover:border-[#00C9D4]/30 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div 
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" 
                  style={{ backgroundColor: `${color}15` }}
                >
                  <Icon style={{ color }} size={22} strokeWidth={2} />
                </div>
                <span className="text-sm font-bold text-[#0A1628]">{label}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}