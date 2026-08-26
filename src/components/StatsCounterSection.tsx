import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  isFormatted?: boolean;
}

const statsData: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: "Corporate Pooja's",
  },
  {
    value: 1000,
    suffix: '+',
    label: "Home Pooja's",
    isFormatted: true, // Formats as 1,000+
  },
  {
    value: 200,
    suffix: '+',
    label: "Marriage's",
  },
  {
    value: 300,
    suffix: '+',
    label: "Home Warming",
  },
];

export const StatsCounterSection: React.FC = () => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds animation
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);

            // Ease-out cubic curve
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);

            const newCounts = statsData.map((stat) =>
              Math.floor(easeOutProgress * stat.value)
            );
            setCounts(newCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(statsData.map((stat) => stat.value));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-16 bg-[#F6B26B] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 4 Stats Cards in 1 Row (Responsive: 1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {statsData.map((stat, idx) => {
            const displayedValue = stat.isFormatted
              ? counts[idx].toLocaleString('en-US')
              : counts[idx].toString();

            return (
              <div
                key={idx}
                className="rounded-2xl border-2 border-dashed border-white bg-white/20 backdrop-blur-xs p-6 sm:p-8 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.02] shadow-xs min-h-[150px] sm:min-h-[170px]"
              >
                {/* Large Bold Animated Number */}
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_5px_rgba(120,40,0,0.3)]">
                  {displayedValue}
                  {stat.suffix}
                </div>

                {/* Description Label */}
                <div className="mt-2 text-sm sm:text-base lg:text-lg font-bold text-[#2B1408] tracking-wide">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
