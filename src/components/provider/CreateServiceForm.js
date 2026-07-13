"use client";

import { useState } from "react";

import BasicDetails from "./BasicDetails";
import PricingDetails from "./PricingDetails";
import ContactDetails from "./ContactDetails";
import AvailabilitySection from "./AvailabilitySection";
import ImageUpload from "./ImageUpload";

export default function CreateServiceForm({
  user,
  onSubmit,
  loading = false,
}) {
  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    // Basic Details
    title: "",
    category: "",
    description: "",

    // Pricing
    price: "",
    priceType: "fixed",
    experience: "",

    homeService: false,
    onlineService: false,

    // Contact
    whatsapp: "",
    phone: "",
    society: "",
    wing: "",
    flat: "",
    address: "",

    // Availability
    availableDays: [],
    startTime: "",
    endTime: "",
    serviceRadius: "Within Society",

    emergencyService: false,
    weekendAvailable: false,
  });

  const validateForm = () => {
    if (!formData.title.trim()) {
      alert("Please enter service title.");
      return false;
    }

    if (!formData.category) {
      alert("Please select a category.");
      return false;
    }

    if (!formData.description.trim()) {
      alert("Please enter service description.");
      return false;
    }

    if (!formData.price) {
      alert("Please enter starting price.");
      return false;
    }

    if (!formData.whatsapp.trim()) {
      alert("Please enter WhatsApp number.");
      return false;
    }

    if (!formData.society.trim()) {
      alert("Please enter society name.");
      return false;
    }

    if (!image) {
      alert("Please upload a service image.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!validateForm()) return;

    await onSubmit({
      formData: {
        ...formData,

        title: formData.title.trim(),
        description: formData.description.trim(),
        whatsapp: formData.whatsapp.trim(),
        phone: formData.phone.trim(),
        society: formData.society.trim(),
        wing: formData.wing.trim(),
        flat: formData.flat.trim(),
        address: formData.address.trim(),
      },

      image,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-6xl space-y-8"
    >
      <BasicDetails
        formData={formData}
        setFormData={setFormData}
      />

      <PricingDetails
        formData={formData}
        setFormData={setFormData}
      />

      <ContactDetails
        user={user}
        formData={formData}
        setFormData={setFormData}
      />

      <AvailabilitySection
        formData={formData}
        setFormData={setFormData}
      />

      <ImageUpload
        image={image}
        setImage={setImage}
      />

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Ready to Submit?
            </h2>

            <p className="mt-1 text-gray-500">
              Your service will be reviewed by the admin before it becomes
              visible to residents.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit for Approval"}
          </button>
        </div>
      </div>
    </form>
  );
}