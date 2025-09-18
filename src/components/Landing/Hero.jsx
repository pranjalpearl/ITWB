import BookingForm from "./BookingForm";

const Hero = () => {
  return (
    <section className="rt-banner-area">
      <div
        className="single-rt-banner rt-banner-height"
        style={{ backgroundImage: "url(/images/all-img/banner01.png)" }}
      >
        <div className="container">
          <div className="row  rt-banner-height align-items-center">
            <div className="col-lg-9">
              <div className="rt-banner-content">
                <h1
                  className="wow fade-in-bottom"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  Explore <br />
                  The World!
                </h1>
                <p className="wow fade-in-top">
                  You can create a Custom Trip.Search Our Lowest Fares to <br />
                  Your Favorite Destinations.Find a better way to travel
                </p>

                {/* <div
                  className="rt-banner-searchbox standard-search wow fade-in-bottom "
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane show active"
                      id="rt-item_a_first"
                      role="tabpanel"
                      aria-labelledby="rt-item_a_first"
                    >
                      <form action="#">
                        <div className="rt-radio-group">
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline1"
                              name="customRadioInline1"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline1"
                            >
                              One-way
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline2"
                              name="customRadioInline2"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline2"
                            >
                              Round-trip
                            </label>
                          </div>
                          <div className="custom-control custom-radio custom-control-inline">
                            <input
                              type="radio"
                              id="customRadioInline3"
                              name="customRadioInline3"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customRadioInline3"
                            >
                              Multi-city
                            </label>
                          </div>
                          <div className="dropdown form-check-inline rt-searchlink mr-md-5">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              1 Adult
                            </a>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <a className="dropdown-item" href="#">
                                Room one
                              </a>
                              <a className="dropdown-item" href="#">
                                Room two
                              </a>
                              <a className="dropdown-item" href="#">
                                Room three
                              </a>
                            </div>
                          </div>
                          <div className="dropdown form-check-inline rt-searchlink">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink2"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Economy
                            </a>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink2"
                            >
                              <a className="dropdown-item" href="#">
                                Room one
                              </a>
                              <a className="dropdown-item" href="#">
                                Room two
                              </a>
                              <a className="dropdown-item" href="#">
                                Room three
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="rt-input-group">
                          <div className="single-input  col-rt-in-3">
                            <select
                              className="rt-selectactive banner-select"
                              name="from"
                              style={{ width: "100%" }}
                            >
                              <option value="1">from</option>
                              <option value="2">Alaska</option>
                              <option value="3">Bahamas</option>
                              <option value="4">Bermuda</option>
                              <option value="5">Canada</option>
                              <option value="6">Caribbean</option>
                              <option value="7">Europe</option>
                              <option value="8">Hawaii</option>
                            </select>
                            <span className="input-iconbadge">
                              <img
                                src="/images/icons-image/s_icon_1.png"
                                alt=""
                                draggable="false"
                              />
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <select
                              className="rt-selectactive banner-select"
                              name="to"
                              style={{ width: "100%" }}
                            >
                              <option value="1">To</option>
                              <option value="2">Alaska</option>
                              <option value="3">Bahamas</option>
                              <option value="4">Bermuda</option>
                              <option value="5">Canada</option>
                              <option value="6">Caribbean</option>
                              <option value="7">Europe</option>
                              <option value="8">Hawaii</option>
                            </select>
                            <span className="input-iconbadge">
                              <img
                                src="/images/icons-image/s_icon_2.png"
                                alt=""
                                draggable="false"
                              />
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Depart"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Return"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-1">
                            <button type="submit">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane  rtIncative"
                      id="rt-item_a_second"
                      role="tabpanel"
                      aria-labelledby="rt-item_a_second"
                    >
                      <form action="#">
                        <div className="rt-radio-group">
                          <div className="dropdown form-check-inline rt-searchlink">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink24"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Guestes per room
                            </a>

                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuLink24"
                            >
                              <a className="dropdown-item" href="#">
                                Room one
                              </a>
                              <a className="dropdown-item" href="#">
                                Room two
                              </a>
                              <a className="dropdown-item" href="#">
                                Room three
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="rt-input-group">
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="destination"
                            />
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Depart"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Return"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="keywords(optional)"
                            />
                          </div>
                          <div className="single-input  col-rt-in-1">
                            <button type="submit">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane  rtIncative"
                      id="rt-item_a_third"
                      role="tabpanel"
                      aria-labelledby="rt-item_a_third"
                    >
                      <form action="#">
                        <div className="rt-input-group">
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="destination"
                            />
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Depart"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Return"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="keywords(optional)"
                            />
                          </div>
                          <div className="single-input  col-rt-in-1">
                            <button type="submit">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane  rtIncative"
                      id="rt-item_a_four"
                      role="tabpanel"
                      aria-labelledby="rt-item_a_four"
                    >
                      <form action="#">
                        <div className="rt-input-group">
                          <div className="single-input  col-rt-in-3">
                            <select
                              className="rt-selectactive banner-select"
                              name="from"
                              style={{ width: "100%" }}
                            >
                              <option value="1">from</option>
                              <option value="2">Alaska</option>
                              <option value="3">Bahamas</option>
                              <option value="4">Bermuda</option>
                              <option value="5">Canada</option>
                              <option value="6">Caribbean</option>
                              <option value="7">Europe</option>
                              <option value="8">Hawaii</option>
                            </select>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <select
                              className="rt-selectactive banner-select"
                              name="to"
                              style={{ width: "100%" }}
                            >
                              <option value="1">To</option>
                              <option value="2">Alaska</option>
                              <option value="3">Bahamas</option>
                              <option value="4">Bermuda</option>
                              <option value="5">Canada</option>
                              <option value="6">Caribbean</option>
                              <option value="7">Europe</option>
                              <option value="8">Hawaii</option>
                            </select>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control rt-date-picker has-icon"
                              placeholder="Depart"
                            />
                            <span className="input-iconbadge">
                              <i className="icofont-ui-calendar"></i>
                            </span>
                          </div>
                          <div className="single-input  col-rt-in-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="train no( opt)"
                            />
                          </div>
                          <div className="single-input  col-rt-in-1">
                            <button type="submit">
                              <i className="icofont-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <ul
                  className="nav serachnavs wow fade-in-bottom"
                  id="rtMultiTab"
                  role="tablist"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.5s"
                >
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="first-tab"
                      data-target="#rt-item_b_first"
                      data-secondary="#rt-item_a_first"
                      data-toggle="tab"
                      href="#first"
                      role="tab"
                      aria-controls="first-tab"
                      aria-selected="false"
                    >
                      <i className="icofont-airplane"></i>
                      <span>Flights</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link inactive"
                      id="second-tab"
                      data-target="#rt-item_b_second"
                      data-secondary="#rt-item_a_second"
                      data-toggle="tab"
                      href="#second"
                      role="tab"
                      aria-controls="second-tab"
                      aria-selected="true"
                    >
                      <i className="icofont-hotel"></i>
                      <span>Hotels</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link inactive"
                      id="third-tab"
                      data-target="#rt-item_b_thrid"
                      data-secondary="#rt-item_a_third"
                      data-toggle="tab"
                      href="#third"
                      role="tab"
                      aria-controls="third-tab"
                      aria-selected="false"
                    >
                      <i className="icofont-car-alt-4"></i>
                      <span>Cars</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link inactive"
                      id="four-tab"
                      data-target="#rt-item_b_four"
                      data-secondary="#rt-item_a_four"
                      data-toggle="tab"
                      href="#four"
                      role="tab"
                      aria-controls="four-tab"
                      aria-selected="false"
                    >
                      <i className="icofont-train-line"></i>
                      <span>Trains</span>
                    </a>
                  </li>
                </ul> */}
                <BookingForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
