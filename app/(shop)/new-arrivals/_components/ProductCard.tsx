import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 flex flex-col justify-between">
      <Link href={`/product/${product.id}`} className="block flex-1">
        {/* Product Image */}
        <div className="relative aspect-square bg-secondary overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />

          {/* Badge */}
          {product.badge && (
            <div
              className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold ${
                product.badgeColor === "primary"
                  ? "bg-primary text-primary-foreground"
                  : product.badgeColor === "destructive"
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-secondary text-foreground"
              }`}
            >
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-foreground font-bold text-lg mb-3 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-primary font-bold text-xl">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 pointer-events-none">
        <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 pointer-events-auto cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
