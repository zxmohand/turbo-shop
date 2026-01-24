import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
  items: number;
  trending: boolean;
}

interface CategoryCardProps {
  category: Category;
  index: number;
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl h-[400px]">
      <div className="relative h-full overflow-hidden bg-card rounded-2xl border border-border transition-all duration-500 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 cursor-pointer">
        {/* Image */}
        <div className="absolute inset-0">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 2}
          />
          {/* Enhanced Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-[shimmer_2s_ease-in-out_infinite]"></div>
          </div>
        </div>

        {/* Trending Badge */}
        {category.trending && (
          <div className="absolute top-6 right-6 z-10">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 backdrop-blur-sm rounded-full text-xs font-bold text-primary-foreground shadow-lg animate-[bounce_2s_ease-in-out_infinite]">
              <TrendingUp className="w-3 h-3" />
              <span>TRENDING</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform transition-all duration-500 group-hover:translate-y-[-12px]">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-xs font-bold tracking-[0.25em] uppercase drop-shadow-lg">
                {category.description}
              </span>
              <span className="px-3 py-1.5 bg-card/90 backdrop-blur-sm rounded-full text-xs text-foreground font-bold border border-primary/40 shadow-lg">
                {category.items} items
              </span>
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 drop-shadow-2xl">
              {category.name}
            </h3>

            {/* Enhanced CTA */}
            <div className="inline-flex items-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
              <span className="text-sm font-bold tracking-wide">
                Explore Collection
              </span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>

        {/* Enhanced Hover Border Effect */}
        <div className="absolute inset-0 rounded-2xl ring-2 ring-primary/0 group-hover:ring-primary/60 transition-all duration-500"></div>

        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 rounded-tl-2xl transition-all duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 rounded-br-2xl transition-all duration-500"></div>
      </div>
    </div>
  );
}
