"use client";

import Link from "next/link";

export default function DashboardHeader({
  title,
  subtitle,
  userName,
  buttonText,
  buttonLink,
}) {
  return (
    <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        {userName && (
          <p className="mb-2 text-sm font-medium text-orange-600">
            Welcome back, {userName} 👋
          </p>
        )}

        <h1 className="text-3xl font-bold">{title}</h1>

        {subtitle && (
          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {buttonText && buttonLink && (
        <Link
          href={buttonLink}
          className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}