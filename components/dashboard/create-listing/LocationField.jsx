const LocationField = ({updateForm }) => {
  return (
    // <>
    //   <div className="col-lg-12">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyAddress">Address</label>
    //       <input type="text" className="form-control" id="propertyAddress" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-6">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyState">County / State</label>
    //       <input type="text" className="form-control" id="propertyState" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-6">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyCity">City</label>
    //       <input type="text" className="form-control" id="propertyCity" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="neighborHood">Neighborhood</label>
    //       <input type="text" className="form-control" id="neighborHood" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="zipCode">Zip</label>
    //       <input type="text" className="form-control" id="zipCode" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input ui_kit_select_search form-group">
    //       <label>Country</label>
    //       <select
    //         className="selectpicker form-select"
    //         data-live-search="true"
    //         data-width="100%"
    //       >
    //         <option data-tokens="Turkey">Turkey</option>
    //         <option data-tokens="Iran">Iran</option>
    //         <option data-tokens="Iraq">Iraq</option>
    //         <option data-tokens="Spain">Spain</option>
    //         <option data-tokens="Greece">Greece</option>
    //         <option data-tokens="Portugal">Portugal</option>
    //       </select>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-12">
    //     <div className="my_profile_setting_input form-group">
    //       <div className="h400 bdrs8" id="map-canvas">
    //         <div className="gmap_canvas pe-none">
    //           <iframe
    //             title="map"
    //             className="gmap_iframe"
    //             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.721472711!2d-115.31508339643749!3d36.12519578053308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1669000531244!5m2!1sen!2sbd"
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="googleMapLat">Latitude (for Google Maps)</label>
    //       <input type="text" className="form-control" id="googleMapLat" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="googleMapLong">Longitude (for Google Maps)</label>
    //       <input type="text" className="form-control" id="googleMapLong" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input ui_kit_select_search form-group">
    //       <label>Google Map Street View</label>
    //       <select
    //         className="selectpicker form-select"
    //         data-live-search="true"
    //         data-width="100%"
    //       >
    //         <option data-tokens="Turkey">Street View v1</option>
    //         <option data-tokens="Iran">Street View v2</option>
    //         <option data-tokens="Iraq">Street View v3</option>
    //         <option data-tokens="Spain">Street View v4</option>
    //         <option data-tokens="Greece">Street View v5</option>
    //         <option data-tokens="Portugal">Street View v6</option>
    //       </select>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-xl-12">
    //     <div className="my_profile_setting_input">
    //       <button className="btn btn1 float-start">Back</button>
    //       <button className="btn btn2 float-end">Next</button>
    //     </div>
    //   </div>
    //   {/* End .col */}
    // </>

<>
  {/* ------------------------ PROPERTY DETAILS (SECTION 2) ------------------------ */}

  {/* Property Age */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Property Age</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. 5 years"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("propertyAge", e.target.value)}
      />
    </div>
  </div>

  {/* Property Facing Side */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Property Facing Side</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("propertyFacingSite", e.target.value)}
      >
        <option>East</option>
        <option>West</option>
        <option>North</option>
        <option>South</option>
        <option>North-East</option>
        <option>South-East</option>
        <option>North-West</option>
        <option>South-West</option>
      </select>
    </div>
  </div>

  {/* Furnishing Status */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Furnishing Status</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("furnishingStatus", e.target.value)}
      >
        <option>Unfurnished</option>
        <option>Semi-Furnished</option>
        <option>Fully Furnished</option>
      </select>
    </div>
  </div>

  {/* Parking Count */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Parking Count</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. 1"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("parkingCount", e.target.value)}
      />
    </div>
  </div>

  {/* Wardrobe Count */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Wardrobe Count</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. 2"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("wardrobeCount", e.target.value)}
      />
    </div>
  </div>

  {/* Modular Kitchen */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Modular Kitchen</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("modularKitchen", e.target.value)}
      >
        <option>No</option>
        <option>Yes</option>
      </select>
    </div>
  </div>

  {/* Lifts */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Lifts (Count)</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. 2"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("lifts", e.target.value)}
      />
    </div>
  </div>

  {/* Power Backup */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Power Backup</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("powerBackup", e.target.value)}
      >
        <option>No</option>
        <option>Partial</option>
        <option>Full</option>
      </select>
    </div>
  </div>

  {/* Water Resource Details */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Water Resource Details</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. Municipal, Borewell"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("waterResourceDetails", e.target.value)}
      />
    </div>
  </div>

  {/* Electricity Resource Details */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input form-group">
      <label>Electricity Resource Details</label>
      <input
        type="text"
        className="form-control"
        placeholder="e.g. MSEB"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("electricityResourceDetails", e.target.value)}
      />
    </div>
  </div>

  {/* Security Alarm */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Security Alarm</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("securityAlarm", e.target.value)}
      >
        <option>No</option>
        <option>Yes</option>
      </select>
    </div>
  </div>

  {/* Gated Society */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Gated Society</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("gatedSociety", e.target.value)}
      >
        <option>No</option>
        <option>Yes</option>
      </select>
    </div>
  </div>

  {/* Visitor Parking */}
  <div className="col-lg-6 col-xl-6">
    <div className="my_profile_setting_input ui_kit_select_search form-group">
      <label>Visitor Parking</label>
      <select
        className="selectpicker form-select"
        style={{ borderColor: "#ccc", cursor: "pointer" }}
        required
        onChange={(e) => updateForm("visitorParking", e.target.value)}
      >
        <option>No</option>
        <option>Yes</option>
      </select>
    </div>
  </div>

  {/* Amenities */}
  <div className="col-lg-12">
    <div className="my_profile_setting_input form-group">
      <label>Amenities</label>
      <textarea
        className="form-control"
        rows="3"
        placeholder="e.g. Gym, Pool, Park"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("amenities", e.target.value)}
      ></textarea>
    </div>
  </div>

  {/* Nearby Places */}
  <div className="col-lg-12">
    <div className="my_profile_setting_input form-group">
      <label>Nearby Places</label>
      <textarea
        className="form-control"
        rows="3"
        placeholder="e.g. School, Hospital, Metro"
        style={{ borderColor: "#ccc" }}
        required
        onChange={(e) => updateForm("nearByPlaces", e.target.value)}
      ></textarea>
    </div>
  </div>

  {/* Next Button */}
  <div className="col-xl-12 text-center my-4">
    <button className="btn btn2" style={{ width: "200px" }}>
      Next
    </button>
  </div>
</>



  );
};

export default LocationField;
