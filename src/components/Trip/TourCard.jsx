// "use client";

// import React from "react";

// import { useRouter } from "next/navigation";

// const TourCard = ({ tour }) => {
//   const router = useRouter();

//   const imageUrl =
//     tour.tour_images?.[0]?.secure_url || "/images/placeholder.jpg";

//   const ratingOutOfFive = ((tour.popularity_score || 0) / 100) * 5;

//   const handleViewDetails = (e) => {
//     e.preventDefault();

//     router.push(`/trip/${tour.id}`);
//   };

//   const handleCustomize = (e) => {
//     e.preventDefault();
//     router.push("/customize-tour");
//   };

//   return (
//     <div className="box-style__1 rt-mb-30">
//       <div className="hotel-inner-content row">
//         <div className="hotel-thumb col-md-3 mb-5 mb-md-0">
//           <div
//             className="hotel-bg rtbgprefix-cover"
//             style={{ backgroundImage: `url(${imageUrl})` }}
//           >
//             {tour.is_hot_selling && (
//               <div className="inaner-badge">
//                 <span className="bg-gradient-primary text-white text-capitalize rt-pl-10 rt-pr-10 rt-pt-5 rt-pb-5">
//                   Hot Selling
//                 </span>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="hotel-text col-md-9">
//           {}
//           <div className="top">
//             <h5>
//               {tour.tour_name}
//               <span className="ml-2">
//                 <i className="icofont-star review"></i>
//                 <i className="icofont-star review"></i>
//                 <i className="icofont-star review"></i>
//                 <i className="icofont-star review"></i>
//                 <i className="icofont-star"></i>
//               </span>
//             </h5>
//             <p>{tour.tour_caption}</p>
//           </div>
//           <div className="middle-text d-md-flex justify-content-md-between rt-mt-20">
//             <div className="left_column">
//               <span className="rt-gradinet-badge pill text-xl">
//                 {ratingOutOfFive.toFixed(1)}/5
//               </span>
//               <span className="primary-color text-2xl px-2">Popular</span>
//               <span className="text-555 f-size-16 d-block rt-mt-15">
//                 <span className="rt-mr-15">
//                   <i className="icofont-globe primary-color rt-mr-4 text-3xl"></i>
//                   {tour.destination?.destination_type}
//                 </span>
//                 <span>
//                   <i className="icofont-clock-time primary-color rt-mr-4 text-3xl"></i>
//                   {tour.tour_duration_type}
//                 </span>
//               </span>
//             </div>
//             <div className="right_column text-left text-md-right">
//               {tour.isDiscount ? (
//                 <div>
//                   <span className="d-block text-primary f-size-24 rt-semiblod title-font">
//                     ₹{tour.discounted_price.toLocaleString("en-IN")}
//                   </span>
//                   <span className="d-block f-size-12 text-gray-500 line-through">
//                     ₹{tour.original_price.toLocaleString("en-IN")}
//                   </span>
//                 </div>
//               ) : (
//                 <span className="d-block text-primary f-size-24 rt-semiblod title-font">
//                   ₹{tour.original_price.toLocaleString("en-IN")}
//                 </span>
//               )}
//               <span className="d-block f-size-12 text-878">Per Person</span>
//             </div>
//           </div>

//           <div className="footer-elements d-flex justify-content-between align-items-center align-items-end">
//             <div className="left text-xl">
//               {}
//               <a href="" onClick={handleCustomize}>
//                 Customize & Request
//               </a>
//             </div>
//             <div className="right">
//               <a
//                 href=""
//                 onClick={handleViewDetails}
//                 className="rt-btn rt-gradient pill rt-sm3 text-uppercase"
//               >
//                 View Details
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TourCard;

"use client"
import Image from "next/image";
import Link from "next/link";
import {useRouter } from "next/navigation";

const TourCard = ({ tour }) => {
  const router = useRouter();
  const coverImage = tour.coverPhotoUrl || "/images/placeholder-tour.jpg";

  return (
    // MAIN CONTAINER: Changed to flex-row (side by side) on desktop
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group">
      {/* IMAGE SECTION (Left Side) */}
      <div className="relative h-56 md:h-auto md:w-72 shrink-0 overflow-hidden">
        <Image
          src={coverImage}
          alt={tour.tourName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 300px"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {tour.isHotSelling && (
            <span className="bg-red-600/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-md shadow-sm">
              HOT SELLING
            </span>
          )}
          {tour.isQuickEscape && (
            <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-md shadow-sm">
              QUICK ESCAPE
            </span>
          )}
        </div>
      </div>

      {/* CONTENT SECTION (Right Side) */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Top Info */}
        <div>
          <div className="flex items-center gap-3 text-md font-medium text-gray-500 mb-2">
            <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
              {tour.tourType.name}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="uppercase tracking-wide">
              {tour.isDomestic ? "Domestic" : "International"}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
            {tour.tourName}
          </h3>

          <p className="text-sm text-gray-500 mb-4">
            Tour Code:{" "}
            <span className="font-mono text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
              {tour.tourCode}
            </span>
          </p>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-gray-100 pt-4 mt-2">
          {/* Best Deal Badge */}
          <div className="flex flex-col">
            {tour.isHotSelling && (
              <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                Best Deal Available
              </span>
            )}
          </div>

          {/* Button with Router Push */}
          <button
            onClick={() => router.push(`/trip/${tour.id}`)}
            className="
        inline-flex items-center justify-center 
        bg-blue-600 hover:bg-blue-700 active:bg-blue-800 
        text-white font-medium text-sm 
        px-6 py-2.5 rounded-lg 
        shadow-md hover:shadow-lg 
        transition-all duration-200 
        active:scale-95 
        focus:outline-none focus:ring-4 focus:ring-blue-300
      "
          >
            <span>View Details</span>
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
