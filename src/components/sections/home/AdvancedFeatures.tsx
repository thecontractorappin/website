import { Brain, Bell, Zap, BarChart4, Shield, Puzzle, Smartphone, TrendingUp } from "lucide-react";

const items = [
  { icon: Brain, title: "AI Job Estimator", desc: "Auto-generate accurate quotes based on job type, materials, and historical data.", color: "#00C9D4" },
  { icon: Bell, title: "Smart Notifications", desc: "Automated alerts for job updates, payment due, licence expiry, and crew delays.", color: "#FF6B2B" },
  { icon: Zap, title: "Workflow Automations", desc: "Trigger actions automatically — send invoices, assign jobs, notify clients — without lifting a finger.", color: "#00C9D4" },
  { icon: BarChart4, title: "Profit Analytics", desc: "Job-by-job profitability breakdown so you always know which work makes money.", color: "#FF6B2B" },
  { icon: Shield, title: "Document Vault", desc: "Securely store and auto-share contracts, safety docs, and certificates with clients.", color: "#00C9D4" },
  { icon: Puzzle, title: "App Integrations", desc: "Native connectors for Xero, MYOB, Stripe, Google Calendar, Zapier, and more.", color: "#FF6B2B" },
  { icon: Smartphone, title: "Offline Mobile App", desc: "Full field functionality even without internet — syncs automatically when back online.", color: "#00C9D4" },
  { icon: TrendingUp, title: "Client Portal", desc: "Give clients a branded portal to approve quotes, track jobs, and pay invoices online.", color: "#FF6B2B" },
];

export function AdvancedFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#00C9D4] uppercase tracking-wider">Advanced</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Power Features for Serious Contractors</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Go beyond the basics with tools that set your business apart.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}18` }}>
                <Icon style={{ color }} size={22} />
              </div>
              <h3 className="font-semibold text-[#0A1628] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
