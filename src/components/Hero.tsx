import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import showcaseImg from '../assets/images/vitamee_showcase_1781145655594.png';
import brandVideo from '../assets/images/vitamme.mp4';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [vipNumber, setVipNumber] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Generate a random high premium VIP ticket position
    setVipNumber(Math.floor(Math.random() * 800) + 1240);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = ((clientX / innerWidth) - 0.5) * 20;
    const y = ((clientY / innerHeight) - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleResetMouse = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="inicio"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleResetMouse}
      className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-white overflow-hidden select-none"
    >
      {/* Sleek background ambiance with customized white overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src={brandVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-[0.05] saturate-[0.5] scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white" />
      </div>

      {/* Modern, elegant background decorations */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-light rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column Left: High Converting Header & Lead Form */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left reveal-element">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-lime text-brand-dark border border-brand-border/45 rounded-full font-extrabold text-[10px] tracking-widest uppercase shadow-sm font-sans">
              <Sparkles className="w-3.5 h-3.5 text-brand-dark" /> Pré-Lançamento Exclusivo 2026
            </div>

            <div className="space-y-4">
              <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-brand-black">
                Sua melhor versão <br />
                <span className="relative font-serif font-bold italic text-brand-dark">
                  começa hoje.
                  <span className="absolute left-0 bottom-1.5 w-full h-2.5 bg-brand-lime/90 rounded-sm"></span>
                </span>
              </h1>
              
              <p className="font-sans text-sm sm:text-base text-brand-gray max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Suplementação inteligente desenvolvida para quem busca energia, equilíbrio e longevidade.
              </p>
            </div>

            {/* Configured side-by-side active buttons as requested */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => {
                  const element = document.getElementById('previa-produtos');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-lime hover:bg-brand-lime-hover text-brand-black rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-dark animate-pulse" />
                Conheça a Vitamee
              </button>
              
              <button
                onClick={() => {
                  const element = document.getElementById('capture-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    const inputEl = document.getElementById('hero-email-input');
                    if (inputEl) inputEl.focus();
                  }
                }}
                className="w-full sm:w-auto px-8 py-4 bg-brand-black hover:bg-brand-dark text-brand-white rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
              >
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-lime" />
                Entrar na Lista VIP
              </button>
            </div>

            {/* Email Capture Inline Box */}
            <div className="max-w-md mx-auto lg:mx-0 pt-4" id="capture-section">
              {!submitted ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2.5 p-2 bg-white border border-brand-sand rounded-[24px] shadow-sm focus-within:border-brand-forest transition-all">
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Coloque seu melhor e-mail aqui..."
                      className="flex-1 bg-transparent px-4 py-3 text-xs text-brand-dark focus:outline-none placeholder-gray-400 font-sans"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-6 py-3.5 bg-brand-lime hover:bg-brand-lime-hover text-brand-dark rounded-full text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
                      id="hero-email-submit"
                    >
                      {loading ? (
                        <div className="w-4 h-4 rounded-full border-2 border-brand-dark/20 border-t-brand-dark animate-spin" />
                      ) : (
                        <>
                          Entrar na Lista VIP
                          <ArrowRight className="w-3.5 h-3.5 stroke-[3px]" />
                        </>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[10px] text-gray-400 font-sans font-light pl-2">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-forest" />
                    <span>Livre de spam. Seu acesso VIP garante <strong>15% de desconto</strong> no lançamento.</span>
                  </div>
                </form>
              ) : (
                <div className="bg-brand-lime/30 border border-brand-sand p-6 rounded-[32px] space-y-4 text-center lg:text-left animate-[scale-up_0.3s_ease-out]">
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-forest flex items-center justify-center text-brand-lime text-md font-black">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-sans text-lg font-bold text-brand-dark">Presença VIP Confirmada!</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-widest font-mono">Posição na lista: Nº {vipNumber} de 2500 vagas</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-brand-dark/80 leading-relaxed font-light">
                    Obrigado por se juntar à nossa jornada em direção à alta performance fisiológica. Enviamos um cupom exclusivo de <strong>15% OFF</strong> (<strong>VITAMEEVIP</strong>) para seu e-mail <strong className="text-brand-dark font-medium">{email}</strong>. Avisaremos você assim que o lote VIP sair do laboratório.
                  </p>
                </div>
              )}
            </div>

            {/* Social Trust Metrics */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-xs font-light text-gray-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-brand-sand border-2 border-brand-cream flex items-center justify-center text-[10px] font-bold text-brand-dark">MA</div>
                <div className="w-8 h-8 rounded-full bg-brand-lime border-2 border-brand-cream flex items-center justify-center text-[10px] font-bold text-brand-dark">VIP</div>
                <div className="w-8 h-8 rounded-full bg-brand-forest border-2 border-brand-cream flex items-center justify-center text-[10px] font-bold text-brand-lime">★</div>
              </div>
              <span>
                Mais de <strong className="font-bold text-brand-dark">1.200 entusiastas de bem-estar</strong> já aguardam na lista.
              </span>
            </div>
          </div>

          {/* Column Right: Giant premium product showcase as requested */}
          <div className="lg:col-span-5 relative flex items-center justify-center reveal-element">
            <div className="relative w-full max-w-[480px] aspect-square rounded-[36px] bg-brand-light border border-brand-border/60 overflow-hidden shadow-2xl flex items-center justify-center group p-8">
              <img
                src={showcaseImg}
                alt="Produtos Premium Vitamee"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-lime/10 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlaid elegant floating badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-brand-border/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-brand-dark animate-pulse" />
                </div>
                <div className="text-left font-sans">
                  <span className="block font-sans font-extrabold text-[10px] text-brand-dark uppercase tracking-widest leading-none">Alta Performance</span>
                  <span className="block text-[9px] text-[#6B7280] font-light mt-1">Sua melhor versão em movimento constante.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
