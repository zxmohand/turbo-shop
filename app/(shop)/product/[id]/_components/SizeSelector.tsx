"use client";

import { useState } from "react";
import { getSizeSystem, SizeSystemType } from "@/lib/data/products";

interface SizeSelectorProps {
  categorySlug: string;
}

const SIZE_GUIDE: Record<SizeSystemType, { headers: string[]; rows: string[][] }> = {
  clothing: {
    headers: ["Size", "Chest (cm)", "Waist (cm)", "Length (cm)"],
    rows: [
      ["XS", "82–87", "68–73", "67"],
      ["S",  "87–92", "73–78", "69"],
      ["M",  "92–97", "78–83", "71"],
      ["L",  "97–102","83–88", "73"],
      ["XL", "102–107","88–93","75"],
      ["XXL","107–112","93–98","77"],
    ],
  },
  footwear: {
    headers: ["EU", "UK", "US", "Foot length (cm)"],
    rows: [
      ["36", "3.5", "4.5", "22.5"],
      ["37", "4",   "5",   "23"],
      ["38", "5",   "6",   "24"],
      ["39", "5.5", "6.5", "24.5"],
      ["40", "6.5", "7.5", "25.5"],
      ["41", "7",   "8",   "26"],
      ["42", "8",   "9",   "26.5"],
      ["43", "9",   "10",  "27.5"],
      ["44", "9.5", "10.5","28"],
      ["45", "10.5","11.5","29"],
    ],
  },
  pants: {
    headers: ["Waist (in)", "Waist (cm)", "Hip (cm)"],
    rows: [
      ["28", "71", "91"],
      ["30", "76", "96"],
      ["32", "81", "101"],
      ["34", "86", "106"],
      ["36", "91", "111"],
      ["38", "96", "116"],
    ],
  },
  none: { headers: [], rows: [] },
};

export default function SizeSelector({ categorySlug }: SizeSelectorProps) {
  const { type, sizes } = getSizeSystem(categorySlug);
  const [selected, setSelected] = useState<string | null>(null);
  const [showGuide, setShowGuide] = useState(false);

  if (type === "none") return null;

  const guide = SIZE_GUIDE[type];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-white uppercase tracking-widest">
          {type === "footwear" ? "EU Size" : type === "pants" ? "Waist (inches)" : "Size"}
        </span>
        <button
          onClick={() => setShowGuide(true)}
          className="text-xs font-bold text-primary hover:underline cursor-pointer"
        >
          Size Guide →
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelected(size === selected ? null : size)}
            className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
              selected === size
                ? "bg-primary border-primary text-white"
                : "bg-card border-border/50 text-white/70 hover:border-primary/50 hover:text-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>

      {/* Size Guide Modal */}
      {showGuide && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowGuide(false)}
        >
          <div
            className="bg-card border border-border/50 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-white">
                {type === "footwear" ? "Shoe Size Guide" : type === "pants" ? "Pants Size Guide" : "Clothing Size Guide"}
              </h3>
              <button
                onClick={() => setShowGuide(false)}
                className="text-white/50 hover:text-white text-xl cursor-pointer font-bold"
              >
                ✕
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    {guide.headers.map((h) => (
                      <th key={h} className="pb-3 text-left text-primary font-bold text-xs uppercase tracking-widest">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.rows.map((row, i) => (
                    <tr key={i} className="border-b border-border/20 hover:bg-secondary/10">
                      {row.map((cell, j) => (
                        <td key={j} className={`py-2.5 ${j === 0 ? "font-bold text-white" : "text-white/60"}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-white/30">Measurements are approximate. When in doubt, size up.</p>
          </div>
        </div>
      )}
    </div>
  );
}
