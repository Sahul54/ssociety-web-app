"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  UserCheck,
} from "lucide-react";

import {
  getProviderById,
  getProviderServices,
} from "@/services/user.service";

export default function ProviderDetailsPage() {
  const params = useParams();
  const id = params?.id;

  const [provider, setProvider] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const loadProvider = async () => {
      try {
        setLoading(true);

        const [providerRes, servicesRes] = await Promise.all([
          getProviderById(id),
          getProviderServices(id),
        ]);

        if (providerRes?.success) {
          setProvider(providerRes.provider);
        }

        if (servicesRes?.success) {
          setServices(servicesRes.services || []);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    loadProvider();
  }, [id]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-medium">
        Loading...
      </div>
    );
  }

  if (!provider) {
    return (
      <div className="flex h-screen items-center justify-center text-gray-500">
        Provider not found.
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Provider Profile */}

      <div className="rounded-3xl bg-white p-8 shadow">

        <div className="flex flex-col gap-6 lg:flex-row">

          <Image
            src={provider.photoURL || "/images/avatar.png"}
            alt={provider.name || "Provider"}
            width={120}
            height={120}
            className="h-[120px] w-[120px] rounded-full object-cover"
          />

          <div className="flex-1">

            <h1 className="text-3xl font-bold">
              {provider.name || "Unknown"}
            </h1>

            <p className="mt-2 capitalize text-gray-500">
              {provider.role}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>{provider.email || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>{provider.phone || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>{provider.society || "-"}</span>
              </div>

              <div className="flex items-center gap-3">
                <UserCheck size={18} />
                <span>{provider.role || "-"}</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Services */}

      <div>

        <h2 className="mb-6 text-2xl font-bold">
          Provider Services
        </h2>

        {services.length === 0 ? (
          <div className="rounded-2xl border bg-white p-8 text-center text-gray-500">
            No services found.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.id}
                className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-lg"
              >

                <Image
                  src={service.imageUrl || "/images/service-placeholder.png"}
                  alt={service.title || "Service"}
                  width={400}
                  height={250}
                  className="h-48 w-full rounded-xl object-cover"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {service.category}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-lg font-semibold">
                    ₹ {service.price || 0}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      service.status === "approved"
                        ? "bg-green-100 text-green-700"
                        : service.status === "pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {service.status || "Unknown"}
                  </span>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
}