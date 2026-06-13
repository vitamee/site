import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useReveal } from './hooks/useReveal';

import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  // Scroll-driven reveal (IntersectionObserver)
  useReveal([]);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-navy antialiased selection:bg-brand-green/30 selection:text-brand-navy flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Categories />
        <Products />
        <Philosophy />
        <Testimonials />
      </main>

      <Footer />
      <ScrollToTop />

      <Analytics />
      <SpeedInsights />
    </div>
  );
}
