"use client"; // if using Next.js app directory

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Reusable CounterBox component
const CounterBox = ({ icon, end, label, duration, delay, inView }) => {
  return (
    <div className="col-lg-3 col-md-4 mx-auto col-sm-6">
      <div className="counter-box-2 wow fadeInUp flex flex-col items-center justify-center h-full text-center">
        <div className="counter-thumb mb-3">
          <img
            src={icon}
            alt={`${label} icon`}
            draggable="false"
            className="mx-auto"
          />
        </div>
        <h5 className="text-3xl font-bold text-blue-600">
          {inView && (
            <CountUp start={0} end={end} duration={duration} delay={delay} />
          )}
        </h5>
        <h6 className="text-gray-700 mt-1">{label}</h6>
      </div>
    </div>
  );
};

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  // Counter data
  const counters = [
    {
      icon: "/images/counter-icons/counter_iocn_4.png",
      end: 10,
      label: "Years Experience",
      duration: 0.5,
      delay: 0.2,
    },
    {
      icon: "/images/counter-icons/counter_iocn_5.png",
      end: 120,
      label: "Worldwide Coverage",
      duration: 3,
      delay: 0.2,
    },
    {
      icon: "/images/counter-icons/counter_iocn_6.png",
      end: 550,
      label: "Tour Operators",
      duration: 3.5,
      delay: 0.3,
    },
    {
      icon: "/images/counter-icons/counter_iocn_7.png",
      end: 2500,
      label: "Cities available",
      duration: 3,
      delay: 0.4,
    },
  ];

  return (
    <div className="container" ref={ref}>
      <div className="row">
        <div className="col-xl-9 offset-xl-3">
          {/* Section Title */}
          <div className="rt-section-title-wrapper">
            <h2 className="rt-section-title">
              <span>Our Short Story</span>
              Know About Indi Tour
            </h2>
            <p>
              Our aim is to make global corporate travel management more
              personalized and seamless. And we do this through a network of
              exceptional local agencies that are not only leaders in their own
              respective markets, but who also meet the high operating and
              service standards needed to become a Radius member. <br /> We
              specialize in vacation packages, escorted and independent tour
              packages, cruises, honeymoons, weddings at foreign locations, and
              corporate travel. Our staff is dedicated to connecting our
              customers with amazing travel experiences around the world, all at
              a price that suits their needs. We will happily work with you to
              plan your dream vacation or corporate trip that meets both your
              budget and experience goals, whatever they may be!
            </p>
          </div>

          <div className="section-title-spacer"></div>

          {/* Counter Grid */}
          <div className="row">
            {counters.map((counter, index) => (
              <CounterBox key={index} {...counter} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
