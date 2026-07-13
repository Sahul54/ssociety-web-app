"use client";

export default function ServiceStatusBadge({ status }) {
  const statusStyles = {
    pending: {
      label: "Pending",
      className: "bg-yellow-100 text-yellow-800",
    },
    approved: {
      label: "Approved",
      className: "bg-green-100 text-green-800",
    },
    rejected: {
      label: "Rejected",
      className: "bg-red-100 text-red-800",
    },
  };

  const current =
    statusStyles[status] || {
      label: "Unknown",
      className: "bg-gray-100 text-gray-700",
    };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${current.className}`}
    >
      {current.label}
    </span>
  );
}