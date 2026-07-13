"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import categories, { iconMap } from "@/data/categories";

import Sidebar from "@/components/categories/Sidebar";
import ServiceList from "@/components/categories/ServiceList";
import ServiceDetail from "@/components/categories/ServiceDetail";
import MobileFilter from "@/components/categories/MobileFilter";

export default function CategoryClient({
  slug,
  services,
}) {
  const [selectedService, setSelectedService] =
    useState(null);

  const [filters, setFilters] =
    useState({
      search: "",
      verified: false,
      availableToday: false,
      minRating: 0,
      maxPrice: 5000,
    });

  useEffect(() => {
    if (services.length > 0) {
      setSelectedService(services[0]);
    }
  }, [services]);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const title = (
        service.title || ""
      ).toLowerCase();

      if (
        filters.search &&
        !title.includes(
          filters.search.toLowerCase()
        )
      ) {
        return false;
      }

      if (
        filters.verified &&
        !service.verified
      ) {
        return false;
      }

      if (
        filters.availableToday &&
        !service.availableToday
      ) {
        return false;
      }

      if (
        (service.rating || 0) <
        filters.minRating
      ) {
        return false;
      }

      if (
        Number(service.price || 0) >
        filters.maxPrice
      ) {
        return false;
      }

      return true;
    });
  }, [services, filters]);

  useEffect(() => {
    if (
      filteredServices.length === 0
    ) {
      setSelectedService(null);
      return;
    }

    if (
      !selectedService ||
      !filteredServices.some(
        (item) =>
          item.id ===
          selectedService.id
      )
    ) {
      setSelectedService(
        filteredServices[0]
      );
    }
  }, [
    filteredServices,
    selectedService,
  ]);

  const category = categories.find(
    (item) => item.value === slug
  );

  if (!category) {
    return null;
  }

  const Icon =
    iconMap[category.icon];
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Hero */}
      <section className="border-b bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-6">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
              {Icon && (
                <Icon
                  size={26}
                  className="text-white"
                />
              )}
            </div>

            <div className="text-white">
              <h3 className="text-2xl font-bold">
                {category.label}
              </h3>

              <p className="text-white/90">
                {filteredServices.length} Provider
                {filteredServices.length !== 1 ? "s" : ""} Available
              </p>
            </div>
          </div>

          {/* Right */}
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-white transition"
          >
            <ArrowLeft size={18} />
            Back to Categories
          </Link>
        </div>
      </section>

      {/* Mobile Filter */}
      <MobileFilter
        filters={filters}
        setFilters={setFilters}
      />

      {/* Desktop Layout */}
      <section className="mx-auto flex max-w-[1800px]">
        {/* Sidebar */}
        <Sidebar
          categories={categories}
          activeCategory={category.value}
          filters={filters}
          setFilters={setFilters}
        />

        {/* Service List */}
        <div className="min-h-screen flex-1 bg-slate-50">
          <div className="p-6">
            <ServiceList
              services={filteredServices}
              selectedService={selectedService}
              setSelectedService={
                setSelectedService
              }
            />
          </div>
        </div>

        {/* Service Detail */}
        <ServiceDetail
          service={selectedService}
        />
      </section>
    </main>
  );
}