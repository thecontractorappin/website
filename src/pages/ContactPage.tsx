import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle, Zap } from "lucide-react";
import { Link } from "react-router";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-white pt-16">
      {/* Hero banner */}
      <div className="bg-gradient-to-br from-[#0A1628] to-[#0D1F38] py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #00C9D4 1px, transparent 0)", backgroundSize: "48px 48px" }} />
        <div className="relative">
          <span className="text-sm font-semibold text-[#FF6B2B] uppercase tracking-wider">Get in Touch</span>
          <h1 className="mt-2 text-4xl font-bold text-white">We'd Love to Hear from You</h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have questions? Want a demo? Our team is standing by to help you get started.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                <div className="w-9 h-9 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-lg flex items-center justify-center">
                  <Zap size={16} className="text-white" fill="white" />
                </div>
                <span className="font-bold text-lg text-[#0A1628]">
                  the<span className="text-[#00C9D4]">contractor</span><span className="text-[#FF6B2B]">app</span>
                </span>
              </Link>
              <p className="text-gray-500 leading-relaxed">
                Australia's most powerful platform for trade contractors. We're here to help you save time, win more work, and grow your business.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "hello@thecontractorapp.com.au",
                  sub: "We reply within 1 business day",
                  color: "#00C9D4",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+61 2 9000 0000",
                  sub: "Mon–Fri, 8am–6pm AEST",
                  color: "#FF6B2B",
                },
                {
                  icon: MapPin,
                  label: "Our Office",
                  value: "Level 12, 1 Market Street, Sydney NSW 2000",
                  sub: "Australia",
                  color: "#00C9D4",
                },
                {
                  icon: Clock,
                  label: "Support Hours",
                  value: "24/7 in-app live chat",
                  sub: "Pro & Enterprise plans",
                  color: "#FF6B2B",
                },
              ].map(({ icon: Icon, label, value, sub, color }) => (
                <div key={label} className="flex items-start space-x-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${color}15` }}>
                    <Icon style={{ color }} size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</p>
                    <p className="text-[#0A1628] font-medium mt-0.5">{value}</p>
                    <p className="text-sm text-gray-400">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Live chat button */}
            <div className="bg-gradient-to-r from-[#00C9D4]/10 to-[#FF6B2B]/10 border border-[#00C9D4]/20 rounded-2xl p-5 flex items-center space-x-4">
              <div className="w-11 h-11 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-[#0A1628]">Chat with us now</p>
                <p className="text-sm text-gray-500">Average response time under 2 minutes</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#F7F9FC] rounded-2xl p-8 border border-gray-100 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-full flex items-center justify-center">
                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none">
                    <path d="M2 10L9 17L22 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0A1628]">Message Sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. We'll get back to you within 1 business day.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                  className="mt-2 text-[#00C9D4] hover:text-[#00A8B5] font-medium text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[#0A1628] mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5 font-medium">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#00C9D4] focus:ring-2 focus:ring-[#00C9D4]/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-600 mb-1.5 font-medium">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#00C9D4] focus:ring-2 focus:ring-[#00C9D4]/20 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">Company / Trade</label>
                    <input
                      type="text"
                      placeholder="e.g. Smith Plumbing Pty Ltd"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#00C9D4] focus:ring-2 focus:ring-[#00C9D4]/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5 font-medium">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[#0A1628] placeholder-gray-400 focus:outline-none focus:border-[#00C9D4] focus:ring-2 focus:ring-[#00C9D4]/20 transition-all text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(255,107,43,0.35)] transition-all flex items-center justify-center space-x-2 group"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
