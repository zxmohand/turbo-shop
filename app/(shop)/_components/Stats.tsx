import { ALL_PRODUCTS, CATEGORIES, DISCOUNTED_PRODUCTS } from "@/lib/data/products";

export default function Stats() {
  const stats = [
    { value: `${ALL_PRODUCTS.length}+`, label: "Products" },
    { value: `${CATEGORIES.length}`, label: "Categories" },
    { value: `${DISCOUNTED_PRODUCTS.length}`, label: "Active Deals" },
  ];

  return (
    <section className="bg-background border-y border-border/30">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}