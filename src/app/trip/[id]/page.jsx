// "use client";
// import { useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import { useParams } from "next/navigation";
// import Breadcrumb from "@/components/common/Breadcrumb";
// import TourHeader from "@/components/TripDetails/TourHeader";
// import TourImageSlider from "@/components/TripDetails/TourImageSlider";
// import TourHighlights from "@/components/TripDetails/TourHighlights";
// import TourItinerary from "@/components/TripDetails/TourItinerary";
// import TourListSection from "@/components/TripDetails/TourListSection";
// import { useEffect, useState } from "react";
// import ToursService from "@/Redux/feature/tours/tourAction";
// import { useMutation } from "@tanstack/react-query";

// const TourDetails = () => {
//   const { id } = useParams();
//   const tours = useSelector((state) => state.tours.tours);
//   const tour = tours?.find((t) => t.id == id);

//   const [tourData, setToursDataById] = useState(null)
//   const tourID = "8d90660e-b215-422b-a691-1c0507404b21"

//   const { mutate, isPending, isError, error } = useMutation({
//     mutationFn: () => ToursService.fetchTourById(tourID),
//     onSuccess: (data) => {
//       // Access the 'tours' array from the response object
//       setToursDataById(data.tours || []);
//       console.log(tourData, "tours data set");
//     },
//     onError: (error) => {
//       console.error("Failed to fetch tours:", error);
//     },
//   });

//   useEffect(() => {
//     mutate();
//   }, [])

//   // const us

//   if (!tourData) {
//     return (
//       <div className="flex justify-center items-center h-screen text-blue-600">
//         Loading...
//       </div>
//     );
//   }

//   const [activeTab, setActiveTab] = useState("tour-highlights");

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "tour-highlights":
//         return <TourHighlights highlights={tour.tour_highlights} />;
//       case "itinerary":
//         return <TourItinerary itinerary={tour.itinerary} />;
//       case "inclusions":
//         return <TourListSection title="Inclusions" items={tour.inclusions} />;
//       case "exclusions":
//         return <TourListSection title="Exclusions" items={tour.exclusions} />;
//       case "accommodation":
//         return (
//           <TourListSection title="Accommodation" items={tour.accommodation} />
//         );
//       case "transport":
//         return <TourListSection title="Transport" items={tour.transport} />;
//       case "notice":
//         return <TourListSection title="Notice" items={tour.notice} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       <Breadcrumb
//         items={[
//           { name: "Home", link: "/" },
//           { name: "Trip", link: "/trip" },
//           { name: "Trip Details" },
//         ]}
//         showSearch={false}
//       />

//       <div className="min-h-screen w-full">
//         { }
//         <motion.section
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="px-20"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
//             <TourImageSlider tour={tour} />
//             <TourHeader tour={tour} />
//           </div>
//         </motion.section>

//         { }
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className=" px-20 py-6 mt-4"
//         >
//           <div className="bg-white p-3 !rounded-lg shadow-md border border-blue-200 flex justify-around items-center">
//             {[
//               "tour-highlights",
//               "itinerary",
//               "inclusions",
//               "exclusions",
//               "accommodation",
//               "transport",
//               "notice",
//             ].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 style={{
//                   fontSize: "16px"
//                 }}
//                 className={`px-6 py-4 !rounded-full font-medium transition-all duration-300 ${activeTab === tab
//                   ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
//                   : "text-gray-600 hover:bg-gray-100"
//                   }`}
//               >
//                 {tab
//                   .split("-")
//                   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//                   .join(" ")}
//               </button>
//             ))}
//           </div>
//         </motion.section>

//         { }
//         <motion.section
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="container mx-auto px-4 py-12"
//         >
//           <div className="bg-white p-8 rounded-lg shadow-xl border border-blue-200">
//             {renderTabContent()}
//           </div>
//         </motion.section>
//       </div>
//     </>
//   );
// };

// export default TourDetails;


// // import React from 'react'

// // const page = () => {
// //   return (
// //     <div>comming soon</div>
// //   )
// // }

// // export default page


"use client";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/common/Breadcrumb";
import TourHeader from "@/components/TripDetails/TourHeader";
import TourImageSlider from "@/components/TripDetails/TourImageSlider";
import TourHighlights from "@/components/TripDetails/TourHighlights";
import TourItinerary from "@/components/TripDetails/TourItinerary";
import TourListSection from "@/components/TripDetails/TourListSection";
import { useEffect, useState, useMemo } from "react";
import ToursService from "@/Redux/feature/tours/tourAction";
import { useMutation } from "@tanstack/react-query";

