import Link from "next/link";
import Image from "next/image";
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
            <Link href="/new-arrivals" className="text-sm font-bold text-primary hover:underline mr-4">View All</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="block">
              <Card className="group h-full overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 rounded-2xl cursor-pointer">
                <div className="relative aspect-square overflow-hidden bg-secondary/30">
                  <Badge className="absolute top-3 left-3 z-10 bg-primary text-white border-0 text-[10px] font-black uppercase px-2 py-0.5">
                    Trending
                  </Badge>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-5">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    {getCategoryLabel(product.category)}
                  </span>
                  <div className="flex items-center justify-between mt-2">
                    <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <span className="text-base font-black text-white whitespace-nowrap ml-2">
                      {formatPrice(product.price)}
                    </span>
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