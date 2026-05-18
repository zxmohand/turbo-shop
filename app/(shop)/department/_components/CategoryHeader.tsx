import { Sparkles } from "lucide-react";

interface CategoryHeaderProps {
  totalCategories: number;
  totalProducts: number;
}

export default function CategoryHeader({
  totalCategories,
  totalProducts,
}: CategoryHeaderProps) {
  return (
    <div className="text-center mb-16 space-y-6">
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-primary"></div>
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-semibold tracking-[0.3em] uppercase">
            Collections
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </div>
        <div className="h-px w-20 bg-gradient-to-l from-transparent via-primary/50 to-primary"></div>
      </div>

      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text">
        Shop by Category
      </h2>

      <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
        Explore our high-performance gear. Designed for speed,
        <br className="hidden sm:block" />
        durability, and style in every environment.
      </p>

      {/* Category Stats */}
      <div className="flex items-center justify-center gap-8 pt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">
            {totalCategories}+
          </div>
          <div className="text-sm text-muted-foreground">Categories</div>
        </div>
        <div className="h-12 w-px bg-border"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">
            {totalProducts}+
          </div>
          <div className="text-sm text-muted-foreground">Products</div>
        </div>
        <div className="h-12 w-px bg-border"></div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">24/7</div>
          <div className="text-sm text-muted-foreground">Support</div>
        </div>
      </div>
    </div>
  );
}
