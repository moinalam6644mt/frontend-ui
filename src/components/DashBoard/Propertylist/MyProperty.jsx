import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import AuthUser from "../../Authentication/Validation/AuthUser";
import toast from "react-hot-toast";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import AuthContext from "../../Context/AuthContext";
import FlatListing from "../ListingPage/FlatListing";
import CommericalListing from "../ListingPage/CommericalListing";
import AmenitiesComponent from "../ListingPage/Amenities";

const MyProperty = () => {
  const { callApi } = AuthUser();
  const [properties, setProperties] = useState([]);
  const { setTotalImage } = useContext(AuthContext);
  const [imagepath, setImagepath] = useState("");
  const [activeTab, setActiveTab] = useState("published");
  const [page, setPage] = useState(1);
  const [totalRecord, setTotalRecord] = useState();
  const [checkedAmenities, setCheckedAmenities] = useState(null);
  const [propertyId, setpropertyId] = useState();
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchProperties(page);
  }, [page, activeTab]);

  useEffect(() => {
    if (properties.length > 0) {
      getAllImage();
    }
  }, [properties]);

  const fetchProperties = async () => {
    try {
      const response = await callApi({
        api: `/property_list_user?page=` + page,
        method: "POST",
      });
      if (response) {
        setProperties(response.data);
        setImagepath(response.url);
        setTotalRecord(response.totalRecords);
      } else {
        console.log("Unable to get response");
      }
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const Next = () => {
    setPage(page + 1);
  };

  const Previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleDelete = async (property_id) => {
    try {
      const response = await callApi({
        api: `/delete_chat_history`,
        method: "DELETE",
      });
      if (response && response.success === true) {
        toast.success("Data deleted successfully");
        fetchProperties();
        setProperties(
          properties.filter((property) => property.property_id !== property_id)
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

  const confirmDelete = (property_id) => {
    confirmAlert({
      title: "Confirm Deletion",
      message: "Are you sure you want to delete this data?",
      buttons: [
        {
          label: "Delete",
          onClick: () => handleDelete(property_id),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };

  const getAllImage = () => {
    let arr = [];
    properties.forEach((property) => {
      const propertyImages = property.gallery.flatMap((gallery) =>
        gallery.images.map((image) => ({
          ...image,
          property_id: property.property_id,
        }))
      );
      arr.push(...propertyImages);
    });
    setTotalImage(arr);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const AddAmenitiesData = async () => {
    alert('hello')
    try {
      const response = await callApi({
        api: "/add_amenities",
        method: "POST",
        data: {
          'property_id': propertyId,
          'Checked_value':checkedAmenities,
        },
      });
      console.log(response);
    } catch (error) {
      console.error("Error adding amenities data:", error);
    }
  };
  const newAmenitiesData = (property_id) => {
    setpropertyId(property_id);
    setShow(true);
  };
 
  console.log(propertyId)
  return (
    <>
      <div className="short-banner">
        <div className="container">
          <h1>Property Listing</h1>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid">
          <div className="row main-row">
            <Sidebar />
            <aside className="col-xl col-lg col-12">
              <div className="d-sm-flex justify-content-between align-items-center mb-2">
                <h4 className="mb-3 mb-sm-0">My Property Listing</h4>
                <div className="sort-by">
                  <select
                    className="selectpicker select-sm pull-right ms-2"
                    id="sort_by"
                    data-width="fit"
                    data-sort="n"
                    title="Sort By"
                  >
                    <option selected="selected" disabled="disabled">
                      Sort By
                    </option>
                    <option value="recent">Recent</option>
                    <option value="price_low">Price - Low to High</option>
                    <option value="price_high">Price - High to Low</option>
                    <option value="relavance">Relevance</option>
                  </select>
                </div>
              </div>

              <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "published" ? "active" : ""
                    }`}
                    id="publish-tab"
                    onClick={() => handleTabClick("published")}
                  >
                    Published{" "}
                    <span className="count bg-primary">{totalRecord}</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "pending" ? "active" : ""
                    }`}
                    id="pending-tab"
                    onClick={() => handleTabClick("pending")}
                  >
                    Pending <span className="count bg-warning">0</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "expired" ? "active" : ""
                    }`}
                    id="expired-tab"
                    onClick={() => handleTabClick("expired")}
                  >
                    Expired <span className="count bg-danger">0</span>
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      activeTab === "draft" ? "active" : ""
                    }`}
                    id="draft-tab"
                    onClick={() => handleTabClick("draft")}
                  >
                    Draft <span className="count bg-success">0</span>
                  </button>
                </li>
              </ul>

              <div
                className="tab-content list-display my-assets"
                id="myTabContent"
              >
                <div
                  className="tab-pane fade show active"
                  id="publish-tab-pane"
                >
                  {properties.map((val) => (
                    <div key={val.property_id}>
                      {val.property_type_for === "Flats" ? (
                        <FlatListing
                          val={val}
                          imagepath={imagepath}
                          newAmenitiesData={newAmenitiesData}
                          confirmDelete={confirmDelete}
                          setpropertyId={setpropertyId}
                        />
                      ) : (
                        <CommericalListing
                          val={val}
                          imagepath={imagepath}
                          confirmDelete={confirmDelete}
                          setpropertyId={setpropertyId}
                          newAmenitiesData={newAmenitiesData}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="tab-pane fade" id="pending-tab-pane"></div>
                <div className="tab-pane fade" id="expired-tab-pane"></div>
                <div className="tab-pane fade" id="draft-tab-pane"></div>
              </div>

              <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <a
                      className="page-link"
                      onClick={Previous}
                      disabled={page === 1}
                    >
                      Prev
                    </a>
                  </li>
                  {[1, 2, 3].map((pageNumber) => (
                    <li className="page-item" key={pageNumber}>
                      <a
                        className="page-link"
                        onClick={() => setPage(pageNumber)}
                      >
                        {pageNumber}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a className="page-link" onClick={Next}>
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>
          </div>
        </div>
        {propertyId && (
          <AmenitiesComponent
            setCheckedAmenities={setCheckedAmenities}
            handleShow={show}
            AddAmenitiesData={AddAmenitiesData}
            setpropertyId={setpropertyId}
          />
        )}
      </section>
    </>
  );
};

export default MyProperty;
