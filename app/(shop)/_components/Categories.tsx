import { Card } from "@/components/ui/card";

export default function Categories() {
  const categories = [
    {
      name: "Mobile Tech",
      itemCount: "Latest Devices",
      image: "https://images.unsplash.com/photo-1571126770247-9a99e5f7eff7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwdGVjaHxlbnwxfHx8fDE3Njg2NjA1MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Audio",
      itemCount: "Premium Sound",
      image: "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwYXVkaW98ZW58MXx8fHwxNzY4NTY3OTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Components",
      itemCount: "Build Your PC",
      image: "https://images.unsplash.com/photo-1762681290802-aa3e6d315ac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGtleWJvYXJkJTIwY29tcG9uZW50c3xlbnwxfHx8fDE3Njg2NjA1MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Wearables",
      itemCount: "Smart & Fast",
      image: "https://images.unsplash.com/photo-1719744755507-a4c856c57cf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGV8ZW58MXx8fHwxNzY4NTY5MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Speed Categories</h2>
          <a
            href="#"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            View All →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer rounded-lg"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-white mb-0.5">
                  {category.name}
                </h3>
                <p className="text-xs text-white/60">
                  {category.itemCount}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}