"use client";

import Image from "next/image";
import {
  BadgeCheck,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Clock,
  IndianRupee,
  User,
} from "lucide-react";

export default function ServiceDetail({ service }) {
  if (!service) {
    return (
      <aside className="hidden xl:flex w-[430px] border-l bg-gradient-to-b from-orange-50 to-white items-center justify-center">
        <div className="text-center px-8">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 shadow-sm">
            <MapPin className="text-orange-500" size={36} />
          </div>

          <h2 className="text-2xl font-bold text-slate-900">
            Select a Service
          </h2>

          <p className="mt-3 text-slate-500 leading-7">
            Choose any provider from the left to view complete details,
            pricing, features and contact information.
          </p>
        </div>
      </aside>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi ${service.providerName || ""},

I'm interested in your *${service.title}* service.

Can you please share:
• Price details
• Availability
• Time required

Thank you!`
  );

  return (
    <aside className="hidden xl:block w-[430px] border-l bg-slate-50">
      <div className="sticky top-0 h-screen overflow-y-auto">

        {/* Hero Image */}

        <div className="relative h-72 overflow-hidden">

          <Image
            src={
              service.imageUrl ||
              "/images/service-placeholder.jpg"
            }
            alt={service.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">

            <div className="mb-3 flex items-center gap-2">

              <span className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                Professional Service
              </span>

              {service.verified && (
                <BadgeCheck
                  size={20}
                  className="text-green-400"
                />
              )}

            </div>

            <h1 className="text-3xl font-bold leading-tight">
              {service.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-white/90">

              <MapPin size={16} />

              <span className="text-sm">
                {service.address}
              </span>

            </div>

          </div>

        </div>

        <div className="space-y-5 p-6">

          {/* Provider */}

          <div className="rounded-3xl bg-white p-5 shadow-sm border">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">

                <User
                  className="text-orange-500"
                  size={26}
                />

              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  {service.providerName || "Verified Provider"}
                </h3>

                <p className="text-sm text-slate-500">
                  Trusted Local Professional
                </p>

              </div>

            </div>

          </div>

          {/* Rating Card */}

          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-3xl bg-white border p-5 shadow-sm">

              <div className="flex items-center gap-2">

                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />

                <span className="font-semibold">
                  Rating
                </span>

              </div>

              <h2 className="mt-3 text-3xl font-bold">
                {service.rating || "4.8"}
              </h2>

              <p className="text-sm text-slate-500">
                Customer Rating
              </p>
            </div>

            <div className="rounded-3xl bg-white border p-5 shadow-sm">

              <div className="flex items-center gap-2">

                <Clock
                  size={18}
                  className="text-orange-500"
                />

                <span className="font-semibold">
                  Status
                </span>

              </div>

              <div className="mt-4">

                {service.availableToday ? (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    Available Today
                  </span>
                ) : (
                  <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
                    Busy
                  </span>
                )}

              </div>

            </div>

          </div>

          {/* Price */}

          <div className="rounded-3xl bg-gradient-to-r from-orange-500 to-orange-400 p-6 text-white shadow-lg">

            <p className="text-orange-100">
              Starting Price
            </p>

            <div className="mt-2 flex items-center gap-1">

              <IndianRupee size={28} />

              <span className="text-4xl font-bold">
                {service.price}
              </span>

            </div>

            <p className="mt-2 text-sm text-orange-100">
              Final price may vary depending on service requirements.
            </p>

          </div>

          {/* About */}

          <div className="rounded-3xl border bg-white p-6 shadow-sm">

            <h3 className="mb-3 text-xl font-bold">
              About Service
            </h3>

            <p className="leading-7 text-slate-600">
              {service.description}
            </p>

          </div>
                    {/* Features */}

          {service.features?.length > 0 && (
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">
                Features
              </h3>

              <div className="flex flex-wrap gap-3">
                {service.features.map((feature, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sticky Bottom CTA */}

        <div className="sticky bottom-0 border-t bg-white p-5 shadow-[0_-6px_20px_rgba(0,0,0,0.08)]">

          <div className="flex gap-3">

            <a
              href={`tel:${service.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-orange-500 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href={`https://wa.me/91${service.phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-green-500 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

        </div>

      </div>
    </aside>
  );
}