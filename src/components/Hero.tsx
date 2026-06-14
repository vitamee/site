import React from 'react';
import { ArrowRight, FlaskConical, ShieldCheck, Leaf, Eye } from 'lucide-react';
import heroBanner from '../assets/images/vitamee_capa1.webp';

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const TRUST = [
  { icon: FlaskConical, label: 'Fórmulas inteligentes' },
  { icon: ShieldCheck, label: 'Ingredientes de qualidade' },
  { icon: Leaf, label: 'Produção certificada' },
  { icon: Eye, label: 'Transparência total' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-16 bg-white overflow-hidden">
      {/* Ondas suaves de fundo */}
      <div className="absolute top-20 right-0 w-[55%] h-[80%] bg-gradient-to-br from-brand-green-soft/40 via-pink-50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Banner principal (capa) com texto sobreposto */}
        <div className="relative reveal-element">
          <div className="absolute -inset-4 bg-gradient-to-tr from-pink-100/60 via-brand-green-soft/30 to-transparent rounded-[40px] blur-2xl pointer-events-none" />

          {/* Imagem da capa */}
          <img
            src={heroBanner}
            alt="Vitamee — Vitamina para sua melhor versão"
            className="relative w-full rounded-[28px] sm:rounded-[36px] shadow-2xl border border-white/60"
          />

          {/* Degradê para legibilidade do texto (só desktop) */}
          <div className="hidden lg:block absolute inset-0 rounded-[36px] bg-gradient-to-r from-white/85 via-white/45 to-transparent pointer-events-none" />

          {/* Texto + chamadas: sobreposto à esquerda no desktop, abaixo no mobile */}
          <div className="mt-8 lg:mt-0 lg:absolute lg:inset-0 lg:z-10 lg:flex lg:items-center">
            <div className="text-center lg:text-left lg:w-[52%] lg:pl-8 xl:pl-14 space-y-5 sm:space-y-6">
              <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.08] tracking-tight text-brand-navy">
                Vitamina para sua{' '}
                <span className="font-serif italic font-semibold text-brand-navy">melhor versão.</span>
              </h1>

              <p className="text-base sm:text-lg text-brand-gray font-light max-w-md mx-auto lg:mx-0 leading-relaxed">
                Suplementos desenvolvidos para ajudar você a viver com mais energia, equilíbrio e longevidade.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollTo('produtos')}
                  className="w-full sm:w-auto px-7 py-3.5 bg-brand-navy hover:bg-brand-navy-hover text-white rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Conheça os produtos <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo('filosofia')}
                  className="w-full sm:w-auto px-7 py-3.5 border border-brand-navy/30 text-brand-navy hover:border-brand-navy rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
                >
                  Nossa história
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Selos de confiança */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-3xl mx-auto reveal-element">
          {TRUST.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-2 text-center">
              <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-green">
                <t.icon className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/70 leading-tight">{t.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
