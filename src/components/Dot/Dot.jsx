import React from 'react'

const Dot = () => {
  return (
    <div className='bg-[#F5F7FA] py-8'>
      <div className="max-w-container mx-auto">
        <div className="text-center mx-2 md:mx-0">
          <h1 className="md:w-[887px] m-auto md:leading-[76px] text-[44px] md:text-[64px] text-[#263238] font-semibold font-inter pb-8">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <div className="bg-[#4CAF4F] rounded-[4px] border border-[#4CAF4F] inline-block ">
            <div className="flex justify-center items-center gap-x-[8px] py-[14px] px-8">
              <p className="text-[#FFF] text-base font-medium font-inter">
                Get a Demo
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                >
                  <path
                    d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004"
                    stroke="white"
                    stroke-width="1.1"
                    stroke-linecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dot