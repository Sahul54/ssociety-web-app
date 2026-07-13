"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function ProviderGuard({
  children,
}) {
  const router = useRouter();

  const {
    loading,
    isProvider,
  } = useAuth();

  useEffect(() => {
    if (!loading && !isProvider) {
      router.replace("/");
    }
  }, [
    loading,
    isProvider,
    router,
  ]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!isProvider) return null;

  return children;
}