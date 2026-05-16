"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  mainImage: string;
  images: string[];
  productName: string;
}

export default function ProductGallery({ mainImage, images, productName }: ProductGalleryProps) {
  const allImages = images.length > 0 ? images : [mainImage];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4 sticky top-6">
      {/* Main Image */}
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/20 border border-border/30">
        <Image
          src={allImages[activeIndex]}
          alt={productName}
          fill
          className="object-cover transition-all duration-500"
          priority
        />
      </div>

      {/* Thumbnail Carousel */}
      {allImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {allImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                activeIndex === i ? "border-primary" : "border-border/30 hover:border-border"
              }`}
            >
              <Image src={img} alt={`${productName} angle ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
