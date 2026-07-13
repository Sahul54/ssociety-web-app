"use client";

import { useRef } from "react";
import { Camera, Upload, Trash2, ImageIcon } from "lucide-react";

export default function ImageUpload({
  image,
  setImage,
}) {
  const inputRef = useRef(null);

  const handleImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Image Validation
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    // 2 MB Limit
    if (file.size > 2 * 1024 * 1024) {
      alert("Image size should be less than 2 MB.");
      return;
    }

    setImage(file);
  };

  const removeImage = () => {
    setImage(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Service Image
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Upload a clear image that represents your service.
        </p>
      </div>

      {!image ? (
        <button
          type="button"
          onClick={() => inputRef.current.click()}
          className="flex h-72 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 transition hover:border-orange-500 hover:bg-orange-50"
        >
          <Upload
            size={42}
            className="text-orange-500"
          />

          <h3 className="mt-4 text-lg font-semibold">
            Upload Service Image
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            JPG, PNG or WEBP
          </p>

          <p className="text-xs text-gray-400">
            Maximum Size: 2 MB
          </p>
        </button>
      ) : (
        <div className="overflow-hidden rounded-2xl border">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-72 w-full object-cover"
          />

          <div className="flex items-center justify-between border-t bg-white p-4">
            <div className="flex items-center gap-3">
              <ImageIcon
                size={20}
                className="text-orange-500"
              />

              <div>
                <p className="font-medium">
                  {image.name}
                </p>

                <p className="text-sm text-gray-500">
                  {(image.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => inputRef.current.click()}
                className="rounded-xl border px-4 py-2 transition hover:bg-gray-100"
              >
                <Camera size={18} />
              </button>

              <button
                type="button"
                onClick={removeImage}
                className="rounded-xl border border-red-200 px-4 py-2 text-red-600 transition hover:bg-red-50"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleImage}
      />
    </div>
  );
}