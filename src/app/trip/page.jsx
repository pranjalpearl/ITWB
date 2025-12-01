// "use client";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useMutation } from "@tanstack/react-query";

// import ToursService from "@/Redux/feature/tours/tourAction";
// import { setTours } from "@/Redux/feature/tours/tourSlice";
// import Sidebar from "@/components/Trip/Sidebar";
// import FilterBar from "@/components/Trip/FilterBar";
// import TourCard from "@/components/Trip/TourCard";
// import LoadingSpinner from "@/components/common/LoadingSpinner";
// import Breadcrumb from "@/components/common/Breadcrumb";

// const tripPage = () => {
//   const dispatch = useDispatch();

//   const tours = useSelector((state) => state.tours.tours);

//   const { mutate, isPending } = useMutation({
//     mutationFn: () => ToursService.fetchTours(),
//     onSuccess: (data) => {

  
//       dispatch(setTours(data.tours));
//     },
//     onError: (error) => {
//       console.error("Failed to fetch tours:", error);
//     },
//   });

//   useEffect(() => {
//     if (tours.length === 0) {
//       mutate();
//     }
//   }, [mutate, tours.length]);

//   return (
//     <section className="content-area">
//       <Breadcrumb
//         items={[{ name: "Home", link: "/" }, { name: "Trip Package" }]}
//         showSearch={true}
//       />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-3 mx-auto col-md-7 mb-5 mb-lg-0">
//             <Sidebar />
//           </div>
//           <div className="col-lg-9">
//             <FilterBar />

            
//             {isPending ? (
//               <LoadingSpinner />
//             ) : tours.length > 0 ? (
//               tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
//             ) : (
//               <div className="text-center py-10">
//                 <h4 className="text-xl">No Tours Found</h4>
//                 <p className="text-gray-600">
//                   Please try again later or adjust your filters.
//                 </p>
//               </div>
//             )}

            
//             {!isPending && tours.length > 0 && (
//               <nav aria-label="Page navigation example" className="mt-8">
//                 <ul className="pagination rt-paganation justify-content-center">
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       <i className="icofont-rounded-double-left"></i>
//                     </a>
//                   </li>
//                   <li className="page-item active">
//                     <a className="page-link" href="#">
//                       01
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       02
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       03
//                     </a>
//                   </li>
//                   <li className="page-item">
//                     <a className="page-link" href="#">
//                       <i className="icofont-rounded-double-right"></i>
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default tripPage;


"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import ToursService from "@/Redux/feature/tours/tourAction";
import { setTours } from "@/Redux/feature/tours/tourSlice";
import Sidebar from "@/components/Trip/Sidebar";
import FilterBar from "@/components/Trip/FilterBar";
import TourCard from "@/components/Trip/TourCard";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import Breadcrumb from "@/components/common/Breadcrumb";

const TripPage = () => {
  const dispatch = useDispatch();
  const tours = useSelector((state) => state.tours.tours || []);

  const { mutate, isPending } = useMutation({
    mutationFn: () => ToursService.fetchTours(),
    onSuccess: (response) => {
      const toursList = response.data?.tours || response.tours || [];
      dispatch(setTours(toursList));
    },
    onError: (error) => {
      console.error("Failed to fetch tours:", error);
    },
  });

  useEffect(() => {
    if (tours.length === 0) {
      mutate();
    }
  }, []);

  return (
    <section className="content-area">
      <Breadcrumb
        items={[{ name: "Home", link: "/" }, { name: "Trip Package" }]}
        showSearch={true}
      />

      <div className="container">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mx-auto col-md-7 mb-5 mb-lg-0">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <FilterBar />

            {/* Loading State */}
            {isPending ? (
              <div className="flex justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : tours.length > 0 ? (
              // UPDATED: Changed from grid to flex-col for list view
              <div className="flex flex-col gap-6">
                {tours.map((tour) => (
                  <TourCard key={tour.id} tour={tour} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h4 className="text-2xl font-semibold text-gray-800">No Tours Found</h4>
                <p className="text-gray-600 mt-2">
                  Try adjusting your filters or search for different packages.
                </p>
              </div>
            )}

            {/* Pagination */}
            {!isPending && tours.length > 0 && (
              <nav aria-label="Page navigation" className="mt-12">
                <ul className="flex justify-center space-x-2">
                  <li><a href="#" className="px-4 py-2 border rounded-lg hover:bg-gray-100">«</a></li>
                  <li><a href="#" className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</a></li>
                  <li><a href="#" className="px-4 py-2 border rounded-lg hover:bg-gray-100">2</a></li>
                  <li><a href="#" className="px-4 py-2 border rounded-lg hover:bg-gray-100">»</a></li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPage;