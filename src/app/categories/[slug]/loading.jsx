import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-100">
      {/* Hero Skeleton */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-400">
        <div className="mx-auto max-w-[1800px] px-6 py-10">
          <div className="h-5 w-32 animate-pulse rounded bg-white/20" />

          <div className="mt-8 flex items-center gap-5">
            <div className="h-20 w-20 animate-pulse rounded-3xl bg-white/20" />

            <div>
              <div className="h-10 w-60 animate-pulse rounded bg-white/20" />
              <div className="mt-3 h-5 w-40 animate-pulse rounded bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1800px]">
        {/* Sidebar */}
        <aside className="hidden w-80 border-r bg-white p-6 lg:block">
          <div className="space-y-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-12 animate-pulse rounded-2xl bg-slate-200"
              />
            ))}
          </div>
        </aside>

        {/* Service List */}
        <div className="flex-1 p-6">
          <div className="mb-6 flex items-center gap-3">
            <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
            <span className="font-semibold text-slate-600">
              Loading nearby services...
            </span>
          </div>

          <div className="space-y-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white p-5 shadow-sm"
              >
                <div className="flex gap-5">
                  <div className="h-28 w-28 animate-pulse rounded-2xl bg-slate-200" />

                  <div className="flex-1 space-y-3">
                    <div className="h-6 w-1/2 animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />

                    <div className="mt-6 flex justify-between">
                      <div className="h-8 w-24 animate-pulse rounded bg-slate-200" />
                      <div className="h-10 w-28 animate-pulse rounded-xl bg-orange-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        <aside className="hidden w-[420px] border-l bg-white p-6 xl:block">
          <div className="h-64 animate-pulse rounded-3xl bg-slate-200" />

          <div className="mt-6 space-y-4">
            <div className="h-8 w-2/3 animate-pulse rounded bg-slate-200" />
            <div className="h-5 w-1/2 animate-pulse rounded bg-slate-200" />

            <div className="mt-8 h-32 animate-pulse rounded-2xl bg-slate-200" />

            <div className="space-y-3">
              <div className="h-4 animate-pulse rounded bg-slate-200" />
              <div className="h-4 animate-pulse rounded bg-slate-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200" />
            </div>

            <div className="mt-8 h-12 animate-pulse rounded-2xl bg-orange-200" />
          </div>
        </aside>
      </section>
    </main>
  );
}