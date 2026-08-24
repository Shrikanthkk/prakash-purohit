import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles, Navigation, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageHero } from '../components/PageHero';
import { siteConfig } from '../data/siteConfig';
import { servicesData } from '../data/servicesData';

export const Contact: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const requestedServiceParam = searchParams.get('service') || '';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState('General Vedic Inquiry');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-select service from URL parameter
  useEffect(() => {
    if (requestedServiceParam) {
      // Find matching service by id or title
      const found = servicesData.find(
        (s) =>
          s.id.toLowerCase() === requestedServiceParam.toLowerCase() ||
          s.title.toLowerCase() === requestedServiceParam.toLowerCase()
      );
      if (found) {
        setSelectedService(found.title);
      } else {
        setSelectedService(requestedServiceParam);
      }
    }
  }, [requestedServiceParam]);

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!name.trim()) {
      errs.name = 'Please enter your full name.';
    } else if (name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    // Indian Phone format validation: 10 digits with optional +91, 0, or space/hyphen
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-]/g, '');
    if (!phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!phoneRegex.test(cleanPhone)) {
      errs.phone = 'Please enter a valid 10-digit Indian phone number (e.g. 9876543210).';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!message.trim()) {
      errs.message = 'Please provide details about the puja, preferred date or inquiry.';
    } else if (message.trim().length < 5) {
      errs.message = 'Please enter at least 5 characters for your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#E86014', '#D4AF37', '#FFA500'],
      });
    }, 450);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `*Namaste Acharya Surya Prakash Purohit ji,*\n\n` +
      `I am reaching out regarding Vedic Puja Seva.\n` +
      `👤 *Name:* ${name || 'Devotee'}\n` +
      `📞 *Phone:* ${phone || 'Not provided'}\n` +
      `✉️ *Email:* ${email || 'Not provided'}\n` +
      `🪔 *Selected Service:* ${selectedService}\n` +
      `📝 *Message / Request:* ${message || 'Please guide me with the ritual details and auspicious Muhurat.'}`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Contact Prakash Purohit"
        subtitle="Let us help you arrange your sacred ceremony."
        badge="Direct Seva Desk"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      {/* Main Contact Section */}
      <section className="py-16 sm:py-20 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Information & Action Buttons */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-gold/40 shadow-divine-card space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-widest">
                    <span>✦ Direct Priest Contact</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-dark">
                    {siteConfig.brandName}
                  </h2>
                  <p className="text-xs sm:text-sm text-spiritual-muted">
                    {siteConfig.fullName} — Vedic Astrologer & Chief Purohit
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-gold/20 text-sm">
                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-saffron-50 text-saffron border border-saffron-200 flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-spiritual-muted block">Direct Telephone</span>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="font-medium text-spiritual-dark hover:text-saffron transition-colors"
                      >
                        {siteConfig.displayPhone}
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-spiritual-muted block">WhatsApp Seva Desk</span>
                      <a
                        href={`https://wa.me/${siteConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-spiritual-dark hover:text-emerald-600 transition-colors"
                      >
                        +{siteConfig.whatsappNumber} (Instant Chat)
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-gold-50 text-gold-dark border border-gold/30 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-spiritual-muted block">Email Address</span>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-medium text-spiritual-dark hover:text-saffron transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cream-200 text-spiritual-dark border border-gold/30 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-spiritual-muted block">Ashram Location</span>
                      <p className="font-medium text-spiritual-dark">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-spiritual-muted block">Consultation Timings</span>
                      <p className="font-medium text-spiritual-dark">
                        {siteConfig.timings}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Explicit Action Buttons as required: Call Now, WhatsApp, Get Directions */}
                <div className="pt-4 border-t border-gold/20 flex flex-col gap-2.5">
                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={`https://wa.me/${siteConfig.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-cream-50 text-spiritual-dark text-xs sm:text-sm font-semibold border border-gold/40 hover:border-saffron transition-all shadow-2xs"
                  >
                    <Navigation className="w-4 h-4 text-saffron" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form with Selected Service & Validation */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 md:p-10 rounded-3xl glass-card border-2 border-gold/40 shadow-xl relative overflow-hidden">
                <div className="space-y-1 mb-6">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-saffron">
                    <Sparkles className="w-4 h-4 text-saffron" />
                    <span>Sacred Ceremony Enquiry</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-spiritual-dark">
                    Send Us Your Puja Requirements
                  </h3>
                  <p className="text-xs sm:text-sm text-spiritual-muted">
                    We calculate auspicious Muhurats and provide complete samagri guidance.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-in fade-in">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif text-xl font-bold text-emerald-900">
                      Enquiry Successfully Sent!
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Namaste <strong>{name}</strong>! Acharya Surya Prakash Purohit has received your inquiry for <em>{selectedService}</em> and will contact you via <strong>{phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setPhone('');
                        setEmail('');
                        setMessage('');
                        setErrors({});
                      }}
                      className="mt-2 px-6 py-2 rounded-xl bg-saffron text-white text-xs font-semibold hover:bg-saffron-600"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    {/* Devotee Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-dark mb-1">
                          Full Name <span className="text-saffron">*</span>
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Ramesh Sharma"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-spiritual-dark text-sm focus:outline-none focus:ring-2 ${
                            errors.name ? 'border-red-400 focus:ring-red-300' : 'border-gold/40 focus:ring-saffron/40'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.name}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-dark mb-1">
                          Phone Number <span className="text-saffron">*</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit Indian number"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-spiritual-dark text-sm focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-400 focus:ring-red-300' : 'border-gold/40 focus:ring-saffron/40'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Email & Selected Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-dark mb-1">
                          Email Address <span className="text-saffron">*</span>
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-spiritual-dark text-sm focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-400 focus:ring-red-300' : 'border-gold/40 focus:ring-saffron/40'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-dark mb-1">
                          Selected Service
                        </label>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl bg-white/90 border border-gold/40 text-spiritual-dark text-sm focus:outline-none focus:ring-2 focus:ring-saffron/40 font-medium"
                        >
                          <option value="General Vedic Inquiry">General Vedic Inquiry</option>
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title} ({s.category})
                            </option>
                          ))}
                          <option value="Custom Griha Puja Package">Custom Griha Puja Package</option>
                          <option value="Vedic Homa Package">Vedic Homa Package</option>
                          <option value="Complete Gruhapravesam Package">Complete Gruhapravesam Package</option>
                          <option value="Dosha Shanti Package">Dosha Shanti Package</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-spiritual-dark mb-1">
                        Message / Preferred Dates & Venue <span className="text-saffron">*</span>
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Please share tentative dates, your city/locality, Gotra or any specific ritual requests..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-white/90 border text-spiritual-dark text-sm focus:outline-none focus:ring-2 ${
                          errors.message ? 'border-red-400 focus:ring-red-300' : 'border-gold/40 focus:ring-saffron/40'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-[11px] text-red-600 mt-1 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button: Send Enquiry & WhatsApp alternative */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-saffron to-saffron-600 hover:from-saffron-light hover:to-saffron text-white text-sm font-semibold shadow-md hover:shadow-saffron-glow transition-all hover:scale-[1.01] active:scale-[0.98] disabled:opacity-75"
                      >
                        <Send className="w-4 h-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppRedirect}
                        className="inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold shadow-md transition-all hover:scale-[1.01]"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send to WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
