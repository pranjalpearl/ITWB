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
import { useState } from "react";

const TourDetails = () => {
  const { id } = useParams();
  const tours = useSelector((state) => state.tours.tours);
  const tour = tours?.find((t) => t.id == id);

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-600">
        Loading...
      </div>
    );
  }

  const [activeTab, setActiveTab] = useState("tour-highlights");

  const renderTabContent = () => {
    switch (activeTab) {
      case "tour-highlights":
        return <TourHighlights highlights={tour.tour_highlights} />;
      case "itinerary":
        return <TourItinerary itinerary={tour.itinerary} />;
      case "inclusions":
        return <TourListSection title="Inclusions" items={tour.inclusions} />;
      case "exclusions":
        return <TourListSection title="Exclusions" items={tour.exclusions} />;
      case "accommodation":
        return (
          <TourListSection title="Accommodation" items={tour.accommodation} />
        );
      case "transport":
        return <TourListSection title="Transport" items={tour.transport} />;
      case "notice":
        return <TourListSection title="Notice" items={tour.notice} />;
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
        {}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <TourImageSlider tour={tour} />
            <TourHeader tour={tour} />
          </div>
        </motion.section>

        {}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" px-20 py-6 mt-4"
        >
          <div className="bg-white p-3 !rounded-lg shadow-md border border-blue-200 flex justify-around items-center">
            {[
              "tour-highlights",
              "itinerary",
              "inclusions",
              "exclusions",
              "accommodation",
              "transport",
              "notice",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  fontSize:"16px"
                }}
                className={`px-6 py-4 !rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab
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

        {}
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
