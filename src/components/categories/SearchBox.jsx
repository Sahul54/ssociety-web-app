"use client";

import { Search } from "lucide-react";

export default function SearchBox({
  value = "",
  onChange,
  placeholder = "Search services...",
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Search
      </label>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-100"
        />
      </div>
    </div>
  );
}