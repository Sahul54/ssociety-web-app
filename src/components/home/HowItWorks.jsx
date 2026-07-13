"use client";

import { motion } from "framer-motion";
import {
  UserPlus,
  ShieldCheck,
  CalendarCheck,
  Wallet,
} from "lucide-react";

const steps = [
  {
    title: "Create Account",
    description:
      "Sign up with your phone number and join your local community marketplace.",
    icon: UserPlus,
  },
  {
    title: "Verify Society & Create Profile",
    description:
      "Select your society, verify your profile, and add your services, pricing, photos, and availability.",
    icon: ShieldCheck,
  },
  {
    title: "Receive Enquiries",
    description:
      "Residents discover your profile and connect with you directly for your services.",
    icon: CalendarCheck,
  },
  {
    title: "Start Earning",
    description:
      "Build your reputation inside your society and turn your skills into a reliable source of income.",
    icon: Wallet,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100/40 blur-3xl" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            🚀 How It Works
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900 md:text-5xl">
              Start Your Journey
            <span className="block text-orange-500">
              In Just 4 Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            SocietyHub makes it simple for residents and service providers to
            connect, grow their network, and earn within their trusted
            community.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-orange-100 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-14">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                  className={`relative flex items-start lg:items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Number */}
                  <div className="absolute left-0 z-20 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-orange-500 to-orange-400 text-base font-bold text-white shadow-xl">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-20 w-full lg:ml-0 lg:w-5/12 ${
                      index % 2 === 0
                        ? "lg:pr-16"
                        : "lg:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}
                      transition={{ duration: 0.25 }}
                      className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:border-orange-200 hover:shadow-2xl"
                    >
                      <div className="mb-6 flex items-center gap-5">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                          <Icon size={30} />
                        </div>

                        <div>
                          <span className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                            Step {index + 1}
                          </span>

                          <h3 className="mt-1 text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-base leading-8 text-gray-600">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block lg:w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}