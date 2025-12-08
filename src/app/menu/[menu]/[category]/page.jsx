"use client";

import { useParams } from "next/navigation";

export default function CategoryPage() {
  const { menu, category } = useParams();

  return (
    <div className="flex justify-center items-center h-full p-10 pt-32">
      <h1 className="text-3xl font-bold">
        {menu} → {category}
      </h1>
    </div>
  );
}
