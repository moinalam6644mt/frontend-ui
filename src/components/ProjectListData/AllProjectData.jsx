import React, { useState, useEffect } from "react";
import ProjectFilterData from "./ProjectFilterData";
import AuthUser from "../Authentication/Validation/AuthUser";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { useLocation } from 'react-router-dom';
import ProjectEnquiry from "../DashBoard/EnquiryDetails/ProjectEnquiry";

const AllProjectData = () => {
  const { callApi ,projectImg} = AuthUser();
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [projectData, setProjectData] = useState([]);
  const searchParams = new URLSearchParams(location.search);
  const cityName=searchParams.get('city_name')
  const address=searchParams.get('address')
  const postedBy=searchParams.get('developer_name')
  const projectStatus=searchParams.get('possession_date')

  

  useEffect(() => {
    fetchAllProjectData();
  }, [cityName,address,postedBy,projectStatus]);

  const fetchAllProjectData = async () => {

    let apiUrl = "/get_all_project";
    let quereyParams = [];
    if (cityName) quereyParams.push(`city_name=${cityName}`)
    if(address)  quereyParams.push(`address=${address}`)
    if(postedBy) quereyParams.push(`developer_name=${postedBy}`)
    if(projectStatus) quereyParams.push(`possession_date=${projectStatus}`)

      if (quereyParams.length >= 0) {
        apiUrl += '?' + quereyParams.join('&')
        console.log(apiUrl)
        
      }

      let response = await callApi({
        api: apiUrl,
        method: 'GET'
  
      });
      if(response && response.status==='success'){
        setProjectData(response.data)
      }

      console.log(projectData)
      
  };

  

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <React.Fragment>
      <div className="short-banner">
        <div className="container">
          <h1>Project List</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <aside className="col-xl-3 col-lg-3 col-12">
              <ProjectFilterData  />
            </aside>

            <aside className="col-xl-9 col-lg-9 col-12">
              {projectData.length > 0 ? (
                projectData.map((project, index) => (
                  <div className="list-display project-list" key={index}>
                    <div className="card card-ads">
                      <div className="row g-0">
                        <div className="col-md-3 col-sm-4 col-12">
                          <div className="card-image">
                            <div
                              id={`carousellist${index}`}
                              className="carousel slide ads-carousel"
                              data-bs-ride="false"
                            >
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <p>{console.log(project.image)}</p>
                                  <img
                                    src={`${projectImg}${project.image}`}
                                    alt="property image"
                                    class="card-img-top"
                                  />
                                </div>
                              </div>
                            </div>

                            <span className="total-ad-pic">
                              <img
                                src="http://localhost/realestate-live/public/images/camera.svg"
                                alt="Camera Icon"
                              />
                              0
                            </span>
                            <span
                              className="ads-fav"
                              data-act="favourite3"
                              data-href={`http://localhost/realestate-live/project-detail/${project.id}`}
                            >
                              <i className="icon-line-awesome-heart-o"></i>
                            </span>
                            <h3 className="ads-price ">
                            {`INR ${project?.min_price} - ${project?.max_price}` || "Price Not Available"}
                            </h3>
                          </div>
                        </div>
                        <div className="col-md-9 col-sm-8 col-12 position-relative">
                          <div className="card-body">
                            <h4>
                              <Link
                               to={`/all-project/details/${project.project_id}`} 
                              >
                                {project?.city_name}
                              </Link>
                            </h4>
                            <p className="mb-1">
                              <i className="icon-feather-map-pin"></i>{" "}
                              {project?.address}
                            </p>

                            <ul className="list-info mb-2">
                              <li>
                                <i className="icon-img-ratio"></i>{" "}
                                <span>
                                  {project?.area || "Area Not Specified"}
                                </span>
                              </li>
                              <li>
                                <span className="badge bg-primary">
                                  {project?.project_type || "Type Not Specified"}
                                </span>{" "}
                              </li>
                            </ul>
                            <div className="d-flex justify-content-between">
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
                                    title="Share on Twitter"
                                    href="javascript:;"
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
                                    href="javascript:;"
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
                                    href="javascript:;"
                                    rel="noopener"
                                    target="_blank"
                                  >
                                    <i className="icon-brand-whatsapp"></i>
                                  </a>
                                </div>
                              </div>
                              <a className="btn btn-primary btn-sm"  onClick={handleShow}>
                                Contact Now
                              </a>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="user-details">
                              <div className="user-avatar">
                                <img
                                  src="http://localhost/realestate-live/public/upload/user/thumb/1694765301_30ae46861b0920ba16bb.jpg"
                                  alt="User Avatar"
                                  height="32"
                                  width="32"
                                  className="rounded-circle"
                                />
                              </div>
                              <div className="user-name">
                                <span>
                                  <a href="">Ps group</a>
                                </span>
                              </div>
                            </div>
                            <div>
                              <span className="ad-post-date ms-3">
                                <i className="icon-feather-calendar"></i>{" "}
                                25-Aug-2023
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No projects available.</p>
              )}
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a className="page-link">1</a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      aria-label="Next"
                      className="page-link"
                    >
                      <span aria-hidden="true">Next</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      aria-label="Last"
                      className="page-link"
                    >
                      <span aria-hidden="true">Last</span>
                    </a>
                  </li>
                </ul>
              </nav>
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
              <ProjectEnquiry />
            </Modal.Body>
          </Modal>
        </>
    </React.Fragment>
  );
};

export default AllProjectData;
