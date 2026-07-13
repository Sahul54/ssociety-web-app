"use client";

import { useState } from "react";
import {
  Filter,
  X,
  SlidersHorizontal,
} from "lucide-react";

export default function MobileFilter({
  filters,
  setFilters,
}) {
  const [open, setOpen] =
    useState(false);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: "",
      verified: false,
      availableToday: false,
      minRating: 0,
      maxPrice: 5000,
    });
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl lg:hidden"
      >
        <Filter size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white transition-all duration-300 lg:hidden ${
          open
            ? "translate-y-0"
            : "translate-y-full"
        }`}
      >
        <div className="max-h-[85vh] overflow-y-auto p-6">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal
                size={20}
                className="text-orange-500"
              />

              <h2 className="text-xl font-bold">
                Filters
              </h2>
            </div>

            <button
              onClick={() =>
                setOpen(false)
              }
            >
              <X />
            </button>
          </div>

          {/* Verified */}
          <label className="mb-5 flex items-center justify-between">
            <span>Verified Only</span>

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

          {/* Available Today */}
          <label className="mb-5 flex items-center justify-between">
            <span>
              Available Today
            </span>

            <input
              type="checkbox"
              checked={
                filters.availableToday
              }
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
          <div className="mb-6">
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
              className="w-full rounded-xl border p-3"
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
            <div className="mb-2 flex justify-between">
              <span>Max Price</span>

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

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <button
              onClick={clearFilters}
              className="flex-1 rounded-xl border py-3 font-semibold"
            >
              Clear
            </button>

            <button
              onClick={() =>
                setOpen(false)
              }
              className="flex-1 rounded-xl bg-orange-500 py-3 font-semibold text-white"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}