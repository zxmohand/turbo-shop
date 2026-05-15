"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Plus,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const NewArrivalsPage = () => {
  const [priceRange, setPriceRange] = useState([20, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Electronics",
  ]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Newest");

  const featuredProducts = [
    {
      id: 1,
      name: "Studio Pro X",
      image:
        "https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3Njg2NjA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$249.00",
      description: "Professional studio microphone with premium sound quality",
    },
    {
      id: 2,
      name: "Retro Cam 09",
      image:
        "https://images.unsplash.com/photo-1575998256834-2d841f0d7ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY2FtZXJhJTIwdmludGFnZXxlbnwxfHx8fDE3Njg2NjA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$149.00",
      description: "Vintage-inspired instant camera with modern features",
    },
    {
      id: 3,
      name: "Elite 15",
      image:
        "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2ODU1NTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      price: "$1,899.00",
      description: "High-performance laptop for professionals",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Studio Pro X",
      image:
        "https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?w=600&q=80",
      price: "$249.00",
      originalPrice: "$299.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 2,
      name: "Retro Cam 09",
      image:
        "https://images.unsplash.com/photo-1575998256834-2d841f0d7ede?w=600&q=80",
      price: "$149.00",
      originalPrice: "$199.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 3,
      name: "Elite 15",
      image:
        "https://images.unsplash.com/photo-1505209487757-5114235191e5?w=600&q=80",
      price: "$1,899.00",
      originalPrice: "$2,299.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 4,
      name: "Chrono Fit",
      image:
        "https://images.unsplash.com/photo-1644893216815-adb3b57047cc?w=600&q=80",
      price: "$399.00",
      originalPrice: "$499.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 5,
      name: "Wireless Pro Buds",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80",
      price: "$159.00",
      originalPrice: "$199.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 6,
      name: "Smart Ring X",
      image:
        "https://images.unsplash.com/photo-1579586425879-c4f8ce50fd5f?w=600&q=80",
      price: "$299.00",
      originalPrice: "$349.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 7,
      name: "Ultra Tablet",
      image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      price: "$599.00",
      originalPrice: "$699.00",
      badge: "NEW",
      badgeColor: "primary",
    },
    {
      id: 8,
      name: "Camera Lens Pro",
      image:
        "https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=600&q=80",
      price: "$799.00",
      originalPrice: "$999.00",
      badge: "NEW",
      badgeColor: "primary",
    },
  ];

  const categories = [
    { name: "Electronics", count: 45 },
    { name: "Accessories", count: 32 },
    { name: "Audio Gear", count: 28 },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
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
            {/* Featured Hero Card */}
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card h-[600px] sm:h-[550px] lg:h-[600px]">
                {/* Content Overlay/Container */}
                <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 z-20">
                  <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
                    <div className="space-y-6 sm:space-y-8">
                      <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 w-fit">
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
                        <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                          Just Arrived
                        </span>
                      </div>

                      <div>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none">
                          NEW
                        </h1>
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-none">
                          ARRIVALS
                        </h1>
                      </div>

                      <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
                        Discover the latest products fresh in stock. Premium items
                        curated for you.
                      </p>

                      <button className="group flex items-center justify-center lg:justify-start gap-3 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 w-full sm:w-fit">
                        <span>EXPLORE NOW</span>
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
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=90"
                    alt="New Arrivals"
                    fill
                    className="object-cover object-center sm:object-[25%_center] lg:object-center"
                    priority
                  />
                  <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-10"></div>
                </div>
              </div>
            </div>

            {/* Featured Products Sidebar */}
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
                    <div
                      key={product.id}
                      className="group relative overflow-hidden bg-card border border-border rounded-2xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary shrink-0">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-foreground font-bold text-base mb-2 truncate">
                            {product.name}
                          </h3>
                          <p className="text-primary font-bold text-lg">
                            {product.price}
                          </p>
                        </div>

                        <button className="shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 active:scale-95">
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 bg-card/50 border-2 border-border rounded-2xl text-foreground font-bold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
                  VIEW ALL NEW
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
                    <button className="text-sm text-primary font-semibold hover:underline">
                      Reset
                    </button>
                  </div>

                  <div className="space-y-4">
                    <input
                      type="range"
                      min="20"
                      max="150"
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
                    {categories.map((category) => (
                      <label
                        key={category.name}
                        className="flex items-center justify-between cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category.name)}
                            onChange={() => toggleCategory(category.name)}
                            className="w-5 h-5 rounded border-2 border-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
                          />
                          <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                            {category.name}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          ({category.count})
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
                    {sizes.map((size) => (
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
                  Showing <span className="text-foreground font-bold">8</span> of{" "}
                  <span className="text-foreground font-bold">32</span> new items
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
                      <option>Newest</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Most Popular</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
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
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="text-foreground font-bold text-lg mb-3">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-primary font-bold text-xl">
                          {product.price}
                        </span>
                        <span className="text-muted-foreground text-sm line-through">
                          {product.originalPrice}
                        </span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewArrivalsPage;
