import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#2a1515] via-[#2a1010] to-[#1a0808] overflow-hidden">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block px-3 py-1.5 bg-secondary/50 rounded-full border border-primary/30">
              <span className="text-xs text-primary uppercase tracking-wider font-medium">
                Latest Collection 2024
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built for Speed.
              <br />
              <span className="text-white">Designed for You.</span>
            </h1>
            
            <p className="text-base text-white/60 max-w-lg leading-relaxed">
              Experience the next generation of commerce. Our performance-first approach ensures you the fastest and most secure shopping experience possible.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 h-11 rounded-md">
                Shop Now
              </Button>
              <Button 
                size="lg" 
                className="bg-[#3a1818] hover:bg-[#4a2020] text-white border-0 px-6 h-11 rounded-md"
              >
                View Specs
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552318059-ebc93d7c1060?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMGRlc2slMjBvcmFuZ2V8ZW58MXx8fHwxNzY4NzM2NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern workspace setup"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}