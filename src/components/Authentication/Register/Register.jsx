import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import AuthUser from "../Validation/AuthUser";
import validationRules from "../Validation/validation";
import Loading from "../../LoadingSpinner/Loading";

const Register = () => {
  const navigate = useNavigate();
  const { callApi } = AuthUser();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false); // Set loading to false initially
  const [formData, setFormData] = useState({
    user_type: "",
    member_name: "",
    member_email: "",
    password: "",
    phone_code: "+91",
    phone_number: "",
  });

  const [setError] = useState(null);

  const handleSubmit = async (values) => {
    setLoading(true); // Start loading when the form is submitted
    let response;
    if (currentStep === 1) {
      try {
        response = await callApi({
          api: "/send-otp",
          method: "POST",
        });
        console.log(response);
        if (response && response.success === true) {
          setCurrentStep(2);
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to send OTP");
      } finally {
        setLoading(false); // Stop loading after the request is complete
      }
    } else {
      try {
        response = await callApi({
          api: "/register",
          method: "POST",
          data: values,
        });
        navigate("/login");
        console.log("OTP validated:", response);
        // Optionally, you can handle further steps or redirect after successful validation
      } catch (error) {
        console.error("Error:", error);
        setError("Failed to register");
      } finally {
        setLoading(false); // Stop loading after the request is complete
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    formik.setFieldValue(name, value);
  };

  console.log(formData)

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationRules,
    onSubmit: handleSubmit, // Submit handler for the final step
  });

  const handleResendOTP = async () => {
    setLoading(true); // Start loading when resending OTP
    try {
      const response = await callApi({
        api: "/send-otp",
        method: "GET",
      });
      console.log("OTP sent:", response);
      if (response && response.message === true) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to resend OTP");
    } finally {
      setLoading(false); // Stop loading after the request is complete
    }
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      {loading && <Loading />} {/* Display loading spinner */}
      {/* short banner */}
      <div className="short-banner">
        <div className="container">
          <h1>Sign Up</h1>
        </div>
      </div>
      {/* registration form */}
      <section className="section authentication-page">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <img
                src="./images/property-vector-2.png"
                alt=""
                className="img-fluid"
              />
              <h4>Things you can do with this account</h4>
              <ul className="list list-1 list-get">
                <li>Post one Single Property for FREE</li>
                <li>Set property alerts for your requirement</li>
                <li>Get accessed by over 1 Lakh buyers</li>
                <li>Showcase your property as Rental, PG or for Sale</li>
                <li>Get instant queries over Phone, Email and SMS</li>
                <li>
                  Performance in search &amp; Track responses &amp; views online
                </li>
                <li>
                  Add detailed property information &amp; multiple photos per
                  listing
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-12">
              <span>{formik.errors.general}</span>

              <form
                className="authentication-form"
                id="regform"
                method="post"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <h3 className="mb-3">Register to Post Your Ad</h3>
                <label className="d-block mb-2">Register as a/an</label>

                <>
                  {/* user type field */}
                  {currentStep === 1 && (
                    <div
                      className="btn-group btn-group-site d-flex mb-3"
                      role="group"
                    >
                      <input
                        type="radio"
                        className="btn-check"
                        name="user_type"
                        value="O"
                        id="owner"
                        checked={formik.values.user_type === "O"}
                        onChange={handleChange}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="owner"
                      >
                        <img
                          src="./images/icons/owner.png"
                          alt=""
                          height="32"
                          width="32"
                        />
                        Owner
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="user_type"
                        id="agent"
                        value="A"
                        checked={formik.values.user_type === "A"}
                        onChange={handleChange}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="agent"
                      >
                        <img
                          src="./images/icons/agent.png"
                          alt=""
                          height="32"
                          width="32"
                        />
                        Agent
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="user_type"
                        id="builder"
                        value="B"
                        checked={formik.values.user_type === "B"}
                        onChange={handleChange}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="builder"
                      >
                        <img
                          src="./images/icons/builder.png"
                          alt=""
                          height="32"
                          width="32"
                        />
                        Builder
                      </label>

                      <input
                        type="radio"
                        className="btn-check"
                        name="user_type"
                        id="company"
                        value="C"
                        checked={formik.values.user_type === "C"}
                        onChange={handleChange}
                      />
                      <label
                        className="btn btn-outline-secondary"
                        htmlFor="company"
                      >
                        <img
                          src="./images/icons/company.png"
                          alt=""
                          height="32"
                          width="32"
                        />
                        Company
                      </label>

                      {formik.touched.user_type && formik.errors.user_type && (
                        <div style={{ color: "red", fontStyle: "italic" }}>
                          {formik.errors.user_type}
                        </div>
                      )}
                    </div>
                  )}
                  {/* Name field */}
                  {currentStep === 1 && (
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="member_name"
                        placeholder="Name"
                        value={formik.values.member_name}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor="member_name">Name</label>
                      {formik.touched.member_name &&
                        formik.errors.member_name && (
                          <div style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.member_name}
                          </div>
                        )}
                    </div>
                  )}

                  {/* Email field */}
                  {currentStep === 1 && (
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        name="member_email"
                        placeholder="Email"
                        value={formik.values.member_email}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor="member_email">Email </label>
                      {formik.touched.member_email &&
                        formik.errors.member_email && (
                          <div style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.member_email}
                          </div>
                        )}
                    </div>
                  )}

                  {/* Password field */}
                  {currentStep === 1 && (
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={formik.values.password}
                        onChange={handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label htmlFor="password">Password</label>
                      {formik.touched.password && formik.errors.password && (
                        <div style={{ color: "red", fontStyle: "italic" }}>
                          {formik.errors.password}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Phone number field */}
                  {currentStep === 1 && (
                    <div className="input-group mb-3">
                      <div className="" style={{ width: "80px" }}>
                        <select
                          className="form-control"
                          style={{ maxWidth: "80px" }}
                          name="phone_code"
                          value={formik.values.phone_code}
                          onChange={handleChange}
                          onBlur={formik.handleBlur}
                        >
                          <option value="+91">+91</option>
                          <option value="+71">+71</option>
                          <option value="+81">+81</option>
                          <option value="+30">+30</option>
                        </select>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          name="phone_number"
                          className="form-control"
                          placeholder="Mobile Number"
                          value={formik.values.phone_number}
                          onChange={handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="phone_number">Phone Number</label>
                        {formik.touched.phone_number &&
                          formik.errors.phone_number && (
                            <div style={{ color: "red", fontStyle: "italic" }}>
                              {formik.errors.phone_number}
                            </div>
                          )}
                      </div>
                    </div>
                  )}

                  {/* OTP field validation */}
                  {currentStep === 2 && (
                    <div className="input-group mb-3">
                      <div className="form-floating">
                        <input
                          type="text"
                          id="otp_data"
                          className="form-control"
                          placeholder="Mobile Number"
                          name="otp_data"
                          value={formik.values.otp_data}
                          onChange={handleChange}
                          onBlur={formik.handleBlur}
                        />
                        <label htmlFor="otp_data">Enter OTP</label>
                        {formik.touched.otp_data && formik.errors.otp_data && (
                          <div style={{ color: "red", fontStyle: "italic" }}>
                            {formik.errors.otp_data}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </>

                <div className="d-grid">
                  {currentStep === 1 ? (
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="btn btn-primary mb-2"
                    >
                      Sign Up
                    </button>
                  ) : (
                    <>
                      <button
                        type="submit"
                        disabled={!formik.isValid}
                        className="btn btn-primary mb-2"
                      >
                        Validate Now
                      </button>

                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="btn btn-info text-light w-25"
                      >
                        Resend OTP
                      </button>
                    </>
                  )}
                </div>

                <p>
                  <small>
                    By signing up you agree to our{" "}
                    <a>Terms &amp; Conditions</a> and{" "}
                    <a>Privacy Policy</a>.
                  </small>
                </p>
                <p className="text-center">
                  <small>
                    Already have an account?<Link to="/login"> Login Now</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
