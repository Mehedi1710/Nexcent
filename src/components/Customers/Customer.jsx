import React from 'react'
import logo8 from '../../assets/logo8.png';
import logo2 from '../../assets/Logo2.png'
import logo3 from '../../assets/Logo3.png'
import logo4 from '../../assets/Logo4.png'
import logo5 from '../../assets/Logo5.png'
import logo6 from '../../assets/Logo6.png'
import customer from '../../assets/customer.png'

const Customer = () => {
  return (
    <div className="bg-[#F5F7FA] py-8">
      <div className="max-w-container mx-auto">
        <div className="md:flex items-center justify-between mx-2 md:mx-0">
          <div className='hidden md:flex'>
            <img src={customer} alt="" />
          </div>
          <div className='md:hidden flex justify-center'>
            <img src={customer} alt="" />
          </div>
          <div>
            <div className="md:w-[748px]">
              <p className="text-[#717171] text-base font-medium font-inter">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="text-[#4CAF4F] text-[20px] font-semibold font-inter pt-4">
                Tim Smith
              </h4>
              <p className="text-[#89939E] text-base font-inter pb-8">
                British Dragon Boat Racing Association
              </p>
              <div className="hidden md:flex justify-between items-center">
                <div>
                  <img src={logo8} alt="" />
                </div>
                <div>
                  <img src={logo2} alt="" />
                </div>
                <div>
                  <img src={logo3} alt="" />
                </div>
                <div>
                  <img src={logo4} alt="" />
                </div>
                <div>
                  <img src={logo5} alt="" />
                </div>
                <div>
                  <img src={logo6} alt="" />
                </div>
                <div className="flex items-center gap-x-[5px]">
                  <p className="text-[#4CAF4F] text-[20px] font-semibold">
                    Meet all customers
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="md:hidden grid grid-cols-3 items-center">
                <div>
                  <img src={logo8} alt="" />
                </div>
                <div>
                  <img src={logo2} alt="" />
                </div>
                <div>
                  <img src={logo3} alt="" />
                </div>
                <div>
                  <img src={logo4} alt="" />
                </div>
                <div>
                  <img src={logo5} alt="" />
                </div>
                <div>
                  <img src={logo6} alt="" />
                </div>
                <div className="flex items-center md:gap-x-[5px] w-[200px] pt-3">
                  <p className="text-[#4CAF4F] text-[20px] font-semibold">
                    Meet all customers
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="11"
                    viewBox="0 0 17 11"
                    fill="none"
                  >
                    <path
                      d="M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905"
                      stroke="#4CAF4F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer