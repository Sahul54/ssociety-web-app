"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {
  LayoutDashboard,
  Clock3,
  Briefcase,
  Users,
  UserCheck,
  Settings,
  LogOut,
} from "lucide-react";

import { auth } from "@/firebase/auth";

const menus = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Pending Services",
    href: "/admin/services/pending",
    icon: Clock3,
  },
  {
    title: "All Services",
    href: "/admin/services",
    icon: Briefcase,
  },
  {
    title: "Providers",
    href: "/admin/providers",
    icon: UserCheck,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    try {
      await signOut(auth);

      router.replace("/login");
    } catch (error) {
      console.error(error);
      alert("Logout failed.");
    }
  };

  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      {/* Logo */}

      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-orange-500">
          SocietyHub
        </h1>

        <p className="text-sm text-gray-500">
          Admin Panel
        </p>
      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2 p-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active = pathname === menu.href;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
              }`}
            >
              <Icon size={20} />
              <span>{menu.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}

      <div className="border-t p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl bg-red-50 px-4 py-3 font-medium text-red-600 transition hover:bg-red-100"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}