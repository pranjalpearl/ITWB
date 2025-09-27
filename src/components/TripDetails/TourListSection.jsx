const TourListSection = ({ title, items }) => (
  <>
    <h2 className="text-3xl font-semibold text-blue-800 mt-8 mb-6">{title}</h2>
    <ul className="list-disc pl-6 space-y-2 text-gray-700">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default TourListSection;
