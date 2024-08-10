import React from 'react'
import BannerForm from '../Home/ChildComponent/FindYourProperty/BannerForm'
import { Link } from 'react-router-dom';


const SearchListingData = () => {

 const {handleTypeValue,handleSearch}=BannerForm
  return (
    <React.Fragment>
       <div class="container-fluid">
      <div class="row">
      <div class="col-12">          
        <div class="search-form">
          <ul class="nav nav-pills justify-content-center mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-buy-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" name="Sell" type="button" role="tab" aria-controls="pills-home" aria-selected="false" tabindex="-1" onClick={handleTypeValue}> Buy</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="pills-rent-tab" data-bs-toggle="pill" data-bs-target="#pills-Rent" name="Sell" type="button" role="tab" aria-controls="pills-profile" aria-selected="true" onClick={handleTypeValue}>Rent</a>
            </li>
            {/* <!-- <li class="nav-item" role="presentation">
              <a class="nav-link" id="pills-land-tab" data-bs-toggle="pill" data-bs-target="#pills-buy" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><img src="http://localhost/realestate-live/public/images/icons/land-sales.png" alt="" height="32" width="32" /> Land</a>
            </li> --> */}
            <li class="nav-item" role="presentation">
              <a class="nav-link " id="pills-hostel-tab" data-bs-toggle="pill" data-bs-target="#pills-pg" name="Pg" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabindex="-1" onClick={handleTypeValue}>PG</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link " id="pills-commercial-tab" data-bs-toggle="pill" data-bs-target="#pills-commercial" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" tabindex="-1" onClick={handleTypeValue}>Commercial</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <form id="searchfilter">
      <div class="row gx-2 -mb-325">
        <div class="col-lg col-12">
          <div class="form-field with-search address-box-wrap">
                             <input id="location" type="text" class="form-control address-city address-box ui-autocomplete-input" placeholder="Search by Locality, Builder or a Project" autocomplete="off" value=""/>
                            

            <input name="" id="" type="hidden" value=""/>
            <input name="" id="" type="hidden" value=""/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>

            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
            <input name="" id="" type="hidden"/>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 col-12">
          <div class="form-field">
                        <div class="btn-group bootstrap-select"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="proptype" title="Property Type" aria-expanded="false"><span class="filter-option pull-left">Property Type</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"  style={{ maxHeight: '759px', overflow: 'hidden', minHeight: '104px' }}><ul class="dropdown-menu inner" role="listbox" aria-expanded="false" style={{ maxHeight: '747px', overflowY: 'auto', minHeight: '92px' }}><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Property Type</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Residential</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Commercial</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Agricultural</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">uihk</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select name="proptype" id="proptype" class="selectpicker" tabindex="-98">
              <option selected="selected" disabled="disabled">Property Type</option>
                                <option value="5">Residential</option>
                                    <option value="6">Commercial</option>
                                    <option value="7">Agricultural</option>
                                    <option value="9">uihk</option>
                              
            </select></div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 col-12">
          <div class="form-field">
                        <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="propfor" title="Property For" aria-expanded="false"><span class="filter-option pull-left">Property For</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox" style={{ maxHeight: '230px', overflow: 'hidden' }}><ul class="dropdown-menu inner" role="listbox" aria-expanded="false" style={{ maxHeight: '218px', overflowY: 'auto' }}><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Property For</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li class="divider" data-optgroup="1div"></li><li class="dropdown-header " data-optgroup="1"><span class="text">Residential</span></li><li data-original-index="1" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Flats</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">House/Villa</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Residential Plots</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Bunglow</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Apartment</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6" data-optgroup="1"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">re</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li class="divider" data-optgroup="2div"></li><li class="dropdown-header " data-optgroup="2"><span class="text">Commercial</span></li><li data-original-index="7" data-optgroup="2"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Office Space</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8" data-optgroup="2"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Shop/Showroom</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9" data-optgroup="2"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Warehouse</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="10" data-optgroup="2"><a tabindex="0" class="opt  " data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Shop Rents</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select name="propfor" id="propfor" class="selectpicker" data-width="fit" data-size="7" title="" tabindex="-98">
              <option selected="selected" disabled="disabled">Property For</option>
                                  <optgroup label="Residential" data-max-options="2">
                                                <option value="5">Flats</option>
                                                    <option value="6">House/Villa</option>
                                                    <option value="7">Residential Plots</option>
                                                    <option value="8">Bunglow</option>
                                              </optgroup>
                                        <optgroup label="Commercial" data-max-options="2">
                                                <option value="9">Office Space</option>
                                                    <option value="10">Shop/Showroom</option>
                                                    <option value="11">Warehouse</option>
                                                    <option value="15">Shop Rents</option>
                                              </optgroup>
                                        <optgroup label="Agricultural" data-max-options="2">
                                          </optgroup>
                                        <optgroup label="uihk" data-max-options="2">
                                          </optgroup>
                                                    
            </select></div>
          </div>
        </div>
        <div class="col-lg-2 col-sm-6 col-12">
          <div class="form-field">
                        <div class="btn-group bootstrap-select hide-tick1 fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="budget" title="Advanced"><span class="filter-option pull-left">Advanced</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Advanced</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">AED200 - AED300</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">AED300 - AED400</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="budget" class="selectpicker hide-tick1" data-width="fit" data-size="7" tabindex="-98">
              <option selected="selected" disabled="disabled">Advanced</option>
                                <option value="AED200 - AED300">AED200 - AED300</option>
                                    <option value="AED300 - AED400">AED300 - AED400</option>
                              </select></div>
          </div>
        </div>
        
        <div class="col-lg-auto col-sm-6 col-12">
          <div class="filter-dropdown">
            <a class="btn btn-light aSearchBtn" style={{ textDecoration: 'none' }}><i class="icon-feather-search"></i> Budget</a>            <div class="f-dropdown" id="advanceSearch" style={{ display: 'none' }}>
              <div class="row gx-0">
                <div class="col-lg-3 col-4">
                  <div id="list-example" class="list-group">
                    <a class="list-group-item list-group-item-action active" >Covered Area</a>
                    <a class="list-group-item list-group-item-action" >Bathroom</a>
                    <a class="list-group-item list-group-item-action" >Properties in Localities</a>
                    <a class="list-group-item list-group-item-action" >Posted By</a>
                    <a class="list-group-item list-group-item-action" >Posted Since</a>
                    <a class="list-group-item list-group-item-action" >Facing</a>
                    <a class="list-group-item list-group-item-action" >Amenities</a>
                    <a class="list-group-item list-group-item-action" >Floor</a>
                  </div>
                </div>
                <div class="col-lg-9 col-8">
                  <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0" data-simplebar="init"><div class="simplebar-track vertical" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar"></div></div><div class="simplebar-track horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar"></div></div><div class="simplebar-scroll-content" style={{ paddingRight: '17px', marginBottom: '-34px' }}><div class="simplebar-content" style={{ paddingBottom: '17px', marginRight: '-17px' }}>
                    <div class="scrollspy-body">
                    
                    <div class="row gx-3">        
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-1">Covered Area</h5>

                                                    {/* <!-- <select id="size" class="selectpicker hide-tick1" data-width="fit" data-size="7" tabindex="-98"> --> */}

                          <div class="btn-group bootstrap-select hide-tick fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="size" title="Size"><span class="filter-option pull-left">Size</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Size</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">0 - 250 sq ft</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">251 sq ft - 350 sq ft</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">351sq ft - 500 sq ft</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">501 sq ft - 1000 sq ft</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Above 1000 sq ft</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="size" class="selectpicker hide-tick" data-width="fit" data-size="7" tabindex="-98">
                            <option selected="selected" disabled="disabled">Size</option>
                            <option value="0-250">0 - 250 sq ft</option>

                            <option value="251-350">251 sq ft - 350 sq ft</option>

                            <option value="351-500">351sq ft - 500 sq ft</option>

                            <option value="501-1000">501 sq ft - 1000 sq ft</option>

                            <option value="Above 1000">Above 1000 sq ft</option>
                          </select></div>
                        </div>
                      </div>
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-1">Bedrooms</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="no_of_bedrooms" title="Bedrooms"><span class="filter-option pull-left">Bedrooms</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Bedrooms</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">1</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">2</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">3</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">4</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">5</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">6</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">7</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">8</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">9</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="no_of_bedrooms" class="selectpicker" data-width="fit" data-size="5" tabindex="-98">
                            <option selected="selected" disabled="disabled">Bedrooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                          </select></div>
                        </div>
                      </div>   
                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-1">Parking</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="parking_avail" title="Parking"><span class="filter-option pull-left">Parking</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Parking</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Available</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Not Available</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="parking_avail" class="selectpicker" data-width="fit" tabindex="-98">
                            <option selected="selected" disabled="disabled">Parking</option>
                            <option value="available">Available</option>
                            <option value="notavailable">Not Available</option>
                          </select></div>
                        </div>
                      </div>  

                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-2">Bathroom</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="bathrooms_count" title="Bathroom"><span class="filter-option pull-left">Bathroom</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Bathroom</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">1</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">2</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">3</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">4</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">5</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">6</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">7</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">8</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">9</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="bathrooms_count" class="selectpicker" data-width="fit" data-size="5" tabindex="-98">
                            <option selected="selected" disabled="disabled">Bathroom</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                          </select></div>
                        </div>
                      </div> 

                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-4">Property Status</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="prop_status" title="Select Status"><span class="filter-option pull-left">Select Status</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">Select Status</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">trans1</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">trans-a</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="prop_status" class="selectpicker" data-width="fit" tabindex="-98">
                            <option value="">Select Status</option>
                                                              <option value="1">trans1</option>
                                                                    <option value="4">trans-a</option>
                                                            </select></div>
                        </div>
                      </div>

                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-4">Posted By</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="postedby" title="Posted By"><span class="filter-option pull-left">Posted By</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="selected"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="true"><span class="text">Posted By</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Test Core</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Tester Own</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Allen Brett</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Demo Agent</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Agent Demo</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Demo Builder</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Ps group</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Banashree</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">Moin</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="postedby" class="selectpicker" data-width="fit" tabindex="-98">
                            <option value="">Posted By</option>
                                                              <option value="2">Test Core</option>
                                                                    <option value="13">Tester Own</option>
                                                                    <option value="15">Allen Brett</option>
                                                                    <option value="16">Demo Agent</option>
                                                                    <option value="17">Agent Demo</option>
                                                                    <option value="18">Demo Builder</option>
                                                                    <option value="19">Ps group</option>
                                                                    <option value="23">Banashree</option>
                                                                    <option value="42">Moin</option>
                                                            </select></div>
                        </div>
                      </div> 

                      <div class="col-lg-4 col-sm-6 col-12">
                        <div class="form-field">
                          <h5 id="list-item-8">Floor</h5>
                                                    <div class="btn-group bootstrap-select fit-width"><button type="button" class="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="floors_count" title="Floor"><span class="filter-option pull-left">Floor</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button><div class="dropdown-menu open" role="combobox"><ul class="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" class="disabled selected"><a tabindex="-1" class="" data-tokens="null" role="option"  aria-disabled="true" aria-selected="true"><span class="text">Floor</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">1</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">2</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">3</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">4</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">5</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">6</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">7</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">8</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span class="text">9</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select id="floors_count" class="selectpicker" data-width="fit" data-size="5" tabindex="-98">
                            <option selected="selected" disabled="disabled">Floor</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                          </select></div>
                        </div>
                      </div> 

                      <div class="btn-group d-flex mb-4">
                                                <input type="radio" class="btn-check" name="postedsince" value="all" id="posted_since_1" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="posted_since_1"><i class="icon-feather-calendar"></i> All</label>
                      
                        <input type="radio" class="btn-check" name="postedsince" value="yesterday" id="posted_since_2" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="posted_since_2"><i class="icon-feather-calendar"></i> Yesterday</label>
                      
                        <input type="radio" class="btn-check" name="postedsince" value="last_week" id="posted_since_3" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="posted_since_3"><i class="icon-feather-calendar"></i> Last Week</label>

                        <input type="radio" class="btn-check" name="postedsince" value="last_month" id="posted_since_4" autocomplete="off"/>
                        <label class="btn btn-outline-primary" for="posted_since_4"><i class="icon-feather-calendar"></i> Last Month</label>
                      </div> 

                    </div> 
                  
                    
                    <h5 id="list-item-6">Facing</h5>
                    <div class="btn-group d-flex flex-wrap mb-4">
                      <input type="checkbox" class="btn-check"  value="south" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing1"><i class="icon-feather-sun"></i><br/>South</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing2" value="north" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing2"><i class="icon-feather-sun"></i><br/>North</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing3" value="east" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing3"><i class="icon-feather-sun"></i><br/>East</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing4" value="west" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing4"><i class="icon-feather-sun"></i><br/>West</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing5" value="north_east" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing5"><i class="icon-feather-sun"></i><br/>North East</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing6" value="south_east" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing6"><i class="icon-feather-sun"></i><br/>South East</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing7" value="north_west" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing7"><i class="icon-feather-sun"></i><br/>North West</label>
                      <input type="checkbox" class="btn-check" name="facing[]" id="facing8" value="south_west" autocomplete="off"/>
                      <label class="btn btn-outline-primary" for="facing8"><i class="icon-feather-sun"></i><br/>South West</label>
                    </div>   
                  </div>
                  </div></div></div>
                </div>
              </div>              
            </div>
          </div>          
        </div>
        <div class="col-lg-auto col-sm-6 col-12">
          <div class="d-grid">
            <Link to='/property-listing'>
            <button type="submit" class="btn btn-info" style={{ minWidth: '120px' }} onClick={handleSearch}>Search</button>
            </Link>
          </div>                      
        </div>
      </div>                       
    </form>
  </div>
    </React.Fragment>
  )
}

export default SearchListingData
