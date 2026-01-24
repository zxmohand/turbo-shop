"use client";

import React, { useState } from "react";
import BackgroundEffects from "./_components/BackgroundEffects";
import CategoryHeader from "./_components/CategoryHeader";
import CategoryGrid from "./_components/CategoryGrid";
import CategoryNavigation from "./_components/CategoryNavigation";
import SearchAndFilters from "./_components/SearchAndFilters";
import QuickFilters from "./_components/QuickFilters";
import { Category } from "./_components/CategoryCard";

const CategoriesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const allCategories: Category[] = [
    {
      id: 1,
      name: "Clothes",
      description: "PREMIUM APPAREL",
      image:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      items: 234,
      trending: true,
    },
    {
      id: 2,
      name: "Shoes",
      description: "FOOTWEAR",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      items: 156,
      trending: true,
    },
    {
      id: 3,
      name: "Electronics",
      description: "TECH & GADGETS",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      items: 89,
      trending: false,
    },
    {
      id: 4,
      name: "Accessories",
      description: "STYLE ESSENTIALS",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      items: 178,
      trending: false,
    },
    {
      id: 5,
      name: "Sports",
      description: "ATHLETIC GEAR",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
      items: 142,
      trending: true,
    },
    {
      id: 6,
      name: "Outdoor",
      description: "ADVENTURE READY",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
      items: 98,
      trending: false,
    },
  ];

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
