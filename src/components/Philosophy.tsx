import React from 'react';
import { Microscope, ShieldCheck, Eye, Heart, Leaf, FlaskConical, Settings, BadgeCheck, Package } from 'lucide-react';
import storyImg from '../assets/images/vitamee_story_woman_1781132110424.png';

const PILLARS = [
  { icon: Microscope, title: 'Ciência e Inovação', desc: 'Fórmulas desenvolvidas com base em estudos científicos.' },
  { icon: ShieldCheck, title: 'Qualidade sem Compromisso', desc: 'Ingredientes selecionados e produção certificada.' },
  { icon: Eye, title: 'Transparência Total', desc: 'Informações claras para você tomar as melhores decisões.' },
  { icon: Heart, title: 'Feito para Você', desc: 'Produtos pensados para sua rotina e seus objetivos.' },
];

const TRUST_BAR = [
  { icon: Leaf, label: 'Ingredientes Premium' },
  { icon: FlaskConical, label: 'Laboratórios Certificados' },
  { icon: Settings, label: 'Produção Rigorosa' },
  { icon: BadgeCheck, label: 'Controle de Qualidade' },
  { icon: Package, label: 'Embalagens Seguras' },
];

export default function Philosophy() {
  return (
    <section id="filosofia" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="relative reveal-element">
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-green-soft/40 to-brand-gold/10 rounded-[40px] blur-2xl" />
            <img src={storyImg} alt="Estilo de vida Vitamee" className="relative w-full rounded-[32px] object-cover shadow-lg" />
          </div>

          {/* Texto + pilares */}
          <div className="space-y-6 reveal-element">
            <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Nossa filosofia</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-navy leading-tight">
              Acreditamos que saúde não é moda.
            </h2>
            <p className="text-lg text-brand-gray font-light">
              É um <span className="font-serif italic text-brand-navy">investimento diário</span> na sua melhor versão. Criamos suplementos com ingredientes de alta qualidade, baseados em ciência, para apoiar sua jornada com mais energia, equilíbrio e longevidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {PILLARS.map((p) => (
                <div key={p.title} className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-2xl bg-brand-green/12 text-brand-green flex items-center justify-center shrink-0">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-brand-navy">{p.title}</h4>
                    <p className="text-xs text-brand-gray mt-0.5 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Barra de selos de confiança */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 py-8 border-t border-b border-brand-border reveal-element">
          {TRUST_BAR.map((t) => (
            <div key={t.label} className="flex flex-col items-center text-center gap-2">
              <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-green">
                <t.icon className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-wide text-brand-navy/70 leading-tight">{t.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
