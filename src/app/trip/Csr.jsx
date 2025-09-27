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

const Csr = () => {
  const dispatch = useDispatch();

  const tours = useSelector((state) => state.tours.tours);

  const { mutate, isPending } = useMutation({
    mutationFn: () => ToursService.fetchTours(),
    onSuccess: (data) => {
      dispatch(setTours(data));
    },
    onError: (error) => {
      console.error("Failed to fetch tours:", error);
    },
  });

  useEffect(() => {
    if (tours.length === 0) {
      mutate();
    }
  }, [mutate, tours.length]);

  return (
    <section className="content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mx-auto col-md-7 mb-5 mb-lg-0">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <FilterBar />

            {}
            {isPending ? (
              <LoadingSpinner />
            ) : tours.length > 0 ? (
              tours.map((tour) => <TourCard key={tour.id} tour={tour} />)
            ) : (
              <div className="text-center py-10">
                <h4 className="text-xl">No Tours Found</h4>
                <p className="text-gray-600">
                  Please try again later or adjust your filters.
                </p>
              </div>
            )}

            {}
            {!isPending && tours.length > 0 && (
              <nav aria-label="Page navigation example" className="mt-8">
                <ul className="pagination rt-paganation justify-content-center">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="icofont-rounded-double-left"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      <i className="icofont-rounded-double-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Csr;
