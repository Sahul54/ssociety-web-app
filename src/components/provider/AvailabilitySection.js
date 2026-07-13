"use client";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const serviceRadius = [
  "Within Society",
  "2 KM",
  "5 KM",
  "10 KM",
  "15 KM",
  "Anywhere",
];

export default function AvailabilitySection({
  formData,
  setFormData,
}) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleDay = (day) => {
    const exists = formData.availableDays.includes(day);

    if (exists) {
      setFormData((prev) => ({
        ...prev,
        availableDays: prev.availableDays.filter(
          (item) => item !== day
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        availableDays: [...prev.availableDays, day],
      }));
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Availability
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Tell customers when you're available.
        </p>
      </div>

      {/* Working Days */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium">
          Working Days
        </label>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
          {weekDays.map((day) => (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className={`rounded-xl border px-4 py-3 text-sm font-medium transition ${
                formData.availableDays.includes(day)
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-gray-300 hover:border-orange-400"
              }`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>

      {/* Timings */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Start Time
          </label>

          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            End Time
          </label>

          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
          />
        </div>
      </div>

      {/* Service Radius */}
      <div className="mb-8">
        <label className="mb-3 block text-sm font-medium">
          Service Area
        </label>

        <select
          name="serviceRadius"
          value={formData.serviceRadius}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-orange-500"
        >
          {serviceRadius.map((radius) => (
            <option
              key={radius}
              value={radius}
            >
              {radius}
            </option>
          ))}
        </select>
      </div>

      {/* Availability Options */}
      <div className="space-y-4">
        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4">
          <div>
            <h3 className="font-medium">
              Emergency Service
            </h3>

            <p className="text-sm text-gray-500">
              Available for urgent requests.
            </p>
          </div>

          <input
            type="checkbox"
            checked={formData.emergencyService}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                emergencyService:
                  !prev.emergencyService,
              }))
            }
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between rounded-xl border p-4">
          <div>
            <h3 className="font-medium">
              Weekend Available
            </h3>

            <p className="text-sm text-gray-500">
              Accept bookings on weekends.
            </p>
          </div>

          <input
            type="checkbox"
            checked={formData.weekendAvailable}
            onChange={() =>
              setFormData((prev) => ({
                ...prev,
                weekendAvailable:
                  !prev.weekendAvailable,
              }))
            }
          />
        </label>
      </div>
    </div>
  );
}