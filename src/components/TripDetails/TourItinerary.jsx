const TourItinerary = ({ itinerary }) => (
  <>
    <h2 className="text-3xl font-semibold text-blue-800 mt-8 mb-6">Itinerary</h2>
    {itinerary.map((day, dayIdx) => (
      <div key={dayIdx} className="mb-6 border-b pb-4 border-blue-100">
        <h3 className="text-2xl font-medium text-blue-700">Day {dayIdx + 1}</h3>

        {day.mode && (
          <p className="mt-2 text-gray-700">
            <strong>Mode:</strong> From {day.mode.from} to {day.mode.to} (
            {day.mode.type}, Fare: ${day.mode.fare})
          </p>
        )}
        {day.sector && (
          <p className="mt-2 text-gray-700">
            <strong>Sector:</strong> From {day.sector.from} to {day.sector.to} via{" "}
            {day.sector.via}
          </p>
        )}
        {day.sightseeing && (
          <div className="mt-2 text-gray-700">
            <p>
              <strong>Sightseeing:</strong> {day.sightseeing.location},{" "}
              {day.sightseeing.country}
            </p>
            <ul className="list-disc pl-6">
              {day.sightseeing.places.map((place, pIdx) => (
                <li key={pIdx}>{place}</li>
              ))}
            </ul>
          </div>
        )}
        {day.hotel && (
          <p className="mt-2 text-gray-700">
            <strong>Hotel:</strong> {day.hotel.selectedHotel} (Rate: ${day.hotel.rate}, Meal Plan:{" "}
            {day.hotel.mealPlan})
          </p>
        )}
        {day.meals && (
          <div className="mt-2 text-gray-700">
            <p><strong>Meals:</strong></p>
            <ul className="list-disc pl-6">
              <li>Breakfast: {day.meals.breakfast.type} (${day.meals.breakfast.rate})</li>
              <li>Lunch: {day.meals.lunch.type} (${day.meals.lunch.rate})</li>
              <li>Dinner: {day.meals.dinner.type} (${day.meals.dinner.rate})</li>
              {day.meals.extra?.type && (
                <li>Extra: {day.meals.extra.type} (${day.meals.extra.rate})</li>
              )}
            </ul>
          </div>
        )}
        {day.otherExpenses?.length > 0 && (
          <div className="mt-2 text-gray-700">
            <p><strong>Other Expenses:</strong></p>
            <ul className="list-disc pl-6">
              {day.otherExpenses.map((exp, eIdx) => (
                <li key={eIdx}>{exp.type}: ${exp.amount} - {exp.description}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    ))}
  </>
);

export default TourItinerary;
