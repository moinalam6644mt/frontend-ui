import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";

const CommericalListing = ({
  val,
  imagepath,
  confirmDelete,
  newAmenitiesData,
  setpropertyId
}) => {
  const { totalImage } = useContext(AuthContext);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = String(date.getDate()).padStart(2, "0");

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[monthIndex];
    return `${day} ${monthName},${year}`;
  };

  return (
    <div>
      <div class="card card-ads">
        <div class="row g-0">
          <article className="col-md-3 col-sm-3">
            <div className="card-image">
              <div
                id={`carousellist${val.property_id}`}
                className="carousel slide ads-carousel"
                data-bs-ride="false"
              >
                <div className="carousel-inner">
                  {totalImage
                    .filter((image) => image.property_id === val.property_id)
                    .map((img, index) => (
                      <div
                        key={index}
                        className={`carousel-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <img
                          src={imagepath + img.image}
                          alt={`property image ${index}`}
                          className="card-img-top"
                        />
                      </div>
                    ))}
                </div>
              </div>
              <span
                className="ads-type sale"
                style={{ backgroundColor: "green" }}
              >
                {val.property_for}
              </span>
              <span className="total-ad-pic">
                <img
                  src="http://localhost/realestate-live/public/images/camera.svg"
                  alt="Camera Icon"
                />
                1
              </span>
              <div className="ads-price">
                <h4>€{val.carpet_area}</h4>
                <p>€{val.super_area}/sq ft</p>
              </div>
            </div>
          </article>
          <article class="col-md col-sm-9 position-relative">
            <div class="card-body">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="javascript:;" style={{ color: "red" }}>
                    {val.property_type}
                  </a>
                </li>
                <li class="breadcrumb-item">
                  <a href="javascript:;">{val.property_type_for}</a>
                </li>
              </ol>
              <h4>
                <Link
                  to={`/my-property/details/${val.property_id}`}
                >
                  <a >{val.property_type}</a>
                </Link>
              </h4>  
              <p class="mb-1">
                <i class="icon-feather-map-pin"></i> {val.land_zone} ,
                {val.locality} ,{val.city_name}
              </p>
              <ul class="list-info mb-2">
                <li>
                  <i class="icon-img-bed" title="Bedrooms:"></i>
                  <span>{val.businesses}</span>
                </li>
                <li>
                  <i class="icon-img-ratio"></i>
                  <span>{val.super_area}</span> sq ft
                </li>
                <li>
                  <i class="icon-img-tub" title="Washroom:"></i>
                  <span>{val.washroom_no}</span>
                </li>
                <li>
                  <i class="icon-img-garage" title="Rooms:"></i>
                  <span>{val.cabin_room}</span>
                </li>
              </ul>
              <p>
                <i class="icon-feather-calendar"></i>
                {formatDate(val.created_at)}
              </p>
            </div>
          </article>

          <article key={val.property_id} className="col-md-auto col-sm-12">
            <div className="contact-box">
              <div className="d-grid">
              <button
                className="btn btn-warning btn-sm mb-2"
                onClick={() => newAmenitiesData(val.property_id)}
              >
                <i className="icon-feather-amenities"></i> Add Amenity
              </button>
              <Link
               to={`/my-property/edit/${val.property_id}`}
                className="btn btn-primary btn-sm mb-2"
              >
                <i className="icon-feather-edit"></i> Edit
              </Link>

                <button
                  className="btn btn-danger btn-sm mb-2"
                  onClick={() => confirmDelete(val.property_id)}
                >
                  <i className="icon-feather-trash"></i> Delete
                </button>
                <Link
                  to={`/view_enquiry/${val.property_id}`}
                  className="btn btn-success btn-sm"
                >
                  <i className="icon-feather-eye"></i> View Enquiry
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default CommericalListing;
