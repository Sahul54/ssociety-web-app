"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Home Chef",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    review:
      "SocietyHub helped me turn my cooking passion into a steady source of income. Now I receive regular orders from residents nearby.",
  },
  {
    name: "Anjali Verma",
    role: "Tuition Teacher",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    review:
      "Finding students used to be difficult. Through SocietyHub, parents from my society can easily discover and contact me.",
  },
  {
    name: "Neha Gupta",
    role: "Mehendi Artist",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    review:
      "I started getting bookings for weddings and festivals from nearby communities. It's a great platform for local talent.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
            Loved By
            <span className="block text-orange-500">
              Local Entrepreneurs
            </span>
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            See how SocietyHub is helping people earn from
            their skills and grow within their communities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-6 text-gray-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-gray-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}