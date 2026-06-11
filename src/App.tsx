import React from 'react';
import { useReveal } from './hooks/useReveal';

import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  // Initialize scroll-driven Intersection Observer
  useReveal([]);

  return (
    <div className="min-h-screen bg-brand-cream font-sans text-brand-dark antialiased selection:bg-brand-lime/40 selection:text-brand-dark flex flex-col justify-between">
      
      {/* Flutuante Header */}
      <Header />

      {/* Main Pre-Launch Modules */}
      <main className="flex-grow">
        {/* Core Hero Form with VIP signup */}
        <Hero />

        {/* 4-column Conceptual Wellness Grid */}
        <Products />

        {/* Brand Manifesto (Clean supplements focus) */}
        <About />
      </main>

      {/* Conversational footer with secondary lead box */}
      <Footer />

    </div>
  );
}

