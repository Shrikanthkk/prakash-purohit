import React, { useState, useMemo } from 'react';
import { Eye } from 'lucide-react';
import { PageHero } from '../components/PageHero';
import { LightboxModal } from '../components/LightboxModal';
import { galleryData, galleryCategories } from '../data/galleryData';
import type { GalleryItem } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'All') return galleryData;
    return galleryData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* Page Hero with Full-Color Lord Shiva Background */}
      <PageHero
        title="Our Gallery"
        subtitle="Moments of Devotion, Tradition & Celebration"
        badge="Vedic Visual Moments"
        breadcrumbs={[{ label: 'Home', href: '/' }]}
        bgImage="/backgrounds/gallery-lord-shiva.jpg"
      />

      {/* Gallery Main Container */}
      <section className="py-16 sm:py-20 bg-[#FFFDF9] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
            {galleryCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-gradient-to-r from-saffron to-saffron-600 text-white shadow-md shadow-saffron/20 border border-saffron-400'
                      : 'bg-white hover:bg-cream-50 text-spiritual-dark border border-gold/30 hover:border-gold shadow-2xs'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Gallery Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden bg-cream-200 border border-gold/40 shadow-divine-card hover:shadow-gold-glow cursor-pointer transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Shimmer on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark/85 via-spiritual-dark/25 to-transparent opacity-75 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-saffron border border-gold/40 shadow-xs backdrop-blur-xs">
                      {item.category}
                    </span>
                  </div>

                  {/* Center Zoom Cue */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-saffron/90 text-white flex items-center justify-center shadow-lg border border-gold/50 transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                    <h3 className="font-serif text-base font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-200 line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Fullscreen Component */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredGallery}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(index) => setActiveLightboxItem(filteredGallery[index])}
      />
    </div>
  );
};
