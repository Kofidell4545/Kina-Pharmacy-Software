import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <div className="flex sm:flex-row flex-col sm:px-14 px-4 my-10 w-full h-auto">
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
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full"
            placeholder="Enter your name here..."
          />
          <label htmlFor="userEmail" className="text-md mb-2 mt-8">
            Email
          </label>
          <input
            id="userEmail"
            type="email"
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full"
            placeholder="Enter your Email here..."
          />
          <label htmlFor="userMessage" className="text-md mb-2 mt-8">
            Message
          </label>
          <textarea
            id="userMessage"
            className="border border-black p-2 focus:outline-none focus:ring-2 focus:ring-black sm:w-[90%] w-full h-[170px]"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="mt-10 bg-black text-white p-2 sm:w-[10%] w-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700"
          >
            Submit
          </button>
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
      </div>
    </div>
  );
};

export default Contact;
