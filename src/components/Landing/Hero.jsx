"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BookingForm from "./BookingForm";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="rt-banner-area" ref={ref}>
      <div
        className="single-rt-banner rt-banner-height"
        style={{ backgroundImage: "url('/images/all-img/banner01.png')" }}
      >
        <div className="container">
          <div className="row rt-banner-height align-items-center">
            <div className="col-lg-9">
              <div className="rt-banner-content">
                {/* Heading */}
                <motion.h1
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }}
                >
                  Explore <br />
                  The World!
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                  variants={fadeInDown}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.4 }}
                >
                  You can create a Custom Trip. Search Our Lowest Fares to <br />
                  Your Favorite Destinations. Find a better way to travel
                </motion.p>

                {/* Booking Form */}
                <motion.div
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.6 }}
                >
                  <BookingForm />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
