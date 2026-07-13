"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Search,
  HeartHandshake,
  CalendarCheck,
  MapPin,
} from "lucide-react";

const features = [
  {
    title: "Verified Society Members",
    description:
      "Connect with verified residents from your own society and nearby communities.",
    icon: ShieldCheck,
  },
  {
    title: "Trusted Local Services",
    description:
      "Discover reliable service providers recommended within your community.",
    icon: Users,
  },
  {
    title: "Safe Community Network",
    description:
      "Build trust through society verification and community-driven reviews.",
    icon: HeartHandshake,
  },
  {
    title: "Women Empowerment",
    description:
      "Help homemakers and women entrepreneurs turn skills into income.",
    icon: Users,
  },
  {
    title: "Easy Booking",
    description:
      "Connect with providers instantly through phone, WhatsApp, or booking requests.",
    icon: CalendarCheck,
  },
  {
    title: "Hyperlocal Discovery",
    description:
      "Find tutors, chefs, tailors, trainers, and more right inside your community.",
    icon: MapPin,
  },
];

export default function WhySocietyHub() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Why SocietyHub
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Built For
            <span className="block text-orange-500">
              Modern Communities
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            SocietyHub helps residents discover trusted services
            while creating income opportunities for talented people
            living nearby.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl bg-orange-500 p-8 text-center text-white md:p-12"
        >
          <Search className="mx-auto mb-4" size={40} />

          <h3 className="text-2xl font-bold md:text-3xl">
            Discover Trusted Services Around You
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-orange-100">
            From home chefs and tutors to tailors and yoga trainers,
            SocietyHub helps communities grow together through trust,
            opportunity, and local connections.
          </p>
        </motion.div>
      </div>
    </section>
  );
}