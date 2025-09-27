
import { motion } from 'framer-motion';
import { Calendar, MapPin, Bed, Utensils, DollarSign } from 'lucide-react';

const TourItinerary = ({ itinerary }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 flex items-center">
      <Calendar className="w-8 h-8 text-yellow-500 mr-2" />
      Itinerary
    </h2>
    <div className="relative">
      
      <div className="absolute left-4 top-0 bottom-0 w-1 bg-blue-300 rounded-full transform translate-x-1/2" />
      {itinerary.map((day, dayIdx) => (
        <motion.div
          key={dayIdx}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: dayIdx * 0.1, duration: 0.5 }}
          className="relative pl-12 mb-8 last:mb-0 text-2xl"
        >
          {/* Day Circle */}
          <div className="absolute left-0 transform -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold ">
            {dayIdx + 1}
          </div>
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Day {dayIdx + 1}</h3>

          {/* Mode */}
          {day.mode && (
            <p className="flex items-center text-gray-700 mb-3">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span>
                <strong>Mode : </strong> From {day.mode.from} to {day.mode.to} (
                {day.mode.type}, Fare : ₹{day.mode.fare})
              </span>
            </p>
          )}
          {/* Sector */}
          {day.sector && (
            <p className="flex items-center text-gray-700 mb-3">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span>
                <strong>Sector : </strong> From {day.sector.from} to {day.sector.to} via{" "}
                {day.sector.via}
              </span>
            </p>
          )}
          {/* Sightseeing */}
          {day.sightseeing && (
            <div className="text-gray-700 mb-3">
              <p className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <strong>Sightseeing : </strong> {day.sightseeing.location}, {day.sightseeing.country}
              </p>
              <ul className="list-none pl-6 space-y-2 mt-2">
                {day.sightseeing.places.map((place, pIdx) => (
                  <li key={pIdx} className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                    {place}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* Hotel */}
          {day.hotel && (
            <p className="flex items-center text-gray-700 mb-3">
              <Bed className="w-5 h-5 text-blue-600 mr-2" />
              <span>
                <strong>Hotel : </strong> {day.hotel.selectedHotel} (Rate: ₹{day.hotel.rate}, Meal Plan:{" "}
                {day.hotel.mealPlan})
              </span>
            </p>
          )}
          {/* Meals */}
          {day.meals && (
            <div className="text-gray-700 mb-3">
              <p className="flex items-center">
                <Utensils className="w-5 h-5 text-blue-600 mr-2" />
                <strong>Meals : </strong>
              </p>
              <ul className="list-none pl-6 space-y-2 mt-2">
                <li className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                  Breakfast : {day.meals.breakfast.type} (₹{day.meals.breakfast.rate})
                </li>
                <li className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                  Lunch : {day.meals.lunch.type} (₹{day.meals.lunch.rate})
                </li>
                <li className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                  Dinner : {day.meals.dinner.type} (₹{day.meals.dinner.rate})
                </li>
                {day.meals.extra?.type && (
                  <li className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                    Extra :  {day.meals.extra.type} (₹{day.meals.extra.rate})
                  </li>
                )}
              </ul>
            </div>
          )}
          {/* Other Expenses */}
          {day.otherExpenses?.length > 0 && (
            <div className="text-gray-700">
              <p className="flex items-center">
                <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
                <strong>Other Expenses : </strong>
              </p>
              <ul className="list-none pl-6 space-y-2 mt-2">
                {day.otherExpenses.map((exp, eIdx) => (
                  <li key={eIdx} className="flex items-center before:content-['•'] before:text-blue-600 before:mr-2">
                    {exp.type}: ₹{exp.amount} - {exp.description}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default TourItinerary;
