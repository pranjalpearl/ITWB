import React, { useEffect, useState, useRef } from "react";
import instance from "@/utils/axiosInstance";
import { MapPin, Globe, Type, X, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import ScrollableTooltip from "@/components/common/ScrollableTooltip";
import { Info } from "lucide-react";

const TourCard = ({ tour }) => {
  const router = useRouter();
  const [showFull, setShowFull] = useState(false);

  // Safely handle empty description
  const description = tour.description || "";

  return (
    // Each tour card container
    <div className="border-b border-gray-100 px-4 py-4 last:border-none">
      {/* Main layout: image left, info right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
        {/* LEFT: Main image + gallery */}
        <div className="flex flex-col">
          {/* Main cover image */}
          <div className="relative rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src={tour.coverPhotoUrl}
              alt={tour.tourName || "Tour cover image"}
              className="w-full h-56 sm:h-64 object-cover"
              loading="lazy"
            />
          </div>

          {/* Small gallery under main image */}
          {tour?.images?.length > 0 && (
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
              {tour.images.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  className="flex-shrink-0 rounded-lg overflow-hidden border border-gray-200 hover:border-purple-500 transition-transform duration-150 hover:scale-105"
                >
                  <img
                    src={img.secureUrl}
                    alt="Tour thumbnail"
                    className="h-16 w-20 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Text content */}
        <div className="flex flex-col gap-2">
          {/* Tour name + code */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
              {tour.tourName}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Code: <span className="font-medium">{tour.tourCode}</span>
            </p>
          </div>

          {/* Description with tooltip */}
          <div className="text-sm text-gray-700 leading-relaxed flex flex-col">
            {/* Short preview */}
            <p className="line-clamp-2">{description}</p>

            {/* Button right aligned, small gap */}
            {description.length > 120 && (
              <div className="flex justify-end mt-1">
                <ScrollableTooltip content={description}>
                  <button className="flex items-center gap-1 text-purple-600 hover:text-purple-800 underline text-[11px] font-medium">
                    View full description
                    <Info size={13} />
                  </button>
                </ScrollableTooltip>
              </div>
            )}
          </div>
          

          {/* Tags row: country, state, type */}
          <div className="flex flex-wrap gap-1.5 mt-1">
            {tour.country?.name && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                <Globe size={12} />
                {tour.country.name}
              </span>
            )}
            {tour.state?.name && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <MapPin size={12} />
                {tour.state.name}
              </span>
            )}
            {tour.tourType?.name && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-full bg-green-50 text-green-700 border border-green-100">
                <Type size={12} />
                {tour.tourType.name}
              </span>
            )}
          </div>

          {/* Bottom action row */}
          <div className="mt-2 flex items-center justify-between">
            {/* You can show price / duration here later */}
            <div className="text-xs text-gray-500">
              {/* Simple placeholder for future meta info */}
              {/* Example: 5 days · 4 nights */}
            </div>

            <button
              type="button"
              onClick={() => router.push(`/trip/${tour.id}`)}
              className="inline-flex items-center justify-center px-3 py-1.5 min-h-[30px] text-xs sm:text-sm font-semibold !rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:shadow-lg hover:opacity-95 active:scale-[0.98] transition"
            >
              View more details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchModal = ({ isOpen, onClose, searchParams }) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  // For closing modal when clicking outside
  const modalRef = useRef(null);

  // Handle outside click
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  // Fetch tours when modal opens
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/website-tour/get-tour-cst`, {
        params: searchParams,
      });
      setTours(response.data.data || []);
    } catch (err) {
      console.error("Error fetching tours:", err);
    } finally {
      setLoading(false);
    }
  };

  // Handle open / close side effects
  useEffect(() => {
    if (isOpen) {
      fetchTours();
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean-up when modal closes or component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // If modal is closed, render nothing
  if (!isOpen) return null;

  return (
    // Background overlay
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-3">
      {/* Modal box */}
      <div
        ref={modalRef}
        className="bg-white w-full max-w-6xl max-h-[90vh] rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
      >
        {/* Header section */}
        {/* Header section */}
        <div className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-purple-600 to-blue-600 border-b border-gray-300/40 shadow-sm">
          {/* Title + Count */}
          <div className="flex flex-col">
            <h2 className="mt-2 text-base sm:text-lg font-semibold text-white flex items-center gap-2 tracking-wide">
              🔍 Search Results
            </h2>

            <p className="font-semibold mt-0.5 text-[11px] sm:text-xs px-2 py-0.5 w-fit text-white rounded-full backdrop-blur-md">
              {tours.length} Tour{tours.length !== 1 ? "s" : ""} Found
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full p-1.5 bg-white/10 border border-white/20 hover:bg-white/20 transition"
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Active filters row */}
        <div className="px-4 sm:px-6 py-2.5 border-b bg-gray-50 flex flex-wrap gap-5">
          {searchParams?.countryId && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xl rounded-full bg-purple-100 text-purple-800">
              <Globe size={14} />
              Country: {searchParams.countryId}
            </span>
          )}
          {searchParams?.stateId && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xl rounded-full bg-blue-100 text-blue-800">
              <MapPin size={14} />
              State: {searchParams.stateId}
            </span>
          )}
          {searchParams?.tourTypeId && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xl rounded-full bg-green-100 text-green-800">
              <Type size={14} />
              Type: {searchParams.tourTypeId}
            </span>
          )}
        </div>

        {/* Content area: scrollable */}
        <div className="flex-1 overflow-y-auto">
          {/* Loader state */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="animate-spin h-8 w-8 text-purple-600" />
              <p className="mt-2 text-sm text-purple-700 font-medium">
                Searching tours...
              </p>
            </div>
          )}

          {/* No data state */}
          {!loading && tours.length === 0 && (
            <div className="py-10 flex items-center justify-center">
              <p className="text-sm text-gray-500">
                No tours found for selected filters.
              </p>
            </div>
          )}

          {/* List of tour cards */}
          {!loading &&
            tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
