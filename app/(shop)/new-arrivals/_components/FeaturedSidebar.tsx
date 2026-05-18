import Image from "next/image";
import Link from "next/link";
import { Sparkles, Plus } from "lucide-react";
import { Product, formatPrice } from "@/lib/data/products";

interface FeaturedSidebarProps {
  featuredProducts: Product[];
}

export default function FeaturedSidebar({ featuredProducts }: FeaturedSidebarProps) {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-8 space-y-6">
        <div className="flex items-center gap-3 px-2">
          <Sparkles className="w-6 h-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            Featured
          </h2>
        </div>

        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/product/${product.id}`}
              className="block group relative overflow-hidden bg-card border border-border rounded-2xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    sizes="80px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-foreground font-bold text-base mb-2 truncate">
                    {product.name}
                  </h3>
                  <p className="text-primary font-bold text-lg">
                    {formatPrice(product.price)}
                  </p>
                </div>

                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 active:scale-95">
                  <Plus className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/products" className="block">
          <button className="w-full py-4 bg-card/50 border-2 border-border rounded-2xl text-foreground font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
            VIEW ALL PRODUCTS
          </button>
        </Link>
      </div>
    </div>
  );
}
