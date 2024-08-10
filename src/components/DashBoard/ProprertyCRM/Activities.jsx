import React, { useState, useEffect ,useContext} from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Modal from "react-bootstrap/Modal";
import CRMEnquiry from "../EnquiryDetails/CRMEnquiry";
//import AuthContext from "../../Context/AuthContext";

const crmEnquiryData = [
  {
    id: "1",
    selected: "Reject",
    date: "2024-07-10T12:40",
    remarks: "hello dear",
  },
  { id: "2", selected: "Pending", date: "2025-07-10T12:40", remarks: "No data" },
  {
    id: "3",
    selected: "No Answer",
    date: "2026-07-10T12:40",
    remarks: "keep that patience",
  },
  { id: "4", selected: "Lead", date: "2027-07-10T12:40", remarks: "overcome" },
];

const Activities = () => {

//  const {userEnquiryData} =useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("Sort By");
  const [showModal, setShowModal] = useState(false);
  const [crmData, setCRMData] = useState([]);


  //console.log(userEnquiryData)
  useEffect(() => {
    fetchCRMData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  const fetchCRMData = () => {
    setCRMData(crmEnquiryData);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const getBadgeClass = (selected) => {
    switch (selected) {
      case 'Reject':
        return 'badge bg-danger';
      case 'Pending':
        return 'badge bg-warning';
      case 'No Answer':
        return 'badge bg-secondary';
      case 'Lead':
        return 'badge bg-success';
      default:
        return 'badge bg-secordary';
    }
  };

  return (
    <React.Fragment>
      <div className="short-banner">
        <div className="container">
          <h1>Activities</h1>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <aside className="col-xl col-lg col-12">
              <div className="row gx-3 align-items-center mb-3">
                <div className="col-lg">
                  <div className="form-field with-icon-start mb-lg-0">
                    <i className="icon-feather-search"></i>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
                <div className="col-lg-auto">
                  <div
                    className="btn-group bootstrap-select select-sm"
                    style={{ width: "110px" }}
                  >
                    <button
                      type="button"
                      className="btn dropdown-toggle bs-placeholder btn-default"
                      data-toggle="dropdown"
                      role="button"
                      title={sortOption}
                      aria-expanded="false"
                    >
                      <span className="filter-option pull-left">
                        {sortOption}
                      </span>
                      &nbsp;
                      <span className="bs-caret">
                        <span className="caret"></span>
                      </span>
                    </button>
                    <div
                      className="dropdown-menu open"
                      role="combobox"
                      style={{
                        maxHeight: "704px",
                        overflow: "hidden",
                        minHeight: "104px",
                      }}
                    >
                      <ul
                        className="dropdown-menu inner"
                        role="listbox"
                        aria-expanded="false"
                        style={{
                          maxHeight: "692px",
                          overflowY: "auto",
                          minHeight: "92px",
                        }}
                      >
                        {["Sort By", "Weekly", "Monthly", "Yearly"].map(
                          (option) => (
                            <li key={option}>
                              <a
                                tabIndex="0"
                                className=""
                                data-tokens="null"
                                role="option"
                                aria-disabled={false}
                                aria-selected={sortOption === option}
                                onClick={() => handleSortChange(option)}
                              >
                                <span className="text">{option}</span>
                                {sortOption === option && (
                                  <span className="glyphicon glyphicon-ok check-mark"></span>
                                )}
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <select
                      className="selectpicker select-sm"
                      data-width="110"
                      tabIndex="-98"
                    >
                      <option disabled selected>
                        Sort By
                      </option>
                      <option>Weekly</option>
                      <option>Monthly</option>
                      <option>Yearly</option>
                    </select>
                  </div>
                </div>
              </div>
              {crmData.map((data) => (
                <div className="dashboard-listing mb-4" key={data.id}>
                  <div className="d-flex align-items-center">
                    <div className="photox">
                      <img
                        src="http://localhost/realestate-live/public/images/uploads/property-1.jpg"
                        alt=""
                        height="96"
                        width="128"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h4 className="mb-1">Andrew Wills</h4>
                      <h5 className="mb-0">
                        Urban Living at its best in Dubai Marina
                      </h5>
                      <p className="mb-0">
                        <span className="me-3">
                          <i className="icon-feather-hash text-site"></i>{" "}
                          RE67934150
                        </span>
                        <span className="me-3">
                          <i className="icon-feather-phone text-site"></i>{" "}
                          0987654321
                        </span>
                        <span className="me-3">
                          <i className="icon-feather-mail text-site"></i>{" "}
                          andrew.wills@hotmail.com
                        </span>
                      </p>
                      <p className="mb-0">
                        <span className="me-3">
                          <i className="icon-feather-map-pin text-site"></i>{" "}
                          Dubai Marina, Dubai, UAE
                        </span>
                        <span>
                          <i className="icon-feather-calendar text-site"></i> 24
                          April, 2023
                        </span>
                      </p>
                    </div>
                    <div className="text-end">

                    <span className={`${getBadgeClass(data.selected)} mb-2 text-uppercase`}>
                        {data.selected}
                      </span>
                      <br />
                      <a
                        
                        className="btn btn-outline-primary btn-sm mb-2"
                        onClick={handleShowModal}
                      >
                        Communication
                      </a>
                      <br />
                      <a
                        
                        className="btn btn-primary btn-sm"
                        onClick={handleShowModal}
                        style={{ minWidth: "130px" }}
                      >
                        Remarks
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <a className="page-link"  aria-label="Previous">
                      <i className="icon-line-awesome-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link"  aria-label="Next">
                      <i className="icon-line-awesome-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Remarks</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CRMEnquiry />
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Activities;
