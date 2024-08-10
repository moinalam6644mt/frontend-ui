import React, { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const FlatListing = ({ val, imagepath, confirmDelete, newAmenitiesData }) => {
  const { totalImage } = useContext(AuthContext);

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const day = String(date.getDate()).padStart(2, '0');

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthName = monthNames[monthIndex];
    return `${day} ${monthName}, ${year}`;
  };

  



  return (
    <div className="card card-ads">
      <div className="row g-0">
        <article className="col-md-3 col-sm-3">
          <div className="card-image">
            <div
              id={`carousellist${val.property_id}`}
              className="carousel slide ads-carousel"
              data-bs-ride="false"
            >
              <div className="carousel-inner">
                {totalImage.filter((image) => image.property_id === val.property_id)
                  .map((img, index) => (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
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
            <span className="ads-type sale">
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
              <h4>€{val.expected_amt}</h4>
              <p>${val.booking_amt}/sq ft</p>
            </div>
          </div>
        </article>
        <article className="col-md col-sm-9 position-relative">
          <div className="card-body">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#" style={{ color: 'red' }}>{val.property_type}</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">{val.property_type_for}</a>
              </li>
            </ol>
            <h4>
              <Link
                to={`/my-property/details/${val.property_id}`}
              >
                {val.property_type}
              </Link>
            </h4>
            <p className="mb-1">
              <i className="icon-feather-map-pin"></i>
              {val.address}
            </p>
            <ul className="list-info mb-2">
              <li>
                <i className="icon-img-bed" title="Bedrooms:"></i>
                <span>{val.bedroom}</span>
              </li>
              <li>
                <i className="icon-img-ratio"></i>
                <span>{val.carpet_area}</span> sq ft
              </li>
              <li>
                <i className="icon-img-tub" title="Bathrooms:"></i>
                <span>{val.bathroom}</span>
              </li>
              <li>
                <i className="icon-img-garage" title="Rooms:"></i>
                <span>{val.balcony}</span>
              </li>
            </ul>
            <p>
              <i className="icon-feather-calendar"></i> {formatDate(val.created_at)}
            </p>
          </div>
        </article>

        <article className="col-md-auto col-sm-12">
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
  );
};

export default FlatListing;
