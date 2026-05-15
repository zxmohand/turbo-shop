import { CATEGORY_LIST } from "@/lib/data/categories";
import CategoryGrid from "./_components/CategoryGrid";

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  items: number;
  trending: boolean;
}

export default function CategoryPage() {
  const allCategories: Category[] = CATEGORY_LIST.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    image: cat.image,
    items: cat.items,
    trending: cat.trending,
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Departments</h1>
          <p className="text-muted-foreground">Explore our complete range of specialized shopping departments.</p>
        </div>
        
        <CategoryGrid categories={allCategories} />
      </div>
    </div>
  );
}
