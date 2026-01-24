import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-5 h-5 bg-primary rounded-sm"></div>
            <span className="text-lg font-bold text-white">TurboShop</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/category"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/new-arrivals"
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              New Arrivals
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <div className="relative hidden lg:flex items-center max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search our site..."
                className="pl-10 bg-secondary/50 border-border/50 text-white placeholder:text-muted-foreground text-sm h-9"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white hover:bg-transparent h-9 w-9"
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white hover:bg-transparent h-9 w-9"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
