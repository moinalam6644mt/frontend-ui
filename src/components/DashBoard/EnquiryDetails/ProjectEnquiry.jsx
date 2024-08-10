import React, { useState } from "react";
import AuthUser from "../../Authentication/Validation/AuthUser";
import { useParams } from "react-router-dom";

const ProjectEnquiry = () => {
  const { project_id } = useParams();
  const { callApi } = AuthUser();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
console.log(project_id);

  const changeformData = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const submitFormData = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await callApi({
        api: `/project_enquiry/${project_id}`,
        method: "POST",
        data:formData
      });

      if (response) {
        console.log("Form submitted successfully:", response);
      } else {
        console.error(
          "Form submission failed:",
          response.message || "Unknown error"
        );
      }

      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="">
        <form className="" onSubmit={submitFormData}>
          <input type="hidden" name="property_owner_id" value="42" />
          <div className="floating-label-group">
            <input
              type="name"
              name="name"
              value={formData.name}
              className="form-control"
              placeholder=" "
              required
              onChange={changeformData}
            />
            <label className="floating-label">
              Name <span className="req">*</span>
            </label>
          </div>
          <div className="floating-label-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-control"
              placeholder=" "
              required
              onChange={changeformData}
            />
            <label className="floating-label">
              Email <span className="req">*</span>
            </label>
          </div>
          <div className="floating-label-group">
            <input
              type="number"
              name="mobile"
              value={formData.mobile}
              className="form-control"
              placeholder=" "
              required
              onChange={changeformData}
            />
            <label className="floating-label">Mobile</label>
          </div>
          <div className="floating-label-group">
            <textarea
              rows="3"
              name="message"
              value={formData.message}
              className="form-control"
              placeholder=" "
              required
              onChange={changeformData}
            ></textarea>
            <label className="floating-label">
              Message <span className="req">*</span>
            </label>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-site" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ProjectEnquiry;
