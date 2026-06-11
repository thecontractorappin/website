import { Shield, Lock, Eye, CheckCircle2, Server, FileCheck } from "lucide-react";

const items = [
  { icon: Lock, title: "Bank-Grade Encryption", desc: "All data encrypted in transit and at rest with AES-256 and TLS 1.3.", color: "#00C9D4" },
  { icon: Shield, title: "SOC 2 Type II", desc: "Independently audited security controls across all systems and processes.", color: "#FF6B2B" },
  { icon: Eye, title: "Role-Based Access", desc: "Granular permissions ensure every user sees only what they need.", color: "#00C9D4" },
  { icon: Server, title: "99.9% Uptime SLA", desc: "Enterprise infrastructure with geo-redundant backups and failover.", color: "#FF6B2B" },
  { icon: FileCheck, title: "GDPR & Privacy Act", desc: "Fully compliant with Australian Privacy Act and GDPR requirements.", color: "#00C9D4" },
  { icon: CheckCircle2, title: "Two-Factor Auth", desc: "Mandatory 2FA support with authenticator apps and SMS backup.", color: "#FF6B2B" },
];

export function Security() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#00C9D4] uppercase tracking-wider">Security</span>
          <h2 className="mt-2 text-4xl font-bold text-white">Enterprise-Grade Security</h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">Your business data and client information are protected at every layer.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#00C9D4]/30 hover:bg-white/8 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}20` }}>
                <Icon style={{ color }} size={22} />
              </div>
              <h3 className="font-semibold text-white mb-2">{title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Trust badges row */}
        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {["SOC 2 Certified", "GDPR Compliant", "ISO 27001", "256-bit SSL", "99.9% Uptime"].map((badge) => (
            <div key={badge} className="flex items-center space-x-2 bg-white/5 border border-white/10 px-5 py-3 rounded-full">
              <CheckCircle2 size={16} className="text-[#00C9D4]" />
              <span className="text-sm text-gray-300">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
