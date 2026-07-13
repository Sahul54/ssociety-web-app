"use client";

import categories from "@/data/categories";

export default function BasicDetails({
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const selectCategory = (category) => {
    setFormData((prev) => ({
      ...prev,
      category: category.value,
    }));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Basic Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Tell residents about your service.
        </p>
      </div>

      {/* Service Title */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Service Title *
        </label>

        <input
          type="text"
          name="title"
          placeholder="Example: Homemade Tiffin Service"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <label className="mb-3 block text-sm font-medium">
          Select Category *
        </label>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => selectCategory(category)}
              className={`rounded-xl border p-4 text-center transition

              ${
                formData.category === category.value
                  ? "border-orange-500 bg-orange-50"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <div className="text-3xl">
                {category.icon}
              </div>

              <p className="mt-2 text-sm font-medium">
                {category.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium">
          Description *
        </label>

        <textarea
          rows={6}
          name="description"
          placeholder="Describe your service, experience, specialties, timings, etc."
          value={formData.description}
          onChange={handleChange}
          maxLength={500}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />

        <div className="mt-2 text-right text-xs text-gray-400">
          {formData.description.length}/500
        </div>
      </div>
    </div>
  );
}