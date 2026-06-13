import React from 'react';
import { Zap, Shield, Moon, Sparkles, Rocket, Heart, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';

const scrollToProducts = () => {
  const el = document.getElementById('produtos');
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

// Estilos estáticos por categoria (classes literais p/ o Tailwind detectar)
const STYLES: Record<CategoryId, { icon: React.ComponentType<any>; bg: string; iconColor: string; border: string }> = {
  energia:     { icon: Zap,      bg: 'bg-cat-energia/10',     iconColor: 'text-cat-energia',     border: 'hover:border-cat-energia/50' },
  imunidade:   { icon: Shield,   bg: 'bg-cat-imunidade/10',   iconColor: 'text-cat-imunidade',   border: 'hover:border-cat-imunidade/50' },
  sono:        { icon: Moon,     bg: 'bg-cat-sono/15',        iconColor: 'text-cat-sono',        border: 'hover:border-cat-sono/50' },
  beleza:      { icon: Sparkles, bg: 'bg-cat-beleza/12',      iconColor: 'text-cat-beleza',      border: 'hover:border-cat-beleza/50' },
  performance: { icon: Rocket,   bg: 'bg-cat-performance/10', iconColor: 'text-cat-performance', border: 'hover:border-cat-performance/50' },
  longevidade: { icon: Heart,    bg: 'bg-cat-longevidade/12', iconColor: 'text-cat-longevidade', border: 'hover:border-cat-longevidade/50' },
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
          {CATEGORIES.map((cat) => {
            const s = STYLES[cat.id];
            const Icon = s.icon;
            return (
              <button
                key={cat.id}
                onClick={scrollToProducts}
                className={`group ${s.bg} border border-transparent ${s.border} rounded-3xl p-5 text-center flex flex-col items-center gap-3 transition-all hover:-translate-y-1 hover:shadow-md cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center ${s.iconColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-brand-navy">{cat.name}</h3>
                  <p className="text-[11px] text-brand-gray mt-1 leading-tight">{cat.tagline}</p>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${s.iconColor} inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Ver produtos <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
