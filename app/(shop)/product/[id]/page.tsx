import { notFound } from "next/navigation";
import { ALL_PRODUCTS } from "@/lib/data/products";
import { getReviewsByProductId } from "@/lib/data/reviews";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";
import RelatedProducts from "./_components/RelatedProducts";
import ReviewsSection from "./_components/ReviewsSection";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id, 10);
  const product = ALL_PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    notFound();
  }

  const reviews = getReviewsByProductId(productId);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Top Section: Gallery + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <ProductGallery
              mainImage={product.image}
              images={product.images ?? []}
              productName={product.name}
            />
          </div>
          <div className="lg:col-span-5">
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Middle Section: Description & Highlights */}
        <div className="border-t border-border/20 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Product Story</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {product.description || "Experience premium quality and exceptional design with this carefully crafted piece. Designed to stand out and built to last."}
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-white mb-6">Highlights</h2>
              <ul className="space-y-4">
                {(product.highlights || ["Premium materials", "Durable construction", "Modern fit"]).map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-white/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Sections */}
        <RelatedProducts currentProductId={product.id} department={product.department} />
        <ReviewsSection productId={product.id} initialReviews={reviews} />
      </div>
    </div>
  );
}
