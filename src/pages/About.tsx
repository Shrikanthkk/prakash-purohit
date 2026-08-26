import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Heart, Users, CheckCircle2, PhoneCall, MapPin, Navigation, Clock, Phone, ExternalLink, ShieldCheck } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SacredDivider } from '../components/SacredDivider';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* 1. Page Hero Banner */}
      <PageHero
        title="About Prakash Purohit"
        subtitle="Tradition, Devotion & Spiritual Service"
        badge="Vedic Purohit Heritage"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      {/* 2. Main Two-Column About Section */}
      <section className="pt-8 sm:pt-10 pb-16 sm:pb-24 bg-[#FFFDF9] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Large Image Placeholders with Gold Borders & Hover Zoom */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Primary Priest Frame */}
                <div className="relative group rounded-3xl p-3 bg-gradient-to-b from-gold/30 via-saffron/20 to-gold/30 border-2 border-gold/60 shadow-2xl overflow-hidden backdrop-blur-sm">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-cream-200">
                    <img
                      src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=900&auto=format&fit=crop"
                      alt="Acharya Surya Prakash Purohit"
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="text-white">
                        <p className="font-serif font-semibold text-lg text-amber-200">Acharya Surya Prakash Purohit</p>
                        <p className="text-xs text-stone-200">Head Vedic Priest & Shastra Scholar</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Temple Corner Motifs */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-gold pointer-events-none" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-gold pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-gold pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-gold pointer-events-none" />
                </div>

                {/* Secondary Smaller Decorative Frame */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-44 sm:w-56 p-2 rounded-2xl bg-white border-2 border-gold/60 shadow-xl group overflow-hidden hidden sm:block">
                  <div className="relative rounded-xl overflow-hidden aspect-square bg-cream-200">
                    <img
                      src="https://images.unsplash.com/photo-1567591974584-f1832b457179?q=80&w=400&auto=format&fit=crop"
                      alt="Sacred Vedic Fire Havan"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-2.5">
                      <span className="text-[11px] font-semibold text-amber-200">Vedic Havan Seva</span>
                    </div>
                  </div>
                </div>

                {/* Experience Badge Pill */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-4 rounded-2xl bg-gradient-to-br from-saffron to-saffron-700 text-white shadow-lg border border-amber-300/40 text-center animate-float-slow">
                  <div className="font-serif text-2xl sm:text-3xl font-bold leading-none">{siteConfig.experienceYears}</div>
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-amber-100 mt-1">Years Seva</div>
                </div>
              </div>
            </div>

            {/* Right Column: Required Business Narrative & Heritage Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Primary Required Content Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-cream-50 to-amber-50/40 border border-gold/40 shadow-divine-card">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 text-6xl text-gold/15 font-serif select-none pointer-events-none">
                  ॐ
                </div>
                <div className="flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-widest text-saffron">
                  <Award className="w-4 h-4 text-saffron" />
                  <span>Our Sacred Commitment</span>
                </div>
                {/* Exact required content from user prompt */}
                <blockquote className="font-cormorant text-xl sm:text-2xl text-spiritual-dark italic leading-relaxed font-medium">
                  "{siteConfig.exactAboutText}"
                </blockquote>
                <div className="mt-4 pt-4 border-t border-gold/25 flex items-center justify-between">
                  <div>
                    <div className="font-serif font-bold text-spiritual-dark text-base">
                      {siteConfig.fullName}
                    </div>
                    <div className="text-xs text-spiritual-muted">
                      Head Vedic Acharya & Shastra Practitioner
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-saffron-50 border border-gold/40 flex items-center justify-center text-saffron font-serif font-bold text-xl shadow-inner">
                    ॐ
                  </div>
                </div>
              </div>

              {/* Guiding Principles */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-spiritual-dark">
                  Pillars of Our Vedic Seva
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold/20 shadow-xs hover:border-gold/50 transition-colors">
                    <div className="p-2 rounded-lg bg-saffron-50 text-saffron">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-spiritual-dark">Authentic Shastric Vidhi</h4>
                      <p className="text-xs text-spiritual-muted mt-0.5">Strict adherence to Vedic mantras and proper pronunciation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold/20 shadow-xs hover:border-gold/50 transition-colors">
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-dark">
                      <Heart className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-spiritual-dark">Devotional Guidance</h4>
                      <p className="text-xs text-spiritual-muted mt-0.5">Every step explained with meaning so devotees participate heartily.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold/20 shadow-xs hover:border-gold/50 transition-colors">
                    <div className="p-2 rounded-lg bg-saffron-50 text-saffron">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-spiritual-dark">Multilingual Conduct</h4>
                      <p className="text-xs text-spiritual-muted mt-0.5">Rituals conducted fluently in Hindi, Kannada, Telugu & English.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gold/20 shadow-xs hover:border-gold/50 transition-colors">
                    <div className="p-2 rounded-lg bg-gold-50 text-gold-dark">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-spiritual-dark">Samagri & Muhurat Help</h4>
                      <p className="text-xs text-spiritual-muted mt-0.5">Complete advance item checklist and auspicious timing guidance.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-sm font-semibold shadow-md hover:shadow-saffron-glow transition-all hover:scale-[1.02]"
                >
                  Schedule a Consultation
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-cream-100 text-spiritual-dark text-sm font-semibold border border-gold/40 hover:border-saffron transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-saffron" />
                  <span>Call Acharya Ji Directly</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated Location Section */}
      <section className="py-16 sm:py-20 bg-cream-100/70 border-t border-gold/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron-50 border border-saffron-200 text-saffron text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>✦ Seva Mandiram ✦</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-spiritual-dark">
              Our Location
            </h2>
            <p className="mt-2 text-sm sm:text-base text-spiritual-muted">
              Conveniently located for in-person consultations, Muhurat calculation, and home visit arrangements.
            </p>
            <SacredDivider symbol="om" className="my-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Address Details */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-gold/40 shadow-divine-card">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-saffron text-xs font-bold uppercase tracking-widest mb-1">
                    <Navigation className="w-4 h-4" />
                    <span>Ashram & Office</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-spiritual-dark">
                    Surya Prakash Purohit Ashram
                  </h3>
                  <p className="text-sm text-spiritual-muted mt-1 leading-relaxed">
                    Bangalore, Karnataka, India
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-gold/20 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-saffron-50 text-saffron border border-saffron-200">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-spiritual-dark">
                        Operating Hours
                      </h4>
                      <p className="text-sm text-spiritual-medium font-medium mt-0.5">
                        {siteConfig.timings}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-gold-50 text-gold-dark border border-gold/30">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-spiritual-dark">
                        Contact Number
                      </h4>
                      <p className="text-sm text-spiritual-medium font-medium mt-0.5">
                        {siteConfig.displayPhone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-spiritual-dark">
                        Territory Served
                      </h4>
                      <p className="text-xs text-spiritual-muted mt-0.5 leading-relaxed">
                        All Bangalore localities & worldwide remote E-Puja live streams.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Get Directions & Google Maps Action Buttons */}
              <div className="pt-6 mt-6 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4 text-amber-200" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-cream-50 text-spiritual-dark text-xs sm:text-sm font-semibold border border-gold/40 transition-colors"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-saffron" />
                </a>
              </div>
            </div>

            {/* Embedded Map Frame */}
            <div className="lg:col-span-7 rounded-3xl overflow-hidden border-2 border-gold/40 shadow-xl bg-white relative min-h-[360px] flex flex-col">
              <iframe
                title="Prakash Purohit Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.8865390924!2d77.49085449080039!3d12.953959987723908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter saturate-[0.95]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
