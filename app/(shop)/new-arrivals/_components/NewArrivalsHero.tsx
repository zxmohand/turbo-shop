import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

export default function NewArrivalsHero() {
  return (
    <div className="lg:col-span-2">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card h-[600px] sm:h-[550px] lg:h-[600px]">
        {/* Content Overlay/Container */}
        <div className="relative h-full grid grid-cols-1 lg:grid-cols-2 z-20">
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 w-fit">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider">
                  Just Arrived
                </span>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none">
                  NEW
                </h1>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-none">
                  ARRIVALS
                </h1>
              </div>

              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-md leading-relaxed">
                Discover the latest products fresh in stock. Premium items
                curated for you.
              </p>

              <button className="group flex items-center justify-center lg:justify-start gap-3 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-base lg:text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105 active:scale-95 w-full sm:w-fit cursor-pointer">
                <span>EXPLORE NOW</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Empty div for grid spacing on desktop */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Background Image Container */}
        <div className="absolute inset-0 lg:left-1/2 lg:w-1/2 h-full z-10">
          <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent lg:bg-linear-to-r lg:from-card lg:via-transparent z-20"></div>
          <Image
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&q=90"
            alt="New Arrivals"
            fill
            className="object-cover object-center sm:object-[25%_center] lg:object-center"
            priority
          />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] z-10"></div>
        </div>
      </div>
    </div>
  );
}
