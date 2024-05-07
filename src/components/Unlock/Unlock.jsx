import React from 'react'
import pana from '../../assets/rafiki.png'

const Unlock = () => {
  return (
    <div>
      <div className="max-w-container mx-auto">
        <div className="md:flex items-center gap-x-[49px] px-2 md:px-0 pb-10 md:pb-0">
          <div className="hidden md:flex justify-start py-8 md:py-[52px]">
            <img src={pana} alt="" />
          </div>
          <div className="md:hidden flex justify-center py-8 md:py-[52px]">
            <img src={pana} alt="" />
          </div>
          <div className="text-center md:text-start">
            <div className="md:w-[601px]">
              <h1 className="text[#4D4D4D] text-[28px] md:text-[36px] font-semibold font-inter pb-4">
                The unseen of spending three years at Pixelgrade
              </h1>
              <p className="text-[#717171] text-[14px] font-inter font-normal pb-8 md:w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
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

export default Unlock