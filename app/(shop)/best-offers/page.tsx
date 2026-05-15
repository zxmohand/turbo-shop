"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { ChevronDown, ShoppingCart, Zap, RotateCcw } from "lucide-react";
import { DISCOUNTED_PRODUCTS, DEPARTMENTS, formatPrice, getCategoryLabel, getDepartmentLabel } from "@/lib/data/products";

export default function BestOffersPage() {
  const [selectedDepts, setSelectedDepts] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const maxPrice = useMemo(() => {
    if (DISCOUNTED_PRODUCTS.length === 0) return 1000;
    return Math.max(...DISCOUNTED_PRODUCTS.map((p) => p.price));
  }, []);

  const [priceRange, setPriceRange] = useState([0, maxPrice]);

  const filteredProducts = useMemo(() => {
    return DISCOUNTED_PRODUCTS.filter((p) => {
      const matchesDept = selectedDepts.length === 0 || selectedDepts.includes(p.department);
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      const matchesSize = !selectedSize || (p.sizes?.includes(selectedSize));
      return matchesDept && matchesPrice && matchesSize;
    });
  }, [selectedDepts, priceRange, selectedSize]);

  const topDeals = useMemo(() => {
    return [...DISCOUNTED_PRODUCTS]
      .sort((a, b) => {
        const discA = parseInt(a.discount?.replace("-", "").replace("%", "") || "0");
        const discB = parseInt(b.discount?.replace("-", "").replace("%", "") || "0");
        return discB - discA;
      })
      .slice(0, 3);
  }, []);

  const toggleDept = (slug: string) => {
    setSelectedDepts((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
  };

  const resetFilters = () => {
    setSelectedDepts([]);
    setPriceRange([0, maxPrice]);
    setSelectedSize(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* FLASH SALE HERO */}
      <section className="bg-gradient-to-br from-[#2a1010] to-[#1a0808] py-16 px-6 border-b border-primary/20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold uppercase tracking-widest">
                <Zap className="w-3 h-3 fill-primary" />
                Flash Sale Live
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-none tracking-tight">
                UP TO <span className="text-primary italic">60% OFF</span>
              </h1>
              <p className="text-lg text-white/60 max-w-lg">
                Exclusive limited-time deals on premium gear. Grab yours before they vanish.
              </p>
            </div>

            {/* TOP 3 DEALS PREVIEW */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {topDeals.map((deal) => (
                <div key={deal.id} className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 group">
                  <Image src={deal.image} alt={deal.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-destructive text-white text-[10px] font-black rounded-md">{deal.discount}</div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold line-clamp-1">{deal.name}</p>
                    <p className="text-sm font-black text-primary">{formatPrice(deal.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR & GRID */}
      <section className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* SIDEBAR */}
          <aside className="w-full lg:w-64 space-y-10 shrink-0">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Price Range</h3>
                <button onClick={() => setPriceRange([0, maxPrice])} className="text-[10px] font-bold text-primary hover:underline uppercase">Reset</button>
              </div>
              <input type="range" min="0" max={maxPrice} value={priceRange[1]} onChange={(e) => setPriceRange([0, parseInt(e.target.value)])} className="w-full accent-primary bg-secondary/50 rounded-lg h-1.5 appearance-none cursor-pointer" />
              <div className="flex justify-between mt-4 text-xs font-bold text-white/60">
                <span>$0</span>
                <span className="text-primary">${priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Departments</h3>
              <div className="space-y-3">
                {DEPARTMENTS.map((dept) => (
                  <label key={dept.slug} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div onClick={() => toggleDept(dept.slug)} className={`w-5 h-5 rounded-md border transition-all flex items-center justify-center ${selectedDepts.includes(dept.slug) ? "bg-primary border-primary" : "bg-transparent border-white/20 group-hover:border-primary/50"}`}>
                        {selectedDepts.includes(dept.slug) && <div className="w-2 h-2 bg-white rounded-[1px]"></div>}
                      </div>
                      <span className={`text-sm font-semibold transition-colors ${selectedDepts.includes(dept.slug) ? "text-white" : "text-white/40 group-hover:text-white"}`}>{dept.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Quick Sizes</h3>
              <div className="flex flex-wrap gap-2">
                {["S", "M", "L", "XL"].map((size) => (
                  <button key={size} onClick={() => setSelectedSize(selectedSize === size ? null : size)} className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${selectedSize === size ? "bg-primary border-primary text-white" : "bg-card border-border/50 text-white/60 hover:border-primary/50 hover:text-white"}`}>{size}</button>
                ))}
              </div>
            </div>
          </aside>

          {/* MAIN GRID */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest">
                Showing <span className="text-white">{filteredProducts.length}</span> of {DISCOUNTED_PRODUCTS.length} deals
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-white/60">
                Sort by: <span className="text-white flex items-center gap-1 cursor-pointer">Best Discount <ChevronDown className="w-3 h-3" /></span>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-card/50 border border-dashed border-white/10 rounded-3xl">
                <RotateCcw className="w-8 h-8 text-primary/40 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">No matching deals</h3>
                <p className="text-sm text-white/40 mb-6">Try adjusting your filters or price range.</p>
                <button onClick={resetFilters} className="px-6 py-2.5 bg-white text-black font-bold rounded-xl text-xs hover:bg-primary hover:text-white transition-all">Clear Filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <div key={p.id} className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                    <div className="relative aspect-square overflow-hidden">
                      <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-3 right-3 px-2 py-1 bg-destructive text-white text-[10px] font-black rounded-md">{p.discount}</div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{getDepartmentLabel(p.department)}</span>
                        <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{getCategoryLabel(p.category)}</span>
                      </div>
                      <h3 className="text-base font-bold text-white mb-4 line-clamp-1">{p.name}</h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-black text-white">{formatPrice(p.price)}</span>
                          <span className="text-xs text-white/30 line-through">{formatPrice(p.originalPrice!)}</span>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all"><ShoppingCart className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
