export interface Product {
  id: number;
  documentId: string;
  slug: string;
  description: string;
  isNew: boolean;
  active: boolean;
  price: number;
  salePrice: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  name: string;
  images: Image[];
}
