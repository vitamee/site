export type CategoryId =
  | 'energia'
  | 'imunidade'
  | 'sono'
  | 'beleza'
  | 'performance'
  | 'longevidade';

export interface Product {
  id: string;
  name: string;
  /** sabor, ex: 'Morango Delight' */
  flavor?: string;
  badge?: string;
  badgeColor?: string;
  category: CategoryId;
  subtitle: string;
  shortDesc: string;
  price?: number;
  oldPrice?: number;
  image: string;
  benefits?: string[];
  ingredients?: string[];
  howToUse?: string;
  rating?: number;
  reviewsCount?: number;
  /** produto ainda não lançado — mostra "em breve" e desativa a compra */
  comingSoon?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  /** classe tailwind do acento pastel, ex: 'cat-energia' */
  accent: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}
