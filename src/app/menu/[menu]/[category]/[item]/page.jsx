"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";

// Short description helper
const shortText = (text, maxWords = 14) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > maxWords
    ? words.slice(0, maxWords).join(" ") + "..."
    : text;
};

export default function ItemPage() {
  const { menu, category, item } = useParams();

  const [itemData, setItemData] = useState(null);
  const [tours, setTours] = useState([]);
  const [loadingItem, setLoadingItem] = useState(true);
  const [loadingTours, setLoadingTours] = useState(true);

  const normalize = (str) => str.replace(/-/g, " ").toLowerCase();

  // Fetch banner item data
  const fetchItemData = async () => {
    try {
      const res = await axiosInstance.get("/website-mega-menu");
      const allMenus = res.data.data;

      // Find menu
      const menuObj = allMenus.find(
        (m) => normalize(m.title) === normalize(menu)
      );
      if (!menuObj) {
        setItemData(null);
        setLoadingItem(false);
        return;
      }

      // Find category
      const categoryObj = menuObj.categories.find(
        (c) => normalize(c.title) === normalize(category)
      );

      // Find item
      const itemObj = categoryObj?.items.find((i) => i.id === item);

      // Fallback banner: item -> category -> menu
      let finalItemData = null;

if (itemObj) {
  finalItemData = {
    title: itemObj.title,
    description: itemObj.description || `Explore ${itemObj.title}!`,
    image: itemObj.image || categoryObj?.image || menuObj.image,
  };
} else if (categoryObj) {
  finalItemData = {
    title: categoryObj.title,
    description: `Explore ${categoryObj.title}!`,
    image: categoryObj.image || menuObj.image,
  };
} else if (menuObj) {
  finalItemData = {
    title: menuObj.title,
    description: `Explore ${menuObj.title}!`,
    image: menuObj.image,
  };
}


      setItemData(finalItemData);
    } catch (err) {
      console.log("Item API Error:", err);
      setItemData(null);
    } finally {
      setLoadingItem(false);
    }
  };

  // Fetch tours for the item
  const fetchTours = async () => {
    try {
      const res = await axiosInstance.get(`/website-tour/by-item/${item}`);
      setTours(res.data?.data || []);
    } catch (err) {
      console.log("Tours API Error:", err);
    } finally {
      setLoadingTours(false);
    }
  };

  useEffect(() => {
    if (menu && category) fetchItemData();
    if (item) fetchTours();
  }, [menu, category, item]);

  if (loadingItem || loadingTours)
    return <div className="p-32 text-center text-xl">Loading...</div>;

  return (
    <div className="w-full min-h-screen mt-68 px-6 md:px-10 pb-20">
      {/* Banner */}
      {itemData ? (
        <div className="flex justify-center items-center w-full mb-16">
          <div className="relative w-full mx-6 h-[400px] rounded-3xl overflow-hidden shadow-xl">
            <img
              src={itemData.image?.secure_url}
              alt={itemData.title}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
              <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-lg mb-4">
                {itemData.title}
              </h1>
              <p className="text-md md:text-lg max-w-3xl drop-shadow-md">
                {itemData.description || "Explore this amazing experience!"}
              </p>
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
      ) : (
        <div className="p-32 text-center text-xl text-red-500">
          Item Not Found
        </div>
      )}

      {/* Tours */}
      <h2 className="text-3xl font-bold mb-8 px-8 py-2">Available Tours</h2>

      {tours.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={tour.coverPhotoUrl}
                  alt={tour.tourName}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 px-3 py-1 bg-black/70 text-white text-xs font-medium rounded-full">
                  {tour.country?.name}
                </span>
                <span className="absolute top-3 right-3 px-3 py-1 bg-white/80 text-gray-800 text-xs font-medium rounded-full">
                  {tour.state?.name}
                </span>
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {tour.tourName}
                </h3>
                {/* <p className="text-gray-500 text-sm mt-1">
                  Code: <span className="font-medium">{tour.tourCode}</span>
                </p> */}
                <p className="text-gray-600 text-sm mt-3">
                  {shortText(tour.description)}
                </p>
                {/* Tags */}
{/* Tags */}
<div className="flex flex-wrap gap-2 mt-3">

  {tour.isHotSelling && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-red-100 text-red-700 border border-red-200 rounded-full">
      Hot Selling
    </span>
  )}

  {tour.isQuickEscape && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-blue-100 text-blue-700 border border-blue-200 rounded-full">
      Quick Escape
    </span>
  )}

  {tour.isTopDeal && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-green-100 text-green-700 border border-green-200 rounded-full">
      Top Deal
    </span>
  )}

  {tour.isInternational && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-purple-100 text-purple-700 border border-purple-200 rounded-full">
      International
    </span>
  )}

  {tour.isDomestic && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-yellow-100 text-yellow-700 border border-yellow-200 rounded-full">
      Domestic
    </span>
  )}

  {tour.isSeasonalTour && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-orange-100 text-orange-700 border border-orange-200 rounded-full">
      Seasonal
    </span>
  )}

  {/* {tour.isNormalTour && (
    <span className="px-2.5 py-1 text-[11px] font-medium bg-gray-100 text-gray-700 border border-gray-300 rounded-full">
      Normal Tour
    </span>
  )} */}

</div>


                <p className="text-gray-700 text-sm mt-3">
                  Destination:{" "}
                  <span className="font-semibold text-indigo-600">
                    {tour.destination?.destination_name}
                  </span>
                </p>
                <button className="w-full mt-auto py-2.5 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                  View Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-32 text-center text-xl text-red-500">
          No Tours Found for this Item
        </div>
      )}
    </div>
  );
}
