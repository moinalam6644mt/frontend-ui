// import React from 'react'
// import {callApi} from '../Chat/Chatbot'

// const ChatFunction = () => {
//   return (
//     <div className="row" style={{ width: "210%" }}>
//       <div className="col-sm-12 col-lg-6 ">
//         <div className="card-hover-shadow-2x mb-3 card ">
//           <div className="card-header-tab card-header">
//             <div className="card-header-title font-size-lg text-capitalize font-weight-normal ">
//               <i className="header-icon lnr-printer icon-gradient bg-ripe-malin"></i>
//               Chat Box
//             </div>
//           </div>

//           <div
//             className="scroll-area-lg"
//             style={{ height: "800px", overflow: "scroll" }}
//           >
//             <div className="scrollbar-container-y">
//               <div className="p-2">
//                 <h3>LET'S GET YOU COVERED! </h3>
//                 <h4>Personal Details </h4>

//                 <div className="chat-wrapper p-1">
//                   {userData.map((val, index) => (
//                     <div key={index} className="chat-box-wrapper">
//                       {val.type === "property" && (
//                         <div key={index} className="chat-box-wrapper">
//                           <div className="col-lg-8 col-12">
//                             <span>{val.label}</span>
//                             <div
//                               className="btn-group btn-group-site d-flex mb-3"
//                               role="group"
//                             >
//                               {/* Radio buttons for property type selection */}
//                               {[
//                                 {
//                                   id: "btnradio1",
//                                   value: "Rent",
//                                   imgSrc: "./images/icons/rent-3.png",
//                                 },
//                                 {
//                                   id: "btnradio2",
//                                   value: "Sell",
//                                   imgSrc: "./images/icons/sale-2.png",
//                                 },
//                                 {
//                                   id: "btnradio3",
//                                   value: "Pg/Hostel",
//                                   imgSrc: "./images/icons/hostel.png",
//                                 },
//                               ].map((option, index) => (
//                                 <React.Fragment key={index}>
//                                   <input
//                                     type="radio"
//                                     className="btn-check property_for"
//                                     name="Property_type"
//                                     id={option.id}
//                                     value={option.value}
//                                     onChange={handleChange}
//                                     disabled={disableFunction(val.key)}
//                                   />

