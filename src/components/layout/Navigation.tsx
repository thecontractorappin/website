import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-md border-b border-[#00C9D4]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Stays as a <Link> because it navigates internally on the welcome site */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/logo.png" 
              alt="The Contractor App Logo" 
              className="h-9 w-auto object-contain" 
            />
            <span className="text-white font-bold text-lg tracking-tight">
              the<span className="text-[#00C9D4]">contractor</span>
              <span className="text-[#FF6B2B]">app</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-gray-300 hover:text-[#00C9D4] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-3">
            {/* 💡 UPDATED: Standard anchor tag pointing to your Render subdomain */}
            <a
              href="https://app.thecontractorapp.in/index.html"
              className="text-sm text-gray-300 hover:text-white transition-colors px-4 py-2"
            >
              Log In
            </a>
            {/* 💡 UPDATED: Standard anchor tag pointing to your Render subdomain */}
            <a
              href="https://app.thecontractorapp.in/company-registration.html"
              className="text-sm font-semibold px-5 py-2 bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white rounded-lg hover:shadow-[0_0_20px_rgba(0,201,212,0.4)] transition-all"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1628] border-t border-[#00C9D4]/20 px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-gray-300 hover:text-[#00C9D4] py-2"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          
          <div className="pt-2 flex flex-col space-y-2">
            {/* 💡 ADDED & UPDATED: Mobile Log In Button */}
            <a
              href="https://app.thecontractorapp.in/index.html"
              className="block text-center py-2 border border-slate-600 text-gray-200 hover:text-white hover:bg-slate-800 rounded-lg font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </a>
            {/* 💡 UPDATED: Mobile Start Free Trial Button */}
            <a
              href="https://app.thecontractorapp.in/company-registration.html"
              className="block text-center py-3 bg-gradient-to-r from-[#00C9D4] to-[#00A8B5] text-white rounded-lg font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}