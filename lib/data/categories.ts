export interface CategoryDisplay {
  id: number;
  name: string; // professional label (Department Name)
  slug: string; // URL-safe slug matching DEPARTMENTS in products.ts
  description: string; // uppercase subtitle
  image: string;
  items: number;
  trending: boolean;
}

export const CATEGORY_LIST: CategoryDisplay[] = [
  {
    id: 1,
    name: "Men's Fashion",
    slug: "mens-fashion",
    description: "PREMIUM MENSWEAR",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
    items: 450,
    trending: true,
  },
  {
    id: 2,
    name: "Women's Fashion",
    slug: "womens-fashion",
    description: "ELEGANT WOMENSWEAR",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    items: 620,
    trending: true,
  },
  {
    id: 3,
    name: "Kids",
    slug: "kids",
    description: "KIDS & TOYS",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
    items: 280,
    trending: false,
  },
  {
    id: 4,
    name: "Electronics",
    slug: "electronics",
    description: "NEXT-GEN TECH",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    items: 340,
    trending: true,
  },
  {
    id: 5,
    name: "Home & Living",
    slug: "home-living",
    description: "MODERN INTERIORS",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    items: 510,
    trending: false,
  },
];