//                                   <label
//                                     className="btn btn-outline-danger"
//                                     htmlFor={option.id}
//                                   >
//                                     <img
//                                       src={option.imgSrc}
//                                       alt=""
//                                       height="48"
//                                       width="48"
//                                     />
//                                     {option.value}
//                                   </label>
//                                 </React.Fragment>
//                               ))}
//                             </div>
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "question" && (
//                         <div className="col-lg-8 col-12">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                           {/* Buttons for selecting property */}
//                           {property.map((value, index) => (
//                             <button
//                               key={index}
//                               className="btn bg-info text-light"
//                               value={value.id}
//                               onClick={() =>
//                                 handlePropertyButtonClick(value.id, value.name)
//                               }
//                               disabled={disableFunction(val.key)}
//                             >
//                               {value.name}
//                               {value.key}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       {val.type === "residential" && (
//                         <div key={index} className="chat-box-wrapper">
//                           <div className="col-lg-8 col-12">
//                             <div className="chat-box">{val.label}</div>
//                             {/* Buttons for selecting residential property */}
//                             {propertyData.map((value, index) => (
//                               <button
//                                 key={index}
//                                 className="btn bg-info text-light disable"
//                                 value={value.id}
//                                 onClick={() =>
//                                   submitFlatValue( value.name)
//                                 }
//                                 disabled={disableFunction(val.key)}
//                               >
//                                 {value.name}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "flat" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box bg-warning text-light btn"
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>

//                           {FlatData.map((value, index) => (
//                             <button
//                               key={index}
//                               className="btn bg-info text-light"
//                               value={value.id}
//                             >
//                               {value.name} {value.id}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       {val.type === "flat_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "bunglow_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box bg-warning text-light btn"
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "flat_furnishing_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                           {/* Buttons for selecting property */}
//                           {furnishing_status.map((value, index) => (
//                             <button
//                               key={index}
//                               className="btn bg-info text-light"
//                               value={value.name}
//                               onClick={() => submitFurnishingValue(value.name)}
//                               disabled={disableFunction(val.key)}
//                             >
//                               {value.name}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       {val.type === "flat_processing_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                           {/* Buttons for selecting property */}
//                           {processing_status.map((value, index) => (
//                             <button
//                               key={index}
//                               className="btn bg-info text-light ml-4"
//                               value={value.name}
//                               onClick={() => submitProcessingValue(value.name)}
//                               disabled={disableFunction(val.key)}
//                             >
//                               {value.name}
//                             </button>
//                           ))}
//                         </div>
//                       )}

//                       {val.type === "flat_image_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                           {/* Buttons for selecting property */}
//                           <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
//                             <li className="nav-item">
//                               <a
//                                 className={`nav-link ${
//                                   activeTab === "" ? "active" : ""
//                                 }`}
//                               ></a>
//                             </li>
//                             {tabData.map((tab, index) => (
//                               <li className="nav-item" key={index}>
//                                 <a onClick={() => handleTabClick(tab.key)}>
//                                   <span
//                                     className="btn btn-info text-light mb-1 ml-0"
//                                     style={{ marginRight: "10px" }}
//                                   >
//                                     {tab.name}
//                                   </span>
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>

//                           <div>
//                             <input
//                               className="btn"
//                               id="fileInput"
//                               type="file"
//                               name="file"
//                               accept="image/*"
//                               onChange={handleFileChange}
//                               placeholder="Upload your image"
//                               multiple
//                             />

//                             {imagePreview && (
//                               <React.Fragment>
//                                 <div>
//                                   {imagePreview[activeTab].map(
//                                     (imageUrl, index) => (
//                                       <div key={index} className="col-2">
//                                         <div className="selected-image-container position-relative py-2">
//                                           <img
//                                             src={imageUrl}
//                                             alt={`image-${index}`}
//                                             className="selected-image img-fluid"
//                                             width={200}
//                                             height={200}
//                                           />
//                                         </div>
//                                       </div>
//                                     )
//                                   )}
//                                   <button
//                                     htmlFor="fileInput"
//                                     className="btn d-flex"
//                                     onClick={SubmitImageFile}
//                                   >
//                                     Upload
//                                   </button>
//                                 </div>
//                                 <button onClick={handleReview}>
//                                   Review Your Data
//                                 </button>
//                                 <button
//                                   className="btn"
//                                   onClick={clearFileInput}
//                                 >
//                                   Reset
//                                 </button>
//                               </React.Fragment>
//                             )}

//                             {file && <div></div>}
//                             {showReview && (
//                               <ReviewSection
//                                 answerData={answerData}
//                                 tabFiles={tabFiles}
//                                 SubmitAllData={SubmitAllData}
//                                 tabData={tabData}
//                                 activeTab={activeTab}
//                                 handleTabClick={handleTabClick}
//                                 imagefile={imageData}
//                               />
//                             )}
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "error" && (
//                         <div className="d-flex justify-content-end flex-grow-1">
//                           <span className="chat-box">{val.label}</span>
//                         </div>
//                       )}

//                       {val.type === "office_type" && (
//                         <div className="col-lg-8 col-12 ">
//                           <div
//                             className="chat-box "
//                             style={{ fontSize: "20px", color: "black" }}
//                           >
//                             {val.label}
//                           </div>
//                         </div>
//                       )}

//                       {val.type === "Answer" && (
//                         <div>
//                           <div className="d-flex justify-content-end flex-grow-1">
//                             <span className="chat-box">{val.label}</span>
//                           </div>
//                         </div>
//                       )}
//                       {/* Other conditions */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="card-footer d-flex">
//             <input
//               placeholder="Write here and hit enter to send..."
//               type="text"
//               className="form-control-sm form-control"
//               style={{ width: "1000px", marginLeft: "-5px", padding: "5px" }}
//               value={inputData}
//               onChange={ChangeInputValue}
//             />
//             <button
//               className="btn bg-info text-light"
//               onClick={submitInputTypeValue}
//               disabled={disableButton()}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ChatFunction
