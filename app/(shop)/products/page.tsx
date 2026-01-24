"use client";

import React from "react";
import Image from "next/image";
import { SlidersHorizontal, ChevronDown, ShoppingCart } from "lucide-react";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Classic White Sneakers",
      price: "$89.99",
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80",
    },
    {
      id: 2,
      name: "Twill Cargo Pants",
      price: "$59.50",
      category: "Clothes",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
    },
    {
      id: 3,
      name: "Waterproof Watch",
      price: "$120.00",
      category: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
    },
    {
      id: 4,
      name: "Graphic Tee",
      price: "$25.00",
      category: "Clothes",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
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
              <select className="appearance-none bg-background border border-border rounded-xl px-4 py-2 pr-10 text-sm font-semibold cursor-pointer outline-none">
                <option>Sort by: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-4">
                  {product.name}
                </h3>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
