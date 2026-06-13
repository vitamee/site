import React from 'react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { name: 'Juliana M.', initials: 'JM', text: 'Sinto muito mais energia no meu dia a dia e minha pele ficou incrível! Amo os produtos da Vitamee.' },
  { name: 'Rafael T.', initials: 'RT', text: 'O combo de vitaminas me ajudou muito no foco e disposição para treinar e trabalhar.' },
  { name: 'Camila R.', initials: 'CR', text: 'Sono melhor, menos inchaço e mais equilíbrio. A Vitamee faz parte da minha rotina.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal-element">
          <span className="inline-flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-widest">
            <span className="h-px w-6 bg-brand-green" /> Depoimentos <span className="h-px w-6 bg-brand-green" />
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy mt-3">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <div key={r.name} className="bg-white rounded-3xl border border-brand-border p-7 flex flex-col gap-4 shadow-sm reveal-element">
              <Quote className="w-8 h-8 text-brand-green/30" />
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm text-brand-gray leading-relaxed flex-grow">"{r.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-brand-border">
                <div className="w-10 h-10 rounded-full bg-brand-green/15 text-brand-green font-bold text-xs flex items-center justify-center">
                  {r.initials}
                </div>
                <span className="font-semibold text-sm text-brand-navy">{r.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
