import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Flame } from 'lucide-react';
import type { ServiceItem } from '../data/servicesData';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="group relative flex flex-col rounded-2xl bg-white border border-gold/30 hover:border-saffron/60 shadow-divine-card hover:shadow-gold-glow transition-all duration-300 hover:-translate-y-1.5 overflow-hidden">
      {/* Service Image Frame */}
      <Link to={`/services/${service.id}`} className="relative h-48 w-full overflow-hidden bg-cream-200 block">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-spiritual-dark/70 via-spiritual-dark/20 to-transparent" />

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-cream-50/95 text-saffron border border-gold/40 shadow-xs backdrop-blur-sm">
            <Flame className="w-3 h-3 text-saffron" />
            <span>{service.category}</span>
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
          <span className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/20">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{service.duration}</span>
          </span>
          {service.priceNote && (
            <span className="text-amber-300 font-semibold bg-spiritual-dark/80 px-2 py-0.5 rounded-md border border-gold/40">
              {service.priceNote}
            </span>
          )}
        </div>
      </Link>

      {/* Card Content Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <Link to={`/services/${service.id}`}>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-spiritual-dark group-hover:text-saffron transition-colors">
                {service.title}
              </h3>
            </Link>
            <span className="text-gold opacity-60 group-hover:opacity-100 transition-opacity">
              ✦
            </span>
          </div>

          <p className="text-xs sm:text-sm text-spiritual-muted leading-relaxed line-clamp-2">
            {service.shortDescription}
          </p>
        </div>

        {/* Key Highlight Bullets (First 2) */}
        <div className="pt-2 border-t border-gold/15 space-y-1 text-[11px] sm:text-xs text-spiritual-medium">
          {service.keyHighlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5 truncate">
              <span className="text-saffron text-[10px]">✔</span>
              <span className="truncate">{item}</span>
            </div>
          ))}
        </div>

        {/* Action Buttons with distinct multi-page routing behavior */}
        <div className="pt-2 grid grid-cols-2 gap-2.5">
          {/* Learn More -> navigates to dedicated service detail page */}
          <Link
            to={`/services/${service.id}`}
            className="w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-cream-50 hover:bg-cream-100 text-spiritual-text text-xs font-semibold border border-gold/30 hover:border-saffron/40 transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3 h-3 text-saffron" />
          </Link>

          {/* Book Now -> navigates to /contact?service=id with pre-selection */}
          <Link
            to={`/contact?service=${service.id}`}
            className="w-full inline-flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-saffron hover:bg-saffron-600 text-white text-xs font-semibold shadow-sm hover:shadow-saffron-glow transition-all hover:scale-[1.02]"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-200" />
            <span>Book Now</span>
          </Link>
        </div>
      </div>

      {/* Subtle bottom border accent */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
