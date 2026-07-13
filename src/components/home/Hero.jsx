"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white min-h-[90vh] flex items-center py-8">
      {/* Background */}
      <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-300/20 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-orange-200/30 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,146,60,.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-0">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2 shadow-sm">
              <BadgeCheck className="h-4 w-4 text-orange-500" />

              <span className="text-sm font-semibold text-orange-600">
                Hyperlocal Community Marketplace
              </span>
            </div>

            {/* Heading */}

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Earn From
              <br />

              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 bg-clip-text text-transparent">
                Your Society
              </span>
            </h1>

            <p className="mt-2 max-w-xl text-lg leading-8 text-slate-600">
              Discover trusted neighbours, book verified local services and help
              talented people like tutors, chefs, freelancers and tailors earn
              more inside your own community.
            </p>

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Download App

                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/provider/create"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-md transition-all hover:border-orange-500 hover:text-orange-500"
              >
                Become Provider
              </Link>
            </div>

            {/* Stats */}

            <div className="mt-10 inline-flex items-center gap-5 rounded-2xl bg-white px-5 py-4">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt="Resident"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
                />
                <img
                  src="https://i.pravatar.cc/100?img=5"
                  alt="Resident"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
                />
                <img
                  src="https://i.pravatar.cc/100?img=9"
                  alt="Resident"
                  className="h-11 w-11 rounded-full border-2 border-white object-cover shadow"
                />
              </div>

              {/* Divider */}
              <div className="h-10 w-px bg-slate-200" />

              {/* Rating */}
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-orange-400 text-orange-400"
                    />
                  ))}

                  <span className="ml-2 text-sm font-semibold text-slate-900">
                    4.9/5
                  </span>
                </div>

                <p className="mt-1 text-sm text-slate-500">
                  Trusted by{" "}
                  <span className="font-semibold text-slate-800">
                    2,400+
                  </span>{" "}
                  residents
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900"
                className="col-span-2 h-[340px] w-full rounded-[30px] object-cover shadow-2xl"
              />

              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=700"
                  className="h-40 w-full rounded-[30px] object-cover shadow-xl"
                />

                <img
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700"
                  className="h-40 w-full rounded-[30px] object-cover shadow-xl"
                />
              </div>

              <div className="rounded-[30px] bg-gradient-to-br from-orange-500 to-orange-600 p-2 text-white shadow-xl">
                <p className="mt-5 text-sm uppercase tracking-[1px]">
                  Monthly Income
                </p>

                <h4 className="mt-2 text-3xl font-black">
                  ₹18.4K
                </h4>

                <p className="mt-2 text-orange-100">
                  Average provider earnings
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900"
                className="col-span-2 h-42 w-full rounded-[30px] object-cover shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}