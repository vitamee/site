import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3.5 bg-brand-forest hover:bg-brand-forest-hover text-brand-lime rounded-full shadow-2xl border border-brand-lime/20 cursor-pointer transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 hover:scale-110 active:scale-95'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 stroke-[2.5px]" />
    </button>
  );
}
