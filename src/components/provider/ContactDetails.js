"use client";

export default function ContactDetails({
  formData,
  setFormData,
  user,
}) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Contact Details
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          These details help customers connect with you.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* WhatsApp */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            WhatsApp Number *
          </label>

          <input
            type="tel"
            name="whatsapp"
            placeholder="9876543210"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Alternate Phone Number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="9876543210"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            value={user?.email || ""}
            disabled
            className="w-full cursor-not-allowed rounded-xl border bg-gray-100 px-4 py-3 text-gray-500"
          />
        </div>

        {/* Society */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Society Name *
          </label>

          <input
            type="text"
            name="society"
            placeholder="Lodha Amara"
            value={formData.society}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Wing */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Wing / Tower
          </label>

          <input
            type="text"
            name="wing"
            placeholder="A Wing"
            value={formData.wing}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>

        {/* Flat */}
        <div>
          <label className="mb-2 block text-sm font-medium">
            Flat Number (Optional)
          </label>

          <input
            type="text"
            name="flat"
            placeholder="1204"
            value={formData.flat}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
          />
        </div>
      </div>

      {/* Address */}
      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium">
          Address
        </label>

        <textarea
          rows={4}
          name="address"
          placeholder="Enter your complete address..."
          value={formData.address}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500"
        />
      </div>

      {/* Notice */}
      <div className="mt-6 rounded-xl border border-orange-200 bg-orange-50 p-4">
        <p className="text-sm text-orange-700">
          <strong>Note:</strong> Your exact address and flat number will
          not be publicly displayed. This information is only used for
          verification and administrative purposes.
        </p>
      </div>
    </div>
  );
}