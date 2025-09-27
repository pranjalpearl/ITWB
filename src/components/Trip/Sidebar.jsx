// components/Sidebar.js
import React from "react";
import PriceRangeSlider from "./PriceRangeSlider";

const Sidebar = () => {
  return (
    <div className="rt-sidebar-group">
      <div className="rt-widget widget_rating">
        <h3 className="rt-widget-title">Star Rating</h3>
        <ul>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-1xs"
              />
              <label className="form-check-label">
                <span>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                </span>
              </label>
            </div>
          </li>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-2xs"
              />
              <label className="form-check-label">
                <span>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                </span>
              </label>
            </div>
          </li>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-2xss"
              />
              <label className="form-check-label">
                <span>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                </span>
              </label>
            </div>
          </li>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-2xssa"
              />
              <label className="form-check-label">
                <span>
                  <i className="icofont-star review"></i>
                  <i className="icofont-star review"></i>
                </span>
              </label>
            </div>
          </li>
        </ul>
      </div>
      <div className="rt-widget widget_range-slider">
        <h3 className="rt-widget-title">Filter by Price</h3>

        <PriceRangeSlider min={0} max={5000} />
      </div>
      <div className="rt-widget widget_plane_time">
        <h3 className="rt-widget-title">Payment options</h3>
        <ul>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-1"
              />
              <label className="form-check-label">Pay now (72)</label>
            </div>
            <span className="float-right">$30</span>
          </li>
          <li className="clearfix">
            <div className="form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="trip_gridCheckrt-2"
              />
              <label className="form-check-label">Pay later (425)</label>
            </div>
            <span className="float-right">$32</span>
          </li>
        </ul>
      </div>
      <div className="rt-widget widget_tag">
        <h3 className="rt-widget-title">Activities Transport</h3>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4">
            <i className="icofont-tag"></i>
          </span>{" "}
          Cycling
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4">
            <i className="icofont-tag"></i>
          </span>{" "}
          City Tour
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4">
            <i className="icofont-tag"></i>
          </span>{" "}
          Meet the Locals
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4">
            <i className="icofont-tag"></i>
          </span>{" "}
          Train
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4">
            <i className="icofont-tag"></i>
          </span>{" "}
          Car with driver
        </a>
      </div>
      <div className="rt-widget widget_">
        <h3 className="rt-widget-title">Main travel focus</h3>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4 primary-color">
            <i className="icofont-check"></i>
          </span>{" "}
          Cultural visits
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4 primary-color">
            <i className="icofont-check"></i>
          </span>{" "}
          Nature & landscapes
        </a>
        <a href="#" className="rt-tag-cloud d-block text-2xl">
          <span className="rt-mr-4 primary-color">
            <i className="icofont-check"></i>
          </span>{" "}
          Relaxing moments
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
