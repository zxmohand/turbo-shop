import { ALL_PRODUCTS, DEPARTMENTS, DISCOUNTED_PRODUCTS } from "@/lib/data/products";

export default function Stats() {
  const stats = [
    { value: `${ALL_PRODUCTS.length}+`, label: "Premium Products" },
    { value: `${DEPARTMENTS.length}`, label: "Major Departments" },
    { value: `${DISCOUNTED_PRODUCTS.length}`, label: "Live Offers" },
  ];

  return (
    <section className="bg-background border-y border-border/30">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-black text-white mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}