"use client";

import { useEffect, useState } from "react";

import AdminHeader from "@/components/admin/AdminHeader";
import AdminStats from "@/components/admin/AdminStats";
import QuickActions from "@/components/admin/QuickActions";
import RecentServices from "@/components/admin/RecentServices";
import RecentUsers from "@/components/admin/RecentUsers";
import RecentActivity from "@/components/admin/RecentActivity";

import {
  getAllServices,
} from "@/services/service.service";

import {
  getAllProviders,
  getAllUsers,
} from "@/services/user.service";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);

  const [stats, setStats] = useState({
    totalServices: 0,
    pendingCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
    totalProviders: 0,
    totalUsers: 0,
  });

  const [recentServices, setRecentServices] =
    useState([]);

  const [recentUsers, setRecentUsers] =
    useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const [
        servicesRes,
        usersRes,
        providersRes,
      ] = await Promise.all([
        getAllServices(),
        getAllUsers(),
        getAllProviders(),
      ]);

      const services = servicesRes.success
        ? servicesRes.services
        : [];

      const users = usersRes.success
        ? usersRes.users
        : [];

      const providers =
        providersRes.success
          ? providersRes.providers
          : [];

      setStats({
        totalServices: services.length,

        pendingCount: services.filter(
          (item) =>
            item.status === "pending"
        ).length,

        approvedCount: services.filter(
          (item) =>
            item.status === "approved"
        ).length,

        rejectedCount: services.filter(
          (item) =>
            item.status === "rejected"
        ).length,

        totalProviders:
          providers.length,

        totalUsers:
          users.length,
      });

      setRecentServices(
        [...services]
          .sort(
            (a, b) =>
              (b.createdAt?.seconds || 0) -
              (a.createdAt?.seconds || 0)
          )
          .slice(0, 5)
      );

      setRecentUsers(
        [...users]
          .sort(
            (a, b) =>
              (b.createdAt?.seconds || 0) -
              (a.createdAt?.seconds || 0)
          )
          .slice(0, 5)
      );
    } catch (error) {
      console.error(
        "Dashboard Error:",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const activities = [
    {
      id: 1,
      type: "service_created",
      title: "New Service Submitted",
      description:
        "A new provider submitted a service for approval.",
      time: "Just now",
    },
    {
      id: 2,
      type: "service_approved",
      title: "Service Approved",
      description:
        "One pending service was approved.",
      time: "15 minutes ago",
    },
    {
      id: 3,
      type: "user_registered",
      title: "New User Joined",
      description:
        "A new resident created an account.",
      time: "1 hour ago",
    },
  ];

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <div className="text-lg font-medium">
          Loading Dashboard...
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <AdminHeader />

      <AdminStats {...stats} />

      <QuickActions />

      <RecentServices
        services={recentServices}
      />

      <RecentUsers
        users={recentUsers}
      />

      <RecentActivity
        activities={activities}
      />
    </div>
  );
}