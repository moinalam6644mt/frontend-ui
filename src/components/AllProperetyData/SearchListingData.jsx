import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ResidenitlaRent from '../AdvanceFilterpage/Residential/ResidenitlaRent';
import ResidentialSell from '../AdvanceFilterpage/Residential/ResidentialSell';
import CommercialRent from '../AdvanceFilterpage/Commercial/CommercialRent';
import CommercialSell from '../AdvanceFilterpage/Commercial/CommercialSell';
import ResidentialPG from '../AdvanceFilterpage/Residential/ResidentialPG';
import AgricultureRent from '../AdvanceFilterpage/Agriculture/AgricultureRent';
import AgricultureSell from '../AdvanceFilterpage/Agriculture/AgricultureSell';
import Lease from '../AdvanceFilterpage/Commercial/Lease';
import { useNavigate, useLocation } from 'react-router-dom';

const SearchListingData = ({ city_name, propertyType, propertyFor, propertyTypeFor }) => {

  const location = useLocation();

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false)
  const [selectedName, setSelectedName] = useState('');
  const [selectedValue, setSelectedValue] = useState('')
  const [minmax,setminMax]=useState('')
  const [childMinValue,setChildMinValue]=useState(null)
  const [childMaxValue,setChildMaxValue]=useState(null)
  const [cityName, setCityName] = useState(city_name)
  const [proptType, setProptType] = useState(propertyType)
  const [proptFor, setProptFor] = useState(propertyFor)
  const [proptTypeFor, setProptTypeFor] = useState(propertyTypeFor)
  const [covered,setCovered]=useState('')


  useEffect(() => {
    if (minmax && (childMinValue || childMaxValue)) {
      const advanceFilter = new URLSearchParams(location.search);
      if (minmax === 'super_area_min') {
        advanceFilter.set('super_area_min', childMinValue);
        advanceFilter.delete('super_area_max'); // Remove super_area_max if it's set
    } else if (minmax === 'super_area_max') {
        advanceFilter.set('super_area_max', childMaxValue);
        advanceFilter.delete('super_area_min'); // Remove super_area_min if it's set
    }
      navigate(`${location.pathname}?${advanceFilter.toString()}`);
    } 
  }, [cityName, proptType, proptFor, proptTypeFor, selectedName, selectedValue,childMinValue,childMaxValue,minmax])

  const [formData, setFormData] = useState({
    address: '',
    propertyType: '',
    propertyFor: '',
    bedroom: ''

  });
  const handleTypeValue = (e) => {

    let namedValue = e.target.name;
    setProptFor(namedValue);
  };

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData(prevdata => ({
      ...prevdata,
      [name]: value
    }));
    switch (name) {
      case 'address':
        setCityName(value);
        break;
      case 'propertyType':
        setProptType(value);
        break;
      case 'sell||rent||pg':
        setProptFor(value);
        break;
      case 'propertyTypeFor':
        setProptTypeFor(value);
        break;
      default:
        break;
    }
  };
  const buildSearchUrl = () => {

    const params = {
      property_for: proptFor,
      property_type: formData.propertyType,
      property_type_for: formData.propertyFor,
      searchLoaction: formData.address,
      bedroom: formData.bedroom,
    };
    const filteredParams = Object.fromEntries(
      Object.entries(params)
        .map(([key, value]) => {

          return [key, value];
        })
        .filter(([key, value]) => value)
    );
    const queryString = new URLSearchParams(filteredParams).toString();
    console.log(queryString)
    console.log(`/property-listing?${queryString}`)

    return `/property-listing?${queryString}`;
  };

  const handleAdvanceBtn = () => {
    setVisible(!visible)
  }

  const handleAdvanceKey = (e) => {
    e.preventDefault()

    const name = e.target.getAttribute('name');

    setSelectedName(name)
  } 

  const handleCoverArea=(e)=>{
    e.preventDefault()

    const name = e.target.getAttribute('name');

    setCovered(name)
  }

  console.log(childMinValue,childMaxValue)

  const handleMinMaxOption=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name +"" + value)
    setminMax(name)
  }
  const handleButtonClick = (e) => {
    e.preventDefault()
    const value = e.target.value;
    setSelectedValue(value)
    const advanceFilter=new URLSearchParams(location.search)
    if (selectedName) {
      advanceFilter.set(selectedName, value);
      
  }
  if (minmax === 'super_area_min') {
    advanceFilter.set('super_area_min', childMinValue);
    advanceFilter.delete('super_area_max'); // Remove super_area_max if it's set
} else if (minmax === 'super_area_max') {
    advanceFilter.set('super_area_max', childMaxValue);
    advanceFilter.delete('super_area_min'); // Remove super_area_min if it's set
}
    navigate(`${location.pathname}?${advanceFilter.toString()}`)
  }
  
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="search-form">
              <ul className="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <a
                    className={`nav-link ${proptFor === 'sell' ? 'active' : ''}`}
                    id="pills-buy-tab"
                    name='sell'
                    data-bs-toggle="pill"
                    data-bs-target="#pills-buy"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="false"
                    tabindex="-1"
                    onClick={handleTypeValue}
                    value={proptFor}
                  > Buy</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className={`nav-link ${proptFor === 'rent' ? 'active' : ''}`} id="pills-rent-tab" name='rent' value={proptFor} data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-profile" aria-selected="true" onClick={handleTypeValue}>Rent</a>
                </li>

                <li className="nav-item" role="presentation">
                  <a className={`nav-link ${proptFor === 'pg' ? 'active' : ''}`} id="pills-hostel-tab" name='pg' value={proptFor} data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabindex="-1" onClick={handleTypeValue}>PG</a>
                </li>
                {/* <li className="nav-item" role="presentation">
                  <a className="nav-link " id="pills-commercial-tab" name='commercial' data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabindex="-1" onClick={handleTypeValue}>Commercial</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        {proptFor==='rent' && (
          <form id="searchfilter">
          <div className="row gx-2 -mb-325">
            <div className="col-lg col-12">
              <div className="form-field with-search address-box-wrap">
                <input id="location" type="text" name="address" value={cityName} className="form-control address-city address-box ui-autocomplete-input" placeholder="Search by Locality, Builder or a Project" autocomplete="off" onChange={handleInputChange} />

                <input name="bedrooms" id="bedrooms" type="hidden" onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="form-field">
                <select className='form-control' name="propertyType" value={proptType} onChange={handleInputChange}>
                <option>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Agriculture</option>
                </select>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 col-12">
              <div className="form-field">
                <select className='form-control' name="propertyFor" value={proptTypeFor} onChange={handleInputChange}>
                  <option>Property For</option>
                  <option>Flats</option>
                  <option>Commercial Office Space</option>
                </select>
              </div>
              
            </div> */}
            <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyFor" value={proptTypeFor} onChange={handleInputChange}>
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
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="form-field">
                <div className="btn-group bootstrap-select hide-tick1 fit-width" onClick={handleAdvanceBtn}>
                  <button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="budget" title="Advanced" >
                    <span className="filter-option pull-left" >Advanced</span>&nbsp;
                    <span className="bs-caret"><span className="caret"></span></span>
                  </button>
                </div>
                {visible && (
                  <>
                    {proptFor === 'rent' && proptType === 'Residential' ? <ResidenitlaRent
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Residential' ? <ResidentialSell
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'rent' && proptType === 'Commercial' ? <CommercialRent
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Commercial' ? <CommercialSell
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'rent' && proptType === 'Agricultural' ? <AgricultureRent
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Agricultural' ? <AgricultureSell
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Lease' ? <Lease
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    
                  </>
                )}
              </div>

            </div>

            <div className="col-lg-auto col-sm-6 col-12">
              <div className="d-grid">
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
        )}
        {proptFor==='sell' && (
          <form id="searchfilter">
          <div className="row gx-2 -mb-325">
            <div className="col-lg col-12">
              <div className="form-field with-search address-box-wrap">
                <input id="location" type="text" name="address" value={cityName} className="form-control address-city address-box ui-autocomplete-input" placeholder="Search by Locality, Builder or a Project" autocomplete="off" onChange={handleInputChange} />

                <input name="bedrooms" id="bedrooms" type="hidden" onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="form-field">
                <select className='form-control' name="propertyType" value={proptType} onChange={handleInputChange}>
                <option>Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Agriculture</option>
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="propertyFor"  value={proptTypeFor} onChange={handleInputChange}>
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
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="form-field">
                <div className="btn-group bootstrap-select hide-tick1 fit-width" onClick={handleAdvanceBtn}>
                  <button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="budget" title="Advanced" >
                    <span className="filter-option pull-left" >Advanced</span>&nbsp;
                    <span className="bs-caret"><span className="caret"></span></span>
                  </button>
                </div>
                {visible && (
                  <>
                    {proptFor === 'rent' && proptType === 'Residential' ? <ResidenitlaRent
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Residential' ? <ResidentialSell
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'rent' && proptType === 'Commercial' ? <CommercialRent
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Commercial' ? <CommercialSell
                      selectedName={selectedName}
                      covered={covered}
                      handleCoverArea={handleCoverArea}
                      handleMinMaxOption={handleMinMaxOption}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      setChildMinValue={setChildMinValue}
                      setChildMaxValue={setChildMaxValue}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'rent' && proptType === 'Agricultural' ? <AgricultureRent
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Agricultural' ? <AgricultureSell
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    {proptFor === 'sell' && proptType === 'Lease' ? <Lease
                      selectedName={selectedName}
                      setSelectedName={setSelectedName}
                      selectedValue={selectedValue}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick} /> : null}
                    
                  </>
                )}
              </div>

            </div>

            <div className="col-lg-auto col-sm-6 col-12">
              <div className="d-grid">
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
        )}
        {proptFor==='pg' && (
          <form id="searchfilter">
          <div className="row gx-2 -mb-325">
            <div className="col-lg col-12">
              <div className="form-field with-search address-box-wrap">
                <input id="location" type="text" name="address" value={cityName} className="form-control address-city address-box ui-autocomplete-input" placeholder="Search by Locality, Builder or a Project" autocomplete="off" onChange={handleInputChange} />

                <input name="bedrooms" id="bedrooms" type="hidden" onChange={handleInputChange} />
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
                            <select className='form-control' name="gender" onChange={handleInputChange}>
                              <option>Gender</option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-12">
                          <div className="form-field">
                            <select className='form-control' name="occupency" onChange={handleInputChange}>
                              <option>Occupency Type</option>
                              <option>PG</option>
                              <option>Shared Flat</option>
                              <option>Room</option>
                            </select>
                          </div>
                        </div>
            <div className="col-lg-2 col-sm-6 col-12">
              <div className="form-field">
                <div className="btn-group bootstrap-select hide-tick1 fit-width" onClick={handleAdvanceBtn}>
                  <button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="budget" title="Advanced" >
                    <span className="filter-option pull-left" >Advanced</span>&nbsp;
                    <span className="bs-caret"><span className="caret"></span></span>
                  </button>
                </div>
                {visible && (
                  <>
                   
                    {proptFor === 'pg' ? <ResidentialPG selectedName={selectedName}
                      selectedValue={selectedValue}
                      setSelectedName={setSelectedName}
                      handleAdvanceKey={handleAdvanceKey}
                      handleButtonClick={handleButtonClick}
                      handleAdvanceBtn={handleAdvanceBtn} /> : null}
                  </>
                )}
              </div>

            </div>

            <div className="col-lg-auto col-sm-6 col-12">
              <div className="d-grid">
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
        )}
        
      </div>
    </React.Fragment>
  )
}

export default SearchListingData
