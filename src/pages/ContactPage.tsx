import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Define your WhatsApp number (include country code, no + or spaces)
    const whatsappNumber = "919419417800"; 
    
    // 2. Format the message with line breaks and bolding (*)
    const whatsappMessage = `*New Website Inquiry* 🚀\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Company:* ${form.company || "Not provided"}\n\n*Message:*\n${form.message}`;
    
    // 3. Encode the message for a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // 4. Create the wa.me link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // 5. Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // 6. Show the success state on the UI
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
            Have questions? Want a demo meeting? Our team is standing by to help you get started.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <Link to="/" className="inline-flex items-center space-x-2 mb-6">
                {/* Updated to use your actual logo */}
                <img 
                  src="/logo.png" 
                  alt="The Contractor App Logo" 
                  className="h-9 w-auto object-contain" 
                />
                <span className="font-bold text-lg text-[#0A1628]">
                  the<span className="text-[#00C9D4]">contractor</span><span className="text-[#FF6B2B]">app</span>
                </span>
              </Link>
              <p className="text-gray-500 leading-relaxed">
                India's most powerful platform for Contractors and Real-Estate Developers. We're here to help you save time, win more work, and grow your business.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: "support@thecontractorapp.in",
                  sub: "We reply within 1 business day",
                  color: "#00C9D4",
                },
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "+91 9419417800",
                  sub: "Mon–Fri, 8am–6pm",
                  color: "#FF6B2B",
                },
                {
                  icon: MapPin,
                  label: "Our Office",
                  value: "3rd Floor, Plot No A-4, Kh No 3523/1512, Near Metro Pillar 340, Chotey Lal Park Ramesh Nagar",
                  sub: "Basai Darapur, New Delhi, India",
                  color: "#00C9D4",
                },
                {
                  icon: Clock,
                  label: "Support Hours",
                  value: "24/7 On-Call Support",
                  sub: "Single-User & Multi-User, Enterprise plans",
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
                <p className="font-semibold text-[#0A1628]">Contact us now</p>
                <p className="text-sm text-gray-500">Give us a try</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-[#F7F9FC] rounded-2xl p-8 border border-gray-100 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                  <MessageCircle size={32} className="text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold text-[#0A1628]">Redirecting to WhatsApp...</h3>
                <p className="text-gray-500">Your message has been prepared. If WhatsApp didn't open automatically, please allow pop-ups.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                  className="mt-2 text-[#00C9D4] hover:text-[#00A8B5] font-medium text-sm"
                >
                  Start a new message
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
                    className="w-full py-3.5 bg-[#25D366] text-white rounded-xl font-semibold hover:shadow-[0_0_25px_rgba(37,211,102,0.35)] hover:bg-[#20bd5a] transition-all flex items-center justify-center space-x-2 group"
                  >
                    <MessageCircle size={20} />
                    <span>Send via WhatsApp</span>
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
