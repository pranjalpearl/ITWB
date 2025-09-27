"use client";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
const CSR = () => {
  const params = useParams();
  const { id } = params;
  const tours = useSelector((state) => state.tours.tours);
  const tour = tours.find((t) => t.id === Number(id));
  return (
    <div>
      <section className="content-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 bg-amber-300"></div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <div className="hotel-inner-content">
                <h5 className="f-size-18 rt-medium">
                  12 Day Beijing to Shanghai Discovery
                </h5>
                <p className="f-size-13">
                  <span className="text-555">
                    Culture and lifestyle - Calligraphy Class at Pagoda -
                    Leisure walking
                  </span>
                  <span className="pl-2 text-777">| Near the subway</span>
                </p>
                <p className="rt-mt-15 rt-mb-20">
                  <span className="badge rt-gradinet-badge pill rt-mr-10">
                    4.3 <small>/5</small>
                  </span>
                  <span className="primary-color rt-mr-10">Excellent</span>
                  <span className="f-size-12 text-878">( 86 Reviews )</span>
                </p>
                <p className="f-size-14 text-333">
                  "It is a good hotel with nice service, everything is so
                  convenient. will choose it again next time i go there. "
                </p>
                <p className="primary-color">Unique about this tour:</p>

                <ul className="rt-list rt-mb-30 ">
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Walking along the Banyan Lake and Cedar Lake in Guilin
                  </li>
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Boat cruise on the picturesque Li River down to Yangshuo
                  </li>
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Cycling around the countryside and attend a cooking
                    className in Yangshuo
                  </li>
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Great Wall of Mutianyu, the Great Wall with much less
                    tourists
                  </li>
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Cruise and landscapes of Li River in Guilin
                  </li>
                  <li className="text-333 title-font d-block f-size-13">
                    <span className="primary-color rt-mr-5">
                      <i className="icofont-check"></i>
                    </span>
                    Covers all the major sites in Beijing and Xi'an, in just 6
                    days
                  </li>
                </ul>

                <div className="rt-divider style-one rt-mb-30"></div>
                <div className="d-flex flex-md-row flex-column justify-content-md-between">
                  <div>
                    <span className="d-block f-size-12 text-878">From USD</span>
                    <span className="d-block f-size-24 primary-color rt-strong">
                      $364
                    </span>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="rt-btn rt-gradient rt-sm2 text-uppercase pill"
                    >
                      Select Room
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="rt-btn rt-gradient3 rt-sm2 text-uppercase pill"
                    >
                      Update
                    </a>
                  </div>
                </div>
                <div className="rt-divider style-one rt-mt-30"></div>
                <div className="rt-mt-25">
                  <ul className="rt-social normal-style-one ">
                    <li>
                      <span className="f-size-14">
                        <strong>Share Link:</strong>
                      </span>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="icofont-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 rt-mt-58">
              <div className="hotel-tabs">
                <div className="flight-list-box rt-mb-40">
                  <ul
                    className="nav rt-tab-nav-1 pill  pl-md-4 pr-md-4"
                    id="myTab-2"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="rt-itm_1-tab"
                        data-toggle="tab"
                        href="#rt-itm_1"
                        role="tab"
                        aria-controls="rt-itm_1"
                        aria-selected="true"
                      >
                        Overview
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="rt-itm_2-tab"
                        data-toggle="tab"
                        href="#rt-itm_2"
                        role="tab"
                        aria-controls="rt-itm_2"
                        aria-selected="false"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="rt-itm_3-tab"
                        data-toggle="tab"
                        href="#rt-itm_3"
                        role="tab"
                        aria-controls="rt-itm_3"
                        aria-selected="false"
                      >
                        Trip to customize
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="rt-itm_5-tab"
                        data-toggle="tab"
                        href="#rt-itm_5"
                        role="tab"
                        aria-controls="rt-itm_5"
                        aria-selected="false"
                      >
                        Policies
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="rt-itm_6-tab"
                        data-toggle="tab"
                        href="#rt-itm_6"
                        role="tab"
                        aria-controls="rt-itm_6"
                        aria-selected="false"
                      >
                        Reviews
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="rt-itm_1"
                    role="tabpanel"
                    aria-labelledby="rt-itm_1-tab"
                  >
                    <div className="flight-list-box rt-mb-30">
                      <div className="inner-content rt-pl-15">
                        <h4 className="badge-hilighit color--1 f-size-14 text-white text-font text-uppercase rt-mb-30 rt-mt-15 rt-strong">
                          HIGHLIGHTS
                        </h4>
                        <p>
                          Start at magical Gulin where boats travel through the
                          many lakes here via connected rivers. On Shanhu Lake’s
                          shore, twin pagodas, the Sun and Moon, light up the
                          sky at night. Move on to ancient Xi'an. A visit to
                          Xi'an is a journey into China's long history. Xi'an
                          served as the capital for 12 dynasties over 1,000
                          years. The world-famous Terracotta Army is located in
                          Xi'an as well as many other historical sites you can
                          visit.
                        </p>
                        <p>
                          Whether you are looking for ancient history, urban
                          wonders, picturesque landscapes, or cultural
                          experiences, this trip will satisfy you. More and more
                          world travelers are turning toward China. In this
                          trip, you will visit the major cities and their
                          highlights.
                        </p>
                        <p>
                          Finish up with Beijing. The Chinese capital is
                          well-known for its mixture of ancient culture and
                          urban growth. The most famous attractions in Beijing
                          include the Great Wall of China and the Forbidden
                          City.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="rt-itm_2"
                    role="tabpanel"
                    aria-labelledby="rt-itm_2-tab"
                  >
                    <div className="flight-list-box rt-mb-30">
                      <h4 className="f-siz-18 rt-pt-10 rt-semiblod text-uppercase rt-mb-15">
                        WHAT’S INCLUDED
                      </h4>
                      <h5 className="f-size-16 rt-mt-10">
                        <span className="rt-mr-6 primary-color f-size-25">
                          <i className="icofont-bed"></i>
                        </span>
                        ACCOMMODATION
                      </h5>
                      <p className="text-333 f-size-14 rt-pl-25">
                        Guesthouse/Hostel (6 nights), Hotel (3 nights),
                        Overnight Hard Sleeper Train (2 nights)
                      </p>
                      <h5 className="f-size-16 rt-mt-10">
                        <span className="rt-mr-6 primary-color f-size-25">
                          <i className="icofont-oil-truck"></i>
                        </span>
                        TRANSPORT
                      </h5>
                      <p className="text-333 f-size-14 rt-pl-25">
                        Guesthouse/Hostel (6 nights), Hotel (3 nights),
                        Overnight Hard Sleeper Train (2 nights)
                      </p>
                      <h5 className="f-size-16 rt-mt-10">
                        <span className="rt-mr-6 primary-color f-size-25">
                          <i className="icofont-check-circled"></i>
                        </span>
                        INCLUDED ACTIVITIES
                      </h5>
                      <ul className="rt-list rt-pl-25">
                        <li className="text-333 title-font d-block f-size-14">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Beijing - Great Wall trekking
                        </li>
                        <li className="text-333 title-font d-block f-size-14">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Xi'an - Muslim Quarter walking tour
                        </li>
                        <li className="text-333 title-font d-block f-size-14">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Xi'an - Terracotta Warriors
                        </li>
                        <li className="text-333 title-font d-block f-size-14">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Shanghai - Walking tour
                        </li>
                        <li className="text-333 title-font d-block f-size-13">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Huangshan - National Park Trek
                        </li>
                        <li className="text-333 title-font d-block f-size-13">
                          <span className="primary-color rt-mr-5">
                            <i className="icofont-check"></i>
                          </span>
                          Hongcun - Guided Village Tour
                        </li>
                      </ul>
                    </div>
                    <div className="flight-list-box rt-mb-30">
                      <h4 className="f-siz-18 rt-pt-10 rt-semiblod text-uppercase rt-mb-15">
                        WHAT’S INCLUDED
                      </h4>
                      <h5 className="f-size-16 rt-mt-10">
                        <span className="rt-mr-6 primary-color f-size-25">
                          <i className="icofont-airplane-alt"></i>
                        </span>
                        International Flights
                      </h5>
                      <p className="text-333 f-size-14 rt-pl-25">
                        Any international flights to Beijing and from Shanghai
                        are not included in this price. We always recommend that
                        you arrive 1 day prior to your tour starting date.
                      </p>
                      <h5 className="f-size-16 rt-mt-10">
                        <span className="rt-mr-6 primary-color f-size-25">
                          <i className="icofont-trash"></i>
                        </span>
                        Travel Insurance
                      </h5>
                      <p className="text-333 f-size-14 rt-pl-25">
                        Travel insurance is not included in this North China
                        Getaway tour. Travel insurance is mandatory to buy. We
                        recommend purchasing it from World Nomads.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="rt-itm_3"
                    role="tabpanel"
                    aria-labelledby="rt-itm_3-tab"
                  >
                    <ul className="trip-timeline rt-list">
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              01
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Welcome To China!
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-1.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              02
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Visit Tiananmen Square, the Spiritual Heart of
                              China
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-2.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              03
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Beijing History and a Trip to The Great Wall
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-3.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              04
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Religion and Cuisine in Xi'an
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-4.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              05
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Amongst the Terracotta Warriors
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-5.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="time-line-item flight-list-box rt-mb-22">
                        <div className="timeline-counter">
                          <div className="inner-item">
                            <span className="d-block f-size-18 text-white">
                              Day
                            </span>
                            <span className="d-block f-size-28 text-white rt-strong">
                              06
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <h4 className="f-size-18 rt-semiblod rt-mb-25">
                              <span className="f-size-14 d-block rt-mb-5">
                                Guilin
                              </span>
                              Amongst the Terracotta Warriors
                            </h4>
                          </div>
                          <div className="col-md-4">
                            <img
                              src="/images/all-img/ex-6.jpg"
                              alt="trip image"
                              draggable="false"
                            />
                          </div>
                          <div className="col-md-8 mt-5 mt-md-0">
                            <p className="f-size-16 rt-strong">
                              Welcome to Guilin! Upon your arrival in Guilin,
                              the most scenic city in China, your personal guide
                              will meet you and escort you to your hotel.
                            </p>
                            <p className="f-size-14">
                              The rest of the day is yours to relax and spend as
                              you want. You can choose to step out into this
                              dynamic city for a little adventure of your
                              own.Transfer to your hotel, where you can rest, or
                              explore your surroundings at your leisure. Your
                              private tour through China's cultural highlights
                              begins tomorrow!
                            </p>
                            <ul className="rt-list">
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-1.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mr-10 rt-mt-10">
                                <img
                                  src="/images/all-img/ex-2.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                              <li className="rt-hw-60 primary-color rt-dorder-off rt-circle text-center d-inline-block rt-mt-10">
                                <img
                                  src="/images/all-img/ex-3.png"
                                  alt="image"
                                  draggable="false"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center">
                      <a
                        href="#"
                        className="rt-btn rt-gradient pill rt-sm2 text-uppercase rt-mt-10 rt-Bshadow-2"
                      >
                        Customize this trip
                      </a>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="rt-itm_5"
                    role="tabpanel"
                    aria-labelledby="rt-itm_5-tab"
                  >
                    <div className="flight-list-box rt-mb-30">
                      <div className="inner-content rt-pt-10 rt-pl-15">
                        <h4 className="f-size-18 rt-semiblod rt-mb-35 ">
                          Hotel Policies
                        </h4>
                      </div>
                      <div className="media service-amitence-box rt-mb-30">
                        <img
                          src="/images/all-img/hottel-cion-16.png"
                          className="rt-pr-23"
                          alt="hottel-cion"
                        />
                        <div className="media-body rt-pl-23">
                          <h5 className="f-size-16 rt-semiblod">
                            Check-in & Check-out
                          </h5>
                          <p className="f-size-13 text-333">
                            <span className="rt-mr-40">
                              <i className="icofont-check-circled primary-color rt-pr-4"></i>
                              Check-in from 14:00
                            </span>
                            <span className="rt-mr-40">
                              <i className="icofont-check-circled primary-color"></i>
                              Check-out before 12:00
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="media service-amitence-box rt-mb-30">
                        <img
                          src="/images/all-img/hottel-cion-17.png"
                          className="rt-pr-23"
                          alt="hottel-cion"
                        />
                        <div className="media-body rt-pl-23">
                          <h5 className="f-size-16 rt-semiblod">
                            Children and Extra Beds
                          </h5>
                          <p className="f-size-13 text-333">
                            Guests aged under 18 must be accompanied by a parent
                            or legal guardian.
                          </p>
                        </div>
                      </div>
                      <div className="media service-amitence-box rt-mb-30">
                        <img
                          src="/images/all-img/hottel-cion-15.png"
                          className="rt-pr-23"
                          alt="hottel-cion"
                        />
                        <div className="media-body rt-pl-23">
                          <h5 className="f-size-16 rt-semiblod">Dining</h5>
                          <p className="f-size-13 text-333">
                            Buffet breakfast HK$130 ( Approximately $17 )
                          </p>
                        </div>
                      </div>
                      <div className="media service-amitence-box rt-mb-30">
                        <img
                          src="/images/all-img/hottel-cion-14.png"
                          className="rt-pr-23"
                          alt="hottel-cion"
                        />
                        <div className="media-body rt-pl-23">
                          <h5 className="f-size-16 rt-semiblod rt-mb-10">
                            Paying at the Hotel
                          </h5>
                          <div className="rt-footer-social">
                            <ul>
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
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight-list-box">
                      <h3 className="f-size-18 rt-semiblod rt-mt-15 rt-mb-30">
                        Cancellation
                      </h3>
                      <h3 className="f-size-14 text-uppercase rt-mt-15 rt-mb-30">
                        CANCELLATIONS AND REFUNDS
                      </h3>

                      <h4 className="f-size-14 rt-medium rt-mb-10">
                        Our Fault
                      </h4>

                      <p className="f-size-14">
                        We work very hard to ensure that all tours run as
                        scheduled and enjoy a 99% success rate. When a tour
                        cancels, and it is the fault of The Shoreditch Pub Crawl
                        or one of the freelance guides we work with, we will
                        refund your prebought ticket as well as offer up to 100%
                        of the value of the original ticket price as credit
                        towards the purchase of another tour as compensation.
                        This credit cannot be used in any other way and will not
                        be cashable.
                      </p>
                      <br></br>
                      <h4 className="f-size-14 rt-medium rt-mb-10">
                        Your Request
                      </h4>

                      <p className="f-size-14">
                        Should you not be able to attend your tour and need to
                        cancel a tour booking letting us know at least 24 hours
                        before your tour, we will cancel your ticket and credit
                        you 50% of the purchase price towards the purchase of an
                        additional future tour. We have a no refund policy,
                        unless we are at fault for the cancelation of your tour.
                      </p>
                      <br></br>
                      <h4 className="f-size-14 rt-medium rt-mb-10">
                        Acts of God
                      </h4>
                      <p className="f-size-14">
                        We may not be held responsible should we be unable to
                        offer a tour due to Acts of God, (tsunamis, earthquakes,
                        volcanic dust clouds, extreme weather, etc.).
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="rt-itm_6"
                    role="tabpanel"
                    aria-labelledby="rt-itm_6-tab"
                  >
                    <div className="flight-list-box rt-mb-30 row">
                      <div className="col-12">
                        <h4 className="f-seize-18 rt-semiblod rt-mb-30">
                          Reviews
                          <span className="f-size-14">
                            (86 verified reviews)
                          </span>
                        </h4>
                        <div className="row align-items-center">
                          <div className="col-md-4">
                            <div className="review-box rt-pt-36 rt-pb-30 rt-pr-30 rt-pl-30 rt-dborder-primary text-center rounded">
                              <h4 className="f-size-24 primary-color">
                                Excellent
                              </h4>
                              <h5 className="f-size-60 primary-color">
                                <span className="rt-strong">4.3</span>
                                <span className="f-size-14 text-878 rt-">
                                  /5
                                </span>
                              </h5>
                              <h6 className="f-size-18">
                                <span className="primary-color">Emigrar</span>
                                Verified Reviews
                              </h6>
                            </div>
                          </div>
                          <div className="col-md-7 offset-md-1">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="single-progress rt-mb-30">
                                  <div className="progress-title f-size-18 heading-color-1">
                                    <span className="float-right">4.4</span>
                                    <span>Location</span>
                                  </div>
                                  <div className="progress" data-percent="80%">
                                    <span className="progress-bar bg-gr-1"></span>
                                  </div>
                                </div>
                                <div className="single-progress rt-mb-30">
                                  <div className="progress-title f-size-18 heading-color-1">
                                    <span className="float-right">4.4</span>
                                    <span>Service</span>
                                  </div>
                                  <div className="progress" data-percent="80%">
                                    <span className="progress-bar bg-gr-1"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="single-progress rt-mb-30">
                                  <div className="progress-title f-size-18 heading-color-1">
                                    <span className="float-right">4.5</span>
                                    <span>Cleanliness</span>
                                  </div>
                                  <div className="progress" data-percent="80%">
                                    <span className="progress-bar bg-gr-1"></span>
                                  </div>
                                </div>
                                <div className="single-progress rt-mb-30">
                                  <div className="progress-title f-size-18 heading-color-1">
                                    <span className="float-right">4.5</span>
                                    <span>Facilities</span>
                                  </div>
                                  <div className="progress" data-percent="80%">
                                    <span className="progress-bar bg-gr-1"></span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flight-list-box single-commnets row rt-mb-30">
                      <div className="col-lg-3 col-md-4  rt-dashed-primary rt-pt-30 rt-pl-30 rt-pb-30 rt-pr-30 rt-dborder-primary rounded">
                        <div
                          className="cmnt-thumb rt-hw-60 rt-border-primary rounded-circle rtbgprefix-cover rt-mb-20"
                          style={{
                            backgroundImage: "url('/images/all-img/cmnt-2.jpg)",
                          }}
                        ></div>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-ui-calendar rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-edit rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                      </div>
                      <div className="col-lg-9 col-md-8 pl-md-5">
                        <h4 className="f-size-17 rt-strong">
                          Simon Lopez
                          <span className="rt-pl-15 f-size-14">
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                          </span>
                        </h4>
                        <span className="f-size-13 text-878 d-block rt-mb-15">
                          November 20, 2018 at 8:31 pm
                        </span>
                        <p className="f-size-14 text-333">
                          I am very please with Garden View Hong Kong Hotel! I
                          will certainly return. I got a wonderful from the 15
                          floor to the Botanical Garden a great Supermarket in
                          the corner, about 2 minutes walking, and a bus stop to
                          downtown within few meters. It is close to downtown
                          and great price!
                        </p>

                        <a
                          href="#"
                          className="replay-cmnt text-uppercase rt-strong"
                        >
                          Reply <i className="icofont-reply-all"></i>
                        </a>
                      </div>
                    </div>
                    <div className="flight-list-box single-commnets row rt-mb-30">
                      <div className="col-lg-3 col-md-4  rt-dashed-primary rt-pt-30 rt-pl-30 rt-pb-30 rt-pr-30 rt-dborder-primary rounded">
                        <div
                          className="cmnt-thumb rt-hw-60 rt-border-primary rounded-circle rtbgprefix-cover rt-mb-20"
                          style={{
                            backgroundImage: "url('/images/all-img/cmnt-3.jpg)",
                          }}
                        ></div>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-ui-calendar rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-edit rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                      </div>
                      <div className="col-md-8 col-lg-9 pl-md-5">
                        <h4 className="f-size-17 rt-strong">
                          Gary Dunn
                          <span className="rt-pl-15 f-size-14">
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                          </span>
                        </h4>
                        <span className="f-size-13 text-878 d-block rt-mb-15">
                          November 20, 2018 at 8:31 pm
                        </span>
                        <p className="f-size-14 text-333">
                          I am very please with Garden View Hong Kong Hotel! I
                          will certainly return. I got a wonderful from the 15
                          floor to the Botanical Garden a great Supermarket in
                          the corner, about 2 minutes walking, and a bus stop to
                          downtown within few meters. It is close to downtown
                          and great price!
                        </p>

                        <a
                          href="#"
                          className="replay-cmnt text-uppercase rt-strong"
                        >
                          Reply <i className="icofont-reply-all"></i>
                        </a>
                      </div>
                    </div>
                    <div className="flight-list-box single-commnets row rt-mb-30">
                      <div className="col-lg-3 col-md-4  rt-dashed-primary rt-pt-30 rt-pl-30 rt-pb-30 rt-pr-30 rt-dborder-primary rounded">
                        <div
                          className="cmnt-thumb rt-hw-60 rt-border-primary rounded-circle rtbgprefix-cover rt-mb-20"
                          style={{
                            backgroundImage: "url('/images/all-img/cmnt-4.jpg)",
                          }}
                        ></div>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-ui-calendar rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-edit rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                      </div>
                      <div className="col-md-8 col-lg-9 pl-md-5">
                        <h4 className="f-size-17 rt-strong">
                          Mark Ques
                          <span className="rt-pl-15 f-size-14">
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                          </span>
                        </h4>
                        <span className="f-size-13 text-878 d-block rt-mb-15">
                          November 20, 2018 at 8:31 pm
                        </span>
                        <p className="f-size-14 text-333">
                          I am very please with Garden View Hong Kong Hotel! I
                          will certainly return. I got a wonderful from the 15
                          floor to the Botanical Garden a great Supermarket in
                          the corner, about 2 minutes walking, and a bus stop to
                          downtown within few meters. It is close to downtown
                          and great price!
                        </p>

                        <a
                          href="#"
                          className="replay-cmnt text-uppercase rt-strong"
                        >
                          Reply <i className="icofont-reply-all"></i>
                        </a>
                      </div>
                    </div>
                    <div className="flight-list-box single-commnets row rt-mb-30">
                      <div className="col-lg-3 col-md-4  rt-dashed-primary rt-pt-30 rt-pl-30 rt-pb-30 rt-pr-30 rt-dborder-primary rounded">
                        <div
                          className="cmnt-thumb rt-hw-60 rt-border-primary rounded-circle rtbgprefix-cover rt-mb-20"
                          style={{
                            backgroundImage: "url('/images/all-img/cmnt-2.jpg)",
                          }}
                        ></div>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-ui-calendar rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-edit rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                      </div>
                      <div className="col-md-8 col-lg-9 pl-md-5">
                        <h4 className="f-size-17 rt-strong">
                          Mans Livly
                          <span className="rt-pl-15 f-size-14">
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                          </span>
                        </h4>
                        <span className="f-size-13 text-878 d-block rt-mb-15">
                          November 20, 2018 at 8:31 pm
                        </span>
                        <p className="f-size-14 text-333">
                          I am very please with Garden View Hong Kong Hotel! I
                          will certainly return. I got a wonderful from the 15
                          floor to the Botanical Garden a great Supermarket in
                          the corner, about 2 minutes walking, and a bus stop to
                          downtown within few meters. It is close to downtown
                          and great price!
                        </p>

                        <a
                          href="#"
                          className="replay-cmnt text-uppercase rt-strong"
                        >
                          Reply <i className="icofont-reply-all"></i>
                        </a>
                      </div>
                    </div>
                    <div className="flight-list-box single-commnets row rt-mb-30">
                      <div className="col-lg-3 col-md-4  rt-dashed-primary rt-pt-30 rt-pl-30 rt-pb-30 rt-pr-30 rt-dborder-primary rounded">
                        <div
                          className="cmnt-thumb rt-hw-60 rt-border-primary rounded-circle rtbgprefix-cover rt-mb-20"
                          style={{
                            backgroundImage: "url('/images/all-img/cmnt-2.jpg)",
                          }}
                        ></div>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-ui-calendar rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                        <span className="d-block f-size-13 text-878">
                          <span>
                            <i className="icofont-edit rt-mr-5"></i>
                          </span>
                          Stayed in Nov 2018
                        </span>
                      </div>
                      <div className="col-md-8 pl-md-5">
                        <h4 className="f-size-17 rt-strong">
                          Sirlon Mika
                          <span className="rt-pl-15 f-size-14">
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                            <i className="icofont-star review"></i>
                          </span>
                        </h4>
                        <span className="f-size-13 text-878 d-block rt-mb-15">
                          November 20, 2018 at 8:31 pm
                        </span>
                        <p className="f-size-14 text-333">
                          I am very please with Garden View Hong Kong Hotel! I
                          will certainly return. I got a wonderful from the 15
                          floor to the Botanical Garden a great Supermarket in
                          the corner, about 2 minutes walking, and a bus stop to
                          downtown within few meters. It is close to downtown
                          and great price!
                        </p>

                        <a
                          href="#"
                          className="replay-cmnt text-uppercase rt-strong"
                        >
                          Reply <i className="icofont-reply-all"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSR;
