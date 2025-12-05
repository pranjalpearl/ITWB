// // components/SearchModal.js
// import React from 'react';

// const SearchModal = ({ isOpen, onClose, searchParams }) => {
//     if (!isOpen) return null;

//     return (
//         <div
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 backgroundColor: 'rgba(0,0,0,0.5)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 zIndex: 9999
//             }}
//         >
//             <div
//                 style={{
//                     background: '#fff',
//                     padding: '30px',
//                     borderRadius: '8px',
//                     minWidth: '300px',
//                     textAlign: 'center',
//                     position: 'relative'
//                 }}
//             >
//                 <h3 style={{ marginBottom: '15px' }}>Coming Soon</h3>
//                 <div style={{ textAlign: 'left', marginBottom: '20px', fontSize: '14px', color: '#555' }}>
//                     <p><strong>Country ID:</strong> {searchParams.countryId || 'Not Selected'}</p>
//                     <p><strong>State ID:</strong> {searchParams.stateId || 'Not Selected'}</p>
//                     <p><strong>Tour Type:</strong> {searchParams.tourType || 'Not Selected'}</p>
//                 </div>

//                 <button
//                     onClick={onClose}
//                     className="btn btn-primary" // Assuming you have bootstrap or theme classes
//                     style={{ padding: '8px 20px', cursor: 'pointer' }}
//                 >
//                     Close
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default SearchModal;




import React, { useEffect, useState } from "react";
import instance from "@/utils/axiosInstance";

const SearchModal = ({ isOpen, onClose, searchParams }) => {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  const [selectedTour, setSelectedTour] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedTour(null);
      fetchTours();
    }
  }, [isOpen]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await instance.get(`/website-tour/get-tour-cst`, {
        params: searchParams,
      });
      setTours(response.data.data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const fetchTourDetails = async (id) => {
    setDetailsLoading(true);
    try {
      const res = await instance.get(`/website-tour/get-tour-by-id/${id}`);
      setSelectedTour(res.data.data.tour);
    } catch (err) {
      console.log(err);
    }
    setDetailsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-[9999] p-2 sm:p-8">
      <div className="bg-white w-full max-w-2xl sm:max-h-[85vh] overflow-auto rounded-xl shadow-2xl p-6 animate-fadeIn">

        {/* HEADER */}
        <div className="flex justify-between items-center pb-3 border-b">
          <h2 className="text-xl font-bold text-gray-700">
            {selectedTour ? "Tour Details" : "Available Tours"}
          </h2>
          <button onClick={onClose} className="text-red-600 text-xl font-bold hover:scale-110">
            ✖
          </button>
        </div>

        {/* FILTER INFO */}
        {!selectedTour && (
          <div className="text-sm mt-3 mb-4 bg-gray-100 p-3 rounded-md">
            <b>Country:</b> {searchParams.countryId} | 
            <b> State:</b> {searchParams.stateId} |
            <b> Type:</b> {searchParams.tourTypeId}
          </div>
        )}

        {/* LOADING */}
        {loading && <p className="text-center py-6 font-medium">⏳ Searching tours...</p>}
        {detailsLoading && <p className="text-center py-6 font-medium">⏳ Loading details...</p>}

        {/* NO TOURS */}
        {!loading && tours.length === 0 && !selectedTour && (
          <p className="text-center text-gray-500 py-4">❌ No Tours Found</p>
        )}

        {/* TOUR LIST */}
        {!loading && !selectedTour &&
          tours.map((tour) => (
            <div
              key={tour.id}
              className="border rounded-lg p-4 mb-3 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition"
            >
              <div>
                <h3 className="font-semibold text-lg">{tour.tourName}</h3>
                <p className="text-sm text-gray-500">{tour.tourCode}</p>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                  {tour.tourType?.name}
                </span>
              </div>

              <button
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                onClick={() => fetchTourDetails(tour.id)}
              >
                View →
              </button>
            </div>
          ))}

        {/* TOUR DETAILS PAGE */}
        {selectedTour && (
          <>
            {/* Cover Image */}
            <img
              src={selectedTour.coverPhotoUrl}
              className="w-full h-48 sm:h-60 object-cover rounded-lg shadow-md my-3"
            />

            {/* Title */}
            <h3 className="text-2xl font-bold">{selectedTour.tourName}</h3>
            <p className="text-gray-600 text-sm mb-2">Code: {selectedTour.tourCode}</p>

            {/* Description */}
            <p className="text-gray-700 my-3 leading-relaxed">
              {selectedTour.description}
            </p>

            {/* Gallery */}
            {selectedTour.images?.length > 0 && (
              <>
                <h4 className="font-bold text-lg mt-3">Gallery</h4>
                <div className="flex gap-2 overflow-x-auto py-2">
                  {selectedTour.images.map((img) => (
                    <img
                      key={img.id}
                      src={img.secureUrl}
                      className="h-24 w-32 object-cover rounded-md shadow-sm"
                    />
                  ))}
                </div>
              </>
            )}

            {/* Back Button */}
            <button
              className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full sm:w-auto"
              onClick={() => setSelectedTour(null)}
            >
              ← Back to List
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default SearchModal;
