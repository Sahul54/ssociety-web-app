"use client";

import Link from "next/link";

export default function UserDashboard() {
  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="rounded-2xl border bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">
          Welcome 👋
        </h1>

        <p className="mt-3 text-gray-600">
          Discover trusted local services in your society.
        </p>

        <div className="mt-8">
          <Link
            href="/services"
            className="inline-flex items-center rounded-xl bg-orange-500 px-6 py-3 font-medium text-white transition hover:bg-orange-600"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}