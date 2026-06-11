import { Check, X } from "lucide-react";

const competitors = ["thecontractorapp", "ServiceM8", "Tradify", "AroFlo", "simPRO"];

const featureRows = [
  { label: "Built for contractors", vals: [true, true, true, false, false] },
  { label: "Real-time field GPS tracking", vals: [true, true, false, true, true] },
  { label: "Integrated invoicing & quoting", vals: [true, true, true, true, true] },
  { label: "Award-rate payroll engine", vals: [true, false, false, true, true] },
  { label: "Compliance & licence tracking", vals: [true, false, false, true, true] },
  { label: "Mobile-first field app", vals: [true, true, true, false, false] },
  { label: "Client self-service portal", vals: [true, false, false, false, true] },
  { label: "Built-in CRM & pipeline", vals: [true, false, false, false, true] },
  { label: "Offline mobile support", vals: [true, true, false, false, false] },
  { label: "Transparent flat pricing", vals: [true, true, true, false, false] },
];

export function CompetitiveAdvantage() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#00C9D4] uppercase tracking-wider">Why Us</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">How We Stack Up</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">See why contractors choose thecontractorapp over the competition.</p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0A1628]">
                <th className="text-left py-4 px-6 text-gray-400 font-medium w-64">Feature</th>
                {competitors.map((c, i) => (
                  <th key={c} className={`py-4 px-4 text-center font-semibold ${i === 0 ? "text-[#00C9D4]" : "text-gray-400"}`}>
                    {i === 0 ? (
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-[#00C9D4]">{c}</span>
                        <span className="text-xs bg-[#FF6B2B] text-white px-2 py-0.5 rounded-full">Best</span>
                      </div>
                    ) : c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {featureRows.map(({ label, vals }, ri) => (
                <tr key={label} className={`border-t border-gray-100 ${ri % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"}`}>
                  <td className="py-3 px-6 text-gray-700 font-medium">{label}</td>
                  {vals.map((v, ci) => (
                    <td key={ci} className="py-3 px-4 text-center">
                      {v ? (
                        <Check size={18} className={`mx-auto ${ci === 0 ? "text-[#00C9D4]" : "text-green-500"}`} />
                      ) : (
                        <X size={18} className="mx-auto text-gray-300" />
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
