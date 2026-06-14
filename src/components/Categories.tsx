import React from 'react';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';
import energia from '../assets/images/cards/energia.webp';
import imunidade from '../assets/images/cards/imunidade.webp';
import sono from '../assets/images/cards/sono.webp';
import beleza from '../assets/images/cards/beleza.webp';
import performance from '../assets/images/cards/performance.webp';
import longevidade from '../assets/images/cards/longevidade.webp';

const scrollToProducts = () => {
  const el = document.getElementById('produtos');
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const CARD_IMAGES: Record<CategoryId, string> = {
  energia,
  imunidade,
  sono,
  beleza,
  performance,
  longevidade,
};

export default function Categories() {
  return (
    <section id="objetivos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-element">
          <span className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-widest">
            <span className="h-px w-6 bg-brand-green" /> Escolha seu objetivo <span className="h-px w-6 bg-brand-green" />
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-3">
            Para cada meta, a fórmula certa
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={scrollToProducts}
              aria-label={`Ver produtos de ${cat.name}`}
              className="group rounded-3xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/50"
            >
              <img
                src={CARD_IMAGES[cat.id]}
                alt={`${cat.name} — ${cat.tagline}`}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
