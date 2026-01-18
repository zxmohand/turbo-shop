import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Studio Pro X",
      price: "$249",
      image: "https://images.unsplash.com/photo-1642181329718-5f13fbc560b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3Njg2NjA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NEW",
    },
    {
      id: 2,
      name: "Retro Cam 09",
      price: "$149",
      image: "https://images.unsplash.com/photo-1575998256834-2d841f0d7ede?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY2FtZXJhJTIwdmludGFnZXxlbnwxfHx8fDE3Njg2NjA1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "HOT",
    },
    {
      id: 3,
      name: "Elite 15",
      price: "$1,899",
      image: "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBtaW5pbWFsfGVufDF8fHx8MTc2ODU1NTg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Chrono Fit",
      price: "$399",
      image: "https://images.unsplash.com/photo-1644893216815-adb3b57047cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGJsYWNrfGVufDF8fHx8MTc2ODU5MDQ4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      badge: "NEW",
    },
  ];

  return (
    <section className="bg-background py-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">New Arrivals</h2>
            <p className="text-sm text-white/60">Fresh and exclusive this week</p>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button className="w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors">
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden bg-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 rounded-lg">
              <div className="relative aspect-square overflow-hidden bg-secondary/30">
                {product.badge && (
                  <Badge className="absolute top-3 left-3 z-10 bg-primary text-white border-0 text-xs px-2 py-0.5">
                    {product.badge}
                  </Badge>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-white">
                    {product.name}
                  </h3>
                  <span className="text-base font-bold text-white">
                    {product.price}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}