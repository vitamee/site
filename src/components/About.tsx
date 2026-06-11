import React from 'react';
import { Target, ShieldCheck, Beaker, Sparkles, Heart } from 'lucide-react';
import brandVideo from '../assets/images/vitamme.mp4';

export default function About() {
  return (
    <section id="manifesto" className="py-24 bg-brand-cream select-none overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column Left: Premium Text-driven Brand Manifesto */}
          <div className="lg:col-span-7 space-y-8 reveal-element">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-brand-forest bg-brand-lime/40 border border-brand-sand px-3.5 py-1.5 rounded-full inline-block">
                Manifesto Vitamee
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] text-brand-dark">
                O que nos move: Um manifesto por suplementos verdadeiramente limpos.
              </h2>
              
              <div className="h-0.5 bg-brand-lime w-16 rounded" />
            </div>

            <div className="space-y-4 font-sans text-sm sm:text-base text-gray-500 leading-relaxed font-light">
              <p>
                O mercado de suplementação tradicional está saturado de atalhos industriais: corantes sintéticos nocivos, excipientes inertes como o dióxido de titânio, adoçantes que prejudicam a microbiota e compostos sintéticos que o corpo mal consegue absorver.
              </p>
              <p className="font-bold text-brand-dark">
                Nós decidimos fazer diferente. Acreditamos que a saúde celular de verdade não se constrói com químicos de laboratórios genéricos, mas com ingredientes biológicos puros que falam a mesma língua das suas células.
              </p>
              <p>
                Na <strong className="text-brand-dark font-semibold">Vitamee</strong>, nossas fórmulas são criadas do zero utilizando micronutrientes quelados com os maiores índices de biodisponibilidade do mundo. Quando desenvolvemos um produto, nos comprometemos a manter o frasco 100% livre de enchimentos desnecessários. É a ciência e a natureza unidos pela sua máxima longevidade.
              </p>
            </div>

            {/* Quality Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
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

          {/* Column Right: Elegant Staggered Visual Storyboard */}
          <div className="lg:col-span-5 relative grid grid-cols-12 gap-4 reveal-element">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-brand-forest/5 rounded-full blur-3xl pointer-events-none" />

            {/* High-quality main video loop */}
            <div className="col-span-12 relative">
              <div className="overflow-hidden rounded-[36px] shadow-xl border border-brand-sand bg-brand-dark/5">
                <video
                  src={brandVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              
              {/* Overlaid floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-lg border border-brand-sand/80 flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-bold text-xs text-brand-dark">Padrão Limpo</span>
                  <span className="block text-[10px] text-gray-400">Nutrição biológica integral e rastreada.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
