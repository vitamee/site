import React from 'react';
import { ShieldCheck, Beaker, Sparkles } from 'lucide-react';
import brandVideo from '../assets/images/vitamme.mp4';

export default function About() {
  return (
    <section id="manifesto" className="pt-10 pb-24 md:pt-12 md:pb-32 bg-brand-cream select-none overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title (Centered) */}
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-widest font-extrabold text-brand-forest bg-brand-lime/40 border border-brand-sand px-3.5 py-1.5 rounded-full inline-block">
            Manifesto Vitamee
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-brand-dark max-w-3xl mx-auto">
            O que nos move: Um manifesto por suplementos verdadeiramente limpos.
          </h2>
          <div className="h-0.5 bg-brand-lime w-16 rounded mx-auto" />
        </div>

        {/* Video Block (Now on Top) */}
        <div className="relative mb-12 max-w-4xl mx-auto reveal-element">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-forest/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="overflow-hidden rounded-[36px] shadow-xl border border-brand-sand bg-brand-dark/5 relative">
            <video
              src={brandVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto aspect-video object-cover hover:scale-[1.015] transition-transform duration-700"
            />
            
            {/* Overlaid floating badge */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-lg border border-brand-sand/80 flex items-center gap-3 max-w-xs z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 animate-pulse" />
              </div>
              <div className="text-left">
                <span className="block font-bold text-xs text-brand-dark">Padrão Limpo</span>
                <span className="block text-[10px] text-gray-400">Nutrição biológica integral e rastreada.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Block spanning the whole area below the video */}
        <div className="space-y-8 reveal-element max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 font-sans text-[#6A6C62] leading-relaxed font-light">
            <p className="text-brand-dark font-semibold text-lg sm:text-xl md:border-r md:border-brand-sand/40 md:pr-8">
              Acreditamos que a verdadeira saúde começa nas pequenas escolhas do dia a dia. Fundada com o propósito de simplificar o cuidado pessoal, a Vitamee nasceu da necessidade de suplementação inteligente e de alta qualidade.
            </p>
            <p className="text-base sm:text-lg flex flex-col justify-center">
              Não se trata apenas de cápsulas, mas de uma filosofia de vida onde consistência e equilíbrio caminham juntos. Nossas fórmulas são desenvolvidas com ingredientes rigorosamente selecionados para que você possa alcançar a sua melhor versão, dia após dia, com praticidade e confiança.
            </p>
          </div>

          {/* Quality Commitments Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-brand-sand/40">
            <div className="flex gap-4 items-start p-5 bg-white rounded-[24px] border border-brand-sand/65 shadow-xs">
              <div className="p-3 rounded-2xl bg-brand-lime text-brand-dark shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2px]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-brand-dark uppercase tracking-wider">Zero Excipientes Tóxicos</h4>
                <p className="text-xs text-gray-500 mt-1">Nenhum aditivo inerte ou corante prejudicial entra na nossa cadeia.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 bg-white rounded-[24px] border border-brand-sand/65 shadow-xs">
              <div className="p-3 rounded-2xl bg-brand-forest text-brand-lime shrink-0">
                <Beaker className="w-5 h-5 stroke-[2px]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-brand-dark uppercase tracking-wider">Ciência e Eficácia</h4>
                <p className="text-xs text-gray-500 mt-1">Fórmulas pautadas em ensaios clínicos rigorosos e ativos patenteados.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
