import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import {Link, useParams} from 'react-router-dom'

const AllImageData = () => {
  
  const [activeTab, setActiveTab] = useState("");
  const [tabs, setTabs] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const { PropertyDetails} = useContext(AuthContext);

  const {property_id}=useParams();

  useEffect(() => {
    if (PropertyDetails?.data[0]?.gallery) {
      const gallery = PropertyDetails?.data[0]?.gallery;
      setTabs(
        gallery.map((item) => ({ key: item.key_name, name: item.key_name }))
      );
      const initialTab = gallery[0]?.key_name || "";
      setActiveTab(initialTab);
      setImageFile(gallery);
    }
  }, [PropertyDetails]);

  const handleTabClick = (key) => {
    setActiveTab(key);
  };

  const getFilteredImages = () => {
    if (!imageFile || imageFile.length === 0) return [];
    const activeImages = imageFile.find((item) => item.key_name === activeTab);
    return activeImages ? activeImages.images : [];
  };

  const handleBack = () => {
    
  };

  const handleClose = () => {
    
  };

  alert('hello')
  return (
    <>

      <div className="clearfix"></div>
      <div className="propertyViewModalWrapper">
        <div className="propertyViewModal">
          <div className="d-flex justify-content-between">
            <Link to={`/my-property/details/${property_id}`} >
            <button className="btn btn-secondary" onClick={handleBack}>
              Back
            </button>
            </Link>
            
            <button className="btn btn-danger" onClick={handleClose}>
              Close
            </button>
          </div>
          <div className="imageTilesContainer">
            <div className="clearfix"></div>
            <div className="imgTiles">
              <div className="imageTilesLeft">
                <ul className="masonryGrid">
                  <h1 className="mt-4">{activeTab ? `${activeTab} Images` : "Images"}</h1>
                  <div className="bg-dark mt-4">
                    <ul className="body-tabs body-tabs-layout tabs-animated body-tabs-animated nav">
                      {tabs.map((tab, index) => (
                        <li className="nav-item" key={index}>
                          <button
                            onClick={() => handleTabClick(tab.key)}
                            className={`btn btn-warning text-light mb-1 ml-0 ${
                              activeTab === tab.key ? "active" : ""
                            }`}
                            style={{ marginRight: "10px", height: "40px" }}
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
                        <div>
                          {getFilteredImages().map((imageObj, index) => (
                            <div key={index} className="d-flex">
                              <img
                                src={`http://localhost/realestate/frontend-node/public/temp/${imageObj.image}`}
                                alt={`Image ${index}`}
                                width="200"
                                height="200"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p>No images available</p>
                    )}
                  </div>
                </ul>
              </div>
            </div>
            <div className="tabSlider" style={{ display: 'none' }}>
              <div className="slider-container">
                <div className="slider-top-bar">
                  <div className="topTitle">
                    <span className="closeTab">
                      <a></a>
                    </span>
                    <span>3 BHK 1150 Sq-ft For Rent</span>
                  </div>
                  <div className="btnsGroup">
                    <li className="shareIcon"></li>
                    <li>
                      <button className="btn btnBW clientAgent clientAgent2">Contact Builder</button>
                    </li>
                  </div>
                </div>
                <div className="navList">
                  <ul>
                    <div className="naviScroll">
                      <li className="" data-start="1" data-cat-key="Bedroom">Bedroom <span>(3)</span></li>
                    </div>
                    <div className="sliderImgCount">
                      <li className="marginRightNone">-3/<span>4</span></li>
                    </div>
                  </ul>
                </div>
                <div id="hideLoader">
                  <img src="http://localhost/realestate-live/public/images/loading-bars.gif" alt="loading" />
                </div>
                <div id="myGallery">
                  <div className="photoGallery">
                    <div className="imageContainer ">
                      <div className="sliderImages">
                        <div className="imgCont">
                          <img className="img-2" src="http://localhost/realestate-live/public/images/loading-bars.gif" category="" type="image" data-src="http://localhost/realestate-live/public/upload/properties/1669359330_b9d7f008f8a26ccfe650.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="imageContainer ">
                      <div className="sliderImages">
                        <div className="imgCont">
                          <img className="img-2" src="http://localhost/realestate-live/public/images/loading-bars.gif" category="" type="image" data-src="http://localhost/realestate-live/public/upload/properties/1669359330_553c7f82a6e84ced428e.jpg" />
                        </div>
                      </div>
                    </div>
                    <div className="imageContainer ">
                      <div className="sliderImages">
                        <div className="imgCont">
                          <img className="img-2" src="http://localhost/realestate-live/public/images/loading-bars.gif" category="" type="image" data-src="http://localhost/realestate-live/public/upload/properties/1669359330_10b2d1974f86486af97e.jpg" />
                        </div>
                      </div>
                    </div>
                    <a >
                      <div className="arrow leftArrow"> </div>
                    </a>
                    <a >
                      <div className="arrow rightArrow"> </div>
                    </a>
                  </div>
                </div>
                <div className="bottomIndicator" id="bottomIndicator">undefined -3/<span>4</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllImageData;
