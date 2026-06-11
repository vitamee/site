import { X, CheckCircle, Leaf, HelpCircle, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductQuickViewModal({ product, onClose, onAddToCart }: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm select-none">
      {/* Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[80vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-brand-dark transition-all shadow border border-gray-100 z-10"
          aria-label="Fechar"
          id="btn-close-quickview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Column 1: Image & Highlight */}
        <div className="w-full md:w-1/2 bg-brand-light p-6 flex flex-col items-center justify-center border-r border-gray-100 min-h-[220px] md:min-h-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-3/4 h-auto max-h-[240px] object-contain drop-shadow-md animate-[pulse_8s_ease-in-out_infinite]"
            referrerPolicy="no-referrer"
          />
          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/15 text-brand-green font-bold text-[10px] uppercase tracking-wider">
              <Leaf className="w-3 h-3" strokeWidth={2.5} /> Matérias-Primas Certificadas
            </span>
          </div>
        </div>

        {/* Column 2: In-depth Formula Data */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-amber-500 text-xs">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-bold">{product.rating.toFixed(1)}</span>
              <span className="text-gray-400 font-normal"> / 5.0 baseada em 1k+ avaliações reais</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-brand-dark mt-2">{product.name}</h3>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{product.subtitle}</p>
            <p className="text-xs text-gray-500 font-light mt-3 leading-relaxed">{product.shortDesc}</p>

            <div className="h-[1px] bg-gray-100 my-4" />

            {/* Benefits Checklist */}
            <div className="space-y-2">
              <h4 className="font-sans font-bold text-[11px] text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-brand-green stroke-2" /> Atuação e Benefícios:
              </h4>
              <ul className="space-y-1.5 pl-5 list-disc text-xs text-gray-500 font-light">
                {product.benefits.map((ben, idx) => (
                  <li key={idx}>{ben}</li>
                ))}
              </ul>
            </div>

            <div className="h-[1px] bg-gray-100 my-4" />

            {/* Ingredients & Actives */}
            <div className="space-y-2">
              <h4 className="font-sans font-bold text-[11px] text-brand-dark uppercase tracking-widest flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-500 stroke-2" /> Ficha Nutricional Integrada:
              </h4>
              <p className="text-[10px] text-gray-400">Ativos biodisponíveis por porção diária recomendada:</p>
              
              <div className="grid grid-cols-2 gap-2 pt-1">
                {product.ingredients.map((ing, idx) => (
                  <div key={idx} className="bg-brand-light p-2 rounded-lg border border-gray-100/50 flex flex-col justify-center">
                    <span className="text-[10px] text-brand-dark font-medium leading-tight">{ing}</span>
                    <span className="text-[8px] text-brand-green font-bold uppercase tracking-wider font-mono">Alta Absorção</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-gray-100 my-4" />

            {/* How to use info */}
            <div className="bg-brand-green/5 p-3 rounded-xl border border-brand-green/10 space-y-1">
              <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider block">Como tomar:</span>
              <p className="text-xs text-gray-600 font-light leading-snug">{product.howToUse}</p>
            </div>
          </div>

          {/* Checkout triggers inside Quickview */}
          <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] text-gray-400 block font-semibold">Preço Especial</span>
              <span className="text-xl font-extrabold text-brand-dark">R$ {product.price.toFixed(2)}</span>
            </div>
            
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="flex-1 py-3 px-5 bg-brand-green hover:bg-brand-green-hover text-white rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              id="btn-add-cart-quickview"
            >
              Adicionar ao Carrinho
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
