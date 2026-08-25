import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Star, Quote } from 'lucide-react';
import { ParticleCanvas } from '../components/ParticleCanvas';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';
import { testimonialsData } from '../data/testimonialsData';

export const Home: React.FC = () => {
  const featuredServices = servicesData.slice(0, 3);
  const featuredReview = testimonialsData[0];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF5EC]">
      {/* 1. HERO SECTION WITH REFINED, SLEEK, SMALL TYPOGRAPHY */}
      <section className="relative min-h-[82vh] lg:min-h-[86vh] flex items-center justify-center pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-[#FCECD7] via-[#F8E2C2] to-[#F5D8B0]">
        {/* Right-Side Video Area */}
        <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[48%] xl:w-[46%] h-full overflow-hidden pointer-events-none z-0 flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-amber-400/20 blur-[90px] pointer-events-none" />

          <div
            className="w-full h-full relative"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.8) 22%, black 35%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.2) 8%, rgba(0,0,0,0.8) 22%, black 35%, black 88%, transparent 100%), linear-gradient(to bottom, transparent 0%, black 12%, black 85%, transparent 100%)',
              maskComposite: 'intersect',
              WebkitMaskComposite: 'destination-in',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-center transform scale-100"
              poster="/reference-hero.png"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
              <source src="/Woman_sitting_on_pink_lotus_202608241114.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Floating Golden Particles & Light Sparks */}
        <ParticleCanvas />

        {/* Hero Left Content Container */}
        <div className="relative z-20 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[50vh] sm:min-h-[55vh]">
          <div className="lg:col-span-7 xl:col-span-7 text-left space-y-3 sm:space-y-3.5 flex flex-col justify-center items-start">
            <div className="flex flex-col items-start gap-1.5 w-full">
              {/* Box 1: BEGIN YOUR */}
              <div className="w-fit inline-block bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-3.5 py-1 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <span className="block font-serif text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-[#4A2D17] uppercase">
                  BEGIN YOUR
                </span>
              </div>

              {/* Box 2: SACRED JOURNEY */}
              <div className="w-fit inline-block bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-4 py-1.5 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold tracking-tight uppercase leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#E86014] via-[#F48C06] to-[#D4AF37] drop-shadow-2xs m-0">
                  SACRED JOURNEY
                </h1>
              </div>

              {/* Box 3: WITH PRAKASH PUROHIT */}
              <div className="w-fit inline-block bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-3.5 py-1 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <span className="block font-serif text-sm sm:text-base md:text-lg font-bold tracking-tight text-[#2B1810] uppercase">
                  WITH PRAKASH PUROHIT
                </span>
              </div>

              {/* Box 4: Decorative Divider with Flower Icon */}
              <div className="w-fit inline-flex items-center gap-2 bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-3.5 py-1 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent via-gold to-gold" />
                <div className="flex items-center gap-1 text-saffron text-xs">
                  <span>✦</span>
                  <span className="text-sm">🪷</span>
                  <span>✦</span>
                </div>
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent via-gold to-gold" />
              </div>

              {/* Box 5: Subtitle Line 1 */}
              <div className="w-fit inline-block bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-3.5 py-1 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <span className="block text-[11px] sm:text-xs text-[#5A3828] font-normal leading-relaxed">
                  Authentic Hindu Puja Services, Vedic Rituals and Spiritual Ceremonies
                </span>
              </div>

              {/* Box 6: Subtitle Line 2 */}
              <div className="w-fit inline-block bg-[rgba(255,255,255,0.28)] backdrop-blur-[12px] px-3.5 py-1 rounded-[8px] border border-white/45 shadow-[0_4px_18px_rgba(80,45,10,0.08)]">
                <span className="block text-[11px] sm:text-xs text-[#5A3828] font-normal leading-relaxed">
                  performed with devotion, tradition and care.
                </span>
              </div>
            </div>

            {/* Hero Buttons */}
            <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-start gap-2.5">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#E86014] via-[#F97316] to-[#E86014] hover:from-[#FF7A29] hover:to-[#EA580C] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-saffron-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-300/40 group"
              >
                <svg className="w-3.5 h-3.5 fill-amber-200 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M12 2c1.1 0 2 .9 2 2 0 1.3-1.4 3.2-2 4-.6-.8-2-2.7-2-4 0-1.1.9-2 2-2zm-7 13c0-3.9 3.1-7 7-7s7 3.1 7 7c0 .5-.4 1-1 1H6c-.6 0-1-.5-1-1zm3 4h8v2H8v-2z" />
                </svg>
                <span>Book a Puja</span>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-5 py-2 sm:py-2.5 rounded-full bg-white/85 hover:bg-white text-[#2B1810] text-xs font-semibold border border-gold/40 hover:border-saffron shadow-2xs hover:shadow-xs backdrop-blur-xs transition-all duration-300 hover:scale-102 group"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-3 h-3 text-saffron group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CURVED DECORATIVE TRANSITION SECTION */}
      <section className="relative pt-10 pb-14 bg-white -mt-8 rounded-t-[36px] sm:rounded-t-[48px] border-t border-gold/30 shadow-lg z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading Group */}
          <div className="text-center max-w-xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-1 text-saffron text-[11px] font-semibold mb-0.5">
              <span className="text-xs">🪷</span>
              <span className="font-serif">Our Divine Services</span>
            </div>

            <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-[#2B1810] uppercase">
              TRADITIONAL RITUALS. DIVINE BLESSINGS.
            </h2>

            <div className="py-1.5 flex items-center justify-center gap-1.5">
              <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold bg-amber-50" />
              <div className="h-[1px] w-10 sm:w-14 bg-gradient-to-l from-transparent to-gold" />
            </div>
          </div>

          {/* Three Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mb-8">
            {/* Card 1: Vedic Puja */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-gold/30 shadow-2xs hover:shadow-gold-glow hover:border-saffron/60 transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] border border-gold/40 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <svg className="w-4 h-4 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M5.6 18.4L18.4 5.6" strokeDasharray="1 1" />
                  <circle cx="12" cy="12" r="3" fill="#E86014" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-sm font-bold text-[#2B1810]">
                  Vedic Puja
                </h3>
                <p className="text-[11px] text-[#6B5040] mt-0.5 leading-relaxed">
                  Traditional ceremonies performed with devotion and authenticity.
                </p>
              </div>
            </div>

            {/* Card 2: Homa & Havan */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-gold/30 shadow-2xs hover:shadow-gold-glow hover:border-saffron/60 transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] border border-gold/40 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <svg className="w-4 h-4 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 19h16M6 15h12M8 11h8" strokeLinecap="round" />
                  <path d="M12 3c-1.5 2-2 3.5-1 5 1 1.5 2.5 1.5 2 3-.5 1-2 1-2 1" stroke="#E86014" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-sm font-bold text-[#2B1810]">
                  Homa & Havan
                </h3>
                <p className="text-[11px] text-[#6B5040] mt-0.5 leading-relaxed">
                  Sacred fire rituals performed according to Vedic traditions.
                </p>
              </div>
            </div>

            {/* Card 3: Spiritual Guidance */}
            <div className="p-5 rounded-2xl bg-[#FFFDF9] border border-gold/30 shadow-2xs hover:shadow-gold-glow hover:border-saffron/60 transition-all duration-300 hover:-translate-y-0.5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF8EE] border border-gold/40 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <span className="font-serif text-base font-bold text-saffron leading-none select-none">
                  ॐ
                </span>
              </div>

              <div>
                <h3 className="font-serif text-sm font-bold text-[#2B1810]">
                  Spiritual Guidance
                </h3>
                <p className="text-[11px] text-[#6B5040] mt-0.5 leading-relaxed">
                  Traditional guidance for important religious ceremonies.
                </p>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-gradient-to-r from-saffron to-saffron-600 hover:from-saffron-light hover:to-saffron text-white text-xs font-semibold shadow-2xs hover:shadow-saffron-glow transition-all hover:scale-105"
            >
              <span>View All 22+ Sacred Services</span>
              <ArrowRight className="w-3 h-3 text-amber-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Catalogue Preview */}
      <section className="py-10 bg-[#FAF6EE] border-t border-gold/25">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2.5 mb-6">
            <div>
              <span className="text-[10.5px] font-bold uppercase tracking-widest text-saffron">
                ✦ Most Revered Ceremonies
              </span>
              <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#2B1810] mt-0.5">
                Featured Vedic Ceremonies
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-saffron hover:underline"
            >
              <span>Explore All Categories</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Devotee Blessing Quote Banner */}
      <section className="py-10 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="relative p-5 sm:p-6 rounded-2xl bg-[#FFFDF9] border border-gold/40 shadow-2xs text-center space-y-2.5">
            <Quote className="w-6 h-6 text-gold/30 mx-auto transform rotate-180" />
            <div className="flex justify-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="font-serif text-xs sm:text-sm text-[#2B1810] italic leading-relaxed">
              "{featuredReview.content}"
            </blockquote>
            <div>
              <div className="font-serif font-bold text-[#2B1810] text-xs sm:text-sm">
                {featuredReview.name}
              </div>
              <div className="text-[10px] text-spiritual-muted">
                {featuredReview.location} • {featuredReview.pujaPerformed}
              </div>
            </div>
            <div className="pt-0.5">
              <Link
                to="/testimonies"
                className="text-[10px] font-bold uppercase tracking-wider text-saffron hover:underline"
              >
                Read More Devotee Testimonies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Direct Call-To-Action Banner */}
      <section className="py-10 bg-gradient-to-r from-saffron-900 via-spiritual-dark to-saffron-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/10 text-amber-300 text-[10px] font-semibold">
            <span>✦ Plan Your Sacred Ceremony Today ✦</span>
          </div>
          <h2 className="font-serif text-xl sm:text-2xl font-bold text-cream-50 uppercase">
            Seek Divine Blessings For Your Home & Family
          </h2>
          <p className="text-[11px] sm:text-xs text-stone-300 max-w-lg mx-auto leading-relaxed">
            Contact Acharya Surya Prakash Purohit for auspicious date (Muhurat) guidance, customized samagri checklists, and authentic Vedic ritual services.
          </p>
          <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-saffron hover:bg-saffron-600 text-white text-xs font-semibold shadow-sm transition-transform hover:scale-105"
            >
              Book an Appointment
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              Learn More About Acharya Ji
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
