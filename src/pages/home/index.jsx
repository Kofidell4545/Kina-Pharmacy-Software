import { Helmet } from 'react-helmet';

import backgroundImage from "../../assets/background.jpg";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import Elipse from "../../assets/Elipse.png";
import malar from "../../assets/malar.png";
import imboost from "../../assets/imboost.png";
import methodex from "../../assets/methodex.png";
import amoxicillin from "../../assets/amoxicillin.png";
import painkiller from "../../assets/painkiller.png";
import firstAid from "../../assets/firstAid.png";
import whyUs from "../../assets/whyUs.png";
import dental from "../../assets/dental.png";
import supplement from "../../assets/supplement.png";
import herbaldrug from "../../assets/herbaldrug.png";
import shield from "../../assets/shield.png";
import allergy from "../../assets/Allergy.png";
import drug from "../../assets/drug.png";
import nurse from "../../assets/nurse.png";
import allService from "../../assets/allService.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const icons = [
  {
    id: 1,
    icon: <BsTruck className="text-[#2e37fe]" size={26} />,
    name: "Free Shipping",
    purpose: "Order over 800gh",
  },
  {
    id: 2,
    icon: <CiCreditCard1 className="text-[#2e37fe]" size={26} />,
    name: "Quick Payment",
    purpose: "100% secure",
  },
  {
    id: 3,
    icon: <BiSupport className="text-[#2e37fe]" size={26} />,
    name: "Support",
    purpose: "Ready for You",
  },
];

