import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import AuthContext from "../../Context/AuthContext";

const AgentData = () => {
  const { use_id } = useParams();
  const { setAgent } = useContext(AuthContext);
  const { callApi } = AuthUser();
  const [agentData, setAgentData] = useState([]);
  const [imagePath, setImagePath] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    fetchAgentData();
  }, [page]);

  console.log(use_id);

  const fetchAgentData = async () => {
    try {
      const response = await callApi({   
        api: `/get_all_agent/?page=${page}`,
        method: "GET",
      });

      if (response && response.success === "true") {
        setAgent(response.data);
        setAgentData(response.data);
        setImagePath(response.path);
        setPage(response.page);
        setTotalPages(response.totalPage);
      }
    } catch (error) {
      console.error("Error fetching agent data:", error);
    }
  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <React.Fragment>
      <div className="clearfix"></div>
      <div className="short-banner">
        <div className="container">
          <div className="filterHeader d-lg-none">
            <h4>Filters</h4>
            <a className="float-end" title="Filter">
              <i className="icon-feather-filter f20"></i>
            </a>
          </div>
          <div className="filter">
            <div className="card-header filterHeader d-lg-none mb-4">
              <div className="row d-flex">
                <div className="col text-left">
                  <h4>Filters</h4>
                </div>
                <div className="col">
                  <a className="close_filter" title="Filter">
                    <i className="icon-feather-x f20"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="card-header filterHeader mb-4 filter-clear-area-wrap"
              hidden=""
              style={{ display: "none" }}
            >
              <div className="row d-flex mt-2 filter-clear-area"></div>
            </div>
            <div className="acc-panel">
              <form data-filter="n">
                <div className="row -mb-3">
                  <div className="col-lg-3 col-sm-6 col-12">
                    <div className="form-field">
                      <div className="btn-group bootstrap-select hide-tick1 fit-width">
                        <button
                          type="button"
                          className="btn dropdown-toggle bs-placeholder btn-default"
                          data-toggle="dropdown"
                          role="button"
                          data-id="city"
                          title="Select City"
                        >
                          <span className="filter-option pull-left">
                            Select City
                          </span>
                          &nbsp;
                          <span className="bs-caret">
                            <span className="caret"></span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9 col-sm-6 col-12">
                    <div className="form-field with-icon-start">
                      <i className="icon-feather-map-pin"></i>
                      <input
                        type="text"
                        name="address"
                        id="address"
                        className="form-control address-box"
                        placeholder="Address"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <aside className="col-xl-9 col-lg-9 col-12">
              <div className="d-sm-flex justify-content-between align-items-center mb-2">
                <h4 className="mb-3 mb-sm-0">
                  <span
                    className="text-primary-filter"
                    style={{ display: "none" }}
                  ></span>
                  Agent List ({agentData.length})
                </h4>
                <div className="sort-by">
                  <a className="btn btn-list me-2 active">
                    <i className="icon-feather-list"></i>
                  </a>
                  <a className="btn btn-grid">
                    <i className="icon-feather-grid"></i>
                  </a>
                </div>
              </div>
              <div className="list-display">
                {agentData.map((agent, index) => (
                  <div className="card card-agent" key={index}>
                    <div className="row g-0">
                      <div className="col-sm-auto col-4">
                        <div className="card-image">
                          <a>
                            <img
                              src={`${imagePath}/${agent.logo}`}
                              alt=""
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="col-sm col-8">
                        <div className="card-body">
                          <div className="card-title">
                            <h4>
                              <a>{agent.member_name}</a>
                              <i className="icon-img-check ms-1"></i>
                            </h4>
                            <span className="badge badge-outline-secondary">
                              Properties
                            </span>
                          </div>
                          <p className="mb-2">
                            <i className="icon-feather-phone"></i> {agent.phone_number} &nbsp;
                          </p>
                          <p className="mb-2">
                            <i className="icon-feather-mail"></i> {agent.member_email}
                          </p>
                          <div className="d-flex card-group-btn">
                            <a
                              href={`tel:${agent.phone}`}
                              className="btn btn-sm btn-outline-site me-2"
                            >
                              <i className="icon-feather-phone"></i> Call
                            </a>
                            <a className="btn btn-sm btn-outline-site me-2">
                              <i className="icon-feather-mail"></i> Message
                            </a>
                            <a className="btn btn-sm btn-outline-site me-2">
                              <i className="icon-brand-whatsapp"></i> WhatsApp
                            </a>
                            <div className="social-share-wrap">
                              <a className="btn btn-sm btn-outline-site me-2">
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
                                  title="Share on Linkedin"
                                >
                                  <i className="icon-brand-linkedin-in"></i>
                                </a>
                                <a
                                  className="btn-floating btn btn-tw"
                                  type="button"
                                  role="button"
                                  title="Share on Whatsapp"
                                >
                                  <i className="icon-brand-whatsapp"></i>
                                </a>
                              </div>
                            </div>
                            <Link
                              to={`/agent-details/${agent.member_id}`}
                              className="btn btn-primary ms-auto"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                    <a
                      className="page-link"
                      onClick={previousPage}
                      disabled={page === 1}
                    >
                      Prev
                    </a>
                  </li>
                  {[...Array(totalPages)].map((_, index) => (
                    <li className={`page-item ${page === index + 1 ? 'active' : ''}`} key={index}>
                      <a
                        className="page-link"
                        onClick={() => setPage(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className={`page-item ${page === totalPages ? 'disabled' : ''}`}>
                    <a className="page-link" onClick={nextPage}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <aside className="col-xl-3 col-lg-3 col-12">
              <div className="text-center mb-4">
                <img
                  src="http://localhost/realestate-live/public/images/ads/real-estate-poster.jpg"
                  alt="ads"
                  className="img-fluid"
                />
              </div>
              <div className="text-center mb-4">
                <img
                  src="http://localhost/realestate-live/public/images/ads/houseSaleFlyerGREEN.jpg"
                  alt="ads"
                  className="img-fluid"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AgentData;
