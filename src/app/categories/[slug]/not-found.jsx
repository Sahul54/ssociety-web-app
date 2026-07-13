


import Link from "next/link";
import { SearchX, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        {/* Icon */}

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
          <SearchX
            size={48}
            className="text-orange-500"
          />
        </div>

        {/* 404 */}

        <span className="mt-8 block text-6xl font-black text-orange-500">
          404
        </span>

        {/* Title */}

        <h1 className="mt-3 text-3xl font-bold text-slate-900">
          Category Not Found
        </h1>

        {/* Description */}

        <p className="mt-4 leading-7 text-slate-500">
          Sorry, the category you are looking for doesn't exist
          or may have been removed.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            href="/categories"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            <ArrowLeft size={18} />
            Browse Categories
          </Link>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <Home size={18} />
            Go Home
          </Link>

        </div>

        {/* Suggested Actions */}

        <div className="mt-10 rounded-2xl bg-slate-50 p-5 text-left">
          <h3 className="font-semibold text-slate-800">
            You can try:
          </h3>

          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Browse all available categories</li>
            <li>• Search nearby services</li>
            <li>• Return to the homepage</li>
            <li>• Check the URL and try again</li>
          </ul>
        </div>

      </div>
    </main>
  );
}