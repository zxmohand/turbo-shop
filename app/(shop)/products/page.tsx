"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { SlidersHorizontal, ChevronDown, ShoppingCart, RotateCcw } from "lucide-react";
import { ALL_PRODUCTS, CATEGORIES, formatPrice, getCategoryLabel } from "@/lib/data/products";
import { Suspense, useMemo, useState } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") ?? "";

  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;

    if (activeCategory) {
      result = result.filter((p) => p.category === activeCategory);
    }

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "newest":
      default:
        break;
    }

    return result;
  }, [activeCategory, sortBy]);

  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  };

  const resetFilters = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Our Products
            </h1>
            <p className="text-muted-foreground">
              Discover high-quality gear for your lifestyle.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-xl hover:bg-secondary transition-colors">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="font-semibold text-sm">Filters</span>
            </button>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-background border border-border rounded-xl px-4 py-2 pr-10 text-sm font-semibold cursor-pointer outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-10">
          <button
            onClick={() => setCategory("")}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
              !activeCategory
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                : "bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            All
          </button>

          {CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setCategory(cat.slug)}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.slug
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}

          {activeCategory && (
            <button
              onClick={resetFilters}
              className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-destructive/10 text-destructive border border-destructive/30 hover:bg-destructive hover:text-destructive-foreground transition-all duration-300"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}
        </div>

        {activeCategory && (
          <div className="mb-8 flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Showing:</span>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-bold">
              {getCategoryLabel(activeCategory)}
            </span>
            <span className="text-sm text-muted-foreground">
              — {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
            </span>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-foreground mb-3">
              No products found
            </p>
            <p className="text-muted-foreground mb-6">
              Try selecting a different category.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div
                      className={`absolute top-3 left-3 px-3 py-1.5 rounded-lg text-xs font-bold ${
                        product.badgeColor === "primary"
                          ? "bg-primary text-primary-foreground"
                          : product.badgeColor === "destructive"
                            ? "bg-destructive text-destructive-foreground"
                            : "bg-secondary text-foreground border border-border"
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                    {getCategoryLabel(product.category)}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    {product.name}
                  </h3>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-foreground">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Wrap in Suspense for useSearchParams
export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
