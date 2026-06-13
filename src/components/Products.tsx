import React from 'react';
import { ShoppingBag, Star } from 'lucide-react';
import { PRODUCTS } from '../data/products';

const formatBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

const goToContact = () => {
  const el = document.getElementById('contato');
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

export default function Products() {
  return (
    <section id="produtos" className="py-20 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-element">
          <span className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-widest">
            <span className="h-px w-6 bg-brand-green" /> Produtos em destaque <span className="h-px w-6 bg-brand-green" />
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-3">
            Gummies que você vai amar tomar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-3xl border border-brand-border overflow-hidden flex flex-col transition-all hover:shadow-xl hover:-translate-y-1 reveal-element"
            >
              {/* Imagem */}
              <div className="relative bg-brand-cream/60 aspect-square flex items-center justify-center p-6 overflow-hidden">
                {p.badge && (
                  <span className="absolute top-4 left-4 z-10 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {p.badge}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-brand-gold mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < Math.round(p.rating) ? 'fill-current' : ''}`} />
                  ))}
                  <span className="text-[11px] text-brand-gray ml-1">({p.reviewsCount})</span>
                </div>

                <h3 className="font-bold text-lg text-brand-navy leading-snug">{p.name}</h3>
                <p className="text-sm text-brand-gray mt-1 flex-grow">{p.subtitle}</p>

                <div className="flex items-end gap-2 mt-4">
                  {p.oldPrice && (
                    <span className="text-sm text-brand-gray line-through">{formatBRL(p.oldPrice)}</span>
                  )}
                  <span className="text-2xl font-extrabold text-brand-navy">{formatBRL(p.price)}</span>
                </div>
                <span className="text-[11px] text-brand-gray">ou 6x de {formatBRL(p.price / 6)} sem juros</span>

                <button
                  onClick={goToContact}
                  className="mt-5 w-full py-3 bg-brand-navy hover:bg-brand-navy-hover text-white rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" /> Adicionar ao carrinho
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
