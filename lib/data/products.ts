
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string; // e.g. "-40%"
  category: string; // matches CATEGORIES[].slug
  sizes?: string[];
  image: string;
  badge?: string;
  badgeColor?: "primary" | "destructive" | "secondary";
  trending?: boolean;
}

export interface CategoryMeta {
  slug: string;
  label: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { slug: "apparel", label: "Apparel" },
  { slug: "footwear", label: "Footwear" },
  { slug: "tech-gadgets", label: "Tech & Gadgets" },
  { slug: "accessories", label: "Accessories" },
  { slug: "athletic-gear", label: "Athletic Gear" },
  { slug: "outdoor-adventure", label: "Outdoor & Adventure" },
];

// Helper: get label by slug
export function getCategoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export const ALL_PRODUCTS: Product[] = [
  // Footwear
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    category: "footwear",
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
  },
  {
    id: 2,
    name: "Velocity Runner",
    price: 54.0,
    originalPrice: 90.0,
    discount: "-40%",
    category: "footwear",
    sizes: ["M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
    trending: true,
  },
  {
    id: 3,
    name: "Air Zoom Pegasus",
    price: 89.99,
    originalPrice: 150.0,
    discount: "-40%",
    category: "footwear",
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
  },
  {
    id: 4,
    name: "Trail Blazer Boots",
    price: 129.99,
    category: "footwear",
    sizes: ["M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=600&q=80",
  },

  // Apparel
  {
    id: 5,
    name: "Twill Cargo Pants",
    price: 59.5,
    category: "apparel",
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
  },
  {
    id: 6,
    name: "Graphic Tee",
    price: 25.0,
    category: "apparel",
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    id: 7,
    name: "Aero Gym Tee",
    price: 24.5,
    originalPrice: 35.0,
    discount: "-30%",
    category: "apparel",
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    badge: "HOT",
    badgeColor: "destructive",
  },
  {
    id: 8,
    name: "Therma-Fit Hoodie",
    price: 45.5,
    originalPrice: 65.0,
    discount: "-30%",
    category: "apparel",
    sizes: ["M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
    badge: "HOT",
    badgeColor: "destructive",
  },
  {
    id: 9,
    name: "Elite Jersey",
    price: 55.0,
    originalPrice: 80.0,
    discount: "-31%",
    category: "apparel",
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
  },
  {
    id: 10,
    name: "Core Racerback",
    price: 19.0,
    originalPrice: 32.0,
    discount: "-41%",
    category: "apparel",
    sizes: ["S", "M"],
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
  },

  // Tech & Gadgets
  {
    id: 11,
    name: "Waterproof Watch",
    price: 120.0,
    category: "tech-gadgets",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },
  {
    id: 12,
    name: "Sport Band 2.0",
    price: 15.0,
    originalPrice: 30.0,
    discount: "-50%",
    category: "tech-gadgets",
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
  },
  {
    id: 13,
    name: "Wireless Earbuds Pro",
    price: 79.99,
    category: "tech-gadgets",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
  },

  // Accessories
  {
    id: 14,
    name: "Urban Duffel",
    price: 38.25,
    originalPrice: 45.0,
    discount: "-15%",
    category: "accessories",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    badge: "-15%",
    badgeColor: "secondary",
  },
  {
    id: 15,
    name: "Hydro Flask Steel",
    price: 18.0,
    originalPrice: 45.0,
    discount: "-60%",
    category: "accessories",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
    badge: "-60%",
    badgeColor: "secondary",
    trending: true,
  },
  {
    id: 16,
    name: "Leather Bifold Wallet",
    price: 42.0,
    category: "accessories",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
  },

  // Athletic Gear
  {
    id: 17,
    name: "Dri-Fit Leggings",
    price: 37.5,
    originalPrice: 50.0,
    discount: "-25%",
    category: "athletic-gear",
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
    badge: "-25%",
    badgeColor: "secondary",
  },
  {
    id: 18,
    name: "Pro Shorts",
    price: 19.99,
    originalPrice: 40.0,
    discount: "-50%",
    category: "athletic-gear",
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&q=80",
    badge: "FLASH",
    badgeColor: "primary",
    trending: true,
  },
  {
    id: 19,
    name: "Compression Socks",
    price: 14.99,
    category: "athletic-gear",
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80",
  },

  // Outdoor & Adventure
  {
    id: 20,
    name: "All-Terrain Backpack",
    price: 95.0,
    originalPrice: 130.0,
    discount: "-27%",
    category: "outdoor-adventure",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    badge: "-27%",
    badgeColor: "secondary",
  },
  {
    id: 21,
    name: "UV Shield Sunglasses",
    price: 35.0,
    category: "outdoor-adventure",
    sizes: [],
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
  },
];

export const DISCOUNTED_PRODUCTS: Product[] = ALL_PRODUCTS.filter(
  (p) => p.originalPrice !== undefined && p.discount !== undefined,
);

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}
