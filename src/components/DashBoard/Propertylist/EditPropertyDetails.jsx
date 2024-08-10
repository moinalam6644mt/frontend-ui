import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthUser from "../../Authentication/Validation/AuthUser";
import EditFlatProperty from "../ListingPage/EditFlatProperty";
import EditPropertyForCommercial from "../ListingPage/EditPropertyForCommerical";
import AmenitiesComponent from '../ListingPage/Amenities'

const EditPropertyDetails = () => {
  const { callApi } = AuthUser();
  const { property_id } = useParams();
  const [propertyDetails, setPropertyDetails] = useState();
  const [activeTab, setActiveTab] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [updatedData, setUpdatedData] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [tabFiles, setTabFiles] = useState({ updatedGallery: [] });
  const [caption, setCaption] = useState();
  const [checkedAmenities ,setCheckedAmenities]=useState(null)


  useEffect(() => {
    fetchPropertyData(property_id);
  }, [property_id]);

  const fetchPropertyData = async (property_id) => {
    try {
      const response = await callApi({
        api: `/property_details/${property_id}`,
        method: "GET",
      });

      setPropertyDetails(response.data);
      setTabFiles({
        updatedGallery: response.data.gallery,
      });
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  useEffect(() => {
    if (propertyDetails) {
      const gallery = propertyDetails?.gallery || [];
      const initialTab = gallery[0]?.key_name || "";
      setActiveTab(initialTab);
      setImageFile(gallery);
    }
  }, [propertyDetails]);

  const handleTabClick = (key) => {
    setActiveTab(key);
    setCaption('')
  };

  const getFilteredImages = () => {
    if (!imageFile || imageFile.length === 0) return [];
    const activeImages = imageFile.find((item) => item.key_name === activeTab);
    return activeImages ? activeImages.images : [];
  };

  const handleInputChange = (e, fieldName) => {
    const updatedValue = e.target.value;
    setUpdatedData((prevData) => ({
      ...prevData,
      [fieldName]: updatedValue,
    }));
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    uploadFile(files);
  };

  const clearFileInput = () => {
    setTabFiles({ updatedGallery: [] });
  };

  const handleDelete = async (index) => {
    try {
      // Update the imageFile state
      setImageFile((prevData) =>
        prevData.map((item) =>
          item.key_name === activeTab
            ? {
                ...item,
                images: item.images.filter((_, idx) => idx !== index),
              }
            : item
        )
      );
      // Update the tabFiles state
      setTabFiles((prevTabFiles) => ({
        ...prevTabFiles,
        updatedGallery: prevTabFiles.updatedGallery.map((item) =>
          item.key_name === activeTab
            ? {
                ...item,
                images: item.images.filter((_, idx) => idx !== index),
              }
            : item
        ),
      }));
      toast.success("Image deleted successfully");
    } catch (error) {
      console.error("Error deleting image:", error);
      toast.error("Failed to delete image");
    }
  };

  const handleCaption = (e) => {
    setCaption(e.target.value);
  };

  const uploadFile = async (fileArray) => {
    let allResponses = [];
    try {
      for (const file of fileArray) {
        const response = await callApi({
          api: "/upload",
          method: "UPLOAD",
          data: {
            images: file,
            key: activeTab,
          },
        });
        allResponses.push(response);
      }

      if (allResponses.length > 0) {
        const uploadedFiles = allResponses.flatMap(
          (response) => response.files
        );

        setTabFiles((prevTabFiles) => {
          const updatedGallery = prevTabFiles.updatedGallery.map((item) => {
            if (item.key_name === activeTab) {
              return {
                ...item,
                images: [
                  ...item.images,
                  ...uploadedFiles.map((file) => ({ image: file.filename })),
                 
                ],
                caption:caption
              };
            }
            return item;
          });

          // If activeTab does not exist in updatedGallery, add it
          if (!updatedGallery.some((item) => item.key_name === activeTab)) {
            updatedGallery.push({
              key_name: activeTab,
              images: uploadedFiles.map((file) => ({ image: file.filename })),
              caption:caption
            });
          }

          return {
            ...prevTabFiles,
            updatedGallery,
          };
        });

        setImageFile((prevImageFile) => {
          const updatedImageFile = prevImageFile.map((item) => {
            if (item.key_name === activeTab) {
              return {
                ...item,
                images: [
                  ...item.images,
                  ...uploadedFiles.map((file) => ({ image: file.filename })),
                ],
              };
            }
            return item;
          });

          // If activeTab does not exist in imageFile, add it
          if (!updatedImageFile.some((item) => item.key_name === activeTab)) {
            updatedImageFile.push({
              key_name: activeTab,
              images: uploadedFiles.map((file) => ({ image: file.filename })),
            });
          }

          return updatedImageFile;
        });
        toast.success("Images uploaded successfully");
      }
    } catch (error) {
      console.error("Error occurred while uploading images:", error);
      toast.error("Failed to upload images");
    }
  };

  const toggleEditMode = (field) => {
    setEditMode((prev) => (prev === field ? null : field));
  };

  const handleCancel = () => {
    setEditMode(null);
  };

  const handleSave = () => {
    if (editMode) {
      const updatedPropertyDetails = {
        ...propertyDetails,
        ...updatedData,
      };
      setPropertyDetails(updatedPropertyDetails);
      setEditMode(null);
    }
  };

  const handleSubmit = async () => {
    try {
      await callApi({
        api: `/update_chatbot/${property_id}`,
        method: "POST",
        data: { ...updatedData, ...tabFiles ,...checkedAmenities},
      });
      setUpdatedData({});
      toast.success("Your changes have been updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Failed to update data");
    }
  };

 

  return (
    <div className="property-details-container">
      {propertyDetails ? (
        <div>
          <h1>Property Details</h1>
          {propertyDetails.property_for === "rent" ? (
            <EditFlatProperty
              propertyDetails={propertyDetails}
              editMode={editMode}
              toggleEditMode={toggleEditMode}
              handleCancel={handleCancel}
              handleSave={handleSave}
              handleInputChange={handleInputChange}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
              getFilteredImages={getFilteredImages}
              handleDelete={handleDelete}
              handleFileChange={handleFileChange}
              clearFileInput={clearFileInput}
              caption={caption}
              setCaption={setCaption}
              handleCaption={handleCaption}
            />
          ) : propertyDetails.property_for === "sell" ? (
            <EditPropertyForCommercial
              propertyDetails={propertyDetails}
              editMode={editMode}
              toggleEditMode={toggleEditMode}
              handleCancel={handleCancel}
              handleSave={handleSave}
              handleInputChange={handleInputChange}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
              getFilteredImages={getFilteredImages}
              handleDelete={handleDelete}
              handleFileChange={handleFileChange}
              clearFileInput={clearFileInput}
            />
          ) : (
            <p>No record found</p>
          )}
          <AmenitiesComponent setCheckedAmenities={setCheckedAmenities} />
          <button
            className="bg-warning"
            style={{ marginLeft: "40%" }}
            onClick={handleSubmit}
          >
            Submit All Data
          </button>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
};

export default EditPropertyDetails;
