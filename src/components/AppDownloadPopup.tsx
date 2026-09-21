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
