interface CategoryFilter {
  name: string;
  count: number;
}

interface FilterSidebarProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  categories: CategoryFilter[];
  selectedCategories: string[];
  toggleCategory: (category: string) => void;
  sizes: string[];
  selectedSizes: string[];
  toggleSize: (size: string) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  categories,
  selectedCategories,
  toggleCategory,
  sizes,
  selectedSizes,
  toggleSize,
  onReset,
}: FilterSidebarProps) {
  return (
    <div className="lg:col-span-3">
      <div className="sticky top-8 space-y-6">
        {/* Price Range */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-foreground">
              PRICE RANGE
            </h3>
            <button 
              onClick={onReset}
              className="text-sm text-primary font-semibold hover:underline cursor-pointer"
            >
              Reset
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
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
                className={`py-3 rounded-xl border-2 font-bold transition-all duration-300 cursor-pointer ${
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
  );
}
