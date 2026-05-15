import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_PRODUCTS, formatPrice, getCategoryLabel } from "@/lib/data/products";

export default function NewArrivals() {
  // Pull trending items for the carousel/grid
  const trendingProducts = ALL_PRODUCTS.filter((p) => p.trending).slice(0, 4);

  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">New & Trending</h2>
            <p className="text-sm text-muted-foreground">The most popular items this week</p>
          </div>
          <div className="flex gap-2">
            <Link href="/products" className="text-sm font-bold text-primary hover:underline mr-4">View All</Link>
            <button className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary transition-colors">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary transition-colors">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 rounded-2xl">
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                <Badge className="absolute top-3 left-3 z-10 bg-primary text-white border-0 text-[10px] font-black uppercase tracking-tighter px-2 py-0.5">
                  Trending
                </Badge>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                  {getCategoryLabel(product.category)}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-base font-black text-white">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}