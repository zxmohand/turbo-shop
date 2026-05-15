export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  department: string; // e.g., "mens-fashion"
  category: string;   // subcategory slug, e.g., "mens-tshirts"
  sizes?: string[];
  image: string;
  badge?: string;
  badgeColor?: "primary" | "destructive" | "secondary";
  trending?: boolean;
}

export interface Subcategory {
  slug: string;
  label: string;
  departmentSlug: string;
}

export interface Department {
  slug: string;
  label: string;
  subcategories: Subcategory[];
}

export const DEPARTMENTS: Department[] = [
  {
    slug: "mens-fashion",
    label: "Men's Fashion",
    subcategories: [
      { slug: "mens-tshirts", label: "T-Shirts & Polos", departmentSlug: "mens-fashion" },
      { slug: "mens-jackets", label: "Jackets & Coats", departmentSlug: "mens-fashion" },
      { slug: "mens-pants", label: "Pants & Jeans", departmentSlug: "mens-fashion" },
      { slug: "mens-footwear", label: "Sneakers & Shoes", departmentSlug: "mens-fashion" },
      { slug: "mens-watches", label: "Watches", departmentSlug: "mens-fashion" },
    ],
  },
  {
    slug: "womens-fashion",
    label: "Women's Fashion",
    subcategories: [
      { slug: "womens-dresses", label: "Dresses", departmentSlug: "womens-fashion" },
      { slug: "womens-tops", label: "Tops & Blouses", departmentSlug: "womens-fashion" },
      { slug: "womens-pants", label: "Pants & Skirts", departmentSlug: "womens-fashion" },
      { slug: "womens-footwear", label: "Heels & Sandals", departmentSlug: "womens-fashion" },
      { slug: "womens-bags", label: "Bags & Purses", departmentSlug: "womens-fashion" },
    ],
  },
  {
    slug: "kids",
    label: "Kids",
    subcategories: [
      { slug: "kids-boys", label: "Boys Clothing", departmentSlug: "kids" },
      { slug: "kids-girls", label: "Girls Clothing", departmentSlug: "kids" },
      { slug: "kids-shoes", label: "Kids Shoes", departmentSlug: "kids" },
      { slug: "kids-toys", label: "Toys & Games", departmentSlug: "kids" },
    ],
  },
  {
    slug: "electronics",
    label: "Electronics",
    subcategories: [
      { slug: "electronics-phones", label: "Smartphones", departmentSlug: "electronics" },
      { slug: "electronics-laptops", label: "Laptops", departmentSlug: "electronics" },
      { slug: "electronics-audio", label: "Headphones & Audio", departmentSlug: "electronics" },
      { slug: "electronics-watches", label: "Smartwatches", departmentSlug: "electronics" },
    ],
  },
  {
    slug: "home-living",
    label: "Home & Living",
    subcategories: [
      { slug: "home-furniture", label: "Furniture", departmentSlug: "home-living" },
      { slug: "home-kitchen", label: "Kitchenware", departmentSlug: "home-living" },
      { slug: "home-decor", label: "Home Decor", departmentSlug: "home-living" },
      { slug: "home-bedding", label: "Bedding", departmentSlug: "home-living" },
    ],
  },
];

// Flat list for easy lookup
export const ALL_SUBCATEGORIES = DEPARTMENTS.flatMap((d) => d.subcategories);

export function getCategoryLabel(slug: string): string {
  return ALL_SUBCATEGORIES.find((s) => s.slug === slug)?.label ?? slug;
}

