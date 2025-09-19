"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// A reusable component for the animated number
const AnimatedCounter = ({ toValue }) => {
  const nodeRef = useRef();

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(0, toValue, {
      duration: 2,
      onUpdate(value) {
        // Formats the number with commas
        node.textContent = new Intl.NumberFormat().format(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [toValue]);

  return <span ref={nodeRef} />;
};


const CounterCard = () => {
  const ref = useRef(null);
  // Trigger the animation once when the element is 25% in view
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  // Variants for the container to orchestrate staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Each child will animate 0.3s after the previous one
      },
    },
  };

  // Variants for each individual card
  const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Start 30px below and invisible
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const counters = [
    {
      icon: "/images/counter-icons/counter_iocn_1.png",
      title: "Trusted Members",
      value: 90000,
    },
    {
      icon: "/images/counter-icons/counter_iocn_2.png",
      title: "Happy Clients",
      value: 20000,
      duration: 1.5,
    },
    {
      icon: "/images/counter-icons/counter_iocn_3.png",
      title: "Projects Completed",
      value: 80000,
      duration: 2,
    },
  ];

  return (
    <div className="counter-area">
      <div className="container">
        <motion.div
          className="row"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"} // Animate when in view
        >
          {counters.map((counter, index) => (
            <motion.div
              className="col-lg-4 col-md-6 col-12"
              key={index}
              variants={itemVariants} // Apply the item animation
            >
              <div className="media counter-box-1 align-items-center">
                <img
                  src={counter.icon}
                  alt="counter_icon"
                  draggable="false"
                />
                <div className="media-body">
                  <h5>{counter.title}</h5>
                  <h6>
                    {/* The AnimatedCounter component now handles the number animation */}
                    <span className="counter">
                      {isInView && <AnimatedCounter toValue={counter.value} />}
                    </span>
                    <span>+</span>
                  </h6>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CounterCard;