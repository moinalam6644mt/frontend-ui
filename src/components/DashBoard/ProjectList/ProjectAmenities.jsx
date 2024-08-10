import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import AuthUser from "../../Authentication/Validation/AuthUser";

const ProjectAmenity = ({
  setCheckedAmenities,
  handleShow,
  AddNewAmenities = () => {}, 
  setProjectId,
}) => {
  const { callApi } = AuthUser();
  const [show, setShow] = useState(handleShow);
  const [amenityData, setAmenities] = useState([]);

  useEffect(() => {
    const checked = amenityData
      .filter((amenity) => amenity.checked)
      .map((amenity) => ({
        name: amenity.name,
        amenityId: amenity.amenity_id,
      }));
    setCheckedAmenities(checked);
  }, [amenityData, setCheckedAmenities]);

  useEffect(() => {
    FetchAmenityData();
  }, [show]);

  const FetchAmenityData = async () => {
    try {
      const response = await callApi({
        api: "/aminity_name",
        method: "GET",
      });
      if (response) {
        setAmenities(response.data);
      }
    } catch (error) {
      console.error("Error fetching amenities:", error);
    }
  };

  const changeAmenities = (index) => {
    const updatedAmenities = [...amenityData];
    updatedAmenities[index].checked = !updatedAmenities[index].checked;
    setAmenities(updatedAmenities);
  };

  const handleClose = () => {
    setProjectId("");
    setShow(false);
  };

  const handleSave = () => {
  setProjectId("");
    handleClose();
    AddNewAmenities();
  };

  return (
    <div className="col-lg-12 col-sm-6">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Amenities</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul style={{ listStyleType: "none" }}>
            {amenityData.map((amenity, index) => (
              <li
                key={index}
                style={{
                  fontSize: "20px",
                  marginRight: "10px",
                  color: amenity.checked ? "pink" : "black",
                }}
              >
                <input
                  type="checkbox"
                  checked={amenity.checked}
                  onChange={() => changeAmenities(index)}
                  style={{ marginRight: "20px" }}
                />
                {amenity.name}
              </li>
            ))}
          </ul>
          <button onClick={handleSave} className="bg-info">
            Save
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ProjectAmenity;
