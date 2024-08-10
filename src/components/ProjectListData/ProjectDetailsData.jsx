import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import AuthUser from "../Authentication/Validation/AuthUser";
import EnquiryForm from "../DashBoard/EnquiryDetails/EnquiryForm";
import ProjectGallery from "../DashBoard/ProjectList/ProjectGallery";
import ShowProjectFloorPlan from "../DashBoard/ProjectList/ShowProjectFloorPlan";
import AuthContext from "../Context/AuthContext";

const ProjectDetailsData = () => {
  const { callApi, projectImg } = AuthUser();
  const { project_id } = useParams();
  const [projectdetails, setProjectdetails] = useState([]);
  const [visible, setVisible] = useState(false);
  const [url, setUrl] = useState("");
  const [showFloorPlanImage, setShowFloorPlanImage] = useState(false);
  const [selectedBhk, setSelectedBhk] = useState("");
  const { setTotalImage, totalImage } = useContext(AuthContext);

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  const handleImage = () => {
    setVisible(!visible);
  };

  const fetchProjectDetails = async () => {
    try {
      const response = await callApi({
        api: `/get_unique_project/${project_id}`,
        method: "GET",
      });
      if (response) {
        setProjectdetails(response.data);
        setUrl(response);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  const FormateDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const options = { year: "numeric", month: "short" };
    const formattedDate = date.toLocaleDateString(undefined, options);

    const [month, year] = formattedDate.split(" ");
    return `${month}, ${year}`;
  };

  const squareFeetToAcres = (sqft) => {
    const acres = sqft / 43560;
    return acres.toFixed(3);
  };
  const projectSize = projectdetails?.project_size;
  const projectSizeInAcres = squareFeetToAcres(projectSize);

  const getAllImage = () => {
    var arr = [];
    projectdetails?.projectViewImages?.map((item) => {
      item.images.forEach((image) => {
        arr = arr.concat(image);
      });
    });
    setTotalImage(arr);
  };

  useEffect(() => {
    getAllImage();
  }, [projectdetails]);

  const showFloorImage = (bhkIndex) => {
    setSelectedBhk(bhkIndex);
    setShowFloorPlanImage(true);
  };

  return (
    <div>
      <section className="section">
        <div className="container-fluid">
          <div className="row main-row">
            {totalImage?.length > 0 && (
              <aside className="col-xl-7 col-lg-7 col-12">
                <div className="row gx-3">
                  <div className="col-12 mb-3">
                    <img
                      className="rounded w-100"
                      src={`${projectImg}${totalImage[0]}`}
                      alt="First Property Image"
                    />
                  </div>
                  {totalImage.length <= 4
                    ? totalImage.slice(1, totalImage.length).map((_, index) => (
                        <div
                          key={index}
                          className="col-sm-3"
                          onClick={handleImage}
                          style={{ cursor: "pointer" }}
                        >
                          <a href="#" className="gallery-item">
                            <img
                              className="rounded w-100"
                              src={`${projectImg}${totalImage[1]}`}
                              alt={`Gallery Image ${index + 2}`}
                            />
                          </a>
                        </div>
                      ))
                    : totalImage.slice(1, 4).map((_, index) => (
                        <div
                          key={index}
                          className="col-sm-3"
                          onClick={handleImage}
                          style={{ cursor: "pointer" }}
                        >
                          <a href="#" className="gallery-item">
                            <img
                              className="rounded w-100"
                              src={`${projectImg}${totalImage[2]}`}
                              alt={`Gallery Image ${index + 2}`}
                            />
                          </a>
                        </div>
                      ))}
                  {totalImage.length > 4 && (
                    <div
                      className="col-sm-3"
                      onClick={handleImage}
                      style={{ cursor: "pointer" }}
                    >
                      <a href="#" className="gallery-item">
                        <img
                          className="rounded w-100"
                          src={`${projectImg}${totalImage[4]}`}
                          alt="Gallery Image 5"
                        />
                        <div className="view-more-image">
                          + {totalImage.length - 5}
                        </div>
                      </a>
                    </div>
                  )}
                </div>
                {visible && (
                  <ProjectGallery
                    projectdetails={projectdetails}
                    setVisible={setVisible}
                  />
                )}
              </aside>
            )}
            <aside className="col-lg-4 col-12">
              <div id="nav-project-location">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99512.80400724961!2d54.49250820162658!3d24.340538033250233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e476b238494e5%3A0xfd3db0486d6d68d6!2sMohamed%20Bin%20Zayed%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1650384953003!5m2!1sen!2sin"
                  width="100%"
                  height="635"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Project Location"
                ></iframe>
              </div>
            </aside>
          </div>

          <div className="propertyViewModalWrapper" style={{ display: "none" }}>
            <div className="propertyViewModal">
              <div className="imageTilesContainer" style={{ display: "block" }}>
                <div className="topBarMain" style={{ display: "initial" }}>
                  <div className="slider-top-bar">
                    <div className="topTitle">
                      <span className="leftArrow"></span>
                      <span>{projectdetails?.city_name}</span>
                    </div>
                    <div className="btnsGroup">
                      <li className="shareIcon"></li>
                    </div>
                  </div>
                </div>
                <div className="clearfix"></div>
                <div className="imgTiles">
                  <div
                    className="imageTilesLeft"
                    style={{ display: "initial" }}
                  >
                    <ul className="masonryGrid">
                      {/* Dynamic images can be added here */}
                    </ul>
                  </div>
                  <div className="imgTiles__contact mb-inline-contact">
                    <div
                      className="contact-form__content"
                      style={{ minHeight: "457px" }}
                    >
                      <div className="contact-form show" id="contact-form">
                        <div className="contact-form__flex">
                          <div className="contact-form__content">
                            <div className="contact-form__close"></div>
                            <div
                              className="contact-form__inner contact-form__inner--392"
                              id="contact-default"
                            >
                              <div
                                className="contact-form__slide contact-form__slide--default"
                                id="contact-slide-default"
                              >
                                <div className="contact-form__heading">
                                  Fill this one-time contact form
                                </div>
                                <div className="contact-form__text mb-3">
                                  Get Builders details over email
                                </div>
                                <form>
                                  <button
                                    type="submit"
                                    className="btn btn-primary contact-form__btn"
                                  >
                                    Get Contact Details
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tabSlider" style={{ display: "none" }}>
                  <div className="slider-container">
                    <div className="slider-top-bar">
                      <div className="topTitle">
                        <span className="closeTab">
                          <a></a>
                        </span>
                        <span>demoproject1</span>
                      </div>
                      <div className="btnsGroup">
                        <li className="shareIcon"></li>
                        <li>
                          <button className="btn btnBW clientAgent clientAgent2">
                            Contact Builder
                          </button>
                        </li>
                      </div>
                    </div>
                    <div className="navList">
                      <ul>
                        <div className="naviScroll"></div>
                        <div className="sliderImgCount">
                          <li className="marginRightNone">
                            1 / <span>0</span>
                          </li>
                        </div>
                      </ul>
                    </div>
                    <div id="hideLoader">
                      <img
                        src="http://localhost/realestate-live/public/images/loading-bars.gif"
                        alt="loading"
                      />
                    </div>
                    <div id="myGallery">
                      <div className="photoGallery">
                        <a style={{ display: "none" }}>
                          <div className="arrow leftArrow"></div>
                        </a>
                        <a style={{ display: "none" }}>
                          <div className="arrow rightArrow"></div>
                        </a>
                      </div>
                    </div>
                    <div className="bottomIndicator" id="bottomIndicator">
                      Project Photo 1/<span>98</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="proj-detail sticky-top">
            <div className="container-fluid">
              <ul className="nav navigation__scroll">
                <li className="nav-item navigation__item">
                  <a className="nav-link active" href="#nav-overview">
                    Overview
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#propertiesInPrj">
                    Properties
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-about-project">
                    About Project
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-amenities">
                    Amenities
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-project-unit-floors">
                    Floor Plan &amp; Units
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-about-locality">
                    About Locality
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#pricTrendli">
                    Price Trends
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-project-details">
                    Project Details
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-about-builder">
                    About Developer
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-project-video">
                    Project Video
                  </a>
                </li>
                <li className="nav-item navigation__item">
                  <a className="nav-link" href="#nav-project-location">
                    Project Location
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section className="section projdt">
            <div className="container-fluid">
              <div className="row">
                <aside className="col-xl-8 col-lg-8 col-12">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <a>Project in {projectdetails?.city_name}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a>Project in {projectdetails?.locality}</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a>{projectdetails?.city_name}</a>
                    </li>
                  </ol>
                  <div className="card mb-4" id="nav-overview">
                    <div className="card-header">
                      <h4>Overview</h4>
                    </div>
                    <div className="card-body">
                      <div className="position-relative mb-3">
                        <h4>
                          {projectdetails?.project_name || "Not available"}
                        </h4>
                        <p>
                          By {projectdetails?.developer_name || "Not available"}
                        </p>

                        <p>
                          <i className="icon-feather-map-pin text-site"></i>
                          {projectdetails?.locality} ,
                          {projectdetails?.city_name}
                        </p>
                      </div>
                      <ul className="list list-2 mb-4">
                        <li>
                          Possession by{" "}
                          {FormateDate(projectdetails?.launched_date)}
                        </li>
                      </ul>
                      <h5>{`INR ${projectdetails?.min_price} - INR ${projectdetails?.max_price}`}</h5>
                      <span className="mb-3">
                        {projectdetails?.bhk_types
                          ?.map((bhk) => bhk?.bhk_type.charAt(0))
                          .join(", ")}{" "}
                        BHK Flats
                      </span>
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-about-project">
                    <div className="card-header">
                      <h4>
                        About {projectdetails?.project_name || "demo project"}
                      </h4>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <div>
                        <p>Project size</p>
                        <h3>
                          {projectSize
                            ? `${projectSizeInAcres} Acer`
                            : "Size not available"}
                        </h3>
                      </div>
                      <div>
                        <p>launched date</p>
                        <h3>{FormateDate(projectdetails?.launched_date)}</h3>
                      </div>
                      <div>
                        <p>Total Units</p>
                        <h3>{projectdetails?.unit}</h3>
                      </div>
                      <div>
                        <p>Total Towers</p>
                        <h3>{projectdetails?.tower}</h3>
                      </div>
                      <div>
                        <p>BHK</p>
                        <h3>
                          {projectdetails?.bhk_types
                            ?.map((bhk) => bhk?.bhk_type.charAt(0))
                            .join(", ")}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-amenities">
                    <div className="card-header">
                      <h4>
                        Amenities in{" "}
                        {projectdetails.project_name || "Demo project"}
                      </h4>
                    </div>
                    <div className="card-body p-2">
                      <ul className="list-property-details">
                        {projectdetails?.amenityResult?.map((val, index) => (
                          <li key={index}>
                            <i className="icon-img-project"></i>
                            <span>{val.amenity_name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-about-locality">
                    <div className="card-header">
                      <h4>About {projectdetails.locality} Location</h4>
                    </div>
                    <div className="card-body">
                      <p>
                        Locality introduction and neighbourhood New Town is a
                        planned area situated on the north-eastern periphery of
                        Kolkata. It falls under North 24 Parganas district and
                        is a part of New Town Kol... Read More Things to keep in
                        mind Planned locality comprising a mix of residential,
                        commercial, IT and institutional areas Employment centre
                        in Kolkata having several well-known IT MNCs Developed
                        network of roads providing sound connectivity and
                        upcoming Yellow Metro Line to improve connectivity
                        Subdued residential demand and slow pace of development
                      </p>
                    </div>
                  </div>

                  <div className="card mb-4" id="pricTrendDiv">
                    <div className="card-header">
                      <h4 className="text-uppercase mt-3">
                        Landmarks Near{" "}
                        {projectdetails.project_name || "demo project"}
                      </h4>
                    </div>
                    <div className="card-body">
                      <ul className="list-info list-col-lg-2 list-property-feature mb-4">
                        {projectdetails?.landmarks?.map(
                          (landmark, landmarkIndex) => {
                            const { landmark_name, details } = landmark;
                            return (
                              <div key={landmarkIndex}>
                                {/* Using landmarkIndex as the key */}
                                <h2>
                                  {landmark_name.charAt(0).toUpperCase() +
                                    landmark_name.slice(1)}
                                </h2>
                                {details.map((detail, detailIndex) => (
                                  <div key={detailIndex}>
                                    {typeof detail === "object" ? (
                                      <>
                                        <p>{`${detail.landmark_value} (${detail.distance})`}</p>
                                      </>
                                    ) : (
                                      <p>{detail}</p>
                                    )}
                                  </div>
                                ))}
                              </div>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4" id="propertiesInPrj">
                    <div className="card-header">
                      <h4>Properties Listed</h4>
                    </div>
                    <div className="card-body">
                      <ul className="list mb-0">No Property Found!</ul>
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-project-details">
                    <div className="card-header">
                      <h4>Project Plans</h4>
                    </div>
                    <div className="card-body">
                      <h5>
                        Specifications of{" "}
                        {projectdetails?.project_name || " Shyam Project"}
                      </h5>
                      <p>{projectdetails?.project_description}</p>
                      <h5>{projectdetails?.address}</h5>
                      <ul className="list list-2 mb-4">
                        <li>demo</li>
                      </ul>
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-project-unit-floors">
                    <div className="card-header">
                      <h4>
                        {projectdetails?.developer_name} Floor Plans and Units
                      </h4>
                    </div>
                    <div style={{ display: "flex" }}>
                      {projectdetails?.bhk_types?.map((bhk, bhkIndex) => (
                        <div key={bhkIndex}>
                          <div style={{ display: "flex" }}>
                            <div className="card-body">
                              <p>{bhk?.bhk_type} Flat</p>
                              <p>{`${bhk?.min_sqft} Sq-ft - ${bhk?.max_sqft} Sq-ft`}</p>
                              <p>
                                {`Sale ${
                                  bhk.min_amt_per_sqft && bhk.max_amt_per_sqft
                                    ? `${bhk.min_amt_per_sqft} - ${bhk.max_amt_per_sqft}`
                                    : "not available"
                                }`}
                              </p>
                            </div>
                            <div>
                              {projectdetails.floorPlanImage.map(
                                (img, imgIndex) => {
                                  const { images } = img;
                                  if (images.length > 0) {
                                    const firstImage = images[0].image; 
                                    const imageUrl = `${url.url}/${firstImage}`; 

                                    return (
                                      <div key={imgIndex}>
                                        <img
                                          style={{
                                            height: "50px",
                                            width: "50px",
                                          }}
                                          src={imageUrl}
                                          alt={`Floor Plan Image ${imgIndex}`}
                                          onClick={() => {
                                            showFloorImage(bhkIndex);
                                          }}
                                        />
                                      </div>
                                    );
                                  }
                                  return null;
                                }
                              )}

                              {showFloorPlanImage ? (
                                <ShowProjectFloorPlan
                                  showFloorImage={showFloorImage}
                                  setShowFloorPlanImage={setShowFloorPlanImage}
                                  projectdetails={projectdetails}
                                  selectedBhk={selectedBhk}
                                />
                              ) : null}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card mb-4" id="nav-about-builder">
                    <div className="card-header">
                      <h4>About Developer</h4>
                    </div>
                    <div className="card-body">
                      <div>
                        <img
                          src="http://localhost/realestate-live/public/upload/user/thumb/1694765301_30ae46861b0920ba16bb.jpg"
                          width="120"
                          alt="company logo"
                        />
                      </div>
                      <h5>{projectdetails?.developer_name}</h5>
                      <p>
                        {" "}
                        <b> {projectdetails?.year || "5"}</b> Years of
                        Experience
                      </p>
                    </div>
                  </div>
                </aside>

                <aside className="col-xl-4 col-lg-4 col-12">
                  <div className="sticky-top mb-4">
                    <div className="sort-by mb-2">
                      <div className="social-share-wrap me-2">
                        <a className="btn btn-sm btn-outline-site w-auto">
                          <i className="icon-feather-share-2"></i>
                        </a>
                        <div className="share-items">
                          <a
                            className="btn-floating btn btn-tw"
                            title="Share on Facebook"
                          >
                            <i className="icon-brand-facebook-f"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            target="_blank"
                            rel="noopener"
                            title="Share on Twitter"
                          >
                            <i className="icon-brand-twitter"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            target="_blank"
                            rel="noopener"
                            title="Share on Linkedin"
                          >
                            <i className="icon-brand-linkedin-in"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            target="_blank"
                            rel="noopener"
                            title="Share on Whatsapp"
                          >
                            <i className="icon-brand-whatsapp"></i>
                          </a>
                        </div>
                      </div>
                      <a
                        className="btn"
                        onClick={() => window.print()}
                        title="Print"
                      >
                        <i className="icon-feather-printer"></i>
                      </a>
                    </div>
                    <div className="card mb-4">
                      <div className="card-header">
                        <h4>Looking for property in Location here</h4>
                      </div>
                      <div className="card-body">
                        <EnquiryForm />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailsData;
