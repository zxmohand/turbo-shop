"use client";

import { useState, useMemo } from "react";
import { ALL_PRODUCTS, getCategoryLabel } from "@/lib/data/products";
import NewArrivalsHero from "./_components/NewArrivalsHero";
import FeaturedSidebar from "./_components/FeaturedSidebar";
import FilterSidebar from "./_components/FilterSidebar";
import ProductCard from "./_components/ProductCard";
import { ChevronDown } from "lucide-react";

export default function NewArrivalsPage() {
  // 1. Get all new products dynamically
  const newArrivalProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => p.badge === "NEW");
  }, []);

  // 2. Get featured products dynamically (trending tech items)
  const featuredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((p) => p.trending && p.department === "electronics").slice(0, 3);
  }, []);

  // 3. States for filters and sorting
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("Newest");

  const sizes = ["S", "M", "L", "XL"];

  // 4. Dynamic category counts based on all new arrivals
  const categoriesWithCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    newArrivalProducts.forEach((p) => {
      const label = getCategoryLabel(p.category);
      counts[label] = (counts[label] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({
      name,
      count,
    }));
  }, [newArrivalProducts]);

  // 5. Handlers
  const toggleCategory = (categoryLabel: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryLabel)
        ? prev.filter((c) => c !== categoryLabel)
        : [...prev, categoryLabel]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleResetFilters = () => {
    setPriceRange([0, 2000]);
    setSelectedCategories([]);
    setSelectedSizes([]);
  };

  // 6. Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = [...newArrivalProducts];

    // Filter by Price
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Filter by Categories
    if (selectedCategories.length > 0) {
      result = result.filter((p) =>
        selectedCategories.includes(getCategoryLabel(p.category))
      );
    }

    // Filter by Sizes (mock apparel filter for future extension)
    if (selectedSizes.length > 0) {
      result = result.filter((p) => {
        // Tech items don't have sizes, so if they are filtered, we check if they support it
        // Or if the item doesn't have sizes field, we skip it
        if (!p.colors) return false; // assuming size is only for apparel
        return true;
      });
    }

    // Sorting
    if (sortBy === "Price: Low to High") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "Price: High to Low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "Most Popular") {
      result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
    } else {
      // Default: "Newest" (highest ID first)
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [newArrivalProducts, priceRange, selectedCategories, selectedSizes, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            <NewArrivalsHero />
            <FeaturedSidebar featuredProducts={featuredProducts} />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minPrice={0}
              maxPrice={2000}
              categories={categoriesWithCounts}
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              sizes={sizes}
              selectedSizes={selectedSizes}
              toggleSize={toggleSize}
              onReset={handleResetFilters}
            />

            {/* Products Grid */}
            <div className="lg:col-span-9">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                <div className="text-muted-foreground text-sm">
                  Showing <span className="text-foreground font-bold">{filteredProducts.length}</span> of{" "}
                  <span className="text-foreground font-bold">{newArrivalProducts.length}</span> new items
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
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="bg-card border border-border rounded-3xl p-12 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">No Products Found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search terms.</p>
                  <button 
                    onClick={handleResetFilters}
                    className="px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
