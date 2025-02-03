export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  rating?: number;
  reviews?: number;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  products: Product[];
}
