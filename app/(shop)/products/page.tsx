"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ChevronDown, ShoppingCart, RotateCcw } from "lucide-react";
import { ALL_PRODUCTS, DEPARTMENTS, formatPrice, getCategoryLabel, getDepartmentLabel } from "@/lib/data/products";
import { Suspense, useMemo, useState } from "react";
import Link from "next/link";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const activeDept = searchParams.get("department") ?? "";
  const activeCat = searchParams.get("category") ?? "";
  const searchQuery = searchParams.get("q") ?? "";
  const [sortBy, setSortBy] = useState("newest");

  const filteredProducts = useMemo(() => {
    let result = ALL_PRODUCTS;

    if (activeDept) {
      result = result.filter((p) => p.department === activeDept);
    }
    if (activeCat) {
      result = result.filter((p) => p.category === activeCat);
    }
    if (searchQuery) {
      result = result.filter((p) => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    switch (sortBy) {
      case "price-low":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return result;
  }, [activeDept, activeCat, sortBy ,searchQuery]);

  const setDepartment = (slug: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) {
      params.set("department", slug);
      params.delete("category"); // Reset category when changing department
    } else {
      params.delete("department");
      params.delete("category");
    }
    router.push(`/products?${params.toString()}`);
  };

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

  const activeSubcategories = useMemo(() => {
    if (!activeDept) return [];
    return DEPARTMENTS.find(d => d.slug === activeDept)?.subcategories ?? [];
  }, [activeDept]);

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 uppercase tracking-widest font-bold">
              <Link href="/products" className="hover:text-primary">
                All Products
              </Link>
              {activeDept && (
                <>
                  <span>/</span>
                  <span className="text-primary">
                    {getDepartmentLabel(activeDept)}
                  </span>
                </>
              )}
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {activeCat
                ? getCategoryLabel(activeCat)
                : activeDept
                  ? getDepartmentLabel(activeDept)
                  : "Our Collection"}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-secondary/30 border border-border/50 rounded-xl px-4 py-2 pr-10 text-sm font-semibold cursor-pointer outline-none focus:border-primary transition-colors text-white"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Department / Category Filter Bar */}
        <div className="space-y-4 mb-10 ">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setDepartment("")}
              className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${!activeDept ? "bg-primary text-white" : "bg-card border border-border text-white/60 hover:text-white"}`}
            >
              All Departments
            </button>
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept.slug}
                onClick={() => setDepartment(dept.slug)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${activeDept === dept.slug ? "bg-primary text-white" : "bg-card border border-border text-white/60 hover:text-white"}`}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {activeDept && (
            <div className="flex flex-wrap items-center gap-2 p-2 bg-secondary/10 rounded-xl border border-border/30 animate-in fade-in slide-in-from-top-1">
              <button
                onClick={() => setCategory("")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${!activeCat ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
              >
                All {getDepartmentLabel(activeDept)}
              </button>
              {activeSubcategories.map((sub) => (
                <button
                  key={sub.slug}
                  onClick={() => setCategory(sub.slug)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${activeCat === sub.slug ? "bg-white text-black" : "text-white/40 hover:text-white"}`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-card border border-border rounded-2xl">
            <p className="text-2xl font-bold text-white mb-3">
              No products found
            </p>
            <p className="text-muted-foreground mb-6">
              Try selecting a different category or resetting filters.
            </p>
            <button
              onClick={resetFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="block">
                <div className="group h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 cursor-pointer">
                  <div className="relative aspect-square overflow-hidden bg-secondary/20">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <div
                        className={`absolute top-3 left-3 px-2 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter ${product.badgeColor === "primary" ? "bg-primary text-white" : product.badgeColor === "destructive" ? "bg-destructive text-white" : "bg-white text-black"}`}
                      >
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                      {getCategoryLabel(product.category)}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 mb-3 line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-white">
                          {formatPrice(product.price)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-muted-foreground line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      <button className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
      <ProductsContent />
    </Suspense>
  );
}
