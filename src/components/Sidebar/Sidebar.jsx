import { useEffect, useState } from "react";
import AuthUser from "../Authentication/Validation/AuthUser";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const Sidebar = () => {
  const { callApi } = AuthUser();
  const [image, setImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [userData, setUserData] = useState(null)
  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const decoded = jwtDecode(token)

      setUserData(decoded.data);
      profilePhoto(decoded.data.user_id)
    }
  }, []);

  useEffect(() => {
    if (image) {
      handleUpload();
    }
  }, [image]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

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

      const logoUrl = response.path + response.result.logo
      setLogo(logoUrl);


    } catch (error) {
      console.error("Error in fetching profile photo:", error);
    }
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return string;
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <aside className="col-xl-auto col-lg-auto col-4">
      <div className="user-sidebar">
        <div className="user-profile text-center">
          <div className="avatar mb-3">
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <img
              src={logo}
              alt="profile-photo"
              style={{ height: "128px", width: "128px" }}
            />
            <label
              className="material-icons-outlined"
              style={{ cursor: "pointer" }}
              htmlFor="fileInput"
            >
              add_a_photo
            </label>
          </div>
          <div className="user-profile-details">
          <h5 className="mb-0">
              {capitalizeFirstLetter(userData?.name)}
            </h5>
            <p className="mb-0">
              
              <i>{userData?.type === "A" ? "Agent" : userData?.type === "B" ? "Builder" : userData?.type === "O"?"Owner":userData?.type === "C"?"Company":""}</i>
            </p>
            <p>
              <i className="icon-feather-map-pin text-site"></i> Abu Dhabi, UAE
            </p>
            <div className="d-grid mb-3">
              <Link to='/profile' className="btn btn-sm btn-primary">View Profile</Link>
            </div>
          </div>
        </div>
        <div className="toggleDiv">
          <a id="toggleZ">
            <i className="icon-material-outline-arrow-back"></i>
          </a>
        </div>
        <ul className="user-nav">
          <li>
            <Link to="/" className="d-lg-none">
              <i className="material-icons-outlined text-green">local_mall</i>{" "}
              Buy
            </Link>
          </li>
          <li>
            <Link to="/" className="d-lg-none">
              <i className="material-icons-outlined text-indigo">sell</i> Sell
            </Link>
          </li>
          <li>
            <Link to="/" className="d-lg-none">
              <i className="material-icons-outlined text-yellow">
                real_estate_agent
              </i>{" "}
              Rent
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="active">
              <i className="material-icons-outlined text-teal">dashboard</i>{" "}
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              {" "}
              <i className="material-icons-outlined text-pink">
                account_circle
              </i>{" "}
              <span>My Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/profile-edit">
              <i className="material-icons-outlined text-pink">
                account_circle
              </i>{" "}
              <span>My Account</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons-outlined text-blue">comment</i>{" "}
              <span>My Reviews</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons-outlined text-purple">mail</i>{" "}
              <span>Message</span>
            </Link>
          </li>
          <li className="dropdown">
            <a className="nav-toggle-1" data-bs-toggle="dropdown">
              <i className="icon-material-outline-business text-success"></i>{" "}
              <span>Property CRM</span>{" "}
              <i className="icon-line-awesome-angle-down ms-auto"></i>
            </a>
            <ul className="nav-hide-menu" id="hide-menu-1">
              <li>
                <Link to="/">
                  <i className="icon-line-awesome-arrow-right"></i>Activities
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon-line-awesome-arrow-right"></i>Deals
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon-line-awesome-arrow-right"></i>Leads
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon-line-awesome-arrow-right"></i>Enquiries
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="/">
              <i className="material-icons-outlined text-cyan">
                maps_home_work
              </i>{" "}
              <span>Packages</span>{" "}
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/my-property">
              <i className="material-icons-outlined text-cyan">
                maps_home_work
              </i>{" "}
              <span>My Properties</span>{" "}
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/my-project">
              <i className="material-icons-outlined text-cyan">
                maps_home_work
              </i>{" "}
              <span>My Projects</span>{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons-outlined text-danger">
                favorite_border
              </i>{" "}
              <span>My Favourites</span>
            </Link>
          </li>
          <li>
            <Link to={`/user-enquiry/${''}`}>
              <i className="icon-material-outline-info text-primary"></i>{" "}
              <span>Enquiry</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="icon-feather-flag text-danger"></i>{" "}
              <span>User Reports</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons-outlined text-success">lock</i>{" "}
              <span>Change Password</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="material-icons-outlined text-danger">logout</i>{" "}
              <span>Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
