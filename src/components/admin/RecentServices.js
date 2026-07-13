"use client";

import Link from "next/link";
import {
  Eye,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function RecentServices({
  services = [],
}) {
  const getStatusBadge = (status) => {
    switch (status) {
      case "approved":
        return (
          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            <CheckCircle2
              size={14}
              className="mr-1"
            />
            Approved
          </span>
        );

      case "rejected":
        return (
          <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            <XCircle
              size={14}
              className="mr-1"
            />
            Rejected
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            <Clock3
              size={14}
              className="mr-1"
            />
            Pending
          </span>
        );
    }
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Services
          </h2>

          <p className="mt-2 text-gray-500">
            Latest services submitted by providers.
          </p>
        </div>

        <Link
          href="/admin/services"
          className="text-sm font-medium text-orange-500 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        {services.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500">
              No services available.
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {services.slice(0, 5).map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-5 transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      service.imageUrl ||
                      "/images/service-placeholder.jpg"
                    }
                    alt={service.title}
                    className="h-16 w-16 rounded-xl object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {service.providerName ||
                        "Unknown Provider"}
                    </p>

                    <p className="text-sm text-gray-400">
                      {service.society}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  {getStatusBadge(
                    service.status
                  )}

                  <Link
                    href={`/admin/services/${service.id}`}
                    className="rounded-xl border p-3 transition hover:bg-orange-50"
                  >
                    <Eye size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}