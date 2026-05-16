import Link from "next/link";
import Image from "next/image";
import { ALL_PRODUCTS, formatPrice } from "@/lib/data/products";

interface RelatedProductsProps {
  currentProductId: number;
  department: string;
}

export default function RelatedProducts({ currentProductId, department }: RelatedProductsProps) {
  // Find products in the same department, exclude the current one, and take up to 4
  const relatedProducts = ALL_PRODUCTS.filter(
    (p) => p.department === department && p.id !== currentProductId
  ).slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-border/20 pt-16">
      <h2 className="text-2xl font-black text-white mb-8">You Might Also Like</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group block bg-card rounded-2xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all"
          >
            <div className="relative aspect-square bg-secondary/20 overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-white line-clamp-1">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-primary font-black">{formatPrice(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-xs text-white/30 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
