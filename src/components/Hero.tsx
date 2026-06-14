import React from 'react';
import { ArrowRight, FlaskConical, ShieldCheck, Leaf, Eye, Heart, Sparkles, Star } from 'lucide-react';
import heroPoster from '../assets/images/vitamee_morango.jpeg';
import heroVideo from '../assets/videos/vitamee_hero.mp4';

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

const SIDE_BENEFITS = [
  { icon: Heart, title: 'Beleza que começa de dentro' },
  { icon: ShieldCheck, title: 'Nutrientes que realmente funcionam' },
  { icon: Sparkles, title: 'Sabor delicioso e zero culpa' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-40 pb-16 bg-white overflow-hidden">
      {/* Ondas suaves de fundo */}
      <div className="absolute top-20 right-0 w-[55%] h-[80%] bg-gradient-to-br from-brand-green-soft/40 via-pink-50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Esquerda */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left reveal-element">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-brand-navy">
              Vitamina para sua{' '}
              <span className="font-serif italic font-semibold text-brand-navy">melhor versão.</span>
            </h1>

            <p className="text-base sm:text-lg text-brand-gray font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
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

            {/* Selos de confiança */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-6 max-w-xl mx-auto lg:mx-0">
              {TRUST.map((t) => (
                <div key={t.label} className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
                  <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-green">
                    <t.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/70 leading-tight">{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direita: produto em destaque (vídeo) */}
          <div className="lg:col-span-6 relative flex items-center justify-center reveal-element">
            <div className="relative w-full max-w-[360px]">
              <div className="absolute -inset-6 bg-gradient-to-tr from-pink-100/70 via-brand-green-soft/30 to-transparent rounded-[48px] blur-2xl" />
              <video
                src={heroVideo}
                poster={heroPoster}
                autoPlay
                muted
                loop
                playsInline
                className="relative w-full aspect-[9/16] object-cover rounded-[32px] shadow-2xl border border-white/60"
              />
            </div>

            {/* Benefícios laterais flutuantes */}
            <div className="hidden xl:flex flex-col gap-3 absolute right-0 top-1/2 -translate-y-1/2 translate-x-4">
              {SIDE_BENEFITS.map((b) => (
                <div key={b.title} className="flex items-center gap-2.5 bg-white/90 backdrop-blur-sm border border-brand-border rounded-2xl px-3.5 py-2.5 shadow-sm max-w-[190px]">
                  <div className="w-8 h-8 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center shrink-0">
                    <b.icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-semibold text-brand-navy leading-tight">{b.title}</span>
                </div>
              ))}
            </div>

            {/* Badge avaliação */}
            <div className="absolute bottom-4 left-2 sm:left-6 bg-white rounded-2xl shadow-lg border border-brand-border px-4 py-3 flex items-center gap-3">
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
              </div>
              <span className="text-[11px] font-semibold text-brand-navy">+5.000 clientes satisfeitos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
