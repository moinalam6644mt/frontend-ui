import React, { useState, useEffect, useContext } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import toast from "react-hot-toast";
import validationSchema from "../../Authentication/Validation/chatValidation";
import Commercialvalidation from "../../Authentication/Validation/commercial";
import AgriculturalValidation from "../../Authentication/Validation/Agricultural";
import ReviewSection from "./ReviewData";
import AuthContext from "../../Context/AuthContext";
import InputGroup from "./ChildComponentForChat/InputGroup";
import BalconyInput from "./ChildComponentForChat/BalconyInput";
import BathroomInput from "./ChildComponentForChat/BathroomInput";
import KitchenInput from "./ChildComponentForChat/KitchenInput";
import Availability from "./ChildComponentForChat/Availability";

import {
  initquestion,
  flat,
  Commercial_office_space,
  furnishing_status,
  flat_processing_status,
  tabData,
  commercial_select_type,
  commercial_cafeteria_type,
  Commerical_image_tab,
  agricultural_land,
  agricultural_image_tab,
  facingAreaData,
} from "../PropertyData";

const Chatbot = () => {
  var { setPropertyId } = useContext(AuthContext);
  let [type, setType] = useState("");
  const { callApi } = AuthUser();
  const [inputData, setInputData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [file, setFile] = useState({
    files: [],
  });
  const [answerData, setAnswerData] = useState([]);
  const [question, setQuestion] = useState(initquestion);
  const [activeTab, setActiveTab] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [property, setProperty] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [imageResponse] = useState("");
  const [tabFiles, setTabFiles] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [captionData, setCaptionData] = useState("");
  const [showReview, setShowReview] = useState(false);
  const [imageData, setImageData] = useState([]);
  const [buttonSelection, setButtonSelection] = useState("");
  var [jsonData, setJsonData] = useState({ gallery: [] });
  const [inputValues, setInputValues] = useState([]);
  const [balconySizeValue, setBalconySizeValue] = useState([]);
  const [bathroomSizeValue, setBathroomSizeValue] = useState([]);
  const [kitchenSizeValue, setKitchenSizeValue] = useState([]);
  const [inputfieldvalue, setinputfeildvalue] = useState({});
  const [availableDate,setAvailableDateValue]=useState('')

  useEffect(() => {
    setUserData([question[currentIndex]]);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    type = value;
    handleSubmit();
  };

  const ChangeInputValue = (e) => {
    const { value } = e.target;
    type = value;
    setInputData(value);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;  
    const fileArray = Array.from(files);
    setTabFiles((prevTabFiles) => ({
      ...prevTabFiles,
      [activeTab]: fileArray,
    }));
    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview((prevImagePreviews) => ({
          ...prevImagePreviews,
          [activeTab]: [
            ...(prevImagePreviews[activeTab] || []),
            e.target.result,
          ],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const clearFileInput = () => {
    document.getElementById("fileInput").value = "";
    setFile(null);
    setTabFiles((prevTabFiles) => ({
      ...prevTabFiles,
      [activeTab]: null,
    }));
  };
  const handleCaption = (e) => {
    setCaptionData(e.target.value);
  };
  const handleReview = () => {
    setShowReview(true);
  };
  const handlePropertyType = async () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    try {
      const response = await callApi({
        api: "/catogery_name",
        method: "GET",
      });
      if (response && response.success === true) {
        setProperty([...response.data]);
        setAnswerData([
          ...answerData,
          {
            key: question[0].key,
            value: type,
          },
        ]);
        setJsonData({
          ...jsonData,
          [question[0].resdata]: type,
        });
      } else {
        console.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching property types:", error);
    }
  };
  const handlePropertyButtonClick = async (id, name) => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    try {
      let response;

      response = await callApi({
        api: `/catogery_name/${id}`,
        method: "GET",
      });

      if (response && response.success === true) {
        setUserData([
          ...userData,

          {
            label: type,
            type: "Answer",
          },
        ]);
        setTimeout(() => {
          setUserData([
            ...userData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);
        type = name;
        disableFunction();
        setPropertyData([property, ...response.data]);

        setAnswerData([
          ...answerData,
          {
            key: question[1].key,
            value: type,
          },
        ]);
        setJsonData({
          ...jsonData,
          [question[1].resdata]: type,
        });
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error fetching property types:", error);
    }
  };
  const submitFlatValue = async (name) => {
    const questionMap = {
      Flats: flat,
      "Commercial Office Space": Commercial_office_space,
      "Agricultural Land": agricultural_land,
      "Residential House": flat,
      Villa: flat,
      "Builder Floor Apartment": flat,
      Penthouse: flat,
      Warehouse: Commercial_office_space,
      "Office in It Park/ SEZ": Commercial_office_space,
      "Commercial Shop": Commercial_office_space,
      "Commercial Showroom": Commercial_office_space,
      "Form House": agricultural_land,
    };

    const newQuestions = questionMap[name] || [];
    const updatedQuestions = question.concat(newQuestions);

    setQuestion(updatedQuestions);

    setTimeout(() => {
      setUserData((prevUserData) => [
        ...prevUserData,
        { label: name, type: "Answer" },
        newQuestions[0],
      ]);
    }, 1000);

    disableFunction();

    setAnswerData((userData) => [
      ...userData,
      { key: question[2].key, value: name },
    ]);

    setJsonData({
      ...jsonData,
      [question[2].resdata]: name,
    });

    setType(name);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
  const validateInputAndProceed = () => {
    const nextIndex1 = currentIndex1 + 1;
    const nextIndex2 = currentIndex2 + 1;
    const nextIndex3 = currentIndex3 + 1;

    let resp = {
      status: "",
      message: "",
    };

    if (inputData || buttonSelection) {
      const validationObject = {};
      if (type === "Flats") {
        validationObject[flat[currentIndex1]?.key] = inputData;
      } else if (type === "Commercial Office Space") {
        validationObject[Commercial_office_space[currentIndex2]?.key] =
          inputData || buttonSelection;
      } else if (type === "Agricultural Land") {
        validationObject[agricultural_land[currentIndex3]?.key] = inputData;
      }

      try {
        if (type === "Flats") {
          validationSchema[currentIndex1]?.validateSync(validationObject);
          resp.status = 1;
          setCurrentIndex1(nextIndex1);
        } else if (type === "Commercial Office Space") {
          Commercialvalidation[currentIndex2]?.validateSync(validationObject);
          resp.status = 1;
          setCurrentIndex2(nextIndex2);
        } else if (type === "Agricultural Land") {
          AgriculturalValidation[currentIndex3]?.validateSync(validationObject);
          resp.status = 1;
          setCurrentIndex3(nextIndex3);
        }
      } catch (validationError) {
        resp.status = 0;
        resp.message = validationError.message;
      }
    }

    return resp;
  };
  const submitInputTypeValue = () => {
    const returnData = validateInputAndProceed();
    if (returnData.status !== 1) {
      setUserData((prevUserData) => [
        ...prevUserData,
        { label: inputData, type: "error" },
      ]);

      setTimeout(() => {
        setUserData((prevUserData) => [
          ...prevUserData,
          { label: returnData.message, type: "error" },
        ]);
      }, 1000);

      return false;
    }

    const isQ6 = question[currentIndex].key === "Q6";
    const isQ7 = question[currentIndex].key === "Q7";
    const isQ10 = question[currentIndex].key === "Q10";
    const isQ11 = question[currentIndex].key === "Q11";
    const nextIndex =
      currentIndex < question.length - 1 ? currentIndex + 1 : currentIndex;

    if (currentIndex < question.length - 1) {
      if (isQ6) {
        setInputValues([...inputValues, inputData]);
      }
      if (isQ7) {
        setBalconySizeValue([...balconySizeValue, inputData]);
      }
      if (isQ10) {
        setBathroomSizeValue([...bathroomSizeValue, inputData]);
      }
      if (isQ11) {
        setKitchenSizeValue([...kitchenSizeValue, inputData]);
      }

      setAnswerData((prevAnswerData) => [
        ...prevAnswerData,
        { key: question[currentIndex].key, value: inputData },
      ]);

      setJsonData((prevJsonData) => {
        const currentKey = question[currentIndex].resdata;
        const newJsonData = {
          ...prevJsonData,
          [currentKey]: inputData,
        };
        return newJsonData;
      });

      setUserData((prevUserData) => {
        const newData = [...prevUserData, { label: inputData, type: "Answer" }];

        if (!isQ6 && !isQ7 && !isQ10 && !isQ11) {
          newData.push(question[nextIndex]);
        }
       
        return newData;
      });
      if(!isQ6 && !isQ7 && !isQ10 && !isQ11){
        setCurrentIndex(nextIndex);
      }
      setInputData("");
    } else if (currentIndex === question.length - 1) {
      alert("All questions are completed.");
      return false;
    }
    return true;
  };

  const NextQuestion = () => {
    const nextIndex = currentIndex + 1;

    setUserData((prevUserData) => {
      const newData = [...prevUserData, { label: inputData, type: "Answer" }];
      if (currentIndex < question.length) {
        newData.push(question[nextIndex]);
      }
      return newData;
    });

    setCurrentIndex(nextIndex);
    setInputData("");
  };

  const BackValue = () => {
    if (currentIndex > 3) {
      const previousIndex = currentIndex - 1;
      const previousAnswer = answerData[previousIndex];
      const newUserData = [
        ...userData,
        {
          label: previousAnswer.value,
          type: "Answer",
        },
        question[previousIndex],
      ];

      setUserData(newUserData);
      setAnswerData((prevAnswerData) => {
        const updatedAnswerData = [...prevAnswerData];
        updatedAnswerData.pop();
        return updatedAnswerData;
      });

      setCurrentIndex1(currentIndex1 - 1);
      setCurrentIndex2(currentIndex2 - 1);
      setCurrentIndex3(currentIndex3 - 1);
      setCurrentIndex(previousIndex);

      const shouldDisable = disableButton(previousIndex);
      disableButtonState(shouldDisable);

      // Disable back button if we are at the first index
      if (previousIndex === 0) {
        disableButtonState(true);
      } else {
        disableButtonState(false);
      }
    } else {
      setUserData((prevUserData) => [
        ...prevUserData,
        {
          label: inputData,
          type: "error",
        },
      ]);
      setTimeout(() => {
        setUserData((prevUserData) => [
          ...prevUserData,
          {
            label: (
              <>
                Cannot go back here! 😊
                <button
                  className="btn btn-danger"
                  style={{ borderRadius: "15px 15px" }}
                  onClick={resetHandler}
                >
                  Restart
                </button>
              </>
            ),
            type: "error",
          },
        ]);
      }, 1000);
    }
  };

  const resetHandler = () => {
    window.location.reload();
  };
  const submitFurnishingValue = (name) => {
    const nextIndex = currentIndex + 1;
    try {
      if (
        name === "Furnished" ||
        name === "UnFurnished" ||
        name === "Semi-Furnished"
      ) {
        type = name;

        setTimeout(() => {
          setUserData((prevUserData) => [
            ...prevUserData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);
      }
      setAnswerData((prevAnswerData) => [
        ...prevAnswerData,
        {
          key: question[currentIndex].key,
          value: type,
        },
      ]);

      setJsonData({
        ...jsonData,
        [question[currentIndex].resdata]: type,
      });
      setCurrentIndex(nextIndex);
    } catch (error) {
      console.error("Error processing value:", error);
    }
  };
  
  const submitProcessingValue = (name) => {
    const nextIndex = currentIndex + 1;
    try {
      type = name;
      if (name === "Under_Construction" || name === "completed") {
        setTimeout(() => {
          setUserData((prevUserData) => [
            ...prevUserData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);
      }
      setAnswerData((prevAnswerData) => [
        ...prevAnswerData,
        {
          key: question[currentIndex].key,
          value: type,
        },
      ]);

      setJsonData({
        ...jsonData,
        [question[currentIndex].resdata]: type,
      });
      setCurrentIndex(nextIndex);
    } catch (error) {
      console.error("Error processing value:", error);
    }
  };
  const selectCommercialValue = (name) => {
    const validValues = ["YES", "NO"];

    if (!validValues.includes(name)) {
      console.error("Invalid value:", name);
      return;
    }
    setButtonSelection(name);
    const responseData = validateInputAndProceed();
    if (responseData.status === 1) {
      const nextIndex = currentIndex + 1;
      try {
        const type = name;

        setTimeout(() => {
          setUserData((prevUserData) => [
            ...prevUserData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);

        setAnswerData((prevAnswerData) => [
          ...prevAnswerData,
          {
            key: question[currentIndex].key,
            value: type,
          },
        ]);

        setJsonData({
          ...jsonData,
          [question[currentIndex].resdata]: type,
        });
        setCurrentIndex(nextIndex);
        setInputData("");
      } catch (error) {
        console.error("Error processing value:", error);
      }
    } else {
      console.error(responseData.message);
    }
  };
  const selectCommercialCafeteriaValue = (name) => {
    setButtonSelection(name);
    const responseData = validateInputAndProceed();

    if (responseData.status === 1) {
      const nextIndex = currentIndex + 1;
      try {
        const type = name;

        setTimeout(() => {
          setUserData((prevUserData) => [
            ...prevUserData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);

        setAnswerData((prevAnswerData) => [
          ...prevAnswerData,
          {
            key: question[currentIndex].key,
            value: type,
          },
        ]);
        setJsonData({
          ...jsonData,
          [question[currentIndex].resdata]: type,
        });
        setCurrentIndex(nextIndex);
        setInputData("");
      } catch (error) {
        console.error("Error processing value:", error);
      }
    } else {
      console.error(responseData.message);
    }
  };
  const uploadFile = async (fileArray) => {
    try {
      for (const file of fileArray) {
        const response = await callApi({
          api: "/upload",
          method: "UPLOAD",
          data: {
            images: file,
            key: activeTab,
            caption: captionData,
          },
        });

        if (response && response.files) {
        const imageUrl = response.files[0];

          setImageData((prevImageData) => {
            const tabExists = prevImageData.some(
              (item) => item.key === activeTab
            );

            if (tabExists) {
              return prevImageData.map((item) =>
                item.key === activeTab
                  ? { ...item, images: [...item.images, imageUrl] }
                  : item
              );
            } else {
              return [
                ...prevImageData,
                {
                  key: activeTab,
                  caption: captionData,
                  images: [imageUrl],
                },
              ];
            }
          });

          setJsonData((prevData) => {
            const tabExists = prevData.gallery.some(
              (item) => item.key === activeTab
            );
            if (tabExists) {
              return {
                ...prevData,
                gallery: prevData.gallery.map((item) =>
                  item.key === activeTab
                    ? {
                        ...item,
                        images: [
                          ...item.images,
                          {
                            filename: imageUrl.filename,
                          },
                        ],
                      }
                    : item
                ),
              };
            } else {
              return {
                ...prevData,
                gallery: [
                  ...prevData.gallery,
                  {
                    key: activeTab,
                    value: "",
                    images: [{ filename: imageUrl.filename }],
                  },
                ],
              };
            }
          });
        }
      }
      setCaptionData("");
    } catch (error) {
      toast.error("Error occurred while updating/adding data");
    }
  };
  const SubmitImageFile = () => {
    const files = tabFiles[activeTab];
    console.log(imageResponse.filename);
    if (files && files.length > 0) {
      setAnswerData((prevAnswerData) => [
        ...prevAnswerData,
        {
          key: activeTab,
          value: "",
          images: files.map((file) => ({
            url: URL.createObjectURL(file),
            filename: imageResponse.filename,
          })),
        },
      ]);
      uploadFile(files);
    } else {
      console.error("No files selected for", activeTab);
    }
  };
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setImagePreview("");
  };
  const handleSubmit = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (nextIndex === 1) {
      setUserData([
        ...userData,
        {
          label: type,
          type: "Answer",
        },
      ]);
      setTimeout(() => {
        setUserData([
          ...userData,
          {
            label: type,
            type: "Answer",
          },
          question[nextIndex],
        ]);
      }, 1000);
    } else {
      setUserData((prevUserData) => [
        ...prevUserData,
        {
          label: type,
          type: "Answer",
        },
      ]);
      setTimeout(() => {
        setUserData((prevUserData) => [...prevUserData, question[nextIndex]]);
      }, 1000);
    }

    if (nextIndex === 1) {
      handlePropertyType();
    }
    if (nextIndex === 2) {
      handlePropertyButtonClick();
    }
    if (nextIndex === 3) {
      submitFlatValue();
    }
    if (nextIndex === 4) {
      submitInputTypeValue(inputData);
    }
  };
  const SubmitAllData = async () => {
    const val = JSON.stringify(jsonData);
    const size_data=JSON.stringify(inputfieldvalue)
    try {
      const response = await callApi({
        api: "/chatbot",
        method: "POST",
        data: {
          key_data: {val,size_data},
        },
      });
      if (response) {
        setPropertyId(response.property_id);
        console.log(response.property_id);
        setJsonData({ gallery: [] });
        window.location.reload();
      } else {
        console.error(response.message || "Unknown error occurred");
      }
    } catch (error) {
      console.error("Error while making API call:", error);
    }
  };

  const disableFunction = (key) => {
    const item = answerData.find((item) => item.key === key);
    return item ? true : false;
  };
  const disableButton = () => {
    const arrayaData = ["A1", "A2", "A3"];
    const item = arrayaData.includes(question[currentIndex]?.key);
    return item;
  };
  const disableButtonState = (shouldDisable) => {
    setButtonDisabled(shouldDisable);
  };
  const FacingAreaValue = (name) => {
    const nextIndex = currentIndex + 1;
    try {
      if (
        name === "North" ||"South"||"East"||"West"||"North-East"||"North-West"||"South-East"||"South-West"
        
      ) {
        type = name;

        setTimeout(() => {
          setUserData((prevUserData) => [
            ...prevUserData,
            {
              label: type,
              type: "Answer",
            },
            question[nextIndex],
          ]);
        }, 1000);
      }
      setAnswerData((prevAnswerData) => [
        ...prevAnswerData,
        {
          key: question[currentIndex].key,
          value: type,
        },
      ]);

      setJsonData({
        ...jsonData,
        [question[currentIndex].resdata]: type,
      });
      setCurrentIndex(nextIndex);
    } catch (error) {
      console.error("Error processing value:", error);
    }
  };

  return (
    <div className="row" style={{ width: "210%" }}>
      <div className="col-sm-12 col-lg-6 ">
        <div className="card-hover-shadow-2x mb-3 card ">
          <div className="card-header-tab card-header">
            <div className="card-header-title font-size-lg text-capitalize font-weight-normal ">
              <i className="header-icon lnr-printer icon-gradient bg-ripe-malin"></i>
              Chat Box
            </div>
          </div>

          <div
            className="scroll-area-lg"
            style={{ height: "800px", overflow: "scroll" }}
          >
            <div className="scrollbar-container-y">
              <div className="p-2">
                <h3>LET'S GET YOU COVERED! </h3>
                <h4>Personal Details </h4>

                <div className="chat-wrapper p-1">
                  {userData.map((val, index) => (
                    <div key={index} className="chat-box-wrapper">
                      {val.type === "property" && (
                        <div key={index} className="chat-box-wrapper">
                          <div className="col-lg-8 col-12">
                            <span>{val.label}</span>
                            <div
                              className="btn-group btn-group-site d-flex mb-3"
                              role="group"
                            >
                              {[
                                {
                                  id: "btnradio1",
                                  name: "Rent",
                                  value: "rent",
                                  imgSrc: "./images/icons/rent-3.png",
                                },
                                {
                                  id: "btnradio2",
                                  name: "Sell",
                                  value: "sell",
                                  imgSrc: "./images/icons/sale-2.png",
                                },
                                {
                                  id: "btnradio3",
                                  name: "Pg/Hostel",
                                  value: "pg-hostel",
                                  imgSrc: "./images/icons/hostel.png",
                                },
                              ].map((option, index) => (
                                <React.Fragment key={index}>
                                  <input
                                    type="radio"
                                    className="btn-check property_for"
                                    name="Property_type"
                                    id={option.id}
                                    value={option.value}
                                    onChange={handleChange}
                                    disabled={disableFunction(val.key)}
                                  />

                                  <label
                                    className="btn btn-outline-danger"
                                    htmlFor={option.id}
                                  >
                                    <img
                                      src={option.imgSrc}
                                      alt=""
                                      height="48"
                                      width="48"
                                    />
                                    {option.name}
                                  </label>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {val.type === "question" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box "
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                          </div>
                          {/* Buttons for selecting property */}
                          {property.map((value, index) => (
                            <button
                              key={index}
                              className="btn bg-info text-light"
                              value={value.id}
                              onClick={() =>
                                handlePropertyButtonClick(value.id, value.name)
                              }
                              disabled={disableFunction(val.key)}
                            >
                              {value.name}
                              {value.key}
                            </button>
                          ))}
                        </div>
                      )}

                      {val.type === "residential" && (
                        <div key={index} className="chat-box-wrapper">
                          <div className="col-lg-8 col-12">
                            <div className="chat-box">{val.label}</div>
                            {/* Buttons for selecting residential property */}
                            {propertyData.map((value, index) => (
                              <button
                                key={index}
                                className="btn bg-info text-light disable"
                                value={value.id}
                                onClick={() => submitFlatValue(value.name)}
                                disabled={disableFunction(val.key)}
                              >
                                {value.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {(val.type === "flat_type" ||
                        val.type === "office_type" ||
                        val.type === "agriculture_type") && (
                        <>
                          <div key={index}>
                            <div className="col-lg-8 col-12">
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                {val.label}
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      {val.type === "bedroom_size" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                            {inputValues && question[currentIndex].key === "Q6" && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <InputGroup
                                  NextQuestion={NextQuestion}
                                  setinputfeildvalue={setinputfeildvalue}
                                  userinputValues={inputValues}
                                  inputfieldvalue={inputfieldvalue}
                                />
                               
                              </div>
                            )}
                            {inputfieldvalue.bedroom_size && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  value={JSON.stringify(
                                    inputfieldvalue.bedroom_size
                                  )} 
                                  readOnly 
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {val.type === "balcony_size" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                            {balconySizeValue && question[currentIndex].key === "Q7" && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <BalconyInput
                                  NextQuestion={NextQuestion}
                                  setinputfeildvalue={setinputfeildvalue}
                                  userinputValues={balconySizeValue}
                                  inputfieldvalue={inputfieldvalue}
                                />
                              </div>
                            )}
                            {inputfieldvalue.balcony_size && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  value={JSON.stringify(
                                    inputfieldvalue.balcony_size
                                  )} 
                                  readOnly 
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {val.type === "bathroom_size" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                            {bathroomSizeValue && question[currentIndex].key === "Q10" && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <BathroomInput
                                  NextQuestion={NextQuestion}
                                  setinputfeildvalue={setinputfeildvalue}
                                  userinputValues={bathroomSizeValue}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {val.type === "kitchen_size" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                            {kitchenSizeValue && question[currentIndex].key === "Q11" && (
                              <div
                                className="chat-box"
                                style={{ fontSize: "20px", color: "black" }}
                              >
                                <KitchenInput
                                  NextQuestion={NextQuestion}
                                  setinputfeildvalue={setinputfeildvalue}
                                  userinputValues={kitchenSizeValue}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {val.type === "facing_area" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                          </div>

                          {/* Buttons for selecting property */}
                          {facingAreaData.map((value, index) => (
                            <button
                              key={index}
                              className="btn bg-info text-light mr-3"
                              value={value.name}
                              onClick={() => FacingAreaValue(value.name)}
                              disabled={disableFunction(val.key)}
                            >
                              {value.name}
                            </button>
                          ))}
                        </div>
                      )}
                      {val.type === "flat_furnishing_type" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                          </div>

                          {/* Buttons for selecting property */}
                          {furnishing_status.map((value, index) => (
                            <button
                              key={index}
                              className="btn bg-info text-light"
                              value={value.name}
                              onClick={() => submitFurnishingValue(value.name)}
                              disabled={disableFunction(val.key)}
                            >
                              {value.name}
                            </button>
                          ))}
                        </div>
                      )}
                      {val.type === "flat_processing_type" && (
                        <div className="col-lg-8 col-12">
                          <div
                            className="chat-box"
                            style={{ fontSize: "20px", color: "black" }}
                          >
                            {val.label}
                          </div>
                          {/* Buttons for selecting property */}
                          {flat_processing_status.map((value, index) => (
                            <button
                              key={index}
                              className="btn bg-info text-light ml-4"
                              value={value.name}
                              onClick={() => submitProcessingValue(value.name)}
                              disabled={disableFunction(val.key)}
                            >
                              {value.name}
                              
                            </button>
                          ))}
                          {availableDate === "Under_Construction" && (
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
                          )}
                        </div>
                      )}
                      {(val.type === "flat_image_type" ||
                        val.type === "agriculture_image_type" ||
                        val.type === "commercial_image_type") && (
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
                              <a
                                className={`nav-link ${
                                  activeTab === "" ? "active" : ""
                                }`}
                              ></a>
                            </li>
                            {val.type === "flat_image_type" &&
                              tabData.map((tab, index) => (
                                <li className="nav-item" key={index}>
                                  <a onClick={() => handleTabClick(tab.key)}>
                                    <span
                                      className="btn btn-info text-light mb-1 ml-0"
                                      style={{
                                        marginRight: "10px",
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
                            {val.type === "commercial_image_type" &&
                              Commerical_image_tab.map((tab, index) => (
                                <li className="nav-item" key={index}>
                                  <a onClick={() => handleTabClick(tab.key)}>
                                    <span
                                      className="btn btn-info text-light mb-1 ml-0"
                                      style={{
                                        marginRight: "10px",
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
                            {val.type === "agriculture_image_type" &&
                              agricultural_image_tab.map((tab, index) => (
                                <li className="nav-item" key={index}>
                                  <a onClick={() => handleTabClick(tab.key)}>
                                    <span
                                      className="btn btn-info text-light mb-1 ml-0"
                                      style={{
                                        marginRight: "10px",
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
                                  {imagePreview[activeTab].map(
                                    (imageUrl, index) => (
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
                                    )
                                  )}
                                  <input
                                    type="text"
                                    placeholder="enter image description"
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
                                <button onClick={handleReview}>
                                  Review Your Data
                                </button>
                                <button
                                  className="btn"
                                  onClick={clearFileInput}
                                >
                                  Reset
                                </button>
                              </React.Fragment>
                            )}

                            {file && <div></div>}
                            {showReview && (
                              <ReviewSection
                                answerData={answerData}
                                SubmitAllData={SubmitAllData}
                                activeTab={activeTab}
                                handleTabClick={handleTabClick}
                                imagefile={imageData}
                                type={type}
                              />
                            )}
                          </div>
                        </div>
                      )}
                      {val.type === "error" && (
                        <div className="d-flex justify-content-end flex-grow-1">
                          <span className="chat-box">{val.label}</span>
                        </div>
                      )}
                      {val.type === "Answer" && (
                        <div>
                          <div className="d-flex justify-content-end flex-grow-1">
                            <span className="chat-box">{val.label}</span>
                          </div>
                        </div>
                      )}
                      {(val.type === "commercial_select_type_1" ||
                        val.type === "commercial_select_type_2" ||
                        val.type === "commercial_select_type_3") && (
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
                              onClick={() =>
                                selectCommercialCafeteriaValue(value.name)
                              }
                              disabled={disableFunction(val.key)}
                            >
                              {value.name}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex">
            <button
              className="btn bg-info text-light "
              onClick={BackValue}
              disabled={buttonDisabled}
            >
              Back
            </button>
            <input
              placeholder="Write here and hit enter to send..."
              type="text"
              className="form-control-sm form-control"
              style={{ width: "1000px", marginLeft: "-5px", padding: "5px" }}
              value={inputData}
              onChange={ChangeInputValue}
            />
            <button
              className="btn bg-info text-light"
              onClick={submitInputTypeValue}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  submitInputTypeValue();
                }
              }}
              disabled={disableButton()}
            >
              Next
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
