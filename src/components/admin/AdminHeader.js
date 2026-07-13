"use client";

import { Bell, Search } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function AdminHeader() {
  const { user } = useAuth();

  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}

      <div>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back,
          <span className="text-orange-500">
            {" "}
            {user?.displayName || "Admin"}
          </span>{" "}
          👋
        </h1>

        <p className="mt-2 text-gray-500">
          Here's what's happening on SocietyHub today.
        </p>
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <div className="hidden items-center rounded-xl border bg-white px-4 py-3 shadow-sm md:flex">
          <Search
            size={18}
            className="mr-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-56 border-none bg-transparent text-sm outline-none"
          />
        </div>

        {/* Notification */}

        <button className="relative rounded-xl border bg-white p-3 shadow-sm transition hover:bg-gray-50">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border bg-white px-4 py-2 shadow-sm">
          <img
            src={
              user?.photoURL ||
              "https://ui-avatars.com/api/?name=Admin&background=F97316&color=fff"
            }
            alt="Admin"
            className="h-11 w-11 rounded-full"
          />

          <div>
            <h3 className="font-semibold">
              {user?.displayName || "Admin"}
            </h3>

            <p className="text-xs text-gray-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}