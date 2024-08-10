import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../Validation/AuthUser";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const ForgetPassword = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { callApi } = AuthUser();
  const [email, setEmail] = useState("");
  const [otpData, setOtpData] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (event, type) => {
    const value = event.target.value;
    if (type === "otp") {
      setOtpData(value);
    } else if (type === "password") {
      setPassword(value);
    } else if (type === "password") {
      setConfirmPassword(value);
    } else if (type === "email") {
      setEmail(value);
    }
  };

  const handleSubmit = async (values) => {
    try {
      let response;
      if (currentStep === 1) {
        response = await callApi({
          api: "/send-otp",
          method: "POST",
          data: email,
        });
        setOtpData(response.data);
        setCurrentStep(2);
        toast.success(response.message);
      } else if (currentStep === 2) {
        response = await callApi({
          api: "/verify-otp",
          method: "POST",
          data: {
            otp:otpData
          },
        });
        setCurrentStep(3);
        toast.success("OTP validated successfully");
      } else if (currentStep === 3) {
        if (password === confirmPassword) {
          // Passwords match, proceed with reset
          response = await callApi({
            api: "/update_password",
            method: "POST",
            data: values,
          });
          toast.success("Password reset successfully");
        } else {
          // Passwords don't match, show error toast
          toast.error("Passwords do not match");
          return; // Stop further execution
        }
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to complete the process");
    }
  };
  

  const formik = useFormik({
    initialValues: {
      email: email,
      otp:otpData,
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    validateOnBlur: true,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />

      {/* short banner */}
      <div className="short-banner">
        <div className="container">
          <h1>
            {currentStep === 1
              ? "Forget Password"
              : currentStep === 2
              ? "Validate OTP"
              : currentStep === 3
              ? "Set New Password"
              : ""}
          </h1>
        </div>
      </div>

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
              <form
                className="authentication-form"
                id="login_form"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <h3 className="mb-4">Forgot Password</h3>
                {currentStep === 1 && (
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      id="email"
                      placeholder="Enter your email"
                    />
                    <label htmlFor="email">Email</label>
                    {formik.touched.email && formik.errors.email && (
                      <div style={{ color: "red", fontStyle: "italic" }}>
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                )}
                {currentStep === 2 && (
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="otp_data"
                      value={otpData}
                      onChange={(e) => handleChange(e, "otp")}
                      id="otp_data"
                      placeholder="Enter OTP"
                    />
                    <label htmlFor="otp_data">Enter OTP</label>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      id="password"
                      placeholder="Enter new password"
                    />
                    <label htmlFor="password">New Password</label>
                  </div>
                )}
                {currentStep === 3 && (
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      id="confirmPassword"
                      placeholder="Re-enter new password"
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                  </div>
                )}
                <div className="d-grid">
                  <button type="submit" className="btn btn-site mb-2">
                    {currentStep === 1
                      ? "Submit"
                      : currentStep === 2
                      ? "Validate OTP"
                      : "Set New Password"}
                  </button>
                </div>

                <p className="text-end">
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
