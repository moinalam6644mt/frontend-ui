import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProjectFilterData = () => {
  const [filters, setFilters] = useState({
    city: "",
    address: "",
    project_type: "",
    project_for: "",
    project_status: "",
    posted_by: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(filters);
  };

  const SearchUrl = () => {
    const params = {
      city_name: filters.city,
      address: filters.address,
      project_type: filters.project_type,
      project_for: filters.project_for,
      possession_date: filters.project_status,
      developer_name: filters.posted_by,
    };
    const filteredParams = (
      Object.entries(params)
        .map(([key, value]) => {

          return [key, value];
        })
        .filter(([key, value]) => value)
    );
    const queryString = new URLSearchParams(filteredParams).toString();


    return `/all-project?${queryString}`;
  };

  return (
    <div>
      <div className="filterHeader">
        <h4>Filters</h4>
        <a className="float-end d-lg-none" id="filter" title="Filter">
          <i className="icon-feather-filter f20"></i>
        </a>
      </div>
      <div className="filter">
        <div className="card-header filterHeader d-lg-none">
          <div className="row d-flex">
            <div className="col">
              <a>Clear</a>
            </div>
            <div className="col text-center">
              <h4>Filters</h4>
            </div>
            <div className="col">
              <a className="close_filter" title="Filter">
                <i className="icon-feather-x f20"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="acc-panel">
          <form id="projectSearchFilter" onSubmit={handleSubmit}>
            <div className="form-field">
              <select
                className="form-control"
                name="city"
                value={filters.city}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Select City
                </option>
                <option value="Kolkata">Kolkata</option>
                <option value="Durgapur">Durgapur</option>
                <option value="Panagarh">Panagarh</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Asansol">Asansol</option>
                <option value="Howrah">Howrah</option>
                <option value="Silliguri">Silliguri</option>
              </select>
            </div>
            <div class="floating-label-group address-box-wrap ui-widget ui-ck">
              <input
                type="text"
                name="address"
                id="address"
                class="form-control address-box ui-autocomplete-input"
                placeholder=" "
                autocomplete="off"
                value={filters.address}
                onChange={handleInputChange}
              />
              <label class="floating-label" for="address">
                Address
              </label>
            </div>

            <div className="form-field">
              <select
                className="form-control"
                name="project_type"
                value={filters.project_type}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Property Type{" "}
                </option>
                <option value="Residential">Residential </option>
                <option value="Commerical">Commerical </option>
                <option value="Agricultural">Agricultural </option>
              </select>
            </div>

            <div className="form-field">
              <select
                className="form-control"
                name="project_for"
                value={filters.project_for}
                onChange={handleInputChange}
              >
                <option value="">Property Type </option>
                <optgroup label="Residential">
                  <option value="Flats">Flats</option>
                  <option value="Residential house">Residential house</option>
                  <option value="Villa">Villa</option>
                  <option value="Builder floor Appt">Builder floor Appt</option>
                  <option value="Penthouse">Penthouse</option>
                </optgroup>
                <optgroup label="Commercial">
                  <option value="Commercial office space">
                    Commercial office space
                  </option>
                  <option value="Warehouse">Warehouse</option>
                  <option value="Office in IT park/Sez">
                    Office in IT park/Sez
                  </option>
                  <option value="Commercial shop">Commercial shop</option>
                  <option value="Commercial showroom">
                    Commercial showroom
                  </option>
                </optgroup>
                <optgroup label="Agricultural">
                  <option value="Agricultural land">Agricultural land</option>
                  <option value="Farmhouse">Farmhouse</option>
                </optgroup>
              </select>
            </div>

            <div className="form-field">
              <select
                className="form-control"
                name="posted_by"
                value={filters.posted_by}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Posted by{" "}
                </option>
                <option value="Ps Group">Ps Group </option>
                <option value="Green Tech Pvt Ltd">Green Tech Pvt Ltd </option>
                <option value="Moin Tech">Moin Tech </option>
              </select>
            </div>
            <div className="form-field">
              <select
                className="form-control"
                name="project_status"
                value={filters.project_status}
                onChange={handleInputChange}
              >
                <option value="" disabled>
                  Project Status
                </option>
                <option value="completed">Completed</option>

                <option value="ongoing">Ongoing</option>
              </select>
            </div>

            <div className="d-grid">
              <Link
                to={SearchUrl()}
                className="form-control btn btn-primary"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilterData;
