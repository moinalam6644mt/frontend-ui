import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Link } from "react-router-dom";
import useFormateDate from "../../customHook/useFormateDate";
import Modal from "react-bootstrap/Modal";
import EnquiryForm from "../DashBoard/EnquiryDetails/EnquiryForm"

const Commercial = ({ property }) => {
  const { PropertyDetails } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      <div className="list-display">
        <div className="card card-ads">
          <div className="row g-0">
            <div className="col-lg-3 col-sm-3">
              <div className="card-image">
                <div
                  id={`carousel${property.property_id}`}
                  className="carousel slide ads-carousel"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    {property?.gallery?.map((gallery, index) =>
                      gallery?.images?.map((image, imgIndex) => (
                        <div
                          key={index}
                          className={`carousel-item ${imgIndex === 0 ? "active" : ""
                            }`}
                        >
                          <img
                            src={PropertyDetails.path + image.image}
                            alt={`property image ${imgIndex}`}
                            className="card-img-top"
                          />
                        </div>
                      ))
                    )}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carousel${property.property_id}`}
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target={`#carousel${property.property_id}`}
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
                <span className="total-ad-pic">
                  <img
                    src="http://localhost/realestate-live/public/images/camera.svg"
                    alt="Camera Icon"
                  />
                  {property?.gallery?.reduce(
                    (acc, gallery) => acc + gallery.images.length,
                    0
                  )}
                </span>
                <span
                  className="ads-type"
                  style={{
                    backgroundColor:
                      property.property_for === "rent" ? "green" : "orange",
                  }}
                >
                  For {property.property_for}
                </span>
                <div className="ads-price">
                  <h4>{property.carpet_area}/ sq ft</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-sm-7 position-relative">
              <div className="card-body">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="javascript:;"></a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:;">
                      {property.property_for.charAt(0).toUpperCase() +
                        property.property_for.slice(1)}
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:;"></a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {property.property_type}
                  </li>
                </ol>
                <h4>
                  <Link to={`/property-details/${property.property_id}`}>
                    {`${property.property_type} ${property.property_type_for} for ${property.property_for} in ${property.city_name}`}
                  </Link>
                </h4>
                <p className="mb-1">
                  <i className="icon-feather-map-pin"></i>
                  {property.city_name}
                </p>
                <ul className="list-info mb-2">
                  <li>
                    <i className="icon-img-flat"></i>
                    {property.property_type_for}
                  </li>

                  <li>
                    <i className="icon-img-ratio"></i>
                    <span>{property.carpet_area}</span> sq ft
                  </li>
                  <li>
                    <i className="icon-img-tub" title="Bathrooms:"></i>
                    <span>{property.washroom_no}</span>
                  </li>
                </ul>
              </div>
              <div className="card-footer">
                <div className="user-details">
                  <div className="user-avatar">
                    <img
                      src={
                        property.logo
                          ? PropertyDetails.path + property.logo
                          : "http://localhost/realestate-live/public/images/user.jpg"
                      }
                      alt=""
                      height="32"
                      width="32"
                      className="rounded-circle"
                    />
                  </div>
                  <div className="user-name">
                    <span>
                      <a href={property.agentDetailUrl}>
                        {property.member_name}
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <span className="ad-post-date ms-3">
                    <i className="icon-feather-calendar"></i>
                    {useFormateDate(property.created_at)}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-2">
              <div className="contact-box">
                <div className="mb-2">
                  <h4 className="mb-0">AED{property.expected_amt}</h4>
                </div>
                <div className="d-grid">
                  <a
                    className="btn btn-primary btn-sm msg-send mb-2"
                    onClick={handleShow}
                  >
                    Contact Now
                  </a>
                  <div className="d-grid">
                    <a
                      className="btn btn-primary btn-sm msg-send mb-2"
                    >
                      Favourite
                    </a>
                    <div className="share-items"></div>
                  </div>
                </div>
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
            <EnquiryForm />
          </Modal.Body>
        </Modal>
      </>
    </React.Fragment>
  );
};

export default Commercial;
