// components/TourCard.js
import React from 'react';

const TourCard = ({ tour }) => {
  return (
    <div className="box-style__1 rt-mb-30">
      <div className="hotel-inner-content row">
        <div className="hotel-thumb col-md-3 mb-5 mb-md-0">
          <div className="hotel-bg rtbgprefix-cover" style={{ backgroundImage: `url(${tour.image})` }}>
            {tour.isNew && (
              <div className="inaner-badge">
                <span className="bg-gradient-primary text-white text-capitalize rt-pl-10 rt-pr-10 rt-pt-5 rt-pb-5">
                  new
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="hotel-text col-md-9">
          <div className="top">
            <h5>
              {tour.title}
              <span>
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star review"></i>
                <i className="icofont-star"></i>
              </span>
            </h5>
            <p>
              {tour.lifestyle} <span>- {tour.activity}</span>
            </p>
          </div>
          <div className="middle-text d-md-flex justify-content-md-between rt-mt-20">
            <div className="left_column">
              <span className="rt-gradinet-badge pill text-xl">
                {tour.rating}/5 
              </span>
              <span className="primary-color text-2xl px-2 ">Excellent</span>
              <span className="f-size-12 text-878">({tour.reviewCount} Reviews)</span>
              <span className="text-555 f-size-16 d-block rt-mt-15">
                <span className="rt-mr-15">
                  <i className="icofont-users-alt-5 primary-color rt-mr-4"></i>
                  {tour.tripType}
                </span>
                <span>
                  <i className="icofont-user primary-color rt-mr-4"></i>
                  {tour.tourType}
                </span>
              </span>
            </div>
            <div className="right_column text-left text-md-right">
              <span className="d-block text-primary f-size-24 rt-semiblod title-font">${tour.price}</span>
              <span className="d-block f-size-12 text-878">Per Person</span>
            </div>
          </div>
          <div className="footer-elements d-flex justify-content-between align-items-center align-items-end">
            <div className="left text-xl">
              <a href="#">Customize & Request</a>
            </div>
            <div className="right">
              <a href="trip-2.html" className="rt-btn rt-gradient pill rt-sm3 text-uppercase">
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