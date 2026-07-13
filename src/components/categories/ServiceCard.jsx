"use client";

import Image from "next/image";
import {
  MapPin,
  Star,
  Phone,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

export default function ServiceCard({
  service,
  active,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-3xl border bg-white p-4 ${
        active
          ? "border-orange-500 shadow-lg ring-2 ring-orange-100"
          : "border-slate-200"
      }`}
    >
      <div className="flex gap-4">
        {/* Image */}

        <div className="relative h-28 w-28 overflow-hidden rounded-2xl flex-shrink-0">
          <Image
            src={
              service.imageUrl ||
              "/images/service-placeholder.jpg"
            }
            alt={service.title}
            fill
            className="object-cover transition duration-500"
          />

          {service.verified && (
            <div className="absolute left-2 top-2 rounded-full bg-green-500 p-1 text-white">
              <BadgeCheck size={14} />
            </div>
          )}
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col">

          {/* Title */}

          <div className="flex items-start justify-between">
            <div>
              <h2 className="line-clamp-1 text-lg font-bold">
                {service.title}
              </h2>

              <p className="mt-1 line-clamp-2 text-sm text-slate-500">
                {service.description}
              </p>
            </div>

            <ArrowRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-orange-500"
            />
          </div>

          {/* Society */}

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <MapPin
              size={16}
              className="text-orange-500"
            />

            <span className="line-clamp-1">
              {service.address}
            </span>
          </div>

          {/* Rating */}

          <div className="mt-3 flex items-center gap-4">

            <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1">
              <Star
                size={14}
                className="fill-yellow-500 text-yellow-500"
              />

              <span className="text-sm font-semibold">
                {service.rating || 0}
              </span>
            </div>

            {service.distance && (
              <span className="text-sm text-slate-500">
                {service.distance} km away
              </span>
            )}
          </div>

          {/* Bottom */}

          <div className="mt-auto flex items-center justify-between pt-5">

            <div>
              <p className="text-xs text-slate-400">
                Starting From
              </p>

              <h3 className="text-2xl font-bold text-orange-500">
                ₹{service.price}
              </h3>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(
                  `tel:${service.phone}`
                );
              }}
              className="flex items-center gap-2 rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              <Phone size={16} />

              Call
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}