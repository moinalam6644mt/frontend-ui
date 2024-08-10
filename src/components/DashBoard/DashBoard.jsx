import React,{useEffect,useContext} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import toast from 'react-hot-toast';
import AuthUser from '../Authentication/Validation/AuthUser';
import AuthContext from "../Context/AuthContext";

const DashBoard = () => {
  const {logout} =AuthUser();
  
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      toast.success("Login Succesfully....!");
    }, 1000);
  }, []); 
 
  return (
    <>
      <div className="short-banner">
        <div className="container">
          <h1>Dashboard</h1>
        </div>
      </div>
      <section className="section">
        <div className="container-fluid">
          <div className="row">
             <Sidebar userData={userData}/>
            <aside className="col-xl col-lg col-12">
              <div className="row">
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="All Property">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/home-2.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>All Property</h5>
                    </div>
                  </a>
                </article>
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="Property for Sale">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/sale-2.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>Property for Sale</h5>
                    </div>
                  </a>
                </article>
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="Property for Rent">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/rent-3.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>Property for Rent</h5>
                    </div>
                  </a>
                </article>
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="Property for Hostel">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/hostel.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>Property for Hostel</h5>
                    </div>
                  </a>
                </article>
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="Favourite Property">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/favourite-property.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>Favourite Property</h5>
                    </div>
                  </a>
                </article>
                <article className="col-md-4 col-sm-6 col-12">
                  <a className="fun-facts d-flex align-items-center" title="Total Reports">
                    <div className="flex-shrink-0">
                      <img src="./images/icons/home-2.png" alt="..." height="48" width="48" />
                      <span className="icon-circle"></span>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h2>0</h2>
                      <h5>Total Reports</h5>
                    </div>
                  </a>
                </article>
              </div>

              <div className="row">
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <canvas id="barChart1" style={{
                        height: "176px",
                        width: "451px",
                        display: "block",
                        boxSizing: "border-box"
                      }}
                        width="451" height="176"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card mb-4">
                    <div className="card-body">
                      <canvas id="barChart2" style={{
                        height: "176px",
                        width: "451px",
                        display: "block",
                        boxSizing: "border-box"
                      }}
                        width="451" height="176"
                      ></canvas>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-listing card mb-4">
                <div className="p-2">
                  <div className="row">
                    <article className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="iconx"><i className="icon-feather-map"></i></div>
                        <div className="flex-grow-1 ms-3">
                          <h5>Active Listings</h5>
                          <h3>124</h3>
                        </div>
                        <a href="" className="btn btn-sm btn-outline-site">VIEW</a>
                      </div>
                    </article>
                    <article className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="iconx"><i className="icon-feather-bar-chart-2"></i></div>
                        <div className="flex-grow-1 ms-3">
                          <h5>Listing Views</h5>
                          <h3>1056 <small>(<span className="text-site">+356</span> this week)</small></h3>
                        </div>
                        <a href="" className="btn btn-sm btn-outline-site">VIEW</a>
                      </div>
                    </article>
                    <article className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="iconx"><i className="icon-feather-message-circle"></i></div>
                        <div className="flex-grow-1 ms-3">
                          <h5>Your Reviews</h5>
                          <h3>357 <small>(<span className="text-site">+12</span> this week)</small></h3>
                        </div>
                        <a href="" className="btn btn-sm btn-outline-site">VIEW</a>
                      </div>
                    </article>
                    <article className="col-md-6 col-12">
                      <div className="d-flex align-items-center">
                        <div className="iconx"><i className="icon-feather-heart"></i></div>
                        <div className="flex-grow-1 ms-3">
                          <h5>Bookmarked</h5>
                          <h3>2329 <small>(<span className="text-site">+234</span>  this week)</small></h3>
                        </div>
                        <a href="" className="btn btn-sm btn-outline-site">VIEW</a>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-header">
                      <div className="btn-group bootstrap-select select-sm" style={{ width: "110px" }}><button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" title="Sort By"><span className="filter-option pull-left"> Sort By</span>&nbsp;<span className="bs-caret"><span className="caret"></span></span></button><div className="dropdown-menu open" role="combobox"><ul className="dropdown-menu inner" role="listbox" aria-expanded="false"><li data-original-index="0" className="disabled selected"><a tabIndex="-1" className="" data-tokens="null" role="option" href="#" aria-disabled="true" aria-selected="true"><span className="text"> Sort By</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text"> Weekly</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Monthly</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabIndex="0" className="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false"><span className="text">Yearly</span><span className="glyphicon glyphicon-ok check-mark"></span></a></li></ul></div><select className="selectpicker select-sm" data-width="110" tabIndex="-98">
                        <option value="selected" disabled="disabled"> Sort By</option>
                        <option> Weekly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                      </select></div>
                    </div>
                    <div className="card-body">
                      <canvas id="lineChart" style={{ width: "621px", display: "block", boxSizing: "border-box", height: "310px" }} width="621" height="310"></canvas>
                    </div>

                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body">
                      <canvas id="doughnutChart" style={{ height: "281px", width: "281px", display: "block", boxSizing: "border-box" }} width="281" height="281"></canvas>
                    </div>

                  </div>
                </div>
              </div>

              <h4>Property Overview</h4>
              <div className="ul-table-responsive">
                <div className="ul-table">
                  <ul className="head">
                    <li>Order No.</li>
                    <li>Customer</li>
                    <li>Property</li>
                    <li>Date</li>
                    <li>Type</li>
                    <li>Status</li>
                  </ul>
                  <ul>
                    <li>#841590</li>
                    <li>Farooq Basir</li>
                    <li>Dubai Marina, Dubai, UAE</li>
                    <li>15/03/2022</li>
                    <li>Flats</li>
                    <li><span className="badge bg-success">On Rent</span></li>
                  </ul>
                  <ul>
                    <li>#978456</li>
                    <li>Mohammad Taqi</li>
                    <li>Mohamed Bin Zayed City, Abu Dhabi, UAE</li>
                    <li>24/01/2022</li>
                    <li>Appartment</li>
                    <li><span className="badge bg-warning">On Sale</span></li>
                  </ul>
                  <ul>
                    <li>#454871</li>
                    <li>Selma Haq</li>
                    <li>Oceana Caribbean, Fujairah, UAE</li>
                    <li>06/10/2021</li>
                    <li>Plots</li>
                    <li><span className="badge bg-success">On Rent</span></li>
                  </ul>
                  <ul>
                    <li>#348451</li>
                    <li>Ahmed Tijani</li>
                    <li>Salam Street, Abu Dhabi, UAE</li>
                    <li>12/08/2021</li>
                    <li>House/Villa</li>
                    <li><span className="badge bg-success">On Rent</span></li>
                  </ul>
                  <ul>
                    <li>#348451</li>
                    <li>Aisha Rahman</li>
                    <li>Al Muwaiji, Al Ain, UAE</li>
                    <li>03/05/2021</li>
                    <li>Hotels</li>
                    <li><span className="badge bg-warning">On Sale</span></li>
                  </ul>
                  <ul>
                    <li>#978456</li>
                    <li>Jamal Razzaq</li>
                    <li>Al Nuaimia 1, Ajman, UAE</li>
                    <li>23/12/2020</li>
                    <li>Penthouse</li>
                    <li><span className="badge bg-warning">On Sale</span></li>
                  </ul>
                </div>

              </div>
            </aside>
          </div>
        </div>
      </section>
    </>


  )
}

export default DashBoard
