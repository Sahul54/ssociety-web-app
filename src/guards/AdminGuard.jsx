"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AdminGuard({
  children,
}) {
  const router = useRouter();

  const {
    loading,
    isAdmin,
  } = useAuth();

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.replace("/");
    }
  }, [
    loading,
    isAdmin,
    router,
  ]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isAdmin) return null;

  return children;
}