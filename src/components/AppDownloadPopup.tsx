import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-open after 3 seconds on page load
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={"fixed top-32 right-0 z-50 flex items-start transition-transform duration-500 ease-in-out " + (isOpen ? "translate-x-0" : "translate-x-80")}>
      
      <!-- Collapsed Toggle Button -->
      <button onClick={togglePopup} className="bg-white shadow-[-4px_4px_15px_rgba(0,0,0,0.15)] rounded-l-xl p-3 mt-4 border border-r-0 border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center cursor-pointer" title={isOpen ? "Close Popup" : "Download App"}>
        {isOpen ? (
          <X className="text-gray-600" size={24} />
        ) : (
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" alt="Play Store" className="w-6 h-6 object-contain" />
        )}
      </button>

      <!-- Main Popup Panel -->
      <div className="bg-[#0A1628]/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-bl-2xl p-6 w-80 relative overflow-hidden h-auto border-r-0">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#00C9D4]/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex items-center space-x-3 mb-4 relative z-10">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg p-1.5 shrink-0">
            <!-- ADDED: Your Official App Logo -->
            <img src="/logo.png" alt="The Contractor App Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <h4 className="text-white font-bold tracking-tight leading-tight">The Contractor App</h4>
            <p className="text-xs text-[#00C9D4] font-bold uppercase tracking-wider mt-0.5">Now Live</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6 relative z-10">
          Take absolute control of your site operations from anywhere. Download the mobile app to track attendance and fleets in real-time.
        </p>

        <a href="https://play.google.com/store/apps/details?id=com.astute.contractor" target="_blank" rel="noopener noreferrer" className="block transition-transform hover:scale-105 relative z-10">
          <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="h-12 w-auto mx-auto" />
        </a>
      </div>
    </div>
  );
}
