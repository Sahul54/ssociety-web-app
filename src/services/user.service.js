import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/firebase/firestore";

/* ===================================================
   Get All Users
=================================================== */

export const getAllUsers = async () => {
  try {
    const q = query(
      collection(db, "users"),
      where("role", "==", "user")
    );

    const snapshot = await getDocs(q);

    const users = snapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

    return {
      success: true,
      users,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      users: [],
      error: error.message,
    };
  }
};

/* ===================================================
   Get All Providers
=================================================== */

export const getAllProviders = async () => {
  try {
    const q = query(
      collection(db, "users"),
      where("role", "==", "provider")
    );

    const snapshot = await getDocs(q);

    const providers = snapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data(),
    }));

    return {
      success: true,
      providers,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      providers: [],
      error: error.message,
    };
  }
};

/* ===================================================
   Get Provider By ID
=================================================== */

export const getProviderById = async (uid) => {
  try {
    const snapshot = await getDoc(
      doc(db, "users", uid)
    );

    if (!snapshot.exists()) {
      return {
        success: false,
        provider: null,
      };
    }

    return {
      success: true,
      provider: {
        uid: snapshot.id,
        ...snapshot.data(),
      },
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      provider: null,
      error: error.message,
    };
  }
};

/* ===================================================
   Get User By ID
=================================================== */

export const getUserById = async (uid) => {
  try {
    const snapshot = await getDoc(
      doc(db, "users", uid)
    );

    if (!snapshot.exists()) {
      return {
        success: false,
        user: null,
      };
    }

    return {
      success: true,
      user: {
        uid: snapshot.id,
        ...snapshot.data(),
      },
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      user: null,
      error: error.message,
    };
  }
};

/* ===================================================
   Update User Role
=================================================== */

export const updateUserRole = async (
  uid,
  role
) => {
  try {
    await updateDoc(doc(db, "users", uid), {
      role,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error: error.message,
    };
  }
};