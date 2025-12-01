"use client"
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ClipLoader } from "react-spinners";
import ToursService from "@/Redux/feature/tours/tourAction";

import "swiper/css";
import "swiper/css/pagination";

const Service = () => {
  const [tours, setTours] = useState([]);

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: () => ToursService.fetchHotSellingTour(),
    onSuccess: (data) => {
      setTours(data);
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

  if (isPending) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <ClipLoader color={"#f59e0b"} loading={isPending} size={100} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[500px]">
        <p className="text-red-500 text-2xl">Error: {error.message}</p>
      </div>
    );
  }

  const hotSellingTours = tours.filter((tour) => tour.is_hot_selling);

  return (
    <section
      className="emigr-services-area rtbgprefix-contain py-16"
      style={{ backgroundImage: "url('/images/backgrounds/dotbg.png')" }}
    >
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-lg-8 text-center mx-auto">
            <div className="rt-section-title-wrapper mb-12">
              <p className=" text-blue-600 font-bold text-lg">WHY Choose Our Travel Agency?    </p>
              <h2 className="rt-section-title text-4xl font-bold">
                Our Hot Selling Tours              </h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                From the moment you connect with us until you return home with
                cherished memories, our dedicated team takes care of every
                detail—so you can simply relax and enjoy the adventure.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="h-full w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {hotSellingTours.map((tour) => (
                <SwiperSlide key={tour.id}>
                  <div className="relative max-w-lg bg-white border border-gray-200 rounded-2xl shadow-2xl dark:bg-gray-800 dark:border-gray-700 mx-auto my-8 overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <a href={`/tour/detail/${tour.tour_slug}`}>
                      <img
                        className="rounded-t-2xl h-[450px] w-full object-cover"
                        src={
                          tour.tour_images[0]?.secure_url ||
                          "/images/placeholder.jpg"
                        }
                        alt={tour.tour_name}
                      />
                    </a>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 p-8 w-full">
                      <a href={`/tour/detail/${tour.tour_slug}`}>
                        <h5 className="!text-4xl font-extrabold text-white tracking-tight truncate">
                          {tour.tour_name}
                        </h5>
                      </a>
                      <a
                        href={`/tour/detail/${tour.tour_slug}`}
                        className=" text-2xl mt-6 inline-flex items-center px-6 py-3  font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-full hover:from-blue-500 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-all duration-300"
                      >
                        View Details
                        <svg
                          className="w-5 h-5 ml-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;