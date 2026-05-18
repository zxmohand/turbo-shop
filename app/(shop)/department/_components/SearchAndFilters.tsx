import { Search, SlidersHorizontal } from "lucide-react";

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function SearchAndFilters({
  searchQuery,
  onSearchChange,
}: SearchAndFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10 border-t border-border/50">
      <div className="relative flex-1 max-w-xl w-full group">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          placeholder="Search all products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-14 pr-5 py-4 bg-input-background border-2 border-border rounded-2xl text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all duration-300 backdrop-blur-sm hover:border-primary/30"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-5 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        )}
      </div>

      <button
        type="button"
        className="flex items-center gap-3 px-8 py-4 bg-card border-2 border-border rounded-2xl text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-primary/20 hover:scale-105 active:scale-95"
      >
        <SlidersHorizontal className="w-5 h-5 transition-transform group-hover:rotate-90 duration-300" />
        <span className="font-bold">Filters</span>
      </button>
    </div>
  );
}
