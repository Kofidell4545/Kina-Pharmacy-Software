import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

import "./styles.css";

// Logo import
import logo from "../../assets/utils/logo.png";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', link: '/' },
    { id: 2, text: 'About', link: '/about' },
    { id: 3, text: 'Our Pharmacy', link: '/our-pharmacy' },
    { id: 4, text: 'Education', link: '/education' },
    { id: 5, text: 'Contact Us', link: '/contact' },
  ];

  return (
    <div className='relative bg-white flex justify-between items-center h-20 mx-auto px-4 text-white border-b-2 border-gray-300 uppercase z-50'>
      <h1 className='w-full text-3xl font-bold text-black uppercase'>kina pharmacy</h1>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
            <NavLink
              key={item.id}
              to={item.link}
              className='text-black rounded-xl m-2 cursor-pointer duration-300 font-semibold'
            >
              {item.text}
            </NavLink>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose className='text-black' size={22} /> : <AiOutlineMenu size={22} className='text-black' />}
      </div>

      <ul
        className={
          nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500 md:hidden flex flex-col z-50'
            : 'fixed left-[-100%] top-0 w-[60%] h-full border-r border-r-gray-900 bg-slate-900 ease-in-out duration-500 md:hidden flex flex-col z-50'
        }
      >
        <NavLink to="/">
          <img className='logo' src={logo} alt="company logo" />
        </NavLink>
        {navItems.map(item => (
          <NavLink
            key={item.id}
            to={item.link}
            className='p-4 border-b rounded-xl hover:bg-white duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
