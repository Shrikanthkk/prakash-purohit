import React from 'react';

interface SacredDividerProps {
  symbol?: 'om' | 'lotus' | 'diya' | 'star';
  className?: string;
  subtext?: string;
}

export const SacredDivider: React.FC<SacredDividerProps> = ({
  symbol = 'om',
  className = '',
  subtext,
}) => {
  return (
    <div className={`flex flex-col items-center justify-center my-6 md:my-10 ${className}`}>
      <div className="flex items-center justify-center w-full max-w-md gap-3">
        {/* Left gold decorative line with dot */}
        <div className="flex items-center flex-1">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gold/40 to-gold"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-gold mx-1"></div>
        </div>

        {/* Center Sacred Symbol */}
        <div className="flex items-center justify-center px-3 py-1 rounded-full bg-cream-50 border border-gold/40 text-saffron shadow-sm">
          {symbol === 'om' && (
            <span className="text-xl font-bold tracking-widest text-saffron select-none">
              ✦ ॐ ✦
            </span>
          )}
          {symbol === 'lotus' && (
            <span className="flex items-center gap-1 text-base text-saffron font-medium">
              ✦ <span className="text-lg">🪷</span> ✦
            </span>
          )}
          {symbol === 'diya' && (
            <span className="flex items-center gap-1 text-base text-saffron font-medium">
              ✦ <span className="text-lg">🪔</span> ✦
            </span>
          )}
          {symbol === 'star' && (
            <span className="text-sm font-semibold tracking-wider text-gold-dark">
              ✦ 卐 ✦
            </span>
          )}
        </div>

        {/* Right gold decorative line with dot */}
        <div className="flex items-center flex-1">
          <div className="w-1.5 h-1.5 rounded-full bg-gold mx-1"></div>
          <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-gold/40 to-gold"></div>
        </div>
      </div>

      {subtext && (
        <span className="mt-2 text-xs font-serif tracking-widest uppercase text-spiritual-muted">
          {subtext}
        </span>
      )}
    </div>
  );
};
