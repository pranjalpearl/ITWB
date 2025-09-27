"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valueLabelFormat(value) {
  return `${value}`;
}

const PriceRangeSlider = ({ min, max }) => {
  const [value, setValue] = useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ padding: "0 5px" }}>
        <Slider
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          className="text-2xl"
          getAriaLabel={() => "Price range"}
          valueLabelFormat={valueLabelFormat}
          sx={{
            "& .MuiSlider-valueLabel": {
              fontSize: "14px",
              fontWeight: "bold",
            },
          }}
        />
      </Box>

      <div className="price_slider_amount">
        <div className="clearfix">
          <div className="float-left">
            <span>Price:</span>
          </div>
          <div className="float-right text-2xl">
            <div className="price-values">
              {value[0]} - {value[1]}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <input
          type="submit"
          value="Filter"
          className="rt-btn rt-gradient rounded-sm rt-sm text-uppercase"
        />
      </div>
    </div>
  );
};

export default PriceRangeSlider;
