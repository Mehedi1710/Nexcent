import React from 'react'
import banner from '../../assets/banner.png'
import Ellipse1 from '../../assets/Ellipse1.png'
import Ellipse2 from '../../assets/Ellipse2.png'
import Ellipse3 from '../../assets/Ellipse3.png'

const Banner = () => {
  return (
    <div className="bg-[#F5F7FA] pt-5 md:pt-[96px]">
      <div className="max-w-container mx-auto">
        <div className="md:flex items-center justify-between px-2 text-center md:text-start">
          <div className="md:w-[657px]">
            <p className="text-[48px] md:text-[64px] text-[#4D4D4D] font-semibold leading-none font-inter">
              Lessons and insights
            </p>
            <p className="text-[#4CAF4F] text-[48px] md:text-[64px] font-semibold font-inter">
              from 8 years
            </p>
            <p className="text-base text-[#717171] md:pt-4 pb-8 md:pb-[50px]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <div>
              <a
                href=""
                className="text-white bg-[#4CAF4F] px-8 py-[14px] border rounded-[6px] border-[#4CAF4F]"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
            <img src={banner} alt="" />
          </div>
          <div className="md:hidden flex justify-center pt-8">
            <img src={banner} alt="" />
          </div>
          
        </div>
        <div className="flex items-center justify-center md:pt-[80px] gap-x-[8px] pb-4">
          <img src={Ellipse1} alt="" />
          <img src={Ellipse2} alt="" />
          <img src={Ellipse3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner