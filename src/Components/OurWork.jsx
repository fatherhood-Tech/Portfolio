import React from 'react';

const OurWork = () => {
  return (
    <div className="p-2 md:p-4">
      {/* Container with reduced padding for space */}
      <div className="mx-auto max-w-5xl">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-8">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="mb-2 md:mb-4">
              <span className="text-gray-500 uppercase text-sm tracking-wider">Our Work</span>
            </div>
            <div className="mb-2 md:mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-green-500">
                Work We've Done
              </h2>
            </div>
            <div className="mb-2 md:mb-4">
              <p className="text-lg md:text-xl font-semibold">
                We build intuitive, attractive & easy to use products.
              </p>
            </div>
            <div className="mb-2 md:mb-4">
              <p className="text-base md:text-lg">
                We focus on quality over quantity. We have experience working on projects across multiple domains.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center">
            <div className="relative w-48 h-96 md:w-64 md:h-96">
              <img
                src="https://www.zetalight.com/images/illustrations/home/services.svg" alt="" 
                className="absolute top-0 left-0 w-24 h-48 md:w-32 md:h-64"
              />
              <img
                src="https://www.zetalight.com/images/illustrations/home/services.svg" alt="" 
                className="absolute top-12 left-12 w-48 h-48 md:w-64 md:h-64"
              />
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-8">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <img
              src="https://www.zetalight.com/images/illustrations/home/services.svg" alt="" 
              className="w-48 md:w-64 mb-2 md:mb-4"
            />
         
          </div>

          {/* Right Side */}
          <div className="w-full md:w-1/2 mt-4 md:mt-0 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-4">
              Some of the products that we’ve helped our partners build.
            </h2>
            <p className="text-base md:text-lg mb-3 md:mb-6">
              Our designers & developers work very closely to create attractive & intuitive interfaces that will bring your product to life.
            </p>
            <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
