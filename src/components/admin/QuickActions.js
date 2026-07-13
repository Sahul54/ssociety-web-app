"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Briefcase,
  UserCheck,
  Users,
  Star,
  Settings,
} from "lucide-react";

const actions = [
  {
    title: "Pending Services",
    description: "Review newly submitted services waiting for approval.",
    href: "/admin/services/pending",
    icon: Clock3,
    bg: "bg-yellow-100",
    color: "text-yellow-600",
  },
  {
    title: "Manage Services",
    description: "View, edit and delete all listed services.",
    href: "/admin/services",
    icon: Briefcase,
    bg: "bg-orange-100",
    color: "text-orange-600",
  },
  {
    title: "Providers",
    description: "Manage all registered service providers.",
    href: "/admin/providers",
    icon: UserCheck,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Users",
    description: "Manage all registered users.",
    href: "/admin/users",
    icon: Users,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Reviews",
    description: "View user reviews and ratings.",
    href: "/admin/reviews",
    icon: Star,
    bg: "bg-green-100",
    color: "text-green-600",
  },
  {
    title: "Settings",
    description: "Manage application settings.",
    href: "/admin/settings",
    icon: Settings,
    bg: "bg-gray-100",
    color: "text-gray-700",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Quick Actions
        </h2>

        <p className="mt-2 text-gray-500">
          Quickly access important admin modules.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`rounded-2xl p-4 ${action.bg}`}
                >
                  <Icon
                    className={action.color}
                    size={28}
                  />
                </div>

                <ArrowRight
                  size={20}
                  className="text-gray-400 transition-transform duration-300 group-hover:translate-x-2"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {action.description}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}