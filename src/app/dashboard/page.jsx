"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";
import { getProviderServices } from "@/services/service.service";

import UserDashboard from "@/components/dashboard/UserDashboard";
import ProviderDashboard from "@/components/dashboard/ProviderDashboard";

export default function DashboardPage() {
  const router = useRouter();

  const { user, role, loading } = useAuth();

  const [services, setServices] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (loading) return;

    // Redirect admin to admin panel
    if (role === "admin") {
      router.replace("/admin");
      return;
    }

    // User dashboard doesn't need provider services
    if (role === "user") {
      setPageLoading(false);
      return;
    }

    // Provider dashboard
    if (role === "provider" && user) {
      loadServices();
      return;
    }

    setPageLoading(false);
  }, [loading, role, user]);

  const loadServices = async () => {
    try {
      const result = await getProviderServices(user.uid);

      if (result.success) {
        setServices(result.services);
      }
    } catch (error) {
      console.error("Load Services Error:", error);
    } finally {
      setPageLoading(false);
    }
  };

  if (loading || pageLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg font-medium">
          Loading...
        </div>
      </div>
    );
  }

  // User Dashboard
  if (role === "user") {
    return <UserDashboard />;
  }

  // Provider Dashboard
  if (role === "provider") {
    return (
      <ProviderDashboard
        services={services}
      />
    );
  }

  // While redirecting admin
  if (role === "admin") {
    return null;
  }

  // Unknown Role
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="rounded-xl border bg-white p-8 text-center shadow">
        <h2 className="text-2xl font-bold text-red-600">
          Unauthorized Access
        </h2>

        <p className="mt-2 text-gray-500">
          You don't have permission to access this page.
        </p>
      </div>
    </div>
  );
}