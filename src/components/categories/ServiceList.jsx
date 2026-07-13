"use client";

import ServiceCard from "./ServiceCard";
import EmptyState from "./EmptyState";

export default function ServiceList({
  services = [],
  selectedService,
  setSelectedService,
}) {
  if (services.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="sticky top-0 z-20">
        <h2 className="text-3xl font-bold">
          Services
        </h2>

        <p className="mt-1 text-slate-500">
          {services.length} providers found
        </p>
      </div>

      {/* Cards */}
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          active={selectedService?.id === service.id}
          onClick={() => setSelectedService(service)}
        />
      ))}
    </div>
  );
}