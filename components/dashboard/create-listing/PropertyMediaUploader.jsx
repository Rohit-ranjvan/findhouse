'use client'

// import { useState } from "react";
import React, { useState } from 'react';
import selectedFiles from "../../../utils/selectedFiles";
import Image from "next/image";

const PropertyMediaUploader = ({ updateForm, handleSubmit }) => {
  // const [propertySelectedImgs, setPropertySelectedImgs] = useState([]);

  // // multiple image select
  // const multipleImage = (e) => {
  //   // checking is same file matched with old stored array
  //   const isExist = propertySelectedImgs?.some((file1) =>
  //     selectedFiles(e)?.some((file2) => file1.name === file2.name)
  //   );

  //   if (!isExist) {
  //     setPropertySelectedImgs((old) => [...old, ...selectedFiles(e)]);
  //   } else {
  //     alert("You have selected one image already!");
  //   }
  // };

  // // delete image
  // const deleteImage = (name) => {
  //   const deleted = propertySelectedImgs?.filter((file) => file.name !== name);
  //   setPropertySelectedImgs(deleted);
  // };

  // return (
  //   <div className="row">
  //     <div className="col-lg-12">
  //       <ul className="mb-0">
  //         {propertySelectedImgs.length > 0
  //           ? propertySelectedImgs?.map((item, index) => (
  //               <li key={index} className="list-inline-item">
  //                 <div className="portfolio_item">
  //                   <Image
  //                     width={200}
  //                     height={200}
  //                     className="img-fluid cover"
  //                     src={URL.createObjectURL(item)}
  //                     alt="fp1.jpg"
  //                   />
  //                   <div
  //                     className="edu_stats_list"
  //                     data-bs-toggle="tooltip"
  //                     data-bs-placement="top"
  //                     title="Delete"
  //                     data-original-title="Delete"
  //                   >
  //                     <a onClick={() => deleteImage(item.name)}>
  //                       <span className="flaticon-garbage"></span>
  //                     </a>
  //                   </div>
  //                 </div>
  //               </li>
  //             ))
  //           : undefined}

  //         {/* End li */}
  //       </ul>
  //     </div>
  //     {/* End .col */}

  //     <div className="col-lg-12">
  //       <div className="portfolio_upload">
  //         <input
  //           type="file"
  //           onChange={multipleImage}
  //           multiple
  //           accept="image/png, image/gif, image/jpeg"
  //         />
  //         <div className="icon">
  //           <span className="flaticon-download"></span>
  //         </div>
  //         <p>Drag and drop images here</p>
  //       </div>
  //     </div>
  //     {/* End .col */}

  //     <div className="col-xl-6">
  //       <div className="resume_uploader mb30">
  //         <h3>Attachments</h3>
  //         <form className="form-inline d-flex flex-wrap wrap">
  //           <input className="upload-path" />
  //           <label className="upload">
  //             <input type="file" />
  //             Select Attachment
  //           </label>
  //         </form>
  //       </div>
  //     </div>
  //     {/* End .col */}

  //     <div className="col-xl-12">
  //       <div className="my_profile_setting_input">
  //         <button className="btn btn1 float-start">Back</button>
  //         <button className="btn btn2 float-end">Next</button>
  //       </div>
  //     </div>
  //     {/* End .col */}
  //   </div>
  // );

// Initialize the state to null so no button is selected on load.
return(
<>
  {/* Row 1 */}
  <div className="row">
    {/* Is For Rent */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Is For Rent</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#cccccc", cursor: "pointer" }}
          required
          onChange={(e) => updateForm("isForRent", e.target.value)}
        >
          <option>No</option>
          <option>Yes</option>
        </select>
      </div>
    </div>

    {/* Is For Sale */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input ui_kit_select_search form-group">
        <label>Is For Sale</label>
        <select
          className="selectpicker form-select"
          style={{ borderColor: "#cccccc", cursor: "pointer" }}
          required
          onChange={(e) => updateForm("isForSale", e.target.value)}
        >
          <option>No</option>
          <option>Yes</option>
        </select>
      </div>
    </div>

    {/* Row 2 */}
    {/* Rent Price */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input form-group">
        <label>Rent Price</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 15000"
          style={{ borderColor: "#cccccc" }}
          required
          onChange={(e) => updateForm("rentPrice", e.target.value)}
        />
      </div>
    </div>

    {/* Sale Price */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input form-group">
        <label>Sale Price</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 45,00,000"
          style={{ borderColor: "#cccccc" }}
          required
          onChange={(e) => updateForm("salePrice", e.target.value)}
        />
      </div>
    </div>

    {/* Row 3 */}
    {/* Available From */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input form-group">
        <label>Available From</label>
        <input
          type="date"
          className="form-control"
          style={{ borderColor: "#cccccc", cursor: "pointer" }}
          required
          onChange={(e) => updateForm("availableFrom", e.target.value)}
        />
      </div>
    </div>

    {/* Rental Agreement Duration */}
    <div className="col-lg-6 col-xl-6">
      <div className="my_profile_setting_input form-group">
        <label>Rental Agreement Duration</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g. 11 months"
          style={{ borderColor: "#cccccc" }}
          required
          onChange={(e) => updateForm("rentalAgreementDuration", e.target.value)}
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="col-xl-12">
      <div className="my_profile_setting_input text-center">
        <button
          className="btn btn2"
          style={{ width: "200px" }}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div>
  </div>
</>



);

};

export default PropertyMediaUploader;
