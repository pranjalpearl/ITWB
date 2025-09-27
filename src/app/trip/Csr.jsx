// Csr.js
import React from 'react';
import Sidebar from '@/components/Trip/Sidebar';
import FilterBar from '@/components/Trip/FilterBar';
import TourCard from '@/components/Trip/TourCard';
import { tours } from './tourData'; // Import the data

const Csr = () => {
  return (
    <section className="content-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 mx-auto col-md-7 mb-5 mb-lg-0">
            <Sidebar />
          </div>
          <div className="col-lg-9">
            <FilterBar />

            {/* Map over the tours data to render TourCard for each tour */}
            {tours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}

            <nav aria-label="Page navigation example">
              <ul className="pagination rt-paganation justify-content-center">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="icofont-rounded-double-left"></i>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">01</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">02</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">03</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <i className="icofont-rounded-double-right"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Csr;