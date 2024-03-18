import React, { useState } from "react";
import "./Style/informationsection.css";

const InformationSection = () => {
  const [showGeneralInfo, setShowGeneralInfo] = useState(false);
  const [showEducationInfo, setShowEducationInfo] = useState(false);
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    city: "",
    degree: "",
    college: "",
    college_city: "",
    country: "",
    start_date: "",
    end_date: "",
    job_title: "",
    company: "",
    job_start_date: "",
    job_end_date: "",
    job_description: "",
  });

  const toggleGeneralInfo = () => {
    setShowGeneralInfo(!showGeneralInfo);
  };

  const toggleEducationInfo = () => {
    setShowEducationInfo(!showEducationInfo);
  };

  const toggleProfessionalInfo = () => {
    setShowProfessionalInfo(!showProfessionalInfo);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="information-section">
      <div className="general-information">
        <h3 onClick={toggleGeneralInfo} className="general information-title">
          General Information
        </h3>
        {showGeneralInfo && (
          <form class="form" onSubmit={handleSubmit}>
            <div class="input-container">
              <input
                placeholder="Enter Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Your Email"
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Your City , Province"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <button class="submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="education-information">
        <h3
          onClick={toggleEducationInfo}
          className="education information-title"
        >
          Education Experience
        </h3>
        {showEducationInfo && (
          <form class="form" onSubmit={handleSubmit}>
            <div class="input-container">
              <input
                placeholder="Enter Your Degree"
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Your College Name"
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Your City"
                type="text"
                value={formData.college_city}
                name="college_city"
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter Your Country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter the Start Date"
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter the End Date"
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
              />
            </div>
            <button class="submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="professional-information">
        <h3
          onClick={toggleProfessionalInfo}
          className="professional information-title"
        >
          Professional Experience
        </h3>
        {showProfessionalInfo && (
          <form class="form" onSubmit={handleSubmit}>
            <div class="input-container">
              <input
                placeholder="Enter Your Job Title"
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter the Company Name"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                type="date"
                value={formData.job_start_date}
                name="job_start_date"
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                type="date"
                name="job_end_date"
                value={formData.job_end_date}
                onChange={handleChange}
              />
            </div>
            <div class="input-container">
              <input
                placeholder="Enter the job descriptions"
                type="text"
                name="job_description"
                value={formData.job_description}
                onChange={handleChange}
              />
            </div>
            <button class="submit" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default InformationSection;
