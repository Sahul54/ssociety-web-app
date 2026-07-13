"use client";

import Link from "next/link";
import { Menu, Building2, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-orange-500 p-2.5 text-white shadow-sm">
            <Building2 size={20} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900">
              SocietyHub
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Local Community Marketplace
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#categories"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Categories
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            How It Works
          </Link>

          <Link
            href="#testimonials"
            className="text-sm font-medium text-gray-600 transition hover:text-orange-500"
          >
            Testimonials
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="rounded-xl bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <div className="space-y-4 p-4">
            <Link
              href="#categories"
              className="block text-sm font-medium text-gray-700"
            >
              Categories
            </Link>

            <Link
              href="#how-it-works"
              className="block text-sm font-medium text-gray-700"
            >
              How It Works
            </Link>

            <Link
              href="#testimonials"
              className="block text-sm font-medium text-gray-700"
            >
              Testimonials
            </Link>

            <div className="flex flex-col gap-3 pt-3">
              <Link
                href="/login"
                className="rounded-xl border px-4 py-2 text-center font-medium"
              >
                Login
              </Link>

              <Link
                href="/signup"
                className="rounded-xl bg-orange-500 px-4 py-2 text-center font-semibold text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}