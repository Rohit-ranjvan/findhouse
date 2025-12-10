'use client'
import { useState } from "react";
import GlobalFilter from "./GlobalFilter";

const GlobalHeroFilter = ({ className = "" }) => {
  const[activeTab,setActiveTab] = useState("buy");
  return (
    <div className={`home_adv_srch_opt ${className}`}>
      <ul className="nav nav-pills" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "buy" ? "active" : ""}`}
            id="pills-home-tab"
            data-bs-toggle="pill"
            href="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected={activeTab === "buy"}
            onClick={() => setActiveTab("buy")}
          >
            Buy
          </a>
        </li>

        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === "rent" ? "active" : ""}`}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            href="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected={activeTab === "rent"}
            onClick={() => setActiveTab("rent")}
          >
            Rent
          </a>
        </li>
      </ul>
      {/* End nav-pills */}

      <div className="tab-content home1_adsrchfrm" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <GlobalFilter isForSale={activeTab === "buy"}
            isForRent={activeTab === "rent"}/>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <GlobalFilter isForSale={activeTab === "buy"}
            isForRent={activeTab === "rent"}/>
        </div>
      </div>
    </div>
  );
};

export default GlobalHeroFilter;
