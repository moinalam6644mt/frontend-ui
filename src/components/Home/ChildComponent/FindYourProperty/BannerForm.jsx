import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const BannerForm = () => {

  let [propType, setPropType] = useState('sell');

  const [formData, setFormData] = useState({
    address: '',
    propertyType: '',
    propertyFor: '',
    monthly_rent: '',
    expected_amt: '',
    carpet_area:'',
    bedroom: ''
  });
  const handleTypeValue = (e) => {
    let namedValue = e.target.name;
    setPropType(namedValue);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevdata => ({
      ...prevdata,
      [name]: value
    }));
  };
  const buildSearchUrl = () => {
    const params = {
      property_for: propType,
      property_type: formData.propertyType,
      property_type_for: formData.propertyFor,
      searchLoaction: formData.address,
      bedroom: formData.bedroom,
      carpet_area: formData.carpet_area,
      monthly_rent: formData.monthly_rent,
      expected_amt:formData.expected_amt
    };
    const filteredParams = (
      Object.entries(params)
        .map(([key, value]) => {

          return [key, value];
        })
        .filter(([key, value]) => value)
    );
    const queryString = new URLSearchParams(filteredParams).toString();


    return `/property-listing?${queryString}`;
  };

  return (
    <div className="banner-form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-12">
            <div className="search-form">
              <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link active"
                    id="pills-buy-tab"
                    onClick={handleTypeValue}
                    name="sell"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-buy"
                    type="button"
                    role="tab"
                    aria-controls="pills-buy"
                    aria-selected="true"
                  >
                    <img src="http://localhost/realestate-live/public/images/icons/buy.png" alt="" height="48" width="48" />
                    Buy
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-rent-tab"
                    onClick={handleTypeValue}
                    name="rent"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-rent"
                    type="button"
                    role="tab"
                    aria-controls="pills-rent"
                    aria-selected="false"
                  >
                    <img src="http://localhost/realestate-live/public/images/icons/rent.png" alt="" height="48" width="48" />
                    Rent
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    className="nav-link"
                    id="pills-hostel-tab"
                    onClick={handleTypeValue}
                    name="pg"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Pg"
                    type="button"
                    role="tab"
                    aria-controls="pills-Pg"
                    aria-selected="false"
                  >
                    <img src="http://localhost/realestate-live/public/images/icons/pg.png" alt="" height="48" width="48" />
                    Pg/Hostel
                  </a>
                </li>
              </ul>

              {propType === "sell" && (
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-buy pills-rent pills-Pg" role="tabpanel" aria-labelledby="pills-buy-tab">
                    <form id="searchfilter">
                      <div className="row gx-2 -mb-3">
                        <div className="col-lg-6 col-12">
                          <div className="form-field with-icon-start address-box-wrap">
                            <i className="icon-feather-map-pin"></i>
                            <input
                              id="location"
                              name="address"
                              type="text"
                              className="form-control address-city address-box ui-autocomplete-input"
                              placeholder="Search by Locality, Builder or a Project"
                              autoComplete="off"
                              onChange={handleInputChange}
                            />

                            <input name="bedrooms" id="bedrooms" type="hidden" onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyType" onChange={handleInputChange}>
                              <option>Property Type</option>
                              <option>Residential</option>
                              <option>Commercial</option>
                              <option>Agriculture</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyFor" onChange={handleInputChange}>
                              <option>Property Type For</option>
                              <optgroup label="Residential">
                                <option>Flats</option>
                                <option>Residential house</option>
                                <option>Villa</option>
                                <option>Builder floor Appt</option>
                                <option>Penthouse</option>
                              </optgroup>
                              <optgroup label="Commercial">
                                <option>Commercial office space</option>
                                <option>Warehouse</option>
                                <option>Office in IT park/Sez</option>
                                <option>Commercial shop</option>
                                <option>Commercial showroom</option>
                              </optgroup>
                              <optgroup label="Agricultural">
                                <option>Agricultural land</option>
                                <option>Farmhouse</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="monthly_rent" onChange={handleInputChange}>
                              <option>Budget</option>
                              <option>500000 & Less</option>
                              <option>500000-1000000</option>
                              <option>1000000-2000000</option>
                              <option>2000000-4000000</option>
                              <option>4000000-8000000</option>
                              <option>8000000-10000000</option>
                              <option>10000000 & more</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="carpet_area" onChange={handleInputChange}>
                              <option>Size</option>
                              <option>100-200</option>
                              <option>200-400</option>
                              <option>400-600</option>
                              <option>600-800</option>
                              <option>800-1000</option>
                              <option>1000-5000</option>
                              <option>5000</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="bedroom" onChange={handleInputChange}>
                              <option>Bedroom</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <Link
                              to={buildSearchUrl()}
                              className="form-control btn btn-primary"

                            >
                              Search
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="pills-rent" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-land" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-commercial" role="tabpanel"></div>
                </div>
              )}
              {propType === "rent" && (
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-buy pills-rent pills-Pg" role="tabpanel" aria-labelledby="pills-buy-tab">
                    <form id="searchfilter">
                      <div className="row gx-2 -mb-3">
                        <div className="col-lg-6 col-12">
                          <div className="form-field with-icon-start address-box-wrap">
                            <i className="icon-feather-map-pin"></i>
                            <input
                              id="location"
                              name="address"
                              type="text"
                              className="form-control address-city address-box ui-autocomplete-input"
                              placeholder="Search by Locality, Builder or a Project"
                              //autoComplete="off"
                              onChange={handleInputChange}
                            />
                            <input name="bedrooms" id="bedrooms" type="hidden" onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyType" onChange={handleInputChange}>
                            <option>Property Type</option>
                              <option>Residential</option>
                              <option>Commercial</option>
                              <option>Agriculture</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyFor" onChange={handleInputChange}>
                            <option>Property Type For</option>
                              <optgroup label="Residential">
                                <option>Flats</option>
                                <option>Residential house</option>
                                <option>Villa</option>
                                <option>Builder floor Appt</option>
                                <option>Penthouse</option>
                              </optgroup>
                              <optgroup label="Commercial">
                                <option>Commercial office space</option>
                                <option>Warehouse</option>
                                <option>Office in IT park/Sez</option>
                                <option>Commercial shop</option>
                                <option>Commercial showroom</option>
                              </optgroup>
                              <optgroup label="Agricultural">
                                <option>Agricultural land</option>
                                <option>Farmhouse</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="expected_amt" onChange={handleInputChange}>
                              <option>Budget</option>
                              <option>5000 & Less</option>
                              <option>5000-10000</option>
                              <option>10000-20000</option>
                              <option>20000-40000</option>
                              <option>40000-80000</option>
                              <option>80000-100000</option>
                              <option>100000 & more</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                          <select className='form-control' name="carpet_area" onChange={handleInputChange}>
                              <option>Size</option>
                              <option>100-200</option>
                              <option>200-400</option>
                              <option>400-600</option>
                              <option>600-800</option>
                              <option>800-1000</option>
                              <option>1000-5000</option>
                              <option>5000</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="bedroom" onChange={handleInputChange}>
                              <option>Bedroom</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <Link
                              to={buildSearchUrl()}
                              className="form-control btn btn-primary"

                            >
                              Search
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="pills-rent" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-land" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-commercial" role="tabpanel"></div>
                </div>
              )}
              {propType === "pg" && (
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-buy pills-rent pills-Pg" role="tabpanel" aria-labelledby="pills-buy-tab">
                    <form id="searchfilter">
                      <div className="row gx-2 -mb-3">
                        <div className="col-lg-6 col-12">
                          <div className="form-field with-icon-start address-box-wrap">
                            <i className="icon-feather-map-pin"></i>
                            <input
                              id="location"
                              name="address"
                              type="text"
                              className="form-control address-city address-box ui-autocomplete-input"
                              placeholder="Search by Locality, Builder or a Project"
                              //autoComplete="off"
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="budget" onChange={handleInputChange}>
                              <option>Budget</option>
                              <option>50000</option>
                              <option>100000</option>
                              <option>150000</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="bedroom" onChange={handleInputChange}>
                              <option>Gender</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="bedroom" onChange={handleInputChange}>
                              <option>Occupency Type</option>
                              <option>PG</option>
                              <option>Shared Flat</option>
                              <option>Room</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <Link
                              to={buildSearchUrl()}
                              className="form-control btn btn-primary"

                            >
                              Search
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="tab-pane fade" id="pills-rent" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-land" role="tabpanel"></div>
                  <div className="tab-pane fade" id="pills-commercial" role="tabpanel"></div>
                </div>
              )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;



