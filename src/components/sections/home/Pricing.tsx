import { Check, Star } from "lucide-react";
import { Link } from "react-router";

const plans = [
  {
    name: "Starter",
    price: "$29",
    per: "/ month",
    desc: "Perfect for solo contractors and micro-businesses.",
    features: ["Up to 3 users", "10 active jobs", "Quotes & invoicing", "Basic scheduling", "Mobile app", "Email support"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$79",
    per: "/ month",
    desc: "For growing contracting teams that need more power.",
    features: ["Up to 15 users", "Unlimited jobs", "Full invoicing & payroll", "GPS field tracking", "Compliance module", "CRM & pipeline", "Priority support", "Xero / MYOB integration"],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$199",
    per: "/ month",
    desc: "For large operations with complex workflows.",
    features: ["Unlimited users", "Multi-site support", "Custom workflows", "Advanced analytics", "API access", "Dedicated onboarding", "SLA support", "White-label option"],
    cta: "Contact Sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Pricing</span>
          <h2 className="mt-2 text-4xl font-bold text-white">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">No hidden fees. 14-day free trial on all plans. Cancel any time.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map(({ name, price, per, desc, features, cta, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl p-8 border relative flex flex-col ${
                highlight
                  ? "bg-gradient-to-b from-[#00C9D4]/10 to-[#FF6B2B]/10 border-[#00C9D4]/40 shadow-[0_0_40px_rgba(0,201,212,0.15)]"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center space-x-1 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] px-4 py-1.5 rounded-full">
                  <Star size={12} className="text-white" fill="white" />
                  <span className="text-xs text-white font-semibold">Most Popular</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold ${highlight ? "text-[#00C9D4]" : "text-white"}`}>{name}</h3>
                <div className="flex items-end space-x-1 mt-2">
                  <span className="text-4xl font-bold text-white">{price}</span>
                  <span className="text-gray-400 mb-1">{per}</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">{desc}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-center space-x-3 text-sm text-gray-300">
                    <Check size={16} className={highlight ? "text-[#00C9D4] flex-shrink-0" : "text-[#FF6B2B] flex-shrink-0"} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/login"
                className={`w-full py-3 rounded-xl text-center font-semibold text-sm transition-all ${
                  highlight
                    ? "bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white hover:shadow-[0_0_20px_rgba(0,201,212,0.4)]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
