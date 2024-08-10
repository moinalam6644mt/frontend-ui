import React, { useContext, useState, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import SearchListingData from "./SearchListingData";
import Flats from "./Flats";
import Commercial from './Commercial'
import { useLocation, useNavigate } from 'react-router-dom';
import AuthUser from '../Authentication/Validation/AuthUser';
//import Loading from "../LoadingSpinner/Loading";

const PropertyDetails = () => {
  const { callApi } = AuthUser();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState('Sort By')

  const searchParams = new URLSearchParams(location.search);
  const propertyType = searchParams.get('property_type');
  const propertyFor = searchParams.get('property_for');
  const propertyTypeFor = searchParams.get('property_type_for');
  const monthly_rent=searchParams.get('monthly_rent')
  const expected_amt = searchParams.get('expected_amt');
  const carpet_area = searchParams.get('carpet_area');
  const bedroom = searchParams.get('bedroom')
  const city_name = searchParams.get('searchLoaction')
  const furnishing_status = searchParams.get('furnishing_status')
  const processing_status = searchParams.get('processing_status')
  const pageParam = searchParams.get('page')
  const sory_by=searchParams.get('sortBY')
  const posted_since=searchParams.get('posted_since')
  const posted_by=searchParams.get('posted_by')
  const facing=searchParams.get('facing')
  const ownership_details=searchParams.get('ownership_details')
  const floor_no=searchParams.get('floor_no')
  const bathroom=searchParams.get('bathroom')
  const washroom_no=searchParams.get('washroom_no')
  const cabin_room=searchParams.get('cabin_room')
  const cafeteria=searchParams.get('cafeteria')
  const super_area_min=searchParams.get('super_area_min')
  const super_area_max=searchParams.get('super_area_max')

  
  

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(parseInt(pageParam, 10));
    }
  }, [location]);
  useEffect(() => {
    fetchProperty_Type_Details();

  }, [propertyFor, propertyType, propertyTypeFor, currentPage, expected_amt, monthly_rent,carpet_area, bedroom,city_name, furnishing_status, processing_status,sory_by,pageParam,posted_since,posted_by,facing,ownership_details,floor_no,bathroom,washroom_no,cabin_room,cafeteria,super_area_min,super_area_max]);

  let { PropertyDetails, setPropertyDetails } = useContext(AuthContext);

  const fetchProperty_Type_Details = async () => {
    setLoading(true)

    let apiUrl = '/property_list';
    let quereyParams = [];
    if (propertyFor) quereyParams.push(`property_for=${propertyFor}`)
    if (propertyType) quereyParams.push(`property_type=${propertyType}`)
    if (propertyTypeFor) quereyParams.push(`property_type_for=${propertyTypeFor}`)
    if (expected_amt) quereyParams.push(`expected_amt=${expected_amt}`)
    if (monthly_rent) quereyParams.push(`monthly_rent=${monthly_rent}`)
    if (carpet_area) quereyParams.push(`carpet_area=${carpet_area}`)
    if (bedroom) quereyParams.push(`bedroom=${bedroom}`)
    if (city_name) quereyParams.push(`city_name=${city_name}`)
    if (furnishing_status) quereyParams.push(`furnishing_status=${furnishing_status}`)
    if (processing_status) quereyParams.push(`processing_status=${processing_status}`)
    if (sory_by) quereyParams.push(`sortBY=${sory_by}`)
    if (posted_since) quereyParams.push(`posted_since=${posted_since}`)
    if (posted_by) quereyParams.push(`posted_by=${posted_by}`)
    if (facing) quereyParams.push(`facing=${facing}`)
    if (ownership_details) quereyParams.push(`ownership_details=${ownership_details}`)
    if (floor_no) quereyParams.push(`floor_no=${floor_no}`)
    if (bathroom) quereyParams.push(`bathroom=${bathroom}`)
    if (washroom_no) quereyParams.push(`washroom_no=${washroom_no}`)
    if (cabin_room) quereyParams.push(`cabin_room=${cabin_room}`)
    if (cafeteria) quereyParams.push(`cafeteria=${cafeteria}`)
    if (super_area_min) quereyParams.push(`super_area=${super_area_min}`)
    if (super_area_max) quereyParams.push(`super_area=${super_area_max}`)
   
    quereyParams.push(`page=${currentPage}`);

    if (quereyParams.length >= 0) {
      apiUrl += '?' + quereyParams.join('&')
      console.log(apiUrl)
    }else{
      console.log("no data")
    }

    let response = await callApi({
      api: apiUrl,
      method: 'GET'

    });
    
    setPropertyDetails(response);
    setTotalPages(Math.ceil(response.totalRecords / response.limit));
    setLoading(false)
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const newSearchParams = new URLSearchParams(location.search);
    //set queryparam to send page value
    newSearchParams.set('page', page);
    //get location of url and send queryparam
    navigate(`${location.pathname}?${newSearchParams.toString()}`);
  };

  const handlePreviousButton = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }

  };

  const handleSortSelection = (event) => {
    const selectedValue = event.target.getAttribute('value');
    const selectedName = event.target.innerText;
    setSelectedOption(selectedName);
    //console.log('Selected Option:', selectedName, selectedValue);
    const sortSearchParam=new URLSearchParams(location.search)
    sortSearchParam.set('sortBY',selectedValue)

    navigate(`${location.pathname}?${sortSearchParam.toString()}`)
  };


  
  return (
    <>
      <div className="clearfix"></div>
      <div className="short-banner" style={{ minHeight: "120px" }}>
        <SearchListingData city_name={city_name} propertyType={propertyType} propertyFor={propertyFor} propertyTypeFor={propertyTypeFor}/>
      </div>

      {loading ?(<div>Loading.....</div>):(
        <section className="section">

        <div className="container-fluid">
          <div className="row main-row">
            <aside className="col-xl-9 col-lg-9 col-12">
              <div className="d-sm-flex justify-content-between align-items-center mb-2">
                <h4 className="mb-3 mb-sm-0">
                  Total{" "}
                  <span className="text-primary">
                    {PropertyDetails?.totalRecords}{" "}
                  </span>{" "}
                  Properties Found
                </h4>
                <div className="sort-by" >

                  <button className="btn me-2 btn-list active">
                    <i className="icon-feather-list"></i>
                  </button>
                  <button className="btn me-2 btn-grid">
                    <i className="icon-feather-grid"></i>
                  </button>
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {selectedOption}
                    </button>
                    <ul className="dropdown-menu">
                      <li><a class="dropdown-item" value='recent' onClick={handleSortSelection}>Recent</a></li>
                      <li><a className="dropdown-item" value='low-to-high' onClick={handleSortSelection}>Price - Low to High</a></li>
                      <li><a className="dropdown-item" value='high-to-low' onClick={handleSortSelection}>Price - High to Low</a></li>
                      <li><a className="dropdown-item" value='low-high' onClick={handleSortSelection}>size/sqft - Low to High</a></li>
                      <li><a className="dropdown-item" value='high-low' onClick={handleSortSelection}>size/sqft - High to Low</a></li>
                    </ul>
                  </div>
                 
                </div>
              </div>

              {PropertyDetails?.data.map((property, index) => {
                if (property.property_for === 'sell' && property.property_type === "Commercial") {
                  return <Commercial key={index} property={property} />;
                }
                if (property.property_for === 'sell' && property.property_type === "Residential") {
                  return <Flats key={index} property={property} />;
                }
                if (property.property_for === 'rent' && property.property_type === "Commercial") {
                  return <Commercial key={index} property={property} />;
                }
                if (property.property_for === 'rent' && property.property_type === "Residential") {
                  return <Flats key={index} property={property} />;
                }
                return null; // Ensure every path returns something
              })}

              {PropertyDetails?.totalRecords != 0 ? <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handlePreviousButton}>
                    Previous
                  </button>
                </li>

                {Array.from({ length: totalPages }, (_, index) => {
                  if (totalPages > 3) {
                    // Determine which pages to show based on current page position
                    if (currentPage <= 3) {
                      // Show first 3 pages
                      if (index < 3) {
                        return (
                          <li
                            key={index}
                            className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        );
                      } else if (index === 3) {
                        // Show ellipsis after the first 3 pages
                        return (
                          <li key={index} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                    } else if (currentPage >= totalPages - 1) {
                      // Show last 4 pages
                      if (index >= totalPages - 3) {
                        return (
                          <li
                            key={index}
                            className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        );
                      } else if (index === totalPages - 5) {
                        // Show ellipsis before the last 4 pages
                        return (
                          <li key={index} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                    } else {
                      // Show current page, previous, next and ellipsis
                      if (index === 0 || index === totalPages - 1 || index === currentPage - 1 || index === currentPage + 1) {
                        return (
                          <li
                            key={index}
                            className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                          >
                            <button
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                            >
                              {index + 1}
                            </button>
                          </li>
                        );
                      } else if (index === 1 || index === totalPages - 2) {
                        // Show ellipsis
                        return (
                          <li key={index} className="page-item disabled">
                            <span className="page-link">...</span>
                          </li>
                        );
                      }
                    }
                  } else {
                    // Default pagination for less than or equal to 4 pages
                    return (
                      <li
                        key={index}
                        className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}
                      >
                        <button
                          className="page-link"
                          onClick={() => handlePageChange(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    );
                  }
                })}

                <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={handleNextButton}>
                    Next
                  </button>
                </li>
              </ul> : ""}




            </aside>
            <aside className="col-xl-3 col-lg-3 col-12">
              <div className="text-center mb-4">
                <img
                  src="http://localhost/realestate-live/userupload/advertisements/1695298179_7c28f49c3125aa552d8e.jpg"
                  alt="ads"
                  className="img-fluid"
                />
              </div>
              <div className="text-center mb-4">
                <img
                  src="http://localhost/realestate-live/userupload/advertisements/1695647367_f744339e63ca4c23b945.jpg"
                  alt="ads"
                  className="img-fluid"
                />
              </div>

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
              <div className="card card-ads h-auto">
                <div className="card-image">
                  <div
                    id="carouselCard1"
                    className="carousel slide ads-carousel"
                    data-bs-ride="false"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselCard1"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="0"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselCard1"
                        data-bs-slide-to="1"
                        className=""
                        aria-current="true"
                        aria-label="1"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <a href="http://localhost:8074/realestate-live/property-detail/urban-living-at-its-best-in-dubai-marina-df-fdfs--rspid-57">
                          <img
                            src="http://localhost/realestate-live/public/upload/properties/thumb420/1669206158_d2af5143989a9ed74594.jpg"
                            alt="property image"
                            className="card-img-top"
                          />
                        </a>
                      </div>
                      <div className="carousel-item">
                        <a href="http://localhost:8074/realestate-live/property-detail/urban-living-at-its-best-in-dubai-marina-df-fdfs--rspid-57">
                          <img
                            src="http://localhost/realestate-live/public/upload/properties/thumb420/1669206158_c58c7bafb8262c8ad77a.jpg"
                            alt="property image"
                            className="card-img-top"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                  <span className="ads-type rent">For Rent</span>
                  <span className="ads-fav">
                    <i className="icon-line-awesome-heart"></i>
                  </span>
                  <span className="total-ad-pic">
                    <img
                      src="http://localhost/realestate-live/public/images/camera.svg"
                      alt="Camera Icon"
                    />
                    2
                  </span>
                  <div className="ads-price">
                    <h4>$30000</h4>
                  </div>
                </div>
                <div className="card-body">
                  <h4>
                    <a href="">Urban Living at its best in Dubai Marina</a>
                  </h4>
                  <p className="mb-1">
                    <i className="icon-feather-map-pin"></i> Liwa Tower P.O. Box
                    901. Abu Dhabi
                  </p>
                  <ul className="list-info">
                    <li>
                      <i className="icon-img-room" title="Rooms:"></i>
                      <span>2</span>
                    </li>
                    <li>
                      <i className="icon-img-bed" title="Bedrooms:"></i>
                      <span>2</span>
                    </li>
                    <li>
                      <i className="icon-img-ratio" title="Area:"></i>
                      <span>750 sqft</span>
                    </li>
                    <li>
                      <i className="icon-img-tub" title="Bathrooms:"></i>
                      <span>2</span>
                    </li>
                  </ul>
                </div>
                <div className="card-footer">
                  <div className="user-details">
                    <div className="user-avatar">
                      {" "}
                      <img
                        src="http://localhost/realestate-live/public/images/user.jpg"
                        alt="property image"
                        height="32"
                        width="32"
                        className="rounded-circle"
                      />{" "}
                    </div>
                    <div className="user-name">
                      <span>Ps group</span>
                    </div>
                  </div>
                  <span className="ad-post-date ms-3">
                    <i className="icon-feather-calendar"></i> 13 Jan, 2023
                  </span>{" "}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      )}
      
    </>
  );
};

export default PropertyDetails;
