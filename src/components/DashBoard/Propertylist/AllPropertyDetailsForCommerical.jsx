import React, {useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/AuthContext";
import MortgageCalculator from "../../AllProperetyData/EmiCalculator";
import Modal from 'react-bootstrap/Modal';
import EnquiryForm from "../EnquiryDetails/EnquiryForm";
import GalleryList from "../GalleryPage/GalleryList";
import UserReview from "../../AllProperetyData/UserReview";

import {
  floor1,
  furnish,
  balcony,
  carpet,
  bathroom,
  kitchen,
  flat,
} from "../../../Assets/images/icons";

const AllPropertyDetailsforCommercial = ({ propertyData }) => {
  const { setTotalImage, totalImage } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [visible, setVisible]=useState(false)
  const [userReview,setUserReview]=useState(false)

  const handleImage = () => {
    setVisible()
  };

  const getAllImage = () => {
    let arr = [];  
    propertyData?.data?.gallery.map((image) => {
      arr = arr.concat(image.images);
    });
    setTotalImage(arr);
  };

  useEffect(() => {
    getAllImage();
  }, [propertyData]);

  const showUserReviewForm=()=>{
    setUserReview(true)
  }

  const handleClose = () => {
    setShow((prevState) => ({ ...prevState, show: false }));
  };

  const handleShow = () => {
    setShow((prevState) => ({ ...prevState, show: true }));
  };

  const visibleImages=()=>{        
    setVisible(true)
  }

  return (
    <div>
      <section className="section projdt bg-light">
        <>
          <div className="card mb-4">
            <div className="card-body">
              <div className="d-sm-flex project-details-title">
                <div className="flex-shrink-0 text-sm-end order-sm-2">
                  <h2 className="text-end">AED900.05/Mo</h2>
                  <span className="ads-type rent">
                    For {propertyData?.data?.property_for}
                  </span>
                </div>
                <div className="flex-grow-1 me-3 order-sm-1">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:;"></a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:;">
                        {propertyData?.data?.property_for}
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:;">
                        {propertyData?.data?.property_type}
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {propertyData?.data?.property_type_for}
                    </li>
                  </ol>
                  <h3>{`${propertyData?.data?.bedroom} BHK ${propertyData?.data?.property_type} ${propertyData?.data?.property_type_for} for Sale in ${propertyData?.data?.city_name}`}</h3>
                  <p className="mb-1">
                    <i className="icon-feather-map-pin text-site"></i>{" "}
                    {propertyData?.data?.address}
                  </p>
                </div>
              </div>
              <div className="row main-row">
                {totalImage.length > 0 && (
                  <aside className="col-xl-7 col-lg-7 col-12">
                    <div className="row gx-3">
                      {/* Main Image */}
                      <div className="col-12 mb-3">
                        <img
                          className="rounded w-100"
                          src={propertyData.url + totalImage[0].image}
                          alt="First Property Image"
                        />
                      </div>

                      {/* Gallery Items */}
                      {totalImage.length <= 4
                        ? totalImage
                            .slice(1, totalImage.length)
                            .map((image, index) => (
                              <div
                                key={index}
                                className="col-sm-3"
                                onClick={handleImage}
                                style={{cursor:'pointer'}}
                              >
                                <a
                                  href="javascript:;"
                                  className="gallery-item"
                                >
                                  <img
                                    className="rounded w-100"
                                    src={propertyData.url + image.image}
                                    alt={`Gallery Image ${index + 2}`}
                                  />
                                </a>
                              </div>
                            ))
                        : totalImage.slice(1, 4).map((image, index) => (
                            <div
                              key={index}
                              className="col-sm-3"
                              onClick={handleImage}
                              style={{cursor:'pointer'}}
                            >
                              <a
                                href="javascript:;"
                                className="gallery-item"
                              >
                                <img
                                  className="rounded w-100"
                                  src={propertyData.url + image.image}
                                  alt={`Gallery Image ${index + 2}`}
                                />
                              </a>
                            </div>
                          ))}

                      {/* View More Link */}
                      {totalImage.length > 4 && (
                        <div className="col-sm-3" onClick={handleImage} style={{cursor:'pointer'}}>
                          <a href="javascript:;" className="gallery-item">
                            <img
                              className="rounded w-100"
                              src={propertyData.url + totalImage[4].image}
                              alt="Gallery Image 5"
                            />
                            <div className="view-more-image">
                              + {totalImage.length - 5}
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                    {visible ===true ?(
                      <GalleryList propertyData={propertyData} setVisible={setVisible}/>
                    ):''}
                  </aside>
                )}

                <aside className="col-xl-5 col-lg-5 col-12">
                  <div className="">
                    <div className="card-header">
                      <h4 className="text-uppercase">PROPERTY INFO</h4>
                    </div>
                    <div className="mb-4" style={{ marginTop: "-0.5rem" }}>
                      <ul className="list-info list-col-lg-4 list-property-feature">
                        <li>
                          <div>
                            <img src={flat} alt="Icon" height="32" width="32" />
                            Property For:{" "}
                            <b>{propertyData?.data?.property_for}</b>
                          </div>
                        </li>

                        <li>
                          <div>
                            <img
                              src={carpet}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            Carpet Area:
                            <span>
                              <b>{propertyData?.data?.carpet_area} sq ft</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={carpet}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            Super Area:
                            <span>
                              <b>{propertyData?.data?.super_area} sq ft</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={bathroom}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            Washroom:{" "}
                            <span>
                              <b>{propertyData?.data?.washroom_no}</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={kitchen}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            Cabin:{" "}
                            <span>
                              <b>{propertyData?.data?.cabin_room}</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={furnish}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            Status:{" "}
                            <span>
                              <b>
                                {propertyData?.data?.furnishing_status ||
                                  "not available"}
                              </b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={floor1}
                              alt="Icon"
                              height="32"
                              width="32"
                            />{" "}
                            Cafeteria:
                            <span>
                              <b>{propertyData?.data?.cafeteria}</b>
                            </span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={balcony}
                              alt="Icon"
                              height="32"
                              width="32"
                            />{" "}
                            Lease:
                            <span>
                              <b>{propertyData?.data?.lease_out}</b>
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="d-grid gap-3 mb-3"
                      style={{ gridTemplateColumns: "1fr 1fr" }}
                    >
                      <a
                        className="btn btn-primary btn-lg msg-send mb-2"
                         onClick={handleShow}
                      >
                        <i className="icon-feather-user"></i>Contact Owner
                      </a>
                      <a
                        className="btn btn-outline-primary btn-lg msg-send mb-2"
                         onClick={handleShow}
                      >
                        <i className="icon-feather-phone"></i>Phone Number{" "}
                      </a>
                    </div>
                    <div className="sort-by">
                      <div className="social-share-wrap me-2">
                        <a
                          className="btn btn-sm btn-outline-site"
                        >
                          <i className="icon-feather-share-2"></i>
                        </a>
                        <div className="share-items">
                          <a
                            className="btn-floating btn btn-tw"
                            target="_parent"
                            href="javascript:;"
                            title="Share on Facebook"
                          >
                            <i className="icon-brand-facebook-f"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            type="button"
                            role="button"
                            title="Share on Twitter"
                            rel="noopener"
                            target="_blank"
                          >
                            <i className="icon-brand-twitter"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            type="button"
                            role="button"
                            title="Share on Linkedin"
                            target="_blank"
                          >
                            <i className="icon-brand-linkedin-in"></i>
                          </a>
                          <a
                            className="btn-floating btn btn-tw"
                            type="button"
                            role="button"
                            title="Share on Whatsapp"
                            rel="noopener"
                            target="_blank"
                          >
                            <i className="icon-brand-whatsapp"></i>
                          </a>
                        </div>
                      </div>
                      <a
                        
                        className="btn me-2 ads-fav"
                        data-act="favourite"
                        title="Save for Later"
                      >
                        <i className="icon-line-awesome-heart-o"></i>
                      </a>
                      <a
                        
                        className="btn me-2"
                        title="Add to Compare"
                      >
                        <i className="icon-img-compare m-0"></i>
                      </a>

                      <a
                        
                        className="btn me-2"
                        title="Report this Ad"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        <i className="icon-feather-flag"></i>
                      </a>
                      <a
                        
                        className="btn"
                        title="Print"
                      >
                        <i className="icon-feather-printer"></i>
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
          <div className="row">
            <aside className="col-xl-9 col-lg-8 col-12">
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">DETAILS</h4>
                </div>
                <div className="card-body">
                  <ul className="list-property-details">
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/home-2.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>{propertyData?.data?.availability}:</span>
                      <b>30 July 2025</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/transaction.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>{propertyData?.data?.bedroom}:</span>
                      <b>trans1</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/home.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>{propertyData?.data?.bedroom}:</span>
                      <b>Property2</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/property-value.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>{propertyData?.data?.bedroom}:</span>
                      <b>{propertyData?.data?.property_type}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Land Zone :</span>
                      <b>{propertyData?.data?.land_zone}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Locality :</span>
                      <b>{propertyData?.data?.locality}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Cabin Size:</span>
                      <b>{propertyData?.data?.cabin_size}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Modify Interior</span>
                      <b>{propertyData?.data?.modify_interior}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/floor-1.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Personal Washroom:</span>
                      <b>{propertyData?.data?.personal_washroom}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/floor-1.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span> Washroom Size:</span>
                      <b>{propertyData?.data?.washroom_size}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/floor-2.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Assured Return:</span>
                      <b>{propertyData?.data?.assured_return}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/sun.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Monthly Rent:</span>
                      <b>{propertyData?.data?.monthly_rent}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/parking.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Sucurity Amount</span>
                      <b>{propertyData?.data?.security_amt}</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/parking.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Maintainance Charge</span>
                      <b>{propertyData?.data?.maintanance_charge}</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">AMENITIES</h4>
                </div>
                <div style={{ display: 'flex' }} className="row">
                {propertyData.data.amenities.map((amenity, index) => (
                  <div className="card-body" key={index}>
                    <ul className="list-property-details" >
                      <li>
                        <img
                          src="http://localhost/realestate-live/public/images/icons/home-2.png"
                          alt="Icon"
                          height="32"
                          width="32"
                        />
                        <b>{amenity?.amenity_name}</b>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">PROPERTY VIDEO</h4>
                </div>
                <div className="card-body">
                  <div className="property-video mb-4">
                    <iframe
                      style={{ width: "100%" }}
                      height="350"
                      src="https://www.youtube.com/embed/ViH5U3zzTfw?controls=0"
                      title="Video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen=""
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">About EM Bypass</h4>
                  <h5 href="javascript;" className="text-end">
                    Explore Locality
                  </h5>
                </div>
                <div className="card-body d-flex ">
                  <div className="">
                    <h3 className="ml-4">Nearby Localities</h3>
                    <ul style={{ listStyleType: "none", marginRight: "5px" }}>
                      <li>Ruby Hospital Area, Kolkata</li>
                      <li>Ruby Hospital Area, Kolkata</li>
                      <li>Ruby Hospital Area, Kolkata</li>
                      <li>Ruby Hospital Area, Kolkata</li>
                    </ul>
                  </div>
                  <span className="vr ml-2"></span>
                  <div className="">
                    <h3 style={{ marginLeft: "20px" }}>Shopping Centers</h3>
                    <ul style={{ listStyleType: "none", marginRight: "5px" }}>
                      <li>Mani Square</li>
                      <li>Acropolis Mall </li>
                      <li>metropolis mall </li>
                      <li>Ruby General Hospital</li>
                    </ul>
                  </div>
                  <span className="vr ml-2"></span>
                  <div className="">
                    <h3 style={{ marginLeft: "20px" }}>Shopping Centers</h3>
                    <ul style={{ listStyleType: "none", marginRight: "5px" }}>
                      <li>Mani Square</li>
                      <li>Acropolis Mall </li>
                      <li>metropolis mall </li>
                      <li>Ruby General Hospital</li>
                    </ul>
                  </div><br />
                </div>
                <div style={{marginLeft:'20px'}}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before the final copy
                  is available.
                </div>
                <button style={{width:'20%' ,borderRadius:'30px '}} className="bg-info">Compony Details</button>
              </div>

              <h4 className="text-uppercase">Price Trends</h4>
              <div className="mb-4">
                <select className="selectpicker select-sm" data-width="110">
                  <option select="select" disabled="disabled">
                    Sort By
                  </option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
                <canvas id="lineChart" style={{ width: "100%" }}></canvas>
              </div>

              <div className="text-center mb-4">
                <img
                  src="http://localhost/realestate-live/public/upload/pages/1668606133_7d99c6e523a5543d5f37.jpg"
                  alt="Ads"
                  className="img-fluid"
                />
              </div>

              <h4 className="text-uppercase"></h4>
            </aside>
            <aside className="col-xl-3 col-lg-4 col-12">
              <div className="sticky-top mb-4">
                <div className="card mb-4">
                  <div className="card-header">
                    <h4>Contact Seller</h4>
                  </div>
                  <div className="card-body">
                    <div className="user-profile">
                      <div className="avatar mb-2">
                        <img
                          src="http://localhost/realestate-live/public/images/user.jpg"
                          alt="agent photo"
                          height="84"
                          width="84"
                        />
                      </div>
                      <div className="user-profile-details">
                        <h4>
                          Tester Own{" "}
                          <i
                            className="icon-img-check ms-1"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            aria-label="Certified Agent"
                            data-bs-original-title="Certified Agent"
                          ></i>
                        </h4>
                        <p className="mb-0">
                          <i>Property Agent</i>
                        </p>
                        <p>
                          <i className="icon-feather-map-pin text-site"></i> Abu
                          Dhabi, UAE{" "}
                        </p>
                        <div
                          className="d-grid gap-3"
                          style={{ gridTemplateColumns: "1fr 1fr" }}
                        >
                          <a
                            className="btn btn-outline-primary btn-sm mb-3"
                          >
                            View Profile{" "}
                          </a>
                          <a
                            onClick={handleShow}
                            className="btn btn-outline-primary btn-sm mb-3"
                          >
                            Contact Agent
                          </a>
                        </div>
                      </div>
                    </div>
                    <EnquiryForm/>
                  </div>
                </div>
                <MortgageCalculator />
                <div className="card mb-4">
                  <div className="card-header">
                    <h4 className="text-uppercase">SAFETY TIPS</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list list-2 mb-4">
                      <li>Documents to check before buying a resale flat</li>
                      <li>
                        Importance of checking electricity bills while buying a
                        property
                      </li>
                      <li>
                        Importance of Khata Certificate and Extract while buying
                        a property
                      </li>
                      <li>Importance of sale deed while buying a property</li>
                      <li>Physical survey and access to the property</li>
                      <li>
                        Compliance under the Real Estate (Regulation and
                        Development) Act, 2016 (RERA)
                      </li>{" "}
                    </ul>
                  </div>
                </div>
                <div className="d-grid mb-4">
                  <a
                    
                    className="btn btn-primary write-review"
                    title="Write a review"
                    onClick={showUserReviewForm}
                  >
                    Write a Review
                  </a>
                </div>
                {userReview===true ?(
                  <UserReview  showUserReviewForm={showUserReviewForm} setUserReview={setUserReview}/>
                ):null}

                <div className="text-center mb-4">
                  <img
                    src="http://localhost/realestate-live/public/upload/pages/1668606133_a06a09f2cd11717ce96b.jpg"
                    alt="ads"
                    className="img-fluid"
                  />
                </div>
              </div>
            </aside>
          </div>
        </>
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

      </section>
    </div>
  );
};

export default AllPropertyDetailsforCommercial;
