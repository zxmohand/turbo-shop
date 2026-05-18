import { ChevronLeft, ChevronRight } from "lucide-react";

interface CategoryNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onPageSelect: (page: number) => void;
}

export default function CategoryNavigation({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onPageSelect,
}: CategoryNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-6 mb-16">
      <button
        type="button"
        onClick={onPrevPage}
        disabled={currentPage === 0}
        className="group p-4 rounded-full bg-card border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-110 active:scale-95"
        aria-label="Previous categories"
      >
        <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <div className="flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            type="button"
            key={index}
            onClick={() => onPageSelect(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              currentPage === index
                ? "w-10 bg-primary shadow-lg shadow-primary/50"
                : "w-2.5 bg-muted hover:bg-muted-foreground/50 hover:w-6"
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={onNextPage}
        disabled={currentPage === totalPages - 1}
        className="group p-4 rounded-full bg-card border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm hover:shadow-xl hover:shadow-primary/30 hover:scale-110 active:scale-95"
        aria-label="Next categories"
      >
        <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
