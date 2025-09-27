"use client";

import React from "react";

import { useRouter } from "next/navigation";

const TourCard = ({ tour }) => {
  const router = useRouter();

  const imageUrl =
    tour.tour_images?.[0]?.secure_url || "/images/placeholder.jpg";

  const ratingOutOfFive = ((tour.popularity_score || 0) / 100) * 5;

  const handleViewDetails = (e) => {
    e.preventDefault();

    router.push(`/trip/${tour.id}`);
  };

  const handleCustomize = (e) => {
    e.preventDefault();
    router.push("/customize-tour");
  };

  return (
    <div className="box-style__1 rt-mb-30">
      <div className="hotel-inner-content row">
        <div className="hotel-thumb col-md-3 mb-5 mb-md-0">
          <div
            className="hotel-bg rtbgprefix-cover"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {tour.is_hot_selling && (
              <div className="inaner-badge">
                <span className="bg-gradient-primary text-white text-capitalize rt-pl-10 rt-pr-10 rt-pt-5 rt-pb-5">
                  Hot Selling
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="hotel-text col-md-9">
          {}
          <div className="top">
            <h5>
              {tour.tour_name}
              <span className="ml-2">
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star"></i>
              </span>
            </h5>
            <p>{tour.tour_caption}</p>
          </div>
          <div className="middle-text d-md-flex justify-content-md-between rt-mt-20">
            <div className="left_column">
              <span className="rt-gradinet-badge pill text-xl">
                {ratingOutOfFive.toFixed(1)}/5
              </span>
              <span className="primary-color text-2xl px-2">Popular</span>
              <span className="text-555 f-size-16 d-block rt-mt-15">
                <span className="rt-mr-15">
                  <i className="icofont-globe primary-color rt-mr-4 text-3xl"></i>
                  {tour.destination?.destination_type}
                </span>
                <span>
                  <i className="icofont-clock-time primary-color rt-mr-4 text-3xl"></i>
                  {tour.tour_duration_type}
                </span>
              </span>
            </div>
            <div className="right_column text-left text-md-right">
              {tour.isDiscount ? (
                <div>
                  <span className="d-block text-primary f-size-24 rt-semiblod title-font">
                    ₹{tour.discounted_price.toLocaleString("en-IN")}
                  </span>
                  <span className="d-block f-size-12 text-gray-500 line-through">
                    ₹{tour.original_price.toLocaleString("en-IN")}
                  </span>
                </div>
              ) : (
                <span className="d-block text-primary f-size-24 rt-semiblod title-font">
                  ₹{tour.original_price.toLocaleString("en-IN")}
                </span>
              )}
              <span className="d-block f-size-12 text-878">Per Person</span>
            </div>
          </div>

          <div className="footer-elements d-flex justify-content-between align-items-center align-items-end">
            <div className="left text-xl">
              {}
              <a href="" onClick={handleCustomize}>
                Customize & Request
              </a>
            </div>
            <div className="right">
              <a
                href=""
                onClick={handleViewDetails}
                className="rt-btn rt-gradient pill rt-sm3 text-uppercase"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
