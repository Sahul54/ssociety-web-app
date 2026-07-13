"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import categories, {
  iconMap,
} from "@/data/categories";

export default function Categories() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-orange-200/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            ✨ Service Categories
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything Your
            <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Society Needs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover trusted local services offered by talented residents
            inside your community.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <Link
                key={category.value}
                href={`/categories/${category.value}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-2xl"
                >
                  {/* Hover Border */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 group-hover:w-full" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white"
                  >
                    {Icon ? (
                      <Icon
                        size={30}
                        strokeWidth={2.2}
                      />
                    ) : (
                      <div className="text-xs font-bold">
                        ?
                      </div>
                    )}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900">
                    {category.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Verified local professionals near you.
                  </p>

                  {/* Explore */}
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-orange-500 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Explore
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>

                  {/* Glow */}
                  <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-orange-100 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <div className="rounded-full border border-orange-200 bg-white px-6 py-3 shadow-md">
            <span className="text-sm font-semibold text-gray-700">
              🚀 10+ Categories • Verified Providers • Growing Community
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}