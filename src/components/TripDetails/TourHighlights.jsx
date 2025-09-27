const TourHighlights = ({ highlights }) => (
  <>
    <h2 className="text-3xl font-semibold text-blue-800 mb-6">
      Tour Highlights
    </h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {highlights.map((highlight, idx) => (
        <li key={idx}>{highlight}</li>
      ))}
    </ul>
  </>
);

export default TourHighlights;
