import Link from "next/link";
import categories from "@/data/categories";

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold text-orange-600">
            Explore Services
          </span>

          <h1 className="mt-5 text-4xl font-bold text-slate-900">
            Find Trusted Services
            <br />
            Inside Your Society
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Discover verified local professionals including Home Chefs,
            Tutors, Tailors, Yoga Trainers, Makeup Artists and many more.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.value}
                href={`/categories/${category.value}`}
                className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-all group-hover:bg-orange-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-slate-900">
                  {category.label}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Explore trusted providers in your society.
                </p>

                <div className="mt-6 flex items-center font-semibold text-orange-500">
                  Browse Services
                  <span className="ml-2 transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
