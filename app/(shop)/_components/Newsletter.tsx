import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="bg-gradient-to-br from-[#3a2020] to-[#2a1515] py-14">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3">
            Join the Speed Club
          </h2>
          <p className="text-sm text-white/60 mb-6">
            Get exclusive access to flash sales, members-only drops, VIP perks, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1 h-11"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 h-11 rounded-md">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}