import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const TourImageSlider = ({ tour }) => {
  return (
    <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} bg-blue-500 w-3 h-3 rounded-full mx-1 transition-all duration-300"></span>`;
          },
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        effect="fade"
        className="w-full h-full"
      >
        {tour.tour_images.map((img) => (
          <SwiperSlide key={img.id}>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 5 }}
              className="relative w-full h-full"
            >
              <Image
                src={img.secure_url}
                alt={tour.tour_name}
                fill
                style={{ objectFit: "cover" }}
                className="brightness-90 rounded-2xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
                  {tour.tour_name}
                </h3>
                <p className="text-sm md:text-base drop-shadow-md">
                  {tour.tour_caption}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl bg-blue-600/50 rounded-full hover:bg-blue-600/70 transition-all duration-300" />
        <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl bg-blue-600/50 rounded-full hover:bg-blue-600/70 transition-all duration-300" />
      </Swiper>
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 pointer-events-none border-4 border-blue-200 rounded-2xl" />
    </div>
  );
};

export default TourImageSlider;