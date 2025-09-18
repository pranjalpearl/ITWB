"use client"; // for Next.js client component

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. Dummy Data Array ---
const dealData = [
  {
    id: 1,
    bgImage: "/images/all-img/deal-bg.jpg",
    title: "14 Day Classic Tour of Thailand & Beaches",
    promoText: "Grab a promo code for extra savings up to 75% on discounted hotels!",
    mainHeading: "Today's Top Deals",
    subHeading: "Find great experiences, trips, and activities at fantastic prices around the globe.",
    reviewText: "EXCELLENT",
    reviewCount: 205,
    reviewerName: "Kim - Denmark",
    holidayTitle: "Thailand Tours and Holidays 2024/2025",
    holidayDescription: "Thailand is the perfect destination for those who love to spend time outdoors. You can soak up the sunshine on the beautiful beaches of Phuket, or head to the North of the country to Chiang Mai for adventure and outdoor activities like water rafting and trekking. Of course, not to be missed is Bangkok, where you can tour its floating markets or lavish Grand Palace."
  },
  {
    id: 2,
    bgImage: "/images/all-img/deal-bg-2.jpg",
    title: "10 Day Cultural Journey Through Japan",
    promoText: "Book now and receive a complimentary pass to the Tokyo Skytree!",
    mainHeading: "Featured Japan Escapes",
    subHeading: "Explore ancient temples, bustling cities, and serene natural landscapes.",
    reviewText: "AMAZING",
    reviewCount: 188,
    reviewerName: "Alex - USA",
    holidayTitle: "Japan Cultural Tours 2024/2025",
    holidayDescription: "Japan offers a unique blend of ancient tradition and futuristic technology. From the vibrant streets of Tokyo to the tranquil temples of Kyoto, our tours cover the very best of this fascinating country. Enjoy world-class cuisine, efficient high-speed trains, and the serene beauty of Japanese gardens."
  },
  {
    id: 3,
    bgImage: "/images/all-img/deal-bg-3.jpg",
    title: "7 Day Adventure in the Swiss Alps",
    promoText: "Early bird special: Get 20% off all summer adventure packages!",
    mainHeading: "Explore The Swiss Alps",
    subHeading: "Experience breathtaking views with our guided hiking and climbing tours.",
    reviewText: "UNFORGETTABLE",
    reviewCount: 231,
    reviewerName: "Maria - Spain",
    holidayTitle: "Switzerland Mountain Adventures 2024/2025",
    holidayDescription: "The Swiss Alps are a paradise for nature lovers and adventurers alike. Whether you're an experienced climber or prefer gentle valley hikes, Switzerland offers stunning scenery at every turn. Enjoy fresh mountain air, crystal-clear lakes, and charming alpine villages on this unforgettable trip."
  }
];

// --- 2. The Reusable Slide Component ---
// This component takes one 'deal' object and renders the slide.
// It's wrapped in motion.div to enable animations.
const DealSlide = ({ deal }) => {
  return (
    <motion.div
      key={deal.id} // The key is important for AnimatePresence to track the component
      initial={{ opacity: 0, x: 50 }} // Starts invisible and slightly to the right
      animate={{ opacity: 1, x: 0 }} // Fades and slides in to the center
      exit={{ opacity: 0, x: -50 }} // Fades and slides out to the left
      transition={{ duration: 0.5 }}
      // The `position: 'absolute'` is important to make the exit/enter animations overlap smoothly.
      // The parent container needs a set height to contain this.
      style={{ position: 'absolute', width: '100%' }}
    >
      <div className="row single-deal-carosel align-items-center">
        <div className="col-lg-5">
          <div
            className="deal-bg"
            style={{ backgroundImage: `url('${deal.bgImage}')` }}
          >
            <div className="inner-content">
              <h4>{deal.title}</h4>
              <p>{deal.promoText}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="rt-section-title-wrapper text-white">
            <h2 className="rt-section-title">
              <span>{deal.mainHeading}</span>
              {deal.subHeading}
            </h2>
            <p>{deal.subHeading}</p>
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
                <a href="#" className="rt-btn rt-gradient rt-rounded rt-Bshadow-2">Read More</a>
                <a href="#" className="rt-btn rt-outline-gradientL rt-rounded">Help Me Plan My Trip</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- 3. The Main Component with State and Buttons ---
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
        {/* 
          This container will hold our animated slide. 
          'position: relative' and a 'min-height' are crucial for the absolute positioning
          of the child motion.div to work correctly. 'overflow: hidden' prevents any visual glitches.
        */}
        <div className="deal-carosel-active" style={{ position: 'relative', minHeight: '700px', overflow: 'hidden' }}>
          {/* 
            AnimatePresence is the magic component from Framer Motion.
            It allows components to animate when they are removed from the React tree.
            When we change the `currentIndex`, the old `DealSlide` is removed and the new one is added,
            triggering the 'exit' and 'enter' animations.
          */}
          <AnimatePresence>
            <DealSlide deal={dealData[currentIndex]} />
          </AnimatePresence>
        </div>

        {/* --- Navigation Buttons --- */}
        {/* These buttons are positioned on top of the carousel content */}
        <div style={{ position: 'absolute', top: '270%', left: '2rem', zIndex: 10 }}>
          <button onClick={goToPrevious} style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid white', color: 'white', borderRadius: '9999px', width: '50px', height: '50px', fontSize: '24px' }}>
            &#8592;
          </button>
        </div>
        <div style={{ position: 'absolute', top: '270%', right: '2rem', zIndex: 10 }}>
          <button onClick={goToNext} style={{ background: 'rgba(255, 255, 255, 0.2)', border: '1px solid white', color: 'white', borderRadius: '9999px', width: '50px', height: '50px', fontSize: '24px' }}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDeal;