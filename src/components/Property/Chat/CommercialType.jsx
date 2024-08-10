import React from "react";
import {
  commercial_select_type,
  commercial_cafeteria_type,
  Commerical_image_tab,
} from "../PropertyData";
import ReviewSection from "./ReviewData";

const CommercialType = ({
  selectCommercialValue,
  disableFunction,
  val,
  activeTab,
  handleFileChange,
  handleTabClick,
  imagePreview,
  clearFileInput,
  SubmitImageFile,
  handleReview,
  selectCommercialCafeteriaValue,
  imagefile,
  type,
  answerData,
  SubmitAllData,
  showReview,
  captionData,
  handleCaption,
}) => {
  return (
    <React.Fragment>
      {val.type === "office_type" && (
        <div className="col-lg-8 col-12 ">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
        </div>
      )}

      {val.type === "commercial_select_type_1" && (
        <div className="col-lg-8 col-12">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
          <br />
          {commercial_select_type.map((value, index) => (
            <button
              key={index}
              className="btn bg-info text-light"
              value={value.name}
              onClick={() => selectCommercialValue(value.name)}
              disabled={disableFunction(val.key)}
            >
              {value.name}
            </button>
          ))}
        </div>
      )}

      {val.type === "commercial_select_type_2" && (
        <div className="col-lg-8 col-12">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
          <br />
          {commercial_select_type.map((value, index) => (
            <button
              key={index}
              className="btn bg-info text-light"
              value={value.name}
              onClick={() => selectCommercialValue(value.name)}
              disabled={disableFunction(val.key)}
            >
              {value.name}
            </button>
          ))}
        </div>
      )}

      {val.type === "commercial_select_type_3" && (
        <div className="col-lg-8 col-12">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
          <br />
          {commercial_select_type.map((value, index) => (
            <button
              key={index}
              className="btn bg-info text-light"
              value={value.name}
              onClick={() => selectCommercialValue(value.name)}
              disabled={disableFunction(val.key)}
            >
              {value.name}
            </button>
          ))}
        </div>
      )}

      {val.type === "commercial_cafeteria_type" && (
        <div className="col-lg-8 col-12">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
          <br />
          {commercial_cafeteria_type.map((value, index) => (
            <button
              key={index}
              className="btn bg-info text-light"
              value={value.name}
              onClick={() => selectCommercialCafeteriaValue(value.name)}
              disabled={disableFunction(val.key)}
            >
              {value.name}
            </button>
          ))}
        </div>
      )}

      {val.type === "commercial_image_type" && (
        <div className="col-lg-8 col-12">
          <div
            className="chat-box"
            style={{ fontSize: "20px", color: "black" }}
          >
            {val.label}
          </div>
          {/* Buttons for selecting property */}
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            <li className="nav-item">
              <a className={`nav-link ${activeTab === "" ? "active" : ""}`}></a>
            </li>
            {Commerical_image_tab.map((tab, index) => (
              <li className="nav-item" key={index}>
                <a onClick={() => handleTabClick(tab.key)}>
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

          <div>
            <input
              className="btn"
              id="fileInput"
              type="file"
              name="file"
              accept="image/*"
              onChange={handleFileChange}
              placeholder="Upload your image"
              multiple
            />

            {imagePreview && (
              <React.Fragment>
                <div>
                  {imagePreview[activeTab].map((imageUrl, index) => (
                    <div key={index} className="col-2">
                      <div className="selected-image-container position-relative py-2">
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
                  <input
                    type="text"
                    placeholder="Enter image description"
                    value={captionData}
                    onChange={handleCaption}
                  />
                  <button
                    htmlFor="fileInput"
                    className="btn d-flex"
                    onClick={SubmitImageFile}
                  >
                    Upload
                  </button>
                </div>
                <button onClick={handleReview}>Review Your Data</button>
                <button className="btn" onClick={clearFileInput}>
                  Reset
                </button>
              </React.Fragment>
            )}
            
            {showReview && (
              <ReviewSection
                answerData={answerData}
                SubmitAllData={SubmitAllData}
                activeTab={activeTab}
                handleTabClick={handleTabClick}
                imagefile={imagefile}
                type={type}
              />
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CommercialType;

