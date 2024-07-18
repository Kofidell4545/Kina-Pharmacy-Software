import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

// styles
import "../../components/header/styles.css"

// logo import
import logo from "../../assets/logo.png"

const sections = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Pharmacy", path: "/our-pharmacy" },
  { title: "Education", path: "/education" },
  { title: "Contact", path: "/contact" },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
];

const Footer = () => {
  return (
    <div className="w-full bg-slate-900 text-gray-300 px-2 py-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="mb-4">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 border-b-2 border-gray-600 py-4 gap-4">
          <div className="grid grid-cols-2 md:grid-cols-5 col-span-4">
            {sections.map((section, index) => (
              <div key={index} className="text-center md:text-left">
                <Link to={section.path} className="font-bold uppercase hover:underline">
                  {section.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="col-span-2 pt-4 md:pt-0">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-2">
              The latest news, health tips, and safety, sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                className="w-full p-2 mr-0 sm:mr-4 rounded-md mb-2"
                type="email"
                placeholder="Enter email.."
              />
              <button className="p-2 mb-2">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between text-center text-gray-500 py-4">
          <p>2024 Kina Pharmacy, LLC. All rights reserved</p>
          <div className="flex justify-center sm:w-[300px] pt-4 sm:pt-0 text-2xl">
            {items.map((x, index) => (
              <a
                key={index}
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 hover:text-white"
              >
                <x.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
