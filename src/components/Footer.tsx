import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, Navigation, ArrowUp } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonies', path: '/testimonies' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const popularPujas = [
    { name: 'New Gruhapravesam', id: 'gruhapravesam' },
    { name: 'Satyanarayan Puja', id: 'satyanarayan-puja' },
    { name: 'Maha Ganapati Homa', id: 'ganapati-homa' },
    { name: 'Sri Sudarshan Homa', id: 'sudarshan-homa' },
    { name: 'Sri Rudra Homa', id: 'rudra-homa' },
    { name: 'Navgrah Dosha Nivaaran', id: 'navgrah-dosha-nivaaran' },
    { name: 'Kaal Sarp Dosha Shanti', id: 'kaal-sarp-dosha' },
    { name: 'Namakarana Ceremony', id: 'namakarana' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#24140E] to-[#160B07] text-[#FAF5EC] relative overflow-hidden border-t-2 border-gold/40">
      {/* Background Watermark Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5 bg-repeat bg-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 C48 26 54 34 80 40 C54 46 48 54 40 80 C32 54 26 46 0 40 C26 34 32 26 40 0 Z' fill='%23D4AF37'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Shloka Sacred Banner */}
      <div className="border-b border-gold/20 bg-black/30 py-4 px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-amber-200/90 font-serif">
          <span className="text-saffron font-bold text-base">✦ ॐ ✦</span>
          <span>ॐ सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः । सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत् ॥</span>
          <span className="text-saffron font-bold text-base">✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-saffron-500/20 border border-gold/50 flex items-center justify-center text-saffron text-2xl font-serif">
                ॐ
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-amber-100">
                  {siteConfig.brandName}
                </h3>
                <p className="text-xs text-amber-300/80 uppercase tracking-wider">
                  Vedic Purohit Services
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-300 italic font-serif">
              “Traditional rituals. Spiritual devotion. Divine blessings.”
            </p>

            <p className="text-xs text-stone-400 leading-relaxed">
              Providing authentic Vedic Puja, Homa, Samskara, and Astrological guidance with deep scriptural fidelity for homes, families, and businesses.
            </p>

            {/* Social Media & Contact Placeholders */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron text-amber-200 hover:text-white flex items-center justify-center transition-all"
                title="Google Maps"
              >
                <Navigation className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-emerald-600 text-amber-200 hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp Seva"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron text-amber-200 hover:text-white flex items-center justify-center transition-all"
                title="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron text-amber-200 hover:text-white flex items-center justify-center transition-all"
                title="Email Seva"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300 border-b border-gold/20 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-stone-300 hover:text-saffron hover:underline decoration-gold/40 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gold text-[10px]">✦</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sacred Offerings Links (Navigates to dedicated service detail routes) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300 border-b border-gold/20 pb-2">
              Key Vedic Ceremonies
            </h4>
            <ul className="space-y-2 text-xs">
              {popularPujas.map((puja) => (
                <li key={puja.id}>
                  <Link
                    to={`/services/${puja.id}`}
                    className="text-stone-300 hover:text-saffron transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-saffron text-[10px]">✔</span>
                    <span>{puja.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Maps Link */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-amber-300 border-b border-gold/20 pb-2">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-200 transition-colors underline decoration-gold/40"
                >
                  {siteConfig.address}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-saffron flex-shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber-200 transition-colors">
                  {siteConfig.displayPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  WhatsApp: +{siteConfig.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-saffron flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-200 transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={siteConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg border border-gold/30 transition-colors w-fit"
              >
                <span>View on Google Maps</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>

              <Link
                to="/contact"
                className="text-xs text-saffron hover:text-amber-300 font-semibold"
              >
                Book a Consultation →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div>
            © 2026 Prakash Purohit. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-stone-400">
              Preserving Vedic Sanatana Dharma with Sanctity
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-saffron text-amber-200 hover:text-white transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
