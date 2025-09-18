import React from "react";

const CounterCard = () => {
  return (
    <div className="counter-area">
      <div className="container">
        <div className="row">
          {/* First Counter */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="media counter-box-1 align-items-center wow fadeInUp">
              <img
                src="/images/counter-icons/counter_iocn_1.png"
                alt="counter_icon"
                draggable="false"
              />
              <div className="media-body">
                <h5>Trusted Members</h5>
                <h6>
                  <span className="counter">90,000</span>
                  <span>+</span>
                </h6>
              </div>
            </div>
          </div>

          {/* Second Counter */}
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="media counter-box-1 align-items-center wow fadeInUp"
              data-wow-duration="1.5s"
            >
              <img
                src="/images/counter-icons/counter_iocn_2.png"
                alt="counter_icon"
                draggable="false"
              />
              <div className="media-body">
                <h5>Happy Clients</h5>
                <h6>
                  <span className="counter">20,000</span>
                  <span>+</span>
                </h6>
              </div>
            </div>
          </div>

          {/* Third Counter */}
          <div className="col-lg-4 col-md-6 col-12">
            <div
              className="media counter-box-1 align-items-center wow fadeInUp"
              data-wow-duration="2s"
            >
              <img
                src="/images/counter-icons/counter_iocn_3.png"
                alt="counter_icon"
                draggable="false"
              />
              <div className="media-body">
                <h5>Projects Completed</h5>
                <h6>
                  <span className="counter">80,000</span>
                  <span>+</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
