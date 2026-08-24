import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, Phone } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { pricingPackages } from '../data/pricingData';
import { siteConfig } from '../data/siteConfig';

export const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Puja Services Pricing & Dakshina"
        subtitle="Transparent Vedic Dakshina and package estimates conducted with devotion and integrity"
        badge="Transparent Pricing"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Note on Dakshina */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-gold/30 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-spiritual-dark font-medium">
              ✦ <strong>Vedic Principle:</strong> Dakshina values are transparent estimates for priest seva and samagri guidance. Custom arrangements can be tailored for every family requirement.
            </p>
          </div>

          {/* Pricing Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pricingPackages.map((pkg) => {
              const isHighlighted = pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                    isHighlighted
                      ? 'bg-gradient-to-b from-white via-cream-50 to-amber-50/50 border-2 border-saffron shadow-xl shadow-saffron/10 lg:-translate-y-2'
                      : 'bg-white border border-gold/40 shadow-divine-card hover:border-gold-600 hover:shadow-gold-glow'
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className={`inline-block px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs ${
                          isHighlighted
                            ? 'bg-saffron text-white border border-amber-300'
                            : 'bg-cream-100 text-spiritual-dark border border-gold/40'
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  )}

                  <div>
                    {/* Title & Description */}
                    <div className="mt-2 space-y-2">
                      <h3 className="font-serif text-xl font-bold text-spiritual-dark">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-spiritual-muted leading-relaxed">
                        {pkg.shortDescription}
                      </p>
                    </div>

                    {/* Price Placeholder */}
                    <div className="my-5 p-4 rounded-2xl bg-cream-50/80 border border-gold/30 text-center">
                      <span className="text-[11px] uppercase tracking-wider text-spiritual-muted block">
                        {pkg.priceLabel}
                      </span>
                      <div className="font-serif text-2xl sm:text-3xl font-bold text-saffron mt-0.5">
                        {pkg.priceAmount}
                      </div>
                      <span className="text-[11px] text-stone-500 block mt-0.5">
                        Approx. {pkg.duration}
                      </span>
                    </div>

                    {/* Inclusions List */}
                    <div className="space-y-2.5 pt-2 mb-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-spiritual-dark">
                        What's Included:
                      </p>
                      <ul className="space-y-2 text-xs text-spiritual-medium">
                        {pkg.inclusions.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="mt-0.5 w-3.5 h-3.5 rounded-full bg-saffron-50 border border-saffron-300 flex items-center justify-center flex-shrink-0">
                              <Check className="w-2.5 h-2.5 text-saffron" />
                            </div>
                            <span>{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Different Buttons with distinct routes & query parameters */}
                  <div className="pt-4 border-t border-gold/20 flex flex-col gap-2">
                    {/* Book Now Button */}
                    <Link
                      to={`/contact?service=${encodeURIComponent(pkg.name)}`}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                        isHighlighted
                          ? 'bg-saffron hover:bg-saffron-600 text-white shadow-md hover:shadow-saffron-glow'
                          : 'bg-cream-100 hover:bg-saffron hover:text-white text-spiritual-dark border border-gold/40'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Now</span>
                    </Link>

                    {/* Ask For Pricing Button */}
                    <Link
                      to={`/contact?service=${encodeURIComponent(pkg.name)}`}
                      className="text-center text-xs text-saffron hover:underline font-medium py-1"
                    >
                      Ask For Detailed Quote →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Puja Notice Box */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cream-100 via-amber-50 to-cream-100 border border-gold/50 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-serif text-lg sm:text-xl font-bold text-spiritual-dark">
                Have Specific Gotra, Temple or Custom Vedic Requirements?
              </h4>
              <p className="text-xs sm:text-sm text-spiritual-muted max-w-2xl">
                We arrange multi-day anushthanas, yagyas, temple archana, and remote worldwide e-pujas with live sankalpam via high-definition video stream.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-gold/40 hover:border-saffron text-spiritual-dark text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <Phone className="w-4 h-4 text-saffron" />
                <span>Call Acharya Ji</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-saffron-glow transition-all"
              >
                Custom Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
