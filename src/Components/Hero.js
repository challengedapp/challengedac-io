import React from "react";

function Hero() {
  return (
    <div>
      <div className="container flex  flex-col px-6 py-10 mx-auto space-y-6 lg:py-16 lg:flex-row lg:items-center lg:space-x-6 hero">
        <div className="w-full lg:w-1/2 sm:mt-40">
          <div className="lg:max-w-3xl  py-2">
            <h2 className="text-2xl font-medium text-center tracking-wide text-gray-800 dark:text-white lg:text-4xl ">
              Take control of the applications you use and the value they
              create!
            </h2>
            <p className=" text-gray-600 dark:text-gray-300 my-6 text-center">
              The challenge community is committed to proving numbers a variety
              of challenges that users can participate in tasks for real
              blockchain rewards.
            </p>
            <div className="flex items-center justify-center w-5/12 m-auto mt-8 hero_buttons">
              <a
                href="https://play.google.com/store/apps/details?id=challengedac.com.challenge_dac_app"
                className="px-3 h-10 w-5/12 py-2 block m-auto  font-medium tracking-wide border capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-white text-gray-500 hover:text-gray-900 shadow-md focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-80 appStore"
              >
                <i className="fab fa-google-play inline"></i> Playstore
              </a>
              <a
                href="https://apps.apple.com/us/app/challengeeos/id1478759780"
                className="px-2 h-10 w-5/12 mx-3 block m-auto py-2 font-medium tracking-wide text-white border capitalize duration-200 transform bg-black shadow-md rounded-md hover:bg-white hover:text-black transition-all focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80 appStore appStore1"
              >
                <i className="fab fa-apple"></i> Apple Store
              </a>
            </div>
            <img
              className="block m-auto w-52 h-52 mt-6 p-1 border shadow-md rounded-md"
              src="/images/barcode.png"
              alt="barcode"
            />
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <img
            className=" w-9/12 max-w-2xl rounded-md mobile_app"
            src="/images/hero.png"
            alt="glasseshoto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
