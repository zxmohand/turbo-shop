import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CATEGORY_LIST } from "@/lib/data/categories";

export default function Categories() {
  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Shop by Department</h2>
            <p className="text-sm text-muted-foreground">Find exactly what you need in our curated collections</p>
          </div>
          <Link
            href="/category"
            className="text-sm font-bold text-primary hover:text-primary/80 transition-colors"
          >
            All Departments →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CATEGORY_LIST.map((category) => (
            <Link
              key={category.id}
              href={`/products?department=${category.slug}`}
            >
              <Card className="group relative overflow-hidden bg-card border-border/50 hover:border-primary transition-all duration-500 cursor-pointer rounded-2xl aspect-4/5">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">
                    {category.description}
                  </p>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {category.name}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-bold text-white">Explore</span>
                    <div className="w-4 h-px bg-white"></div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}