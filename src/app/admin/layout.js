"use client";

import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}

      <AdminSidebar />

      {/* Main Content */}

      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-7xl p-8">
          {children}
        </div>
      </main>
    </div>
  );
}