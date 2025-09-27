"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Breadcrumb = ({
  items,
  showSearch = true, // whether to display the search bar
  inputIcon = "icofont-google-map",
  inputPlaceholder = "Depart",
  buttonText = "Search",
}) => {
  const router = useRouter();

  return (
    <div className="rt-breadcump rt-breadcump-height">
      {/* Background */}
      <div
        className="rt-page-bg rtbgprefix-cover"
        style={{ backgroundImage: "url(/images/backgrounds/bredcump.png)" }}
      ></div>

      {/* Breadcrumb Content */}
      <div className="container">
        <div className="row rt-breadcump-height">
          <div className="col-12">
            <div className="breadcrumbs-content">
              <h3>{items[items.length - 1].name}</h3>
              <div className="items-center breadcrumbs ml-2">
                {items.map((item, index) => (
                  <span key={index}>
                    {index !== 0 && (
                      <span className="divider mx-1">
                        <i className="icofont-simple-right" style={{ fontSize: "20px" }}></i>
                      </span>
                    )}
                    {item.link ? (
                      <button
                        onClick={() => router.push(item.link)}
                        className="breadcrumb-link"
                        style={{ border: "none", padding: 0, cursor: "pointer", fontSize: "20px" }}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <span style={{ border: "none", padding: 0, cursor: "pointer", fontSize: "20px" }}>{item.name}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar (conditionally rendered) */}
      {showSearch && (
        <div className="bredcump--search-trip">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="rt-banner-searchbox trip-search">
                  <div className="rt-input-group">
                    <div className="single-input col-md-9 form-control">
                      <span className="input-iconbadge text-3xl w-full flex items-center">
                        <i className={`${inputIcon} mr-2`}></i>
                        <input
                          type="text"
                          className="p-2 h-full border-none outline-none w-[90%]"
                          placeholder={inputPlaceholder}
                        />
                      </span>
                    </div>
                    <div className="single-input col-md-3">
                      <input
                        type="submit"
                        value={buttonText}
                        className="rt-btn rt-gradient pill text-uppercase d-block rt-Bshadow-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
