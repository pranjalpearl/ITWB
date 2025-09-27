// components/BookingForm.js
"use client"
import React, { useState } from 'react';

const BookingForm = () => {
  // 'flights' is the default active tab
  const [activeTab, setActiveTab] = useState('flights');

  // A helper function to handle tab clicks
  const handleTabClick = (tabName, event) => {
    event.preventDefault(); // Prevent the default <a> tag behavior
    setActiveTab(tabName);
  };

  return (
    <>
      <div
        className="rt-banner-searchbox standard-search"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        <div className="tab-content" id="myTabContent">
          {/* Flight Search Form */}
          {activeTab === 'flights' && (
            <div
              className="tab-pane show active"
              role="tabpanel"
            >
              <form action="#">
                <div className="rt-radio-group">
                    <div className="custom-control custom-radio custom-control-inline items-center">
                        <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline1">One-way</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="customRadioInline2" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline2">Round-trip</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline3" name="customRadioInline3" className="custom-control-input" />
                        <label className="custom-control-label" htmlFor="customRadioInline3">Multi-city</label>
                    </div>
                    
                </div>
                <div className="rt-input-group">
                  <div className="single-input  col-rt-in-3">
                    <select className="rt-selectactive banner-select form-control" name="from" style={{ width: "100%" }}>
                      <option value="1">from</option>
                      <option value="2">Alaska</option>
                      <option value="3">Bahamas</option>
                    </select>
                    
                  </div>
                  <div className="single-input  col-rt-in-3">
                    <select className="rt-selectactive banner-select form-control" name="to" style={{ width: "100%" }}>
                      <option value="1">To</option>
                      <option value="2">Canada</option>
                      <option value="3">Caribbean</option>
                    </select>
                   
                  </div>
                  <div className="single-input  col-rt-in-3">
                    <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
                    <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                  </div>
                  <div className="single-input  col-rt-in-3">
                    <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
                    <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                  </div>
                  <div className="single-input  col-rt-in-1">
                    <button type="submit"><i className="icofont-search"></i></button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Hotel Search Form */}
          {activeTab === 'hotels' && (
             <div
               className="tab-pane show active" // We use 'show active' since it's the one being rendered
               role="tabpanel"
             >
               <form action="#">
                 <div className="rt-input-group">
                   <div className="single-input col-rt-in-3">
                     <input type="text" className="form-control" placeholder="destination"/>
                   </div>
                   <div className="single-input col-rt-in-3">
                     <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
                     <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                   </div>
                   <div className="single-input col-rt-in-3">
                     <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
                     <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                   </div>
                   <div className="single-input col-rt-in-3">
                     <input type="text" className="form-control" placeholder="keywords(optional)"/>
                   </div>
                   <div className="single-input col-rt-in-1">
                     <button type="submit"><i className="icofont-search"></i></button>
                   </div>
                 </div>
               </form>
             </div>
          )}
          
          {/* Car Search Form */}
          {activeTab === 'cars' && (
            <div className="tab-pane show active" role="tabpanel">
                <form action="#">
                  <div className="rt-input-group">
                    <div className="single-input col-rt-in-3">
                      <input type="text" className="form-control" placeholder="destination"/>
                    </div>
                    <div className="single-input col-rt-in-3">
                      <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
                      <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                    </div>
                    <div className="single-input col-rt-in-3">
                      <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
                      <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                    </div>
                    <div className="single-input col-rt-in-3">
                      <input type="text" className="form-control" placeholder="keywords(optional)"/>
                    </div>
                    <div className="single-input col-rt-in-1">
                      <button type="submit"><i className="icofont-search"></i></button>
                    </div>
                  </div>
                </form>
            </div>
          )}

          {/* Train Search Form */}
          {activeTab === 'trains' && (
            <div className="tab-pane show active" role="tabpanel">
              <form action="#">
                <div className="rt-input-group">
                  <div className="single-input col-rt-in-3">
                     <select className="rt-selectactive banner-select form-control" name="from" style={{ width: "100%" }}>
                       <option value="1">from</option>
                       <option value="2">New York</option>
                     </select>
                  </div>
                  <div className="single-input col-rt-in-3">
                     <select className="rt-selectactive banner-select form-control" name="to" style={{ width: "100%" }}>
                       <option value="1">To</option>
                       <option value="2">Boston</option>
                     </select>
                  </div>
                  <div className="single-input col-rt-in-3">
                    <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
                    <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
                  </div>
                  <div className="single-input col-rt-in-3">
                    <input type="text" className="form-control" placeholder="train no( opt)"/>
                  </div>
                  <div className="single-input col-rt-in-1">
                    <button type="submit"><i className="icofont-search"></i></button>
                  </div>
                </div>
              </form>
            </div>
          )}

        </div>
      </div>

      {/* Tab Navigation Links */}
      <ul
        className="nav serachnavs "
        id="rtMultiTab"
        role="tablist"
        data-wow-duration="1.5s"
        data-wow-delay="1.5s"
      >
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'flights' ? 'active' : 'inactive'}`}
            onClick={(e) => handleTabClick('flights', e)}
            href="#first"
          >
            <i className="icofont-airplane"></i>
            <span>Flights</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'hotels' ? 'active' : 'inactive'}`}
            onClick={(e) => handleTabClick('hotels', e)}
            href="#second"
          >
            <i className="icofont-hotel"></i>
            <span>Hotels</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'cars' ? 'active' : 'inactive'}`}
            onClick={(e) => handleTabClick('cars', e)}
            href="#third"
          >
            <i className="icofont-car-alt-4"></i>
            <span>Cars</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'trains' ? 'active' : 'inactive'}`}
            onClick={(e) => handleTabClick('trains', e)}
            href="#four"
          >
            <i className="icofont-train-line"></i>
            <span>Trains</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default BookingForm;