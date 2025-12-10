'use client'

import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import {
  addKeyword,
  addLocation,
} from "../../features/properties/propertiesSlice";
import PricingRangeSlider from "./PricingRangeSlider";
import CheckBoxFilter from "./CheckBoxFilter";
import GlobalSelectBox from "./GlobalSelectBox";

// ✅ Import RTK Query hook
import { useDashboardFilterMutation } from "../../features/api/api";

const GlobalFilter = ({ className = "",isForSale = true, isForRent = true}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  // ✅ RTK Query mutation hook
  const [dashboardFilter, { isLoading, isError, error }] = useDashboardFilterMutation();

  // Local filter states
  const [filters, setFilters] = useState({

    city: "",
    locations: null,
    minPrice: 0,
    maxPrice: 0,
    bedroomCount: [],
    bathroomCount: [],
    propertyType: [],
    furnishingStatus: "",
    hasLift: true,
    minLandSpace: 0,
    maxLandSpace: 0,
    propertyFacing: "",
    availableFrom: null,
    isForRent,
    isForSale,
  });

   // Update filters when tab changes (Buy / Rent)
  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      isForSale,
      isForRent,
    }));
  }, [isForSale, isForRent]);

  // Handlers
  const handleKeywordChange = (e) => {
    dispatch(addKeyword(e.target.value));
  };

  const handleLocationChange = (e) => {
    const value = e.target.value;
    dispatch(addLocation(value));
    setFilters((prev) => ({ ...prev, city: value }));
  };

  const handlePropertyTypeChange = (e) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      propertyType: value ? [value] : [],
    }));
  };

  const handlePriceChange = (min, max) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max,
    }));
  };

  // ✅ Submit handler using RTK Query mutation
  const submitHandler = async () => {
    try {
      const response = await dashboardFilter(filters).unwrap();

      console.log("✅ API Response:", response);

      // Store API result in session storage (or Redux)
      sessionStorage.setItem("filteredProperties", JSON.stringify(response));

      // ✅ Redirect to Simple Listing – Grid V1
      router.push("/listing-grid-v1");
    } catch (err) {
      // console.error("❌ Dashboard filter failed:", err);
    }
  };

  return (
    <div className={`home1-advnc-search ${className}`}>
      <ul className="h1ads_1st_list mb0">

        {/* Keyword */}
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter keyword..."
              onChange={handleKeywordChange}
            />
          </div>
        </li>

        {/* Property Type */}
        <li className="list-inline-item">
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <select
                className="selectpicker w100 form-select show-tick"
                onChange={handlePropertyTypeChange}
              >
                <option value="">Property Type</option>
                <option>Apartment</option>
                <option>Bungalow</option>
                <option>Condo</option>
                <option>House</option>
                <option>Land</option>
                <option>Single Family</option>
              </select>
            </div>
          </div>
        </li>

        {/* Location */}
        <li className="list-inline-item">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Location"
              onChange={handleLocationChange}
            />
            <label>
              <span className="flaticon-maps-and-flags"></span>
            </label>
          </div>
        </li>

        {/* Price */}
        <li className="list-inline-item">
          <div className="small_dropdown2">
            <div
              id="prncgs"
              className="btn dd_btn"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <span>Price</span>
              <label>
                <span className="fa fa-angle-down"></span>
              </label>
            </div>
            <div className="dd_content2 dropdown-menu">
              <div className="pricing_acontent">
                <PricingRangeSlider onChange={handlePriceChange} />
              </div>
            </div>
          </div>
        </li>

        {/* Advanced Filters */}
        <li className="custome_fields_520 list-inline-item">
          <div className="navbered">
            <div className="mega-dropdown">
              <span
                className="dropbtn"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Advanced <i className="flaticon-more pl10 flr-520"></i>
              </span>

              <div className="dropdown-content dropdown-menu">
                <div className="row p15">
                  <div className="col-lg-12">
                    <h4 className="text-thm3 mb-4">Amenities</h4>
                  </div>
                  <CheckBoxFilter />
                </div>

                <div className="row p15 pt0-xsd">
                  <div className="col-lg-12 col-xl-12">
                    <ul className="apeartment_area_list mb0">
                      <GlobalSelectBox />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* Submit Button */}
        <li className="list-inline-item">
          <div className="search_option_button">
            <button
              onClick={submitHandler}
              type="button"
              className="btn btn-thm"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </li>
      </ul>

      {/* Optional error message */}
      {isError && (
        <p className="text-danger mt-2">
          ❌ Failed to load properties: {error?.data?.message || "Try again."}
        </p>
      )}
    </div>
  );
};

export default GlobalFilter;
