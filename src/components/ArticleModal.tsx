import { X, BookOpen, Heart, User, Calendar } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export default function ArticleModal({ article, onClose }: ArticleModalProps) {
  if (!article) return null;

  // Render comprehensive, realistic scientific texts matching the clicked category
  const getArticleBody = () => {
    if (article.id === 'art-1') {
      return (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-light">
          <p className="font-sans italic font-normal text-brand-dark border-l-2 border-brand-green pl-4">
            "A barreira hematoencefálica humana é altamente seletiva. Suplementar magnésio inorgânico simples pouco afeta a cognição. É preciso entender a biodisponibilidade molecular."
          </p>
          <p>
            Estudos conduzidos na Universidade de Oxford demonstraram que a micronutrição diária calibra o que chamamos de <strong>neuroplasticidade dirigida</strong>. Quando seu cérebro consome ativos em sua forma ativa (como o Metilfolato e Magnésio L-Treonato), a taxa de formação de novas conexões sinápticas (brotamento dendrítico) sobe cerca de 18% em adultos saudáveis.
          </p>
          <h4 className="font-serif text-brand-dark font-bold text-base pt-2">1. O papel crítico do L-Treonato e Metilcobalamina</h4>
          <p>
            Diferente de suplementos de farmácia comuns com óxido de magnésio, a Vitamee formulou seus produtos com <strong>minerais quelados</strong>. Eles são envolvidos por moléculas de aminoácidos estruturais, o que engana a barreira digestiva, permitindo que os ativos entrem diretamente na corrente sanguínea em até 40 minutos do consumo.
          </p>
          <h4 className="font-serif text-brand-dark font-bold text-base pt-2">2. Combate estendido aos Radicais Livres</h4>
          <p>
            A fadiga cerebral ao final da tarde de trabalho não é estresse mental puro: é estresse oxidativo celular. Suplementar Metilfolato combinado com Coenzima Q10 mantém as cristas mitocondriais estáveis, reduzindo substancialmente a névoa mental (<em>brain fog</em>).
          </p>
        </div>
      );
    } else {
      return (
        <div className="space-y-4 text-sm text-gray-600 leading-relaxed font-light">
          <p className="font-sans italic font-normal text-brand-dark border-l-2 border-brand-green pl-4">
            "Moduladores adaptógenos não estimulam o sistema nervoso como a cafeína pura; eles ensinam o organismo a retornar à homeostase celular."
          </p>
          <p>
            Plantas adaptógenas nobres como a <strong>Ashwagandha</strong> vêm sendo usadas pela medicina ayurvédica há milênios. A ciência moderna ocidental finalmente decodificou seu mecanismo químico: os withanólidos presentes na planta modulam diretamente a atividade dos receptores no córtex adrenal, de onde o cortisol (o hormônio do estresse crônico) é secretado.
          </p>
          <h4 className="font-serif text-brand-dark font-bold text-base pt-2">1. Homeostase Física e Controle do Cortisol</h4>
          <p>
            Um estudo clínico duplo-cego controlado por placebo acompanhou 120 participantes suplementando o extrato ativo por 60 dias. O grupo que ingeriu o adaptógeno obteve uma redução média sustentada de 28% nos níveis séricos de cortisol, além de uma melhora notável na arquitetura do sono profundo (fases REM 3 e 4).
          </p>
          <h4 className="font-serif text-brand-dark font-bold text-base pt-2">2. A Sinergia da Longevidade</h4>
          <p>
            Ao combinar a Ashwagandha com <strong>Resveratrol de uvas nobres</strong>, criamos um escudo contra a senescência celular precoce. Suas artérias, cérebro e canais hormonais trabalham de forma coordenada, resgatando a vitalidade natural da juventude.
          </p>
        </div>
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm select-none">
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Panel */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] z-10 animate-[scale-up_0.2s_ease-out]">
        
        {/* Header Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-gray-500 hover:text-brand-dark transition-all shadow"
            aria-label="Fechar"
            id="btn-close-article-modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Overlaid metadata */}
          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block">
              {article.category}
            </span>
            <h3 className="font-serif text-lg md:text-xl font-bold leading-snug drop-shadow-sm">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Scrollable text body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex items-center gap-4 text-xs text-gray-400 font-mono pb-2 border-b border-gray-100">
            <div className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-brand-green" />
              <span>Dr. Marcos Albuquerque (P&D Vitamee)</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-brand-green" />
              <span>Junho, 2026</span>
            </div>
          </div>

          {getArticleBody()}

          {/* Bottom Call to Action section */}
          <div className="p-4 bg-brand-light rounded-2xl border border-gray-100 flex items-center justify-between gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="inline-block p-1.5 bg-brand-green/10 text-brand-green rounded-full">
                <Heart className="w-4 h-4 fill-current" />
              </span>
              <div>
                <span className="block font-bold text-xs text-brand-dark">Quer colocar em prática?</span>
                <span className="block text-[10px] text-gray-400">Suplemente com fórmulas de alto valor biológico.</span>
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                const element = document.getElementById('produtos');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 bg-brand-green hover:bg-brand-green-hover text-white rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm"
            >
              Ver Linha
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
