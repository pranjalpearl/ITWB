"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 1. NEW DATA STRUCTURE: Grouped by City ---
const hotelDataByCity = {
  "New York": [
    { id: 1, name: 'The Millennium Hilton New York', image: '/images/portfolio/port-1.jpg', price: 239, rating: 4.5, reviews: 473 },
    { id: 8, name: 'The Plaza Hotel', image: '/images/portfolio/port-2.jpg', price: 520, rating: 4.9, reviews: 1250 },
    { id: 9, name: 'Four Seasons Hotel New York Downtown', image: '/images/portfolio/port-3.jpg', price: 640, rating: 4.8, reviews: 980 },
  ],
  "London": [
    { id: 2, name: 'The Savoy', image: '/images/portfolio/port-4.jpg', price: 450, rating: 4.8, reviews: 892 },
    { id: 10, name: 'Claridge’s', image: '/images/portfolio/port-5.jpg', price: 590, rating: 4.9, reviews: 760 },
    { id: 11, name: 'The Ritz London', image: '/images/portfolio/port-6.jpg', price: 610, rating: 4.7, reviews: 1100 },
  ],
  "Paris": [
    { id: 3, name: 'Le Bristol Paris', image: '/images/portfolio/port-1.jpg', price: 620, rating: 4.9, reviews: 731 },
    { id: 12, name: 'Hôtel Plaza Athénée', image: '/images/portfolio/port-2.jpg', price: 670, rating: 4.8, reviews: 890 },
    { id: 13, name: 'Shangri-La Hotel, Paris', image: '/images/portfolio/port-3.jpg', price: 720, rating: 4.9, reviews: 940 },
  ],
  "Hong Kong": [
    { id: 4, name: 'The Peninsula Hong Kong', image: '/images/portfolio/port-4.jpg', price: 510, rating: 4.7, reviews: 645 },
    { id: 14, name: 'Mandarin Oriental, Hong Kong', image: '/images/portfolio/port-5.jpg', price: 460, rating: 4.8, reviews: 810 },
    { id: 15, name: 'Four Seasons Hotel Hong Kong', image: '/images/portfolio/port-6.jpg', price: 690, rating: 4.9, reviews: 1020 },
  ],
  "Bangkok": [
    { id: 5, name: 'Mandarin Oriental, Bangkok', image: '/images/portfolio/port-1.jpg', price: 380, rating: 4.8, reviews: 912 },
    { id: 16, name: 'The Siam Hotel', image: '/images/portfolio/port-2.jpg', price: 410, rating: 4.7, reviews: 620 },
    { id: 17, name: 'Banyan Tree Bangkok', image: '/images/portfolio/port-3.jpg', price: 290, rating: 4.6, reviews: 740 },
  ],
  "Singapore": [
    { id: 6, name: 'Marina Bay Sands', image: '/images/portfolio/port-4.jpg', price: 550, rating: 4.6, reviews: 1254 },
    { id: 18, name: 'Raffles Hotel Singapore', image: '/images/portfolio/port-5.jpg', price: 630, rating: 4.9, reviews: 1120 },
    { id: 19, name: 'The Fullerton Hotel', image: '/images/portfolio/port-6.jpg', price: 470, rating: 4.7, reviews: 830 },
  ],
  "Tokyo": [
    { id: 7, name: 'Park Hyatt Tokyo', image: '/images/portfolio/port-1.jpg', price: 720, rating: 4.9, reviews: 888 },
    { id: 20, name: 'The Ritz-Carlton, Tokyo', image: '/images/portfolio/port-2.jpg', price: 680, rating: 4.8, reviews: 990 },
    { id: 21, name: 'Aman Tokyo', image: '/images/portfolio/port-3.jpg', price: 750, rating: 4.9, reviews: 870 },
  ],
};


// --- 2. Reusable Hotel Card Component (No changes needed here) ---
const HotelCard = ({ hotel }) => (
  <div
    className="portfolio-box-1 wow fade-in-bottom"
    style={{ backgroundImage: `url('${hotel.image}')` }}
  >
    <div className="rt-overlay"></div>
    <div className="portfolio-badge">
      <span>From</span>
      <span><sup>$</sup>{hotel.price}</span>
    </div>
    <div className="inner-content text-white">
      <h6>{hotel.name}</h6>
      <p>
        <span>
          {[...Array(Math.floor(hotel.rating))].map((_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          {hotel.rating % 1 !== 0 && <i className="fas fa-star-half-alt"></i>}
        </span>
        <span>{hotel.rating} / 5 ({hotel.reviews} reviews)</span>
      </p>
    </div>
  </div>
);


// --- 3. Main Hotels Component with New Logic ---
const Hotels = () => {
  // Get the list of cities directly from the data keys
  const cities = Object.keys(hotelDataByCity);
  
  // Set the active filter to the first city by default
  const [activeFilter, setActiveFilter] = useState(cities[0]);

  // The list of hotels to display is now a simple lookup
  const filteredHotels = hotelDataByCity[activeFilter];

  return (
    <div>
      <div className="spacer-top"></div>
      <section
        className="portfolio-area rt-section-padding rtbgprefix-full bg-hide-md gradinet-bg-md"
        style={{ backgroundImage: "url('/images/backgrounds/portfoliobg.png')" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 text-center mx-auto">
              <div className="rt-section-title-wrapper text-white">
                <h2 className="rt-section-title">
                  <span>Take a Look at Our</span>
                  Recommended Hotels
                </h2>
                <p>
                  We've made a list of suggested activities based on your
                  interests. Browse through our most popular Hotels! Our
                  Featured Tours can help you find the trip that's perfect for you!
                </p>
              </div>
            </div>
          </div>
          <div className="section-title-spacer"></div>
          <div className="row">
            <div className="col-12">
              <ul className="filter-list">
                {/* --- Dynamically create filter buttons from the cities list --- */}
                {cities.map((city) => (
                  <li
                    key={city}
                    className={activeFilter === city ? 'active' : ''}
                    onClick={() => setActiveFilter(city)}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* --- Animated Hotel Grid --- */}
          <div className="row grid">
            <AnimatePresence mode="wait">
              {filteredHotels.map((hotel) => (
                <motion.div
                  key={hotel.id}
                  layout // This animates the position change smoothly
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="col-lg-4 col-md-6 grid-item" // Grid classes are on the motion component
                >
                  <HotelCard hotel={hotel} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="row">
            <div className="col-12 text-center mt-4">
              <a href="#" className="rt-btn rt-gradient text-uppercase rt-sm rt-rounded rt-Bshadow-1">
                browse more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;