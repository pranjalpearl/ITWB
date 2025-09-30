import React from "react";

const Book = () => {
  return (
    <>
      <div className="spacer-top"></div>
      <section className="book-area">
        <div
          className="rt-design-elmnts rtbgprefix-contain"
          style={{
            backgroundImage: `url("/images/all-img/abt_vec_1.png")`,
          }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="rt-section-title-wrapper">
                <h2 className="rt-section-title">
                  <span>How We're Different</span>
                  Why Book With Us?
                </h2>
                <p>
                  OTA's (Online Travel Agents) have dominated the market for
                  over 10 years giving consumers headaches for years by
                  attaching hidden fees, giving you a false sense of savings
                  where there really is none due to the OTA agreements that are
                  in place to make sure these companies can never compete
                  against each other, and the use of predictive analytics to
                  boost rates on your vacation based on how many times you
                  search for a specific flight or click on a link.
                </p>
              </div>
              <div className="section-title-spacer"></div>
              <div className="rt-single-icon-box wow fade-in-bottom">
                <div className="icon-thumb">
                  <img
                    src="/images/icons-image/box-icon-1.png"
                    alt="box-icon"
                    draggable="false"
                  />
                </div>
                <div className="iconbox-content">
                  <h5>+350,000 Hotels</h5>
                  <p>
                    Pick from a wide array of an ever-growing list of hotels in
                    popular destinations (Over 14 million hotel rooms).
                  </p>
                </div>
              </div>
              <div
                className="rt-single-icon-box wow fade-in-bottom"
                data-wow-duration="1.5s"
              >
                <div className="icon-thumb">
                  <img
                    src="/images/icons-image/box-icon-2.png"
                    alt="box-icon"
                    draggable="false"
                  />
                </div>
                <div className="iconbox-content">
                  <h5>World Wide Tour Operators</h5>
                  <p>
                    The six continents are open for the adventures of a
                    lifetime. Go anywhere, any place, anytime..
                  </p>
                </div>
              </div>
              <div
                className="rt-single-icon-box wow fade-in-bottom"
                data-wow-duration="2s"
              >
                <div className="icon-thumb">
                  <img
                    src="/images/icons-image/box-icon-3.png"
                    alt="box-icon"
                    draggable="false"
                  />
                </div>
                <div className="iconbox-content">
                  <h5>Access to 9,300 Private Resorts</h5>
                  <p>
                    Giving you access to the world's most luxurious members only
                    resorts.Go anywhere, any place, anytime.
                  </p>
                </div>
              </div>
              <div
                className="rt-single-icon-box wow fade-in-bottom"
                data-wow-duration="2.5s"
              >
                <div className="icon-thumb">
                  <img
                    src="/images/icons-image/box-icon-4.png"
                    alt="box-icon"
                    draggable="false"
                  />
                </div>
                <div className="iconbox-content">
                  <h5>All major Cruise Lines</h5>
                  <p>
                    Glide through the waters of the five oceans, river cruises
                    and luxury cruises.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
