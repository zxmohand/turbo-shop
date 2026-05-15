import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CATEGORY_LIST } from "@/lib/data/categories";

export default function Categories() {
  const displayCategories = CATEGORY_LIST.slice(0, 4);

  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Shop by Category</h2>
          <Link
            href="/category"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
            >
              <Card className="group relative overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer rounded-lg">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-lg font-semibold text-white mb-0.5">
                    {category.name}
                  </h3>
                  <p className="text-xs text-white/60">
                    {category.items} items
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}