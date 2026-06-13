import React from 'react';
import logoVitamee from '../assets/images/logo_vitamee.png';

interface LogoProps {
  className?: string;
  /** Em fundo escuro (navy), envolve a logo num "pill" branco pra leitura */
  onDark?: boolean;
  withBg?: boolean;
}

export default function Logo({ className = 'h-9', onDark = false, withBg = false }: LogoProps) {
  const needsBg = onDark || withBg;

  return (
    <span
      className={`inline-flex items-center justify-center transition-all duration-300 ${
        needsBg ? 'bg-white px-3 py-1.5 rounded-2xl shadow-sm' : ''
      }`}
    >
      <img
        src={logoVitamee}
        alt="Vitamee — Vitamina para sua melhor versão"
        className={`w-auto object-contain ${className}`}
        draggable={false}
      />
    </span>
  );
}
