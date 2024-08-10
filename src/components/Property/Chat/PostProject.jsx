import React, { useState, useEffect } from "react";
import {
  project,
  bhk_type,
  Landmark_tab,
  Document_tpye,
  Project_image,
  project_status,
} from "../ProjectData";
import AuthUser from "../../Authentication/Validation/AuthUser";
import ProjectValidation from "../../Authentication/Validation/ProjectValidation";
import ProjectPreview from "./ProjectPreview";
import { toast } from "react-hot-toast";
import UploadDocument from "../../DashBoard/ProjectList/UploadDocument";
import PriceRange from "../../DashBoard/ProjectList/PriceRange";
import UplaodProjectImage from "../../DashBoard/ProjectList/UploadProjectImage";
import UploadFloorPlan from "../../DashBoard/ProjectList/UploadFloor";
import UploadMasterImage from "../../DashBoard/ProjectList/UploadMasterImage";

const PostProject = () => {
  const { callApi } = AuthUser();
  const [userData, setUserData] = useState([]);
  const [inputData, setInputData] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question] = useState(project);
  const [activeTab, setActiveTab] = useState("");
  const [currentTab, setCurrentTab] = useState("");
  const [imageData, setImageData] = useState([]);
  const [FloorData, setFloorData] = useState([]);
  const [DocumentData, setDocumentData] = useState([]);
  const [masterData,setMasterData]=useState([])
  var [jsonData, setJsonData] = useState({
    document: [],
    gallery: [],
    floor_plan: [],
    status: 1,
  });
  const [errorMessages] = useState({});
  const [bhkErrors] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [tabInputs, setTabInputs] = useState([
    { text: "", distance: "" },
    { text: "", distance: "" },
    { text: "", distance: "" },
    { text: "", distance: "" },
  ]);
  const [BHKInputs, setBHKInputs] = useState([
    { min: "", max: "", total_unit: "", min_price: " ", max_price: " " },
  ]);

  useEffect(() => {
    setUserData([{ ...question[currentIndex], type: "question" }]);
  }, [question]);

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const validateInputAndProceed = () => {
    const nextIndex1 = currentIndex + 1;
    let response = {
      status: "",
      message: "",
    };

    if (inputData) {
      const validationObject = {
        [question[currentIndex]?.key]: inputData,
      };

      try {
        ProjectValidation[currentIndex]?.validateSync(validationObject);
        response.status = 1;
        setCurrentIndex(nextIndex1);
      } catch (validationError) {
        response.status = 0;
        response.message = validationError.message;
      }
    } else {
      response.status = 0;
      response.message = "Input data cannot be empty.";
    }
    return response;
  };

  const submitInputTypeValue = () => {
    const returnData = validateInputAndProceed();

    if (returnData.status !== 1) {
      setUserData((prevUserData) => [
        ...prevUserData,
        { label: returnData.message, type: "error" },
      ]);
      return false;
    }

    setUserData((prevUserData) => [
      ...prevUserData,
      { label: inputData, type: "answer" },
    ]);

    setJsonData((prevJsonData) => {
      const currentKey = question[currentIndex].resdata;
      return {
        ...prevJsonData,
        [currentKey]: inputData,
      };
    });

    if (currentIndex < question.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setUserData((prevUserData) => [
        ...prevUserData,
        { ...question[nextIndex], type: "question" },
      ]);
    } else {
      alert("All questions are completed.");
      return false;
    }

    setInputData("");
    return true;
  };

  const BackValue = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setUserData((prevUserData) => prevUserData.slice(0, -2));
      setJsonData((prevJsonData) => {
        const newJsonData = { ...prevJsonData };
        delete newJsonData[question[currentIndex - 1].resdata];
        return newJsonData;
      });
    }
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleBHKTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const DocumentTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  const SaveBHKValue = () => {
    const validationResult = validateBHKInputs();

    if (validationResult.status === 0) {
      alert(validationResult.message);
      return;
    }

    setJsonData((prevJsonData) => {
      const updatedBhkType = [
        ...(prevJsonData.bhk_type || []),
        { name: currentTab, value: BHKInputs[0] },
      ];
      return {
        ...prevJsonData,
        bhk_type: updatedBhkType,
      };
    });

    // Clear the inputs after saving
    setBHKInputs([{ min: "", max: "", total_unit: "", price: "" , min_price: " ", max_price: " "}]);
  };

  const SaveLandmarkValue = () => {
    const validationResult = validateTabInputs();

    if (validationResult.status === 0) {
      alert(validationResult.message);
      return;
    }

    setJsonData((prevJsonData) => {
      const updatedTabInputs = [
        ...(prevJsonData.landmark || []),
        {
          name: activeTab,
          value: tabInputs,
        },
      ];
      return {
        ...prevJsonData,
        landmark: updatedTabInputs,
      };
    });
    setTabInputs(() => new Array(4).fill({ text: "", distance: "" }));
  };

  const handleTabInputChange = (index, field, value) => {
    setTabInputs((prevTabInputs) => {
      const newTabInputs = [...prevTabInputs];
      newTabInputs[index] = { ...newTabInputs[index], [field]: value };
      return newTabInputs;
    });
  };

  const BHKInputChange = (index, field, value) => {
    setBHKInputs((prevBHKInputs) => {
      const newBHKInputs = [...prevBHKInputs];
      newBHKInputs[index] = { ...newBHKInputs[index], [field]: value };
      return newBHKInputs;
    });
  };

  const nextQuestion = () => {
    if (currentIndex < question.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setUserData((prevUserData) => [
        ...prevUserData,
        { ...question[nextIndex], type: "question" },
      ]);
      setCurrentTab("");
    } else {
      alert("No more questions available.");
    }
  };

  const SubmitAllData = async () => {
    const val = JSON.stringify(jsonData);
    try {
      const response = await callApi({
        api: "/add_project",
        method: "POST",
        data: { key_data: val },
      });
      if (response) {
        console.log("Data submitted successfully:", response);
        toast.success("Data posted successfully");
        setShowResult(false);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const disableButton = () => {
    const arrayaData = ["Proj12" ,"Proj16", "Proj17", "Proj18", "Proj19", "Proj20","Proj21"];
    const item = arrayaData.includes(question[currentIndex]?.key);
    return item;
  };

  const validateTabInputs = () => {
    for (const tabInput of tabInputs) {
      if (!tabInput.text.trim()) {
        return { status: 0, message: "Text field cannot be empty." };
      }
      if (
        !tabInput.distance.trim() ||
        isNaN(tabInput.distance) ||
        tabInput.distance <= 0
      ) {
        return { status: 0, message: "Distance must be a positive number." };
      }
    }
    return { status: 1, message: "" };
  };

  const validateBHKInputs = () => {
    for (const tabInput of BHKInputs) {
      const min = parseFloat(tabInput.min);
      const max = parseFloat(tabInput.max);
      const totalUnit = parseInt(tabInput.total_unit, 10);

      if (isNaN(min) || min < 0) {
        return {
          status: 0,
          message: "Min value must be a non-negative number.",
        };
      }
      if (isNaN(max) || max <= min) {
        return {
          status: 0,
          message: "Max value must be greater than min value.",
        };
      }
      if (isNaN(totalUnit) || totalUnit < 0) {
        return {
          status: 0,
          message: "Total units must be a non-negative integer.",
        };
      }
    }
    return { status: 1, message: "" };
  };

  const ShowPreviewData = () => {
    setShowReview(true);
  };

  function ImageTabCLick(key) {
    setCurrentTab(key);
  }

  const submitProjectStatus = async (name) => {
    let type = name;
    try {
      if (name === "Under_Construction" || name === "completed") {
        await new Promise((resolve) => setTimeout(resolve));

        setUserData((prevUserData) => [
          ...prevUserData,
          { label: type, type: "answer" },
        ]);

        setJsonData((prevJsonData) => {
          const currentKey = question[currentIndex].resdata;
          return {
            ...prevJsonData,
            [currentKey]: type,
          };
        });
        nextQuestion();
      }
    } catch (error) {
      console.error("Error processing value:", error);
    }
  };

  console.log(jsonData)
  return (
    <div className="row" style={{ width: "210%" }}>
      {showResult === false ? (
        <div className="col-sm-12 col-lg-6">
          <div className="card-hover-shadow-2x mb-3 card">
            <div className="card-header-tab card-header">
              <div className="card-header-title font-size-lg text-capitalize font-weight-normal text-danger">
                <i className="header-icon lnr-printer icon-gradient bg-ripe-malin"></i>
                Post Project by ChatBot
              </div>
            </div>

            <div
              className="scroll-area-lg"
              style={{ height: "800px", overflow: "scroll" }}
            >
              <div className="scrollbar-container-y">
                <div className="p-2">
                  <h3>LET'S GET A NEW IDEA</h3>
                  <h4>Project Details</h4>

                  <div className="chat-wrapper p-1">
                    {userData.map((val, index) => (
                      <div key={index} className="chat-box-wrapper">
                        {val.type === "question" && (
                          <div className="col-lg-8 col-12">
                            <div
                              className="chat-box"
                              style={{ fontSize: "20px", color: "black" }}
                            >
                              {val.label}
                            </div>
                          </div>
                        )}

                        {val.type === "error" && (
                          <div className="d-flex justify-content-end flex-grow-1">
                            <span className="chat-box">{val.label}</span>
                          </div>
                        )}

                        {val.type === "answer" && (
                          <div>
                            <div className="d-flex justify-content-end flex-grow-1">
                              <span className="chat-box">{val.label}</span>
                            </div>
                          </div>
                        )}

                        {val.key === "Proj12" && (
                          <div>
                            <PriceRange
                              nextQuestion={nextQuestion}
                              setJsonData={setJsonData}
                            />
                          </div>
                        )}

                        {val.key === "Proj16" && (
                          <>
                            <div className="col-lg-8 col-12">
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              ></div>

                              <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                                <li className="nav-item">
                                  <a
                                    className={`nav-link ${
                                      currentTab === "" ? "active" : ""
                                    }`}
                                  ></a>
                                </li>
                                {Document_tpye.map((tab, index) => (
                                  <li className="nav-item" key={index}>
                                    <a
                                      onClick={() => DocumentTabClick(tab.type)}
                                    >
                                      <span
                                        className="btn btn-info text-light"
                                        style={{
                                          color:
                                            currentTab === tab.type
                                              ? "green"
                                              : "black",
                                        }}
                                      >
                                        {tab.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              {currentTab && (
                                <div>
                                  <UploadDocument
                                    nextQuestion={nextQuestion}
                                    setJsonData={setJsonData}
                                    question={question}
                                    currentIndex={currentIndex}
                                    currentTab={currentTab}
                                    setDocumentData={setDocumentData}
                                  />
                                </div>
                              )}
                              {BHKInputs.min ?(
                                <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  value={JSON.stringify(
                                    jsonData.bhk_type.min,
                                  )}
                                  readOnly
                                />
                              </div>
                              ):null}
                              
                            </div>
                          </>
                        )}

                        {val.key === "Proj17" && (
                          <div className="col-lg-8 col-12">
                            <div
                              className="chat-box"
                              style={{ fontSize: "20px", color: "black" }}
                            ></div>

                            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                              <li className="nav-item">
                                <a
                                  className={`nav-link ${
                                    currentTab === "" ? "active" : ""
                                  }`}
                                ></a>
                              </li>
                              {bhk_type.map((tab, index) => (
                                <li className="nav-item" key={index}>
                                  <a
                                    onClick={() => handleBHKTabClick(tab.name)}
                                  >
                                    <span
                                      className="btn btn-info text-light"
                                      style={{
                                        color:
                                          currentTab === tab.name
                                            ? "green"
                                            : "black",
                                      }}
                                    >
                                      {tab.name}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {currentTab && (
                              <div>
                                <UploadFloorPlan
                                  nextQuestion={nextQuestion}
                                  setJsonData={setJsonData}
                                  question={question}
                                  currentIndex={currentIndex}
                                  currentTab={currentTab}
                                  setFloorData={setFloorData}
                                />
                              </div>
                            )}
                            {currentTab && (
                              <div>
                                {BHKInputs.map((tabInput, index) => (
                                   <div key={index}>
                                   <input
                                     type="number"
                                     placeholder="Enter your min"
                                     value={tabInput.min}
                                     onChange={(e) => BHKInputChange(index, "min", e.target.value)}
                                   />
                                   {bhkErrors[index]?.min && (
                                     <span className="error-message">{bhkErrors[index].min}</span>
                                   )}
                                   <input
                                     type="number"
                                     placeholder="Max value"
                                     value={tabInput.max}
                                     onChange={(e) => BHKInputChange(index, "max", e.target.value)}
                                   />
                                   {bhkErrors[index]?.max && (
                                     <span className="error-message">{bhkErrors[index].max}</span>
                                   )}
                                   <input
                                     type="number"
                                     placeholder="Total units"
                                     value={tabInput.total_unit}
                                     onChange={(e) =>
                                       BHKInputChange(index, "total_unit", e.target.value)
                                     }
                                   />
                                   {bhkErrors[index]?.total_unit && (
                                     <span className="error-message">{bhkErrors[index].total_unit}</span>
                                   )}
                                   Min_Price:<input
                                     type="text"
                                     placeholder="Min Price Value"
                                     value={tabInput.min_price}
                                     onChange={(e) => BHKInputChange(index, "min_price", e.target.value)}
                                   />
                                   {bhkErrors[index]?.min_price && (
                                     <span className="error-message">{bhkErrors[index].min_price}</span>
                                   )}
                                   Max_Price:<input
                                     type="text"
                                     placeholder="Max Price Value"
                                     value={tabInput.max_price}
                                     onChange={(e) => BHKInputChange(index, "max_price", e.target.value)}
                                   />
                                   {bhkErrors[index]?.max_price && (
                                     <span className="error-message">{bhkErrors[index].max_price}</span>
                                   )}
                                 </div>
                                ))}
                                <button className="mr-2" onClick={SaveBHKValue}>
                                  Save Data
                                </button>
                                <button onClick={nextQuestion}>Next</button>
                              </div>
                            )}
                          </div>
                        )}

                        {val.key === "Proj18" && (
                          <div className="col-lg-8 col-12">
                            <div
                              className="chat-box"
                              style={{ fontSize: "20px", color: "black" }}
                            ></div>

                            <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                              <li className="nav-item">
                                <a
                                  className={`nav-link ${
                                    activeTab === "" ? "active" : ""
                                  }`}
                                ></a>
                              </li>
                              {Landmark_tab.map((tab, index) => (
                                <li className="nav-item" key={index}>
                                  <a onClick={() => handleTabClick(tab.key)}>
                                    <span
                                      className="btn btn-info text-light"
                                      style={{
                                        color:
                                          activeTab === tab.key
                                            ? "green"
                                            : "black",
                                      }}
                                    >
                                      {tab.name}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                            {activeTab && (
                              <React.Fragment>
                                {tabInputs.map((tabInput, index) => (
                                  <div key={index}>
                                    <input
                                      type="text"
                                      placeholder="Enter your text"
                                      value={tabInput.text}
                                      onChange={(e) =>
                                        handleTabInputChange(
                                          index,
                                          "text",
                                          e.target.value
                                        )
                                      }
                                    />
                                    {errorMessages[index]?.text && (
                                      <span className="error-message">
                                        {errorMessages[index].text}
                                      </span>
                                    )}
                                    <input
                                      type="number"
                                      placeholder="Distance (KM)"
                                      value={tabInput.distance}
                                      onChange={(e) =>
                                        handleTabInputChange(
                                          index,
                                          "distance",
                                          e.target.value
                                        )
                                      }
                                    />
                                    {errorMessages[index]?.distance && (
                                      <span className="error-message">
                                        {errorMessages[index].distance}
                                      </span>
                                    )}
                                  </div>
                                ))}
                                <button
                                  className="mr-2"
                                  onClick={SaveLandmarkValue}
                                >
                                  Save Data
                                </button>
                                <button onClick={nextQuestion}>Next</button>
                              </React.Fragment>
                            )}
                          </div>
                        )}
                        {val.key === "Proj19" && (
                          <div className="col-lg-8 col-12">
                            <div
                              className="chat-box"
                              style={{ fontSize: "20px", color: "black" }}
                            ></div>
                            {project_status.map((value, index) => (
                              <button
                                key={index}
                                className="btn bg-info text-light ml-4"
                                onClick={() => submitProjectStatus(value.name)}
                              >
                                {value.name}
                              </button>
                            ))}
                            {/* Conditional rendering for availability */}
                            {/* {availableDate === "Under_Construction" && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <Availability
                                  NextQuestion={NextQuestion}
                                  setinputfeildvalue={setinputfeildvalue}
                                  userinputValues={inputValues}
                                  setAvailableDateValue={setAvailableDateValue}
                                />
                              </div>
                            )} */}
                          </div>
                        )}
                        {val.key === "Proj21" && (
                          <>
                            <div className="col-lg-8 col-12">
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              ></div>

                              <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                                <li className="nav-item">
                                  <a
                                    className={`nav-link ${
                                      currentTab === "" ? "active" : ""
                                    }`}
                                  ></a>
                                </li>
                                {Project_image.map((tab, index) => (
                                  <li className="nav-item" key={index}>
                                    <a onClick={() => ImageTabCLick(tab.key)}>
                                      <span
                                        className="btn btn-info text-light"
                                        style={{
                                          color:
                                            currentTab === tab.key
                                              ? "green"
                                              : "black",
                                        }}
                                      >
                                        {tab.name}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              {currentTab && (
                                <div>
                                  <UplaodProjectImage
                                    nextQuestion={nextQuestion}
                                    setJsonData={setJsonData}
                                    question={question}
                                    currentIndex={currentIndex}
                                    currentTab={currentTab}
                                    ShowPreviewData={ShowPreviewData}
                                    setImageData={setImageData}
                                    setDocumentData={setDocumentData}
                                  />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                         {val.key === "Proj20" && (
                          <div>
                            <UploadMasterImage
                              nextQuestion={nextQuestion}
                              setJsonData={setJsonData}
                              question={question}
                              currentIndex={currentIndex}
                              setMasterData={setMasterData}
                            />
                          </div>
                        )}

                      </div>
                    ))}
                  </div>

                  {/* Review Section */}
                  {showReview && (
                    <ProjectPreview
                      Submit={SubmitAllData}
                      Data={jsonData}
                      currentTab={currentTab}
                      activeTab={activeTab}
                      handleBHKTabClick={handleBHKTabClick}
                      landmarkTab={handleTabClick}
                      imageData={imageData}
                      FloorData={FloorData}
                      DocumentData={DocumentData}
                      masterData={masterData}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="card-footer d-flex">
              <button
                className="btn bg-info text-light"
                onClick={BackValue}
                disabled={currentIndex === 0}
              >
                Back
              </button>
              <input
                placeholder="Write here and hit enter to send..."
                type="text"
                className="form-control-sm form-control"
                style={{ width: "1000px", marginLeft: "-5px", padding: "5px" }}
                value={inputData}
                onChange={handleChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    submitInputTypeValue();
                  }
                }}
              />
              <button
                className="btn bg-info text-light"
                onClick={submitInputTypeValue}
                disabled={disableButton()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="col-sm-12 col-lg-6">Success</div>
        </>
      )}
    </div>
  );
};

export default PostProject;
