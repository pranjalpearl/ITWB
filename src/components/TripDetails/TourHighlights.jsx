
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TourHighlights = ({ highlights }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
      <Star className="w-8 h-8 text-yellow-500 mr-2" />
      Tour Highlights
    </h2>
    <div className="list-none pl-6 space-y-4 text-gray-700 text-4xl">
      {highlights.map((highlight, idx) => (
        <motion.li
          key={idx}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="relative  before:absolute before:left-0 before:top-2 before:w-2 before:h-2  hover:bg-blue-50 hover:rounded-lg hover:shadow-md transition-all duration-300 p-2"
        >
          {highlight}
        </motion.li>
      ))}
    </div>
  </motion.div>
);

export default TourHighlights;
