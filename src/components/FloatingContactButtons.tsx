import React from 'react';
import { PhoneCall } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const FloatingContactButtons: React.FC = () => {
  const whatsappMessage = encodeURIComponent(
    `*Namaste Prakash Purohit ji,*\n\nI am visiting your website and would like to inquire about Vedic Puja Services and auspicious Muhurats.`
  );

  return (
    <div className="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start gap-3 pointer-events-auto">
      {/* 1. Phone / Call Button (Directly Above WhatsApp Button) */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#C94A02] via-[#E86014] to-[#F48C06] hover:from-[#E86014] hover:to-[#FF8533] text-white shadow-xl shadow-orange-700/35 border-2 border-white transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Call Us"
      >
        <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-xs group-hover:rotate-12 transition-transform duration-300" />

        {/* Hover Tooltip: "Call Us" */}
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-[#2B1810] text-amber-100 text-xs font-serif font-medium whitespace-nowrap shadow-xl border border-gold/40 opacity-0 pointer-events-none group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5">
          <span>Call Us</span>
        </span>
      </a>

      {/* 2. WhatsApp Button (Bottom Left) */}
      <a
        href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/35 border-2 border-white transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Subtle Pulse Rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 drop-shadow-xs"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>

        {/* Hover Tooltip: "Chat on WhatsApp" */}
        <span className="absolute left-full ml-3 px-3 py-1.5 rounded-xl bg-[#2B1810] text-emerald-300 text-xs font-serif font-medium whitespace-nowrap shadow-xl border border-emerald-500/30 opacity-0 pointer-events-none group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 hidden sm:flex items-center gap-1.5">
          <span>Chat on WhatsApp</span>
        </span>
      </a>
    </div>
  );
};
