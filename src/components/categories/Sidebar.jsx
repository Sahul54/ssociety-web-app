"use client";

import SearchBox from "./SearchBox";
import CategoryList from "./CategoryList";
import FilterPanel from "./FilterPanel";

export default function Sidebar({
  categories,
  activeCategory,
  filters,
  setFilters,
}) {
  return (
    <aside className="hidden h-screen w-80 shrink-0 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      <div className="sticky top-0 h-screen overflow-y-auto">
        <div className="space-y-8 p-6">
          {/* Search */}
          {/* <SearchBox /> */}

          {/* Categories */}
          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
          />

          {/* Filters */}
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      </div>
    </aside>
  );
}