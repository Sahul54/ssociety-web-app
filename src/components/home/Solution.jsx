"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Home,
  Utensils,
  GraduationCap,
  Scissors,
  Dumbbell,
} from "lucide-react";

const solutions = [
  "Discover trusted local services",
  "Verified service providers",
  "Support local entrepreneurs",
  "Create earning opportunities",
  "Strengthen community connections",
  "Empower women & homemakers",
];

const cards = [
  {
    title: "Home Chef",
    subtitle: "12 Orders Today",
    icon: Utensils,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Tutor",
    subtitle: "5 New Students",
    icon: GraduationCap,
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Tailor",
    subtitle: "8 Active Requests",
    icon: Scissors,
    color: "bg-pink-100 text-pink-500",
  },
  {
    title: "Yoga Trainer",
    subtitle: "Morning Batch Full",
    icon: Dumbbell,
    color: "bg-green-100 text-green-500",
  },
];

export default function Solution() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white py-24">
      {/* Blur */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-600">
              The Solution
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
              One Platform
              <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                Every Society Needs
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              SocietyHub helps residents discover trusted local service
              providers while giving talented people an opportunity to earn,
              grow and become visible inside their own community.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {solutions.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-lg"
                >
                  <CheckCircle2
                    size={22}
                    className="text-green-500"
                  />

                  <span className="font-medium text-gray-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="mx-auto w-full max-w-md rounded-3xl ">
              {/* Header */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
                  <Home className="text-orange-500" size={22} />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    SocietyHub
                  </h3>

                  <p className="text-sm text-gray-500">
                    Verified Marketplace
                  </p>
                </div>
              </div>

              {/* Service Cards */}
              <div className="space-y-3">
                {cards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <motion.div
                      key={card.title}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition hover:border-orange-200 hover:bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg ${card.color}`}
                        >
                          <Icon size={20} />
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">
                            {card.title}
                          </h4>

                          <p className="text-xs text-gray-500">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>

                      <CheckCircle2
                        size={18}
                        className="text-green-500"
                      />
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-4 text-center text-white">
                <p className="font-semibold">
                  Connecting Local Talent
                </p>

                <p className="mt-1 text-xs text-orange-100">
                  Discover • Connect • Earn
                </p>
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -right-6 top-1 hidden rounded-2xl bg-white p-4 shadow-xl lg:block"
            >
              <p className="text-sm font-semibold text-gray-900">
                150+ Home Chefs
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -left-6 bottom-0 hidden rounded-xl bg-white p-4 shadow-xl lg:block"
            >
              <p className="text-sm font-semibold text-gray-900">
                ⭐ Trusted & Verified
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}