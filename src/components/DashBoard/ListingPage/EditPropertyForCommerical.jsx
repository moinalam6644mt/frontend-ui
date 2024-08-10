import React from "react";
import {
  EditCommercialKey,
  Commerical_image_tab,
} from "../../Property/PropertyData";

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
  imagePreview = {},
  handleDelete,
  handleFileChange,
}) => {
  return (
    <React.Fragment>
      <ul
        style={{
          listStyleType: "none",
          backgroundColor: "pink",
          fontSize: "20px",
        }}
      >
        {/* city name */}
        <li>
          {EditCommercialKey[0].editkey} :{" "}
          {editMode === `land_zone` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.city_name}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[0].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.city_name}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`land_zone`)}
              ></i>
            </>
          )}
        </li>
        {/* locality */}
        <li>
          {EditCommercialKey[1].editkey} :{" "}
          {editMode === `locality` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.locality}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[1].editkey)
                }
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
        {/* land_zone */}
        <li>
          {EditCommercialKey[2].editkey} :{" "}
          {editMode === `land_zone` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.land_zone}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[2].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.land_zone}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`land_zone`)}
              ></i>
            </>
          )}
        </li>
        {/* businesses */}
        <li>
          {EditCommercialKey[3].editkey} :{" "}
          {editMode === `businesses` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.businesses}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[3].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.businesses}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`businesses`)}
              ></i>
            </>
          )}
        </li>
        {/* floor_no */}
        <li>
          {EditCommercialKey[4].editkey} :{" "}
          {editMode === `floor_no` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.floor_no}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[4].editkey)
                }
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
          {EditCommercialKey[5].editkey} :{" "}
          {editMode === `total_floor_no` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.total_floor_no}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[5].editkey)
                }
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
        {/* cabin_room */}
        <li>
          {EditCommercialKey[6].editkey} :{" "}
          {editMode === `cabin_room` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.cabin_room}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[6].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.cabin_room}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`cabin_room`)}
              ></i>
            </>
          )}
        </li>
        {/* cabin_size */}
        <li>
          {EditCommercialKey[7].editkey} :{" "}
          {editMode === `cabin_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.cabin_size}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[7].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.cabin_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`cabin_size`)}
              ></i>
            </>
          )}
        </li>
        {/* modify_interior */}
        <li>
          {EditCommercialKey[8].editkey} :{" "}
          {editMode === `modify_interior` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.modify_interior}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[8].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.modify_interior}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`modify_interior`)}
              ></i>
            </>
          )}
        </li>
        {/* personal_washroom */}
        <li>
          {EditCommercialKey[9].editkey} :{" "}
          {editMode === `personal_washroom` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.personal_washroom}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[9].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.personal_washroom}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`personal_washroom`)}
              ></i>
            </>
          )}
        </li>
        {/* washroom_no */}
        <li>
          {EditCommercialKey[10].editkey} :{" "}
          {editMode === `washroom_no` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.washroom_no}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[10].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.washroom_no}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`washroom_no`)}
              ></i>
            </>
          )}
        </li>
        {/* washroom_size */}
        <li>
          {EditCommercialKey[11].editkey} :{" "}
          {editMode === `washroom_size` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.washroom_size}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[11].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.washroom_size}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`washroom_size`)}
              ></i>
            </>
          )}
        </li>
        {/* assured_return */}
        <li>
          {EditCommercialKey[12].editkey} :{" "}
          {editMode === `assured_return` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.assured_return}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[12].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.assured_return}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`assured_return`)}
              ></i>
            </>
          )}
        </li>
        {/* cafeteria */}
        <li>
          {EditCommercialKey[13].editkey} :{" "}
          {editMode === `cafeteria` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.cafeteria}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[13].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.cafeteria}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`cafeteria`)}
              ></i>
            </>
          )}
        </li>
        {/* carpet_area */}
        <li>
          {EditCommercialKey[14].editkey} :{" "}
          {editMode === `carpet_area` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.carpet_area}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[14].editkey)
                }
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
          {EditCommercialKey[15].editkey} :{" "}
          {editMode === `super_area` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.super_area}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[15].editkey)
                }
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
        {/* lease_out */}
        <li>
          {EditCommercialKey[16].editkey} :{" "}
          {editMode === `lease_out` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.lease_out}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[16].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.lease_out}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`lease_out`)}
              ></i>
            </>
          )}
        </li>
        {/* monthly_rent */}
        <li>
          {EditCommercialKey[17].editkey} :{" "}
          {editMode === `monthly_rent` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.monthly_rent}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[17].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.monthly_rent}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`monthly_rent`)}
              ></i>
            </>
          )}
        </li>
        {/* security_amt */}
        <li>
          {EditCommercialKey[18].editkey} :{" "}
          {editMode === `security_amt` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.security_amt}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[18].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.security_amt}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`security_amt`)}
              ></i>
            </>
          )}
        </li>
        {/* maintanance_charge */}
        <li>
          {EditCommercialKey[19].editkey} :{" "}
          {editMode === `maintanance_charge` ? (
            <>
              <input
                type="text"
                defaultValue={propertyDetails.maintanance_charge}
                onChange={(e) =>
                  handleInputChange(e, EditCommercialKey[19].editkey)
                }
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              {propertyDetails.maintanance_charge}
              <i
                style={{ marginLeft: "20px" }}
                className="icon-feather-edit"
                onClick={() => toggleEditMode(`maintanance_charge`)}
              ></i>
            </>
          )}
        </li>
        <ul className="masonryGrid">
          <h1 className="">{activeTab ? `${activeTab} Images` : "image"}</h1>
          <div className="bg-dark mt-1">
            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
              {Commerical_image_tab.map((tab, index) => (
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
          <div>
            {getFilteredImages().length > 0 ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {getFilteredImages().map((imageObj, index) => (
                    <div key={index} className="image-container">
                      <img
                        src={`http://localhost/realestate/frontend-node/public/temp/${imageObj.image}`}
                        alt={`Image ${index}`}
                        width="200"
                        height="200"
                      />
                      <span onClick={() => handleDelete(index)}>
                        <i
                          style={{
                            backgroundColor: "red",
                            marginTop: "-500px",
                          }}
                          className="icon-feather-trash"
                        ></i>
                      </span>
                    </div>
                  ))}

                  {imagePreview[activeTab] &&
                    imagePreview[activeTab].map((image, index) => (
                      <div key={index} className="image-container">
                        <img
                          src={image.url}
                          alt={`Preview ${index}`}
                          width="200"
                          height="200"
                        />
                        <span onClick={() => handleDelete(index)}>
                          <i
                            style={{
                              backgroundColor: "red",
                              cursor: "pointer",
                            }}
                            className="icon-feather-trash"
                            aria-label={`Delete image ${index}`}
                          ></i>
                        </span>
                      </div>
                    ))}
                </div>

                <div>
                  Add Images:{" "}
                  <input type="file" onChange={handleFileChange} multiple />
                  {/* <button onClick={clearFileInput}>Clear</button> */}
                </div>
              </div>
            ) : (
              <p>No images available</p>
            )}
          </div>
        </ul>
      </ul>
    </React.Fragment>
  );
};

export default EditFlatProperty;
