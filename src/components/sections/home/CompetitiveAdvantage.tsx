import { Check, X } from "lucide-react";

const competitors = [
  "The Contractor App", 
  "Legacy ERPs", 
  "Global SaaS", 
  "Point Solutions", 
  "WhatsApp & Excel"
];

const featureRows = [
  { label: "Live Global Tender Marketplace", vals: [true, false, false, false, false] },
  { label: "Geofenced Selfie Attendance", vals: [true, false, false, true, false] },
  { label: "Machinery Fuel & Meter Logging", vals: [true, true, false, true, false] },
  { label: "Integrated B2B Supply Hub", vals: [true, false, false, false, false] },
  { label: "Dynamic T-Ledger Financials", vals: [true, true, true, false, false] },
  { label: "100% Offline Field Architecture", vals: [true, false, true, true, true] },
  { label: "Subcontractor (SC) Bill Automation", vals: [true, true, false, false, false] },
  { label: "Unlimited User Licensing", vals: [true, false, false, false, true] },
  { label: "Instant Enterprise Deployment", vals: [true, false, true, true, true] },
];

export function CompetitiveAdvantage() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            The Unfair Advantage
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] tracking-tight">
            How We Dominate the Market
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            See why India's top civil contractors are abandoning bloated ERPs and chaotic WhatsApp groups for our unified ecosystem.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628]">
                <th className="text-left py-6 px-8 text-gray-400 font-semibold w-72 text-base">
                  Core Capability
                </th>
                {competitors.map((c, i) => (
                  <th 
                    key={c} 
                    className={`py-6 px-4 text-center font-bold text-base whitespace-nowrap ${
                      i === 0 ? "text-[#00C9D4] bg-white/5" : "text-gray-400"
                    }`}
                  >
                    {i === 0 ? (
                      <div className="flex flex-col items-center space-y-2">
                        <span className="text-[#00C9D4]">{c}</span>
                        <span className="text-[10px] bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white px-3 py-1 rounded-full uppercase tracking-wider font-extrabold shadow-lg">
                          Industry Best
                        </span>
                      </div>
                    ) : (
                      c
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map(({ label, vals }, ri) => (
                <tr 
                  key={label} 
                  className={`border-t border-gray-100 transition-colors hover:bg-blue-50/50 ${
                    ri % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"
                  }`}
                >
                  <td className="py-4 px-8 text-[#0A1628] font-bold">{label}</td>
                  {vals.map((v, ci) => (
                    <td 
                      key={ci} 
                      className={`py-4 px-4 text-center ${ci === 0 ? "bg-[#00C9D4]/5 border-l border-r border-[#00C9D4]/10" : ""}`}
                    >
                      {v ? (
                        <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center ${ci === 0 ? "bg-[#00C9D4]/20" : "bg-green-100"}`}>
                          <Check size={18} className={ci === 0 ? "text-[#00C9D4]" : "text-green-600"} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="mx-auto w-8 h-8 rounded-full flex items-center justify-center bg-gray-100">
                          <X size={18} className="text-gray-400" strokeWidth={2.5} />
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}