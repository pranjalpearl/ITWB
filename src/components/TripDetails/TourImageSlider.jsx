// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { motion } from "framer-motion";

// const TourImageSlider = ({ tour }) => {

//   console.log(tour, "tpou")
//   return (
//     <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<span class="${className} bg-blue-500 w-3 h-3 rounded-full mx-1 transition-all duration-300"></span>`;
//           },
//         }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop
//         effect="fade"
//         className="w-full h-full"
//       >
//         {tour.tour_images.map((img) => (
//           <SwiperSlide key={img.id}>
//             <motion.div
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 5 }}
//               className="relative w-full h-full"
//             >
//               <Image
//                 src={img.secure_url}
//                 alt={tour.tour_name}
//                 fill
//                 style={{ objectFit: "cover" }}
//                 className="brightness-90 rounded-2xl"
//                 priority
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-xl md:text-2xl font-semibold drop-shadow-lg">
//                   {tour.tour_name}
//                 </h3>
//                 <p className="text-sm md:text-base drop-shadow-md">
//                   {tour.tour_caption}
//                 </p>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//         {/* Custom Navigation Buttons */}
//         <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl bg-blue-600/50 rounded-full hover:bg-blue-600/70 transition-all duration-300" />
//         <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl bg-blue-600/50 rounded-full hover:bg-blue-600/70 transition-all duration-300" />
//       </Swiper>
//       {/* Overlay for better contrast */}
//       <div className="absolute inset-0 pointer-events-none border-4 border-blue-200 rounded-2xl" />
//     </div>
//   );
// };

// export default TourImageSlider;


// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const TourImageSlider = ({ tour }) => {
//   // Construct a single array of images from available data sources
//   const sliderImages = useMemo(() => {
//     if (!tour) return [];

//     const images = [];

//     // 1. Add Cover Photo (Highest Priority)
//     if (tour.coverPhotoUrl) {
//       images.push({
//         id: "cover-photo",
//         url: tour.coverPhotoUrl,
//         alt: tour.tourName || "Tour Cover",
//         caption: "Cover Photo",
//       });
//     }

//     // 2. Add Gallery Images (if any exist)
//     if (tour.galleryImages?.length > 0) {
//       tour.galleryImages.forEach((img, index) => {
//         images.push({
//           id: `gallery-${index}`,
//           url: typeof img === "string" ? img : img?.url, // Handle string or object
//           alt: tour.tourName,
//           caption: "Gallery Image",
//         });
//       });
//     }

//     // 3. Add Images from Itinerary/Days (if gallery is empty or to add variety)
//     if (tour.itinerary?.length > 0) {
//       tour.itinerary.forEach((day, index) => {
//         if (day.image) {
//           images.push({
//             id: `day-${day.day}-${index}`,
//             url: day.image,
//             alt: day.title,
//             caption: `Day ${day.day}: ${day.title}`,
//           });
//         }
//       });
//     }

//     // Remove duplicates based on URL
//     return images.filter((v, i, a) => a.findIndex(t => (t.url === v.url)) === i);
//   }, [tour]);

//   if (!sliderImages.length) {
//     return <div className="h-[50vh] bg-gray-200 rounded-2xl flex items-center justify-center">No Images Available</div>;
//   }

//   return (
//     <div className="relative h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectFade]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         pagination={{
//           clickable: true,
//           renderBullet: (index, className) => {
//             return `<span class="${className} bg-blue-500 w-3 h-3 rounded-full mx-1 transition-all duration-300"></span>`;
//           },
//         }}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={sliderImages.length > 1} // Only loop if more than 1 image
//         effect="fade"
//         className="w-full h-full"
//       >
//         {sliderImages.map((img) => (
//           <SwiperSlide key={img.id}>
//             <motion.div
//               initial={{ scale: 1.1 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 5 }}
//               className="relative w-full h-full"
//             >
//               <Image
//                 src={img.url}
//                 alt={img.alt}
//                 fill
//                 style={{ objectFit: "cover" }}
//                 className="brightness-90 rounded-2xl"
//                 priority={img.id === "cover-photo"}
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//               <div className="absolute bottom-8 left-8 text-white max-w-[80%]">
//                 <h3 className="text-xl md:text-3xl font-bold drop-shadow-lg mb-2">
//                   {img.caption}
//                 </h3>
//                 <p className="text-sm md:text-lg opacity-90 drop-shadow-md hidden md:block">
//                   {tour.tourName}
//                 </p>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}

