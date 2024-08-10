import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import AuthUser from "../Validation/AuthUser";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import AuthContext from "../../Context/AuthContext";
import Loading from "../../LoadingSpinner/Loading";

const Login = () => {
  const { callApi, saveToken } = AuthUser();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Initialize loading state
  const navigate = useNavigate();
  const { setUserData } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      member_email: "",
      password: "",
    },
    validationSchema: Yup.object({
      member_email: Yup.string()
        .email("Invalid email")
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters"),
    }),
    validateOnBlur: true,
    onSubmit: async (values) => {
      setLoading(true); // Start loading when the form is submitted
      try {
        const response = await callApi({
          api: "/login",
          method: "POST",
          data: values,
        });
        if (response && response.success === true) {
          setUserData(response.data);
          setTimeout(() => {
            saveToken(response.token);
            toast.success("Login Succesfully....!");
            navigate("/dashboard");
          }, 1000);
        } else {
          toast.error(response.message);
        }
      } catch (err) {
        console.log(err);
        toast.error("An error occurred while logging in. Please try again later.");
      } finally {
        setLoading(false); // Stop loading after the request is complete
      }
    },
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loading />} {/* Display loading spinner */}
      {/* short banner */}
      <div className="short-banner">
        <div className="container">
          <h1>Login</h1>
        </div>
      </div>

      {/* login */}

      <section className="section authentication-page">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <img src="./images/property-vector-2.png" alt="" className="img-fluid" />
              <h4>Things you can do with this account</h4>
              <ul className="list list-1 list-get">
                <li>Post one Single Property for FREE</li>
                <li>Set property alerts for your requirement</li>
                <li>Get accessed by over 1 Lakh buyers</li>
                <li>Showcase your property as Rental, PG or for Sale</li>
                <li>Get instant queries over Phone, Email and SMS</li>
                <li>Performance in search &amp; Track responses &amp; views online</li>
                <li>Add detailed property information &amp; multiple photos per listing</li>
              </ul>
            </div>
            <div className="col-lg-6 col-12">
              <form className="authentication-form" id="logform" onSubmit={formik.handleSubmit}>
                <h3 className="mb-4">Login to Post Your Ad</h3>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="member_email"
                    id="email"
                    value={formik.values.member_email}
                    onChange={formik.handleChange}
                    placeholder="name@example.com"
                  />
                  <label htmlFor="email">Email</label>
                  {formik.touched.member_email && formik.errors.member_email && (
                    <div style={{ color: "red", fontStyle: "italic" }}>
                      {formik.errors.member_email}
                    </div>
                  )}
                </div>
                <div className="form-floating mb-3 with-icon-end">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    name="password"
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Password"
                  />
                  <a
                    id="show-hide-pass"
                    title={passwordVisible ? "Hide Password" : "Show Password"}
                    data-placement="top"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={passwordVisible ? "icon-feather-eye" : "icon-feather-eye-off"}></i>
                  </a>
                  <label htmlFor="password">Password</label>
                  {formik.touched.password && formik.errors.password && (
                    <div style={{ color: "red", fontStyle: "italic" }}>{formik.errors.password}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button type="submit" disabled={!formik.isValid} className="btn btn-primary mb-2">
                    Log In
                  </button>
                </div>
                <p className="text-end">
                  <Link to="/forgetpassword">Forgot Password?</Link>
                </p>
                <p className="text-center">
                  <small>
                    Don’t have an account? <Link to="/register">Register Now</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Login;
