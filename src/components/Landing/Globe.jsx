const Globe = () => {
  return (
    <div>
      <div className="spacer-top"></div>

      <section className="flight-dela-area" data-scrollax-parent="true">
        <div
          className="rt-shape-emenetns-1"
          style={{
            backgroundImage: "url('/images/shape-elements/shape_1.png')",
          }}
          data-scrollax="properties: { translateY: '340px' }"
        ></div>

        <div
          className="rt-shape-emenetns-2"
          style={{
            backgroundImage: "url('/images/shape-elements/shape-2.png')",
          }}
          data-scrollax="properties: { translateX: '-140px' }"
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 mx-auto text-center">
              <div className="rt-section-title-wrapper">
                <h2 className="rt-section-title">
                  <span>Explore Top Destinations</span>
                  Top Round-trip Flight Deals
                </h2>
                <p>
                  Get inspired, find the best deals and start an unforgettable
                  journeya.Looking for the best flight deals for your next trip?
                  Find the top Emigrar deals that are updated daily to book the
                  cheapest flight up to 55% off the average price.
                </p>
              </div>
            </div>
          </div>
          <div className="section-title-spacer"></div>
          <div className="row">
            <div className="col-xl-8 col-lg-10">
              <div className="row">
                <div className="col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    data-wow-duration="1s"
                    data-wow-delay=".02s"
                    href="#"
                    style={{
                      backgroundImage: "url('/images/flights/flt_1.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_1"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className=" col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    href="#"
                    data-wow-duration="1.3s"
                    data-wow-delay=".04s"
                    style={{
                      backgroundImage: "url('/images/flights/flt_2.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_2"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    data-wow-duration="1.6s"
                    data-wow-delay=".06s"
                    href="#"
                    style={{
                      backgroundImage: "url('/images/flights/flt_3.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_3"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    data-wow-duration="1.9s"
                    data-wow-delay=".08s"
                    href="#"
                    style={{
                      backgroundImage: "url('/images/flights/flt_4.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_4"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    data-wow-duration="2.2s"
                    data-wow-delay=".010s"
                    href="#"
                    style={{
                      backgroundImage: "url('/images/flights/flt_5.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_5"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className="col-md-6">
                  <a
                    className="flight-box wow fade-in-bottom"
                    data-wow-duration="2.6s"
                    data-wow-delay=".12s"
                    href="#"
                    style={{
                      backgroundImage: "url('/images/flights/flt_6.jpg')",
                    }}
                  >
                    <div className="rt-inner-overlay color_6"></div>
                    <div className="trip-to">
                      <span> Trip to </span>
                      <span> Peru </span>
                    </div>
                    <div className="trip-form">
                      <span>7 days</span>
                      <span>$4570</span>
                    </div>
                  </a>
                </div>
                <div className="col-12 text-center mt-4">
                  <a
                    href="#"
                    className="rt-btn rt-gradient rt-sm text-uppercase rt-rounded rt-Bshadow-2"
                  >
                    browse more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Globe;
