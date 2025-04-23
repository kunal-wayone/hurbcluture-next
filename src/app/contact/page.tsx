"use client";
import React, { useState } from "react";
import HeaderSection from "../components/common/HeaderSection";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"; // Added social media icons
import { Post } from "../../hooks/apiutils";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    query: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let isValid = true;
    const errorMessages = { ...errors };

    if (!formData.name.trim()) {
      errorMessages.name = "Name is required.";
      isValid = false;
    } else {
      errorMessages.name = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errorMessages.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errorMessages.email = "Please enter a valid email address.";
      isValid = false;
    } else {
      errorMessages.email = "";
    }

    if (!formData.phone.trim()) {
      errorMessages.phone = "Phone is required.";
      isValid = false;
    } else {
      errorMessages.phone = "";
    }

    if (!formData.subject.trim()) {
      errorMessages.subject = "Subject is required.";
      isValid = false;
    } else {
      errorMessages.subject = "";
    }

    if (!formData.query.trim()) {
      errorMessages.query = "Query is required.";
      isValid = false;
    } else {
      errorMessages.query = "";
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const response: any = await Post("/api/contact", formData);

      if (!response.success) {
        throw new Error("Failed to submit the form.");
      }

      setSuccessMessage("Your message has been successfully sent!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        query: "",
      });

      setShowModal(true); // Show the thank-you modal
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false); // Close the modal when the user clicks "Close"
  };

  return (
    <div className="bg-white">
      <div className="bg-white mt-[9.6rem] max-w-7xl m-auto p-4 lg:p-16">
        <div className="px-10">
          <HeaderSection
            title="Contact Us"
            subTitle=""
            description=""
            className={{
              containerClass: "bg-white p-6 rounded-2xl",
              titleClass: "text-2xl text-center font-bold mb-2",
              subTitleClass: "text-lg text-primary mb-1",
              descriptionClass: "text-sm text-gray-600",
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-8">
          {/* Contact Details Column */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-primary">
              Contact Information
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              Feel free to reach out to us through any of the contact methods
              below.
            </p>

            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-primary text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Phone</h3>
                <p className="text-sm text-gray-600">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-primary text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Email</h3>
                <p className="text-sm text-gray-600">info@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-primary text-xl" />
              <div>
                <h3 className="text-xl font-semibold text-primary">Address</h3>
                <p className="text-sm text-gray-600">
                  123 Street, City, Country
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-primary">Follow Us</h3>
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-primary text-2xl hover:text-blue-600" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-primary text-2xl hover:text-blue-400" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-primary text-2xl hover:text-blue-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-lg text-secondary outline-0 placeholder:text-gray-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-primary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-lg text-secondary outline-0 placeholder:text-gray-400"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-primary"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-lg text-secondary outline-0 placeholder:text-gray-400"
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-primary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-lg text-secondary outline-0 placeholder:text-gray-400"
                placeholder="Enter subject"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm">{errors.subject}</p>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <label
                htmlFor="query"
                className="text-sm font-medium text-primary"
              >
                Query
              </label>
              <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                className="border border-gray-200 p-2 rounded-lg text-secondary outline-0 placeholder:text-gray-400"
                rows={4}
                placeholder="Enter your message"
              />
              {errors.query && (
                <p className="text-red-500 text-sm">{errors.query}</p>
              )}
            </div>

            <div>
              {loading ? (
                <button
                  type="submit"
                  disabled
                  className="bg-primary text-white p-2 rounded-xl w-full"
                >
                  Sending...
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-primary text-white p-2 rounded-xl w-full"
                >
                  Submit
                </button>
              )}
            </div>

            {successMessage && (
              <p className="text-green-500 text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </div>
      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold text-center text-primary">
              Thank You!
            </h2>
            <p className="text-sm text-center text-gray-600 mt-4">
              Your message has been successfully sent. We will get back to you
              as soon as possible.
            </p>
            <div className="flex justify-center mt-6">
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white py-2 px-4 rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
