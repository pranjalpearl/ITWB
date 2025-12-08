"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";

export default function ItemPage() {
  const { menu, category, item } = useParams();

  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(true);

  const normalize = (str) => str.replace(/-/g, " ").toLowerCase();

  useEffect(() => {
    fetchData();
  }, [menu, category, item]);

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get("/website-mega-menu");
      const allMenus = res.data.data;

      const menuObj = allMenus.find(
        (m) => m.title.toLowerCase() === normalize(menu)
      );

      const categoryObj = menuObj?.categories.find(
        (c) => c.title.toLowerCase() === normalize(category)
      );

      const itemObj = categoryObj?.items.find(
        (i) => i.title.toLowerCase() === normalize(item)
      );

      setItemData(itemObj || null);
    } catch (err) {
      console.log("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <div className="p-32 text-center text-xl">Loading...</div>;

  if (!itemData)
    return (
      <div className="p-32 text-center text-xl text-red-500">
        Item Not Found
      </div>
    );

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-blue-600 p-6 md:p-10 mt-24">
      <div className="relative w-full mx-6 h-[400px] rounded-3xl overflow-hidden shadow-xl">
        {/* Background Image */}
        <img
          src={itemData.image?.secure_url}
          alt={itemData.title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />

        {/* Gradient overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
          <h1 className="text-8xl font-extrabold drop-shadow-lg mb-4">
            {itemData.title}
          </h1>
          <p className="text-md md:text-lg max-w-3xl drop-shadow-md">
            {itemData.description || "Explore this amazing experience!"}
          </p>

          {/* Optional Call-to-Action Button */}
          {itemData.link && (
            <a
              href={itemData.link}
              className="mt-6 inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
