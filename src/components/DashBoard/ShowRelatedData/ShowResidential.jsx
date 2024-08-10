import React from "react";
import Carousel from "react-bootstrap/Carousel";

const PropertyCard = ({ property }) => (
  <article className="item">
    <div className="card card-ads">
      <div className="card-image">
        <div
          id={`carousellist${property.id}`}
          className="carousel slide ads-carousel"
          data-bs-ride="false"
        >
          <div className="carousel-inner">
            {property.images.map((image, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={image}
                  alt="property image"
                  className="card-img-top"
                />
              </div>
            ))}
          </div>
        </div>
        <span className={`ads-type ${property.type.toLowerCase()}`}>
          {property.type}
        </span>
        <span className="ads-fav" data-act="favourite2" data-href="">
          <i className="icon-line-awesome-heart-o"></i>
        </span>
        <span className="total-ad-pic">
          <img
            src="http://localhost/realestate-live/public/images/camera.svg"
            alt="Camera Icon"
          />
          {property.images.length}
        </span>
        <div className="ads-price">
          <h4>{property.price}</h4>
        </div>
      </div>
      <div className="card-body">
        <h4>
          <a>{property.title}</a>
        </h4>
        <p className="mb-1">
          <i className="icon-feather-map-pin"></i> {property.address}
        </p>
        <ul className="list-info">
          <li>
            <i className="icon-img-flat" title={property.flat}></i>
          </li>
          <li>
            <i className="icon-img-room" title="Rooms:"></i>
            <span>{property.rooms}</span>
          </li>
          <li>
            <i className="icon-img-bed" title="Bedrooms:"></i>
            <span>{property.bedrooms}</span>
          </li>
          <li>
            <i className="icon-img-ratio"></i>
            <span>{property.area}</span>
          </li>
          <li>
            <i className="icon-img-tub" title="Bathrooms:"></i>
            <span>{property.bathrooms}</span>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <div className="user-details">
          <div className="user-avatar">
            <img
              src={property.user.avatar}
              alt="property image"
              height="32"
              width="32"
              className="rounded-circle"
            />
          </div>
          <div className="user-name">
            <span>
              <a>{property.user.name}</a>
            </span>
          </div>
        </div>
        <span className="ad-post-date ms-3">
          <i className="icon-feather-calendar"></i> {property.postDate}
        </span>
      </div>
    </div>
  </article>
);

const ShowResidential = () => {
  const style1 = {
    transform: "translate3d(-317px, 0px, 0px)",
    transition: "all 0.25s ease 0s",
    width: "2540px",
  };

  const properties = [
    {
      id: 0,
      images: [
        "http://localhost/realestate-live/public/upload/properties/thumb420/1669811694_15dd272926e4adf661ae.jpg",
      ],
      type: "Rent",
      price: "AED179856",
      title: "Commercial Showroom For Sale",
      address:
        "Khalifa Bin Zayed Street - Al Ain - Abu Dhabi - United Arab Emirates",
      flat: 7,
      rooms: 2,
      bedrooms: 1,
      area: 1890,
      bathrooms: 1,
      user: {
        avatar: "http://localhost/realestate-live/public/images/user.jpg",
        name: "Allen Brett",
      },
      postDate: "30 Nov, 2022",
    },
    // Add more properties as needed
  ];

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <PropertyCard property={properties[0]} />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="owl-carousel owl-theme property-carousel owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage" style={style1}>
            {properties.map((property) => (
              <div
                className="owl-item"
                style={{ width: "297.5px", marginRight: "20px" }}
                key={property.id}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>
        <div className="owl-nav">
          <button type="button" role="presentation" className="owl-prev">
            <span
              aria-label="Previous"
              className="icon-line-awesome-angle-left"
            ></span>
          </button>
          <button type="button" role="presentation" className="owl-next">
            <span aria-label="Next" className="icon-line-awesome-angle-right"></span>
          </button>
        </div>
        <div className="owl-dots disabled"></div>
      </div>
    </div>
  );
};

export default ShowResidential;
