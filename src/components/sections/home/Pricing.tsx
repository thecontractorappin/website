import { useState } from "react";
import { Check, Star } from "lucide-react";

const planFeatures = [
  "Unlimited Active Projects",
  "Global Inventory Management",
  "Unlimited Sub-Contractor Management",
  "Personal Expenditure Ledger",
  "Live Tender Marketplace Access",
  "Machinery & Fleet Tracking",
  "Geofenced Labor Attendance",
  "24/7 Dedicated Support",
];

const pricingData = {
  monthly: [
    {
      name: "Single User",
      price: "₹499",
      per: "/mo",
      desc: "Perfect for independent contractors managing their own sites.",
      userLimit: "1 Admin Account",
      highlight: false,
    },
    {
      name: "Multi-User",
      price: "₹999",
      per: "/mo",
      desc: "For scaling enterprise teams requiring field collaboration.",
      userLimit: "Unlimited Team Members & Roles",
      highlight: true,
    },
  ],
  halfYearly: [
    {
      name: "Single User",
      price: "₹2,799",
      per: "/6-mos",
      desc: "Perfect for independent contractors managing their own sites.",
      userLimit: "1 Admin Account",
      highlight: false,
    },
    {
      name: "Multi-User",
      price: "₹5,799",
      per: "/6-mos",
      desc: "For scaling enterprise teams requiring field collaboration.",
      userLimit: "Unlimited Team Members & Roles",
      highlight: true,
    },
  ],
  yearly: [
    {
      name: "Single User",
      price: "₹5,499",
      per: "/yr",
      desc: "Perfect for independent contractors managing their own sites.",
      userLimit: "1 Admin Account",
      highlight: false,
    },
    {
      name: "Multi-User",
      price: "₹11,499",
      per: "/yr",
      desc: "For scaling enterprise teams requiring field collaboration.",
      userLimit: "Unlimited Team Members & Roles",
      highlight: true,
    },
  ],
};

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "halfYearly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-white tracking-tight">
            Select a plan to keep building.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-xl mx-auto">
            Choose the tier that fits your team's needs. All enterprise features included standard. No hidden fees.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 p-1.5 rounded-full inline-flex items-center space-x-1 border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === "monthly" ? "bg-[#00C9D4] text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("halfYearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === "halfYearly" ? "bg-[#00C9D4] text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              Half-Yearly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                billingCycle === "yearly" ? "bg-[#00C9D4] text-white shadow-lg" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingData[billingCycle].map(({ name, price, per, desc, userLimit, highlight }) => (
            <div
              key={name}
              className={`rounded-3xl p-10 border relative flex flex-col transition-all duration-500 hover:-translate-y-2 ${
                highlight
                  ? "bg-gradient-to-b from-[#00C9D4]/10 to-[#FF6B2B]/10 border-[#00C9D4]/40 shadow-[0_0_50px_rgba(0,201,212,0.15)]"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] px-5 py-1.5 rounded-full shadow-lg">
                  <Check size={14} className="text-white" strokeWidth={3} />
                  <span className="text-xs text-white font-extrabold tracking-wide uppercase">Selected Plan</span>
                </div>
              )}

              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className={`text-2xl font-extrabold ${highlight ? "text-white" : "text-gray-300"}`}>{name}</h3>
                <p className="text-sm text-gray-400 mt-2">{desc}</p>
                <div className="flex items-end justify-center space-x-1 mt-6">
                  <span className={`text-6xl font-extrabold tracking-tight ${highlight ? "text-transparent bg-clip-text bg-gradient-to-r from-[#00C9D4] to-[#00E5F0]" : "text-white"}`}>
                    {price}
                  </span>
                  <span className="text-gray-400 mb-2 font-medium">{per}</span>
                </div>
              </div>

              <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/5 text-center">
                <span className={`text-sm font-bold ${highlight ? "text-[#00C9D4]" : "text-gray-300"}`}>
                  {userLimit}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {planFeatures.map((f) => (
                  <li key={f} className="flex items-start space-x-3 text-sm text-gray-300 font-medium">
                    <div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-[#25D366]/20">
                      <Check size={12} className="text-[#25D366]" strokeWidth={3} />
                    </div>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://app.thecontractorapp.in/company-registration.html"
                className={`w-full py-4 rounded-xl text-center font-bold text-base transition-all duration-300 ${
                  highlight
                    ? "bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white shadow-[0_0_20px_rgba(0,201,212,0.4)] hover:shadow-[0_0_30px_rgba(0,201,212,0.6)] hover:scale-[1.02]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:scale-[1.02]"
                }`}
              >
                Start 14-Day Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}