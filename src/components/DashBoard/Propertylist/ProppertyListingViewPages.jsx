import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import AllPropertyDetailsforResidential from "../../DashBoard/Propertylist/AllPropertyDetailsforResidential";
import AllPropertyDetailsForCommerical from "../../DashBoard/Propertylist/AllPropertyDetailsForCommerical";

const PropertyListingViewPages = () => {
  let { property_id } = useParams();
  const { callApi } = AuthUser();
  const [propertyData, setPropertyData] = useState(null); 

  const getPropertyData = async () => {
    try {
      const response = await callApi({
        api: `/property_details/${property_id}`,
        method: "GET",
      });
      if (response && response.success) {
        setPropertyData(response);
      }
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  useEffect(() => {
    getPropertyData();
  }, [property_id]);

  return (
    <>
      {propertyData?.data &&
        (propertyData?.data?.property_for === "rent" || "sell" && propertyData?.data?.property_type === "Residential" || "Commercial" ? (
          <AllPropertyDetailsforResidential propertyData={propertyData} />
        ) : (
          <AllPropertyDetailsForCommerical propertyData={propertyData} />
        ))}
    </>
  );
};

export default PropertyListingViewPages;