const products = [
  { id: 1, image: malar, name: "Malar-z", price: "26gh" },
  { id: 2, image: imboost, name: "Imboost herbal mixture", price: "20gh" },
  { id: 3, image: methodex, name: "Menthodex Cough Mixture", price: "35gh" },
  { id: 4, image: amoxicillin, name: "Amoxicillin", price: "50gh" },
];

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Helmet>
          <title>Home - Kina Pharmacy</title>
        </Helmet>
      <div
        className="relative h-[486px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-start items-start p-14 pl-20">
          <h1 className="text-[#D64779] text-[20px] md:text-[20px] font-bold mb-4">
            Kina Pharmacy
          </h1>
          <div className="text-white text-5xl md:text-[62px] font-semibold">
            <p className="mb-2">Your Trusted</p>
            <p>Pharmacy Store</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly items-center p-6">
        {icons.map((item) => (
          <div key={item.id} className="flex items-center p-4">
            <div className="mr-4">{item.icon}</div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-[11px] text-[#7A7A7A]">{item.purpose}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center p-2">
        <div className="bg-[#DEE9FF] w-full lg:w-[470px] h-[250px] p-5 m-4 flex flex-col justify-center rounded-lg space-y-1">
          <p className="font-bold text-[18px]">Big Sales</p>
          <p className="font-semibold text-[34px]">Get an Extra</p>
          <p className="font-semibold text-[34px] text-[#1364FF] pt-0 mt-0">
            50%{" "}
            <span className="font-semibold text-[34px] text-black">Off</span>
          </p>
          <p className="text-[#7A7A7A] text-[14px]">
            Promo Available for Regular
          </p>
          <p className="text-[#7A7A7A] text-[14px]">Customers.</p>
        </div>
        <div className="bg-slate-900 w-full lg:w-[470px] h-[250px] p-5 m-4 flex flex-col justify-between rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[18px] text-white">
                Take the discount for the first
              </p>
              <p className="text-[18px] text-white">shopping on our website</p>
            </div>
            <div>
              <img src={Elipse} alt="logo" />
            </div>
          </div>
          <div className="flex justify-start items-end h-full">
            <p className="text-[40px] font-semibold text-white">30%</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div>
          <p className="text-[20px] text-[#D64779] font-bold">Featured</p>
        </div>
        <div className="my-2">
          <p className="text-[34px] font-semibold">
            Featured Pharmacy Essentials
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <p className="text-[16px] text-[#7A7A7A] mb-4 md:mb-0 md:w-[768px] w-full">
              Discover our featured pharmacy essentials, carefully selected to
              meet your everyday health and wellness needs. These essentials
              include:
            </p>
            <Link to="/our-pharmacy">
              <button className="bg-white text-black py-1 px-2 md:py-2 md:px-4 md:ml-4 border border-black w-24 md:w-auto text-sm">
                All Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center lg:justify-start">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white p-2 sm:p-4 flex flex-col items-center w-full h-[200px] sm:h-[400px]"
            >
              <div className="mb-2">
                <img
                  src={item.image}
                  alt="product"
                  className="object-cover h-[100px] sm:h-[200px]"
                />
              </div>
              <div className="font-semibold w-full text-left text-sm sm:text-base">
                {item.name}
              </div>
              <div className="text-black w-full text-left text-sm sm:text-base">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row mt-10 mx-auto"
        style={{ gap: 20 }}
      >
        <div
          className="flex-1 flex items-center justify-center rounded-xl overflow-hidden"
          style={{
            height: "300px",
            width: "100%",
            maxWidth: "250px",
            position: "relative",
          }}
        >
          <img
            src={painkiller}
            alt="Pain Relievers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-left text-black p-4">
              <p className="font-semibold">Pain Relievers</p>
              <p>
                Pain relievers, also known as analgesics, are medications
                designed to reduce or eliminate pain. They come in various forms
                including over-the-counter (OTC) and prescription options.
              </p>
              <Link to="/education" className="flex flex-row items-center">
                <p className="text-[#4F66AF] m-2">Explore Category</p>
                <div>
                  <FaArrowRight className="text-[#4F66AF]" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="flex-1 flex flex-col lg:flex-row rounded-xl overflow-hidden bg-gray-100"
          style={{ height: "300px", width: "100%", maxWidth: "600px" }}
        >
          <div className="flex-1 p-4">
            <p className="font-semibold">Allergy Medications</p>
            <p>
              Allergy medications help alleviate symptoms caused by allergic
              reactions to pollen, dust, pet dander, and other allergens. These
              symptoms can include sneezing, runny or stuffy nose, and skin
              rashes.
            </p>
            <Link to="/education" className="flex flex-row items-center">
              <p className="text-[#4F66AF] m-2">Explore Category</p>
              <div>
                <FaArrowRight className="text-[#4F66AF]" />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={allergy}
              alt="Allergy Medications"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className="flex flex-col md:flex-row mt-10 mx-auto mb-10"
        style={{ gap: 20 }}
      >
        <div
          className="flex-1 flex flex-col lg:flex-row rounded-xl overflow-hidden bg-gray-100"
          style={{ height: "300px", width: "100%", maxWidth: "600px" }}
        >
          <div className="flex-1 p-4">
            <p className="font-semibold">First Aid</p>
            <p>
              First aid supplies are essential for treating minor injuries and
              accidents. Our comprehensive range of first aid products includes
              adhesive bandages, sterile gauze pads, and wound dressings to
              manage cuts.
            </p>
            <Link to="/education" className="flex flex-row items-center">
              <p className="text-[#4F66AF] m-2">Explore Category</p>
              <div>
                <FaArrowRight className="text-[#4F66AF]" />
              </div>
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={firstAid}
              alt="First Aid"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div
          className="flex-1 flex items-center justify-center rounded-xl overflow-hidden"
          style={{
            height: "300px",
            width: "100%",
            maxWidth: "250px",
            position: "relative",
          }}
        >
          <img
            src={dental}
            alt="Dental Care"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-left text-black p-4">
              <p className="font-semibold">Dental Care</p>
              <p>
                Maintaining good oral hygiene is essential for overall health.
                Our range of dental care products includes toothbrushes,
                toothpaste, floss, mouthwash, and specialized items like dental
                picks and interdental brushes.
              </p>
              <Link to="/education" className="flex flex-row items-center">
                <p className="text-[#4F66AF] m-2">Explore Category</p>
                <div>
                  <FaArrowRight className="text-[#4F66AF]" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly m-10">
        <div className="mb-5 md:mb-0">
          <p className="text-[#D64779] font-bold">Why Us</p>
        </div>
        <div>
          <h2 style={{ width: 390 }} className="text-[35px] font-semibold">
            Our Commitment to Quality
          </h2>
          <div
            className="flex flex-col md:flex-row mt-5 justify-center"
            style={{ gap: 10 }}
          >
            <div className="mb-5 md:mb-0">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={supplement} alt="drug" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-[20px]">Wide Product Range</p>
              <p
                style={{ width: 278 }}
                className="text-[#7A7A7A] text-[14px] mt-1"
              >
                Our pharmacy offers an extensive selection of products to meet
                all your health, wellness, and personal care needs.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row mt-5 justify-center"
            style={{ gap: 10 }}
          >
            <div className="mb-5 md:mb-0">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={herbaldrug} alt="drug" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-[20px]">Quality Assurance</p>
              <p
                style={{ width: 278 }}
                className="text-[#7A7A7A] text-[14px] mt-1"
              >
                At our pharmacy, we are committed to providing you with the
                highest quality products and services. Our quality assurance
                measures ensure that you receive safe, effective, and reliable
                care every time you visit.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col md:flex-row mt-5 justify-center"
            style={{ gap: 10 }}
          >
            <div className="mb-5 md:mb-0">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={shield} alt="drug" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-[20px]">
                Eco-Friendly Practices
              </p>
              <p
                style={{ width: 278 }}
                className="text-[#7A7A7A] text-[14px] mt-1"
              >
                At our pharmacy, we are dedicated to protecting the environment
                and promoting sustainable practices.
              </p>
            </div>
          </div>
        </div>
        <div style={{ width: 400 }} className="rounded-xl mt-5 md:mt-0">
          <img
            src={whyUs}
            alt="Pharmacist"
            style={{ width: "380px", height: "450px", objectFit: "cover" }}
            className="rounded-xl"
          />
        </div>
      </div>

      {/**Service Section */}
      <div className="flex flex-col lg:flex-row justify-evenly m-4 lg:m-10">
        <div className="mb-4 lg:mb-0">
          <p className="text-[#D64779] font-bold">Service</p>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-auto w-full">
          <div>
            <h2 className="text-[25px] lg:text-[35px] font-semibold w-full lg:w-96">
              Comprehensive Pharmacy Services
            </h2>
          </div>
          <div className="w-full lg:w-96">
            <p className="text-[#7A7A7A] text-[14px] mt-1">
              Our pharmacy offers a wide range of services designed to meet all
              your health and wellness needs. Our commitment to providing
              excellent care and personalized service
            </p>
          </div>
        </div>
        <div className="mt-4 lg:mt-0">
          <img src={allService} alt="All Service" />
        </div>
      </div>

      <div className="flex flex-row p-20 justify-between">
        <div>
          {/**Image */}
          <div className="relative rounded-2xl  ">
            <div className=" rounded-2xl ">
              <img src={drug} alt="drug" className=" rounded-2xl " />
            </div>
            <div className="bg-[#1364FF]  absolute top-10 right-10 p-3 rounded-full ">
              <FaArrowRightLong className="text-white " size={24} />
            </div>
          </div>
          {/**Text below the image  */}
          <div className="flex flex-row">
            <div>
              <p className="font-semibold text-[20px]">01/</p>
            </div>
            <div>
              <p className="font-semibold text-[20px]">Prescription Filling</p>
              <p style={{ width: 278 }} className="text-[#7A7A7A]">
                Convenient and timely refills for all your medications, with
                options for auto-refill and reminders.
              </p>
            </div>
          </div>
        </div>
        {/**Second image */}
        <div>
          {/**Image */}
          <div className="relative rounded-2xl  ">
            <div className=" rounded-2xl ">
              <img src={nurse} alt="nurse" className=" rounded-2xl " />
            </div>
            <div className="bg-[#1364FF]  absolute top-10 right-10 p-3 rounded-full ">
              <FaArrowRightLong className="text-white " size={24} />
            </div>
          </div>
          {/**Text below the image  */}
          <div className="flex flex-row">
            <div>
              <p className="font-semibold text-[20px]">03/</p>
            </div>
            <div>
              <p className="font-semibold text-[20px]">Health Consultations</p>
              <p style={{ width: 278 }} className="text-[#7A7A7A]">
                One-on-one consultations with our pharmacists to discuss your
                medications, health concerns, and any questions you may have
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
