import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { notFound } from "next/navigation";

import { db } from "@/firebase/firestore";
import categories from "@/data/categories";

import CategoryClient from "./CategoryClient";

export default async function CategoryPage({
  params,
}) {
  const { slug } = await params;

  const category = categories.find(
    (item) => item.value === slug
  );

  if (!category) {
    notFound();
  }

  const q = query(
    collection(db, "services"),
    where("category", "==", slug),
    where("status", "==", "approved")
  );

  const snapshot = await getDocs(q);

  const services = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt
        ? data.createdAt.toMillis()
        : null,
      updatedAt: data.updatedAt
        ? data.updatedAt.toMillis()
        : null,
    };
  });

  return (
    <CategoryClient
      slug={slug}
      services={services}
    />
  );
}