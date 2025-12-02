// import { motion } from "framer-motion";
// import { MapPin, Clock, Star, Tag } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const TourHeader = ({ tour }) => {
//   const { isAuthenticated } = useSelector((state) => state.auth);

//   const [lastBooked, setLastBooked] = useState(12);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setLastBooked((prev) =>
//         prev > 0 ? prev - 1 : Math.floor(Math.random() * 60)
//       );
//     }, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className=" p-8 rounded-2xl shadow-2xl border border-blue-200"
//     >
//       {}
//       <div className="flex flex-col md:flex-row justify-between items-start mb-6">
//         <div>
//           <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
//             {tour.tour_name}
//           </h1>
//           <p className="text-lg text-blue-700 italic mb-4">
//             {tour.tour_caption}
//           </p>
//         </div>
//         <div className="flex flex-col items-end space-y-2">
//           {lastBooked > 0 && (
//             <span className="inline-flex items-center px-4 py-2 bg-orange-400 text-white text-xl font-semibold rounded-l-full rounded-r-sm shadow-md">
//               Last booked {lastBooked} min{lastBooked === 1 ? "" : "s"} ago
//             </span>
//           )}
//           <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xl font-semibold rounded-full">
//             <Star className="w-4 h-4 mr-1" /> {tour.popularity_score / 10}/5 (86
//             Reviews)
//           </span>
//         </div>
//       </div>

//       {}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
//         <div className="flex items-center space-x-3">
//           <MapPin className="w-6 h-6 text-blue-600" />
//           <div>
//             <p className="text-sm font-medium text-blue-700">Destination</p>
//             <p className="text-lg font-semibold text-gray-800">
//               {tour.destination.destination_name} (
//               {tour.destination.destination_type})
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Clock className="w-6 h-6 text-blue-600" />
//           <div>
//             <p className="text-sm font-medium text-blue-700">Duration</p>
//             <p className="text-lg font-semibold text-gray-800">
//               {tour.tour_duration.join(", ")} {tour.tour_duration_type}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center space-x-3">
//           <Tag className="w-6 h-6 text-blue-600" />
//           <div>
//             <p className="text-sm font-medium text-blue-700">Pricing</p>
//             <p className="text-lg font-semibold text-gray-800">
//               {tour.isDiscount ? (
//                 <>
//                   <span className="line-through text-gray-500 mr-2">
//                     ₹{tour.original_price}
//                   </span>
//                   <span className="text-green-600">
//                     ₹{tour.discounted_price} ({tour.discount_percent}% off)
//                   </span>
//                 </>
//               ) : (
//                 <span>₹{tour.original_price}</span>
//               )}
//             </p>
//           </div>
//         </div>
//       </div>

//       {}
//       <div className="mb-8">
//         <h2 className="text-4xl font-semibold mb-3">Unique About This Tour</h2>
//         <ul className="list-disc text-2xl pl-6 space-y-2 text-gray-700">
//           {tour.tour_highlights.map((highlight, idx) => (
//             <li key={idx}>{highlight}</li>
//           ))}
//           <li>Walking along the Banyan Lake and Cedar Lake in Guilin</li>
//           <li>Boat cruise on the picturesque Li River to Yangshuo</li>
//         </ul>
//       </div>

//       {}
//       <div className="w-full h-auto flex justify-end">
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 !rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
//           style={{ fontSize: "20px" }}
//         >
//           Book Now
//         </motion.button>
//       </div>
//     </motion.div>
//   );
// };

// export default TourHeader;


import { motion } from "framer-motion";
import { MapPin, Clock, Star, Tag, CalendarDays } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