const TourDetails = () => {
  const { id } = useParams();

  // Local state for the fetched tour data
  const [tourData, setTourData] = useState(null);
  const [activeTab, setActiveTab] = useState("tour-highlights");

  // Fetching Logic
  const { mutate, isPending } = useMutation({
    // Use the ID from useParams, fallback to hardcoded only for testing if needed
    mutationFn: () => ToursService.fetchTourById(id || "8d90660e-b215-422b-a691-1c0507404b21"),
    onSuccess: (response) => {
      // FIX: Based on your JSON structure, the path is response.data.tour
      if (response?.data?.tour) {
        setTourData(response.data.tour);
      } else {
        console.error("Structure mismatch:", response);
      }
    },
    onError: (error) => {
      console.error("Failed to fetch tour:", error);
    },
  });

  useEffect(() => {
    if (id) {
      mutate();
    }
  }, [id, mutate]);

  // DATA MAPPING / TRANSFORMATION
  // This converts the raw API structure into clean props for your child components
  const mappedTour = useMemo(() => {
    if (!tourData) return null;

    // 1. Map Itinerary
    const itinerary = tourData.days?.sort((a, b) => a.order - b.order).map((day) => ({
      day: day.order,
      title: `${day.sectors.from.destName} to ${day.sectors.to.destName}`,
      description: `Travel from ${day.sectors.from.destName} via ${day.transport.type}.`,
      monuments: day.monuments, // Pass full monument objects
      meals: day.meals,
      hotel: day.hotel,
      image: day.monuments?.[0]?.image || tourData.coverPhotoUrl // Fallback image
    })) || [];

    // 2. Derive Highlights (e.g., Unique Monuments & Destinations)
    const highlights = [];
    tourData.days?.forEach(day => {
      // Add Destination
      if (day.sectors.to.destName) highlights.push(`Visit ${day.sectors.to.destName}`);
      // Add Monuments
      day.monuments?.forEach(mon => highlights.push(mon.name));
    });

    // 3. Derive Accommodation List
    const accommodation = tourData.days
      ?.filter(day => day.hotel)
      .map(day => `${day.hotel.name} (${day.hotel.destination}) - ${day.hotel.star_rating} Star`)
      || [];

    // 4. Derive Transport List
    const transport = tourData.days
      ?.map(day => `${day.transport.type} (${day.sectors.from.destName} to ${day.sectors.to.destName})`)
      || [];

    // 5. Derive Inclusions (Example logic based on data presence)
    const inclusions = [
      ...new Set(tourData.days?.map(d => `Stay at ${d.hotel?.name || 'Selected Hotels'}`)),
      "Daily Breakfast (as per hotel policy)",
      "All transfers and sightseeing by private vehicle",
      "Toll, parking, and driver allowance"
    ];

    // 6. Exclusions (Static or derived if API had a field)
    const exclusions = [
      "Airfare / Train fare",
      "Personal expenses",
      "Monument entry fees",
      "Anything not mentioned in inclusions"
    ];

    return {
      ...tourData,
      itinerary, // Formatted itinerary
      tour_highlights: [...new Set(highlights)], // Remove duplicates
      accommodation: [...new Set(accommodation)],
      transport: [...new Set(transport)],
      inclusions,
      exclusions,
      notice: ["Please carry valid ID proof", "Check-in time is 12:00 PM"] // Static placeholder
    };
  }, [tourData]);

  if (isPending || !mappedTour) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-600">
        Loading Tour Details...
      </div>
    );
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "tour-highlights":
        return <TourHighlights highlights={mappedTour.tour_highlights} />;
      case "itinerary":
        return <TourItinerary itinerary={mappedTour.itinerary} />;
      case "inclusions":
        return <TourListSection title="Inclusions" items={mappedTour.inclusions} />;
      case "exclusions":
        return <TourListSection title="Exclusions" items={mappedTour.exclusions} />;
      case "accommodation":
        return <TourListSection title="Accommodation" items={mappedTour.accommodation} />;
      case "transport":
        return <TourListSection title="Transport" items={mappedTour.transport} />;
      case "notice":
        return <TourListSection title="Notice" items={mappedTour.notice} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          { name: "Home", link: "/" },
          { name: "Trip", link: "/trip" },
          { name: "Trip Details" },
        ]}
        showSearch={false}
      />

      <div className="min-h-screen w-full">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 md:px-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* Pass mapped data or raw data depending on what component expects */}
            <TourImageSlider tour={mappedTour} />
            <TourHeader tour={mappedTour} />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 md:px-20 py-6 mt-4"
        >
          <div className="bg-white p-3 !rounded-lg shadow-md border border-blue-200 flex flex-wrap gap-2 justify-around items-center">
            {[
              "tour-highlights",
              "itinerary",
              "inclusions",
              "exclusions",
              // "accommodation",
              "transport",
              "notice",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 md:px-6 md:py-4 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${activeTab === tab
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {tab
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="container mx-auto px-4 py-12"
        >
          <div className="bg-white p-8 rounded-lg shadow-xl border border-blue-200">
            {renderTabContent()}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default TourDetails;