import React from 'react'

const PropertyFrontdetails = ({property,handleAdd}) => {
  return (
    <React.Fragment>
      <aside className="col-xl-5 col-lg-5 col-12">
                      <div>
                        <div className="mb-4" style={{ marginTop: "-0.5rem" }}>
                          <ul className="list-info list-col-lg-4 list-property-feature">
                            {property.property_for === "rent" ? (
                              <React.Fragment>
                                <li>
                                  <div>
                                    <i className="icon-img-flat"></i>
                                    Property For
                                    <b> {property?.property_for}</b>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-bed"></i>
                                    <span>
                                      Bedroom <b> {property?.bedroom} </b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-ratio"></i>
                                    Balcony :
                                    <span>
                                      <b>{property.balcony}</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-ratio"></i>
                                    Carpet Area
                                    <span>
                                      <b>{property.carpet_area}/sqft</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-tub"></i>
                                    <span>
                                      <span>
                                        Bathroom <b>{property?.bathroom}</b>
                                      </span>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-kitchen"></i>
                                    Status:
                                    <span>
                                      <b>{property?.furnishing_status}</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-kitchen"></i>
                                    <span>
                                      Kitchen: <b>{property?.kitchen}</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-garage"></i>
                                    <span>
                                      Floor No: <b>{property?.floor_no}</b> (
                                      Out of <b>{property.total_floor_no}</b>)
                                    </span>
                                  </div>
                                </li>
                              </React.Fragment>
                            ) : (
                              <React.Fragment>
                                <li>
                                  <div>
                                    <i className="icon-img-flat"></i>
                                    Property For
                                    <b> {property?.property_for}</b>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-flat"></i>
                                    Floor No
                                    <b> {property?.floor_no}</b>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-bed"></i>
                                    <span>
                                      Washroom <b> {property?.washroom_no} </b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-room"></i>
                                    <span>
                                      Cabin room <b> {property?.cabin_room} </b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-room"></i>
                                    <span>
                                      Cafeteria <b> {property?.cafeteria} </b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-ratio"></i>
                                    Carpet Area
                                    <span>
                                      <b>{property.carpet_area}/sqft</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-ratio"></i>
                                    Super Area
                                    <span>
                                      <b>{property.super_area}/sqft</b>
                                    </span>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <i className="icon-img-kitchen"></i>
                                    Status:
                                    <span>
                                      <b>
                                        {property?.furnishing_status ||
                                          "not available"}
                                      </b>
                                    </span>
                                  </div>
                                </li>
                              </React.Fragment>
                            )}
                          </ul>
                        </div>
                        <div className="mb-4">
                          <p>ssss3</p>
                        </div>
                        <div
                          className="d-grid gap-3 mb-3"
                          style={{ gridTemplateColumns: "1fr 1fr" }}
                        >
                          <a
                            className="btn btn-primary btn-lg msg-send mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#messageModal"
                            onClick={handleAdd}
                          >
                            <i className="icon-feather-user"></i>Contact Owner
                          </a>
                          <a
                            className="btn btn-outline-primary btn-lg msg-send mb-2"
                            data-bs-toggle="modal"
                            data-bs-target="#messageModal"
                            onClick={handleAdd}
                          >
                            <i className="icon-feather-phone"></i>Phone Number
                          </a>
                        </div>
                        <div className="sort-by">
                          <div className="social-share-wrap me-2">
                            <a className="btn btn-sm btn-outline-site">
                              <i className="icon-feather-share-2"></i>
                            </a>
                            <div className="share-items">
                              <a className="btn-floating btn btn-tw"></a>
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
                          <a className="btn me-2" title="Add to Compare">
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
                            onClick={() => window.print()}
                            title="Print"
                          >
                            <i className="icon-feather-printer"></i>
                          </a>
                        </div>
                      </div>
                    </aside>
    </React.Fragment>
  )
}

export default PropertyFrontdetails
