import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth } from "@/firebase/auth";
import { db } from "@/firebase/firestore";

const googleProvider = new GoogleAuthProvider();

/* =========================
   Email Signup
========================= */

export const signupWithEmail = async ({
  name,
  email,
  password,
  role = "user",
}) => {
  try {
    const userCredential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      name,
      email,
      photoURL: user.photoURL || "",
      role,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error("Signup Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* =========================
   Email Login
========================= */

export const loginWithEmail = async (
  email,
  password
) => {
  try {
    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    return {
      success: true,
      user,
    };
  } catch (error) {
    console.error("Login Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
};

/* =========================
   Google Login
========================= */

export const loginWithGoogle =
  async (role = "user") => {
    try {
      const result =
        await signInWithPopup(
          auth,
          googleProvider
        );

      const user = result.user;

      const userRef = doc(
        db,
        "users",
        user.uid
      );

      const userSnap =
        await getDoc(userRef);

      // First Time Login
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          name: user.displayName || "",
          email: user.email,
          photoURL:
            user.photoURL || "",
          role,
          createdAt:
            serverTimestamp(),
          updatedAt:
            serverTimestamp(),
        });
      }

      return {
        success: true,
        user,
      };
    } catch (error) {
      console.error(
        "Google Login Error:",
        error
      );

      return {
        success: false,
        error: error.message,
      };
    }
  };

/* =========================
   Get Current User
========================= */

export const getCurrentUser =
  () => {
    return auth.currentUser;
  };

/* =========================
   Get User Role
========================= */

export const getUserRole =
  async (uid) => {
    try {
      const userRef = doc(
        db,
        "users",
        uid
      );

      const userSnap =
        await getDoc(userRef);

      if (!userSnap.exists())
        return null;

      return userSnap.data();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

/* =========================
   Logout
========================= */

export const logoutUser =
  async () => {
    try {
      await signOut(auth);

      return {
        success: true,
      };
    } catch (error) {
      console.error(
        "Logout Error:",
        error
      );

      return {
        success: false,
        error: error.message,
      };
    }
  };