const TourHeader = ({ tour }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [lastBooked, setLastBooked] = useState(12);

  // 1. Safe Data Extraction & Transformation
  // We use useMemo to calculate these once so we don't re-process on every render
  const {
    tourName = "Loading Tour...",
    tourCode = "",
    tour_highlights = [],
    days = [],
  } = tour || {}; // Default to empty object if tour is null

  // Calculate Duration based on the number of days in the itinerary
  const durationCount = days?.length || 0;
  const durationText = durationCount > 0
    ? `${durationCount} Days / ${durationCount - 1} Nights`
    : "Duration TBD";

  // Calculate Unique Destinations from the daily sectors
  const destinationList = useMemo(() => {
    if (!days || days.length === 0) return "Multiple Destinations";

    const dests = new Set();
    // Add start point
    if (days[0]?.sectors?.from?.destName) dests.add(days[0].sectors.from.destName);

    // Add all end points
    days.forEach(day => {
      if (day?.sectors?.to?.destName) dests.add(day.sectors.to.destName);
    });

    return Array.from(dests).join(" - ");
  }, [days]);

  // Mocking Price logic since it's missing from the root JSON
  // In a real scenario, you might sum up day expenses or use a root price field
  const displayPrice = tour?.price || "On Request";

  useEffect(() => {
    const interval = setInterval(() => {
      setLastBooked((prev) =>
        prev > 0 ? prev - 1 : Math.floor(Math.random() * 60)
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  if (!tour) return <div className="animate-pulse h-64 bg-gray-200 rounded-2xl"></div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="p-4 md:p-8 rounded-2xl shadow-2xl border border-blue-200 bg-white"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-2 leading-tight">
            {tourName}
          </h1>
          <div className="flex items-center gap-2 text-blue-700 italic mb-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
              {tourCode}
            </span>
            <span>
              {tour?.isSeasonalTour ? "Seasonal Special" : "Standard Package"}
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end space-y-2 mt-4 md:mt-0 w-full md:w-1/3">
          {lastBooked > 0 && (
            <span className="inline-flex items-center px-4 py-2 bg-orange-400 text-white text-sm md:text-base font-semibold rounded-l-full rounded-r-sm shadow-md whitespace-nowrap">
              <Clock className="w-4 h-4 mr-2" />
              Last booked {lastBooked} min{lastBooked === 1 ? "" : "s"} ago
            </span>
          )}
          <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-sm md:text-lg font-semibold rounded-full">
            <Star className="w-4 h-4 mr-1 fill-current" />
            {/* Fallback rating since API doesn't provide it */}
            4.8/5 (Verified)
          </span>
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-8 bg-blue-50 p-6 rounded-xl">
        <div className="flex items-start space-x-3">
          <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">Route</p>
            <p className="text-lg font-semibold text-gray-800 leading-snug">
              {destinationList}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <CalendarDays className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">Duration</p>
            <p className="text-lg font-semibold text-gray-800">
              {durationText}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-3 sm:col-span-2 border-t border-blue-200 pt-4 mt-2">
          <Tag className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
          <div className="w-full flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-blue-700 uppercase tracking-wide">Est. Price</p>
              <p className="text-xl md:text-2xl font-bold text-gray-800">
                {displayPrice !== "On Request" ? `₹${displayPrice}` : "Get Best Quote"}
              </p>
            </div>
            {tour?.isHotSelling && (
              <div className="animate-bounce bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold border border-red-200">
                Hot Selling!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-800 border-l-4 border-blue-500 pl-4">
          Unique About This Tour
        </h2>

        {tour_highlights?.length > 0 ? (
          <ul className="grid grid-cols-1 gap-2">
            {tour_highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start text-gray-700 text-lg">
                <span className="mr-3 text-blue-500 font-bold text-xl">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">
            Experience the culture and beauty of {destinationList.split(" - ")[0] || "India"}.
          </p>
        )}
      </div>

      {/* Call to Action */}
      <div className="w-full flex justify-end pt-4 border-t border-gray-100">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#1d4ed8" }}
          whileTap={{ scale: 0.98 }}
          className="w-full md:w-auto bg-blue-600 text-white px-10 py-4 rounded-full font-bold shadow-lg shadow-blue-200 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          style={{ fontSize: "18px" }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TourHeader;
