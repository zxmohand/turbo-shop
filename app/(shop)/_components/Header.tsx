"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEPARTMENTS } from "@/lib/data/products";
import MegaMenu from "./MegaMenu";

export default function Header() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (slug: string) => {
    setActiveMenu(activeMenu === slug ? null : slug);
  };

  const activeDeptData = DEPARTMENTS.find(d => d.slug === activeMenu);

  return (
    <header className="relative z-50 shadow-2xl" ref={headerRef}>
      {/* TOP ROW: Logo, Search, Icons */}
      <div className="bg-background border-b border-border/50 py-4 px-6 relative z-20">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity">
              <div className="w-6 h-6 bg-primary rounded-sm"></div>
              <span className="text-xl font-bold text-white tracking-tight">TurboShop</span>
            </Link>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const query = formData.get("search");
                if (query) router.push(`/products?q=${query}`);
              }}
              className="hidden lg:flex flex-1 max-w-2xl relative"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                name="search"
                placeholder="Search for products, brands and more..."
                className="w-full bg-secondary/30 border-border/50 text-white placeholder:text-muted-foreground pl-12 h-11 rounded-full focus:ring-primary/20"
              />
            </form>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/5">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/80 hover:text-white hover:bg-white/5 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-[10px] font-bold rounded-full flex items-center justify-center text-white">0</span>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden text-white/80 hover:text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: Navigation */}
      <nav className="hidden md:block bg-secondary/10 border-b border-border/30 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-8 h-12">
            <Link 
              href="/best-offers" 
              className="text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
            >
              Best Offers
            </Link>

            <div className="flex items-center gap-6 h-full">
              {DEPARTMENTS.map((dept) => (
                <div key={dept.slug} className="h-full">
                  <button 
                    onClick={() => toggleMenu(dept.slug)}
                    className={`flex items-center gap-1.5 h-full text-sm font-semibold transition-colors cursor-pointer ${activeMenu === dept.slug ? 'text-primary' : 'text-white/80 hover:text-white'}`}
                  >
                    {dept.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === dept.slug ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ))}
            </div>

            <Link 
              href="/category" 
              className="ml-auto text-xs font-bold text-white/40 hover:text-primary transition-colors uppercase tracking-widest"
            >
              All Departments
            </Link>
          </div>
        </div>

        {/* MEGA MENU: Click to open */}
        {activeDeptData && (
          <div className="absolute top-full left-0 w-full shadow-2xl">
            <MegaMenu 
              department={activeDeptData} 
              isOpen={true} 
              onClose={() => setActiveMenu(null)}
            />
          </div>
        )}
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-background z-100 animate-in fade-in slide-in-from-right duration-300 md:hidden overflow-y-auto">
          <div className="p-6 space-y-8">
            <Link 
              href="/best-offers" 
              className="block text-xl font-bold text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Best Offers
            </Link>
            
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Departments</h3>
              {DEPARTMENTS.map((dept) => (
                <div key={dept.slug} className="space-y-4">
                  <Link 
                    href={`/products?department=${dept.slug}`}
                    className="text-lg font-bold text-white block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {dept.label}
                  </Link>
                  <div className="grid grid-cols-1 gap-2 pl-4 border-l border-border/50">
                    {dept.subcategories.map(sub => (
                      <Link 
                        key={sub.slug}
                        href={`/products?department=${dept.slug}&category=${sub.slug}`}
                        className="text-sm text-white/60 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
