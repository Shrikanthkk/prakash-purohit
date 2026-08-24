import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

export const SEOHead = () => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    let title = 'Prakash Purohit | Hindu Puja & Vedic Ritual Services';
    let metaDescription = 'Authentic Hindu Puja Services, Vedic Rituals and Spiritual Ceremonies performed with devotion, tradition and care.';

    if (path === '/') {
      title = 'Prakash Purohit | Hindu Puja & Vedic Ritual Services';
    } else if (path === '/about') {
      title = 'About Prakash Purohit | Traditional Hindu Ritual Services';
      metaDescription = 'Learn about Acharya Surya Prakash Purohit, our Vedic heritage, and dedicated spiritual services.';
    } else if (path === '/services') {
      title = 'Hindu Puja & Vedic Services | Prakash Purohit';
      metaDescription = 'Explore all 22+ authentic Hindu Pujas, Homas, Dosha Shanti, and Samskara ceremonies.';
    } else if (path.startsWith('/services/')) {
      const serviceId = path.replace('/services/', '');
      const service = servicesData.find((s) => s.id === serviceId);
      if (service) {
        title = `${service.title} | Prakash Purohit`;
        metaDescription = service.shortDescription;
      }
    } else if (path === '/gallery') {
      title = 'Puja Ceremony Gallery | Prakash Purohit';
      metaDescription = 'Moments of devotion, tradition, and celebration in our sacred Vedic photo gallery.';
    } else if (path === '/testimonies') {
      title = 'Devotee Testimonials | Prakash Purohit';
      metaDescription = 'Read heartfelt blessings and reviews from devotees who performed ceremonies with Acharya ji.';
    } else if (path === '/pricing') {
      title = 'Puja Services Pricing | Prakash Purohit';
      metaDescription = 'Transparent Vedic Dakshina and puja package pricing for homes and businesses.';
    } else if (path === '/contact') {
      title = 'Contact Prakash Purohit | Book Puja Services';
      metaDescription = 'Get in touch with Acharya Surya Prakash Purohit to arrange your sacred ceremony or request Muhurat advice.';
    }

    document.title = title;

    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', metaDescription);
    }
  }, [path]);

  return null;
};
