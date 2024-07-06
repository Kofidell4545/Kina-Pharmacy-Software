import React from 'react';
import backgroundImage from '../../assets/background.jpg';
import { BsTruck } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";


const icons = [
  {  id : 1, icon : <BsTruck className='text-[#2e37fe]' size={26} />, name : 'Free shipping', purpose: 'Order over 800gh'},
  {  id : 2, icon : <CiCreditCard1 className='text-[#2e37fe]' size={26} />, name : 'Quick Payment', purpose: '100% secure'},
  {  id : 3, icon : <BiSupport className='text-[#2e37fe]' size={26} />, name : 'Support', purpose: 'Ready for You'},
]

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
    {/** Background image and section*/}
      <div className="relative h-[570px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-start items-start p-14 pl-20">
          <h1 className="text-[#D64779] text-[20px] md:text-[20px] font-bold mb-4">Kina Pharmacy</h1>
          <div className="text-white text-5xl md:text-[62px] font-semibold">
            <p className="mb-2">Your Trusted</p>
            <p>Pharmacy Store</p>
          </div>
        </div>
      </div>
      {/**icons after the background */}
      <div className="flex lg: justify-evenly  items-center  p-6">
        {icons.map((item, index) => (
          <div key={index} className="flex items-center p-4 ">
            <div className="mr-4">{item.icon}</div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-[11px] text-[#7A7A7A]">{item.purpose}</p>
            </div>
          </div>
        ))}
      </div>
      {/**Promo card */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-2">
        <div className="bg-[#DEE9FF] w-[470px] h-[250px] p-5 m-4 flex flex-col justify-center rounded-lg space-y-1">
          <p className=' font-bold text-[18px]'>Big Sales</p>
          <p className=' font-semibold text-[34px]' >Get an Extra</p>
          <p className=' font-semibold text-[34px] text-[#1364FF] pt-0 mt-0'>50% <span className=' font-semibold text-[34px] text-black'>Off</span></p>
          <p className='text-[#7A7A7A] text-[14px]'>Promo Available for Regular</p>
          <p className='text-[#7A7A7A] text-[14px]'>Customers.</p>
        </div>
        <div className="bg-slate-900 w-[470px] h-[250px] p-5 m-4 flex flex-col justify-center rounded-lg">
         
        </div>
      </div>




    </main>
  );
};

export default Home;
