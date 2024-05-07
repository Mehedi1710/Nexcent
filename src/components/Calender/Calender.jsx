import React from 'react'
import calculator from '../../assets/calculator.png';

const Calender = () => {
  return (
    <div>
      <div className="max-w-container mx-auto ">
        <div className="md:flex items-center gap-x-[49px] mx-2 md:mx-0 text-center md:text-start">
          <div className="w-auto hidden md:flex justify-start py-[52px]">
            <img src={calculator} alt="" />
          </div>
          <div className="w-auto md:hidden flex justify-center py-[52px]">
            <img src={calculator} alt="" />
          </div>
          <div className="pb-10 md:pb-0">
            <div className="md:w-[601px] text-center md:text-start">
              <h1 className="text[#4D4D4D] text-[30px] md:text-[36px] font-semibold font-inter pb-4">
                How to design your site footer like we did
              </h1>
              <p className="text-[#717171] text-[14px] font-inter font-normal pb-8 md:w-[550px] flex justify-center">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
              <a
                href=""
                className="text-white bg-[#4CAF4F] px-8 py-[14px] border rounded-[6px] border-[#4CAF4F]"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calender