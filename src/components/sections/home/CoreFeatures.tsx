import { useState } from "react";
import { CheckSquare, Calendar, FileText, Users, BarChart3, Shield, MapPin, DollarSign } from "lucide-react";

const features = [
  {
    icon: CheckSquare,
    label: "Job Management",
    color: "#00C9D4",
    desc: "Create, assign, and track every job from start to finish with full status visibility.",
    bullets: ["Customisable job stages", "Attach files & photos", "Client sign-off portal", "Job cost tracking"],
  },
  {
    icon: Calendar,
    label: "Smart Scheduling",
    color: "#FF6B2B",
    desc: "Drag-and-drop scheduler that accounts for crew availability, skills, and location.",
    bullets: ["Visual Gantt timeline", "Conflict detection", "Recurring job templates", "Client booking portal"],
  },
  {
    icon: FileText,
    label: "Invoicing & Quotes",
    color: "#00C9D4",
    desc: "Generate professional quotes and invoices in seconds — straight from a completed job.",
    bullets: ["Auto-populate from job data", "Stripe & bank payments", "Overdue reminders", "Tax & GST handling"],
  },
  {
    icon: Users,
    label: "Crew & Team",
    color: "#FF6B2B",
    desc: "Manage your whole workforce — employees, subcontractors, and freelancers — in one place.",
    bullets: ["Timesheet approval", "Skills & cert tracking", "Role-based access", "Performance metrics"],
  },
  {
    icon: MapPin,
    label: "Field Tracking",
    color: "#00C9D4",
    desc: "Know exactly where your crews are and what they're working on in real time.",
    bullets: ["GPS check-in/out", "Live job site map", "Photo & note logging", "Offline mobile support"],
  },
  {
    icon: Shield,
    label: "Compliance",
    color: "#FF6B2B",
    desc: "Stay audit-ready with automated licence tracking, SWMS, and incident reporting.",
    bullets: ["Licence renewal alerts", "SWMS builder", "Incident reports", "Insurance tracking"],
  },
  {
    icon: DollarSign,
    label: "Payroll",
    color: "#00C9D4",
    desc: "Process accurate payroll based on actual timesheets with award interpretation.",
    bullets: ["Award rate engine", "Xero/MYOB integration", "Contractor payments", "Leave management"],
  },
  {
    icon: BarChart3,
    label: "Analytics",
    color: "#FF6B2B",
    desc: "Understand your business performance with live dashboards and custom reports.",
    bullets: ["Revenue vs. forecast", "Job profitability", "Crew utilisation", "Client retention"],
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
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Core Features</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Everything Your Business Needs</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Eight powerful modules, one seamless platform.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Tab list */}
          <div className="space-y-2">
            {features.map(({ icon: Icon, label, color }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all ${
                  i === active
                    ? "bg-white shadow-md border-l-4 border-[#00C9D4]"
                    : "hover:bg-white/60 border-l-4 border-transparent"
                }`}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}18` }}>
                  <Icon style={{ color }} size={18} />
                </div>
                <span className={`text-sm font-medium ${i === active ? "text-[#0A1628]" : "text-gray-500"}`}>{label}</span>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${current.color}18` }}>
                <Icon style={{ color: current.color }} size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A1628]">{current.label}</h3>
                <p className="text-gray-500 text-sm mt-1">{current.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-center space-x-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${current.color}20` }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke={current.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: `${current.color}08`, border: `1px solid ${current.color}25` }}>
              <p className="text-sm font-medium" style={{ color: current.color }}>
                Used by 1,200+ contractors to save an average of 6 hours per week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
