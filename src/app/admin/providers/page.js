"use client";

import { useEffect, useState } from "react";

import {
  Search,
  Mail,
  Phone,
  Eye,
  UserCheck,
} from "lucide-react";

import { getAllProviders } from "@/services/user.service";
import Link from "next/link";

export default function ProvidersPage() {
  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] =
    useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadProviders();
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();

    setFilteredProviders(
      providers.filter(
        (provider) =>
          provider.name
            ?.toLowerCase()
            .includes(keyword) ||
          provider.email
            ?.toLowerCase()
            .includes(keyword)
      )
    );
  }, [search, providers]);

  const loadProviders = async () => {
    setLoading(true);

    const result = await getAllProviders();

    if (result.success) {
      setProviders(result.providers);
      setFilteredProviders(result.providers);
    }

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>

      {/* Header */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Providers
          </h1>

          <p className="mt-2 text-gray-500">
            Manage all registered providers.
          </p>
        </div>

        <div className="relative w-full lg:w-80">
          <Search
            size={18}
            className="absolute left-4 top-3.5 text-gray-400"
          />

          <input
            placeholder="Search provider..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border bg-white py-3 pl-11 pr-4 outline-none focus:border-orange-500"
          />
        </div>

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">

        <table className="w-full">

          <thead className="bg-gray-50">

            <tr>

              <th className="px-6 py-4 text-left">
                Provider
              </th>

              <th>Email</th>

              <th>Phone</th>

              <th>Role</th>

              <th className="text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredProviders.map((provider) => (

              <tr
                key={provider.uid}
                className="border-t hover:bg-gray-50"
              >

                <td className="px-6 py-4">

                  <div className="flex items-center gap-4">

                    <img
                      src={
                        provider.photoURL ||
                        `https://ui-avatars.com/api/?name=${provider.name}`
                      }
                      className="h-12 w-12 rounded-full"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {provider.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Joined Recently
                      </p>

                    </div>

                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    {provider.email}
                  </div>

                </td>

                <td>

                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    {provider.phone || "-"}
                  </div>

                </td>

                <td>

                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                    <UserCheck
                      size={14}
                      className="mr-1 inline"
                    />
                    Provider
                  </span>

                </td>

                <td>

                  <div className="flex justify-center">

                    <Link
  href={`/admin/providers/${provider.uid}`}
  className="rounded-xl border p-2 hover:bg-orange-50"
>
  <Eye size={18} />
</Link>

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