import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollUpButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#C94A02] via-[#E86014] to-[#F48C06] hover:from-[#E86014] hover:to-[#FF8533] text-white shadow-xl shadow-orange-700/35 border-2 border-white transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none cursor-pointer group ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      title="Scroll Up"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
};
