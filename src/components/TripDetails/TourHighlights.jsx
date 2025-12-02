
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const TourHighlights = ({ highlights }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.6 }}
//     className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100"
//   >
//     <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 flex items-center">
//       <Star className="w-8 h-8 text-yellow-500 mr-2" />
//       Tour Highlights
//     </h2>
//     <div className="list-none pl-6 space-y-4 text-gray-700 text-4xl">
//       {highlights.map((highlight, idx) => (
//         <motion.li
//           key={idx}
//           initial={{ x: -20, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: idx * 0.1, duration: 0.5 }}
//           className="relative  before:absolute before:left-0 before:top-2 before:w-2 before:h-2  hover:bg-blue-50 hover:rounded-lg hover:shadow-md transition-all duration-300 p-2"
//         >
//           {highlight}
//         </motion.li>
//       ))}
//     </div>
//   </motion.div>
// );

// export default TourHighlights;


import { motion } from 'framer-motion';
import { Star, CheckCircle2, MapPin } from 'lucide-react';

const TourHighlights = ({ highlights }) => {
  // Safety check to prevent crash if highlights is undefined/null
  if (!highlights || highlights.length === 0) {
    return (
      <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center text-gray-500">
        No specific highlights available for this tour.
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-6 flex items-center">
        <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mr-3 fill-yellow-500" />
        Tour Highlights
      </h2>

      <ul className="space-y-4">
        {highlights.map((highlight, idx) => (
          <motion.li
            key={idx}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="flex items-start bg-white p-4 rounded-xl shadow-sm border border-blue-50 hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
          >
            {/* Conditional Icon: Map pin for 'Visit' items, Check for others */}
            <div className="mt-1 flex-shrink-0">
              {highlight.toLowerCase().includes("visit") ? (
                <MapPin className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              ) : (
                <CheckCircle2 className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              )}
            </div>

            <span className="ml-3 text-lg md:text-xl text-gray-700 font-medium leading-relaxed group-hover:text-blue-800 transition-colors">
              {highlight}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default TourHighlights;
