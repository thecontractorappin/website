import React, { useState, useEffect } from 'react';
import { X, Smartphone } from 'lucide-react';

export function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already dismissed the popup
    const hasDismissed = localStorage.getItem('appPopupDismissed');
    
    if (!hasDismissed) {
      // Delay the popup by 3 seconds for a better user experience
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('appPopupDismissed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
      <div className="bg-[#0A1628]/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-6 w-80 relative overflow-hidden">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-[#00C9D4]/20 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center space-x-3 mb-4 relative z-10">
          <div className="w-10 h-10 bg-gradient-to-br from-[#00C9D4] to-[#FF6B2B] rounded-xl flex items-center justify-center shadow-lg">
            <Smartphone className="text-white" size={20} />
          </div>
          <div>
            <h4 className="text-white font-bold tracking-tight">The Contractor App</h4>
            <p className="text-xs text-[#00C9D4] font-bold uppercase tracking-wider">Now Live</p>
          </div>
        </div>

        <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6 relative z-10">
          Take absolute control of your site operations from anywhere. Download the mobile app to track attendance and fleets in real-time.
        </p>

        <a 
          href="https://play.google.com/store/apps/details?id=com.astute.contractor" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block transition-transform hover:scale-105 relative z-10"
          onClick={handleClose}
        >
          <img 
            alt="Get it on Google Play" 
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
            className="h-12 w-auto mx-auto"
          />
        </a>
      </div>
    </div>
  );
}
