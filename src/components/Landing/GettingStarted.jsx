

const GettingStarted = () => {
  return (
    <>
      <div className="spacer-top"></div>
      <section className="works-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 text-center mx-auto">
              <div className="rt-section-title-wrapper">
                <h2 className="rt-section-title">
                  <span>Here's How It Works</span>
                  Getting Started? It’s Simple
                </h2>
                <p>
                  Prepare For Your Trip.Find out all you need to know before you
                  go.Traveling is as unique as you are. And there is no one
                  package that fits all. That's why we offer customized travel
                  packages.
                </p>
              </div>
            </div>
          </div>
          <div className="section-title-spacer"></div>
          <div className="row">
            <div className="col-lg-3 col-md-6 mx-auto text-center">
              <div className="services-box-2 wow fade-in-bottom">
                <div className="flex services-thumb text-center justify-center">
                  <img
                    src="/images/service-icons/s_icon_4.png"
                    alt="service-icons"
                    draggable="false"
                  />
                </div>
                <span className="inner-counter"></span>
                <h4>Search</h4>
                <p>Over 1,200,000 Hotels, Apartments and Hostels</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mx-auto text-center">
              <div
                className="services-box-2 wow fade-in-bottom"
                data-wow-duration="1s"
              >
                <div className="flex services-thumb text-center justify-center">
                  <img
                    src="/images/service-icons/s_icon_5.png"
                    alt="service-icons"
                    draggable="false"
                  />
                </div>
                <span className="inner-counter"></span>
                <h4>Compare & Book</h4>
                <p>By price, location, rating and more.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mx-auto text-center">
              <div
                className="services-box-2 wow fade-in-bottom"
                data-wow-duration="1.5s"
              >
               <div className="flex services-thumb text-center justify-center">
                  <img
                    src="/images/service-icons/s_icon_6.png"
                    alt="service-icons"
                    draggable="false"
                  />
                </div>
                <span className="inner-counter"></span>
                <h4>Get travel insurance</h4>
                <p>Buy comprehensive cover for your next trips</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mx-auto text-center">
              <div
                className="services-box-2 wow fade-in-bottom"
                data-wow-duration="2s"
              >
                <div className="flex services-thumb text-center justify-center">
                  <img
                    src="/images/service-icons/s_icon_7.png"
                    alt="service-icons"
                    draggable="false"
                  />
                </div>
                <span className="inner-counter"></span>
                <h4>Book a room</h4>
                <p>By finding the best price for your ideal hotel.</p>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <a
                href="#"
                className="rt-btn rt-gradient text-uppercase rt-sm rt-rounded rt-Bshadow-2"
              >
                Tour the world
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GettingStarted;
