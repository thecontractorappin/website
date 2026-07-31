import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="The Contractor App Logo" 
                className="h-9 w-auto object-contain" 
              />
              <span className="text-white font-bold text-lg tracking-tight">
                the<span className="text-[#00C9D4]">contractor</span><span className="text-[#FF6B2B]">app</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              India's most powerful platform built for Contractors and Real-Estate Developers.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail size={14} className="text-[#00C9D4]" />
                <span>support@thecontractorapp.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={14} className="text-[#FF6B2B]" />
                <span>+91 9419417800</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={14} className="text-[#00C9D4]" />
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {["Project Management", "Attendance", "Machinery", "Payroll", "Shop Hub", "Analytics"].map((l) => (
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
            {/* Updated Start Free Trial Link */}
            <a
              href="https://app.thecontractorapp.in/company-registration.html"
              className="block text-center py-3 bg-gradient-to-r from-[#FF6B2B] to-[#FF8C42] text-white rounded-xl text-sm font-semibold hover:shadow-[0_0_20px_rgba(255,107,43,0.35)] transition-all"
            >
              Start Free Trial
            </a>
            <Link
              to="/contact"
              className="block text-center py-3 bg-white/5 border border-white/10 text-gray-300 rounded-xl text-sm hover:bg-white/10 transition-all"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 thecontractorapp.in All rights reserved.</p>
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