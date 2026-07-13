"use client";

import { useEffect, useState } from "react";

import {
  approveService,
  rejectService,
  getPendingServices,
} from "@/services/service.service";

export default function PendingServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPendingServices();
  }, []);

  const loadPendingServices = async () => {
    setLoading(true);

    const result = await getPendingServices();

    if (result.success) {
      setServices(result.services);
    }

    setLoading(false);
  };

  const handleApprove = async (id) => {
    const confirmApprove = window.confirm(
      "Approve this service?"
    );

    if (!confirmApprove) return;

    const result = await approveService(id);

    if (result.success) {
      alert("Service Approved ✅");
      loadPendingServices();
    }
  };

  const handleReject = async (id) => {
    const confirmReject = window.confirm(
      "Reject this service?"
    );

    if (!confirmReject) return;

    const result = await rejectService(id);

    if (result.success) {
      alert("Service Rejected ❌");
      loadPendingServices();
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">
            Pending Services
          </h1>

          <p className="mt-2 text-gray-500">
            Review and approve provider services.
          </p>
        </div>

        {services.length === 0 ? (
          <div className="rounded-2xl border bg-white p-10 text-center">
            <h2 className="text-2xl font-semibold">
              🎉 No Pending Services
            </h2>

            <p className="mt-2 text-gray-500">
              All submitted services have been reviewed.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm"
              >
                <img
                  src={
                    service.imageUrl ||
                    "/images/service-placeholder.jpg"
                  }
                  alt={service.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
                      Pending
                    </span>

                    <span className="text-sm text-gray-500">
                      ₹ {service.price}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold">
                    {service.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    {service.category}
                  </p>

                  <p className="mt-3 line-clamp-3 text-sm text-gray-600">
                    {service.description}
                  </p>

                  <div className="mt-5 border-t pt-4">
                    <p className="text-sm">
                      <span className="font-semibold">
                        Provider:
                      </span>{" "}
                      {service.providerName}
                    </p>

                    <p className="text-sm">
                      <span className="font-semibold">
                        WhatsApp:
                      </span>{" "}
                      {service.whatsapp}
                    </p>

                    <p className="text-sm">
                      <span className="font-semibold">
                        Society:
                      </span>{" "}
                      {service.society}
                    </p>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() =>
                        handleApprove(service.id)
                      }
                      className="flex-1 rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
                    >
                      Approve
                    </button>

                    <button
                      onClick={() =>
                        handleReject(service.id)
                      }
                      className="flex-1 rounded-xl bg-red-600 py-3 font-medium text-white transition hover:bg-red-700"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}