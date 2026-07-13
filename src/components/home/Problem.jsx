"use client";

import { motion } from "framer-motion";
import {
  Users,
  Search,
  Briefcase,
  MessageCircle,
  AlertTriangle,
} from "lucide-react";

const problems = [
  {
    icon: Briefcase,
    title: "Talented People Lack Customers",
    description:
      "Many skilled homemakers, tutors, chefs and freelancers struggle to find customers despite having valuable skills.",
  },
  {
    icon: Search,
    title: "Trusted Services Are Hard To Find",
    description:
      "Residents often don't know which local service providers are reliable and verified.",
  },
  {
    icon: Users,
    title: "Limited Income Opportunities",
    description:
      "Many women and homemakers want to earn but don't have a platform to showcase their services.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Dependency",
    description:
      "Most service discovery happens through scattered WhatsApp groups, making it difficult to find the right provider.",
  },
];

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/40 to-white py-24">
      {/* Background Blur */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            <AlertTriangle size={16} />
            The Problem
          </div>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
              Talent Exists.
            <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Discovery Doesn't.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every society is full of talented people. Unfortunately, most
            residents never discover them, causing opportunities, trust,
            and income to be lost every single day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-7 backdrop-blur-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl"
              >
                {/* Hover Top Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>

                {/* Background Decoration */}
                <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-orange-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: .3,
          }}
          className="mt-20"
        >
          {/* <div className="rounded-3xl border border-orange-100 bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-10 text-center text-white shadow-xl">
            <h3 className="text-2xl font-bold md:text-3xl">
              SocietyHub Solves These Problems.
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-orange-50">
              We help residents discover trusted local service providers while
              empowering talented people to earn from their skills—all within
              one verified community.
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}