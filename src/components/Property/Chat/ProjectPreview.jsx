import React, { useEffect, useState } from "react";
import {
  bhk_type,
  Landmark_tab,
  Project_image,
  Document_tpye,
} from "../ProjectData";

const ProjectPreview = ({
  Submit,
  Data,
  handleBHKTabClick,
  handleLandmarkTabClick,
  imageData,
  FloorData,
  DocumentData,
  masterData,
}) => {
  const [data, setData] = useState({});
  const [selectedBHK, setSelectedBHK] = useState(null);
  const [selectedLandmark, setSelectedLandmark] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedFloorPlan, setSelectedFloorPlan] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    setData(Data);
  }, [Data]);

  const handleBHKClick = (tabName) => {
    setSelectedBHK(tabName);
    if (handleBHKTabClick) {
      handleBHKTabClick(tabName);
    }
  };

  const handleLandmarkClick = (key) => {
    setSelectedLandmark(key);
    if (handleLandmarkTabClick) {
      handleLandmarkTabClick(key);
    }
  };

  const handleGalleryClick = (key) => {
    setSelectedGallery(key);
  };
  const handleFloorClick = (key) => {
    setSelectedFloorPlan(key);
  };
  const handleDocumentClick = (key) => {
    setSelectedDocument(key);
  };

  const selectedBHKDetails = data?.bhk_type?.find(
    (tab) => tab.name === selectedBHK
  );
  const selectedLandmarkDetails = data?.landmark?.find(
    (tab) => tab.name === selectedLandmark
  );

  return (
    <div className="bg-warning">
      <ul
        className="ml-1 p-2"
        style={{ fontSize: "20px", listStyleType: "none" }}
      >
        <li>City Name: {data?.city_name}</li>
        <li>Society Name: {data?.society_name}</li>
        <li>Locality: {data?.locality}</li>
        <li>Area: {data?.area}</li>
        <li>Address: {data?.address}</li>
        <li>Launched Date: {data?.launched_date}</li>
        <li>Max Price: {data?.max_price}</li>
        <li>Min Price: {data?.min_price}</li>
        <li>Project Size: {data?.project_size}</li>
        <li>Developer Details: {data?.developer_name}</li>
        <li>Total Tower: {data?.tower}</li>
        <li>Total Unit: {data?.unit}</li>
        <li>Project Description: {data?.project_description}</li>
        <li>Project Status: {data?.project_status}</li>
      </ul>

      <div className="bg-danger mt-4">
        <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
          {bhk_type?.map((tab, index) => (
            <li className="nav-item" key={index}>
              <a
                onClick={() => handleBHKClick(tab.name)}
                className={`nav-link ${
                  selectedBHK === tab.name ? "active" : ""
                }`}
              >
                <span
                  className="btn btn-info text-light mb-1 ml-0"
                  style={{ marginRight: "10px" }}
                >
                  {tab.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedBHKDetails && (
          <ul>
            <li>Min: {selectedBHKDetails.value.min}</li>
            <li>Max: {selectedBHKDetails.value.max}</li>
            <li>Total Units: {selectedBHKDetails.value.total_unit}</li>
          </ul>
        )}
      </div>

      <div className="bg-danger mt-4">
        <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
          {Landmark_tab?.map((tab, index) => (
            <li className="nav-item" key={index}>
              <a
                onClick={() => handleLandmarkClick(tab.key)}
                className={`nav-link ${
                  selectedLandmark === tab.key ? "active" : ""
                }`}
              >
                <span
                  className="btn btn-info text-light mb-1 ml-0"
                  style={{ marginRight: "10px" }}
                >
                  {tab.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedLandmarkDetails &&
          selectedLandmarkDetails.value.map((landmark, index) => (
            <ul key={index}>
              <li>Name: {landmark.text}</li>
              <li>Distance: {landmark.distance}</li>
            </ul>
          ))}
      </div>

      <div className="bg-danger mt-4">
        <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
          {Project_image?.map((tab, index) => (
            <li className="nav-item" key={index}>
              <a
                onClick={() => handleGalleryClick(tab.key)}
                className={`nav-link  ${
                  selectedGallery === tab.key ? "active" : ""
                }`}
              >
                <span className="btn btn-info text-light">{tab.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {selectedGallery &&
          imageData
            .filter((imageData) => imageData.key === selectedGallery)
            .flatMap((imageData) => imageData.images)
            .map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.originalname}
                  style={{
                    marginTop: "10px",
                    maxWidth: "20%",
                    height: "auto",
                  }}
                />
              </div>
            ))}
      </div>

      <React.Fragment>
        <div className="bg-danger mt-4">
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            {bhk_type?.map((tab, index) => (
              <li className="nav-item" key={index}>
                <a
                  onClick={() => handleFloorClick(tab.name)}
                  className={`nav-link ${
                    selectedFloorPlan === tab.name ? "active" : ""
                  }`}
                >
                  <span
                    className="btn btn-info text-light mb-1 ml-0"
                  >
                    {tab.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {selectedFloorPlan &&
            FloorData.filter((imageData) => imageData.key === selectedFloorPlan)
              .flatMap((imageData) => imageData.images)
              .map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    alt={image.originalname}
                    style={{
                      marginTop: "10px",
                      maxWidth: "20%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
        </div>
      </React.Fragment>

      <React.Fragment>
        <div className="bg-danger mt-4">
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            {Document_tpye?.map((tab, index) => (
              <li className="nav-item" key={index}>
                <a
                  onClick={() => handleDocumentClick(tab.type)}
                  className={`nav-link ${
                    selectedDocument === tab.type ? "active" : ""
                  }`}
                >
                  <span
                    className="btn btn-info text-light mb-1 ml-0"
                  >
                    {tab.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {selectedDocument &&
            DocumentData.filter(
              (imageData) => imageData.key === selectedDocument
            )
              .flatMap((imageData) => imageData.images)
              .map((image, index) => (
                <div key={index}>
                  <img
                    src={image.url}
                    alt={image.originalname}
                    style={{
                      marginTop: "10px",
                      maxWidth: "20%",
                      height: "auto",
                    }}
                  />
                </div>
              ))}
        </div>
      </React.Fragment>

      <div>
        <p>Master Images:</p>
        <div>
        {masterData.length > 0 && (
        <>
          <div className="d-flex flex-wrap">
            {masterData.map((imageUrl, index) => (
              <div key={index} className="col-2 p-2">
                <div className="selected-image-container position-relative">
                  <img
                    src={imageUrl}
                    alt={`image-${index}`}
                    className="selected-image img-fluid"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
        </div>
      </div>
      <hr />
      <button onClick={Submit}>Submit All Data</button>
    </div>
  );
};

export default ProjectPreview;
