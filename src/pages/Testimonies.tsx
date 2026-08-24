import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquarePlus } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { SacredDivider } from '../components/SacredDivider';
import { testimonialsData } from '../data/testimonialsData';

export const Testimonies: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="Blessings From Our Devotees"
        subtitle="Heartfelt experiences and blessings from families who performed Vedic Pujas with Acharya Surya Prakash Purohit"
        badge="Devotee Feedback"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
      />

      {/* Main Content Area */}
      <section className="py-16 sm:py-20 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured Testimonial Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 sm:p-12 rounded-3xl bg-white border-2 border-gold/40 shadow-xl overflow-hidden">
              <div className="absolute top-6 right-8 text-gold/20">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              {/* Star Rating & Puja Tag */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-bold uppercase tracking-wider text-saffron bg-saffron-50 px-2.5 py-0.5 rounded-full border border-saffron-200">
                  {current.pujaPerformed}
                </span>
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-xl sm:text-2xl text-spiritual-dark italic leading-relaxed mb-8">
                "{current.content}"
              </blockquote>

              {/* Devotee Info & Carousel Navigation Buttons */}
              <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-gold/20">
                <div className="flex items-center gap-4">
                  {current.avatar && (
                    <img
                      src={current.avatar}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-gold/50 shadow-sm"
                    />
                  )}
                  <div>
                    <h4 className="font-serif font-bold text-spiritual-dark text-base sm:text-lg">
                      {current.name}
                    </h4>
                    <p className="text-xs text-spiritual-muted">
                      {current.location} • {current.date}
                    </p>
                  </div>
                </div>

                {/* Next & Previous Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-cream-50 hover:bg-saffron hover:text-white text-spiritual-dark border border-gold/40 transition-all hover:scale-105 shadow-xs"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-cream-50 hover:bg-saffron hover:text-white text-spiritual-dark border border-gold/40 transition-all hover:scale-105 shadow-xs"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-8 bg-saffron' : 'w-2 bg-gold/40 hover:bg-gold'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <SacredDivider symbol="lotus" />

          {/* Grid of All Devotee Reviews */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-spiritual-dark">
                All Devotee Reviews
              </h2>
              <p className="text-xs sm:text-sm text-spiritual-muted mt-1">
                Authentic testimonials from ceremonies performed in homes, temples, and commercial spaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonialsData.map((review) => (
                <div
                  key={review.id}
                  className="p-6 rounded-2xl bg-white border border-gold/30 shadow-divine-card hover:border-gold-600 hover:shadow-gold-glow transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-0.5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-saffron bg-saffron-50 px-2 py-0.5 rounded-md border border-saffron-200">
                        {review.pujaPerformed}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-spiritual-dark italic leading-relaxed">
                      "{review.content}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-gold/15">
                    {review.avatar && (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover border border-gold/40"
                      />
                    )}
                    <div>
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-spiritual-dark">
                        {review.name}
                      </h4>
                      <p className="text-[11px] text-spiritual-muted">
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Share Your Experience Call To Action Button (Navigates to /contact) */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-cream-100 via-amber-50 to-cream-100 border border-gold/50 text-center space-y-4 max-w-2xl mx-auto shadow-sm">
            <h3 className="font-serif text-2xl font-bold text-spiritual-dark">
              Have You Experienced a Puja with Acharya Ji?
            </h3>
            <p className="text-xs sm:text-sm text-spiritual-muted max-w-md mx-auto leading-relaxed">
              We would be honored to receive your kind blessings, feedback, and memorable experiences from your family ceremony.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-sm font-semibold shadow-md hover:shadow-saffron-glow transition-all hover:scale-105"
              >
                <MessageSquarePlus className="w-4 h-4" />
                <span>Share Your Experience</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
