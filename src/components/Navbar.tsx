import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Flame,
  Home as HomeIcon,
  BookOpen,
  Sparkles,
  Compass,
  Car,
  Building2,
  Calendar,
  ShieldAlert,
  Sun,
  ShieldCheck,
  Heart,
  Plus,
  Minus
} from 'lucide-react';
import logoSvg from '../assets/logo.svg';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services', isServices: true },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonies', path: '/testimonies' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const megaMenuCategories = [
    {
      title: 'Puja & Ceremonies',
      icon: HomeIcon,
      accent: 'text-saffron',
      bgAccent: 'bg-saffron-50',
      items: [
        { name: 'New Gruhapravesam', href: '/services/gruhapravesam', icon: HomeIcon },
        { name: 'Satyanarayan Puja & Katha', href: '/services/satyanarayan-puja', icon: Sparkles },
        { name: 'Namakarana Ceremony', href: '/services/namakarana', icon: Heart },
        { name: 'Annaprasana Puja', href: '/services/annaprasana', icon: Sparkles },
        { name: 'Akshara Abhyasa', href: '/services/akshara-abhyasa', icon: BookOpen },
        { name: 'New Vehicle Pooja', href: '/services/vehicle-puja', icon: Car },
        { name: 'Office & Business Pooja', href: '/services/office-puja', icon: Building2 },
      ],
    },
    {
      title: 'Dosha & Special Rituals',
      icon: Compass,
      accent: 'text-amber-600',
      bgAccent: 'bg-amber-50',
      items: [
        { name: 'Navgrah Dosha Nivaaran', href: '/services/navgrah-shanti', icon: Sun },
        { name: 'Kuja Dosha Shanti', href: '/services/kuja-dosha', icon: ShieldAlert },
        { name: 'Kaal Sarp Dosha Shanti', href: '/services/kaalsarp-shanti', icon: ShieldCheck },
        { name: 'Jathaka Kundali Guidance', href: '/services/jataka-kundali', icon: Compass },
        { name: 'Kadali Vivah', href: '/services/kadali-vivah', icon: Heart },
        { name: 'Kumbha Vivah Remedy', href: '/services/kumbha-vivah', icon: Sparkles },
        { name: 'Arka Vivah Remedy', href: '/services/arka-vivah', icon: Sun },
      ],
    },
    {
      title: 'Sacred Homa',
      icon: Flame,
      accent: 'text-orange-600',
      bgAccent: 'bg-orange-50',
      items: [
        { name: 'Maha Ganapati Homa', href: '/services/ganapati-homa', icon: Flame },
        { name: 'Sudarshan Homa', href: '/services/sudarshan-homa', icon: Flame },
        { name: 'Maha Chandi Homa', href: '/services/chandi-homa', icon: Flame },
        { name: 'Pratyangira Devi Homa', href: '/services/pratyangira-homa', icon: Flame },
        { name: 'Sri Rudra Homa', href: '/services/rudra-homa', icon: Flame },
        { name: 'Maha Mrityunjaya Homa', href: '/services/mrityunjaya-homa', icon: Flame },
      ],
    },
    {
      title: 'Japa & Guidance',
      icon: BookOpen,
      accent: 'text-gold-dark',
      bgAccent: 'bg-gold-50',
      items: [
        { name: 'Vedic Mantra Japa', href: '/services/japa', icon: BookOpen },
        { name: 'Special Japa & Anushthana', href: '/services/japa', icon: Sparkles },
      ],
      spotlight: {
        title: 'Authentic Vedic Seva',
        desc: 'Conducted in strict adherence to Rigveda & Yajurveda with family sankalpam.',
        linkText: 'View All 22+ Services',
        linkHref: '/services',
      },
    },
  ];

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className="fixed top-2 sm:top-3.5 left-0 right-0 z-50 px-2 sm:px-4 lg:px-6 transition-all duration-500 pointer-events-none">
      <div className="max-w-[98%] sm:max-w-[95%] lg:max-w-6xl mx-auto pointer-events-auto relative">
        {/* Floating Rounded Luxury Frosted Glass Capsule (+15% scale) */}
        <div
          className={`animate-nav-entrance rounded-[24px] sm:rounded-full transition-all duration-500 flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2 ${
            isScrolled ? 'luxury-glass-nav-scrolled' : 'luxury-glass-nav'
          }`}
        >
          {/* LEFT: Official SURYAPRAKASH PUROHIT Logo (+15% scale) */}
          <Link
            to="/"
            className="flex items-center px-1.5 py-0.5 rounded-full transition-all duration-300 hover:scale-[1.02] flex-shrink-0 group"
            aria-label="Suryaprakash Purohit Home"
          >
            <img
              src={logoSvg}
              alt="Suryaprakash Purohit"
              className="h-[36px] sm:h-[40px] lg:h-[45px] w-auto object-contain transition-all duration-300 drop-shadow-xs"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.endsWith('/logo.svg')) {
                  target.src = '/logo.svg';
                }
              }}
            />
          </Link>

          {/* CENTER: Navigation Links (+15% scale) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 px-1">
            {navLinks.map((link) => {
              if (link.isServices) {
                return (
                  <div
                    key={link.path}
                    className="relative py-0.5"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <NavLink
                      to="/services"
                      className={`relative px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-serif font-semibold tracking-normal transition-all duration-200 rounded-full flex items-center gap-1 ${
                        isServicesActive
                          ? 'glass-pill-active text-[#A33D02] border border-[#E86014]/40 shadow-xs'
                          : 'text-[#3A2218] hover:text-[#A33D02] glass-pill-hover'
                      }`}
                    >
                      <span className="relative z-10 select-none">Services</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          servicesDropdownOpen ? 'rotate-180 text-saffron' : 'text-[#6B5040]'
                        }`}
                      />
                      {isServicesActive && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-saffron to-gold rounded-full" />
                      )}
                    </NavLink>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 text-[13px] xl:text-[13.5px] font-serif font-semibold tracking-normal transition-all duration-200 rounded-full flex items-center justify-center ${
                      isActive
                        ? 'glass-pill-active text-[#A33D02] border border-[#E86014]/40 shadow-xs'
                        : 'text-[#3A2218] hover:text-[#A33D02] glass-pill-hover'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative z-10 select-none">
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-gradient-to-r from-saffron to-gold rounded-full" />
                      )}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* RIGHT: Orange-to-Gold Gradient Glass "Book a Puja" Pill Button (+15% scale) */}
          <div className="hidden sm:flex items-center">
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-1.5 px-4.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#E86014] via-[#F48C06] to-[#D4AF37] hover:from-[#FF7A29] hover:to-[#EA580C] text-white text-[12px] font-serif font-bold tracking-wide shadow-[0_3px_12px_rgba(232,96,20,0.3)] hover:shadow-[0_5px_18px_rgba(232,96,20,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-200/40 group overflow-hidden"
            >
              <svg className="w-3.5 h-3.5 fill-amber-100 group-hover:scale-110 transition-transform relative z-10" viewBox="0 0 24 24">
                <path d="M12 2c1.1 0 2 .9 2 2 0 1.3-1.4 3.2-2 4-.6-.8-2-2.7-2-4 0-1.1.9-2 2-2zm-7 13c0-3.9 3.1-7 7-7s7 3.1 7 7c0 .5-.4 1-1 1H6c-.6 0-1-.5-1-1zm3 4h8v2H8v-2z" />
              </svg>
              <span className="relative z-10">Book a Puja</span>
            </Link>
          </div>

          {/* MOBILE: Small Controls */}
          <div className="flex items-center gap-1.5 lg:hidden pr-0.5">
            <Link
              to="/contact"
              className="px-3 py-1 rounded-full bg-gradient-to-r from-[#E86014] to-[#F48C06] text-white text-[11px] font-serif font-bold shadow-xs sm:hidden"
            >
              Book
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/70 hover:bg-white text-[#2B1810] hover:text-saffron border border-gold/40 shadow-xs backdrop-blur-md transition-all active:scale-95 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP SERVICES 4-COLUMN GLASS MEGA MENU (Hover Activated)               */}
        {/* ========================================================================= */}
        {servicesDropdownOpen && (
          <div
            className="hidden lg:block absolute top-[92%] left-0 right-0 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="rounded-[24px] bg-gradient-to-br from-white/95 via-[#FFFDF9]/92 to-[#FFF8EE]/95 backdrop-blur-2xl border border-gold/40 shadow-[0_20px_50px_-10px_rgba(184,69,3,0.2),0_8px_20px_-2px_rgba(212,175,55,0.25)] p-6 relative overflow-hidden">
              <div className="grid grid-cols-4 gap-5 relative z-10">
                {megaMenuCategories.map((col, cIdx) => {
                  const ColIcon = col.icon;
                  return (
                    <div key={cIdx} className="space-y-2.5">
                      <div className="flex items-center gap-1.5 pb-2 border-b border-gold/25">
                        <div className={`p-1 rounded-md ${col.bgAccent} ${col.accent} border border-gold/20 shadow-2xs`}>
                          <ColIcon className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-serif text-[12.5px] font-bold text-[#2B1810] tracking-wide uppercase">
                          {col.title}
                        </h4>
                      </div>

                      <ul className="space-y-0.5">
                        {col.items.map((item, iIdx) => {
                          const ItemIcon = item.icon;
                          return (
                            <li key={iIdx}>
                              <Link
                                to={item.href}
                                className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[11.5px] font-serif font-medium text-[#3A2218] hover:text-[#E86014] hover:bg-white/90 hover:shadow-2xs border border-transparent hover:border-gold/25 transition-all duration-150"
                              >
                                <div className="flex items-center gap-1.5 truncate">
                                  <ItemIcon className="w-3 h-3 text-gold-dark group-hover:text-saffron flex-shrink-0" />
                                  <span className="truncate">{item.name}</span>
                                </div>
                                <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-saffron flex-shrink-0" />
                              </Link>
                            </li>
                          );
                        })}
                      </ul>

                      {col.spotlight && (
                        <div className="mt-3 p-3 rounded-xl bg-gradient-to-br from-amber-50/90 to-cream-100/90 border border-gold/30 shadow-2xs space-y-1.5">
                          <div className="flex items-center gap-1 text-[11.5px] font-serif font-bold text-saffron">
                            <Sparkles className="w-3 h-3" />
                            <span>{col.spotlight.title}</span>
                          </div>
                          <p className="text-[10.5px] text-[#5A3828] font-normal leading-relaxed">
                            {col.spotlight.desc}
                          </p>
                          <Link
                            to={col.spotlight.linkHref}
                            className="inline-flex items-center gap-0.5 text-[10.5px] font-serif font-bold text-saffron hover:text-saffron-dark transition-colors uppercase tracking-wider"
                          >
                            <span>{col.spotlight.linkText}</span>
                            <ChevronRight className="w-2.5 h-2.5" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-3 border-t border-gold/25 flex items-center justify-between relative z-10 text-[11.5px] font-serif">
                <div className="flex items-center gap-1.5 text-[#4A2D17]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Personalized Muhurat & Samagri Checklists provided with every ceremony</span>
                </div>

                <div className="flex items-center gap-3">
                  <Link
                    to="/contact"
                    className="text-saffron hover:underline font-bold"
                  >
                    Custom Consultation →
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-saffron hover:bg-saffron-600 text-white font-bold shadow-xs hover:shadow-saffron-glow transition-all"
                  >
                    <span>View All Services</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MOBILE NAVIGATION DRAWER */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-3.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-gold/40 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-0.5">
              {navLinks.map((link) => {
                if (link.isServices) {
                  return (
                    <div key={link.path} className="border-b border-gold/20 pb-1">
                      <div className="flex items-center justify-between px-3 py-2 rounded-xl">
                        <Link
                          to="/services"
                          className={`text-xs font-serif font-bold ${
                            isServicesActive ? 'text-saffron font-bold' : 'text-[#2B1810]'
                          }`}
                        >
                          Services
                        </Link>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1 rounded-md bg-cream-100 text-saffron border border-gold/30"
                          aria-label="Toggle mobile services accordion"
                        >
                          {mobileServicesOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="pl-3 pr-2 py-2 space-y-2 bg-cream-50/90 rounded-lg mt-0.5 border border-gold/20">
                          {megaMenuCategories.map((cat, cIdx) => (
                            <div key={cIdx} className="space-y-0.5">
                              <span className="text-[10.5px] font-serif font-bold uppercase tracking-wider text-saffron block pt-0.5">
                                {cat.title}
                              </span>
                              <div className="grid grid-cols-1 gap-0.5">
                                {cat.items.map((item, iIdx) => (
                                  <Link
                                    key={iIdx}
                                    to={item.href}
                                    className="px-2 py-1 text-[11px] text-[#3A2218] hover:text-saffron flex items-center gap-1 font-serif"
                                  >
                                    <ChevronRight className="w-2.5 h-2.5 text-gold-dark" />
                                    <span>{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          <div className="pt-1.5 border-t border-gold/20">
                            <Link
                              to="/services"
                              className="text-[11px] font-bold text-saffron flex items-center justify-between px-2 py-0.5"
                            >
                              <span>View All 22+ Services Catalogue</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-xl text-xs font-serif font-medium transition-all flex items-center justify-between ${
                        isActive
                          ? 'glass-pill-active text-[#A33D02] font-bold'
                          : 'text-[#2B1810] hover:bg-white/80 hover:text-saffron'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span>{link.label}</span>
                        {isActive && <span className="text-saffron text-[10px] font-bold">✦</span>}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>

            <div className="mt-3 pt-2.5 border-t border-gold/20">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-full bg-gradient-to-r from-[#E86014] via-[#F48C06] to-[#D4AF37] text-white text-xs font-serif font-bold shadow-md text-center"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Sacred Puja</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
