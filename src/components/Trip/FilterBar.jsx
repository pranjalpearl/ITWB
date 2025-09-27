// components/FilterBar.js
import React from 'react';

const FilterBar = () => {
  return (
    <div className="box-style__1 rt-mb-30">
      <form action="#" className="row">
        <div className="col-lg-3 col-md-6 mb-3 mb-lg-0">
          <button className="rt-btn pill rt-sm rt-gradient d-block">Recommended</button>
        </div>
        <div className="col-lg-3 rt-input-group mini col-md-6 mb-3 mb-md-0">
          <select className="rt-selectactive banner-select form-control" name="from" style={{ width: '100%' }} defaultValue="1">
            <option value="1">Price</option>
            <option value="2">500</option>
            <option value="3">5000</option>
            <option value="4">50000</option>
            <option value="5">5000</option>
            <option value="6">500000</option>
          </select>
        </div>
        <div className="col-lg-3 rt-input-group mini col-md-6 mb-3 mb-md-0">
          <select className="rt-selectactive banner-select form-control" name="from" style={{ width: '100%' }} defaultValue="1">
            <option value="1">Stars</option>
            <option value="2">1 Star</option>
            <option value="3">2 Stars</option>
            <option value="4">3 Stars</option>
            <option value="5">4 Stars</option>
            <option value="6">5 Stars</option>
          </select>
        </div>
        <div className="col-lg-3 rt-input-group mini col-md-6">
          <input type="text" className="form-control" placeholder="Keywords (optional)" />
        </div>
      </form>
    </div>
  );
};

export default FilterBar;