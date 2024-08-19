import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../../assets/background.jpg";
import Elipse from "../../assets/Elipse.png";
import malar from "../../assets/malar.png";
import imboost from "../../assets/imboost.png";
import methodex from "../../assets/methodex.png";
import amoxicillin from "../../assets/amoxicillin.png";
import painkiller from "../../assets/painkiller.png";
import firstAid from "../../assets/firstAid.png";
import dental from "../../assets/dental.png";
import allergy from "../../assets/Allergy.png";
import supplement from "../../assets/supplement.png";
import herbaldrug from "../../assets/herbaldrug.png";
import shield from "../../assets/shield.png";
import whyUs from "../../assets/whyUs.png";
import allService from "../../assets/allService.png";
import drug from "../../assets/drug.png";
import nurse from "../../assets/nurse.png";

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

      {/* Header Banner */}
      <div
        className="relative h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-6 md:px-20 space-y-4">
          <h1 className="text-[#D64779] text-[24px] font-bold">Kina Pharmacy</h1>
          <h2 className="text-white text-4xl md:text-5xl font-semibold">
            Your Trusted <br /> Pharmacy Store
          </h2>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-wrap justify-center items-center p-6 space-y-6 md:space-y-0">
        {icons.map((item) => (
          <div key={item.id} className="flex items-center p-4 space-x-4">
            <div>{item.icon}</div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-[#7A7A7A]">{item.purpose}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Promotions Section */}
      <div className="flex flex-wrap justify-center space-y-6 lg:space-y-0 lg:space-x-6 p-6">
        <div className="bg-[#DEE9FF] p-6 rounded-lg w-full lg:w-[470px]">
          <p className="text-lg font-bold">Big Sales</p>
          <h3 className="text-4xl font-semibold">Get an Extra</h3>
          <h3 className="text-4xl font-semibold text-[#1364FF]">
            50% <span className="text-black">Off</span>
          </h3>
          <p className="text-sm text-[#7A7A7A]">Promo Available for Regular Customers.</p>
        </div>
        <div className="bg-slate-900 text-white p-6 rounded-lg w-full lg:w-[470px] flex flex-col justify-between">
          <div className="flex justify-between items-center">
            <p className="text-lg">Take the discount for the first shopping on our website</p>
            <img src={Elipse} alt="Promo" className="w-16 h-16" />
          </div>
          <p className="text-5xl font-semibold">30%</p>
        </div>
      </div>

      {/* Featured Products */}
      <section className="p-6 max-w-screen-lg mx-auto">
        <header className="text-center">
          <p className="text-[#D64779] text-lg font-bold">Featured</p>
          <h2 className="text-3xl font-semibold">Featured Pharmacy Essentials</h2>
        </header>
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <p className="text-sm text-[#7A7A7A] md:w-3/4">
            Discover our featured pharmacy essentials, carefully selected to meet your everyday health and wellness needs.
          </p>
          <Link to="/our-pharmacy" className="mt-4 md:mt-0">
            <button className="bg-white text-black border border-black px-4 py-2">
              All Products
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h4 className="mt-4 text-lg font-semibold">{item.name}</h4>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Sections */}
      <section className="p-6 max-w-screen-lg mx-auto space-y-10">
        {/* Pain Relievers */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 relative h-64 md:h-72 rounded-lg overflow-hidden">
            <img src={painkiller} alt="Pain Relievers" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
              <h3 className="text-xl font-semibold text-white">Pain Relievers</h3>
              <p className="text-sm text-white">
                Pain relievers, also known as analgesics, are medications designed to reduce or eliminate pain. They come in various forms, including over-the-counter (OTC) and prescription options.
              </p>
              <Link to="/education" className="flex items-center text-white mt-4">
                <p>Explore Category</p>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Allergy Medications and Dental Care */}
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 bg-gray-100 p-6 rounded-lg flex items-center space-x-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Allergy Medications</h3>
              <p className="text-sm text-gray-700">
                Allergy medications help alleviate symptoms caused by allergic reactions to pollen, dust, pet dander, and other allergens.
              </p>
              <Link to="/education" className="flex items-center text-[#1364FF] mt-4">
                <p>Explore Category</p>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <img src={allergy} alt="Allergy Medications" className="w-20 h-20 object-cover rounded-full" />
          </div>

          <div className="flex-1 bg-gray-100 p-6 rounded-lg flex items-center space-x-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Dental Care</h3>
              <p className="text-sm text-gray-700">
                Dental care products are designed to maintain and improve oral hygiene, including toothpaste, toothbrushes, and mouthwashes.
              </p>
              <Link to="/education" className="flex items-center text-[#1364FF] mt-4">
                <p>Explore Category</p>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <img src={dental} alt="Dental Care" className="w-20 h-20 object-cover rounded-full" />
          </div>
        </div>

        {/* First Aid Essentials */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 relative h-64 md:h-72 rounded-lg overflow-hidden">
            <img src={firstAid} alt="First Aid Essentials" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
              <h3 className="text-xl font-semibold text-white">First Aid Essentials</h3>
              <p className="text-sm text-white">
                First aid essentials are the basic items needed to treat minor injuries and emergencies, including bandages, antiseptics, and pain relievers.
              </p>
              <Link to="/education" className="flex items-center text-white mt-4">
                <p>Explore Category</p>
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col md:flex-row justify-evenly m-10 gap-10">
        <div className="mb-5 md:mb-0">
          <p className="text-[#D64779] font-bold">Why Us</p>
        </div>
        <div>
          <h2 className="text-[35px] font-semibold mb-5" style={{ width: 390 }}>
            Our Commitment to Quality
          </h2>
          <div className="flex flex-col md:flex-row mt-5 justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={supplement} alt="Supplement" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">Wide Product Range</p>
                <p className="text-[#7A7A7A] text-[14px] mt-1" style={{ width: 278 }}>
                  Our pharmacy offers an extensive selection of products to meet all
                  your health, wellness, and personal care needs.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-5 justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={herbaldrug} alt="Herbal Drug" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">Quality Assurance</p>
                <p className="text-[#7A7A7A] text-[14px] mt-1" style={{ width: 278 }}>
                  We are committed to providing you with the highest quality products
                  and services. Our quality assurance measures ensure that you
                  receive safe, effective, and reliable care every time you visit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row mt-5 justify-center gap-10">
            <div className="flex items-center gap-5">
              <div className="bg-[#1364FF] p-2 rounded-lg">
                <img src={shield} alt="Shield" />
              </div>
              <div>
                <p className="font-semibold text-[20px]">Eco-Friendly Practices</p>
                <p className="text-[#7A7A7A] text-[14px] mt-1" style={{ width: 278 }}>
                  We are dedicated to protecting the environment and promoting
                  sustainable practices.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-0">
          <img
            src={whyUs}
            alt="Pharmacist"
            className="rounded-xl"
            style={{ width: 380, height: 450, objectFit: "cover" }}
          />
        </div>
      </div>

      {/** Service Section */}
      {/* <div className="flex flex-col lg:flex-row justify-evenly m-4 lg:m-10 gap-10">
        <div className="mb-4 lg:mb-0">
          <p className="text-[#D64779] font-bold">Service</p>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:w-auto w-full">
          <h2 className="text-[25px] lg:text-[35px] font-semibold w-full lg:w-96">
            Comprehensive Pharmacy Services
          </h2>
          <p className="text-[#7A7A7A] text-[14px] mt-1 w-full lg:w-96">
            Our pharmacy offers a wide range of services designed to meet all
            your health and wellness needs. Our commitment to providing
            excellent care and personalized service.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <img src={allService} alt="All Services" />
        </div>
      </div> */}

      {/** Additional Services Section */}
      {/* <div className="flex flex-col md:flex-row p-20 justify-between gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="relative rounded-2xl">
            <img src={drug} alt="Prescription Filling" className="rounded-2xl" />
          </div>
          <div className="flex items-start gap-3">
            <p className="font-semibold text-[20px]">01/</p>
            <div>
              <p className="font-semibold text-[20px]">Prescription Filling</p>
              <p className="text-[#7A7A7A] text-[14px] mt-1" style={{ width: 278 }}>
                Convenient and timely refills for all your medications, with options
                for auto-refill and reminders.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4">
          <div className="relative rounded-2xl">
            <img src={nurse} alt="Health Consultations" className="rounded-2xl" />
          </div>
          <div className="flex items-start gap-3">
            <p className="font-semibold text-[20px]">02/</p>
            <div>
              <p className="font-semibold text-[20px]">Health Consultations</p>
              <p className="text-[#7A7A7A] text-[14px] mt-1" style={{ width: 278 }}>
                One-on-one consultations with our pharmacists to discuss your
                medications, health concerns, and any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Home;
