import { Zap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-lg flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="text-white font-bold">
                the<span className="text-[#00C9D4]">contractor</span><span className="text-[#FF6B2B]">app</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Australia's most powerful platform built for trade contractors and field service businesses.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-[#00C9D4]" />
                <span>hello@thecontractorapp.com.au</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-[#FF6B2B]" />
                <span>+61 2 9000 0000</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#00C9D4]" />
                <span>Sydney, NSW 2000</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Job Management", "Scheduling", "Invoicing", "Payroll", "Compliance", "Analytics"].map((l) => (
                <li key={l}><a href="#features" className="hover:text-[#00C9D4] transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "About Us", href: "#" },
                { label: "Pricing", href: "#pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="hover:text-[#00C9D4] transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Get Started Free</h4>
            <p className="text-sm text-gray-400">14-day free trial. No credit card needed.</p>
            <Link
              to="/login"
              className="block text-center py-3 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,107,43,0.35)] transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="block text-center py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/10 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 thecontractorapp Pty Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
