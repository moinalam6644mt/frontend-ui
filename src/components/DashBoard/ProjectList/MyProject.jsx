import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import ProjectAmenity from '../ProjectList/ProjectAmenities'
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Sidebar from '../../Sidebar/Sidebar'


const MyProject = () => {
  const { callApi ,projectImg} = AuthUser();
  const [projectData, setProjectData] = useState([]);
  const [checkedAmenities, setCheckedAmenities] = useState(null);
  const [projectId, setProjectId] = useState(null)
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      const response = await callApi({
        api: "/get_all_project",
        method: "GET",
      });
      if (response) {
        setProjectData(response.data);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  const handleDelete = async (project_id) => {
    try {
      const response = await callApi({
        api: `/delete_project/${project_id}`,
        method: "DELETE",
      });
      if (response && response.success === true) {
        toast.success("Data deleted successfully");
        setProjectData((prevData) =>
          prevData.filter((project) => project.project_id !== project_id)
        );
      } else {
        console.error(response.message);
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error occurred while deleting data");
    }
  };

  const confirmDelete = (project_id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this data?",
      buttons: [
        {
          label: "Delete",
          onClick: () => handleDelete(project_id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  const AddNewAmenities = async () => {
    try {
      const response = await callApi({
        api: "/add_project_amenity",
        method: "POST",
        data: {
          'project_id': projectId,
          'Checked_value': checkedAmenities,
        },
      }); console.log(response);
    } catch (error) {
      console.error("Error adding amenities data:", error);
    }
  }
  const newAmenitiesData = (project_id) => {
    setProjectId(project_id);
    setShow(true);
  };

  return (
    <div>
      <div class="short-banner">
        <div class="container">
          <h1>Project List</h1>
        </div>
      </div>

      <section class="section">
        <div class="container-fluid">
          <div class="row">
            <Sidebar />

            <aside className="col-xl-9 col-lg-9 col-12">
              <div className="list-display project-list">
                {projectData.map((project, index) => (
                  <div className="card card-ads" key={project?.property_id}>
                    <div className="row g-0">
                      <article className="col-md-3 col-sm-3">
                      <div className="card-image">
                            <div
                              id={`carousellist${index}`}
                              className="carousel slide ads-carousel"
                              data-bs-ride="false"
                            >
                              <div class="carousel-inner">
                                <div class="carousel-item active">
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
                            <h5 className="ads-price">
                              {`INR ${project.min_price} - ${project.max_price}` || "Price Not Available"}
                            </h5>
                          </div>
                      </article>
                      <article className="col-md col-sm-9 position-relative">
                        <div className="card-body">
                          <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                              <a href="#" style={{ color: "red" }}>
                                {project?.city_name}
                              </a>
                            </li>
                            <li className="breadcrumb-item">
                              <a href="#">{project?.locality}</a>
                            </li>
                          </ol>
                          <h4>
                            <Link
                              to={`/my-project/details/${project?.project_id}`}
                            >
                              {project?.city_name}
                            </Link>
                          </h4>
                          <p className="mb-1">
                            <i className="icon-feather-map-pin"></i>
                            {project?.address}
                          </p>
                          Status :{project?.project_status}
                          <div className="d-flex justify-content-between">
                            <div className="social-share-wrap">
                              <a
                                href="javascript:void(0)"
                                className="btn btn-sm btn-outline-site w-auto"
                              >
                                <i className="icon-feather-share-2"></i>Share
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
                                  href=""
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
                                  href=""
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
                                  href=""
                                  rel="noopener"
                                  target="_blank"
                                >
                                  <i className="icon-brand-whatsapp"></i>
                                </a>
                              </div>
                            </div>
                            <a href="" className="btn btn-primary btn-sm">
                              Contact Now
                            </a>
                          </div>
                        </div>
                      </article>

                      <article className="col-md-auto col-sm-12">
                        <div className="contact-box">
                          <div className="d-grid">
                            <button className="btn btn-warning btn-sm mb-2"
                              onClick={() => newAmenitiesData(project?.project_id)}>
                              <i className="icon-feather-amenities"></i> Add
                              Amenity
                            </button>
                            <Link
                              to={`/my-project/edit/${project?.project_id}`}
                              className="btn btn-primary btn-sm mb-2"
                            >
                              <i className="icon-feather-edit"></i> Edit
                            </Link>

                            <button
                              className="btn btn-danger btn-sm mb-2"
                              onClick={() => confirmDelete(project?.project_id)}
                            >
                              <i className="icon-feather-trash"></i> Delete
                            </button>
                            <Link
                              to={`/user-enquiry`}
                              className="btn btn-success btn-sm"
                            >
                              <i className="icon-feather-eye"></i> View Enquiry
                            </Link>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                ))}
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link">1</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link">2</a>
                    </li>
                    <li className="page-item">
                      <a aria-label="Next" className="page-link">
                        <span aria-hidden="true">Next</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a aria-label="Last" className="page-link">
                        <span aria-hidden="true">Last</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
        {projectId && (
          <ProjectAmenity
            setCheckedAmenities={setCheckedAmenities}
            handleShow={show}
            setProjectId={setProjectId}
            AddNewAmenities={AddNewAmenities}
          />
        )}
      </section>
    </div>
  );
};

export default MyProject;
