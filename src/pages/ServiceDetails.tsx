import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, Sparkles, CheckCircle2, HelpCircle, ArrowLeft, PhoneCall, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { SacredDivider } from '../components/SacredDivider';
import { siteConfig } from '../data/siteConfig';

export const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find service with support for exact ID, partial slug aliases, and normalized keys
  const service = servicesData.find((s) => {
    if (!id) return false;
    const normalizedParam = id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedId = s.id.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedTitle = s.title.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    return (
      s.id === id ||
      normalizedId === normalizedParam ||
      normalizedTitle.includes(normalizedParam) ||
      normalizedParam.includes(normalizedId)
    );
  });

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen pt-24 sm:pt-28 pb-16 bg-[#FFFDF9]">
      {/* Top Breadcrumb Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center gap-2 text-xs text-spiritual-muted">
          <Link to="/" className="hover:text-saffron transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-saffron transition-colors">Services</Link>
          <span>/</span>
          <span className="text-spiritual-dark font-semibold truncate">{service.title}</span>
        </div>
      </div>

      {/* Main Service Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 space-y-12">
        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Large Image Frame with Gold Accents */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 shadow-2xl bg-cream-200 aspect-[4/3] group">
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full object-cover ${service.imagePosition || 'object-top'} transform transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark/80 via-spiritual-dark/20 to-transparent" />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/95 text-saffron border border-gold/40 shadow-xs backdrop-blur-xs">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{service.category}</span>
                </span>
              </div>

              {/* Duration & Price Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-semibold">
                <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20">
                  <Clock className="w-4 h-4 text-amber-300" />
                  <span>Duration: {service.duration}</span>
                </span>
                {service.priceNote && (
                  <span className="bg-spiritual-dark/90 text-amber-200 px-3 py-1 rounded-lg border border-gold/40">
                    {service.priceNote}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right: Service Overview & Action CTAs */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-saffron-50 border border-saffron-200 text-saffron text-xs font-semibold uppercase tracking-wider">
              <span>✦ Authentic Vedic Vidhi ✦</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spiritual-dark tracking-tight">
              {service.title}
            </h1>

            {/* Traditional Purpose Highlight */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border border-gold/40 text-spiritual-dark space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-saffron flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Traditional Shastric Purpose</span>
              </span>
              <p className="text-sm font-medium leading-relaxed">
                {service.traditionalPurpose}
              </p>
            </div>

            <p className="text-sm sm:text-base text-spiritual-muted leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Direct Booking & Inquiries Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
              <Link
                to={`/contact?service=${service.id}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-saffron to-saffron-600 hover:from-saffron-light hover:to-saffron text-white text-sm font-semibold shadow-md hover:shadow-saffron-glow transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-amber-200" />
                <span>Book This Service</span>
              </Link>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-white hover:bg-cream-50 text-spiritual-dark text-sm font-semibold border border-gold/40 hover:border-saffron transition-all"
              >
                <PhoneCall className="w-4 h-4 text-saffron" />
                <span>Call For Muhurat</span>
              </a>
            </div>
          </div>
        </div>

        <SacredDivider symbol="om" />

        {/* What Is Included & Preparation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* What is Included */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-gold/30 shadow-divine-card space-y-4">
            <div className="flex items-center gap-2 text-spiritual-dark">
              <div className="p-2 rounded-xl bg-saffron-50 text-saffron">
                <BookOpen className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">
                What Is Included in the Vidhi
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-spiritual-muted">
              Conducted in exact adherence to Rigveda & Yajurveda guidelines with complete sankalpam.
            </p>
            <ul className="space-y-3 pt-2">
              {service.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-spiritual-medium">
                  <div className="mt-0.5 p-0.5 rounded-full bg-saffron text-white flex-shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Preparation Information */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-gold/30 shadow-divine-card space-y-4">
            <div className="flex items-center gap-2 text-spiritual-dark">
              <div className="p-2 rounded-xl bg-gold-50 text-gold-dark">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold">
                Preparation Guidelines For Devotees
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-spiritual-muted">
              Simple preparatory steps to ensure the ceremony proceeds smoothly.
            </p>
            <ul className="space-y-3 pt-2">
              {service.preparationInfo.map((prep, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-spiritual-medium">
                  <span className="w-2 h-2 rounded-full bg-gold-600 mt-1.5 flex-shrink-0" />
                  <span>{prep}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="p-6 sm:p-10 rounded-3xl bg-cream-50 border border-gold/40 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-dark">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-spiritual-muted">
                Common questions answered by Acharya Surya Prakash Purohit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gold/25 shadow-xs space-y-2">
                  <h3 className="font-serif text-sm sm:text-base font-bold text-spiritual-dark flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-saffron flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-spiritual-muted pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Navigation & CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-gold/30">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-spiritual-dark hover:text-saffron"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>

          <Link
            to={`/contact?service=${service.id}`}
            className="px-6 py-3 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-xs sm:text-sm font-semibold shadow-md hover:shadow-saffron-glow transition-all"
          >
            Proceed to Book {service.title} →
          </Link>
        </div>
      </div>
    </div>
  );
};
