import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon } from 'lucide-react';
import { SacredDivider } from '../components/SacredDivider';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-16 px-4">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white border border-gold/40 shadow-xl">
        <div className="w-16 h-16 rounded-full bg-saffron-50 border border-gold/40 text-saffron text-3xl font-serif font-bold mx-auto flex items-center justify-center">
          ॐ
        </div>

        <h1 className="font-serif text-3xl font-bold text-spiritual-dark">
          Page Not Found
        </h1>

        <p className="text-sm text-spiritual-muted leading-relaxed">
          The sacred page you are searching for might have been moved or does not exist. Please return to the homepage or explore our services.
        </p>

        <SacredDivider symbol="om" className="my-2" />

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-saffron text-white text-xs sm:text-sm font-semibold shadow-md"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            to="/services"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cream-100 text-spiritual-dark text-xs sm:text-sm font-semibold border border-gold/30"
          >
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
