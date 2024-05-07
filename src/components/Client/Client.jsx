import React from 'react'
import logo1 from '../../assets/Logo1.png'
import logo2 from '../../assets/Logo2.png'
import logo3 from '../../assets/Logo3.png'
import logo4 from '../../assets/Logo4.png'
import logo5 from '../../assets/Logo5.png'
import logo6 from '../../assets/Logo6.png'
import logo7 from '../../assets/Logo7.png'

const Client = () => {
  return (
    <div className="py-4 md:py-[40px] px-2 md:px-0">
      <div className="max-w-container mx-auto">
        <div className="text-center pb-4">
          <h3 className="text-[36px] text-[#4D4D4D] font-semibold">
            Our Clients
          </h3>
          <p className="text-[18px] md:text-base text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className='flex items-center justify-between md:py-[10px]'>
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Client