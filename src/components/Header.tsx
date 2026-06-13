import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag, Truck, CreditCard, ShieldCheck } from 'lucide-react';
import Logo from './Logo';

const NAV = [
  { label: 'Início', target: 'inicio' },
  { label: 'Objetivos', target: 'objetivos' },
  { label: 'Produtos', target: 'produtos' },
  { label: 'Sobre Nós', target: 'filosofia' },
  { label: 'Contato', target: 'contato' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (id === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const offset = 96;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Barra de topo (anúncios) */}
      <div className="bg-brand-navy text-white text-[10px] sm:text-[11px] font-medium tracking-wide">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-6 sm:gap-10">
          <span className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-brand-green" /> Frete grátis para todo Brasil</span>
          <span className="hidden sm:flex items-center gap-1.5"><CreditCard className="w-3.5 h-3.5 text-brand-green" /> Parcele em até 6x sem juros</span>
          <span className="hidden md:flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-brand-green" /> Compra 100% segura</span>
        </div>
      </div>

      {/* Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5' : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => scrollToSection('inicio')} className="flex items-center cursor-pointer select-none shrink-0" aria-label="Vitamee — início">
            <Logo className="h-8 sm:h-9" />
          </button>

          {/* Nav desktop */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="text-[13px] font-semibold uppercase tracking-wide text-brand-navy/80 hover:text-brand-green transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-3 sm:gap-4 text-brand-navy">
            <button aria-label="Buscar" className="hidden sm:inline-flex hover:text-brand-green transition-colors cursor-pointer"><Search className="w-5 h-5" /></button>
            <button aria-label="Conta" className="hidden sm:inline-flex hover:text-brand-green transition-colors cursor-pointer"><User className="w-5 h-5" /></button>
            <button aria-label="Carrinho" className="relative hover:text-brand-green transition-colors cursor-pointer">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-brand-green text-white text-[9px] font-bold flex items-center justify-center">0</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1 cursor-pointer"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-brand-border shadow-lg">
            <nav className="px-5 py-4 flex flex-col">
              {NAV.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="py-3 text-left text-sm font-semibold uppercase tracking-wide text-brand-navy/80 hover:text-brand-green border-b border-brand-border/60 last:border-0 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
