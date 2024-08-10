import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import EnquiryForm from "../EnquiryDetails/EnquiryForm";
import Modal from "react-bootstrap/Modal";

const AgentDetails = () => {
  const { user_id } = useParams();
  const { callApi } = AuthUser();
  const [agentData, setAgentData] = useState();
  const [AgentPostData, setAgentPostData] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    fetchAgentData(user_id);
    fetchAgentDetails();
  }, [user_id]);

  useEffect(() => {
    try {
    } catch (error) {}
  });

  const fetchAgentData = async () => {
    let response;
    try {
      response = await callApi({
        api: `/get_all_agent/${user_id}`,
        method: "GET",
      });

      setImagePath(response.path);
      setAgentData(response.result);
    } catch (error) {}
  };
  const fetchAgentDetails = async () => {
    try {
      const response = await callApi({
        api: `/agent_property_details/${user_id}`,
        method: "GET",
      });

      setAgentPostData(response?.data || []);
    } catch (error) {
      console.error("Error fetching agent details:", error);
    }
  };
  const printPage = () => {
    window.print();
  };

  return (
    <React.Fragment>
      <div className="short-banner">
        <div className="container">
          <h1>AGENT DETAILS</h1>
        </div>
      </div>
      <section className="section profile">
        <div className="container-fluid">
          <div className="row main-row">
            <aside className="col-xl-8 col-lg-8 col-12 ">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">My Profile</a>
                </li>
              </ol>
              <div className="message-box"></div>
              <div className="card card-agent-page mb-4">
                <div className="row g-0">
                  <div className="col-sm-auto col-4">
                    <div className="card-image">
                      <img
                        src={`${imagePath}/${agentData?.logo}`}
                        alt="Agent Logo"
                      />
                    </div>
                  </div>
                  <div className="col-sm col-8">
                    <div className="card-body">
                      <div className="card-title">
                        <h4 className="mb-1">
                          {agentData?.member_name || "moin"}
                          <i className="icon-img-check ms-1"></i>
                        </h4>
                      </div>
                      <p className="mb-2"></p>
                      <p className="mb-1">
                        <i className="icon-feather-map-pins text-primary"></i>
                        Email: {agentData?.member_email || "UAE"}
                      </p>
                      <p className="mb-2">
                        <span>
                          <i
                            className="icon-feather-user text-primary"
                            title="real_estate_agent"
                          ></i>{" "}
                          Contact : {agentData?.phone_number}
                        </span>
                      </p>
                      <div className="d-sm-flex">
                        <a
                          className="btn btn-primary btn-sm me-2 msg-send mb-2"
                          onClick={handleShow}
                        >
                          <i className="icon-feather-user"></i>Contact Owner
                        </a>
                        <a
                          className="btn btn-outline-primary btn-sm me-2 msg-send mb-2"
                          onClick={handleShow}
                        >
                          <i className="icon-feather-phone"></i>Phone Number
                        </a>
                        <div className="social-share-wrap">
                          <a className="btn btn-sm btn-outline-site w-auto">
                            <i className="icon-feather-share-2"></i> Share
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
                              title="Share on twitter"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-header">
                  <h4 className="text-uppercase">ABOUT AGENT</h4>
                </div>
                <div className="card-body">
                  <p>
                    {AgentPostData?.agent?.about || "No information available."}
                  </p>
                </div>
              </div>
              <React.Fragment>
              <h4 className="text-uppercase">PROPERTY ON RENT</h4>
              <div className="owl-carousel owl-theme property-carousel owl-loaded owl-drag">
                {AgentPostData.map(
                  (val, index) =>
                    val.property_type === "Residential" && (
                      <div
                        key={index}
                        className="owl-stage-outer"
                        style={{ display: "flex" }}
                      >
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "819px",
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "389.328px", marginRight: "20px" }}
                          >
                            <article className="item">
                              <div className="card card-ads">
                                <div className="card-image">
                                  <div
                                    id={`carousellist${index}`}
                                    className="carousel slide ads-carousel"
                                    data-bs-ride="false"
                                  >
                                    <div className="carousel-indicators">
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                      ></button>
                                    </div>
                                    <div className="carousel-inner">
                                      <div className="carousel-item active">
                                        <img
                                          src="http://localhost/realestate-live/public/upload/properties/thumb420/1669810966_50c99ead1d21e02aff1c.jpg"
                                          alt="property image"
                                          className="card-img-top"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <span className="ads-type rent">
                                    {val?.property_type_for}
                                  </span>
                                  <span
                                    className="ads-fav"
                                    data-act="favourite2"
                                    data-href=""
                                  >
                                    <i className="icon-line-awesome-heart-o"></i>
                                  </span>
                                  <span className="total-ad-pic">
                                    <img
                                      src="http://localhost/realestate-live/public/images/camera.svg"
                                      alt="Camera Icon"
                                    />{" "}
                                    5
                                  </span>
                                  <div className="ads-price">
                                    <h4>{val?.expected_amt} INR</h4>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h4>
                                    <Link
                                      to={`/property-details/${val?.property_id}`}
                                    >
                                      {val?.property_type_for}
                                    </Link>
                                  </h4>
                                  <p className="mb-1">
                                    <i className="icon-feather-map-pin"></i>{" "}
                                    {val?.address}
                                  </p>
                                  <ul className="list-info">
                                    <li>
                                      <i className="icon-img-flat"></i>
                                      <span>{val?.property_type_for}</span>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-room"
                                        title="Rooms:"
                                      ></i>{" "}
                                      <span>{val?.bedroom}</span>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-shower"
                                        title="Bathroom:"
                                      ></i>{" "}
                                      <span>{val?.bathroom}</span>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-bed"
                                        title="Bed:"
                                      ></i>{" "}
                                      <span>{val.bedroom}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              </React.Fragment>

              <React.Fragment>
              <h4 className="text-uppercase">PROPERTY ON SELL</h4>
              <div className="owl-carousel owl-theme property-carousel owl-loaded owl-drag">
                {AgentPostData.map(
                  (val, index) =>
                    val.property_type === "Commercial" && (
                      <div key={index} className="owl-stage-outer">
                        <div
                          className="owl-stage"
                          style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: "819px",
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "389.328px", marginRight: "20px" }}
                          >
                            <article className="item">
                              <div className="card card-ads">
                                <div className="card-image">
                                  <div
                                    id={`carousellist${index}`}
                                    className="carousel slide ads-carousel"
                                    data-bs-ride="false"
                                  >
                                    <div className="carousel-indicators">
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="0"
                                        className="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target={`#carousellist${index}`}
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                      ></button>
                                    </div>
                                    <div className="carousel-inner">
                                      <div className="carousel-item active">
                                        <img
                                          src="http://localhost/realestate-live/public/upload/properties/thumb420/1669810966_50c99ead1d21e02aff1c.jpg"
                                          alt="property image"
                                          className="card-img-top"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <span className="ads-type sell bg-warning">
                                    {val.property_for}
                                  </span>
                                  <span
                                    className="ads-fav"
                                    data-act="favourite2"
                                    data-href="http://localhost/realestate-live/property-detail/dhiyaar-living-luxury-hostel-pg-office-3405-marina-plaza-al-marsa-street-umm-al-quwain-uae--rspid-48"
                                  >
                                    <i className="icon-line-awesome-heart-o"></i>
                                  </span>
                                  <span className="total-ad-pic">
                                    <img
                                      src="http://localhost/realestate-live/public/images/camera.svg"
                                      alt="Camera Icon"
                                    />{" "}
                                    5
                                  </span>
                                  <div className="ads-price">
                                    <h4>{val.assured_return}</h4>
                                  </div>
                                </div>
                                <div className="card-body">
                                  <h4>
                                    <Link
                                      to={`/property-details/${val.property_id}`}
                                    >
                                      {val.property_for}
                                    </Link>
                                  </h4>
                                  <p className="mb-1">
                                    <i className="icon-feather-map-pin"></i>{" "}
                                    {val.city_name}, {val.locality} in{" "}
                                    {val.property_type_for}
                                  </p>
                                  <ul className="list-info">
                                    <li>
                                      <i className="icon-img-flat"></i>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-room"
                                        title="Rooms:"
                                      ></i>{" "}
                                      <span>{val.cabin_room}</span>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-shower"
                                        title="Bathroom:"
                                      ></i>{" "}
                                      <span>{val.washroom_no}</span>
                                    </li>
                                    <li>
                                      <i
                                        className="icon-img-bed"
                                        title="Bed:"
                                      ></i>{" "}
                                      <span>{val.floor_no}</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </div>
              </React.Fragment>
             
            </aside>

            {/* Aside section */}
            <aside className="col-xl-4 col-lg-4 col-12">
              <div className="sticky-top">
                <div className="sort-by mb-2">
                  <a
                    className="btn me-2 ads-fav"
                    data-act="favourite1"
                    title="Save for Later"
                  >
                    <i className="icon-line-awesome-heart-o"></i>
                  </a>
                  <a
                    className="btn me-2"
                    title="Report this Ad"
                    data-bs-toggle="modal"
                    data-bs-target="#reportModal"
                  >
                    <i className="icon-feather-flag"></i>
                  </a>
                  <a className="btn me-2" title="Print" onClick={printPage}>
                    <i className="icon-feather-printer"></i>
                  </a>
                </div>
                <div className="dashboard-listing mb-4 border">
                  <div className="d-flex align-items-center">
                    <div className="photox">
                      <img
                        src="http://localhost/realestate-live/public/images/icons/sale-2.png"
                        alt=""
                        height="48"
                        width="48"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3 prop-size">
                      <h5>Properties for Sale</h5>
                      <h3 className="mb-0">1+</h3>
                      <p>
                        <span className="text-site">1</span> <small></small>
                      </p>
                    </div>
                    <a className="btn btn-sm btn-outline-site">VIEW</a>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="photox">
                      <img
                        src="http://localhost/realestate-live/public/images/icons/rent-3.png"
                        alt=""
                        height="48"
                        width="48"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3 prop-size">
                      <h5>Properties for Rent</h5>
                      <h3 className="mb-0">2</h3>
                      <p>
                        <span className="text-site">2</span> <small></small>
                      </p>
                    </div>
                    <a className="btn btn-sm btn-outline-site">VIEW</a>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-header text-uppercase">
                    <h4>Contact Agent</h4>
                  </div>
                  <div className="card-body">
                    <EnquiryForm />
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h4>Office Address</h4>
                    <address>
                      <i className="icon-feather-map-pin text-site"></i> UA, UAE
                    </address>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99512.80400724961!2d54.49250820162658!3d24.340538033250233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e476b238494e5%3A0xfd3db0486d6d68d6!2sMohamed%20Bin%20Zayed%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1650384953003!5m2!1sen!2sin"
                      width="600"
                      height="315"
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
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

export default AgentDetails;
