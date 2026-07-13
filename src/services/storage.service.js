import {
  ref,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

import { storage } from "@/firebase/storage";

export const uploadServiceImage = async (file, userId) => {
  try {
    if (!file) {
      return {
        success: false,
        error: "No image selected.",
      };
    }

    const fileName = `${Date.now()}-${file.name}`;

    const storageRef = ref(
      storage,
      `services/${userId}/${fileName}`
    );

    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);

    return {
      success: true,
      imageUrl,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};