"use client";

import { useAuth } from "@/hooks/useAuth";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import MyServices from "./MyServices";

export default function ProviderDashboard({ services = [] }) {
const { user } = useAuth();
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mx-auto max-w-7xl p-6">
      <DashboardHeader
        title="My Services"
        subtitle="Manage your service listings"
        userName={user?.displayName}
        buttonText="+ Create Service"
        buttonLink="/provider/create"
      />

      <DashboardStats services={services} />

      <MyServices services={services} />
    </div>
    </div>
  );
}