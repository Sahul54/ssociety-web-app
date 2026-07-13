"use client";

const priceTypes = [
  {
    label: "Fixed Price",
    value: "fixed",
  },
  {
    label: "Per Hour",
    value: "hour",
  },
  {
    label: "Per Day",
    value: "day",
  },
  {
    label: "Per Visit",
    value: "visit",
  },
];

export default function PricingDetails({
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckbox = (name) => {
    setFormData((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Pricing & Experience
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Help customers understand your pricing and experience.
        </p>
      </div>

      {/* Starting Price */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Starting Price (₹)
        </label>

        <input
          type="number"
          name="price"
          placeholder="500"
          value={formData.price}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      {/* Price Type */}
      <div className="mb-6">
        <label className="mb-3 block text-sm font-medium">
          Pricing Type
        </label>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {priceTypes.map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  priceType: type.value,
                }))
              }
              className={`rounded-xl border p-3 text-sm font-medium transition ${
                formData.priceType === type.value
                  ? "border-orange-500 bg-orange-50 text-orange-600"
                  : "border-gray-300 hover:border-orange-300"
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium">
          Experience (Years)
        </label>

        <input
          type="number"
          name="experience"
          placeholder="2"
          value={formData.experience}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      {/* Service Availability */}
      <div>
        <label className="mb-3 block text-sm font-medium">
          Service Availability
        </label>

        <div className="space-y-4">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-gray-50">
            <input
              type="checkbox"
              checked={formData.homeService}
              onChange={() =>
                handleCheckbox("homeService")
              }
            />

            <div>
              <p className="font-medium">
                Home Service Available
              </p>

              <p className="text-sm text-gray-500">
                You can visit the customer's home.
              </p>
            </div>
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4 hover:bg-gray-50">
            <input
              type="checkbox"
              checked={formData.onlineService}
              onChange={() =>
                handleCheckbox("onlineService")
              }
            />

            <div>
              <p className="font-medium">
                Online Service Available
              </p>

              <p className="text-sm text-gray-500">
                You can provide services online.
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}