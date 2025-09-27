"use client";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wowjs");

      new WOW.WOW({
        live: false,
      }).init();
    }
  }, []);

  return (
    <section className="rt-site-footer" data-scrollax-parent="true">
      <div
        className="rt-shape-emenetns-1"
        style={{ backgroundImage: "url('/images/shape-elements/shape-4.png')" }}
        data-scrollax="properties: { translateY: '340px' }"
      ></div>

      <div
        className="footer-top rtbgprefix-cover"
        style={{ backgroundImage: "url('/images/backgrounds/footerbg.png')" }}
      >
        <div className="footer-subscripbe-box wow fade-in-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-lg-10 mx-auto text-center">
                <div className="rt-section-title-wrapper text-white">
                  <h2 className="rt-section-title">
                    <span>Newsletter</span>
                    Get The Latest news
                  </h2>
                  <p>
                    Get the latest travel inspirations and deals from Emigrar
                    semimonthly with your email. You can unsubscribe at any
                    time. Your privacy & personal information will be treated.
                  </p>
                </div>
              </div>
            </div>

            <div className="section-title-spacer"></div>

            <div className="row">
              <div className="col-lg-7 mx-auto">
                <div className="input-group mb-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn" type="button" id="button-addon2">
                      Subscribe Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rt-dot-divider"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {}
            <div className="col-lg-3 col-md-6">
              <div
                className="rt-single-widget wow fade-in-bottom"
                data-wow-duration="1s"
              >
                <h3 className="rt-footer-title">Company Info</h3>
                <ul className="rt-usefulllinks">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Authenticity Guarantee</a>
                  </li>
                  <li>
                    <a href="#">Customer Reviews</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Business License</a>
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="col-lg-3 col-md-6">
              <div
                className="rt-single-widget wow fade-in-bottom"
                data-wow-duration="1.5s"
              >
                <h3 className="rt-footer-title">Work With Us</h3>
                <ul className="rt-usefulllinks">
                  <li>
                    <a href="#">Become Partner</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Become Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Associations</a>
                  </li>
                  <li>
                    <a href="#">Advertise with us</a>
                  </li>
                  <li>
                    <a href="#">Retirement Plan</a>
                  </li>
                  <li>
                    <a href="#">Travel APIs</a>
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="col-lg-3 col-md-6">
              <div
                className="rt-single-widget wow fade-in-bottom"
                data-wow-duration="2s"
              >
                <h3 className="rt-footer-title">My Account</h3>
                <ul className="rt-usefulllinks">
                  <li>
                    <a href="#">Manage Your Account</a>
                  </li>
                  <li>
                    <a href="#">Build your own trip</a>
                  </li>
                  <li>
                    <a href="#">Order Status</a>
                  </li>
                  <li>
                    <a href="#">Booking Guide</a>
                  </li>
                  <li>
                    <a href="#">Travel Insurance & Safety Guide</a>
                  </li>
                </ul>
              </div>
            </div>

            {}
            <div className="col-lg-3 col-md-6">
              <div
                className="rt-single-widget wow fade-in-bottom"
                data-wow-duration="2.5s"
              >
                <h3 className="rt-footer-title">Plan Your Trip</h3>
                <ul className="rt-usefulllinks">
                  <li>
                    <a href="#">Special Offers</a>
                  </li>
                  <li>
                    <a href="#">Hotels</a>
                  </li>
                  <li>
                    <a href="#">Flights</a>
                  </li>
                  <li>
                    <a href="#">Tour Packages</a>
                  </li>
                  <li>
                    <a href="#">Accommodations</a>
                  </li>
                  <li>
                    <a href="#">Transportation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left">
              <div
                className="copy-text wow fade-in-bottom"
                data-wow-duration="1s"
              >
                <p>
                  Copyright © {new Date().getFullYear()}. All Rights Reserved By{" "}
                  <a href="#">IndiTour</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div
                className="rt-footer-social wow fade-in-bottom"
                data-wow-duration="1.5s"
              >
                {/* <ul>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brands/card-1.png"
                        alt="cardimage"
                        draggable="false"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brands/card-2.png"
                        alt="cardimage"
                        draggable="false"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brands/card-3.png"
                        alt="cardimage"
                        draggable="false"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brands/card-4.png"
                        alt="cardimage"
                        draggable="false"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="/images/brands/card-5.png"
                        alt="cardimage"
                        draggable="false"
                      />
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
