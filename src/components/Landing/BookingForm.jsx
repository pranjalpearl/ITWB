// // components/BookingForm.js
// "use client"
// import React, { useState } from 'react';

// const BookingForm = () => {
//   // 'flights' is the default active tab
//   const [activeTab, setActiveTab] = useState('flights');

//   // A helper function to handle tab clicks
//   const handleTabClick = (tabName, event) => {
//     event.preventDefault(); // Prevent the default <a> tag behavior
//     setActiveTab(tabName);
//   };

//   return (
//     <>
//       <div
//         className="rt-banner-searchbox standard-search"
//         data-wow-duration="1s"
//         data-wow-delay="1s"
//       >
//         <div className="tab-content" id="myTabContent">
//           {/* Flight Search Form */}
//           {activeTab === 'flights' && (
//             <div
//               className="tab-pane show active"
//               role="tabpanel"
//             >
//               <form action="#">
//                 <div className="rt-radio-group">
//                     <div className="custom-control custom-radio custom-control-inline items-center">
//                         <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
//                         <label className="custom-control-label" htmlFor="customRadioInline1">One-way</label>
//                     </div>
//                     <div className="custom-control custom-radio custom-control-inline">
//                         <input type="radio" id="customRadioInline2" name="customRadioInline2" className="custom-control-input" />
//                         <label className="custom-control-label" htmlFor="customRadioInline2">Round-trip</label>
//                     </div>
//                     <div className="custom-control custom-radio custom-control-inline">
//                         <input type="radio" id="customRadioInline3" name="customRadioInline3" className="custom-control-input" />
//                         <label className="custom-control-label" htmlFor="customRadioInline3">Multi-city</label>
//                     </div>

//                 </div>
//                 <div className="rt-input-group">
//                   <div className="single-input  col-rt-in-3">
//                     <select className="rt-selectactive banner-select form-control" name="from" style={{ width: "100%" }}>
//                       <option value="1">from</option>
//                       <option value="2">Alaska</option>
//                       <option value="3">Bahamas</option>
//                     </select>

//                   </div>
//                   <div className="single-input  col-rt-in-3">
//                     <select className="rt-selectactive banner-select form-control" name="to" style={{ width: "100%" }}>
//                       <option value="1">To</option>
//                       <option value="2">Canada</option>
//                       <option value="3">Caribbean</option>
//                     </select>

//                   </div>
//                   <div className="single-input  col-rt-in-3">
//                     <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
//                     <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                   </div>
//                   <div className="single-input  col-rt-in-3">
//                     <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
//                     <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                   </div>
//                   <div className="single-input  col-rt-in-1">
//                     <button type="submit"><i className="icofont-search"></i></button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Hotel Search Form */}
//           {activeTab === 'hotels' && (
//              <div
//                className="tab-pane show active" // We use 'show active' since it's the one being rendered
//                role="tabpanel"
//              >
//                <form action="#">
//                  <div className="rt-input-group">
//                    <div className="single-input col-rt-in-3">
//                      <input type="text" className="form-control" placeholder="destination"/>
//                    </div>
//                    <div className="single-input col-rt-in-3">
//                      <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
//                      <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                    </div>
//                    <div className="single-input col-rt-in-3">
//                      <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
//                      <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                    </div>
//                    <div className="single-input col-rt-in-3">
//                      <input type="text" className="form-control" placeholder="keywords(optional)"/>
//                    </div>
//                    <div className="single-input col-rt-in-1">
//                      <button type="submit"><i className="icofont-search"></i></button>
//                    </div>
//                  </div>
//                </form>
//              </div>
//           )}

//           {/* Car Search Form */}
//           {activeTab === 'cars' && (
//             <div className="tab-pane show active" role="tabpanel">
//                 <form action="#">
//                   <div className="rt-input-group">
//                     <div className="single-input col-rt-in-3">
//                       <input type="text" className="form-control" placeholder="destination"/>
//                     </div>
//                     <div className="single-input col-rt-in-3">
//                       <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
//                       <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                     </div>
//                     <div className="single-input col-rt-in-3">
//                       <input type="text" className="form-control rt-date-picker has-icon" placeholder="Return"/>
//                       <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                     </div>
//                     <div className="single-input col-rt-in-3">
//                       <input type="text" className="form-control" placeholder="keywords(optional)"/>
//                     </div>
//                     <div className="single-input col-rt-in-1">
//                       <button type="submit"><i className="icofont-search"></i></button>
//                     </div>
//                   </div>
//                 </form>
//             </div>
//           )}

//           {/* Train Search Form */}
//           {activeTab === 'trains' && (
//             <div className="tab-pane show active" role="tabpanel">
//               <form action="#">
//                 <div className="rt-input-group">
//                   <div className="single-input col-rt-in-3">
//                      <select className="rt-selectactive banner-select form-control" name="from" style={{ width: "100%" }}>
//                        <option value="1">from</option>
//                        <option value="2">New York</option>
//                      </select>
//                   </div>
//                   <div className="single-input col-rt-in-3">
//                      <select className="rt-selectactive banner-select form-control" name="to" style={{ width: "100%" }}>
//                        <option value="1">To</option>
//                        <option value="2">Boston</option>
//                      </select>
//                   </div>
//                   <div className="single-input col-rt-in-3">
//                     <input type="text" className="form-control rt-date-picker has-icon" placeholder="Depart"/>
//                     <span className="input-iconbadge"><i className="icofont-ui-calendar"></i></span>
//                   </div>
//                   <div className="single-input col-rt-in-3">
//                     <input type="text" className="form-control" placeholder="train no( opt)"/>
//                   </div>
//                   <div className="single-input col-rt-in-1">
//                     <button type="submit"><i className="icofont-search"></i></button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           )}

