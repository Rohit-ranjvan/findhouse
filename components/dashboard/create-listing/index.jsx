'use client'
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import MobileMenu from "../../common/header/MobileMenu";
import CreateList from "./CreateList";
import DetailedInfo from "./DetailedInfo";
import FloorPlans from "./FloorPlans";
import LocationField from "./LocationField";
import PropertyMediaUploader from "./PropertyMediaUploader";
import React, { useState } from "react";
import { useAddPropertyMutation } from "@/features/api/api";

const index = () => {
  // const [addProperty, { isLoading }] = useAddPropertyMutation();
  const [addProperty] = useAddPropertyMutation();


  const [formData, setFormData] = useState({
    // BASIC DETAILS
    propertyName: "",
    propertyType: "",
    propertyStatus: "",
    floorSpace: "",
    unit: "",
    bedrooms: "",
    bathrooms: "",
    landmark: "",
    city: "",
    state: "",
    pinCode: "",
    userName: "",
    username: "",
    propertyDetails: "",
    images: [],

    // ADVANCED DETAILS
    propertyAge: "",
    propertyFacingSite: "",
    furnishingStatus: "",
    parkingCount: "",
    wardrobeCount: "",
    modularKitchen: "",
    lifts: "",
    powerBackup: "",
    waterResourceDetails: "",
    electricityResourceDetails: "",
    securityAlarm: "",
    gatedSociety: "",
    visitorParking: "",
    amenities: "",
    nearByPlaces: "",

    // PROPERTY FOR / FINAL
    isForRent: "",
    isForSale: "",
    rentPrice: "",
    salePrice: "",
    availableFrom: "",
    rentalAgreementDuration: "",
  });

  const updateForm = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 🔥 FINAL SUBMIT
  const handleSubmit = async () => {
    const payload = {
      propertyDto: {
        ...formData,
        images: formData.images,
        pinCode: Number(formData.pinCode),
      },
      images: formData.images,
    };

    try {
      const response = await addProperty(payload).unwrap();

      console.log("Success:", response);
      alert("Property added successfully!");

    } catch (error) {
      console.error("Property submit failed:", error);
      alert("Failed to add property.");
    }
  };








  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 maxw100flex-992">
              <div className="row">
                {/* Start Dashboard Navigation */}
                <div className="col-lg-12">
                  <div className="dashboard_navigationbar dn db-1024">
                    <div className="dropdown">
                      <button
                        className="dropbtn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#DashboardOffcanvasMenu"
                        aria-controls="DashboardOffcanvasMenu"
                      >
                        <i className="fa fa-bars pr10"></i> Dashboard Navigation
                      </button>
                    </div>
                  </div>
                </div>
                {/* End Dashboard Navigation */}

                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Add New Property</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
                {/* End .col */}

                <div className="col-lg-12">
                  <div className="my_dashboard_review">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Basic Details</h3>
                      </div>

                      <CreateList updateForm={updateForm} />
                    </div>
                  </div>
                  <div className="my_dashboard_review mt30">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="mb30">Advanced Details</h3>
                      </div>

                      <LocationField updateForm={updateForm} />
                    </div>
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property Type</h3>
                    </div>
                    <DetailedInfo />
                  </div> */}
                  <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Property For</h3>
                    </div>

                    <PropertyMediaUploader updateForm={updateForm} handleSubmit={handleSubmit} />
                  </div>
                  {/* <div className="my_dashboard_review mt30">
                    <div className="col-lg-12">
                      <h3 className="mb30">Floor Plans</h3>
                      <button className="btn admore_btn mb30">Add More</button>
                    </div>
                    <FloorPlans />
                  </div> */}
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2020 Find House. Made with love.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>


    </>
  );
};

export default index;
