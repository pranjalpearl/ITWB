"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dealData = [
  {
    id: 1,
    bgImage: "/images/tour/t1.jpg",
    title: "14 Day Classic Tour of Thailand & Beaches",
    promoText:
      "Grab a promo code for extra savings up to 75% on discounted hotels!",
    mainHeading: "Take Look at ",
    subHeading: "Today's top deal",
    reviewText: "EXCELLENT",
    reviewCount: 205,
    reviewerName: "Kim - Denmark",
    holidayTitle: "Thailand Tours and Holidays 2024/2025",
    holidayDescription:
      "Thailand is the perfect destination for those who love to spend time outdoors. You can soak up the sunshine on the beautiful beaches of Phuket, or head to the North of the country to Chiang Mai for adventure and outdoor activities like water rafting and trekking. Of course, not to be missed is Bangkok, where you can tour its floating markets or lavish Grand Palace.",
  },
  {
    id: 2,
    bgImage: "/images/tour/t2.jpg",
    title: "10 Day Cultural Journey Through Japan",
    promoText:
      "Book now and receive a complimentary pass to the Tokyo Skytree!",
    mainHeading: "Featured Japan Escapes",
    subHeading: "At very afodable rates",
    reviewText: "AMAZING",
    reviewCount: 188,
    reviewerName: "Alex - USA",
    holidayTitle: "Japan Cultural Tours 2024/2025",
    holidayDescription:
      "Japan offers a unique blend of ancient tradition and futuristic technology. From the vibrant streets of Tokyo to the tranquil temples of Kyoto, our tours cover the very best of this fascinating country. Enjoy world-class cuisine, efficient high-speed trains, and the serene beauty of Japanese gardens.",
  },
  {
    id: 3,
    bgImage: "/images/tour/t3.jpg",
    title: "7 Day Adventure in the Swiss Alps",
    promoText: "Early bird special: Get 20% off all summer adventure packages!",
    mainHeading: "Explore The Swiss Alps",
    subHeading: "Experience breathtaking views",
    reviewText: "UNFORGETTABLE",
    reviewCount: 231,
    reviewerName: "Maria - Spain",
    holidayTitle: "Switzerland Mountain Adventures 2024/2025",
    holidayDescription:
      "The Swiss Alps are a paradise for nature lovers and adventurers alike. Whether you're an experienced climber or prefer gentle valley hikes, Switzerland offers stunning scenery at every turn. Enjoy fresh mountain air, crystal-clear lakes, and charming alpine villages on this unforgettable trip.",
  },
];

const DealSlide = ({ deal }) => {
  return (
    <motion.div
      key={deal.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      style={{ position: "absolute", width: "100%" }}
    >
      <div className="row single-deal-carosel align-items-center">
        <div className="col-lg-5">
          <div
            className="deal-bg relative h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${deal.bgImage}')` }}
          >
            <div className="absolute bottom-0 left-1/2 w-[90%] -translate-x-1/2 text-black text-center bg-opacity-75 p-4">
              <p className="bg-neutral-300/70 text-white rounded-2xl">{deal.title}</p>
         
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="rt-section-title-wrapper text-white">
            <h2 className="rt-section-title">
              <span>{deal.mainHeading}</span>
              {deal.subHeading}
            </h2>
            <div className="section-title-spacer"></div>
            <div className="deal-bottom-content">
              <div className="rating-box">
                <span className="d-block">{deal.reviewText}</span>
                <span className="d-block">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> of {deal.reviewCount} Reviews
                </span>
                <span className="d-block">Reviewed by {deal.reviewerName}</span>
              </div>
              <div className="section-title-spacer"></div>
              <h4>{deal.holidayTitle}</h4>
              <p>{deal.holidayDescription}</p>
              <div className="rt-button-group">
                <a
                  href="#"
                  className="rt-btn rt-gradient rt-rounded rt-Bshadow-2"
                >
                  Read More
                </a>
                <a href="#" className="rt-btn rt-outline-gradientL rt-rounded">
                  Help Me Plan My Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TopDeal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? dealData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === dealData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section
      className="deal-area rtbgprefix-full bg-hide-md"
      style={{ backgroundImage: "url('/images/backgrounds/bgshapes_1.png')" }}
    >
      <div className="container-fluid p-0">
        {}
        <div
          className="deal-carosel-active"
          style={{
            position: "relative",
            minHeight: "700px",
            overflow: "hidden",
          }}
        >
          {}
          <AnimatePresence>
            <DealSlide deal={dealData[currentIndex]} />
          </AnimatePresence>
        </div>

        <div className="absolute bottom-8 left-1/3  flex -translate-x-1/2 gap-8 top-[407%]">
          {}
          <button
            onClick={goToPrevious}
            className="flex h-24 w-24 items-center justify-center border border-white bg-[#EFEAFE] text-black shadow-xl"
            style={{
              fontSize: "28px",
              borderRadius: "9999px",
            }}
          >
            &#8592;
          </button>

          {}
          <button
            onClick={goToNext}
            className="flex h-24 w-24 items-center justify-center border border-white bg-[#EFEAFE] text-black shadow-xl"
            style={{
              fontSize: "28px",
              borderRadius: "9999px",
            }}
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDeal;
