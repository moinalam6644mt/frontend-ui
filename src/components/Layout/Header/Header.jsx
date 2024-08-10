import React from "react";
import logo from "../../images/logo.png";
import free from "../../images/free.png";
import arabic from "../../images/arabic.svg";
import { Link, useNavigate } from "react-router-dom";
import AuthUser from "../../Authentication/Validation/AuthUser";
import toast from "react-hot-toast";

const Header = () => {
  const {getToken,logout}=AuthUser()
  const token = getToken("user");
   const navigate=useNavigate();

  const handleLogout = () => { 
    logout();
    navigate('/')
    window.location.reload();
    toast.success("Logout Successfully...!");
  };
  return (
    <>
      <header id="header-container" className="header-sticky">
        {/* Header */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid position-relative">
            <Link to='/' className="navbar-brand">
              <img src={logo} alt="Logo" className="d-none d-lg-block" />
              <img src={logo} alt="Logo" className="d-lg-none" />
            </Link>
            <div className="d-flex align-items-center">
              <div id="navigation">
                <ul
                  id="desk-nav"
                  className="navbar-nav me-lg-auto mb-2 mb-lg-0 align-items-center"
                >
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle">Buy</a>
                    <ul className="dropdown-single dropdown-menu">
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Property Types
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">
                              Buy Residential properties
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Buy Commercial properties
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Buy Agricultural properties
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy uihk properties</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Property For
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Buy Flats</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy House/Villa</a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Buy Residential Plots
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Bunglow</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Office Space</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Shop/Showroom</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Warehouse</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Apartment</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy Shop Rents</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Buy re</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <Link to='/all-project' className="dropdown-item dropdown-toggle">
                          Buy Project
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle">Sell</a>
                    <ul className="dropdown-single dropdown-menu">
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          For Owner
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">
                              Post Property <span className="badge">Free</span>
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Sell / Rent Ad Packages
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          For Agent & Builder
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Ad Packages</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Advantage</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Developer Lounge</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Sales Enquiry</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Selling Tools
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Property Valuation</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Find Agent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Rates and Trends</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Insights
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Locality Insights</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Ratings & Reviews</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Registry Records</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Price Trends</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Home Loan</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle">Rent</a>
                    <ul className="dropdown-single dropdown-menu">
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Popular Choices
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Owner Properties</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Verified Properties</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Property Types
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">
                              Residential property for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Commercial property for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Agricultural property for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              uihk property for rent
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Property For
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Flats for rent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              House/Villa for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Residential Plots for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Bunglow for rent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Office Space for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Shop/Showroom for rent
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">Warehouse for rent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Apartment for rent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Shop Rents for rent</a>
                          </li>
                          <li>
                            <a className="dropdown-item">re for rent</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">Budget</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">AED99 - AED199</a>
                          </li>
                          <li>
                            <a className="dropdown-item">AED200 - AED300</a>
                          </li>
                          <li>
                            <a className="dropdown-item">AED301 - AED499</a>
                          </li>
                          <li>
                            <a className="dropdown-item">AED500 - AED599</a>
                          </li>
                          <li>
                            <a className="dropdown-item">AED600 - AED999</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Above AED1000</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">Explore</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">About Us</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle">Home Loan</a>
                    <ul className="dropdown-single dropdown-menu">
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Apply Now
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">Home Loans</a>
                          </li>
                          <li>
                            <a className="dropdown-item">Balance Transfer</a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Loan Against Property
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Partners
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">SBIHome Loan</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">Explore</a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">
                              Home Loan EMI Calculator
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Home Loan Eligibility
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Home Loan Prepayment
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Home Loan Interest Rate
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Home Loan Balance Transfer
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item">
                              Home Loan Documentation
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropend">
                        <a className="dropdown-item dropdown-toggle">
                          Interest Rate
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item">
                              SBIHome Loan Interest Rate
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link to='/agent-list' className="nav-link">Find Agent</Link>
                  </li>
                 
                  {token ? (
          <React.Fragment>
            <li className="nav-item ms-lg-5">
              <a className="nav-link message-nav">
                <i className="icon-line-awesome-envelope"></i>{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle user-dropdown">
                <img
                  src="http://localhost/realestate-live/public/images/user.jpg"
                  alt="Account"
                  height="40"
                  width="40"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-single dropdown-menu account-menu">
                <li>
                  <Link to='/dashboard' className="dropdown-item">
                    <i className="icon-feather-grid text-teal"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link to='/profile' className="dropdown-item">
                    <i className="icon-feather-user text-pink"></i> My Profile{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" onClick={handleLogout}>
                    <i className="material-icons-outlined text-danger">logout</i> Logout{" "}
                  </Link>
                </li>
              </ul>
            </li>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <li className="nav-item ms-lg-3">
              <Link to="/login" className="nav-link">
                <i className="icon-feather-edit-2"></i> Log In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                <i className="icon-feather-user"></i> Register{" "}
              </Link>
            </li>
          </React.Fragment>
        )}
                  <li className="nav-item ms-lg-3">
                    <Link
                      to="/postproperty"
                      className="nav-link btn btn-primary btn-post"
                    >
                      <i className="icon-line-awesome-mouse-pointer"></i> Post
                      Property
                      <img src={free} alt="Free Badge" height="32" width="32" />
                    </Link>
                  </li>
                  <li className="nav-item ms-lg-3 setlang">
                    <a>
                      <img
                        src={arabic.svg}
                        alt="Arabic"
                        height="24"
                        width="24"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle">en</a>
                    <ul className="dropdown-single dropdown-menu dropdown-menu-end">
                      <li>
                        <a className="dropdown-item dropdown-toggle">en</a>
                      </li>
                      <li>
                        <a className="dropdown-item dropdown-toggle">ar</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <span className="mmenu-trigger">
                <button className="hamburger hamburger--collapse" type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </nav>
        {/* Header / End */}
      </header>
      <div class="clearfix"></div>
    </>
  );
};

export default Header;
