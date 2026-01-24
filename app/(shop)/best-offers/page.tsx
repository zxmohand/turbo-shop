"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Plus,
  Zap,
  TrendingUp,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const FlashSalePage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 4,
    mins: 23,
    secs: 12,
  });

  const [priceRange, setPriceRange] = useState([20, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "Training Gear",
  ]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Best Selling");

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

  const topDeals = [
    {
      id: 1,
      name: "Velocity Runner",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
      price: "$54.00",
      originalPrice: "$90.00",
      discount: "-40%",
    },
    {
      id: 2,
      name: "Aero Gym Tee",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      price: "$24.50",
      originalPrice: "$35.00",
      discount: "-30%",
    },
    {
      id: 3,
      name: "Pro Shorts",
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&q=80",
      price: "$19.99",
      originalPrice: "$40.00",
      discount: "-50%",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Air Zoom Pegasus",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      price: "$89.99",
      originalPrice: "$150.00",
      badge: "FLASH",
      badgeColor: "primary",
    },
    {
      id: 2,
      name: "Therma-Fit Hoodie",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&q=80",
      price: "$45.50",
      originalPrice: "$65.00",
      badge: "HOT",
      badgeColor: "destructive",
    },
    {
      id: 3,
      name: "Dri-Fit Leggings",
      image:
        "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80",
      price: "$37.50",
      originalPrice: "$50.00",
      badge: "-25%",
      badgeColor: "secondary",
    },
    {
      id: 4,
      name: "Sport Band 2.0",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
      price: "$15.00",
      originalPrice: "$30.00",
      badge: "FLASH",
      badgeColor: "primary",
    },
    {
      id: 5,
      name: "Elite Jersey",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      price: "$55.00",
      originalPrice: "$80.00",
      badge: "FLASH",
      badgeColor: "primary",
    },
    {
      id: 6,
      name: "Urban Duffel",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
      price: "$38.25",
      originalPrice: "$45.00",
      badge: "-15%",
      badgeColor: "secondary",
    },
    {
      id: 7,
      name: "Core Racerback",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80",
      price: "$19.00",
      originalPrice: "$32.00",
      badge: "FLASH",
      badgeColor: "primary",
    },
    {
      id: 8,
      name: "Hydro Flask Steel",
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&q=80",
      price: "$18.00",
      originalPrice: "$45.00",
      badge: "-60%",
      badgeColor: "secondary",
    },
  ];

  const categories = [
    { name: "Training Gear", count: 120 },
    { name: "Running Shoes", count: 45 },
    { name: "Accessories", count: 32 },
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Flash Sale Hero Card */}
            <div className="lg:col-span-8">
              <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-secondary h-[550px]">
                <div className="absolute top-6 left-6 z-20">
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40">
                    <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Limited Time
                    </span>
                  </div>
                </div>

                <div className="relative h-full grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col justify-center p-8 md:p-12 z-10">
                    <div className="space-y-6">
                      <div>
                        <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-2 tracking-tight">
                          FLASH
                        </h1>
                        <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6 tracking-tight">
                          SALE
                        </h1>
                      </div>

                      <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                        Get up to 70% off on high-performance gear before time
                        runs out.
                      </p>

                      <div className="flex gap-3">
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
                            className="flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm border border-border rounded-xl p-3 min-w-[70px]"
                          >
                            <span className="text-3xl font-bold text-foreground tabular-nums">
                              {time.value}
                            </span>
                            <span className="text-[10px] text-muted-foreground font-semibold mt-1 tracking-wider">
                              {time.label}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 w-fit">
                        <span>SHOP NOW</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-card via-card/50 to-transparent md:from-transparent z-10"></div>
                    <Image
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                      alt="Flash Sale"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top 3 Deals Sidebar */}
            <div className="lg:col-span-4">
              <div className="top-8 space-y-6">
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
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-secondary flex-shrink-0">
                          <Image
                            src={deal.image}
                            alt={deal.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute top-1 left-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-md">
                            {deal.discount}
                          </div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-foreground font-bold text-base mb-2 truncate">
                            {deal.name}
                          </h3>
                          <div className="flex items-baseline gap-2">
                            <span className="text-primary font-bold text-lg">
                              {deal.price}
                            </span>
                            <span className="text-muted-foreground text-sm line-through">
                              {deal.originalPrice}
                            </span>
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
                  Showing <span className="text-foreground font-bold">12</span>{" "}
                  of <span className="text-foreground font-bold">45</span> deals
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 cursor-pointer"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-square bg-secondary overflow-hidden">
                      <Image
                        src={product.image}
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

export default FlashSalePage;
