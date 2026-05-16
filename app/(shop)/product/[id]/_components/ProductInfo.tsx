"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Zap, Star, Truck, Shield, RotateCcw, Heart, Share2 } from "lucide-react";
import { Product, formatPrice, getCategoryLabel, getDepartmentLabel } from "@/lib/data/products";
import SizeSelector from "./SizeSelector";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? null);
  const [quantity, setQuantity] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  const isLowStock = product.stock !== undefined && product.stock <= 10;
  const rating = product.rating ?? 4.5;
  const reviewCount = product.reviewCount ?? 0;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="space-y-6">
      {/* Breadcrumb + Wishlist */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-xs font-bold text-white/30 uppercase tracking-widest">
          <Link href={`/products?department=${product.department}`} className="hover:text-primary transition-colors">
            {getDepartmentLabel(product.department)}
          </Link>
          <span>/</span>
          <Link href={`/products?department=${product.department}&category=${product.category}`} className="hover:text-primary transition-colors">
            {getCategoryLabel(product.category)}
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className={`p-2 rounded-full border transition-all cursor-pointer ${wishlisted ? "bg-primary/10 border-primary text-primary" : "border-border/30 text-white/30 hover:border-primary/50 hover:text-primary"}`}
          >
            <Heart className="w-4 h-4" fill={wishlisted ? "currentColor" : "none"} />
          </button>
          <button className="p-2 rounded-full border border-border/30 text-white/30 hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Name */}
      <div>
        <h1 className="text-3xl font-black text-white leading-tight mb-2">{product.name}</h1>
        {/* Star Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < fullStars ? "text-amber-400 fill-amber-400" : i === fullStars && hasHalf ? "text-amber-400" : "text-white/20"}`}
                fill={i < fullStars ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-amber-400">{rating.toFixed(1)}</span>
          {reviewCount > 0 && (
            <a href="#reviews" className="text-sm text-white/40 hover:text-primary transition-colors">
              ({reviewCount} reviews)
            </a>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="flex items-center gap-4">
        <span className="text-4xl font-black text-white">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <span className="text-xl text-white/30 line-through">{formatPrice(product.originalPrice)}</span>
        )}
        {product.discount && (
          <span className="px-2.5 py-1 bg-destructive text-white text-sm font-black rounded-lg">{product.discount}</span>
        )}
      </div>

      {/* Stock Indicator */}
      {product.stock !== undefined && (
        <div className={`flex items-center gap-2 text-sm font-bold ${isLowStock ? "text-amber-400" : "text-green-400"}`}>
          <div className={`w-2 h-2 rounded-full ${isLowStock ? "bg-amber-400" : "bg-green-400"}`} />
          {isLowStock ? `Only ${product.stock} left in stock!` : "In Stock"}
        </div>
      )}

      <div className="border-t border-border/20" />

      {/* Color Variants */}
      {product.colors && product.colors.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white uppercase tracking-widest">Color</span>
            <span className="text-sm text-white/50">{selectedColor?.name}</span>
          </div>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                title={color.name}
                className={`w-8 h-8 rounded-full border-2 transition-all cursor-pointer hover:scale-110 ${
                  selectedColor?.name === color.name ? "border-primary scale-110 shadow-lg" : "border-transparent"
                }`}
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Size Selector */}
      <SizeSelector categorySlug={product.category} />

      {/* Quantity */}
      <div className="space-y-3">
        <span className="text-sm font-bold text-white uppercase tracking-widest">Quantity</span>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-xl border border-border/50 text-white font-bold hover:bg-primary hover:border-primary transition-all cursor-pointer"
          >
            −
          </button>
          <span className="w-12 text-center text-white font-bold text-lg">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-xl border border-border/50 text-white font-bold hover:bg-primary hover:border-primary transition-all cursor-pointer"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 h-13 px-6 py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
        <button className="flex-1 h-13 px-6 py-3.5 bg-white hover:bg-white/90 text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98]">
          <Zap className="w-5 h-5 fill-black" />
          Buy Now
        </button>
      </div>

      {/* Offers */}
      <div className="grid grid-cols-1 gap-2 pt-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-card border border-border/30 rounded-xl">
          <Truck className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">Free Shipping</p>
            <p className="text-xs text-white/40">On orders over $50</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 bg-card border border-border/30 rounded-xl">
          <Shield className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">2-Year Warranty</p>
            <p className="text-xs text-white/40">Manufacturer guarantee</p>
          </div>
        </div>
        <div className="flex items-center gap-3 px-4 py-3 bg-card border border-border/30 rounded-xl">
          <RotateCcw className="w-4 h-4 text-primary shrink-0" />
          <div>
            <p className="text-sm font-bold text-white">30-Day Returns</p>
            <p className="text-xs text-white/40">Hassle-free return policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
