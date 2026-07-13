"use client";

export default function DashboardStats({ services = [] }) {
  const total = services.length;

  const pending = services.filter(
    (service) => service.status === "pending"
  ).length;

  const approved = services.filter(
    (service) => service.status === "approved"
  ).length;

  const rejected = services.filter(
    (service) => service.status === "rejected"
  ).length;

  const stats = [
    {
      title: "Total Services",
      value: total,
      bg: "bg-white",
      text: "text-gray-900",
    },
    {
      title: "Pending",
      value: pending,
      bg: "bg-yellow-50",
      text: "text-yellow-700",
    },
    {
      title: "Approved",
      value: approved,
      bg: "bg-green-50",
      text: "text-green-700",
    },
    {
      title: "Rejected",
      value: rejected,
      bg: "bg-red-50",
      text: "text-red-700",
    },
  ];

  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className={`rounded-2xl border p-6 shadow-sm ${item.bg}`}
        >
          <p className={`text-sm font-medium ${item.text}`}>
            {item.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
}