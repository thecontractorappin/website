import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 42000, jobs: 18 },
  { month: "Feb", revenue: 51000, jobs: 22 },
  { month: "Mar", revenue: 48000, jobs: 20 },
  { month: "Apr", revenue: 63000, jobs: 27 },
  { month: "May", revenue: 71000, jobs: 31 },
  { month: "Jun", revenue: 84000, jobs: 36 },
];

const pieData = [
  { name: "Plumbing", value: 34 },
  { name: "Electrical", value: 28 },
  { name: "HVAC", value: 20 },
  { name: "Other", value: 18 },
];
const PIE_COLORS = ["#00C9D4", "#FF6B2B", "#00A8B5", "#FFB347"];

export function AnalyticsDashboard() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Analytics</span>
          <h2 className="mt-2 text-4xl font-bold text-[#0A1628]">Your Business at a Glance</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">Live dashboards that turn raw data into clear business decisions.</p>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Revenue", value: "$359k", change: "+22%", color: "#00C9D4" },
            { label: "Jobs Completed", value: "154", change: "+18%", color: "#FF6B2B" },
            { label: "Avg Job Value", value: "$2,330", change: "+9%", color: "#00C9D4" },
            { label: "On-Time Rate", value: "94%", change: "+5%", color: "#FF6B2B" },
          ].map(({ label, value, change, color }) => (
            <div key={label} className="bg-[#F7F9FC] rounded-2xl p-5 border border-gray-100">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-3xl font-bold text-[#0A1628] mt-1">{value}</p>
              <p className="text-sm mt-1 font-medium" style={{ color }}>{change} this year</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Revenue chart */}
          <div className="lg:col-span-2 bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-[#0A1628] mb-4">Monthly Revenue</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={revenueData} barGap={4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "#9CA3AF", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip formatter={(v: number) => [`$${v.toLocaleString()}`, "Revenue"]} contentStyle={{ borderRadius: 8, border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }} />
                <Bar dataKey="revenue" fill="url(#aquaGrad)" radius={[6, 6, 0, 0]} />
                <defs>
                  <linearGradient id="aquaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C9D4" />
                    <stop offset="100%" stopColor="#FF6B2B" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Job type pie */}
          <div className="bg-[#F7F9FC] rounded-2xl p-6 border border-gray-100">
            <h3 className="font-semibold text-[#0A1628] mb-4">Jobs by Trade</h3>
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={75} paddingAngle={3} dataKey="value">
                  {pieData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                </Pie>
                <Tooltip formatter={(v: number) => [`${v}%`, ""]} contentStyle={{ borderRadius: 8, border: "none" }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-3 space-y-2">
              {pieData.map(({ name, value }, i) => (
                <div key={name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: PIE_COLORS[i] }} />
                    <span className="text-gray-600">{name}</span>
                  </div>
                  <span className="font-medium text-[#0A1628]">{value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
