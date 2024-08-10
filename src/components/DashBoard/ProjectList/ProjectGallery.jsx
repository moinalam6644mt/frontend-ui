import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from "../EnquiryDetails/EnquiryForm";

const ProjectGallery = ({ projectdetails, setVisible }) => {
  const { project_id } = useParams();
  const [show, setShow] = useState(false);
  const { callApi ,projectImg} = AuthUser();
  const [selectedImage, setSelectedImage] = useState([]);

  const [visibalImage, setVisibalImage] = useState(0);

  const [activeTab, setActiveTab] = useState("exterior");
  useEffect(() => {
    getImageData();
  }, [project_id]);

  const getImageData = async () => {
    try {
      const response = await callApi({
        api: `/project_view_image/${project_id}`,
        method: "GET",
      });
      
      console.log(response.data)
      if (response ) {
        setSelectedImage(response.data);
      }
    } catch (error) {
      console.error("Error fetching property data:", error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLeftClick = () => {
    setVisibalImage((prevVisibleImage) => prevVisibleImage - 1);

    setActiveTab(selectedImage[visibalImage - 1].key_name);
  };

  const handleRightClick = () => {
    setVisibalImage((prevVisibleImage) => prevVisibleImage + 1);

    setActiveTab(selectedImage[visibalImage + 1].key_name);
  };

  const handleKey = (key_name) => {
    const selectedTab = selectedImage.filter(
      (tab) => tab.key_name === key_name
    );
    console.log(selectedTab);
    setActiveTab(key_name);

    if (selectedTab) {
      const index = selectedImage.findIndex(
        (tab) => tab.key_name === selectedTab[0].key_name
      );
      setVisibalImage(index);
    }
  };
  return (
    <React.Fragment>
      <div
        className="detail-full-pop open-state"
        id="writeReviewPopupSection"
        style={{ display: "block", width: "100%", backgroundColor: "black" }}
      >
        <div
          className="pop-header clearfix open-state"
          style={{ width: "100%" }}
        >
          <div className="tabSlider">
            <div className="slider-container">
              <div
                className="slider-top-bar"
                style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "space-between",
                }}
              >
                <div className="topTitle">
                  <span className="closeTab">
                    <a></a>
                  </span>
                  <div onClick={() => setVisible(false)}>
                    <i
                      className="icon-feather-close "
                      style={{
                        color: "black",
                        fontWeight: 800,
                        cursor: "pointer",
                      }}
                    >
                      Back
                    </i>
                    &nbsp;&nbsp;&nbsp; <span>Project Image view</span>
                  </div>
                </div>
                <div className="btnsGroup">
                  <a onClick={handleShow} className="btn btnBW clientAgent clientAgent2">
                    Contact Builder
                  </a>
                </div>
              </div>

              <div className="navList">
                <ul
                  className="nav-tabs"
                  style={{
                    display: "flex",
                    listStyle: "none",
                    justifyContent: "space-between",
                    cursor: "pointer",
                  }}
                >
                  {projectdetails?.projectViewImages?.map((tab, index) => (
                    <li
                      key={index}
                      style={{marginRight:'-10px'}}
                      className={`nav-link ${
                        tab.key_name == activeTab ? "active" : ""
                      }`}
                      data-start="1"
                      data-cat-key="Bedroom"
                      onClick={() => handleKey(tab.key_name)}
                    >
                      {tab.key_name}({tab.images.length})
                    </li>
                  ))}
                </ul>
                <div className="bottomIndicator" id="bottomIndicator">
                  {visibalImage + 1}/<span>{selectedImage.length}</span>
                </div>
              </div>

              <div id="myGallery">
                <div
                  className="photoGallery"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a className="left-arrow" onClick={handleLeftClick}>
                    {visibalImage === 0 ? (
                      <button className="arrow leftArrow " disabled>
                        Left
                      </button>
                    ) : (
                      <button className="arrow leftArrow">Left</button>
                    )}
                  </a>
                  <div className="imageContainer" style={{ marginLeft: "0px" }}>
                    <div className="sliderImages" style={{ display: "flex" }}>
                      {selectedImage.map((image, index) =>
                        index === visibalImage ? (
                          <img
                            key={index} // Make sure to add a unique key prop
                            className="img-2 active"
                            src={`${projectImg}${image.image}`}
                            category=""
                            width={800}
                            height={600}
                            type="image"
                            alt="Slider Image"
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                  <a className="left-arrow" onClick={handleRightClick}>
                    {visibalImage + 1 === selectedImage.length ? (
                      <button className="arrow leftArrow " disabled>
                        Right
                      </button>
                    ) : (
                      <button className="arrow leftArrow">Right</button>
                    )}
                  </a>
                </div>
              </div>

              <div
                className="bottomIndicator"
                id="bottomIndicator"
                style={{ textAlign: "center" }}
              >
                {visibalImage + 1}/<span>{selectedImage.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EnquiryForm/>
        </Modal.Body>
      </Modal>
    </>

    </React.Fragment>
  );
};

export default ProjectGallery;
