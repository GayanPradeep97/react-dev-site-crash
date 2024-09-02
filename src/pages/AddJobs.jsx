/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJobs = ({ addJobsSubmit }) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setsalary] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
      },
    };

    addJobsSubmit(newJob);
    toast.success("Job added successfully");
    return navigate("/jobs");
  };
  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md boarder m-4 md:m-0">
          <h2 className="text-center font-bold text-xl">Add Job</h2>

          <form onSubmit={submitForm}>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Job Listing Name
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3"
                placeholder="eg: Beautifull Apartment in Mani"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Description
              </label>
              <textarea
                type="text"
                id="description"
                name="description"
                rows="4"
                className="border rounded w-full py-2 px-3"
                placeholder="Add any job description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - 60K</option>
                <option value="$60K - 70K">$60K - 70K</option>
                <option value="$70K - 80K">$70K - 80K</option>
                <option value="$80K - 90K">$80K - 90K</option>
                <option value="$90K - 100K">$90K - 100K</option>
                <option value="$100K - 125K">$100K - 125K</option>
                <option value="$125K - 150K">$125K - 150K</option>
                <option value="$150K - 175K">$150K - 175K</option>
                <option value="$175K - 180K">$175K - 180K</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Location
              </label>
              <input
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></input>
            </div>
            <h1 className="font-bold text-xl mb-4">Company Info</h1>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                className="border rounded w-full py-2 px-3"
                placeholder=""
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="companyDescription"
                name="companyDescription"
                rows="4"
                className="border rounded w-full py-2 px-3"
                placeholder="Add any job description"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Company Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                className="border rounded w-full py-2 px-3"
                placeholder=""
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 fonr-bold mb-2"
              >
                Company PhoneNumber
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                className="border rounded w-full py-2 px-3"
                placeholder=""
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              ></input>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full rounded-md height-12 bg-blue-500 text-white font-bold"
              >
                Add job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobs;
