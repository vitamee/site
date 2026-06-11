import React, { useState } from 'react';
import { Shield, Brain, Heart, Moon, ArrowRight, Leaf, Check, Sparkles, Filter, Activity, Zap } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  categoryName: string;
  icon: React.ComponentType<any>;
  badge: string;
  description: string;
  colorClass: string;
  bgLightClass: string;
  textColorClass: string;
  teaserIngredients: string[];
  scientificBase: string;
  // Dashboard mock metrics
  absorptionRate: number; // e.g. 96.8
  induxTime: string; // e.g. "40min"
  potencyBarData: number[]; // chart column heights
}

const CONCEPT_CATEGORIES: Category[] = [
  {
    id: 'diario',
    name: 'Vitamee Diário',
    categoryName: 'Imunidade & Base',
    icon: Shield,
    badge: 'Fórmula Base',
    description: 'A dose básica diária de micronutrientes essenciais para manter seu metabolismo ativo e imunidade blindada.',
    colorClass: 'bg-brand-forest text-brand-lime',
    bgLightClass: 'hover:border-brand-sand bg-white',
    textColorClass: 'text-brand-forest bg-brand-lime/20 border-brand-sand',
    teaserIngredients: ['Metilfolato (B9)', 'Zinco Quelato', 'Metilcobalamina (B12)', 'Vitamina D3 Vegana'],
    scientificBase: 'Fórmula base quelada molecularmente para absorção celular real.',
    absorptionRate: 97.4,
    induxTime: "35 min",
    potencyBarData: [32, 45, 58, 70, 85, 97],
  },
  {
    id: 'foco',
    name: 'Vitamee Foco',
    categoryName: 'Cognição & Performance',
    icon: Brain,
    badge: 'Cognitivo VIP',
    description: 'Nootrópicos premium calibrados para otimizar conexões neurais, promovendo clareza mental e foco estendido.',
    colorClass: 'bg-brand-lime text-brand-dark',
    bgLightClass: 'hover:border-brand-sand bg-white',
    textColorClass: 'text-brand-forest bg-brand-lime/20 border-brand-sand',
    teaserIngredients: ['Fosfatidilserina', 'Extrato de Bacopa', 'L-Teanina Orgânica', 'Coenzima Q10'],
    scientificBase: 'Acelera sinapses e reduz drasticamente o cansaço cognitivo da tarde.',
    absorptionRate: 94.8,
    induxTime: "25 min",
    potencyBarData: [20, 38, 55, 68, 78, 94],
  },
  {
    id: 'vitalidade',
    name: 'Vitamee Vitalidade',
    categoryName: 'Longevidade & Proteção',
    icon: Heart,
    badge: 'Adaptógeno',
    description: 'Fitoterápicos e minerais que modulam ativamente o estresse e promovem a oxigenação celular profunda.',
    colorClass: 'bg-brand-forest text-white',
    bgLightClass: 'hover:border-brand-sand bg-white',
    textColorClass: 'text-brand-forest bg-brand-lime/20 border-brand-sand',
    teaserIngredients: ['Ashwagandha KSM-66', 'Resveratrol Trans', 'Gengivol Ativo', 'Picolinato Cromo'],
    scientificBase: 'Protege mitocôndrias de radicais livres acelerando a recuperação de tecidos.',
    absorptionRate: 92.5,
    induxTime: "45 min",
    potencyBarData: [15, 28, 48, 60, 75, 92],
  },
  {
    id: 'sono',
    name: 'Vitamee Sono',
    categoryName: 'Repouso & Regeneração',
    icon: Moon,
    badge: 'Premium Sono',
    description: 'Sinergia de glicinato orgânico de alta afinidade e indutores naturais purificados para repouso absoluto.',
    colorClass: 'bg-brand-lime text-brand-dark',
    bgLightClass: 'hover:border-brand-sand bg-white',
    textColorClass: 'text-brand-forest bg-brand-lime/20 border-brand-sand',
    teaserIngredients: ['Bisglicinato de Magnésio', 'Melatonina Biofase', 'Inositol Concentrado', 'Apigenina'],
    scientificBase: 'Equilibra o ciclo de vigília facilitando a transição para as fases profundas (REM).',
    absorptionRate: 98.2,
    induxTime: "15 min",
    potencyBarData: [40, 52, 65, 78, 88, 98],
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(CONCEPT_CATEGORIES[1]); // Focus active by default for dynamic preview
  const [labPurityLevel, setLabPurityLevel] = useState(99.8);
  const [ultraFilter, setUltraFilter] = useState(true);

  const handleToggleFilter = () => {
    setUltraFilter(!ultraFilter);
    setLabPurityLevel(prev => prev === 99.8 ? 89.4 : 99.8);
  };

  const handleInteract = (cat: Category) => {
    setActiveCategory(cat);
  };

  const scrollToLeadForm = () => {
    const element = document.getElementById('capture-section');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="previa-produtos" className="py-24 bg-brand-cream/30 select-none border-t border-b border-brand-sand/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 reveal-element">
          <span className="text-brand-forest text-xs font-bold uppercase tracking-widest block bg-brand-lime/40 border border-brand-sand px-3 py-1.5 rounded-full inline-block">
            Inovação Científica & Ativos Puros
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-dark tracking-tight leading-[1.2]">
            Fórmulas Ativas em Breve
          </h2>
          <p className="text-sm text-gray-500 font-light leading-relaxed max-w-lg mx-auto">
            Nossos compostos evitam excipientes industriais. Desenvolvemos com minerais quelados de altíssima afinidade biológica para resultados rápidos e rastreáveis.
          </p>
        </div>

        {/* 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal-element">
          {CONCEPT_CATEGORIES.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = activeCategory?.id === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleInteract(cat)}
                className={`border rounded-[28px] p-6 flex flex-col justify-between transition-all duration-300 shadow-sm cursor-pointer hover:shadow-md hover:-translate-y-1 ${
                  isSelected 
                    ? 'border-brand-forest bg-[#F4F3EE] ring-1 ring-brand-forest' 
                    : 'border-brand-sand/60 hover:border-brand-forest/30 bg-brand-light'
                }`}
              >
                <div>
                  {/* Category Status & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`p-3 rounded-2xl ${isSelected ? 'bg-brand-lime text-brand-dark' : 'bg-brand-cream text-brand-forest'} font-bold transition-all`}>
                      <IconComp className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                    <span className={`text-[9px] uppercase tracking-wider font-extrabold px-3 py-1.5 rounded-full transition-all ${
                      isSelected ? 'bg-brand-forest text-brand-lime' : 'bg-brand-lime/20 text-brand-dark border border-brand-sand/50'
                    }`}>
                      {cat.badge}
                    </span>
                  </div>

                  {/* Category Info */}
                  <div className="space-y-3">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">{cat.categoryName}</span>
                    <h3 className="font-sans font-bold text-xl text-brand-dark leading-snug">{cat.name}</h3>
                    <p className="text-xs text-gray-500 font-light leading-relaxed">{cat.description}</p>
                  </div>

                  {/* Preview Ingredients Sheet */}
                  <div className="mt-6 space-y-2">
                    <p className="text-[10px] text-brand-dark uppercase tracking-wider font-bold">Ativos de Elite:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.teaserIngredients.map((ing, idx) => (
                        <span key={idx} className="text-[10px] bg-brand-cream/40 border border-brand-sand/40 text-brand-forest font-semibold px-2.5 py-1 rounded-full font-sans">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive State indicator */}
                <div className="mt-8 pt-4 border-t border-brand-sand/40 flex items-center justify-between text-xs text-brand-dark font-bold">
                  <span className="text-[#6A6C62] text-[11px] font-medium">Analisar Laboratório</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isSelected ? 'bg-brand-lime text-brand-dark scale-110 shadow-sm' : 'bg-brand-cream/50 text-brand-forest'
                  }`}>
                    <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>


        {/* ========================================================================= */}
        {/* INTERACTIVE LAB DASHBOARD (SI LABS INSPIRED) */}
        {/* ========================================================================= */}
        {activeCategory && (
          <div className="mt-16 reveal-element">
            <div className="bg-brand-cream border border-brand-sand p-6 sm:p-10 rounded-[36px] shadow-sm space-y-8">
              
              {/* Dashboard Internal Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-brand-sand/60">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-forest animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-wider text-brand-forest">VITAMEE BIO-LABS CONNECT</span>
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-brand-dark">
                    Painel de Otimização Nutricional de {activeCategory.name}
                  </h3>
                </div>

                {/* Dashboard Mode Selection Swipes */}
                <div className="flex flex-wrap gap-1.5 p-1 bg-brand-sand/65 rounded-full border border-brand-sand">
                  {CONCEPT_CATEGORIES.map(c => (
                    <button
                      key={c.id}
                      onClick={() => setActiveCategory(c)}
                      className={`px-4 py-2 text-[10px] uppercase tracking-wider font-extrabold rounded-full transition-all cursor-pointer ${
                        activeCategory.id === c.id
                          ? 'bg-brand-forest text-brand-lime shadow-xs'
                          : 'text-brand-dark/70 hover:text-brand-dark font-bold'
                      }`}
                    >
                      {c.id}
                    </button>
                  ))}
                </div>
              </div>


              {/* Bento Grid layout representing precisely the layouts upload by the user! */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                
                {/* 1. Left Bento: Capacity / Bioavailability gauge with round circle */}
                <div className="md:col-span-4 bg-brand-lime p-6 rounded-[28px] border border-brand-sand text-brand-dark flex flex-col justify-between space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest font-extrabold text-brand-dark/60 block">absorção estimada</span>
                      <span className="text-3xl font-extrabold tracking-tight block">{activeCategory.absorptionRate}%</span>
                    </div>
                    <div className="p-2.5 bg-brand-forest text-brand-lime rounded-full">
                      <Zap className="w-5 h-5 stroke-[2.5px]" />
                    </div>
                  </div>

                  {/* Circular visual progress chart from the image */}
                  <div className="flex justify-center py-4">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#083220"
                          strokeWidth="10"
                          fill="transparent"
                          strokeDasharray="251"
                          strokeDashoffset={251 - (251 * activeCategory.absorptionRate) / 100}
                          className="transition-all duration-1000 ease-out"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          fill="transparent"
                          opacity="0.15"
                        />
                      </svg>
                      {/* Inside details */}
                      <div className="absolute flex flex-col items-center">
                        <span className="text-xs font-extrabold tracking-widest uppercase text-brand-dark/60">Quelados</span>
                        <span className="text-sm font-black text-brand-forest">MÁXIMO</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom indicators */}
                  <div className="bg-[#FFFFFF]/40 p-4 rounded-2xl flex items-center justify-between text-xs text-brand-dark font-extrabold">
                    <span>Absorção Rápida</span>
                    <span className="bg-brand-forest text-brand-lime text-[10px] px-2.5 py-1 rounded-full font-sans uppercase">
                      {activeCategory.induxTime}
                    </span>
                  </div>
                </div>


                {/* 2. Center Bento: Efficacy Potency chart (vertical bar values) */}
                <div className="md:col-span-5 bg-brand-light p-6 rounded-[28px] border border-brand-sand flex flex-col justify-between space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-[9px] uppercase tracking-widest font-extrabold text-gray-400 block">Efetividade vs Oxidos Sintéticos</span>
                      <h4 className="text-lg font-bold text-brand-dark">Potência de Suplementação Quelada</h4>
                    </div>
                    <span className="text-xs font-bold text-brand-forest bg-brand-lime/30 px-3 py-1 rounded-full border border-brand-sand">
                      Biodisponível Ativo
                    </span>
                  </div>

                  {/* Real-time bar chart mimicking the user's uploaded image widget */}
                  <div className="h-28 flex items-end gap-3.5 pt-4">
                    {activeCategory.potencyBarData.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
                        <div className="relative w-full h-full flex flex-col justify-end">
                          <div
                            style={{ height: `${val}%` }}
                            className={`w-full rounded-full transition-all duration-700 ease-out ${
                              idx === 5 ? 'bg-brand-lime border border-brand-forest/10' : 'bg-brand-forest'
                            }`}
                          />
                        </div>
                        <span className="text-[8px] font-bold text-gray-400 font-mono">L{idx + 1}</span>
                      </div>
                    ))}
                  </div>

                  {/* Summary bar indices */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-sand/40">
                    <div className="p-3 bg-brand-cream/50 rounded-xl">
                      <span className="text-[9px] uppercase font-bold text-gray-400 block">Eficácia total</span>
                      <span className="text-lg font-extrabold text-brand-forest font-sans">99.2%</span>
                    </div>
                    <div className="p-3 bg-brand-cream/50 rounded-xl">
                      <span className="text-[9px] uppercase font-bold text-gray-400 block">Tempo Saturação</span>
                      <span className="text-lg font-extrabold text-brand-forest font-sans">{activeCategory.induxTime}</span>
                    </div>
                  </div>
                </div>


                {/* 3. Right Bento: Parameters & Control buttons */}
                <div className="md:col-span-3 bg-brand-light p-6 rounded-[28px] border border-brand-sand flex flex-col justify-between space-y-6">
                  
                  {/* Purity toggle mimicking the Control/Parameter flow in image */}
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-gray-400 block mb-3">Filtro de Laboratório</span>
                    <div className="p-4 bg-brand-cream/60 border border-brand-sand/50 rounded-2xl flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-extrabold text-brand-dark block">Filtração Molecular</span>
                        <span className="text-[9px] text-gray-400 font-medium block">Padrão Bio-Purificado</span>
                      </div>
                      <button 
                        onClick={handleToggleFilter}
                        className={`w-10 h-6 rounded-full p-0.5 transition-all duration-300 ${ultraFilter ? 'bg-brand-forest' : 'bg-brand-sand'}`}
                      >
                        <div className={`w-5 h-5 rounded-full bg-white transition-all flex items-center justify-center ${ultraFilter ? 'translate-x-4' : 'translate-x-0'}`}>
                          <div className={`w-2.5 h-2.5 rounded-full ${ultraFilter ? 'bg-brand-lime' : 'bg-gray-300'}`} />
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Large dynamic variable indicator screen */}
                  <div className="p-4 bg-brand-forest text-white rounded-2xl space-y-1">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#D2FB50]/80 block">Pureza Analítica</span>
                    <span className="text-2xl font-black text-brand-lime font-sans block">{labPurityLevel}%</span>
                    <span className="text-[9px] text-[#FFFFFF]/70 block font-light leading-normal">
                      {ultraFilter ? 'Livre de dióxido de titânio, corantes sintéticos e aditivos.' : 'Composição sem controle molecular de excipientes.'}
                    </span>
                  </div>

                  {/* Link action VIP button */}
                  <button 
                    onClick={scrollToLeadForm}
                    className="w-full py-3.5 bg-brand-lime text-brand-dark hover:bg-brand-lime-hover transition-all duration-300 rounded-2xl text-[10px] uppercase tracking-widest font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Reservar Lote VIP</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                  </button>

                </div>

              </div>

            </div>
          </div>
        )}


        {/* Premium Scientific Certifications Trust Bar with new styling */}
        <div className="mt-16 bg-brand-forest text-brand-cream rounded-[32px] p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-brand-lime/20 shadow-xl reveal-element">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-brand-lime text-brand-dark rounded-full flex items-center justify-center shrink-0 shadow-lg">
              <Leaf className="w-6 h-6 stroke-[2px]" />
            </div>
            <div>
              <h4 className="font-sans text-lg font-bold text-white">Práticas Honestidade Científica</h4>
              <p className="text-xs text-brand-cream/80 font-light mt-0.5">Certificados por matérias-primas limpas de fornecedores rastreáveis.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-extrabold uppercase tracking-widest text-[#EAE9E2]">
            <span className="flex items-center gap-1.5 border border-brand-cream/10 px-3.5 py-2 rounded-full"><Check className="w-4 h-4 text-brand-lime" /> Zero Tolerância Enchimentos</span>
            <span className="flex items-center gap-1.5 border border-brand-cream/10 px-3.5 py-2 rounded-full"><Check className="w-4 h-4 text-brand-lime" /> Testes Independentes</span>
            <span className="flex items-center gap-1.5 border border-brand-cream/10 px-3.5 py-2 rounded-full"><Check className="w-4 h-4 text-brand-lime" /> Matérias Queladas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
