import React, { useState, useEffect } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import { useParams } from "react-router-dom";
import { bhk_type, Landmark_tab} from "../../Property/ProjectData";
import EditProjectDocument from "./EditProjectDocument";
import EditProjectGallery from "./EditProjectGallery";
import EditFloorPlan from "./EditFloorPlan";

const EditProjectDetails = () => {
  const { callApi } = AuthUser();
  const { project_id } = useParams();
  const [projectDetails, setProjectDetails] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [editMode, setEditMode] = useState(null); 
  const [errors, setErrors] = useState({});
  const [selectedBHK, setSelectedBHK] = useState("");
  const [selectedBHKDetails, setSelectedBHKDetails] = useState(null);
  const [bhkEditMode, setBhkEditMode] = useState(null);
  const [selectedLandmark, setSelectedLandmark] = useState("");
  const [selectedLandmarkDetails, setSelectedLandmarkDetails] = useState(null);
  const [landmarkEditMode, setLandmarkEditMode] = useState(null);
  const [updateFloorPlan,setUpdatedFloorPlan]=useState(null);
  const [updatedProjectGallery,setUpdateddProjectGallery]=useState(null);
  const [updateDocumentFile,setUpdatedDocumentFile]=useState(null);

  useEffect(() => {
    fetchProjectData(project_id);
  }, [project_id]);

  const fetchProjectData = async (project_id) => {
    try {
      const response = await callApi({
        api: `/get_unique_project/${project_id}`,
        method: "GET",
      });
      setProjectDetails(response.data);
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  const handleInputChange = (e, key) => {
    setUpdatedData({
      ...updatedData,
      [key]: e.target.value,
    });
  };

  const handleSave = () => {
    if (editMode) {
      setProjectDetails({
        ...projectDetails,
        ...updatedData,
      });
      setEditMode(null);
    }
  };

  const newData= {
    'updatedData':updatedData,
    'updateDocument':updateDocumentFile,
    'updateGallery':updatedProjectGallery,
    'updatedFloorPlan':updateFloorPlan,
  };

  const handleSubmit = async () => {
    const val= JSON.stringify(newData)
    try {
      await callApi({
        api: `/update_project/${project_id}`,
        method: "POST",
        data: {data:val}
      });
      setUpdatedData({});
      setErrors({});
      alert("Your changes have been updated successfully");
    } catch (error) {
      console.error("Error updating data:", error);
      alert("Failed to update data");
    }
  };

  const toggleEditMode = (key) => {
    setEditMode(editMode === key ? null : key);
  };

  const handleCancel = () => {
    setEditMode(null);
    setUpdatedData({});
  };

  const renderEditMode = (key) => (
    <>
      <input
        type="text"
        value={updatedData[key] || projectDetails[key] || ""}
        onChange={(e) => handleInputChange(e, key)}
      />
      {errors[key] && <div style={{ color: "red" }}>{errors[key]}</div>}
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </>
  );

  const handleBHKClick = (name) => {
    setSelectedBHK(name);
    const bhkDetails = projectDetails.bhk_types?.find(
      (item) => item.bhk_type === name
    );
    setSelectedBHKDetails(bhkDetails);
  };

  const handleBhkInputChange = (e, field) => {
    setSelectedBHKDetails({
      ...selectedBHKDetails,
      [field]: e.target.value,
    });
  };

  const handleBhkSave = () => {
    const updatedBhkTypes = projectDetails.bhk_types.map((bhk) =>
      bhk.bhk_type === selectedBHK ? { ...selectedBHKDetails } : bhk
    );
    setUpdatedData({
      ...updatedData,
      bhk_types: updatedBhkTypes,
    });
    setBhkEditMode(null);
  };

  const renderBhkEditMode = (field) => (
    <>
      <input
        type="text"
        value={selectedBHKDetails[field] || ""}
        onChange={(e) => handleBhkInputChange(e, field)}
      />
      {errors[field] && <div style={{ color: "red" }}>{errors[field]}</div>}
      <button onClick={handleBhkSave}>Save</button>
      <button onClick={() => setBhkEditMode(null)}>Cancel</button>
    </>
  );

  const handleLandmarkClick = (name) => {
    setSelectedLandmark(name);
    const landmark = projectDetails.landmarks?.find(
      (l) => l.landmark_name === name
    );
    setSelectedLandmarkDetails(landmark);
  };

  const handleLandmarkValueChange = (e, index, field) => {
    const updatedDetails = [...selectedLandmarkDetails.details];
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: e.target.value,
    };
    setSelectedLandmarkDetails({
      ...selectedLandmarkDetails,
      details: updatedDetails,
    });
  };

  const handleLandmarkSave = () => {
    const updatedLandmarks = projectDetails.landmarks.map((landmark) =>
      landmark.landmark_name === selectedLandmark
        ? { ...selectedLandmarkDetails }
        : landmark
    );
    setUpdatedData({
      ...updatedData,
      landmarks: updatedLandmarks,
    });
    setLandmarkEditMode(null);
  };

  const renderLandmarkEditMode = (index, field) => (
    <>
      <input
        type="text"
        value={selectedLandmarkDetails.details[index][field] || ""}
        onChange={(e) => handleLandmarkValueChange(e, index, field)}
      />
      {errors[field] && <div style={{ color: "red" }}>{errors[field]}</div>}
    </>
  );

console.log(updateFloorPlan)
  return (
    <div>
      <div className="short-banner">
        <div className="container">
          <h1>EDIT PROJECT DETAILS</h1>
        </div>
      </div>
      <ul
        className="mb-2"
        style={{
          listStyleType: "none",
          backgroundColor: "pink",
          fontSize: "20px",
          border: "4px dotted red",
        }}
      >
        {/* City name */}
        <li>
          City Name:
          {editMode === "city_name" ? (
            renderEditMode("city_name")
          ) : (
            <>
              {projectDetails.city_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("city_name")}
              ></i>
            </>
          )}
        </li>
        {/* Society name */}
        <li>
          Society Name:
          {editMode === "society_name" ? (
            renderEditMode("society_name")
          ) : (
            <>
              {projectDetails.society_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("society_name")}
              ></i>
            </>
          )}
        </li>
        {/* Locality */}
        <li>
          Locality:
          {editMode === "locality" ? (
            renderEditMode("locality")
          ) : (
            <>
              {projectDetails.locality}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("locality")}
              ></i>
            </>
          )}
        </li>
        {/* Area */}
        <li>
          Area:
          {editMode === "area" ? (
            renderEditMode("area")
          ) : (
            <>
              {projectDetails.area}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("area")}
              ></i>
            </>
          )}
        </li>
        {/* Address */}
        <li>
          Address:
          {editMode === "address" ? (
            renderEditMode("address")
          ) : (
            <>
              {projectDetails.address}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("address")}
              ></i>
            </>
          )}
        </li>
        {/* Launched Date */}
        <li>
          Launched Date:
          {editMode === "launched_date" ? (
            renderEditMode("launched_date")
          ) : (
            <>
              {new Date(projectDetails.launched_date).toLocaleDateString()}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("launched_date")}
              ></i>
            </>
          )}
        </li>
        {/* Developer Name */}
        <li>
          Developer Name:
          {editMode === "developer_name" ? (
            renderEditMode("developer_name")
          ) : (
            <>
              {projectDetails.developer_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("developer_name")}
              ></i>
            </>
          )}
        </li>
         {/* Project Name */}
         <li>
          Project Name:
          {editMode === "project_name" ? (
            renderEditMode("project_name")
          ) : (
            <>
              {projectDetails.project_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("project_name")}
              ></i>
            </>
          )}
        </li>
        {/* Total Tower No. */}
        <li>
          Total Tower No.:
          {editMode === "tower" ? (
            renderEditMode("tower")
          ) : (
            <>
              {projectDetails.tower}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("tower")}
              ></i>
            </>
          )}
        </li>
        {/* No. of Total Unit */}
        <li>
          No. of Total Unit:
          {editMode === "unit" ? (
            renderEditMode("unit")
          ) : (
            <>
              {projectDetails.unit}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("unit")}
              ></i>
            </>
          )}
        </li>
        {/* No. of Min Price Value */}
        <li>
          Min Price Value ( in sq/ft) :
          {editMode === "min_price" ? (
            renderEditMode("min_price")
          ) : (
            <>
              {projectDetails.min_price}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("min_price")}
              ></i>
            </>
          )}
        </li>
        {/* No. of Max Price Value */}
        <li>
          Max Price Value ( in sq/ft) :
          {editMode === "max_price" ? (
            renderEditMode("max_price")
          ) : (
            <>
              {projectDetails.max_price}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("max_price")}
              ></i>
            </>
          )}
        </li>
        {/* Project Size */}
        <li>
          Project Size in (sq/ft) :
          {editMode === "project_size" ? (
            renderEditMode("project_size")
          ) : (
            <>
              {projectDetails.project_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("project_size")}
              ></i>
            </>
          )}
        </li>
         {/* Project Amount  */}
         <li>
          Project Amount per sq/ft(in INR) :
          {editMode === "amt_per_sqft" ? (
            renderEditMode("amt_per_sqft")
          ) : (
            <>
              {projectDetails.amt_per_sqft}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("amt_per_sqft")}
              ></i>
            </>
          )}
        </li>
        {/*  Project Status */}
        <li>
          Project Status :
          {editMode === "project_status" ? (
            renderEditMode("project_status")
          ) : (
            <>
              {projectDetails.project_status}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("project_status")}
              ></i>
            </>
          )}
        </li>
        {/* Project Description */}
        <li>
          Project Description:
          {editMode === "project_description" ? (
            renderEditMode("project_description")
          ) : (
            <>
              {projectDetails.project_description}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("project_description")}
              ></i>
            </>
          )}
        </li>
        {/* Possession Date */}
        <li>
          Possession Date:
          {editMode === "possession_date" ? (
            renderEditMode("possession_date")
          ) : (
            <>
              {new Date(projectDetails.possession_date).toLocaleDateString()}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("possession_date")}
              ></i>
            </>
          )}
        </li>

        {/* BHK Types */}
        <React.Fragment>
          <div className="bg-danger mt-4">
            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              {bhk_type.map((tab, index) => (
                <li className="nav-item" key={index}>
                  <a
                    onClick={() => handleBHKClick(tab.name)}
                    className={`nav-link ${
                      selectedBHK === tab.name ? "active" : ""
                    }`}
                  >
                    <span
                      className="btn btn-info text-light"
                      style={{ marginRight: "2px" }}
                    >
                      {tab.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {selectedBHKDetails ? (
              <ul>
                <li>
                  Min:
                  {bhkEditMode === "min_sqft" ? (
                    renderBhkEditMode("min_sqft")
                  ) : (
                    <>
                      {selectedBHKDetails.min_sqft}
                      <i
                        style={{ marginLeft: "20px" }}
                        className="icon-feather-edit"
                        onClick={() => setBhkEditMode("min_sqft")}
                      ></i>
                    </>
                  )}
                </li>
                <li>
                  Max:
                  {bhkEditMode === "max_sqft" ? (
                    renderBhkEditMode("max_sqft")
                  ) : (
                    <>
                      {selectedBHKDetails.max_sqft}
                      <i
                        style={{ marginLeft: "20px" }}
                        className="icon-feather-edit"
                        onClick={() => setBhkEditMode("max_sqft")}
                      ></i>
                    </>
                  )}
                </li>
                <li>
                  Total Units:
                  {bhkEditMode === "unit" ? (
                    renderBhkEditMode("unit")
                  ) : (
                    <>
                      {selectedBHKDetails.unit}
                      <i
                        style={{ marginLeft: "20px" }}
                        className="icon-feather-edit"
                        onClick={() => setBhkEditMode("unit")}
                      ></i>
                    </>
                  )}
                </li>
              </ul>
            ) : (
              "No Record Founds"
            )}
          </div>
        </React.Fragment>

        {/* Landmark Types */}
        <React.Fragment>
          <div className="bg-danger mt-4">
            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              {Landmark_tab.map((landmark, index) => (
                <li className="nav-item" key={index}>
                  <a
                    onClick={() => handleLandmarkClick(landmark.key)}
                    className={`nav-link ${
                      selectedLandmark === landmark.key ? "active" : ""
                    }`}
                  >
                    <span
                      className="btn btn-info text-light mb-1 ml-0"
                      style={{ marginRight: "10px" }}
                    >
                      {landmark.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {selectedLandmarkDetails ? (
              <ul>
                {selectedLandmarkDetails.details.map((detail, index) => (
                  <li key={index}>
                    Landmark:
                    {landmarkEditMode === `landmark_value_${index}` ? (
                      renderLandmarkEditMode(index, "landmark_value")
                    ) : (
                      <>
                        {detail.landmark_value}
                        <i
                          style={{ marginLeft: "20px" }}
                          className="icon-feather-edit"
                          onClick={() =>
                            setLandmarkEditMode(`landmark_value_${index}`)
                          }
                        ></i>
                      </>
                    )}
                    <br />
                    Distance:
                    {landmarkEditMode === `distance_${index}` ? (
                      renderLandmarkEditMode(index, "distance")
                    ) : (
                      <>
                        {detail.distance}
                        <i
                          style={{ marginLeft: "20px" }}
                          className="icon-feather-edit"
                          onClick={() =>
                            setLandmarkEditMode(`distance_${index}`)
                          }
                        ></i>
                      </>
                    )}
                  </li>
                ))}
                {landmarkEditMode && (
                  <button onClick={handleLandmarkSave}>Save All</button>
                )}
              </ul>
            ) : (
              "No Record Found"
            )}
          </div>
        </React.Fragment>

        {/* Document Types */}
        <React.Fragment>
        <EditProjectDocument projectDetails={projectDetails} setUpdatedDocumentFile={setUpdatedDocumentFile} />
        <EditProjectGallery projectDetails={projectDetails} setUpdateddProjectGallery={setUpdateddProjectGallery}/>
        <EditFloorPlan projectDetails={projectDetails} setUpdatedFloorPlan={setUpdatedFloorPlan} />
        </React.Fragment>
      </ul>
      <button
        className="btn btn-info"
        style={{ marginLeft: "40%" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default EditProjectDetails;
