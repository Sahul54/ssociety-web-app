"use client";

import Link from "next/link";
import { iconMap } from "@/data/categories";

export default function CategoryList({
  categories = [],
  activeCategory,
}) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">
        Categories
      </h3>

      <div className="space-y-1">
        {categories.map((category) => {
          const Icon =
            iconMap[category.icon];

          const active =
            category.value === activeCategory;

          return (
            <Link
              key={category.value}
              href={`/categories/${category.value}`}
              className={`group flex items-center justify-between rounded-xl p-3 transition-all duration-300 ${
                active
                  ? "bg-orange-500 text-white shadow-lg"
                  : "hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                    active
                      ? "bg-white/20"
                      : "bg-orange-100 text-orange-500 group-hover:bg-orange-500 group-hover:text-white"
                  }`}
                >
                  {Icon && (
                    <Icon size={18} />
                  )}
                </div>

                <div>
                  <h4 className="font-semibold">
                    {category.label}
                  </h4>

                  {category.count !==
                    undefined && (
                    <p
                      className={`text-xs ${
                        active
                          ? "text-orange-100"
                          : "text-slate-400"
                      }`}
                    >
                      {category.count} Providers
                    </p>
                  )}
                </div>
              </div>

              <span
                className={`text-xl transition-all ${
                  active
                    ? ""
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}