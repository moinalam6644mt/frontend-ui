import React, { useState } from "react";
import * as Yup from "yup";
import { EditflatKey } from "../../Property/PropertyData";
import { tabData } from "../../Property/PropertyData";

const EditFlatProperty = ({
  propertyDetails,
  editMode,
  toggleEditMode,
  handleCancel,
  handleSave,
  handleInputChange,
  handleTabClick,
  activeTab,
  getFilteredImages,
  handleDelete,
  handleFileChange,
  caption,
  handleCaption,
}) => {
  const [errors, setErrors] = useState({});

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    city_name: Yup.string()
      .required("City name is required")
      .matches(/^[A-Za-z\s]+$/, "City must only contain alphabetic characters"),
    society_name: Yup.string()
      .required("Society name is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Society name must only contain alphabetic characters"
      ),
    locality: Yup.string()
      .required("Locality is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Locality must only contain alphabetic characters"
      ),
    // Add other fields validation here if needed
  });

  const validateInput = async (key, value) => {
    try {
      await validationSchema.validateAt(key, { [key]: value });
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: "",
      }));
      return true;
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: validationError.message,
      }));
      return false;
    }
  };
  const handleInputChangeWithValidation = async (e, key) => {
    const { value } = e.target;
    handleInputChange(e, key);
    await validateInput(key, value);
  };
  const handleSaveWithValidation = async () => {
    const fieldsToValidate = ["city_name", "society_name", "locality"];
    let isValid = true;
    for (const field of fieldsToValidate) {
      const valid = await validateInput(field, propertyDetails[field]);
      if (!valid) {
        isValid = false;
      }
    }
    if (isValid) {
      handleSave();
    } else {
      console.error("Validation failed");
    }
  };
  return (
    <React.Fragment>
      <ul
        className="mb-2"
        style={{
          listStyleType: "none",
          backgroundColor: "pink",
          fontSize: "20px",
          border: "4px dotted yellow",
        }}
      >
        {/* city name */}
        <li>
          {EditflatKey[0].editkey} :
          {editMode === "city_name" ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.city_name}
                onChange={(e) =>
                  handleInputChangeWithValidation(e, EditflatKey[0].editkey)
                }
              />
              {errors.city_name && (
                <div style={{ color: "red" }}>{errors.city_name}</div>
              )}
              <button onClick={handleSaveWithValidation}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.city_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode("city_name")}
              ></i>
            </>
          )}
        </li>
        {/* society name */}
        <li>
          {EditflatKey[1].editkey} :
          {editMode === `society_name` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.society_name}
                onChange={(e) => handleInputChange(e, EditflatKey[1].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.society_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`society_name`)}
              ></i>
            </>
          )}
        </li>
        {/* locality */}
        <li>
          {EditflatKey[2].editkey} :
          {editMode === `locality` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.locality}
                onChange={(e) => handleInputChange(e, EditflatKey[2].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.locality}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`locality`)}
              ></i>
            </>
          )}
        </li>
        {/* area */}
        <li>
          {EditflatKey[3].editkey} :{" "}
          {editMode === `area` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.area}
                onChange={(e) => handleInputChange(e, EditflatKey[2].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.area}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`area`)}
              ></i>
            </>
          )}
        </li>
        {/* address */}
        <li>
          {EditflatKey[4].editkey} :{" "}
          {editMode === `address` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.address}
                onChange={(e) => handleInputChange(e, EditflatKey[2].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.address}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`address`)}
              ></i>
            </>
          )}
        </li>
        {/* bedroom */}
        <li>
          {EditflatKey[5].editkey} :{" "}
          {editMode === `bedroom` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.bedroom}
                onChange={(e) => handleInputChange(e, EditflatKey[5].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.bedroom}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`bedroom`)}
              ></i>
            </>
          )}
        </li>
        {/* bedroom_size */}
        <li>
          {EditflatKey[6].editkey} :{" "}
          {editMode ===
          `
      bedroom_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.bedroom_size}
                onChange={(e) => handleInputChange(e, EditflatKey[6].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.bedroom_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() =>
                  toggleEditMode(`
              bedroom_size`)
                }
              ></i>
            </>
          )}
        </li>
        {/* balcony */}
        <li>
          {EditflatKey[7].editkey} :{" "}
          {editMode === `balcony` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.balcony}
                onChange={(e) => handleInputChange(e, EditflatKey[7].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.balcony}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`balcony`)}
              ></i>
            </>
          )}
        </li>
        {/* balcony_size */}
        <li>
          {EditflatKey[8].editkey} :{" "}
          {editMode === `balcony_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.balcony_size}
                onChange={(e) => handleInputChange(e, EditflatKey[8].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.balcony_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`balcony_size`)}
              ></i>
            </>
          )}
        </li>
        {/* floor_no */}
        <li>
          {EditflatKey[9].floor} :{" "}
          {editMode === `floor_no` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.floor_no}
                onChange={(e) => handleInputChange(e, EditflatKey[9].floor)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.floor_no}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`floor_no`)}
              ></i>
            </>
          )}
        </li>
        {/* total_floor_no */}
        <li>
          {EditflatKey[10].editkey} :{" "}
          {editMode === `total_floor_no` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.total_floor_no}
                onChange={(e) => handleInputChange(e, EditflatKey[10].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.total_floor_no}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`total_floor_no`)}
              ></i>
            </>
          )}
        </li>
        {/* bathroom */}
        <li>
          {EditflatKey[11].editkey} :{" "}
          {editMode === `bathroom` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.bathroom}
                onChange={(e) => handleInputChange(e, EditflatKey[11].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.bathroom}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`bathroom`)}
              ></i>
            </>
          )}
        </li>
        {/* bathroom_size */}
        <li>
          {EditflatKey[12].editkey} :{" "}
          {editMode === `bathroom_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.bathroom_size}
                onChange={(e) => handleInputChange(e, EditflatKey[12].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.bathroom_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`bathroom_size`)}
              ></i>
            </>
          )}
        </li>
        {/* kitchen */}
        <li>
          {EditflatKey[13].editkey} :{" "}
          {editMode === `kitchen` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.kitchen}
                onChange={(e) => handleInputChange(e, EditflatKey[13].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.kitchen}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`kitchen`)}
              ></i>
            </>
          )}
        </li>
        {/* kitchen_size */}
        <li>
          {EditflatKey[14].editkey} :{" "}
          {editMode === `kitchen_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.kitchen_size}
                onChange={(e) => handleInputChange(e, EditflatKey[14].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.kitchen_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`kitchen_size`)}
              ></i>
            </>
          )}
        </li>
        {/* expected_amt */}
        <li>
          {EditflatKey[15].editkey} :{" "}
          {editMode === `expected_amt` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.expected_amt}
                onChange={(e) => handleInputChange(e, EditflatKey[15].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.expected_amt}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`expected_amt`)}
              ></i>
            </>
          )}
        </li>
        {/* booking_amt */}
        <li>
          {EditflatKey[16].editkey} :{" "}
          {editMode === `booking_amt` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.booking_amt}
                onChange={(e) => handleInputChange(e, EditflatKey[16].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.booking_amt}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`booking_amt`)}
              ></i>
            </>
          )}
        </li>
        {/* carpet_area */}
        <li>
          {EditflatKey[17].editkey} :{" "}
          {editMode === `carpet_area` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.carpet_area}
                onChange={(e) => handleInputChange(e, EditflatKey[17].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.carpet_area}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`carpet_area`)}
              ></i>
            </>
          )}
        </li>
        {/* super_area */}
        <li>
          {EditflatKey[18].editkey} :{" "}
          {editMode === `super_area` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.super_area}
                onChange={(e) => handleInputChange(e, EditflatKey[18].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.super_area}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`super_area`)}
              ></i>
            </>
          )}
        </li>
        {/* propject_details */}
        <li>
          {EditflatKey[19].editkey} :{" "}
          {editMode === `propject_details` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.propject_details}
                onChange={(e) => handleInputChange(e, EditflatKey[19].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.propject_details}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`propject_details`)}
              ></i>
            </>
          )}
        </li>
        {/* facing */}
        <li>
          {EditflatKey[19].editkey} :{" "}
          {editMode === `facing` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.facing}
                onChange={(e) => handleInputChange(e, EditflatKey[19].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.facing}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`facing`)}
              ></i>
            </>
          )}
        </li>
        {/* ownership_details */}
        <li>
          {EditflatKey[21].editkey} :{" "}
          {editMode === `ownership_details` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.ownership_details}
                onChange={(e) => handleInputChange(e, EditflatKey[21].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.ownership_details}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`ownership_details`)}
              ></i>
            </>
          )}
        </li>
        {/* furnishing_status */}
        <li>
          {EditflatKey[22].editkey} :{" "}
          {editMode === `furnishing_status` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.furnishing_status}
                onChange={(e) => handleInputChange(e, EditflatKey[22].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.furnishing_status}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`propject_details`)}
              ></i>
            </>
          )}
        </li>
        {/* processing_status */}
        <li>
          {EditflatKey[23].editkey} :{" "}
          {editMode === `processing_status` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.processing_status}
                onChange={(e) => handleInputChange(e, EditflatKey[23].editkey)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.processing_status}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`processing_status`)}
              ></i>
            </>
          )}
        </li>

        <ul className="masonryGrid">
          <h1 className="">{activeTab ? `${activeTab} Images` : "image"}</h1>
          <div className="bg-dark mt-1">
            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              {tabData.map((tab, index) => (
                <li className="nav-item " key={index}>
                  <button
                    onClick={() => handleTabClick(tab.key)}
                    className={`btn btn-warning text-light mb-2 ml-0 ${
                      activeTab === tab.key ? "active" : ""
                    }`}
                    style={{ marginRight: "5px", height: "30px" }}
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
        </ul>
      </ul>
    </React.Fragment>
  );
};

export default EditFlatProperty;
