"use client";

import Link from "next/link";
import {
  Clock3,
  CheckCircle2,
  XCircle,
  UserPlus,
  Briefcase,
  ArrowRight,
} from "lucide-react";

export default function RecentActivity({
  activities = [],
}) {
  const getIcon = (type) => {
    switch (type) {
      case "service_created":
        return (
          <div className="rounded-full bg-yellow-100 p-2 text-yellow-600">
            <Briefcase size={18} />
          </div>
        );

      case "service_approved":
        return (
          <div className="rounded-full bg-green-100 p-2 text-green-600">
            <CheckCircle2 size={18} />
          </div>
        );

      case "service_rejected":
        return (
          <div className="rounded-full bg-red-100 p-2 text-red-600">
            <XCircle size={18} />
          </div>
        );

      default:
        return (
          <div className="rounded-full bg-blue-100 p-2 text-blue-600">
            <UserPlus size={18} />
          </div>
        );
    }
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <p className="mt-2 text-gray-500">
            Latest updates across SocietyHub.
          </p>
        </div>

        <Link
          href="/admin/activity"
          className="flex items-center gap-2 text-orange-500 hover:underline"
        >
          View All
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="rounded-3xl border bg-white shadow-sm">
        {activities.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            No recent activity found.
          </div>
        ) : (
          <div className="divide-y">
            {activities.slice(0, 6).map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-5 hover:bg-gray-50"
              >
                {getIcon(activity.type)}

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {activity.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {activity.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                    <Clock3 size={14} />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}