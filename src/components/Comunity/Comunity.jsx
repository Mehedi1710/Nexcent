import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Comunity = () => {
  return (
    <div>
      <div className="max-w-container mx-auto">
        <div className="md:py-[40px]">
          <div className="text-center pb-[16px]">
            <h1 className="md:w-[542px] m-auto text-[36px] text-[#4D4D4D] font-inter font-semibold">
              Manage your entire community in a single system
            </h1>
            <p className=" text-base text-[#717171]">
              Who is Nextcent suitable for?
            </p>
          </div>
          <div>
            <div className="md:flex items-center justify-between">
              <div className="mx-8 md:mx-0 md:w-[299px] text-center bg-[#FFF] border rounded-[8px] border-[#abbe6d33] px-8 py-6">
                <div className="flex justify-center">
                  <img src={icon1} alt="" />
                </div>
                <h1 className="text-[#4D4D4D] text-[28px] font-bold font-inter pt-4">
                  Membership Organisations
                </h1>
                <p className="text-[#717171] text-[14px] font-inter pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="mx-8 md:mx-0 md:w-[299px] text-center bg-[#FFF] border rounded-[8px] border-[#abbe6d33] px-8 py-6 my-6 md:my-0">
                <div className="flex justify-center">
                  <img src={icon2} alt="" />
                </div>
                <h1 className="text-[#4D4D4D] text-[28px] font-bold font-inter pt-4">
                  National Associations
                </h1>
                <p className="text-[#717171] text-[14px] font-inter pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
              <div className="mx-8 md:mx-0 md:w-[299px] text-center bg-[#FFF] border rounded-[8px] border-[#abbe6d33] px-8 py-6">
                <div className="flex justify-center">
                  <img src={icon3} alt="" />
                </div>
                <h1 className="text-[#4D4D4D] text-[28px] font-bold font-inter pt-4">
                  Clubs And Groups
                </h1>
                <p className="text-[#717171] text-[14px] font-inter pt-2">
                  Our membership management software provides full automation of
                  membership renewals and payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comunity