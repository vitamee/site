import { Product, Category, Article } from '../types';

// Fotos reais dos potes (recortadas dos materiais em /produtos)
import imgMorango from '../assets/images/vitamee_morango_sq.jpeg';
import imgAbacaxi from '../assets/images/vitamee_abacaxi.jpeg';
import imgMaracuja from '../assets/images/vitamee_maracuja.jpeg';
import imgLimao from '../assets/images/vitamee_limao.jpeg';
import imgOmega3 from '../assets/images/vitamee_omega3.jpeg';

// ⚠️ "Em breve": ainda usando artes antigas como placeholder até ter foto real
import imgDiario from '../assets/images/vitamee_diario_1781132066272.png';
import imgFoco from '../assets/images/vitamee_foco_1781132080788.png';
import imgVitalidade from '../assets/images/vitamee_vitalidade_1781132093907.png';
import imgStory from '../assets/images/vitamee_story_woman_1781132110424.png';

export const CATEGORIES: Category[] = [
  { id: 'energia',      name: 'Energia',      tagline: 'Mais disposição para o seu dia',        accent: 'energia' },
  { id: 'imunidade',    name: 'Imunidade',    tagline: 'Proteção para viver melhor',           accent: 'imunidade' },
  { id: 'sono',         name: 'Sono',         tagline: 'Noites melhores, dias melhores',        accent: 'sono' },
  { id: 'beleza',       name: 'Beleza',       tagline: 'Cabelos, pele e unhas saudáveis',       accent: 'beleza' },
  { id: 'performance',  name: 'Performance',  tagline: 'Mais foco, força e melhores resultados', accent: 'performance' },
  { id: 'longevidade',  name: 'Longevidade',  tagline: 'Saúde hoje, qualidade para sempre',     accent: 'longevidade' },
];

// Base comum da linha Vitaminas e Minerais (90 gummies, sem glúten/açúcar/gelatina)
const VM_BENEFITS = [
  'Vitamina C & antioxidantes',
  'Sem glúten, sem açúcar, sem gelatina',
  '90 gummies por pote',
  'Sabor delicioso, zero culpa',
];
const VM_INGREDIENTS = ['Vitamina C', 'Vitamina D', 'Complexo B', 'Zinco', 'Selênio'];
const VM_HOWTO = 'Tomar 2 gummies por dia, de preferência junto a uma refeição.';

// ⚠️ PREÇOS PLACEHOLDER — confirmar os valores reais com o Luan antes de divulgar
const VM_PRICE = 89.90;
const OMEGA_PRICE = 99.90;

