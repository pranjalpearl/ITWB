
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const TourListSection = ({ title, items }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg border border-blue-100"
  >
    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 flex items-center">
      <CheckCircle className="w-8 h-8 text-green-500 mr-2" />
      {title}
    </h2>
    <ul className=" pl-6 space-y-4 text-gray-700">
      {items.map((item, idx) => (
        <motion.li
          key={idx}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 text-3xl hover:bg-green-50 hover:rounded-lg hover:shadow-md transition-all duration-300 p-2"
        >
          {item}
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default TourListSection;
