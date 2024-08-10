import React, { createContext, useState,useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [PropertyDetails, setPropertyDetails] = useState(null);
  const [PropertyId, setPropertyId] = useState();
  const [uniqueId, setUniqueId] = useState();
  const [totalImage, setTotalImage] = useState([]);
  const [uniqueProperty, setUniqueProperty] = useState(null);
  const [userEnquiryData,setUserEnquiryData]=useState(null);
  const [agent,setAgent]=useState(null);
 

  return (
    <AuthContext.Provider
      value={{
        userData,
        setUserData,
        PropertyDetails,
        setPropertyDetails,
        PropertyId,
        setPropertyId,
        uniqueId,
        setUniqueId,
        totalImage,
        setTotalImage,
        uniqueProperty,
        setUniqueProperty,
        userEnquiryData,
        agent,
        setAgent,
        setUserEnquiryData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
