import React from 'react';
import logo from '../../../Assets/images/logo.png'
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="footer-top">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer-links">
                <h4>Property By City <a href="#" className="icon-line-awesome-angle-down"></a></h4>
                <ul className="foot-nav">
                  <li><a >Property in Al Ain</a></li>
                  <li><a>Property in Dubai</a></li>
                  <li><a >Property in Abu Dhabi</a></li>
                  <li><a >Property in Sharjah</a></li>
                  <li><a >Property in Ajman</a></li>
                  <li><a>Property in Ras Al Khaimah</a></li>
                  <li><a >Property in Fujairah</a></li>
                  <li><a >Property in Umm al-Quwain</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer-links">
                <h4>Property Type <a href="#" className="icon-line-awesome-angle-down"></a></h4>
                <ul className="foot-nav">
                  <li><a >Flats</a></li>
                  <li><a >House/Villa</a></li>
                  <li><a >Residential Plots</a></li>
                  <li><a >Bungalow</a></li>
                  <li><a >Office Space</a></li>
                  <li><a >Shop/Showroom</a></li>
                  <li><a >Warehouse</a></li>
                  <li><a >Commercial Plot</a></li>
                  <li><a >Project</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer-links">
                <h4>About Us <a href="#" className="icon-line-awesome-angle-down"></a></h4>
                <ul className="foot-nav">
                  <li><a >About Us</a></li>
                  <li><a>Blog</a></li>
                  <li><a >Contact Us</a></li>
                  <li><a >FAQs</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12">
              <div className="footer-links mb-4">
                <h4>Contact Us <a href="#" className="icon-line-awesome-angle-down"></a></h4>
                <ul className="foot-nav">
                  <a className="d-inline-block mb-3" href="#"><img src={logo} alt="Logo" className="d-none d-md-block"/><img src={logo} alt="Logo" className="d-md-none"/></a>
                  <address>
                    {/* Your address goes here */}
                  </address>
                </ul>
              </div>
              <div className="footer-links mb-3">
                <ul className="social-links footer-social-links">
                  {/* Your social links go here */}
                </ul>
              </div>
              <div className="download-app">
                {/* Your download app links go here */}
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          {/* Your copyright text goes here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
