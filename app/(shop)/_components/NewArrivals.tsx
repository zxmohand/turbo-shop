import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ALL_PRODUCTS, formatPrice, getCategoryLabel } from "@/lib/data/products";

export default function NewArrivals() {
  const products = ALL_PRODUCTS.filter((p) => !p.discount).slice(0, 4);

  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">New Arrivals</h2>
            <p className="text-sm text-white/60">Fresh and exclusive this week</p>
          </div>
          <Link
            href="/products"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 rounded-lg">
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                {product.badge && (
                  <Badge className="absolute top-3 left-3 z-10 bg-primary text-white border-0 text-xs px-2 py-0.5">
                    {product.badge}
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4">
                <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                  {getCategoryLabel(product.category)}
                </span>
                <div className="flex items-center justify-between mt-2">
                  <h3 className="text-base font-semibold text-white">
                    {product.name}
                  </h3>
                  <span className="text-base font-bold text-white">
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