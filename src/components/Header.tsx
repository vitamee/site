import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/images/logo_vitamee.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToLeadForm = () => {
    setMobileMenuOpen(false);
    const element = document.getElementById('capture-section');
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-brand-cream/95 backdrop-blur-md py-3.5 shadow-sm border-b border-brand-sand/60'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - LEFT */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 cursor-pointer select-none py-1 group"
          id="nav-logo"
        >
          <img
            src={logoImg}
            alt="Vitamee"
            className="h-[135px] sm:h-[165px] -my-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Anchors - CENTER (Desktop) - Clean, minimalist header with no links */}
        <div className="hidden md:block" />

        {/* Action Button - RIGHT */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/usevitamee"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-6 py-3 text-[10px] uppercase tracking-widest font-extrabold text-brand-dark bg-brand-lime hover:bg-brand-lime-hover transition-all duration-300 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            id="btn-buy-now-header"
          >
            Garantir Acesso Antecipado
            <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark cursor-pointer"
            aria-label="Toggle menu"
            id="btn-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-cream/98 backdrop-blur-lg border-b border-brand-sand shadow-lg">
          <div className="px-5 py-6 space-y-4 flex flex-col text-sm font-bold tracking-wider uppercase text-brand-dark">
            <a
              href="https://www.instagram.com/usevitamee"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-brand-lime hover:bg-brand-lime-hover text-brand-dark py-3.5 rounded-full text-[10px] uppercase tracking-widest font-extrabold transition-all mt-4 shadow-md inline-block"
            >
              Garantir Acesso VIP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
