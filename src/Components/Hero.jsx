import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="relative py-10 text-black bg-white mb-96 sm:py-16 md:py-24 md:pb-72">
        <div className="absolute hidden w-11/12 h-64 max-w-6xl -mt-56 duration-300 -translate-x-1/2 shadow-lg group top-full left-1/2 md:block hover:translate-y-3">
          <div className="flex flex-col h-64 bg-gray-900 text-gray-200 font-mono">
            {/* Top bar */}
            <div className="flex items-center h-10 px-4 bg-gray-800">
              <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            {/* CMD body */}
            <div className="flex-1 p-4">
              <div className="flex">
                <div className="mr-2">&gt;</div>
                <input
                  type="text"
                  className="flex-1 bg-gray-800 focus:outline-none"
                  placeholder="What's your next big project?"
                />
              </div>

              <div className="mt-2">
                <span className="text-green-500">&gt; Output:</span>
                <div className="bg-gray-800 p-2 mt-1">
                  <p>Let's turn it into reality.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* object-cover w-full h-full */}
        {/* Background Shapes */}
        <div className="shape1"></div>
        <div className="shape2"></div>
        {/* <div className="shape3"></div> */}

        <div className="px-4 mx-auto max-w-12xl sm:px-6 md:flex lg:px-8 mt-10">
          <div className="flex flex-col items-center mx-auto mb-16 text-center lg:mb-0 lg:max-w-lg">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full">
                  FATHERHOOD TECH
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
                TRANSFORMING IDEAS INTO DIGITAL REALITY
              </h2>
              <p className="text-base text-gray-900 md:text-lg">
                At Fatherhood Tech Inc, we specialize in bringing your vision to
                life with cutting-edge software development services. From
                concept to completion, we provide end-to-end solutions tailored
                to your unique business needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 sm:px-0">
              <button className="relative flex items-center justify-center px-6 py-2 mt-4 font-medium text-black transition bg-gray-500 border-2 border-gray-100 rounded-lg hover:translate-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Learn More
              </button>
              <button className="flex items-center px-6 py-2 mt-4 font-medium text-gray-900 transition border-2 border-gray-800 rounded-lg hover:translate-y-1 hover:text-black hover:bg-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
