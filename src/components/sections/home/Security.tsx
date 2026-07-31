import { Shield, Lock, Eye, Database, Cloud, Smartphone, Download, CreditCard } from "lucide-react";

const items = [
  { 
    icon: Database, 
    title: "Isolated Multi-Tenant Architecture", 
    desc: "Your data is physically segregated. Each enterprise gets its own dedicated database layer, guaranteeing zero cross-contamination.", 
    color: "#00C9D4" 
  },
  { 
    icon: Smartphone, 
    title: "Twilio-Powered OTP Verification", 
    desc: "Mandatory SMS-based OTP verification ensures that only verified mobile numbers can register or reset credentials.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Cloud, 
    title: "Google Cloud Infrastructure", 
    desc: "Blueprints, eNITs, and site photos are vaulted in secure Firebase storage with signed URL access.", 
    color: "#00C9D4" 
  },
  { 
    icon: CreditCard, 
    title: "RBI-Compliant Transactions", 
    desc: "B2B material purchases and subscriptions are routed through Razorpay with SHA-256 encrypted webhook signatures.", 
    color: "#FF6B2B" 
  },
  { 
    icon: Eye, 
    title: "Granular Role-Based Access", 
    desc: "Strict hierarchy separates Master Admins, Managers, and Field Staff. Your financial ledgers remain strictly confidential.", 
    color: "#00C9D4" 
  },
  { 
    icon: Download, 
    title: "On-Demand Data Vault", 
    desc: "Generate and download compressed, encrypted backups of your entire company database and ledger history in one click.", 
    color: "#FF6B2B" 
  },
];

export function Security() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A1628] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[500px] h-[500px] bg-[#00C9D4]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-[#00C9D4] uppercase tracking-wider bg-[#00C9D4]/10 px-4 py-1.5 rounded-full">
            Infrastructure & Security
          </span>
          <h2 className="mt-6 text-4xl font-extrabold text-white tracking-tight">
            Military-Grade Data Protection
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto font-medium">
            We treat your BOQs, financial ledgers, and contractor data with absolute confidentiality. Protected at the server, database, and application layers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div 
              key={title} 
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00C9D4]/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner" 
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon style={{ color }} size={28} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-medium">{desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
          {[
            "Isolated Tenant Databases", 
            "JWT Encrypted Sessions", 
            "Bcrypt Password Hashing", 
            "Twilio SMS Security", 
            "Razorpay Secured"
          ].map((badge) => (
            <div 
              key={badge} 
              className="flex items-center space-x-2.5 bg-white/5 border border-white/10 px-5 py-3 rounded-full hover:bg-white/10 transition-colors cursor-default"
            >
              <Shield size={18} className="text-[#00C9D4]" strokeWidth={2.5} />
              <span className="text-sm font-bold text-gray-300 tracking-wide">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}