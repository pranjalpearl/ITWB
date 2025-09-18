const Service = () => {
  return (
    <section
      className="emigr-services-area rtbgprefix-contain"
      style={{ backgroundImage: "url('/images/backgrounds/dotbg.png')" }}
    >
      <div className="spacer-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 text-center mx-auto">
            <div className="rt-section-title-wrapper">
              <h2 className="rt-section-title">
                <span>WHY Choose Our Travel Agency?</span>
                Our Core Values
              </h2>
              <p>
                Our thoughtful team of knowledgeable experts are here to take
                care of every need, from the second you contact us to when you
                return
              </p>
            </div>
          </div>
        </div>
        <div className="section-title-spacer"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mx-auto text-center">
            <div className="services-box-1 wow fade-in-bottom">
              <div className="services-thumb">
                <img
                  src="/images/service-icons/s_icon_1.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <h4>Accommodation</h4>
              <p>
                No matter where you are travelling, Emigrar is here to help you
                get the best deals in Hotels around the world.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto text-center">
            <div
              className="services-box-1 wow fade-in-bottom"
              data-wow-duration="1.5s"
            >
              <div className="services-thumb">
                <img
                  src="/images/service-icons/s_icon_2.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <h4>Transportation</h4>
              <p>
                Whether you are travelling through Air, Sea or Land, Emigrar can
                arrange transportation according to.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mx-auto text-center">
            <div
              className="services-box-1 wow fade-in-bottom"
              data-wow-duration="2s"
            >
              <div className="services-thumb">
                <img
                  src="/images/service-icons/s_icon_3.png"
                  alt=""
                  draggable="false"
                />
              </div>
              <h4>Expert Trip Planning</h4>
              <p>
                Our Talented and Expert Trip Planning Team can make itinerary
                that suits our clients the best. We will make your travel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="spacer-bottom"></div>
    </section>
  );
};

export default Service;
