"use client";

import { SlidersHorizontal } from "lucide-react";

export default function FilterPanel({
  filters,
  setFilters,
}) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      nearby: false,
      verified: false,
      availableToday: false,
      minRating: 0,
      maxPrice: 5000,
    });
  };

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-5">

      {/* Heading */}

      <div className="flex items-center gap-2">
        <SlidersHorizontal
          size={20}
          className="text-orange-500"
        />

        <h2 className="font-bold text-slate-900">
          Filters
        </h2>
      </div>

      {/* Nearby */}

      <label className="flex cursor-pointer items-center justify-between">
        <span className="font-medium">
          Nearby Only
        </span>

        <input
          type="checkbox"
          checked={filters.nearby}
          onChange={(e) =>
            updateFilter(
              "nearby",
              e.target.checked
            )
          }
          className="h-5 w-5 accent-orange-500"
        />
      </label>

      {/* Verified */}

      <label className="flex cursor-pointer items-center justify-between">
        <span className="font-medium">
          Verified Provider
        </span>

        <input
          type="checkbox"
          checked={filters.verified}
          onChange={(e) =>
            updateFilter(
              "verified",
              e.target.checked
            )
          }
          className="h-5 w-5 accent-orange-500"
        />
      </label>

      {/* Available */}

      <label className="flex cursor-pointer items-center justify-between">
        <span className="font-medium">
          Available Today
        </span>

        <input
          type="checkbox"
          checked={filters.availableToday}
          onChange={(e) =>
            updateFilter(
              "availableToday",
              e.target.checked
            )
          }
          className="h-5 w-5 accent-orange-500"
        />
      </label>

      {/* Rating */}

      <div>
        <label className="mb-2 block font-medium">
          Minimum Rating
        </label>

        <select
          value={filters.minRating}
          onChange={(e) =>
            updateFilter(
              "minRating",
              Number(e.target.value)
            )
          }
          className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-orange-500"
        >
          <option value={0}>
            All Ratings
          </option>

          <option value={3}>
            3★ & Above
          </option>

          <option value={4}>
            4★ & Above
          </option>

          <option value={4.5}>
            4.5★ & Above
          </option>
        </select>
      </div>

      {/* Price */}

      <div>
        <div className="mb-2 flex items-center justify-between">

          <span className="font-medium">
            Max Price
          </span>

          <span className="font-bold text-orange-500">
            ₹{filters.maxPrice}
          </span>

        </div>

        <input
          type="range"
          min={100}
          max={5000}
          step={100}
          value={filters.maxPrice}
          onChange={(e) =>
            updateFilter(
              "maxPrice",
              Number(e.target.value)
            )
          }
          className="w-full accent-orange-500"
        />
      </div>

      {/* Clear */}

      <button
        onClick={clearFilters}
        className="w-full rounded-xl bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600"
      >
        Clear Filters
      </button>
    </div>
  );
}