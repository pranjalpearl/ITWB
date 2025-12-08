import React, { useEffect, useState, useRef } from "react";
import instance from "@/utils/axiosInstance";
import { Image, MapPin, Globe, Type, X, Loader2 } from "lucide-react";

// Swiper Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const SearchModal = ({ isOpen, onClose, searchParams }) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const modalRef = useRef(); // used for outside click close

  // Close modal when clicking outside box
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      fetchTours();
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Fetch tours API call
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/website-tour/get-tour-cst`, {
        params: searchParams,
      });
      setTours(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    // Modal background
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-[9999] p-3">
      {/* Modal Container */}
      <div
        ref={modalRef}
        className="bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-2xl shadow-2xl border border-gray-200"
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b bg-gradient-to-r from-purple-600 to-blue-600">
          <h2 className="text-xl font-semibold text-white flex items-center gap-2">
            🔍 Search Results — {tours.length} found
          </h2>

          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Display Filters */}
        <div className="flex flex-wrap gap-2 px-6 py-3 bg-gray-50 border-b">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center gap-1">
            <Globe size={14} /> Country: {searchParams.countryId}
          </span>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center gap-1">
            <MapPin size={14} /> State: {searchParams.stateId}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center gap-1">
            <Type size={14} /> Type: {searchParams.tourTypeId}
          </span>
        </div>

        {/* Loader */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-14">
            <Loader2 className="animate-spin h-10 w-10 text-purple-600" />
            <p className="mt-2 text-purple-600 font-medium">
              Searching tours...
            </p>
          </div>
        )}

        {/* No Data */}
        {!loading && tours.length === 0 && (
          <p className="text-center text-gray-500 py-10">No Tours Found</p>
        )}

        {/* Tour Cards */}
        {!loading &&
          tours.map((tour) => (
            <div
              key={tour.id}
              className="border-b px-6 py-6 transition hover:bg-gray-50"
            >
              {/* Row - Image Left + Content Right */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Left Image */}
                <img
                  src={tour.coverPhotoUrl}
                  alt="Cover"
                  className="rounded-xl w-full h-64 object-cover border"
                />

                {/* Right Content */}
                <div className="sm:col-span-2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {tour.tourName}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Tour Code — {tour.tourCode}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">
                        {tour.country?.name}
                      </span>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                        {tour.state?.name}
                      </span>
                      <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                        {tour.tourType?.name}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mt-3 text-sm">
                      {tour.description || "No description available."}
                    </p>
                  </div>

                  {/* View Button */}
                  <button
                    className="mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg hover:opacity-90 w-fit"
                    onClick={() => alert("More Details Coming")}
                  >
                    View More Details
                  </button>
                </div>
              </div>

              {/* Gallery Slider */}
              {tour?.images?.length > 0 && (
                <div className="mt-5">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
                    <Image size={18} /> Gallery Photos
                  </h4>

                  <Swiper
                    slidesPerView={3}
                    spaceBetween={12}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination]}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      480: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                    }}
                  >
                    {tour.images.map((img) => (
                      <SwiperSlide key={img.id}>
                        <img
                          src={img.secureUrl}
                          className="h-28 w-full object-cover rounded-lg border hover:scale-105 transition"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchModal;
