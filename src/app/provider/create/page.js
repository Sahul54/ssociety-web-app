"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/hooks/useAuth";

import CreateServiceForm from "@/components/provider/CreateServiceForm";

import { createService } from "@/services/service.service";
import { uploadServiceImage } from "@/services/storage.service";

export default function CreateServicePage() {
  const router = useRouter();
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleCreateService = async ({
    formData,
    image,
  }) => {
    try {
      setLoading(true);

      let imageUrl = "";

      // Upload image to Firebase Storage
      if (image) {
        const uploadResult =
          await uploadServiceImage(
            image,
            user.uid
          );

        if (!uploadResult.success) {
          throw new Error(
            uploadResult.error
          );
        }

        imageUrl =
          uploadResult.imageUrl;
      }

      // Save service in Firestore
      const result =
        await createService({
          providerId: user.uid,
          providerName:
            user.displayName || "",
          providerEmail:
            user.email || "",

          ...formData,

          imageUrl,
        });

      if (!result.success) {
        throw new Error(
          result.error ||
            "Failed to create service."
        );
      }

      alert(
        "🎉 Service submitted successfully.\n\nYour service is pending admin approval."
      );

      router.push("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.message ||
          "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        Please login first.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Create New Service
          </h1>

          <p className="mt-2 text-gray-500">
            Add your service and start
            connecting with residents in
            your society.
          </p>
        </div>

        <CreateServiceForm
          user={user}
          loading={loading}
          onSubmit={handleCreateService}
        />
      </div>
    </section>
  );
}