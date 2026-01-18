import { Zap, Shield, RefreshCw } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Load",
      description: "Our globally distributed CDN ensures lightning-fast page loads no matter where you are.",
    },
    {
      icon: Shield,
      title: "Secure Core",
      description: "Enterprise-grade security with end-to-end encryption protects your data 24/7.",
    },
    {
      icon: RefreshCw,
      title: "Real-Time Sync",
      description: "Live inventory updates sync across all devices in real-time for a seamless experience.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-[#2a1010] py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            Engineered for Performance
          </h2>
          <p className="text-sm text-white/60">
            We designed every last detail to give you the fastest shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-lg bg-card/30 border border-border/50 hover:border-primary/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              
              <p className="text-sm text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}