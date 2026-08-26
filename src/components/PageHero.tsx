import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SacredDivider } from './SacredDivider';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
  transparentBg?: boolean;
  bgImage?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Sacred Vedic Seva',
  breadcrumbs = [{ label: 'Home', href: '/' }],
  transparentBg = false,
  bgImage,
}) => {
  return (
    <div
      className={`relative pt-24 sm:pt-28 pb-6 sm:pb-8 border-b border-gold/30 overflow-hidden text-center ${
        bgImage
          ? 'bg-[#FAF4E7]'
          : transparentBg
          ? 'bg-transparent'
          : 'bg-gradient-to-b from-cream-50 via-[#FAF4E7] to-cream-100'
      }`}
    >
      {/* Full-Color Background Image (Goddess clearly visible & full-color) */}
      {bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={bgImage}
            alt="Devotional Sacred Background"
            className="w-full h-full object-cover object-[15%_center] sm:object-[20%_center] md:object-[25%_center] filter brightness-[1.0] contrast-[1.02]"
          />
          {/* Subtle localized gradient transition for center text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFFDF9]/75 to-[#FFFDF9]/50 pointer-events-none" />
        </div>
      )}

      {/* Background Watermark Om (when no bgImage is used) */}
      {!bgImage && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl sm:text-[14rem] font-serif text-gold/10 pointer-events-none select-none">
          ॐ
        </div>
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div className={bgImage ? 'inline-block p-4 sm:p-6 rounded-3xl bg-[#FFFDF9]/80 backdrop-blur-[6px] border border-gold/45 shadow-[0_8px_30px_rgba(180,90,20,0.12)] max-w-2xl mx-auto' : ''}>
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-2 text-xs text-spiritual-muted mb-3 font-medium">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-saffron transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-spiritual-dark font-semibold">
                    {crumb.label}
                  </span>
                )}
                {idx < breadcrumbs.length && (
                  <ChevronRight className="w-3 h-3 text-gold" />
                )}
              </React.Fragment>
            ))}
            <span className="text-saffron font-semibold">{title}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-saffron-50 border border-saffron-200 text-saffron text-xs font-semibold uppercase tracking-wider mb-3">
            <span>✦ {badge} ✦</span>
          </div>

          {/* Page Title */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spiritual-dark tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-base sm:text-lg text-spiritual-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>

          <SacredDivider symbol="om" className="!my-2 sm:!my-3" />
        </div>
      </div>
    </div>
  );
};
