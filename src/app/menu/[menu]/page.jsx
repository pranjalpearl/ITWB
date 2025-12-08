"use client";

import { useParams } from "next/navigation";

export default function MenuPage() {
  const { menu } = useParams();

  return (
     <div className="flex justify-center items-center h-full p-10 pt-32">
      <h1 className="text-3xl font-bold">Menu → {menu}</h1>
    </div>
  );
}
