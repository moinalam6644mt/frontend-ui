import React from 'react';

const PostRequirement = () => {
  return (
    <div>
      <section className="section post-req" style={{ backgroundImage: "url('http://localhost/realestate-live/public/images/building.jpg')" }}>
        <div className="container-fluid position-relative">
          <div className="row align-items-center">
            <aside className="col-lg-7 col-12">
              <div className="row row-0 justify-content-center">
                <article className="col-lg-4 col-sm-6 col-12">
                  <div className="post-info">
                    <img src="http://localhost/realestate-live/public/images/icons/customer.png" alt=""/>
                    <h4>Share your requirement</h4>
                    <p>Itaque earum rerum hic tenetur a sapiente delectus ut aut.</p>
                  </div>
                </article>
                <article className="col-lg-4 col-sm-6 col-12">
                  <div className="post-info">
                    <img src="http://localhost/realestate-live/public/images/icons/customer.png" alt=""/>
                    <h4>Admin will verify requirement</h4>
                    <p>Reiciendis voluptatibus maiores alias consequatur.</p>
                  </div>
                </article>
                <article className="col-lg-4 col-sm-6 col-12">
                  <div className="post-info">
                    <img src="http://localhost/realestate-live/public/images/icons/customer.png" alt=""/>
                    <h4>Get more property</h4>
                    <p>Perferendis doloribus asperiores repellat.</p>
                  </div>
                </article>
              </div>
            </aside>
            <aside className="col-lg-5 col-12">
              <div className="card card-contact">                
                <div className="card-body">
                  <div className="section-headline">
                    <h3>post your requirement</h3>
                    <p className="text-help mb-4">Our system will inform you & get your deal done.</p>
                  </div>
                  <a href="javascript:void(0)" className="btn-back-1"><i className="icon-material-outline-arrow-back"></i></a>
                  <form id="leadForm">
                    <div className="alert alert-danger alert-dismissible d-none">
                      <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                      <strong></strong>
                    </div>
                    <div className="alert alert-success alert-dismissible d-none">
                      <a href="#" className="close" data-dismiss="alert" aria-label="close">×</a>
                      <strong></strong>
                    </div>
                    <div id="step-1">
                      <input type="hidden" name="step" id="step" value="1"/>
                      <div className="form-floating mb-4">
                        <select className="form-select" id="floatingSelect" name="property_type">
                          <option value="">Select Property Type</option>
                          <option value="Flats">Flats</option>
                          <option value="House/Villa">House/Villa</option>
                          <option value="Residential Plots">Residential Plots</option>
                          {/* Add more options here */}
                        </select>
                        <label htmlFor="floatingSelect">Property Types</label>
                        <span className="error propertyError text-danger"></span>
                      </div>
                      {/* Range Slider  */}
                      <div className="form-floating mb-4">  
                        <select className="form-select" id="floatingSelect" name="budget">
                          <option value="AED200 - AED300">AED200 - AED300</option>
                          <option value="AED300 - AED400">AED300 - AED400</option>
                          {/* Add more options here */}
                        </select>
                        <label htmlFor="floatingSelect">Budget (USD)</label>              
                      </div>
                      <div className="form-floating mb-4">
                        <input type="text" className="form-control" name="location" id="floatingInput" placeholder="Location"/>
                        <label htmlFor="floatingInput">Location</label>
                        <span className="error locationError text-danger"></span>
                      </div>
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary btn-next-1">NEXT</button>
                      </div> 
                    </div>
                    <div id="step-2" style={{ display: 'none' }}>
                      <div className="form-floating mb-4">
                        <input type="text" className="form-control" name="name" id="floatingName" placeholder="Name"/>
                        <label htmlFor="floatingName">Name</label>
                        <span className="error nameError text-danger"></span>
                      </div>
                      <div className="form-floating mb-4">
                        <input type="email" name="email" className="form-control" id="floatingEmail" placeholder="Email"/>
                        <label htmlFor="floatingEmail">Email</label>
                        <span className="error emailError text-danger"></span>
                      </div>
                      <div className="form-floating mb-4">
                        <input type="number" name="phone" className="form-control" id="floatingMobile" placeholder="Mobile Number"/>
                        <label htmlFor="floatingMobile">Mobile Number</label>
                        <span className="error phoneError text-danger"></span>
                      </div>
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          <small>I agree to Home Loan T&C, Realestate T&C, Privacy Policy, & Cookie Policy</small>
                        </label>
                      </div>
                      <div className="d-grid">
                        <button type="button" className="btn btn-primary btn-next-1">SUBMIT</button>
                      </div> 
                    </div>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostRequirement;
