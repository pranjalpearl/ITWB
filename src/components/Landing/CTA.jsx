import React from "react";

const CTA = () => {
  return (
    <div>
      <div className="spacer-top"></div>
      <section className="rt-cta-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="cta-box-1 d-flex flex-lg-row flex-column align-items-center text-center text-lg-left justify-content-lg-between rtbgprefix-cover text-white justify-content-center"
                style={{
                  backgroundImage: "url('/images/backgrounds/cat_1.jpg')",
                }}
              >
                <div className="left-column">
                  <h4
                    className="wow fade-in-top"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    Not sure where to go next?{" "}
                    <span>We're here to inspire you</span>
                  </h4>
                  <p
                    className="wow fade-in-bottom"
                    data-wow-duration="1s"
                    data-wow-delay="0.2s"
                  >
                    Send us an email and someone on our team will be in touch
                    with you!
                  </p>
                </div>
                <div className="right-column">
                  <a
                    href="#"
                    className="rt-btn rt-gradient rt-sm text-uppercase rt-rounded rt-Bshadow-2 wow fade-in-left"
                    data-wow-duration="1s"
                    data-wow-delay="0.6s"
                  >
                    Plan Your Next Trip
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

export default CTA;
