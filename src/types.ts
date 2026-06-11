export interface Product {
  id: string;
  name: string;
  badge: string;
  badgeColor: string; // e.g. green, blue, yellow
  subtitle: string;
  shortDesc: string;
  price: number;
  oldPrice: number;
  image: string;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

