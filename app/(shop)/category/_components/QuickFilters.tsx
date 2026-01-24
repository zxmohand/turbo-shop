interface QuickFiltersProps {
  filters?: string[];
}

export default function QuickFilters({
  filters = ["New Arrivals", "Best Sellers", "Sale", "Premium"],
}: QuickFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
      <span className="text-sm text-muted-foreground font-medium">
        Quick filters:
      </span>
      {filters.map((tag) => (
        <button
          key={tag}
          type="button"
          className="px-4 py-2 bg-card/50 border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
