import React, { useState } from 'react'
import navlogo from '../../assets/nav_logo.png'
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleCLick = () => {
    setNav(!nav);
  }
  return (
    <div className="bg-[#F5F7FA] py-[22px]">
      <div className="max-w-container mx-auto">
        <div className="hidden md:flex items-center justify-between">
          <div>
            <img src={navlogo} alt="" />
          </div>
          <div>
            <ul className="flex items-center gap-x-[50px]">
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Service
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Feature
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Product
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-x-[10px]">
              <a
                href=""
                className="text-[#4CAF4F] px-5 py-[10px] border rounded-[6px]"
              >
                Login
              </a>
              <a
                href=""
                className="text-white bg-[#4CAF4F] px-5 py-[10px] border rounded-[6px] border-[#4CAF4F]"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
        <div className="block md:hidden px-2">
          <div className='flex items-center justify-between'>
            <img src={navlogo} alt="" />
            <div onClick={handleCLick} className='cursor-pointer'>
              {nav ? <RxCross1 /> : <FaBars />}
            </div>
          </div>
          <div className={nav
            ? 'fixed h-full left-0 top-0  w-[80%] ease-in duration-300  pl-4 pt-8 bg-green-500'
            : 'fixed left-[-100%] ease-out'}>
            <div className='py-2'>
            <ul>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Home
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Service
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Feature
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Product
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="" className="text-[#18191F] text-base">
                  FAQ
                </a>
              </li>
            </ul>
            </div>
          <div>
            <div className="flex items-center gap-x-[10px]">
              <a
                href=""
                className="text-[#4CAF4F] px-4 py-1 border rounded-[6px]"
              >
                Login
              </a>
              <a
                href=""
                className="text-white bg-[#4CAF4F] px-4 py-1 border rounded-[6px] border-[#4CAF4F]"
              >
                Sign up
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar