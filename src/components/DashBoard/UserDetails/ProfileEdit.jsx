import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Sidebar from "../../Sidebar/Sidebar";
import AuthUser from "../../Authentication/Validation/AuthUser";

const ProfileEdit = () => {
  const { callApi } = AuthUser();
  const formik = useFormik({
    initialValues: {
      name: "Moin",
      email: "moin@gmail.com",
      phone_code: "+91",
      phoneNumber: "",
      whatsappNumber: "",
      address: "",
      city: "",
      websiteTitle: "",
      websiteUrl: "",
      description: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.number().required("Phone Number is required"),
      whatsappNumber: Yup.number(),
      address: Yup.string(),
      city: Yup.string().required("City is required"),
      websiteTitle: Yup.string(),
      websiteUrl: Yup.string().url("Invalid URL"),
      description: Yup.string(),
    }),
    onSubmit: async (values) => {
      try {
        const response = await callApi({
          api: "/update-form-data",
          method: "POST",
          data: values,
        });
        if (response && response.success === true) {
        } else {
        }
      } catch (error) {}
      console.log("Form Data Submitted: ", values);
    },
  });

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
            <Sidebar />
            <div className="col-xl-9 col-lg-9 col-12">
              <form
                className="authentication-form"
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                      />
                      <label className="floating-label">Name*</label>
                      {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled
                      />
                      <label className="floating-label">Email*</label>
                      {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="row">
                      <div className="col-lg-2">
                        <div className="floating-label-group">
                          <select
                            className="form-control"
                            style={{ width: "75px" }}
                            name="phone_code"
                            value={formik.values.phone_code}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          >
                            <option value="+91">+91</option>
                            <option value="+71">+71</option>
                            <option value="+81">+81</option>
                            <option value="+30">+30</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-10">
                        <div className="floating-label-group">
                          <input
                            type="text"
                            name="phoneNumber"
                            className="form-control"
                            placeholder=" "
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            required
                          />
                          <label className="floating-label">Phone Number</label>
                          {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber ? (
                            <div className="error">
                              {formik.errors.phoneNumber}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="whatsappNumber"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.whatsappNumber}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="floating-label">WhatsApp Number</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="floating-label">Address</label>
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="floating-label-group">
                      <select
                        name="city"
                        className="form-control"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">Select City</option>
                        <option value="Amject">Amject</option>
                        <option value="Rajshatan">Rajshatan</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Srilanka">Srilanka</option>
                        <option value="Australia">Australia</option>
                      </select>
                      <label className="floating-label">Select City</label>
                      {formik.touched.city && formik.errors.city ? (
                        <div className="error">{formik.errors.city}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="websiteTitle"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.websiteTitle}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="floating-label">
                        Your Website Title
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 col-12">
                    <div className="floating-label-group">
                      <input
                        type="text"
                        name="websiteUrl"
                        className="form-control"
                        placeholder=" "
                        value={formik.values.websiteUrl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <label className="floating-label">Your Website URL</label>
                      {formik.touched.websiteUrl && formik.errors.websiteUrl ? (
                        <div className="error">{formik.errors.websiteUrl}</div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="floating-label-group">
                  <textarea
                    name="description"
                    className="form-control"
                    placeholder=" "
                    rows="5"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></textarea>
                  <label className="floating-label">Description</label>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-site mb-2">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileEdit;
