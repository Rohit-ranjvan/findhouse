'use client'
import React, { useState } from "react";
import { useRef } from "react";
import LocationField from "./LocationField";

const CreateList = ({ updateForm, scrollToLocation }) => {

  // const [images, setImages] = useState([]);
  // const locationRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    updateForm("images", files);
  };

  

  // const scrollToLocation = () => {
  //   locationRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    // <>
    //   <div className="col-lg-12">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyTitle">Property Title</label>
    //       <input type="text" className="form-control" id="propertyTitle" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-12">
    //     <div className="my_profile_setting_textarea">
    //       <label htmlFor="propertyDescription">Description</label>
    //       <textarea
    //         className="form-control"
    //         id="propertyDescription"
    //         rows="7"
    //       ></textarea>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-6">
    //     <div className="my_profile_setting_input ui_kit_select_search form-group">
    //       <label>Type</label>
    //       <select
    //         className="selectpicker form-select"
    //         data-live-search="true"
    //         data-width="100%"
    //       >
    //         <option data-tokens="type1">Type1</option>
    //         <option data-tokens="Type2">Type2</option>
    //         <option data-tokens="Type3">Type3</option>
    //         <option data-tokens="Type4">Type4</option>
    //         <option data-tokens="Type5">Type5</option>
    //       </select>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-6">
    //     <div className="my_profile_setting_input ui_kit_select_search form-group">
    //       <label>Status</label>
    //       <select
    //         className="selectpicker form-select"
    //         data-live-search="true"
    //         data-width="100%"
    //       >
    //         <option data-tokens="Status1">Status1</option>
    //         <option data-tokens="Status2">Status2</option>
    //         <option data-tokens="Status3">Status3</option>
    //         <option data-tokens="Status4">Status4</option>
    //         <option data-tokens="Status5">Status5</option>
    //       </select>
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="formGroupExamplePrice">Price</label>
    //       <input
    //         type="number"
    //         className="form-control"
    //         id="formGroupExamplePrice"
    //       />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="formGroupExampleArea">Area</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="formGroupExampleArea"
    //       />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-4 col-xl-4">
    //     <div className="my_profile_setting_input ui_kit_select_search form-group">
    //       <label>Rooms</label>
    //       <select
    //         className="selectpicker form-select"
    //         data-live-search="true"
    //         data-width="100%"
    //       >
    //         <option data-tokens="Status1">1</option>
    //         <option data-tokens="Status2">2</option>
    //         <option data-tokens="Status3">3</option>
    //         <option data-tokens="Status4">4</option>
    //         <option data-tokens="Status5">5</option>
    //         <option data-tokens="Status6">Other</option>
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
    // </>

<>
  <div className="row">

    {/* ------------------------ BASIC INFO ------------------------ */}
    <div className="col-lg-12">
      <div className="my_profile_setting_input form-group">
        <label>Property Name</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("propertyName", e.target.value)}
        />
      </div>
    </div>

    {/* Property Type */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Property Type</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("propertyType", e.target.value)}
        >
          <option>Apartment</option>
          <option>Villa</option>
          <option>Row House</option>
          <option>Bungalow</option>
          <option>Commercial</option>
          <option>Plot</option>
        </select>
      </div>
    </div>

    {/* Property Status */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Property Status</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("propertyStatus", e.target.value)}
        >
          <option>Ready to Move</option>
          <option>Under Construction</option>
          <option>New Launch</option>
        </select>
      </div>
    </div>

    {/* ------------------------ SIZE & CONFIG ------------------------ */}

    {/* Floor Space */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input form-group">
        <label>Floor Space</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 1200"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("floorSpace", e.target.value)}
        />
      </div>
    </div>

    {/* Unit */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Unit</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("unit", e.target.value)}
        >
          <option>Sq. Feet</option>
          <option>Sq. Meter</option>
        </select>
      </div>
    </div>

    {/* Bedrooms */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Bedrooms</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#ccc" }}
          onChange={(e) => updateForm("bedrooms", e.target.value)}
        >
          <option>0</option><option>1</option><option>2</option>
          <option>3</option><option>4</option><option>5</option>
          <option>6+</option>
        </select>
      </div>
    </div>

    {/* Bathrooms */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Bathrooms</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#ccc" }}
          onChange={(e) => updateForm("bathrooms", e.target.value)}
        >
          <option>1</option><option>2</option><option>3</option>
          <option>4</option><option>5+</option>
        </select>
      </div>
    </div>

    {/* ------------------------ LOCATION ------------------------ */}

    {/* Landmark */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input form-group">
        <label>Landmark</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("landmark", e.target.value)}
        />
      </div>
    </div>

    {/* City */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input form-group">
        <label>City</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("city", e.target.value)}
        />
      </div>
    </div>

    {/* State */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input form-group">
        <label>State</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("state", e.target.value)}
        />
      </div>
    </div>

    {/* Pincode */}
    <div className="col-lg-4">
      <div className="my_profile_setting_input form-group">
        <label>Pincode</label>
        <input
          type="number"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("pinCode", e.target.value)}
        />
      </div>
    </div>

    {/* ------------------------ USER DETAILS ------------------------ */}

    {/* User Name */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("userName", e.target.value)}
        />
      </div>
    </div>

    {/* Username */}
    <div className="col-lg-6">
      <div className="my_profile_setting_input form-group">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          style={{ borderColor: "#ccc" }}
          required
          onChange={(e) => updateForm("username", e.target.value)}
        />
      </div>
    </div>

    {/* ------------------------ IMAGES ------------------------ */}

    <div className="col-lg-12">
      <div className="my_profile_setting_input form-group">
        <label>Property Images</label>
        <input
          type="file"
          className="form-control"
          multiple
          style={{ borderColor: "#ccc" }}
          onChange={(e) => updateForm("images", [...e.target.files])}
        />
      </div>
    </div>

    {/* ------------------------ DESCRIPTION ------------------------ */}

    <div className="col-lg-12">
      <div className="my_profile_setting_input form-group">
        <label>Property Details</label>
        <textarea
          className="form-control"
          rows="4"
          placeholder="Describe the property..."
          style={{ borderColor: "#ccc" }}
          onChange={(e) => updateForm("propertyDetails", e.target.value)}
        ></textarea>
      </div>
    </div>

    {/* ------------------------ NEXT BUTTON ------------------------ */}
    <div className="col-xl-12 text-center my-4 my_profile_setting_input">
      <button
        className="btn btn2"
        style={{ width: "200px" }}
        onClick={scrollToLocation}
      >
        Next
      </button>
    </div>

  </div>
</>




  );
};

export default CreateList;
