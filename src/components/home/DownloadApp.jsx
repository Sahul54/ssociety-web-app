"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Briefcase } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 p-8 text-white shadow-2xl md:p-16"
        >
          {/* Background Blur */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Join SocietyHub Today
            </span>

            <h2 className="mt-6 text-4xl font-bold md:text-6xl">
              Start Earning From
              <span className="block">
                Your Skills Today
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-orange-100">
              Whether you're a home chef, tutor, tailor,
              makeup artist, yoga trainer, or entrepreneur,
              SocietyHub helps you connect with customers
              in your own community.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-orange-600 transition hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Link>

              <Link
                href="/providers/create"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                <Briefcase className="mr-2 h-5 w-5" />
                Become a Service Provider
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-6 border-t border-white/20 pt-10 md:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-orange-100">
                  Service Providers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-orange-100">
                  Local Services
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">4.9★</h3>
                <p className="text-orange-100">
                  Community Rating
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}