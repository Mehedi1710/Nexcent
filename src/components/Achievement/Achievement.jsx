import React from 'react'
import achieve from '../../assets/achievement.png';
import hand from '../../assets/hand.png';
import finger from '../../assets/finger.png';
import television from '../../assets/television.png';

const Achievement = () => {
  return (
    <div className='md:py-[48px]'>
      <div className="bg-[#F5F7FA]">
        <div className="max-w-container mx-auto">
          <div className="md:flex items-center py-9 md:py-[64px] mx-2 md:mx-0 text-center md:text-start">
            <div className="md:w-1/2">
              <p className="text-[32px] md:text-[36px] text-[#4D4D4D] font-semibold leading-none font-inter">
                Lessons and insights
              </p>
              <p className="text-[#4CAF4F] text-[36px] font-semibold font-inter">
                from 8 years
              </p>
              <p className="text-base text-[#18191F]">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="md:w-1/2">
              <div>
                <div className="md:flex items-center gap-x-[30px]">
                  <div className="flex items-center gap-x-4 justify-center py-4 md:py-0">
                    <div>
                      <img src={achieve} alt="" />
                    </div>
                    <div className="w-[191px]">
                      <p className="text-[#4D4D4D] text-[28px] font-bold">
                        2,245,341
                      </p>
                      <p className="text-[#717171] text-base">Members</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center">
                    <div>
                      <img src={hand} alt="" />
                    </div>
                    <div className="w-[191px]">
                      <p className="text-[#4D4D4D] text-[28px] font-bold">
                        46,328
                      </p>
                      <p className="text-[#717171] text-base">Clubs</p>
                    </div>
                  </div>
                </div>
                <div className="md:flex items-center gap-x-[30px] md:pt-[40px]">
                  <div className="flex items-center gap-x-4 justify-center py-4 md:py-0">
                    <div>
                      <img src={finger} alt="" />
                    </div>
                    <div className="w-[191px]">
                      <p className="text-[#4D4D4D] text-[28px] font-bold">
                        828,867
                      </p>
                      <p className="text-[#717171] text-base">Event Bookings</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-4 justify-center">
                    <div>
                      <img src={television} alt="" />
                    </div>
                    <div className="w-[191px]">
                      <p className="text-[#4D4D4D] text-[28px] font-bold">
                        1,926,436
                      </p>
                      <p className="text-[#717171] text-base">Payments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement