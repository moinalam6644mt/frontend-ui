import React, { useEffect, useState, useContext } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import Sidebar from "../../Sidebar/Sidebar";
import AuthContext from "../../Context/AuthContext";

const UserEnquiryDetails = () => {
  const { callApi } = AuthUser();
  const [enquiryData, setEnquiryData] = useState([]);
  const { setUserEnquiryData } = useContext(AuthContext);

  useEffect(() => {
    fetchEnquiryDetails();
  }, []);

  const fetchEnquiryDetails = async () => {
    try {
      const response = await callApi({
        api: "/get_all_enquiry",
        method: "GET",
      });
      if (response.status === "success") {
        setEnquiryData(response.message);
        setUserEnquiryData(response.message);
      } else {
        console.error("Failed to fetch enquiry details");
      }
    } catch (error) {
      console.error("Error fetching enquiry details:", error);
    }
  };

  return (
    <React.Fragment>
      <div class="short-banner">
        <div class="container">
          <h1>My Enquiry</h1>
        </div>
      </div>

      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <aside className="col-xl col-lg col-12">
              <div className="d-flex justify-content-between mb-3">
                <h4>Enquiry Listing</h4>
                <select className="selectpicker select-sm" data-width="110">
                  <option selected disabled>
                    Sort By
                  </option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
              <div className="dashboard-listing mb-4">
                {enquiryData.length === 0 ? (
                  <div className="d-flex align-items-center">
                    <h3>No Enquiry Found!</h3>
                  </div>
                ) : (
                  <ul className="list-unstyled">
                    {enquiryData.map((enquiry, index) => (
                      <React.Fragment>
                        <li key={index} className="mb-3 m">
                          <strong>Name:</strong> {enquiry.name}
                          <br />
                          <strong>Email:</strong> {enquiry.email}
                          <br />
                          <strong>Phone:</strong> {enquiry.phone}
                          <br />
                          <strong>Message:</strong> {enquiry.mesage}
                        </li>
                        <button
                          className="btn bg-primary"
                          style={{ marginLeft: "850px", marginTop: "-200px" ,color:'white'}}
                        >
                          Action
                        </button>
                      </React.Fragment>
                    ))}
                  </ul>
                )}
              </div>

              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <i className="icon-line-awesome-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <i className="icon-line-awesome-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserEnquiryDetails;
