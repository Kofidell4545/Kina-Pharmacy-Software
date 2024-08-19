import React, { useState } from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (!formData.userName || !formData.userEmail || !formData.userMessage) {
      setStatus("All fields are required.");
      return;
    }

    setIsSubmitting(true);
    setStatus("Submitting...");

    try {
      const response = await fetch("https://pharmacy-api-1u0w.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          userName: "",
          userEmail: "",
          userMessage: "",
        });
      } else {
        setStatus("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="relative flex flex-col sm:flex-row bg-purple-700">
        <img className="h-[330px] w-full object-fill" src="/Far.jpg" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-1 px-4 sm:px-0">
          <p className="text-2xl sm:text-5xl font-bold text-white">About Us</p>
          <p className="text-base sm:text-lg text-center text-white mx-4 sm:mx-80">
            Help us by sharing your feedback and suggestions. Together we'll
            create a healthier future.
          </p>
        </div>
      </div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="flex sm:flex-row flex-col sm:px-14 px-4 my-10 w-full h-auto"
      >
        <div className="w-full sm:w-[50%] py-10 flex flex-col">
          <h1 className="sm:text-5xl text-2xl mb-6 font-bold sm:text-left text-center">
            Contact Us
          </h1>
          <p className="sm:text-left text-center">
            Help us by sharing your feedback and suggestions. Together we'll
            create a healthier future.
          </p>
          <label htmlFor="userName" className="text-md mb-2 mt-8">
            Name
          </label>
          <input
            id="userName"
            type="text"
            value={formData.userName}
            onChange={handleChange}
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full"
            placeholder="Enter your name here..."
            aria-label="Enter your name"
          />
          <label htmlFor="userEmail" className="text-md mb-2 mt-8">
            Email
          </label>
          <input
            id="userEmail"
            type="email"
            value={formData.userEmail}
            onChange={handleChange}
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full"
            placeholder="Enter your email here..."
            aria-label="Enter your email"
          />
          <label htmlFor="userMessage" className="text-md mb-2 mt-8">
            Message
          </label>
          <textarea
            id="userMessage"
            value={formData.userMessage}
            onChange={handleChange}
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full h-[170px]"
            placeholder="Type your message here..."
            aria-label="Enter your message"
          />
          <button
            type="submit"
            className={`mt-10 bg-black text-white p-2 sm:w-[10%] w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 ${
              isSubmitting && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <p className="mt-4 text-center">{status}</p>
        </div>
        {/* Google Map */}
        <div className="w-full sm:w-[50%] py-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31769.142377961387!2d-0.45866122568363116!3d5.545835800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbbfbbfecb7ab%3A0xe98b0882e04d02a5!2sPharmacy!5e0!3m2!1sen!2sgh!4v1723771736369!5m2!1sen!2sgh"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="object-cover h-full w-full"
          ></iframe>
        </div>
      </form>
    </div>
  );
};

export default Contact;
