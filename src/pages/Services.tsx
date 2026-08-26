import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { servicesData, serviceCategories } from '../data/servicesData';

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory =
        selectedCategory === 'All' || service.category === selectedCategory;
      const matchesSearch =
        service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#FAF5ED]">
      {/* Full Page Sacred Lord Ganesha Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <img
          src="/backgrounds/ganesha-services-bg.jpg"
          alt="Lord Ganesha Divine Presence"
          className="w-full h-full object-cover object-top opacity-20 sm:opacity-25 filter saturate-[1.15]"
        />
        {/* Divine Golden Warmth Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/85 via-[#FFF8EE]/75 to-[#FFFDF9]/90" />
      </div>

      <div className="relative z-10">
        {/* Page Hero with Full-Color Lord Ganesha Background */}
        <PageHero
          title="Our Sacred Services"
          subtitle="Traditional Hindu Puja, Homa, Japa and Vedic Ceremonies"
          badge="Timeless Vedic Rituals"
          breadcrumbs={[{ label: 'Home', href: '/' }]}
          bgImage="/backgrounds/services-lord-ganesha.jpg"
        />

        {/* Main Services Filter & Grid Section */}
        <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filter Controls */}
          <div className="space-y-4 mb-12">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gold-600">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by puja name, category or ritual..."
                className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-gold/40 text-spiritual-dark text-sm placeholder:text-spiritual-muted/70 focus:outline-none focus:ring-2 focus:ring-saffron/40 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-spiritual-muted hover:text-spiritual-dark"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
              {serviceCategories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-saffron to-saffron-600 text-white shadow-md shadow-saffron/20 border border-saffron-400'
                        : 'bg-white/90 hover:bg-cream-50 text-spiritual-dark border border-gold/30 hover:border-gold shadow-2xs'
                    }`}
                  >
                    {cat === 'All' ? (
                      <Sparkles className="w-3.5 h-3.5" />
                    ) : (
                      <Flame className="w-3.5 h-3.5 opacity-80" />
                    )}
                    <span>{cat}</span>
                    {cat === 'All' && (
                      <span className="ml-1 text-[11px] px-1.5 py-0.2 rounded-full bg-white/20">
                        {servicesData.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Services Cards Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white/80 rounded-3xl border border-gold/30 p-8 max-w-md mx-auto">
              <p className="font-serif text-lg text-spiritual-dark font-medium">
                No services found matching "{searchQuery}".
              </p>
              <p className="text-xs text-spiritual-muted mt-1">
                Acharya Surya Prakash Purohit arranges customized Vedic ceremonies upon request.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 rounded-xl bg-saffron text-white text-xs font-semibold hover:bg-saffron-600"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  </div>
);
};
