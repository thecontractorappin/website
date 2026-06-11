import { AlertTriangle, Clock, FileX, Users, DollarSign, MapPin } from "lucide-react";

const challenges = [
  { icon: Clock, title: "Manual Scheduling Chaos", desc: "Juggling jobs, crews, and timelines across spreadsheets leads to double-bookings and missed deadlines.", color: "#FF6B2B" },
  { icon: FileX, title: "Invoice Delays & Disputes", desc: "Paper-based or slow invoicing processes cause cash flow gaps and payment disputes with clients.", color: "#00C9D4" },
  { icon: Users, title: "Crew Visibility Gaps", desc: "No real-time view of who is on which job site, leading to wasted trips and miscommunication.", color: "#FF6B2B" },
  { icon: DollarSign, title: "Payroll & Compliance Errors", desc: "Manually tracking hours and contractor pay results in costly mistakes and regulatory exposure.", color: "#00C9D4" },
  { icon: MapPin, title: "No Field-to-Office Sync", desc: "Field workers and office teams operate in silos, creating delays in job updates and approvals.", color: "#FF6B2B" },
  { icon: AlertTriangle, title: "Licence & Cert Expiry", desc: "Missing renewal dates for contractor licences and certifications puts projects and compliance at risk.", color: "#00C9D4" },
];

export function BusinessChallenges() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">The Problem</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Running a Contracting Business Is Hard Enough</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            These everyday challenges cost contractors time, money, and clients.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${color}18` }}>
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
