import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard, Sparkles, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (productId: string, newQty: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQty,
  onRemoveItem,
  onClearCart
}: CartDrawerProps) {
  const [coupon, setCoupon] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0); // 0% to 15%
  const [couponMessage, setCouponMessage] = useState('');
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'loading' | 'success'>('cart');
  const [checkoutName, setCheckoutName] = useState('');
  const [checkoutPhone, setCheckoutPhone] = useState('');
  const [checkoutEmail, setCheckoutEmail] = useState('');

  if (!isOpen) return null;

  // Calculos de frete e valor
  const itemsSubtotal = cartItems.reduce((acc, curr) => acc + curr.product.price * curr.quantity, 0);
  const discountVal = itemsSubtotal * appliedDiscount;
  const deliveryFee = itemsSubtotal > 150 || itemsSubtotal === 0 ? 0 : 15.90;
  const totalVal = Math.max(0, itemsSubtotal - discountVal + deliveryFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'VITAMEE10') {
      setAppliedDiscount(0.10);
      setCouponMessage('Cupom de 10% OFF aplicado com sucesso!');
    } else if (coupon.trim().toUpperCase() === 'ORGANICO15') {
      setAppliedDiscount(0.15);
      setCouponMessage('Cupom de 15% OFF aplicado com sucesso!');
    } else {
      setCouponMessage('Cupom inválido. Tente VITAMEE10.');
    }
  };

  const handleStartCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutName || !checkoutEmail) {
      alert('Por favor, preencha nome e e-mail para finalizar.');
      return;
    }
    setCheckoutStep('loading');
    setTimeout(() => {
      setCheckoutStep('success');
    }, 2000);
  };

  const handleResetCheckoutState = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm select-none">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Sidebar Content */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-[slide-in_0.3s_ease-out]">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-brand-green" />
            <h3 className="font-serif text-lg font-bold text-brand-dark">Seu Carrinho de Saúde</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-brand-dark transition-all"
            id="btn-close-cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Steps */}
        {checkoutStep === 'cart' ? (
          <>
            {/* Scrollable Cart Items Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-gray-300">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-bold text-sm text-brand-dark">Carrinho Vazio</span>
                    <span className="block text-xs text-gray-400">Seu corpo está aguardando os micronutrientes. Adicione produtos para começar.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-4 rounded-2xl bg-brand-light border border-gray-150 relative group"
                    >
                      {/* Product Thumbnail */}
                      <div className="w-16 h-16 bg-white border border-gray-100 rounded-xl overflow-hidden p-1 shrink-0 flex items-center justify-center">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Detail Column */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-1">
                            <span className="font-serif text-sm font-bold text-brand-dark line-clamp-1">{item.product.name}</span>
                            <button
                              onClick={() => onRemoveItem(item.product.id)}
                              className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              title="Remover"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-[10px] text-gray-400 uppercase tracking-wider block font-bold mt-0.5">{item.product.subtitle}</span>
                        </div>

                        {/* Quantity controls and price tag */}
                        <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100/50">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => onUpdateQty(item.product.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-dark hover:border-brand-green transition-all"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-mono font-bold text-brand-dark w-5 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateQty(item.product.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-dark hover:border-brand-green transition-all"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <span className="text-sm font-extrabold text-brand-dark">R$ {(item.product.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Calculations and Coupon Forms */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-gray-100 bg-[#FFFFFF] space-y-4 shadow-[0_-8px_20px_-8px_rgba(0,0,0,0.05)]">
                {/* Coupon Apply */}
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="VOCÊ TEM CUPOM? Ex: VITAMEE10"
                    className="flex-1 bg-brand-light border border-gray-200 px-3 py-2 rounded text-xs tracking-wider uppercase focus:outline-none focus:border-brand-green font-semibold"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-dark hover:bg-brand-medium text-white text-[10px] uppercase tracking-widest font-bold rounded transition-colors"
                  >
                    Aplicar
                  </button>
                </form>
                {couponMessage && (
                  <p className="text-[10px] text-brand-green font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> {couponMessage}
                  </p>
                )}

                {/* Subtotals Layout */}
                <div className="space-y-1.5 text-xs text-gray-500 pt-2 font-light">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R$ {itemsSubtotal.toFixed(2)}</span>
                  </div>
                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-brand-green font-medium">
                      <span>Desconto Aplicado ({appliedDiscount * 100}%)</span>
                      <span>- R$ {discountVal.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Frete Nacional de Saúde</span>
                    <span>{deliveryFee === 0 ? <strong className="text-brand-green font-bold font-sans">GRÁTIS</strong> : `R$ ${deliveryFee.toFixed(2)}`}</span>
                  </div>
                  
                  {deliveryFee > 0 && (
                    <p className="text-[9px] text-[#2d9449] italic">Adicione mais R$ {(150 - itemsSubtotal).toFixed(2)} para ganhar frete grátis.</p>
                  )}

                  <div className="h-[1px] bg-gray-100 my-2" />
                  <div className="flex justify-between text-base font-bold text-brand-dark">
                    <span>Total Estimado</span>
                    <span>R$ {totalVal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Simulated Checkout Box */}
                <form onSubmit={handleStartCheckout} className="space-y-3 pt-2">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-brand-dark block tracking-wider">Identificação do Pedido</span>
                    <input
                      required
                      type="text"
                      value={checkoutName}
                      onChange={(e) => setCheckoutName(e.target.value)}
                      placeholder="Qual é o seu nome completo?"
                      className="w-full bg-brand-light border border-gray-200 px-3 py-2 rounded text-xs focus:outline-none focus:border-brand-green"
                    />
                    <input
                      required
                      type="email"
                      value={checkoutEmail}
                      onChange={(e) => setCheckoutEmail(e.target.value)}
                      placeholder="Seu melhor e-mail (para receber rastreamento)"
                      className="w-full bg-brand-light border border-gray-200 px-3 py-2 rounded text-xs focus:outline-none focus:border-brand-green"
                    />
                    <input
                      type="text"
                      value={checkoutPhone}
                      onChange={(e) => setCheckoutPhone(e.target.value)}
                      placeholder="WhatsApp (avisos de entrega opcional)"
                      className="w-full bg-brand-light border border-gray-200 px-3 py-2 rounded text-xs focus:outline-none focus:border-brand-green"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-green hover:bg-brand-green-hover text-white rounded-xl text-xs uppercase tracking-widest font-extrabold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    id="btn-complete-checkout"
                  >
                    <CreditCard className="w-4 h-4" /> Finalizar & Gerar Pedido
                  </button>
                </form>
              </div>
            )}
          </>
        ) : checkoutStep === 'loading' ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-4">
            {/* Spinning clean loader */}
            <div className="w-10 h-10 rounded-full border-2 border-brand-green/20 border-t-brand-green animate-spin" />
            <div>
              <h4 className="font-serif text-lg font-bold text-brand-dark">Conectando ao Lab de Logística</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-xs">Reservando seus lotes frescos de suplementos biodisponíveis na fábrica...</p>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-3xl animate-bounce">
              ✓
            </div>
            
            <div className="space-y-2">
              <h4 className="font-serif text-2xl font-bold text-brand-dark">Seu Pedido foi Gerado!</h4>
              <p className="text-xs text-brand-green font-bold">Reserva confirmada no lote nºVT-{(Math.random() * 9999 + 1000).toFixed(0)}</p>
              <p className="text-xs text-gray-500 font-light max-w-xs leading-relaxed mt-2">
                Parabéns pelo investimento em sua fisiologia, <strong className="text-brand-dark font-medium">{checkoutName}</strong>! Enviamos um resumo estruturado e as instruções para o seu e-mail <strong className="text-brand-dark font-medium">{checkoutEmail}</strong>.
              </p>
            </div>

            <div className="p-4 bg-brand-light border border-gray-150 rounded-2xl w-full text-left space-y-1 text-xs">
              <span className="block font-bold text-brand-dark text-[10px] uppercase tracking-wider">Próximos Passos:</span>
              <p className="text-gray-500 font-light">• Envio em até 12 horas úteis da fábrica.</p>
              <p className="text-gray-500 font-light">• Código de rastreamento enviado via e-mail e SMS.</p>
            </div>

            <button
              onClick={handleResetCheckoutState}
              className="w-full py-3 bg-brand-green hover:bg-brand-green-hover text-white rounded-lg text-xs uppercase tracking-widest font-bold transition-all"
              id="btn-finished-checkout-done"
            >
              Voltar à Loja
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
