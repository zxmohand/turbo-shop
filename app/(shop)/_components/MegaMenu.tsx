"use client";

import Link from "next/link";
import { Department } from "@/lib/data/products";

interface MegaMenuProps {
  department: Department;
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ department, isOpen, onClose }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="bg-card border-b border-border shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Main Subcategories Grid */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-6">
              Shop by Category
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-12">
              {department.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`/products?department=${department.slug}&category=${sub.slug}`}
                  className="group flex flex-col gap-1 cursor-pointer"
                  onClick={onClose}
                >
                  <span className="text-base font-semibold text-white group-hover:text-primary transition-colors">
                    {sub.label}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-tighter">
                    Explore All
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured / Promo Area */}
          <div className="hidden md:flex flex-col justify-center border-l border-border/50 pl-12">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white">
                {department.label}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Discover the latest trends and exclusive collections in our {department.label} department.
              </p>
              <Link
                href={`/products?department=${department.slug}`}
                className="inline-block text-sm font-bold text-primary hover:underline"
                onClick={onClose}
              >
                View All {department.label} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
