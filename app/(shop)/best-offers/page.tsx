"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Plus,
  Zap,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import {
  DISCOUNTED_PRODUCTS,
  CATEGORIES,
  formatPrice,
  getCategoryLabel,
  Product,
} from "@/lib/data/products";

// ── Derive filter options from discounted products only ──
const DEAL_CATEGORIES = CATEGORIES.filter((cat) =>
  DISCOUNTED_PRODUCTS.some((p) => p.category === cat.slug),
);

const ALL_SIZES = Array.from(
  new Set(DISCOUNTED_PRODUCTS.flatMap((p) => p.sizes ?? [])),
).sort();

const FlashSalePage = () => {
  // ── Countdown timer ─────────────────────────
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    mins: 23,
    secs: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;

        if (secs > 0) {
          secs--;
        } else {
          secs = 59;
          if (mins > 0) {
            mins--;
          } else {
            mins = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, mins, secs };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // ── Filter state ────────────────────────────
  const priceExtent = useMemo(() => {
    const prices = DISCOUNTED_PRODUCTS.map((p) => p.price);
    return {
      min: Math.floor(Math.min(...prices)),
      max: Math.ceil(Math.max(...prices)),
    };
  }, []);

  const [priceRange, setPriceRange] = useState([priceExtent.min, priceExtent.max]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Best Selling");

  // ── Filtered discounted products ────────────
  const filteredProducts = useMemo(() => {
    let result = DISCOUNTED_PRODUCTS;

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }

    // Price range filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // Size filter
    if (selectedSizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((s) => selectedSizes.includes(s)),
      );
    }

    // Sort
    switch (sortBy) {
      case "Price: Low to High":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "Newest":
        result = [...result].sort((a, b) => b.id - a.id);
        break;
      default:
        // Best Selling — keep original order
        break;
    }

    return result;
  }, [selectedCategories, priceRange, selectedSizes, sortBy]);

  // ── Top 3 deals (always from full discounted pool) ──
  const topDeals = useMemo(() => {
    return [...DISCOUNTED_PRODUCTS]
      .sort((a, b) => {
        const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
        const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
        return discB - discA;
      })
      .slice(0, 3);
  }, []);

  // ── Category counts (from discounted pool) ──
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    DISCOUNTED_PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] ?? 0) + 1;
    });
    return counts;
  }, []);

  // ── Handlers ────────────────────────────────
  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((c) => c !== slug)
        : [...prev, slug],
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size],
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Flash Sale Hero Card */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border bg-card h-[600px] sm:h-[550px] lg:h-[600px]">
                {/* Content Overlay/Container */}
                <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 z-20">
                  <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                    <div className="space-y-6 sm:space-y-8">
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 w-fit">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                          Limited Time
                        </span>
                      </div>

                      <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none">
                          FLASH
                        </h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-none">
                          SALE
                        </h1>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
                        Get up to 70% off on high-performance gear before time
                        runs out.
                      </p>

                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {[
                          {
                            value: timeLeft.days.toString().padStart(2, "0"),
                            label: "DAYS",
                          },
                          {
                            value: timeLeft.hours.toString().padStart(2, "0"),
                            label: "HOURS",
                          },
                          {
                            value: timeLeft.mins.toString().padStart(2, "0"),
                            label: "MINS",
                          },
                          {
                            value: timeLeft.secs.toString().padStart(2, "0"),
                            label: "SECS",
                          },
                        ].map((time, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm border border-border rounded-xl p-3 min-w-[70px] sm:min-w-[80px]"
                          >
                            <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground tabular-nums">
                              {time.value}
                            </span>
                            <span className="text-[8px] sm:text-[10px] text-muted-foreground font-semibold mt-1 tracking-wider text-center">
                              {time.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="group flex items-center justify-center lg:justify-start gap-3 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 w-full sm:w-fit">
                        <span>SHOP NOW</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Empty div for grid spacing on desktop */}
                  <div className="hidden lg:block"></div>
                </div>

                {/* Background Image Container */}
                <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-10">
                  <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent lg:bg-linear-to-r lg:from-card lg:via-transparent z-20"></div>
                  <Image
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1000&q=90"
                    alt="Flash Sale"
                    fill
                    className="object-cover object-center sm:object-[25%_center] lg:object-center"
                    priority
                  />
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-10"></div>
                </div>
              </div>
            </div>

            {/* Top 3 Deals Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="flex items-center gap-3 px-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Top 3 Deals
                  </h2>
                </div>

                <div className="space-y-4">
                  {topDeals.map((deal) => (
                    <div
                      key={deal.id}
                      className="group relative overflow-hidden bg-card border border-border rounded-2xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0">
                          <Image
                            src={deal.image || "/placeholder.svg"}
                            alt={deal.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          {deal.discount && (
                            <div className="absolute top-1 left-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-md">
                              {deal.discount}
                            </div>
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-foreground font-bold text-base mb-2 truncate">
                            {deal.name}
                          </h3>
                          <div className="flex items-baseline gap-2">
                            <span className="text-primary font-bold text-lg">
                              {formatPrice(deal.price)}
                            </span>
                            {deal.originalPrice && (
                              <span className="text-muted-foreground text-sm line-through">
                                {formatPrice(deal.originalPrice)}
                              </span>
                            )}
                          </div>
                        </div>

                        <button className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-card/50 border-2 border-border rounded-2xl text-foreground font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  VIEW ALL DEALS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-3">
              <div className="sticky top-8 space-y-6">
                {/* Price Range */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-foreground">
                      PRICE RANGE
                    </h3>
                    <button
                      onClick={() => setPriceRange([priceExtent.min, priceExtent.max])}
                      className="text-sm text-primary font-semibold hover:underline"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min={priceExtent.min}
                      max={priceExtent.max}
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground">
                        ${priceRange[0]}
                      </span>
                      <span className="font-semibold text-foreground">
                        ${priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    CATEGORIES
                  </h3>
                  <div className="space-y-3">
                    {DEAL_CATEGORIES.map((category) => (
                      <label
                        key={category.slug}
                        className="flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.slug)}
                            onChange={() => toggleCategory(category.slug)}
                            className="w-5 h-5 rounded border-2 border-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                          />
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {category.label}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          ({categoryCounts[category.slug] ?? 0})
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Size */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-6">
                    SIZE
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {ALL_SIZES.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`py-3 rounded-xl border-2 font-bold transition-all duration-300 ${
                          selectedSizes.includes(size)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card text-foreground border-border hover:border-primary/50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-9">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="text-muted-foreground">
                  Showing{" "}
                  <span className="text-foreground font-bold">
                    {filteredProducts.length}
                  </span>{" "}
                  of{" "}
                  <span className="text-foreground font-bold">
                    {DISCOUNTED_PRODUCTS.length}
                  </span>{" "}
                  deals
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground font-medium">
                    Sort by:
                  </span>
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-card border border-border rounded-xl px-4 py-2.5 pr-10 text-foreground font-semibold cursor-pointer hover:border-primary/50 transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    >
                      <option>Best Selling</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Newest</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-2xl font-bold text-foreground mb-3">
                    No deals match your filters
                  </p>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your price range, categories, or sizes.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedSizes([]);
                      setPriceRange([priceExtent.min, priceExtent.max]);
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                    >
                      {/* Product Image */}
                      <div className="relative aspect-square bg-secondary overflow-hidden">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
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
                        <span className="text-xs font-bold text-muted-foreground mb-1 block uppercase tracking-wider">
                          {getCategoryLabel(product.category)}
                        </span>
                        <h3 className="text-foreground font-bold text-lg mb-3">
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

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlashSalePage;
