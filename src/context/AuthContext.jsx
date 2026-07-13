"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { auth } from "@/firebase/auth";
import { db } from "@/firebase/firestore";

const AuthContext = createContext(null);

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] = useState(null);

  const [userData, setUserData] =
    useState(null);

  const [role, setRole] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        async (firebaseUser) => {
          try {
            if (!firebaseUser) {
              setUser(null);
              setUserData(null);
              setRole(null);
              setLoading(false);
              return;
            }

            setUser(firebaseUser);

            const userRef = doc(
              db,
              "users",
              firebaseUser.uid
            );

            const userSnap =
              await getDoc(userRef);

            if (userSnap.exists()) {
              const data =
                userSnap.data();

              setUserData(data);
              setRole(data.role);
            }

            setLoading(false);
          } catch (error) {
            console.error(
              "Auth Error:",
              error
            );

            setLoading(false);
          }
        }
      );

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    userData,
    role,
    loading,

    isLoggedIn: !!user,

    isUser:
      role === "user",

    isProvider:
      role === "provider",

    isAdmin:
      role === "admin",
  };

  return (
    <AuthContext.Provider
      value={value}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};