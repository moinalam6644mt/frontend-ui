import React, { useState } from "react";
import GalleryList from "../DashBoard/GalleryPage/GalleryList";
import MortgageCalculator from "../AllProperetyData/EmiCalculator";
import {
  floor1,
  furnish,
  balcony,
  carpet,
  bathroom,
  kitchen,
  bedroom,
  flat,
} from "../../Assets/images/icons";
import useGalleryImages from "../../customHook/useFetchImageApi";
import EnquiryForm from "../DashBoard/EnquiryDetails/EnquiryForm";
import Modal from "react-bootstrap/Modal";

const FlatDetails = ({ property }) => {
  const totalImage = useGalleryImages(property)
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);

  console.log(property.data.amenities)

  const handleImage = () => {
    //console.log(index);
    visibleImages();
  };

  const visibleImages = () => {
    setVisible(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow((prevState) => ({ ...prevState, show: true }));
  };
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
                    For {property.data.property_for}
                  </span>
                </div>
                <div className="flex-grow-1 me-3 order-sm-1">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="javascript:;"></a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:;">
                        {property.data.property_for.charAt(0).toUpperCase() +
                          property.data.property_for.slice(1)}
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="javascript:;">{property.data.property_type}</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {property.data.property_type_for}
                    </li>
                  </ol>
                  <h3>{`${property.data.bedroom} BHK ${property.data.property_type} ${property.data.property_type_for} for Sale in ${property.data.address}`}</h3>
                  <p className="mb-1">
                    <i className="icon-feather-map-pin text-site"></i>{" "}
                    {property.data.address}
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
                          src={property.url + totalImage[0].image}
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
                              style={{ cursor: "pointer" }}
                            >
                              <a className="gallery-item">
                                <img
                                  className="rounded w-100"
                                  src={property.url + image.image}
                                  alt={`Gallery Image ${index + 2}`}
                                />
                              </a>

                            </div>
                          ))
                        : totalImage.slice(1, 4).map((image, index) => (
                          <div
                            className="col-sm-3"
                            onClick={handleImage}
                            style={{ cursor: "pointer" }}
                          >
                            <a className="gallery-item">
                              <img
                                className="rounded w-100"
                                src={property.url + image.image}
                                alt={`Gallery Image ${index + 2}`}
                              />
                            </a>
                          </div>
                        ))}

                      {/* View More Link */}
                      {totalImage.length > 4 && (
                        <div
                          className="col-sm-3"
                          onClick={handleImage}
                          style={{ cursor: "pointer" }}
                        >
                          <a className="gallery-item">
                            <img
                              className="rounded w-100"
                              src={property.url + totalImage[4].image}
                              alt="Gallery Image 5"
                            />
                            <div className="view-more-image">
                              + {totalImage.length - 5}
                            </div>
                          </a>
                        </div>
                      )}
                    </div>
                    {visible === true ? (
                      <GalleryList
                        propertyData={property}
                        setVisible={setVisible}
                      />
                    ) : (
                      ""
                    )}
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
                            {property.data.property_for
                              .charAt(0)
                              .toUpperCase() +
                              property.data.property_for.slice(1)}
                          </div>
                        </li>

                        <li>
                          <div>
                            <img
                              src={bedroom}
                              alt="Icon"
                              height="32"
                              width="32"
                            />
                            <span>Bedrooms:{property.data.bedroom}</span>
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
                            <span>{property.data.carpet_area} sq ft</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={bathroom}
                              alt="Icon"
                              height="32"
                              width="32"
                            />{" "}
                            <span>Bathrooms:{property.data.bathroom}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={kitchen}
                              alt="Icon"
                              height="32"
                              width="32"
                            />{" "}
                            <span>Kitchen:{property.data.kitchen}</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img
                              src={furnish}
                              alt="Icon"
                              height="32"
                              width="32"
                            />{" "}
                            <span>{property.data.furnishing_status}</span>
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
                            <span>Floor no:{property.data.floor_no}</span>
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
                            <span>balcony:{property.data.balcony}</span>
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
                          href="javascript:void(0)"
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
                            rel="noopener"
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
                      <span>Property Available:</span>
                      <b>dcfryy</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/transaction.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Property Transaction:</span>
                      <b>trans1</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/home.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Property ID:</span>
                      <b>Property2</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/property-value.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Property Type:</span>
                      <b>type category 1</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/ratio.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Property Size:</span>
                      <b>1400 sq ft</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/carpet-area.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Carpet Area Size:</span>
                      <b>1600 sq ft</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Property Status:</span>
                      <b>Rent</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/furnish.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Furnishing:</span>
                      <b>furnish en1</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Listed By:</span>
                      <b>Tester Own</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/calendar.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Posted On:</span>
                      <b>Nov 23, 2022</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/floor-1.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Floor Number:</span>
                      <b>2</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/floor-2.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Total Floor:</span>
                      <b>6</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/sun.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Facing:</span>
                      <b>South</b>
                    </li>
                    <li>
                      <img
                        src="http://localhost/realestate-live/public/images/icons/parking.png"
                        alt="Icon"
                        height="32"
                        width="32"
                      />
                      <span>Parking</span>
                      <b>Available</b>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">AMENITIES</h4>
                </div>
                <div style={{ display: 'flex' }}>
                {property.data.amenities.map((amenity, index) => (
                  <div className="card-body" key={index}>
                    <ul className="list-property-details" >
                      <li>
                        <img
                          src="http://localhost/realestate-live/public/images/icons/home-2.png"
                          alt="Icon"
                          height="32"
                          width="32"
                        />
                        <b>{amenity.amenity_name}</b>
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
                  <h4 className="text-uppercase">FLOOR PLANS</h4>
                </div>
                <div className="card-body">
                  <div
                    className="accordion accordion-floor mb-4"
                    id="accordionExample"
                  ></div>
                </div>
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
                            href="http://localhost/realestate-live/agent-detail/IjEzIg=="
                            className="btn btn-outline-primary btn-sm mb-3"
                          >
                            View Profile{" "}
                          </a>
                          <a
                            href=""
                            className="btn btn-outline-primary btn-sm mb-3"
                          >
                            Contact Agent
                          </a>
                        </div>
                      </div>
                    </div>

                    <EnquiryForm />
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
                  >
                    Write a Review
                  </a>
                </div>

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
              <EnquiryForm />
            </Modal.Body>
          </Modal>
        </>
      </section>
    </div>
  );
};

export default FlatDetails;
