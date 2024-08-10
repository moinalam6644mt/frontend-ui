import React, {  useContext, useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext'
import FlatDetails from '../../../AllProperetyData/FlatDetails';
import CommercialDetail from '../../../AllProperetyData/CommercialDetail';
import AuthUser from '../../../Authentication/Validation/AuthUser';

const PropertyDetails = () => {
    let {property_id}=useParams()

    const { callApi } = AuthUser();
    
    
    const {uniqueProperty, setUniqueProperty} = useContext(AuthContext);
    
   
    

    const getPropertyData = async () => {

        try {
            const response = await callApi({
                api: `/property_details/${property_id}`,
                method: "GET",
            });
            if (response && response.success) {
                //console.log(response);
                
                setUniqueProperty(response);
                
            }
        } catch (error) {
            console.error("Error fetching property data:", error);
        }
    };
    useEffect(() => {
        getPropertyData();
    },[property_id]);
    return (
        <>
            
            {uniqueProperty?.data && (
                uniqueProperty?.data?.property_type === 'Commercial' ? 
                <CommercialDetail property={uniqueProperty} /> : 
                <FlatDetails property={uniqueProperty} />
            )}
        </>
    )
}

export default PropertyDetails
