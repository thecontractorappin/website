import { UserMinus, Droplet, TrendingDown, Box, FileX, Wallet } from "lucide-react";

const challenges = [
  { 
    icon: UserMinus, 
    title: "Ghost Workers & Time Theft", 
    desc: "Paying daily wages for proxy laborers, or crews who arrive late and leave early, bleeding your daily labor budget.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Droplet, 
    title: "Diesel Leakage & Idle Assets", 
    desc: "Losing thousands to untracked fuel consumption, undocumented meter readings, and heavy machinery sitting idle.", 
    color: "#00C9D4" 
  },
  { 
    icon: TrendingDown, 
    title: "Blind BOQ Overruns", 
    desc: "Discovering you have exceeded your material and capital limits only after the cash is gone and the project is delayed.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Box, 
    title: "Material Pilferage & Delays", 
    desc: "Site stoppages caused by poor procurement tracking, paired with expensive inventory like steel and cement going missing.", 
    color: "#00C9D4" 
  },
  { 
    icon: FileX, 
    title: "SC Billing Disputes", 
    desc: "Endless friction with subcontractors over inflated measurements, missed advance deductions, and untracked material issues.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Wallet, 
    title: "Unreconciled Cash Flow", 
    desc: "Trying to track site expenses, petty cash, and personal party ledgers across fragmented spreadsheets and WhatsApp groups.", 
    color: "#00C9D4" 
  },
];

export function BusinessChallenges() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#FF6B2B] uppercase tracking-wider bg-[#FF6B2B]/10 px-4 py-1.5 rounded-full">
            The Status Quo
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0A1628] tracking-tight">
            The Silent Killers of Construction Profitability
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Every day your sites rely on paper registers, fragmented WhatsApp messages, and manual ledgers, your profit margins are actively bleeding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map(({ icon: Icon, title, desc, color }) => (
            <div 
              key={title} 
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner" 
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon style={{ color }} size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#0A1628] mb-3 tracking-tight">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}