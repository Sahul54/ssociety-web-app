"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Search,
  Mail,
  Phone,
  Calendar,
  Shield,
  User,
  UserCheck,
} from "lucide-react";

import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase/firestore";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const snapshot = await getDocs(
        collection(db, "users")
      );

      const data = snapshot.docs.map((doc) => ({
        uid: doc.id,
        ...doc.data(),
      }));

      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = useMemo(() => {
    const keyword = search.toLowerCase();

    return users.filter((user) => {
      return (
        user.name?.toLowerCase().includes(keyword) ||
        user.email?.toLowerCase().includes(keyword) ||
        user.role?.toLowerCase().includes(keyword)
      );
    });
  }, [users, search]);

  const getRoleBadge = (role) => {
    switch (role) {
      case "admin":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
            <Shield size={14} />
            Admin
          </span>
        );

      case "provider":
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
            <UserCheck size={14} />
            Provider
          </span>
        );

      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            <User size={14} />
            User
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-lg font-semibold">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Users Management
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all registered users, providers and admins.
          </p>
        </div>

        <div className="relative w-full lg:w-96">

          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            placeholder="Search by name, email or role..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none focus:border-orange-500"
          />

        </div>

      </div>

      {/* Summary */}

      <div className="grid gap-5 md:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="mt-2 text-3xl font-bold">
            {users.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-green-50 p-6">
          <p>User</p>
          <h2 className="mt-2 text-3xl font-bold">
            {
              users.filter(
                (u) => u.role === "user"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-50 p-6">
          <p>Provider</p>
          <h2 className="mt-2 text-3xl font-bold">
            {
              users.filter(
                (u) => u.role === "provider"
              ).length
            }
          </h2>
        </div>

        <div className="rounded-2xl bg-red-50 p-6">
          <p>Admin</p>
          <h2 className="mt-2 text-3xl font-bold">
            {
              users.filter(
                (u) => u.role === "admin"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border bg-white shadow">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left">
                User
              </th>

              <th>Email</th>

              <th>Phone</th>

              <th>Role</th>

              <th>Joined</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.uid}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <Image
                      src={
                        user.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user.name || "User"
                        )}&background=F97316&color=fff`
                      }
                      width={50}
                      height={50}
                      alt={user.name || "User"}
                      className="rounded-full"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {user.name || "N/A"}
                      </h3>

                      <p className="text-sm text-gray-500">
                        UID:
                        {" "}
                        {user.uid.slice(0, 8)}...
                      </p>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    {user.email}
                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    {user.phone || "-"}
                  </div>

                </td>

                <td>
                  {getRoleBadge(user.role)}
                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <Calendar size={16} />

                    {user.createdAt?.toDate
                      ? user.createdAt
                          .toDate()
                          .toLocaleDateString()
                      : "-"}

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}