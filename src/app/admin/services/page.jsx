"use client";

import { useEffect, useState } from "react";

import {
  deleteService,
  getAllServices,
} from "@/services/service.service";

export default function AdminServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setLoading(true);

    const result = await getAllServices();

    if (result.success) {
      setServices(result.services);
    }

    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this service?"
    );

    if (!confirmDelete) return;

    const result = await deleteService(id);

    if (result.success) {
      alert("Service deleted.");
      loadServices();
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
            All Services
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all provider services.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border bg-white">

          <table className="w-full">

            <thead className="bg-gray-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Service
                </th>

                <th className="text-left">
                  Category
                </th>

                <th className="text-left">
                  Provider
                </th>

                <th className="text-left">
                  Price
                </th>

                <th className="text-left">
                  Status
                </th>

                <th className="text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {services.map((service) => (

                <tr
                  key={service.id}
                  className="border-t"
                >

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-4">

                      <img
                        src={
                          service.imageUrl ||
                          "/images/service-placeholder.jpg"
                        }
                        className="h-14 w-14 rounded-lg object-cover"
                        alt=""
                      />

                      <div>

                        <p className="font-semibold">
                          {service.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          {service.society}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td>{service.category}</td>

                  <td>{service.providerName}</td>

                  <td>₹ {service.price}</td>

                  <td>

                    <span
                      className={`rounded-full px-3 py-1 text-xs

                        ${
                          service.status === "approved"
                            ? "bg-green-100 text-green-700"

                            : service.status === "pending"

                            ? "bg-yellow-100 text-yellow-700"

                            : "bg-red-100 text-red-700"
                        }

                      `}
                    >
                      {service.status}
                    </span>

                  </td>

                  <td className="text-center">

                    <button
                      onClick={() =>
                        handleDelete(service.id)
                      }
                      className="rounded-lg bg-red-500 px-4 py-2 text-white"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}