//         </div>
//       </div>

//       {/* Tab Navigation Links */}
//       <ul
//         className="nav serachnavs "
//         id="rtMultiTab"
//         role="tablist"
//         data-wow-duration="1.5s"
//         data-wow-delay="1.5s"
//       >
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'flights' ? 'active' : 'inactive'}`}
//             onClick={(e) => handleTabClick('flights', e)}
//             href="#first"
//           >
//             <i className="icofont-airplane"></i>
//             <span>Flights</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'hotels' ? 'active' : 'inactive'}`}
//             onClick={(e) => handleTabClick('hotels', e)}
//             href="#second"
//           >
//             <i className="icofont-hotel"></i>
//             <span>Hotels</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'cars' ? 'active' : 'inactive'}`}
//             onClick={(e) => handleTabClick('cars', e)}
//             href="#third"
//           >
//             <i className="icofont-car-alt-4"></i>
//             <span>Cars</span>
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             className={`nav-link ${activeTab === 'trains' ? 'active' : 'inactive'}`}
//             onClick={(e) => handleTabClick('trains', e)}
//             href="#four"
//           >
//             <i className="icofont-train-line"></i>
//             <span>Trains</span>
//           </a>
//         </li>
//       </ul>
//     </>
//   );
// };

// export default BookingForm;

"use client"
import React, { useState, useEffect } from 'react';
import countryService from '@/Redux/feature/country/countryAction'; // Ensure this path matches your service location
import SearchModal from './SearchModal';

const BookingForm = () => {
  const [activeTab, setActiveTab] = useState('flights');

  // State for Dropdown Data
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [tourTypes, setTourTypes] = useState([]); // Added state for tour types

  // State for Selections
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedTourType, setSelectedTourType] = useState('');

  // State for Modal
  const [isModalOpen, setModalOpen] = useState(false);

  // Fetch Initial Data (Countries and Tour Types)
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // 1. Fetch Countries
        const countryRes = await countryService.fetchAllCountries();
        const countryList = Array.isArray(countryRes) ? countryRes : countryRes.data || [];
        setCountries(countryList);

        // 2. Fetch Tour Types
        const tourTypeRes = await countryService.fetchTourTypes();
        // Adjust based on your API response structure
        const tourTypeList = Array.isArray(tourTypeRes) ? tourTypeRes : tourTypeRes.data || [];
        setTourTypes(tourTypeList);

      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    };

    fetchInitialData();
  }, []);

  // Handle Country Change
  const handleCountryChange = async (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);

    // Reset State
    setSelectedState('');
    setStates([]);

    if (countryId) {
      try {
        const response = await countryService.fetchStatesByCountryId(countryId);
        const stateList = Array.isArray(response) ? response : response.data || [];
        setStates(stateList);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Console log the data as requested
    const searchData = {
      countryId: selectedCountry,
      stateId: selectedState,
      tourType: selectedTourType
    };
    console.log("Search Data Submitted:", searchData);

    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SearchModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        searchParams={{
          countryId: selectedCountry,
          stateId: selectedState,
          tourType: selectedTourType
        }}
      />

      <div
        className="rt-banner-searchbox standard-search w-fit"
        data-wow-duration="1s"
        data-wow-delay="1s"
      >
        <div className="tab-content" id="myTabContent w-fit p-10">
          {activeTab === 'flights' && (
            <div className="tab-pane show active  p-3 w-fit" role="tabpanel">
              <form onSubmit={handleSearch}>
                <div className="rt-input-group">

                  {/* 1. Choose Country */}
                  <div className="single-input col-rt-in-3">
                    <select
                      className="rt-selectactive banner-select form-control"
                      name="country"
                      style={{ width: "100%" }}
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">Choose Country</option>
                      {countries.map((country) => (
                        <option key={country._id || country.id} value={country._id || country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Choose State */}
                  <div className="single-input col-rt-in-3">
                    <select
                      className="rt-selectactive banner-select form-control"
                      name="state"
                      style={{ width: "100%" }}
                      value={selectedState}
                      onChange={(e) => setSelectedState(e.target.value)}
                      disabled={!selectedCountry}
                    >
                      <option value="">Choose State</option>
                      {states.map((stateItem) => (
                        <option key={stateItem._id || stateItem.id} value={stateItem._id || stateItem.id}>
                          {stateItem.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 3. Choose Type of Tour */}
                  <div className="single-input col-rt-in-3">
                    <select
                      className="rt-selectactive banner-select form-control"
                      style={{ width: "100%" }}
                      value={selectedTourType}
                      onChange={(e) => setSelectedTourType(e.target.value)}
                    >
                      <option value="">Choose Tour Type</option>
                      {tourTypes.map((type) => (
                        // Assuming tour type object has _id/id and name (or typeName)
                        <option key={type._id || type.id} value={type._id || type.id || type.name}>
                          {type.name || type.typeName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className="single-input col-rt-in-1">
                    <button type="submit"><i className="icofont-search"></i></button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* Other Tabs... */}

        </div>
      </div>
    </>
  );
};

export default BookingForm;