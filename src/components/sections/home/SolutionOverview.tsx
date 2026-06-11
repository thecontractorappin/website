import { CheckSquare, BarChart3, Users, Calendar, Briefcase, DollarSign, Shield, Zap, FileText, MapPin } from "lucide-react";

const modules = [
  { icon: CheckSquare, label: "Job Management", color: "#00C9D4" },
  { icon: Calendar, label: "Scheduling", color: "#FF6B2B" },
  { icon: FileText, label: "Invoicing", color: "#00C9D4" },
  { icon: Users, label: "Team & Crew", color: "#FF6B2B" },
  { icon: MapPin, label: "Field Tracking", color: "#00C9D4" },
  { icon: DollarSign, label: "Payroll", color: "#FF6B2B" },
  { icon: Shield, label: "Compliance", color: "#00C9D4" },
  { icon: BarChart3, label: "Analytics", color: "#FF6B2B" },
  { icon: Briefcase, label: "CRM & Clients", color: "#00C9D4" },
  { icon: Zap, label: "Automations", color: "#FF6B2B" },
];

export function SolutionOverview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-[#00C9D4] uppercase tracking-wider">The Solution</span>
            <h2 className="mt-2 text-4xl font-bold text-[#0A1628] leading-tight">
              One Platform Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#FF6B2B]">
                Contractors
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              thecontractorapp replaces a dozen disconnected tools with a single, intuitive platform — so you can focus on the work, not the admin.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "From quote to invoice in one workflow",
                "Real-time job and crew visibility",
                "Automated compliance reminders",
                "Mobile-first for field workers",
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {modules.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center space-x-3 p-4 rounded-xl border border-gray-100 bg-[#F7F9FC] hover:border-[#00C9D4]/30 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                  <Icon style={{ color }} size={20} />
                </div>
                <span className="text-sm font-medium text-[#0A1628]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
