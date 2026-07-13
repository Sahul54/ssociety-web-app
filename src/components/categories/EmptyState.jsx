"use client";

import { SearchX, RotateCcw } from "lucide-react";

export default function EmptyState({
  onClearFilters,
}) {
  return (
    <div className="flex min-h-[500px] items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white p-10">
      <div className="max-w-md text-center">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
          <SearchX
            size={44}
            className="text-orange-500"
          />
        </div>

        {/* Title */}

        <h2 className="mt-6 text-3xl font-bold text-slate-900">
          No Services Found
        </h2>

        {/* Description */}

        <p className="mt-3 leading-7 text-slate-500">
          We couldn't find any services matching
          your current search or filters.
        </p>

        {/* Suggestions */}

        <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">

          <h3 className="font-semibold">
            Try these:
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-500">

            <li>
              • Remove some filters
            </li>

            <li>
              • Increase maximum price
            </li>

            <li>
              • Search with another keyword
            </li>

            <li>
              • Disable Nearby filter
            </li>

          </ul>

        </div>

        {/* Button */}

        <button
          onClick={onClearFilters}
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          <RotateCcw size={18} />

          Clear Filters
        </button>

      </div>
    </div>
  );
}