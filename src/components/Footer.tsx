import React, { useState } from 'react';
import { Send, Instagram, Facebook, ShieldCheck, Mail, Heart, CheckCircle } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer id="contato" className="bg-brand-cream border-t border-brand-sand select-none">
      
      {/* Upper Section: Elegant Secondary Leads Capture Container */}
      <div className="py-20 bg-brand-sand/40 border-b border-brand-sand/50">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 reveal-element">
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-brand-forest">Faça parte do ecossistema</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-dark animate-none">
              Garanta sua prioridade no lote zero
            </h3>
            <p className="text-xs text-[#6A6C62] font-light max-w-lg mx-auto leading-relaxed">
              Nossas primeiras fórmulas frescas de laboratório serão limitadas a apenas 150 unidades por lote. Garanta seu alerta preferencial e <strong>15% de desconto</strong> se cadastrando abaixo.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor endereço de e-mail..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-brand-sand focus:outline-none focus:border-brand-forest rounded-full text-xs text-brand-dark transition-all"
                  disabled={loading}
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-brand-forest hover:bg-brand-forest-hover text-brand-lime rounded-full transition-all duration-300 shadow hover:shadow-md flex items-center justify-center gap-2 shrink-0 disabled:opacity-50 cursor-pointer text-xs font-bold"
                id="btn-subscribe-email"
                aria-label="Inscrever"
              >
                {loading ? (
                  <div className="w-4 h-4 rounded-full border-2 border-brand-lime/20 border-t-brand-lime animate-spin" />
                ) : (
                  <Send className="w-4 h-4 stroke-[2.5px]" />
                )}
              </button>
            </form>
          ) : (
            <div className="bg-brand-lime/30 border border-brand-sand text-brand-dark text-xs font-bold py-4 px-6 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 shrink-0 text-brand-forest" />
              <span>Inscrição Confirmada! Você faz parte do lote preferencial Vitamee.</span>
            </div>
          )}
        </div>
      </div>

      {/* Middle Section: Links & Structural Index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 reveal-element">
        
        {/* Brand details */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          {/* Logo with click interaction */}
          <div className="flex items-center justify-center md:justify-start py-1 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo withBg={true} className="h-8 sm:h-9 transition-transform duration-500 hover:scale-105" />
          </div>

          <p className="text-xs text-gray-500 font-light leading-relaxed">
            Mais do que suplementos de alta qualidade, estamos construindo uma comunidade unida pelo autocuidado inteligente. Faça parte do movimento Vitamee antes do lançamento oficial e receba em primeira mão os pilares para uma rotina mais leve e saudável.
          </p>

          <div className="flex items-center justify-center md:justify-start gap-4 text-[#6A6C62]">
            <a href="https://www.instagram.com/usevitamee" target="_blank" rel="noreferrer" className="hover:text-brand-forest transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com/@vitameebr" target="_blank" rel="noreferrer" className="hover:text-brand-forest transition-colors" aria-label="TikTok">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-forest transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Structural Links Left */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          <span className="text-[10px] uppercase font-bold tracking-widest text-brand-dark">Navegação Rápida</span>
          <ul className="space-y-2 text-xs text-[#6A6C62] font-semibold animate-none">
            <li>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-brand-forest transition-colors cursor-pointer">Início</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('manifesto')} className="hover:text-brand-forest transition-colors cursor-pointer">Nosso Manifesto</button>
            </li>
          </ul>
        </div>

        {/* Trust certificates and info */}
        <div className="md:col-span-4 space-y-4 text-center md:text-left">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#1A1A1A]">Compromisso Científico</span>
          
          <div className="space-y-3 bg-brand-light p-4 rounded-3xl border border-brand-sand">
            <div className="flex gap-3 items-start text-left text-xs">
              <ShieldCheck className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
              <div>
                <span className="block font-bold text-brand-dark">Pureza Rastreável</span>
                <span className="block text-gray-400 text-[10px] mt-0.5 leading-normal font-light">Todas as fórmulas seguem normativas da ANVISA e passam por análises laboratoriais independentes de pureza microbiológica.</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom Block */}
      <div className="border-t border-brand-sand py-8 text-center bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#6A6C62] font-semibold">
          <div>
            <span>© 2026 Vitamee Suplementos. Todos os direitos reservados. CNPJ: 12.345.678/0001-90</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center">
            <span>Criado com</span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
            <span>para sua melhor versão.</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
