import React, { useState } from 'react';
import { Instagram, Facebook, CheckCircle } from 'lucide-react';
import Logo from './Logo';

const COLS = [
  {
    title: 'Institucional',
    links: ['Sobre nós', 'Nossa filosofia', 'Certificações', 'Trabalhe conosco'],
  },
  {
    title: 'Produtos',
    links: ['Todos os produtos', 'Kits', 'Vitaminas', 'Gomas e pastilhas'],
  },
  {
    title: 'Ajuda',
    links: ['Perguntas frequentes', 'Entrega e prazos', 'Trocas e devoluções', 'Fale conosco'],
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail('');
  };

  return (
    <footer id="contato">
      {/* Newsletter band */}
      <div className="bg-brand-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="font-display font-bold text-2xl sm:text-3xl">Conteúdo que transforma sua rotina.</h3>
            <p className="text-sm text-white/70 mt-1">Receba dicas de saúde, bem-estar e novidades exclusivas.</p>
          </div>
          {!submitted ? (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-2">
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-white/20 text-sm text-white placeholder-white/50 focus:outline-none focus:border-brand-green"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-brand-gold hover:brightness-110 text-brand-navy rounded-full text-xs uppercase tracking-widest font-bold transition-all cursor-pointer shrink-0"
              >
                Assinar
              </button>
            </form>
          ) : (
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm">
              <CheckCircle className="w-4 h-4 text-brand-green" /> Inscrição confirmada!
            </div>
          )}
        </div>
      </div>

      {/* Footer body */}
      <div className="bg-white border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-3 space-y-4">
            <Logo className="h-9" />
            <p className="text-xs text-brand-gray leading-relaxed">Vitamina para sua melhor versão.</p>
            <div className="flex items-center gap-3 text-brand-navy">
              <a href="https://www.instagram.com/usevitamee" target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="https://www.tiktok.com/@vitameebr" target="_blank" rel="noreferrer" className="hover:text-brand-green transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-3">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-brand-navy mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <span className="text-xs text-brand-gray hover:text-brand-green transition-colors cursor-pointer">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagamentos e selos */}
        <div className="border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-[11px] text-brand-gray">
              <span className="font-semibold text-brand-navy mr-1">Pagamento:</span>
              {['Visa', 'Master', 'Pix', 'Boleto'].map((m) => (
                <span key={m} className="px-2 py-1 bg-brand-cream rounded border border-brand-border font-semibold">{m}</span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-brand-gray">
              <span className="font-semibold text-brand-navy mr-1">Segurança:</span>
              {['SSL', 'BPA Free', 'ANVISA'].map((s) => (
                <span key={s} className="px-2 py-1 bg-brand-cream rounded border border-brand-border font-semibold">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-brand-cream border-t border-brand-border py-5 text-center">
          <p className="text-[11px] text-brand-gray">© 2026 Vitamee. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
