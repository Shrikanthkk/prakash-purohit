import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SacredDivider } from './SacredDivider';

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  badge = 'Sacred Vedic Seva',
  breadcrumbs = [{ label: 'Home', href: '/' }],
}) => {
  return (
    <div className="relative pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-cream-50 via-[#FAF4E7] to-cream-100 border-b border-gold/30 overflow-hidden text-center">
      {/* Background Watermark Om */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl sm:text-[14rem] font-serif text-gold/10 pointer-events-none select-none">
        ॐ
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
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

        <SacredDivider symbol="om" className="mt-4 mb-0" />
      </div>
    </div>
  );
};
