import {
addDoc,
collection,
deleteDoc,
doc,
getDoc,
getDocs,
query,
serverTimestamp,
updateDoc,
where,
} from "firebase/firestore";

import { db } from "@/firebase/firestore";

/* ==========================
Create Service
========================== */

export const createService = async (serviceData) => {
  try {
    const { image, ...data } = serviceData;

    const docRef = await addDoc(
      collection(db, "services"),
      {
        ...data,
        status: "pending",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
    );

    return {
      success: true,
      id: docRef.id,
    };
  } catch (error) {
    console.error("Create Service Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ==========================
Provider Services
========================== */

export const getProviderServices = async (
providerId
) => {
try {
const q = query(
collection(db, "services"),
where("providerId", "==", providerId)
);


const snapshot = await getDocs(q);

const services = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

return {
  success: true,
  services,
};


} catch (error) {
console.error(error);


return {
  success: false,
  error: error.message,
};


}
};

/* ==========================
Approved Services
========================== */

export const getApprovedServices = async () => {
try {
const q = query(
collection(db, "services"),
where("status", "==", "approved")
);

const snapshot = await getDocs(q);

const services = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

return {
  success: true,
  services,
};


} catch (error) {
return {
success: false,
error: error.message,
};
}
};

/* ==========================
Pending Services (Admin)
========================== */

export const getPendingServices = async () => {
try {
const q = query(
collection(db, "services"),
where("status", "==", "pending")
);

const snapshot = await getDocs(q);

const services = snapshot.docs.map((doc) => ({
  id: doc.id,
  ...doc.data(),
}));

return {
  success: true,
  services,
};


} catch (error) {
return {
success: false,
error: error.message,
};
}
};

/* ==========================
Get Service By Id
========================== */

export const getServiceById = async (id) => {
try {
const docRef = doc(db, "services", id);


const snapshot = await getDoc(docRef);

if (!snapshot.exists()) {
  return {
    success: false,
    error: "Service not found",
  };
}

return {
  success: true,
  service: {
    id: snapshot.id,
    ...snapshot.data(),
  },
};


} catch (error) {
return {
success: false,
error: error.message,
};
}
};

/* ==========================
   Update Service
========================== */

export const updateService = async (id, data) => {
  try {
    // Remove File object before updating
    const { image, ...updatedData } = data;

    await updateDoc(doc(db, "services", id), {
      ...updatedData,
      updatedAt: serverTimestamp(),
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error("Update Service Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ==========================
Delete Service
========================== */

export const deleteService = async (id) => {
try {
await deleteDoc(doc(db, "services", id));


return {
  success: true,
};

} catch (error) {
return {
success: false,
error: error.message,
};
}
};

/* ==========================
   Get All Services
========================== */

export const getAllServices = async () => {
  try {
    const snapshot = await getDocs(
      collection(db, "services")
    );

    const services = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      success: true,
      services,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* ==========================
Approve Service
========================== */

export const approveService = async (id) => {
try {
await updateDoc(doc(db, "services", id), {
status: "approved",
updatedAt: serverTimestamp(),
});


return {
  success: true,
};


} catch (error) {
return {
success: false,
error: error.message,
};
}
};

/* ==========================
Reject Service
========================== */

export const rejectService = async (id) => {
try {
await updateDoc(doc(db, "services", id), {
status: "rejected",
updatedAt: serverTimestamp(),
});

return {
  success: true,
};

} catch (error) {
return {
success: false,
error: error.message,
};
}
};
