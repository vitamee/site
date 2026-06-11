import { Product, Article } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'diario',
    name: 'Vitamee Diário',
    badge: 'Mais Vendido',
    badgeColor: 'brand-green',
    subtitle: 'Suplementação essencial e diária',
    shortDesc: 'A base que o seu corpo precisa para manter a imunidade alta, o metabolismo ativo e a energia constante ao longo do dia.',
    price: 129.90,
    oldPrice: 159.90,
    image: '/src/assets/images/vitamee_diario_1781132066272.png',
    benefits: [
      'Estreita e fortalece o sistema imunológico',
      'Auxilia na absorção de micronutrientes essenciais',
      'Combate o cansaço físico estrutural',
      'Minerais quelatos com altíssima absorção celular'
    ],
    ingredients: [
      'Vitamina C (L-ascorbato de cálcio)',
      'Vitamina D3 (Colecalciferol vegano)',
      'Metilfolato (B9 ativa)',
      'Metilcobalamina (B12 ativa)',
      'Zinco Bisglicinato',
      'Selênio Quelato'
    ],
    howToUse: 'Tomar 1 cápsula pela manhã junto à primeira refeição para melhor absorção.',
    rating: 4.9,
    reviewsCount: 1420
  },
  {
    id: 'foco',
    name: 'Vitamee Foco',
    badge: 'Alta Performance',
    badgeColor: 'blue-600',
    subtitle: 'Nitidez mental e foco absoluto',
    shortDesc: 'Formulado com nootrópicos naturais para otimizar suas conexões neurais, promovendo clareza, memória e produtividade sem agitação.',
    price: 149.90,
    oldPrice: 189.90,
    image: '/src/assets/images/vitamee_foco_1781132080788.png',
    benefits: [
      'Melhora imediata da concentração e foco estendido',
      'Estimula a neuroproteção e a memória de curto prazo',
      'Reduz a névoa mental (brain fog) do fim de tarde',
      'Energia cognitiva fluida e sem picos de ansiedade'
    ],
    ingredients: [
      'L-Teanina',
      'Fosfatidilserina',
      'Extrato de Bacopa Monnieri',
      'Coenzima Q10',
      'Magnésio Treonato',
      'Cafeína microencapsulada de liberação lenta'
    ],
    howToUse: 'Tomar 1 a 2 cápsulas logo ao iniciar suas tarefas mais desafiadoras.',
    rating: 4.8,
    reviewsCount: 840
  },
  {
    id: 'vitalidade',
    name: 'Vitamee Vitalidade',
    badge: 'Fórmula Premium',
    badgeColor: 'amber-500',
    subtitle: 'Longevidade corpórea e equilíbrio',
    shortDesc: 'Poderosos fitoterápicos de adaptógenos para modular os hormônios do estresse, fortalecer tecidos corporais e restaurar o vigor natural.',
    price: 139.90,
    oldPrice: 169.90,
    image: '/src/assets/images/vitamee_vitalidade_1781132093907.png',
    benefits: [
      'Reduz sintomas de estresse e fadiga adrenal',
      'Ação antioxidante contra o envelhecimento celular',
      'Melhora a regeneração muscular e o sono',
      'Equilibra a disposição física integral'
    ],
    ingredients: [
      'Ashwagandha Organic Extract',
      'Coenzima Q10 Premium',
      'Resveratrol de uvas nobres',
      'Extrato de Gengibre concentrado',
      'Vitamina E natural (Tocoferol)',
      'Picolinato de Cromo'
    ],
    howToUse: 'Tomar 1 cápsula à noite ou ao final do dia para induzir o relaxamento e recuperação.',
    rating: 5.0,
    reviewsCount: 610
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Como a micronutrição diária afeta a sua neuroplasticidade e disposição cerebral.',
    category: 'Suplementos e Rotina',
    readTime: '4 min de leitura',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
    slug: 'suplementos-rotina-neuroplasticidade'
  },
  {
    id: 'art-2',
    title: 'Entendendo adaptógenos: como plantas milenares modulam o cortisol e estresse.',
    category: 'Saúde e Ciência',
    readTime: '6 min de leitura',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600',
    slug: 'entendendo-adaptogenos-saude'
  }
];