//         {/* Custom Navigation Buttons (only show if multiple images) */}
//         {sliderImages.length > 1 && (
//           <>
//             <div className="swiper-button-prev !text-white !w-12 !h-12 after:!text-2xl bg-black/30 backdrop-blur-sm rounded-full hover:bg-blue-600/80 transition-all duration-300 left-4" />
//             <div className="swiper-button-next !text-white !w-12 !h-12 after:!text-2xl bg-black/30 backdrop-blur-sm rounded-full hover:bg-blue-600/80 transition-all duration-300 right-4" />
//           </>
//         )}
//       </Swiper>

//       {/* Decorative Border Overlay */}
//       <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 rounded-2xl z-10" />
//     </div>
//   );
// };

// export default TourImageSlider;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade, Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";

const TourImageSlider = ({ tour }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const sliderImages = useMemo(() => {
    if (!tour) return [];

    const images = [];
    if (tour.coverPhotoUrl) {
      images.push({
        id: "cover-photo",
        url: tour.coverPhotoUrl,
        alt: tour.tourName || "Tour Cover",
        caption: "Cover Photo",
      });
    }
    if (tour.galleryImages?.length > 0) {
      tour.galleryImages.forEach((img, index) => {
        images.push({
          id: `gallery-${index}`,
          url: typeof img === "string" ? img : img?.url,
          alt: tour.tourName,
          caption: "Gallery Image",
        });
      });
    }
    if (tour.itinerary?.length > 0) {
      tour.itinerary.forEach((day, index) => {
        if (day.image) {
          images.push({
            id: `day-${day.day}-${index}`,
            url: day.image,
            alt: day.title,
            caption: `Day ${day.day}: ${day.title}`,
          });
        }
      });
    }
    return images.filter((v, i, a) => a.findIndex(t => t.url === v.url) === i);
  }, [tour]);

  if (!sliderImages.length) {
    return (
      <div className="h-[50vh] bg-gray-200 rounded-2xl flex items-center justify-center">
        No Images Available
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Main Slider */}
      <div className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] rounded-2xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          navigation={{
            nextEl: ".swiper-button-next-main",
            prevEl: ".swiper-button-prev-main",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} w-3 h-3 rounded-full bg-white/60 hover:bg-blue-500 transition-all duration-300 mx-1"></span>`;
            },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={sliderImages.length > 1}
          effect="fade"
          className="w-full h-full"
        >
          {sliderImages.map((img) => (
            <SwiperSlide key={img.id}>
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="relative w-full h-full"
              >
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl brightness-90"
                  priority={img.id === "cover-photo"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 text-white max-w-[85%]">
                  <h3 className="text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg mb-2">
                    {img.caption}
                  </h3>
                  <p className="text-sm md:text-lg lg:text-xl opacity-90 drop-shadow-md hidden md:block">
                    {tour.tourName}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}

          {sliderImages.length > 1 && (
            <>
              <div className="swiper-button-prev-main !w-12 !h-12 bg-black/30 rounded-full hover:bg-blue-600/80 transition-all duration-300 left-4" />
              <div className="swiper-button-next-main !w-12 !h-12 bg-black/30 rounded-full hover:bg-blue-600/80 transition-all duration-300 right-4" />
            </>
          )}
        </Swiper>
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/20 rounded-2xl z-10" />
      </div>

      {/* Thumbnail Slider */}
      {sliderImages.length > 1 && (
        <div className="mt-6 relative w-full">
          <Swiper
            onSwiper={setThumbsSwiper}
            modules={[Navigation, Thumbs]}
            slidesPerView={4}
            spaceBetween={12}
            watchSlidesProgress
            navigation={{
              nextEl: ".swiper-button-next-thumb",
              prevEl: ".swiper-button-prev-thumb",
            }}
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              640: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
              1280: { slidesPerView: 7 },
            }}
            className="w-full flex items-center justify-center"
          >
            {sliderImages.map((img) => (
              <SwiperSlide key={`thumb-${img.id}`} className="cursor-pointer">
                <div className="relative w-full h-20 md:h-24 lg:h-28 overflow-hidden rounded-xl border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Thumbnail Navigation Buttons */}
            <div className="swiper-button-prev-thumb !absolute !top-1/2 !-translate-y-1/2 !left-0 !z-20 !w-10 !h-10 bg-black/30 rounded-full hover:bg-blue-600/80 transition-all duration-300" />
            <div className="swiper-button-next-thumb !absolute !top-1/2 !-translate-y-1/2 !right-0 !z-20 !w-10 !h-10 bg-black/30 rounded-full hover:bg-blue-600/80 transition-all duration-300" />
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default TourImageSlider;
