import { useEffect, useState } from "react";
import {
  tabData,
  Commerical_image_tab,
  Agricultural_image_tab,
} from "../PropertyData";

const ReviewSection = ({
  answerData,
  SubmitAllData,
  activeTab,
  handleTabClick,
  imagefile,
  type,
  sizevalue,
  availableDateValue,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(answerData);
  }, [answerData]);

  const getValueByKey = (key) => {
    const item = data.find((item) => item.key === key);
    return item ? item.value : "";
  };

  if (type === "Flats") {
    return (
      <div>
        <h2>Review Section</h2>
        {/* property type review */}
        <div className="dotted-outline bg-info">
          Property Type:
          <div>
            <p>Property Type1 : {getValueByKey(data[0]?.key)}</p>
            <p>Property Type2 : {getValueByKey(data[1]?.key)}</p>
            <p>Property Type3 : {getValueByKey(data[2]?.key)}</p>
          </div>
        </div>
        {/* property location review */}
        <div className="dashed-outline bg-warning mt-3">
          Property Location:
          <div>
            <p>City Name : {getValueByKey(data[3]?.key)}</p>
            <p>Society Name : {getValueByKey(data[4]?.key)}</p>
            <p>Locality : {getValueByKey(data[5]?.key)}</p>
            <p>Area : {getValueByKey(data[6]?.key)}</p>
            <p>Address : {getValueByKey(data[7]?.key)}</p>
          </div>
        </div>
        {/* property details review */}
        <div className="dashed-outline bg-warning mt-4">
          Property Details:
          <div>
            <p>Bedrooms : {getValueByKey(data[8]?.key)}</p>
            <p>
              Bathroom Size :
              {sizevalue.bedroom_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.bedroom_size)}
                  readOnly
                />
              )}
            </p>
            <p>Balconies : {getValueByKey(data[9]?.key)}</p>
            <p>
              Bathroom Size :
              {sizevalue.balcony_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.balcony_size)}
                  readOnly
                />
              )}
            </p>
            <p>Floor : {getValueByKey(data[10]?.key)}</p>
            <p>Total Floor : {getValueByKey(data[11]?.key)}</p>
            <p>Bathroom : {getValueByKey(data[12]?.key)}</p>
            <p>
              Bathroom Size :
              {sizevalue.bathroom_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.bathroom_size)}
                  readOnly
                />
              )}
            </p>
            <p>Kitchen : {getValueByKey(data[13]?.key)}</p>
            <p>
              Kitchen Size :
              {sizevalue.kitchen_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.kitchen_size)}
                  readOnly
                />
              )}
            </p>
            <p>Expected Price : {getValueByKey(data[14]?.key)}</p>
            <p>Booking Price : {getValueByKey(data[15]?.key)}</p>
            <p>Carpet Area : {getValueByKey(data[16]?.key)}</p>
            <p>Super Area : {getValueByKey(data[17]?.key)}</p>
            <p>Developer Details : {getValueByKey(data[18]?.key)}</p>
            <p>Project details : {getValueByKey(data[19]?.key)}</p>
            <p>
              Age of Constrution (in Years) : {getValueByKey(data[20]?.key)}
            </p>
            <p>facing Area : {getValueByKey(data[21]?.key)}</p>
            <p>Ownership Details : {getValueByKey(data[22]?.key)}</p>
            <p>Furnished Status : {getValueByKey(data[23]?.key)}</p>
            <p>Processing Status : {getValueByKey(data[24]?.key)}</p>
            <p>
              {availableDateValue && availableDateValue.available_date ? (
                <>
                  <label>Available Date:</label>
                  <input
                    type="text"
                    className="form-control bg-warning"
                    value={`${availableDateValue.available_date[0]}/${availableDateValue.available_date[1]}`}
                    readOnly
                  />
                </>
              ) : null}
            </p>
          </div>
        </div>
        <div className="bg-danger mt-4">
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "" ? "exterior" : ""}`}
              ></a>
            </li>
            {tabData.map((tab, index) => (
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
        </div>
        <div>
          {imagefile
            .filter((imageData) => imageData.key === activeTab)
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

        <button onClick={SubmitAllData}>Submit</button>
      </div>
    );
  } else if (type === "Commercial Office Space") {
    return (
      <div>
        <h2>Commercial Data Review</h2>
        {/* property type review */}
        <div className="dotted-outline bg-info text-light">
          Property Type:
          <div>
            <p>Property Type1 : {getValueByKey(data[0]?.key)}</p>
            <p>Property Type2 : {getValueByKey(data[1]?.key)}</p>
            <p>Property Type3 : {getValueByKey(data[2]?.key)}</p>
          </div>
        </div>
        {/* property location review */}
        <div className="dashed-outline bg-danger text-light mt-3">
          Property Location:
          <div>
            <p>City Name : {getValueByKey(data[3]?.key)}</p>
            <p>Locality Name : {getValueByKey(data[4]?.key)}</p>
            <p>Land Zone : {getValueByKey(data[5]?.key)}</p>
            <p>Businesses : {getValueByKey(data[6]?.key)}</p>
          </div>
        </div>
        {/* property details review */}
        <div className="dashed-outline bg-success  text-light mt-4">
          Property Details:
          <div>
            <p>Floor No : {getValueByKey(data[7]?.key)}</p>
            <p>Total Floor No : {getValueByKey(data[8]?.key)}</p>
            <p>Cabin/Meeting Room : {getValueByKey(data[9]?.key)}</p>
            <p>Cabin/Meeting Room size : <p>
              Cabin/Meeting Size :
              {sizevalue.cabin_size && (
                <input
                  type="text"
                  className="form-control bg-success text-light"
                  value={JSON.stringify(sizevalue.cabin_size)}
                  readOnly
                />
              )}
            </p></p>
            <p>Modify interior: {getValueByKey(data[10]?.key)}</p>
            <p>Personal Washroom : {getValueByKey(data[11]?.key)}</p>
            <p>Washroom No : {getValueByKey(data[12]?.key)}</p>
            <p>Washroom Size :
              {sizevalue.washroom_size && (
                <input
                  type="text"
                  className="form-control bg-success text-light"
                  value={JSON.stringify(sizevalue.washroom_size)}
                  readOnly
                />
              )}
            </p>
            <p>Assured Return : {getValueByKey(data[13]?.key)}</p>
            <p>Pantry/cafeteria : {getValueByKey(data[14]?.key)}</p>
            <p>Carpet Area in (sq/ft): {getValueByKey(data[15]?.key)}</p>
            <p>Super Area in (sq/ft): {getValueByKey(data[16]?.key)}</p>
            <p>Current Rent Out : {getValueByKey(data[17]?.key)}</p>
            <p>Monthly Rent : {getValueByKey(data[18]?.key)}</p>
            <p>Maintenance Charges : {getValueByKey(data[19]?.key)}</p>
          </div>
        </div>
        <div className="bg-danger mt-4">
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "" ? "exterior" : ""}`}
              ></a>
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
        </div>
        <div>
          {imagefile
            .filter((imageData) => imageData.key === activeTab)
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

        <button onClick={SubmitAllData}>Submit</button>
      </div>
    );
  } else if (type === "Agricultural Land") {
    return (
      <div>
        <h2>Agriculture Data Review</h2>
        {/* property type review */}
        <div className="dotted-outline bg-info text-light">
          Property Type:
          <div>
            <p>Property Type1 : {getValueByKey(data[0]?.key)}</p>
            <p>Property Type2 : {getValueByKey(data[1]?.key)}</p>
            <p>Property Type3 : {getValueByKey(data[2]?.key)}</p>
          </div>
        </div>
        {/* property location review */}
        <div className="dashed-outline bg-danger text-light mt-3">
          Property Location:
          <div>
            <p>City Name : {getValueByKey(data[3]?.key)}</p>
            <p>Locality Name : {getValueByKey(data[4]?.key)}</p>
            <p>Area : {getValueByKey(data[5]?.key)}</p>
            <p>Address : {getValueByKey(data[6]?.key)}</p>
          </div>
        </div>
        {/* property details review */}
        <div className="dashed-outline bg-success  text-light mt-4">
          Property Details:
          <div>
            <p>Plot Area (sq/ft.) : {getValueByKey(data[7]?.key)}</p>
            <p>plot Size:
              {sizevalue.plot_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.plot_size)}
                  readOnly
                />
              )}
            </p>
            <p>Bedroom : {getValueByKey(data[8]?.key)}</p>
            <p>Bedroom Size:
              {sizevalue.bedroom_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.bedroom_size)}
                  readOnly
                />
              )}
            </p>
            <p>Bathroom : {getValueByKey(data[9]?.key)}</p>
            <p>bathroom Size:
              {sizevalue.bathroom_size && (
                <input
                  type="text"
                  className="form-control bg-warning"
                  value={JSON.stringify(sizevalue.bathroom_size)}
                  readOnly
                />
              )}
            </p>
            <p>Carpet Area : {getValueByKey(data[10]?.key)}</p>
            <p>Super Area : {getValueByKey(data[11]?.key)}</p>
            <p>Monthly Charge : {getValueByKey(data[12]?.key)}</p>
            <p>Maintainance Charge : {getValueByKey(data[13]?.key)}</p>
            <p>Availability : {getValueByKey(data[14]?.key)}</p>
            <p>Age of Constrution in (Years) : {getValueByKey(data[15]?.key)}</p>
          </div>
        </div>
        <div className="bg-danger mt-4">
          <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === "" ? "exterior" : ""}`}
              ></a>
            </li>
            {Agricultural_image_tab.map((tab, index) => (
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
        </div>
        <div>
          {imagefile
            .filter((imageData) => imageData.key === activeTab)
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

        <button onClick={SubmitAllData}>Submit</button>
      </div>
    );
  } else {
    console.error("No data found");
    return null;
  }
};

export default ReviewSection;
