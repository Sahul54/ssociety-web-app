"use client";

import {
  Briefcase,
  Clock3,
  CheckCircle2,
  XCircle,
  UserCheck,
  Users,
  TrendingUp,
} from "lucide-react";

export default function AdminStats({
  totalServices = 0,
  pendingCount = 0,
  approvedCount = 0,
  rejectedCount = 0,
  totalProviders = 0,
  totalUsers = 0,
}) {
  const stats = [
    {
      title: "Total Services",
      value: totalServices,
      icon: Briefcase,
      color: "bg-orange-100 text-orange-600",
      border: "border-orange-200",
    },
    {
      title: "Pending Approval",
      value: pendingCount,
      icon: Clock3,
      color: "bg-yellow-100 text-yellow-600",
      border: "border-yellow-200",
    },
    {
      title: "Approved",
      value: approvedCount,
      icon: CheckCircle2,
      color: "bg-green-100 text-green-600",
      border: "border-green-200",
    },
    {
      title: "Rejected",
      value: rejectedCount,
      icon: XCircle,
      color: "bg-red-100 text-red-600",
      border: "border-red-200",
    },
    {
      title: "Providers",
      value: totalProviders,
      icon: UserCheck,
      color: "bg-blue-100 text-blue-600",
      border: "border-blue-200",
    },
    {
      title: "Users",
      value: totalUsers,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      border: "border-purple-200",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`group rounded-3xl border ${item.border} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-4xl font-bold text-gray-900">
                  {item.value}
                </h2>

                <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
                  <TrendingUp size={16} />
                  <span>Live Data</span>
                </div>
              </div>

              <div
                className={`rounded-2xl p-4 transition-transform duration-300 group-hover:scale-110 ${item.color}`}
              >
                <Icon size={30} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}