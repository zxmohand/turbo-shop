"use client";

import React, { useState } from "react";
import BackgroundEffects from "./_components/BackgroundEffects";
import CategoryHeader from "./_components/CategoryHeader";
import CategoryGrid from "./_components/CategoryGrid";
import CategoryNavigation from "./_components/CategoryNavigation";
import SearchAndFilters from "./_components/SearchAndFilters";
import QuickFilters from "./_components/QuickFilters";
import { CATEGORY_LIST } from "@/lib/data/categories";
import { Category } from "./_components/CategoryCard";

const CategoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Map shared data to the shape CategoryCard expects
  const allCategories: Category[] = CATEGORY_LIST.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    description: cat.description,
    image: cat.image,
    items: cat.items,
    trending: cat.trending,
  }));

  // Dynamically filter categories based on search
  const filteredCategories = allCategories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const itemsPerPage = 4;
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);

  // Reset to first page if search changes and current page is out of bounds
  const safePage = currentPage >= totalPages ? 0 : currentPage;

  const visibleCategories = filteredCategories.slice(
    safePage * itemsPerPage,
    (safePage + 1) * itemsPerPage,
  );

  const totalProducts = filteredCategories.reduce(
    (acc, cat) => acc + cat.items,
    0,
  );

  return (
    <section className="relative min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <BackgroundEffects />

      <div className="relative max-w-7xl mx-auto">
        <CategoryHeader
          totalCategories={filteredCategories.length}
          totalProducts={totalProducts}
        />

        <CategoryGrid categories={visibleCategories} />

        {totalPages > 1 && (
          <CategoryNavigation
            currentPage={safePage}
            totalPages={totalPages}
            onPrevPage={() =>
              setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
            }
            onNextPage={() => setCurrentPage((prev) => (prev + 1) % totalPages)}
            onPageSelect={setCurrentPage}
          />
        )}

        <SearchAndFilters
          searchQuery={searchQuery}
          onSearchChange={(q) => {
            setSearchQuery(q);
            setCurrentPage(0); // Reset page when searching
          }}
        />

        <QuickFilters />
      </div>
    </section>
  );
};

export default CategoriesPage;
