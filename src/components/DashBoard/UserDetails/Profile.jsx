import React, { useEffect, useState } from 'react';
import AuthUser from '../../Authentication/Validation/AuthUser';
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Profile = () => {
  const { callApi } = AuthUser();
  const [image] = useState(null);
  const [logo, setLogo] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('user');
      if (token) {
        const decoded = jwtDecode(token);
        setUserData(decoded.data);
        await profilePhoto(decoded.data.user_id);
      }
    };
    fetchProfileData();
  }, []);

  useEffect(() => {
    if (image) {
      console.log("Image state updated, calling handleUpload");
      handleUpload();
    }
  }, [image]);

 
  const handleUpload = async () => {
    try {
      const response = await callApi({
        api: `/logo_upload/${userData.user_id}`,
        method: "UPLOAD",
        data: {
          image: image,
        },
      });
      setLogo(response.data.url);
    } catch (error) {
      console.error("Error in uploading image:", error);
    }
  };

  const profilePhoto = async (userId) => {
    try {
      const response = await callApi({
        api: `/get_logo/${userId}`,
        method: "GET",
      });

       const logoUrl=response.path+response.result.logo
        setLogo(logoUrl);
      
      
    } catch (error) {
      console.error("Error in fetching profile photo:", error);
    }
  };

  const printPage = () => {
    window.print();
  };
  
  return (
    <>
      <div className="short-banner">
        <div className="container">
          <h1>My Profile</h1>
        </div>
      </div>

      <div className="section profile">
        <div className="container-fluid">
          <div className="row main-row">
            <aside className="col-xl-8 col-lg-8 col-12">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">My Profile</a></li>
              </ol>
              <div className="card card-agent-page mb-4">
                <div className="row g-0">
                  <div className="col-sm-auto col-4">
                    <div className="card-image">
                      <img src={logo} alt="Profile" className="img-fluid" />
                    </div>
                  </div>
                  <div className="col-sm col-8">
                    <div className="card-body">
                      <div className="card-title">
                        <h4 className="mb-1">{userData?.name} <i className="icon-img-check ms-2"></i></h4>
                      </div>
                      <p className="mb-2"></p>
                      <p className="mb-1"><i className="icon-feather-map-pins"></i>Email: <b>{userData?.email}</b> </p>
                      <p className="mb-2">
                        <span><i className="material-icons-outlined"></i>Number: <b>{userData?.number}</b></span>
                      </p>
                      <div className="d-sm-flex">
                        <div className="social-share-wrap">
                          <a className="btn btn-sm btn-outline-site w-auto"><i className="icon-feather-share-2"></i>Share</a>
                          <div className="share-items">
                            <a className="btn-floating btn btn-tw" title="Share on Facebook"><i className="icon-brand-facebook-f"></i></a>
                            <a className="btn-floating btn btn-tw"><i className="icon-brand-twitter"></i></a>
                            <a className="btn-floating btn btn-tw" title="Share on Linkedin"><i className="icon-brand-linkedin-in"></i></a>
                            <a className="btn-floating btn btn-tw"><i className="icon-brand-whatsapp"></i></a>
                          </div>
                        </div>
                        <span className="edit-wrap"><Link to='/profile-edit' className="btn btn-sm btn-primary"><i className="icon-feather-edit-3"></i>Edit</Link></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="text-uppercase">About owner </h4>
              <p></p>
              <div className="text-center mb-4">
                <img src="./images/ads/ads-blank.jpg" alt="Ads" className="img-fluid" />
              </div>
              <h4 className="text-uppercase"></h4>
            </aside>
            <aside className="col-xl-4 col-lg-4 col-12">
              <div className="sticky-top">
                <div className="sort-by mb-2">
                  <a className="btn me-2 ads-fav" data-act="favourite1" title="Save for Later">
                    <i className="icon-line-awesome-heart-o"></i>
                  </a>
                  <a className="btn me-2" title="Report this Ad" data-bs-toggle="modal" data-bs-target="#reportModal"><i className="icon-feather-flag"></i></a>
                  <a className="btn me-2" title="Print" onClick={printPage}><i className="icon-feather-printer"></i></a>
                </div>
                <div className="dashboard-listing mb-4 border">
                  {/* Add listing content here */}
                </div>
                <div className="card mb-4" hidden>
                  <div className="card-header"><h4>Contact Agent</h4></div>
                  <div className="card-body">
                    <form id="agent_message" data-post="posttoagent" action="./message?name=IjQyIg==">
                      <div className="floating-label-group">
                        <input type="text" name="name" id="name" className="form-control" placeholder=" " required />
                        <label className="floating-label">Name</label>
                      </div>
                      <div className="floating-label-group">
                        <input type="email" name="email" className="form-control" placeholder=" " required />
                        <label className="floating-label">Email</label>
                      </div>
                      <div className="floating-label-group">
                        <input type="number" name="mobile" className="form-control" placeholder=" " required />
                        <label className="floating-label">Mobile</label>
                      </div>
                      <div className="floating-label-group">
                        <textarea rows="3" name="message" className="form-control" placeholder=" " required></textarea>
                        <label className="floating-label">Message</label>
                      </div>
                      <div className="d-grid">
                        <button type="submit" className="btn btn-site">SEND</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h4>Office Address</h4>
                    <address>
                      <i className="icon-feather-map-pin text-site"></i> UAE 
                    </address>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99512.80400724961!2d54.49250820162658!3d24.340538033250233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e476b238494e5%3A0xfd3db0486d6d68d6!2sMohamed%20Bin%20Zayed%20City%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1650384953003!5m2!1sen!2sin"
                      width="600"
                      height="315"
                      style={{ border: 0, width: '100%' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                </div>
                <img src="./images/ads/houseSaleFlyerGREEN.jpg" alt="Ads" className="img-fluid" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
