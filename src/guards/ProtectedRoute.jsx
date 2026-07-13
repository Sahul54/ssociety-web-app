"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProtectedRoute({
  children,
}) {
  const router = useRouter();

  const {
    loading,
    isLoggedIn,
  } = useAuth();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [
    loading,
    isLoggedIn,
    router,
  ]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isLoggedIn) return null;

  return children;
}