export const PRODUCTS: Product[] = [
  {
    id: 'vm-morango',
    name: 'Vitaminas e Minerais',
    flavor: 'Morango Delight',
    badge: 'Mais Vendido',
    badgeColor: 'brand-green',
    category: 'imunidade',
    subtitle: 'Gummies sabor morango — vitaminas e minerais essenciais',
    shortDesc: 'O complexo diário de vitaminas e minerais essenciais, em gummies sabor morango irresistível.',
    price: VM_PRICE,
    image: imgMorango,
    benefits: VM_BENEFITS,
    ingredients: VM_INGREDIENTS,
    howToUse: VM_HOWTO,
    rating: 4.9,
    reviewsCount: 1420,
  },
  {
    id: 'vm-abacaxi',
    name: 'Vitaminas e Minerais',
    flavor: 'Abacaxi Delight',
    category: 'imunidade',
    subtitle: 'Gummies sabor abacaxi — vitaminas e minerais essenciais',
    shortDesc: 'Vitaminas e minerais essenciais em gummies refrescantes sabor abacaxi.',
    price: VM_PRICE,
    image: imgAbacaxi,
    benefits: VM_BENEFITS,
    ingredients: VM_INGREDIENTS,
    howToUse: VM_HOWTO,
    rating: 4.8,
    reviewsCount: 760,
  },
  {
    id: 'vm-maracuja',
    name: 'Vitaminas e Minerais',
    flavor: 'Maracujá Delight',
    badge: 'Novo',
    badgeColor: 'cat-energia',
    category: 'imunidade',
    subtitle: 'Gummies sabor maracujá — vitaminas e minerais essenciais',
    shortDesc: 'Vitaminas e minerais essenciais em gummies sabor maracujá, do jeitinho que o brasileiro ama.',
    price: VM_PRICE,
    image: imgMaracuja,
    benefits: VM_BENEFITS,
    ingredients: VM_INGREDIENTS,
    howToUse: VM_HOWTO,
    rating: 4.8,
    reviewsCount: 540,
  },
  {
    id: 'vm-limao',
    name: 'Vitaminas e Minerais',
    flavor: 'Limão Delight',
    category: 'imunidade',
    subtitle: 'Gummies sabor limão — vitaminas e minerais essenciais',
    shortDesc: 'Vitaminas e minerais essenciais em gummies sabor limão fresh, leves e deliciosas.',
    price: VM_PRICE,
    image: imgLimao,
    benefits: VM_BENEFITS,
    ingredients: VM_INGREDIENTS,
    howToUse: VM_HOWTO,
    rating: 4.7,
    reviewsCount: 480,
  },
  {
    id: 'omega-3',
    name: 'Ômega 3 Gummies',
    flavor: 'Laranja-Cítrico',
    badge: 'Fórmula Concentrada',
    badgeColor: 'cat-energia',
    category: 'longevidade',
    subtitle: 'Gummies com DHA & EPA — coração e cérebro',
    shortDesc: 'Ômega 3 (DHA & EPA) em gummies sabor laranja-cítrico, sem gosto de peixe. Auxilia na saúde cardiovascular.',
    price: OMEGA_PRICE,
    image: imgOmega3,
    benefits: [
      'Com DHA & EPA — fórmula concentrada',
      'Auxilia na saúde cardiovascular',
      'Sem açúcar, sem gelatina',
      '90 gummies por pote',
    ],
    ingredients: ['Ômega 3 (DHA e EPA)', 'Vitamina E'],
    howToUse: 'Tomar 2 gummies por dia.',
    rating: 4.8,
    reviewsCount: 610,
  },

  // ───────── Em breve ─────────
  {
    id: 'hair-skin',
    name: 'Hair & Skin Gummies',
    category: 'beleza',
    subtitle: 'Cabelos, pele e unhas saudáveis',
    shortDesc: 'Beleza que começa de dentro — biotina, colágeno e vitaminas para cabelos, pele e unhas.',
    image: imgDiario,
    comingSoon: true,
  },
  {
    id: 'melatonina',
    name: 'Melatonina Gummies',
    category: 'sono',
    subtitle: 'Sono profundo e recuperador',
    shortDesc: 'Gummies que ajudam a pegar no sono mais rápido e acordar renovado.',
    image: imgVitalidade,
    comingSoon: true,
  },
  {
    id: 'b12-energy',
    name: 'B12 Energy Gummies',
    category: 'energia',
    subtitle: 'Energia e foco para o seu dia',
    shortDesc: 'Vitamina B12 de alta absorção em gummies — energia constante e foco.',
    image: imgStory,
    comingSoon: true,
  },
  {
    id: 'bcaa',
    name: 'BCAA Gummies',
    category: 'performance',
    subtitle: 'Força e recuperação muscular',
    shortDesc: 'Aminoácidos essenciais em gummies — para treinar mais e recuperar melhor.',
    image: imgFoco,
    comingSoon: true,
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Como a suplementação diária afeta sua energia e disposição ao longo do dia.',
    category: 'Saúde e Rotina',
    readTime: '4 min de leitura',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    slug: 'suplementacao-diaria-energia',
  },
  {
    id: 'art-2',
    title: 'Gummies funcionam mesmo? Entenda a ciência por trás das gomas funcionais.',
    category: 'Saúde e Ciência',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    slug: 'gummies-funcionam-ciencia',
  },
];
