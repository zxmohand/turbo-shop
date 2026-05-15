export interface CategoryDisplay {
  id: number;
  name: string; // professional label
  slug: string; // URL-safe slug matching CATEGORIES in products.ts
  description: string; // uppercase subtitle
  image: string;
  items: number;
  trending: boolean;
}

export const CATEGORY_LIST: CategoryDisplay[] = [
  {
    id: 1,
    name: "Apparel",
    slug: "apparel",
    description: "PREMIUM APPAREL",
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    items: 234,
    trending: true,
  },
  {
    id: 2,
    name: "Footwear",
    slug: "footwear",
    description: "FOOTWEAR",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    items: 156,
    trending: true,
  },
  {
    id: 3,
    name: "Tech & Gadgets",
    slug: "tech-gadgets",
    description: "TECH & GADGETS",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    items: 89,
    trending: false,
  },
  {
    id: 4,
    name: "Accessories",
    slug: "accessories",
    description: "STYLE ESSENTIALS",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    items: 178,
    trending: false,
  },
  {
    id: 5,
    name: "Athletic Gear",
    slug: "athletic-gear",
    description: "ATHLETIC GEAR",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    items: 142,
    trending: true,
  },
  {
    id: 6,
    name: "Outdoor & Adventure",
    slug: "outdoor-adventure",
    description: "ADVENTURE READY",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    items: 98,
    trending: false,
  },
];
