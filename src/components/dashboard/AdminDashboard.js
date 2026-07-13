"use client";

import DashboardHeader from "./DashboardHeader";
import Link from "next/link";

export default function AdminDashboard({
  pendingCount = 0,
  approvedCount = 0,
  rejectedCount = 0,
}) {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <DashboardHeader
        title="Admin Dashboard"
        subtitle="Manage services and monitor platform activity."
      />

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-yellow-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-yellow-700">
            Pending Services
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {pendingCount}
          </h2>
        </div>

        <div className="rounded-2xl border bg-green-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-green-700">
            Approved Services
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {approvedCount}
          </h2>
        </div>

        <div className="rounded-2xl border bg-red-50 p-6 shadow-sm">
          <p className="text-sm font-medium text-red-700">
            Rejected Services
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            {rejectedCount}
          </h2>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/admin/services/pending"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">
              Review Pending Services
            </h3>

            <p className="mt-2 text-gray-500">
              Approve or reject newly submitted services.
            </p>
          </Link>

          <Link
            href="/services"
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h3 className="text-xl font-semibold">
              View All Services
            </h3>

            <p className="mt-2 text-gray-500">
              Browse all services available on the platform.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}