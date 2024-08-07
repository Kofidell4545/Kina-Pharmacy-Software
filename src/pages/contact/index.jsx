import React from "react";
import { Helmet } from 'react-helmet';

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
        <div className="w-full sm:w-[50%] py-8">
          <img
            className="object-cover h-full w-full"
            src="https://staticmapmaker.com/img/google-placeholder.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
