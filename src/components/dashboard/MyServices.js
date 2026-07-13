"use client";

import Link from "next/link";
import ServiceStatusBadge from "./ServiceStatusBadge";

export default function MyServices({ services = [] }) {
  if (services.length === 0) {
    return (
      <div className="rounded-2xl border bg-white p-10 text-center shadow-sm">
        <h2 className="text-2xl font-semibold">
          No Services Yet
        </h2>

        <p className="mt-3 text-gray-500">
          Create your first service and start getting customers.
        </p>

        <Link
          href="/provider/create"
          className="mt-6 inline-block rounded-xl bg-orange-500 px-5 py-3 text-white transition hover:bg-orange-600"
        >
          Create Service
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => (
        <div
          key={service.id}
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg"
        >
          {/* Category */}
          <p className="text-sm text-orange-500 font-medium">
            {service.category}
          </p>

          {/* Title */}
          <h2 className="mt-2 text-xl font-semibold">
            {service.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-gray-500">
            {service.description}
          </p>

          {/* Price */}
          <p className="mt-4 text-lg font-bold">
            ₹ {service.price}
          </p>

          {/* Status */}
          <div className="mt-5">
            <ServiceStatusBadge status={service.status} />
          </div>

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <Link
              href={`/provider/edit/${service.id}`}
              className="flex-1 rounded-xl border px-4 py-2 text-center font-medium transition hover:bg-gray-100"
            >
              Edit
            </Link>

            <Link
              href={`/services/${service.id}`}
              className="flex-1 rounded-xl bg-orange-500 px-4 py-2 text-center font-medium text-white transition hover:bg-orange-600"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}