export interface Category {
  id: number
  documentId: string
  name: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  locale: any
  description: string
  minimage: Image | null;
  localizations: any[]
}