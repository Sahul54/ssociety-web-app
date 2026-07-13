"use client";

import Link from "next/link";
import { Eye, User, UserCheck, Shield } from "lucide-react";

export default function RecentUsers({
  users = [],
}) {
  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            Admin
          </span>
        );

      case "provider":
        return (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            Provider
          </span>
        );

      default:
        return (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            User
          </span>
        );
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <Shield size={18} />;

      case "provider":
        return <UserCheck size={18} />;

      default:
        return <User size={18} />;
    }
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Recent Users
          </h2>

          <p className="mt-2 text-gray-500">
            Latest registered users and providers.
          </p>
        </div>

        <Link
          href="/admin/users"
          className="text-sm font-medium text-orange-500 hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
        {users.length === 0 ? (
          <div className="p-12 text-center">
            <p className="text-gray-500">
              No users found.
            </p>
          </div>
        ) : (
          <div className="divide-y">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.uid}
                className="flex items-center justify-between p-5 transition hover:bg-gray-50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={
                      user.photoURL ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user.name || "User"
                      )}&background=F97316&color=fff`
                    }
                    alt={user.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold">
                      {user.name || "Unknown"}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      {getRoleIcon(user.role)}
                      {getRoleBadge(user.role)}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/admin/users/${user.uid}`}
                  className="rounded-xl border p-3 transition hover:bg-orange-50"
                >
                  <Eye size={18} />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}