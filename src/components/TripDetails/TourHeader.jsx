import { motion } from "framer-motion";
import { MapPin, Clock, Star, Tag } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TourHeader = ({ tour }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [lastBooked, setLastBooked] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setLastBooked((prev) =>
        prev > 0 ? prev - 1 : Math.floor(Math.random() * 60)
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className=" p-8 rounded-2xl shadow-2xl border border-blue-200"
    >
      {}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
            {tour.tour_name}
          </h1>
          <p className="text-lg text-blue-700 italic mb-4">
            {tour.tour_caption}
          </p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          {lastBooked > 0 && (
            <span className="inline-flex items-center px-4 py-2 bg-orange-400 text-white text-xl font-semibold rounded-l-full rounded-r-sm shadow-md">
              Last booked {lastBooked} min{lastBooked === 1 ? "" : "s"} ago
            </span>
          )}
          <span className="inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xl font-semibold rounded-full">
            <Star className="w-4 h-4 mr-1" /> {tour.popularity_score / 10}/5 (86
            Reviews)
          </span>
        </div>
      </div>

      {}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="flex items-center space-x-3">
          <MapPin className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-blue-700">Destination</p>
            <p className="text-lg font-semibold text-gray-800">
              {tour.destination.destination_name} (
              {tour.destination.destination_type})
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Clock className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-blue-700">Duration</p>
            <p className="text-lg font-semibold text-gray-800">
              {tour.tour_duration.join(", ")} {tour.tour_duration_type}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Tag className="w-6 h-6 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-blue-700">Pricing</p>
            <p className="text-lg font-semibold text-gray-800">
              {tour.isDiscount ? (
                <>
                  <span className="line-through text-gray-500 mr-2">
                    ₹{tour.original_price}
                  </span>
                  <span className="text-green-600">
                    ₹{tour.discounted_price} ({tour.discount_percent}% off)
                  </span>
                </>
              ) : (
                <span>₹{tour.original_price}</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {}
      <div className="mb-8">
        <h2 className="text-4xl font-semibold mb-3">Unique About This Tour</h2>
        <ul className="list-disc text-2xl pl-6 space-y-2 text-gray-700">
          {tour.tour_highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
          <li>Walking along the Banyan Lake and Cedar Lake in Guilin</li>
          <li>Boat cruise on the picturesque Li River to Yangshuo</li>
        </ul>
      </div>

      {}
      <div className="w-full h-auto flex justify-end">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 !rounded-full font-semibold hover:bg-blue-700 transition duration-300 shadow-lg"
          style={{ fontSize: "20px" }}
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default TourHeader;
