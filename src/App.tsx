import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactButtons } from './components/FloatingContactButtons';
import { ScrollUpButton } from './components/ScrollUpButton';
import { ScrollToTop } from './components/ScrollToTop';
import { SEOHead } from './components/SEOHead';
import { LaunchIntroVideo } from './components/LaunchIntroVideo';

// Multi-Page Dedicated Route Views
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { Gallery } from './pages/Gallery';
import { Testimonies } from './pages/Testimonies';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Router>
      <LaunchIntroVideo />
      <ScrollToTop />
      <SEOHead />
      <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#2D1810] selection:bg-saffron-200 selection:text-saffron-900">
        {/* Global Fixed Glassmorphism Navbar */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonies" element={<Testimonies />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Global Sacred Footer */}
        <Footer />

        {/* Floating Action Buttons: Left-side Contact (Call + WhatsApp) & Right-side Scroll to Top */}
        <FloatingContactButtons />
        <ScrollUpButton />
      </div>
    </Router>
  );
};

export default App;
