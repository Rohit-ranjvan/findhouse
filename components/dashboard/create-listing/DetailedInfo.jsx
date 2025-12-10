'use client'


import CheckBoxFilter from "../../common/CheckBoxFilter";
import { useState } from "react";

const DetailedInfo = () => {
  // return (
    // <div className="row">
    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyId">Property ID</label>
    //       <input type="text" className="form-control" id="propertyId" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="propertyASize">Area Size</label>
    //       <input type="text" className="form-control" id="propertyASize" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="sizePrefix">Size Prefix</label>
    //       <input type="text" className="form-control" id="sizePrefix" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="landArea">Land Area</label>
    //       <input type="text" className="form-control" id="landArea" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="LASPostfix">Land Area Size Postfix</label>
    //       <input type="text" className="form-control" id="LASPostfix" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="bedRooms">Bedrooms</label>
    //       <input type="text" className="form-control" id="bedRooms" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="bathRooms">Bathrooms</label>
    //       <input type="text" className="form-control" id="bathRooms" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="garages">Garages</label>
    //       <input type="text" className="form-control" id="garages" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="garagesSize">Garages Size</label>
    //       <input type="text" className="form-control" id="garagesSize" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="yearBuild">Year Built</label>
    //       <input type="text" className="form-control" id="yearBuild" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="videoUrl">Video URL</label>
    //       <input type="text" className="form-control" id="videoUrl" />
    //     </div>
    //   </div>
    //   {/* End .col */}

    //   <div className="col-lg-6 col-xl-4">
    //     <div className="my_profile_setting_input form-group">
    //       <label htmlFor="virtualTour">360° Virtual Tour</label>
    //       <input type="text" className="form-control" id="virtualTour" />
    //     </div>
    //   </div>

    //   <div className="col-xl-12">
    //     <h4 className="mb10">Amenities</h4>
    //   </div>

    //   <CheckBoxFilter />

    //   <div className="col-xl-12">
    //     <div className="my_profile_setting_input overflow-hidden mt20">
    //       <button className="btn btn1 float-start">Back</button>
    //       <button className="btn btn2 float-end">Next</button>
    //     </div>
    //   </div>
    //   {/* End .col */}
    // </div>
// Initialize the state to null so no button is selected on load.
const [selectedType, setSelectedType] = useState(null);

const handleClick = (type) => {
    setSelectedType(type);
};

const getButtonStyle = (type) => {
    const isSelected = selectedType === type;
    
    let baseStyle = { 
        cursor: 'pointer', 
        width: '100%', 
        transition: 'all 0.2s ease-in-out', 
        // fontWeight: 'bold', 
        transform: 'scale(1)',
        padding: '1rem 0',
    };

    if (isSelected) {
        // Active Style
        return {
            ...baseStyle,
            backgroundColor: '#54585fff', 
            color: 'white',
            borderColor: '#c5cbd6ff',
        };
    } else {
        // Inactive Style
        return {
            ...baseStyle,
            backgroundColor: '#f9f5ed',
            borderColor: '#e0e0e0',
            color: 'black',
        };
    }
};


const handleMouseEnter = (e, type) => {
    const isSelected = selectedType === type;
    e.currentTarget.style.transform = 'scale(1.03)'; // Lift effect

    if (!isSelected) {
        e.currentTarget.style.backgroundColor = '#e6e6e6'; // Darker gray hover for inactive
        e.currentTarget.style.borderColor = '#c0c0c0';
    } else {
        // Slightly darker shade of the active color for selected hover state
        e.currentTarget.style.backgroundColor = '#474a52'; 
    }
};

const handleMouseLeave = (e, type) => {
    e.currentTarget.style.transform = 'scale(1)'; // Reset lift

    const currentStyle = getButtonStyle(type);
    
    e.currentTarget.style.backgroundColor = currentStyle.backgroundColor;
    e.currentTarget.style.borderColor = currentStyle.borderColor;
};

// --- SIMPLE JSX START ---

return(
    <div className="row">
        <div className="col-lg-12">
            <div className="row justify-content-center pt-3 pb-4">
                
                {/* Flat / Apartments Button */}
                <div className="col-6 col-md-4 col-xl-3 mb-3">
                    <button 
                        className={`btn py-3 ${selectedType === 'Flat / Apartments' ? 'btn-primary' : 'btn-outline-secondary'}`} 
                        style={getButtonStyle('Flat / Apartments')} 
                        onClick={() => handleClick('Flat / Apartments')}
                        onMouseEnter={(e) => handleMouseEnter(e, 'Flat / Apartments')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'Flat / Apartments')}
                    >
                        Flat / Apartments
                    </button>
                </div>

                {/* Builder Floor Button */}
                <div className="col-6 col-md-4 col-xl-3 mb-3">
                    <button 
                        className={`btn py-3 ${selectedType === 'Builder Floor' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        style={getButtonStyle('Builder Floor')} 
                        onClick={() => handleClick('Builder Floor')}
                        onMouseEnter={(e) => handleMouseEnter(e, 'Builder Floor')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'Builder Floor')}
                    >
                        Builder Floor
                    </button>
                </div>

                {/* Farm House / Villa Button */}
                <div className="col-6 col-md-4 col-xl-3 mb-3">
                    <button 
                        className={`btn py-3 ${selectedType === 'Farm House / Villa' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        style={getButtonStyle('Farm House / Villa')} 
                        onClick={() => handleClick('Farm House / Villa')}
                        onMouseEnter={(e) => handleMouseEnter(e, 'Farm House / Villa')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'Farm House / Villa')}
                    >
                        Farm House / Villa
                    </button>
                </div>

                {/* Independent House Button */}
                <div className="col-6 col-md-4 col-xl-3 mb-3">
                    <button 
                        className={`btn py-3 ${selectedType === 'Independent House' ? 'btn-primary' : 'btn-outline-secondary'}`}
                        style={getButtonStyle('Independent House')} 
                        onClick={() => handleClick('Independent House')}
                        onMouseEnter={(e) => handleMouseEnter(e, 'Independent House')}
                        onMouseLeave={(e) => handleMouseLeave(e, 'Independent House')}
                    >
                        Independent House
                    </button>
                </div>
            </div>
        </div>
        {/* End Property Type Buttons */}

        {/* Navigation Button */}
        <div className="col-xl-12 mt-4">
            <div className="my_profile_setting_input text-center"> 
                <button className="btn btn2" style={{ width: '200px' }}>Next</button>
            </div>
        </div>
        {/* End .col */}
    </div>
);
};

export default DetailedInfo;