export function getDepartmentLabel(slug: string): string {
  return DEPARTMENTS.find((d) => d.slug === slug)?.label ?? slug;
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

export const ALL_PRODUCTS: Product[] = [
  // --- MEN'S FASHION (20 Products) ---
  // T-Shirts
  { id: 1, name: "Premium Cotton Tee", price: 25.0, department: "mens-fashion", category: "mens-tshirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80", sizes: ["S", "M", "L", "XL"] },
  { id: 2, name: "V-Neck Essential", price: 22.0, department: "mens-fashion", category: "mens-tshirts", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80", sizes: ["M", "L"] },
  { id: 3, name: "Graphic Street Tee", price: 30.0, department: "mens-fashion", category: "mens-tshirts", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80", sizes: ["S", "M", "L"] },
  { id: 4, name: "Classic Polo Shirt", price: 45.0, department: "mens-fashion", category: "mens-tshirts", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&q=80", sizes: ["L", "XL"], trending: true },
  // Jackets
  { id: 5, name: "Urban Bomber Jacket", price: 85.0, originalPrice: 120.0, discount: "-30%", department: "mens-fashion", category: "mens-jackets", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: "FLASH", badgeColor: "primary" },
  { id: 6, name: "Denim Trucker Jacket", price: 65.0, department: "mens-fashion", category: "mens-jackets", image: "https://images.unsplash.com/photo-1576871333020-003f38f1ac42?w=600&q=80" },
  { id: 7, name: "Winter Parka", price: 150.0, department: "mens-fashion", category: "mens-jackets", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80" },
  { id: 8, name: "Leather Biker Jacket", price: 210.0, department: "mens-fashion", category: "mens-jackets", image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=600&q=80", trending: true },
  // Pants
  { id: 9, name: "Slim Fit Chinos", price: 55.0, department: "mens-fashion", category: "mens-pants", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80" },
  { id: 10, name: "Relaxed Cargo Pants", price: 48.0, department: "mens-fashion", category: "mens-pants", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80" },
  { id: 11, name: "Distressed Jeans", price: 70.0, department: "mens-fashion", category: "mens-pants", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80" },
  { id: 12, name: "Classic Suit Trousers", price: 95.0, department: "mens-fashion", category: "mens-pants", image: "https://images.unsplash.com/photo-1506629082923-1c0539747d0e?w=600&q=80" },
  // Footwear
  { id: 13, name: "Cloud Runner Sneakers", price: 110.0, originalPrice: 160.0, discount: "-31%", department: "mens-fashion", category: "mens-footwear", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", badge: "HOT" },
  { id: 14, name: "Oxford Leather Shoes", price: 130.0, department: "mens-fashion", category: "mens-footwear", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=600&q=80" },
  { id: 15, name: "Canvas High Tops", price: 60.0, department: "mens-fashion", category: "mens-footwear", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80" },
  { id: 16, name: "Suede Chelsea Boots", price: 180.0, department: "mens-fashion", category: "mens-footwear", image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=600&q=80" },
  // Watches
  { id: 17, name: "Silver Chronograph", price: 250.0, department: "mens-fashion", category: "mens-watches", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80" },
  { id: 18, name: "Minimalist Leather Watch", price: 120.0, department: "mens-fashion", category: "mens-watches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
  { id: 19, name: "Gold Luxury Watch", price: 850.0, department: "mens-fashion", category: "mens-watches", image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=600&q=80" },
  { id: 20, name: "Sport Digital Watch", price: 45.0, department: "mens-fashion", category: "mens-watches", image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&q=80" },

  // --- WOMEN'S FASHION (20 Products) ---
  // Dresses
  { id: 21, name: "Floral Summer Dress", price: 45.0, department: "womens-fashion", category: "womens-dresses", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80" },
  { id: 22, name: "Evening Silk Gown", price: 180.0, department: "womens-fashion", category: "womens-dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", trending: true },
  { id: 23, name: "Boho Maxi Dress", price: 65.0, department: "womens-fashion", category: "womens-dresses", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80" },
  { id: 24, name: "Little Black Dress", price: 85.0, originalPrice: 110.0, discount: "-22%", department: "womens-fashion", category: "womens-dresses", image: "https://images.unsplash.com/photo-1539008835154-20ed6779403c?w=600&q=80", badge: "NEW" },
  // Tops
  { id: 25, name: "Satin Blouse", price: 40.0, department: "womens-fashion", category: "womens-tops", image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600&q=80" },
  { id: 26, name: "Linen Shirt", price: 35.0, department: "womens-fashion", category: "womens-tops", image: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&q=80" },
  { id: 27, name: "Crop Knit Top", price: 28.0, department: "womens-fashion", category: "womens-tops", image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80" },
  { id: 28, name: "Oversized Graphic Tee", price: 32.0, department: "womens-fashion", category: "womens-tops", image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&q=80" },
  // Pants/Skirts
  { id: 29, name: "High-Waist Jeans", price: 60.0, department: "womens-fashion", category: "womens-pants", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80" },
  { id: 30, name: "Pleated Midi Skirt", price: 48.0, department: "womens-fashion", category: "womens-pants", image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&q=80" },
  { id: 31, name: "Wide Leg Trousers", price: 75.0, department: "womens-fashion", category: "womens-pants", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80" },
  { id: 32, name: "Leather Mini Skirt", price: 55.0, department: "womens-fashion", category: "womens-pants", image: "https://images.unsplash.com/photo-1548454433-4a180436d274?w=600&q=80" },
  // Footwear
  { id: 33, name: "Stiletto Heels", price: 95.0, department: "womens-fashion", category: "womens-footwear", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80", trending: true },
  { id: 34, name: "White Platform Sneakers", price: 80.0, department: "womens-fashion", category: "womens-footwear", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80" },
  { id: 35, name: "Strappy Sandals", price: 50.0, department: "womens-fashion", category: "womens-footwear", image: "https://images.unsplash.com/photo-1562273103-919740f4d2a9?w=600&q=80" },
  { id: 36, name: "Ankle Boots", price: 110.0, department: "womens-fashion", category: "womens-footwear", image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=600&q=80" },
  // Bags
  { id: 37, name: "Leather Tote Bag", price: 140.0, department: "womens-fashion", category: "womens-bags", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80" },
  { id: 38, name: "Crossbody Clutch", price: 75.0, department: "womens-fashion", category: "womens-bags", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&q=80" },
  { id: 39, name: "Designer Satchel", price: 450.0, department: "womens-fashion", category: "womens-bags", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80", badge: "HOT" },
  { id: 40, name: "Mini Backpack", price: 55.0, department: "womens-fashion", category: "womens-bags", image: "https://images.unsplash.com/photo-1544816153-199d8a2b846e?w=600&q=80" },

  // --- KIDS (20 Products) ---
  { id: 41, name: "Boys Cargo Shorts", price: 18.0, department: "kids", category: "kids-boys", image: "https://images.unsplash.com/photo-1519457431-758c4a688752?w=600&q=80" },
  { id: 42, name: "Girls Tutu Dress", price: 25.0, department: "kids", category: "kids-girls", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80" },
  { id: 43, name: "Dino Print PJs", price: 22.0, department: "kids", category: "kids-boys", image: "https://images.unsplash.com/photo-1522771935877-53787d467436?w=600&q=80" },
  { id: 44, name: "Unicorn Hoodie", price: 28.0, department: "kids", category: "kids-girls", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80" },
  { id: 45, name: "Light-Up Sneakers", price: 45.0, department: "kids", category: "kids-shoes", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&q=80" },
  { id: 46, name: "Canvas School Shoes", price: 30.0, department: "kids", category: "kids-shoes", image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&q=80" },
  { id: 47, name: "Building Blocks Set", price: 35.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80", trending: true },
  { id: 48, name: "Remote Control Car", price: 55.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=600&q=80" },
  { id: 49, name: "Kids' Smart Tablet", price: 120.0, originalPrice: 150.0, discount: "-20%", department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&q=80", badge: "FLASH" },
  { id: 50, name: "Plush Bear", price: 15.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&q=80" },
  // ... adding more for kids
  { id: 51, name: "Boys Graphic Hoodie", price: 24.0, department: "kids", category: "kids-boys", image: "https://images.unsplash.com/photo-1519234221185-322017aba9d6?w=600&q=80" },
  { id: 52, name: "Girls Denim Jacket", price: 32.0, department: "kids", category: "kids-girls", image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80" },
  { id: 53, name: "Winter Boots Kids", price: 50.0, department: "kids", category: "kids-shoes", image: "https://images.unsplash.com/photo-1533512930330-4ac257c86793?w=600&q=80" },
  { id: 54, name: "Magnetic Tiles", price: 40.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?w=600&q=80" },
  { id: 55, name: "Boys Swim Trunks", price: 16.0, department: "kids", category: "kids-boys", image: "https://images.unsplash.com/photo-1519457431-758c4a688752?w=600&q=80" },
  { id: 56, name: "Girls Party Shoes", price: 35.0, department: "kids", category: "kids-shoes", image: "https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3?w=600&q=80" },
  { id: 57, name: "Puzzle Game", price: 12.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1586733134139-2cf05ad29d67?w=600&q=80" },
  { id: 58, name: "Toddler Set", price: 20.0, department: "kids", category: "kids-boys", image: "https://images.unsplash.com/photo-1519234221185-322017aba9d6?w=600&q=80" },
  { id: 59, name: "Girls Raincoat", price: 30.0, department: "kids", category: "kids-girls", image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80" },
  { id: 60, name: "Story Book Set", price: 25.0, department: "kids", category: "kids-toys", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80" },

  // --- ELECTRONICS (20 Products) ---
  { id: 61, name: "Pro Phone 15", price: 999.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80", trending: true },
  { id: 62, name: "Foldable Smartphone", price: 1799.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80" },
  { id: 63, name: "Budget Android", price: 249.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=600&q=80" },
  { id: 64, name: "Ultrabook Air", price: 1199.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80" },
  { id: 65, name: "Gaming Beast Laptop", price: 2400.0, originalPrice: 2800.0, discount: "-14%", department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80", badge: "HOT" },
  { id: 66, name: "Business Pro Laptop", price: 1500.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80" },
  { id: 67, name: "Noise Cancelling Cans", price: 349.0, department: "electronics", category: "electronics-audio", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80", trending: true },
  { id: 68, name: "Wireless Earbuds", price: 129.0, department: "electronics", category: "electronics-audio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80" },
  { id: 69, name: "Smart Series 9 Watch", price: 399.0, department: "electronics", category: "electronics-watches", image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=600&q=80" },
  { id: 70, name: "Fitness Tracker", price: 79.0, department: "electronics", category: "electronics-watches", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&q=80" },
  // ... adding more for electronics
  { id: 71, name: "4K Action Cam", price: 299.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80" },
  { id: 72, name: "Tablet Pro 12\"", price: 799.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&q=80" },
  { id: 73, name: "Mechanical Keyboard", price: 149.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600&q=80" },
  { id: 74, name: "Gaming Mouse", price: 69.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80" },
  { id: 75, name: "Bluetooth Speaker", price: 89.0, department: "electronics", category: "electronics-audio", image: "https://images.unsplash.com/photo-1608156639585-34a0a5996c90?w=600&q=80" },
  { id: 76, name: "Monitor 27\" IPS", price: 300.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&q=80" },
  { id: 77, name: "Studio Microphone", price: 199.0, department: "electronics", category: "electronics-audio", image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&q=80" },
  { id: 78, name: "External SSD 1TB", price: 120.0, department: "electronics", category: "electronics-laptops", image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?w=600&q=80" },
  { id: 79, name: "Smart Home Hub", price: 149.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80" },
  { id: 80, name: "Mirrorless Camera", price: 1200.0, department: "electronics", category: "electronics-phones", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80" },

  // --- HOME & LIVING (20 Products) ---
  { id: 81, name: "Modern Velvet Sofa", price: 899.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { id: 82, name: "Coffee Table Oak", price: 150.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=600&q=80" },
  { id: 83, name: "Chef's Knife Set", price: 120.0, department: "home-living", category: "home-kitchen", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=600&q=80", trending: true },
  { id: 84, name: "Non-Stick Pan", price: 45.0, department: "home-living", category: "home-kitchen", image: "https://images.unsplash.com/photo-1584947844002-2ce327896489?w=600&q=80" },
  { id: 85, name: "Canvas Wall Art", price: 65.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80" },
  { id: 86, name: "Ceramic Vase", price: 35.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=600&q=80" },
  { id: 87, name: "Cotton Bedding Set", price: 80.0, originalPrice: 100.0, discount: "-20%", department: "home-living", category: "home-bedding", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80", badge: "FLASH" },
  { id: 88, name: "Weighted Blanket", price: 110.0, department: "home-living", category: "home-bedding", image: "https://images.unsplash.com/photo-1543333309-8ce495c25365?w=600&q=80" },
  { id: 89, name: "Bookshelf Minimalist", price: 210.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80" },
  { id: 90, name: "Smart LED Lamp", price: 55.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1507473885765-e6ed657db991?w=600&q=80" },
  // ... adding more for home
  { id: 91, name: "Dining Table Set", price: 600.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1577140917449-6ef9d89ef2f9?w=600&q=80" },
  { id: 92, name: "Air Fryer Pro", price: 129.0, department: "home-living", category: "home-kitchen", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&q=80" },
  { id: 93, name: "Velvet Throw Pillow", price: 25.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80" },
  { id: 94, name: "Memory Foam Pillow", price: 40.0, department: "home-living", category: "home-bedding", image: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=600&q=80" },
  { id: 95, name: "Desk Chair Ergonomic", price: 180.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80" },
  { id: 96, name: "Dinnerware 16pc", price: 75.0, department: "home-living", category: "home-kitchen", image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&q=80" },
  { id: 97, name: "Scented Candle", price: 15.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80" },
  { id: 98, name: "Bathroom Mat", price: 20.0, department: "home-living", category: "home-decor", image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80" },
  { id: 99, name: "Storage Box Set", price: 30.0, department: "home-living", category: "home-furniture", image: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?w=600&q=80" },
  { id: 100, name: "Juicer Extractor", price: 85.0, department: "home-living", category: "home-kitchen", image: "https://images.unsplash.com/photo-1613478223719-2ab80260f4a2?w=600&q=80" },
];

export const DISCOUNTED_PRODUCTS: Product[] = ALL_PRODUCTS.filter(
  (p) => p.originalPrice !== undefined && p.discount !== undefined,
);
