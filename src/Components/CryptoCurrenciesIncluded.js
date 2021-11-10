import React from "react";

function CryptoCurrenciesIncluded() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" mb-10 lg:max-w-xl lg:mt-20 sm:mt-20 ">
          <h2 className="inline-block py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900  uppercase rounded-full bg-teal-accent-400 currency_included">
            Cryptocurrencies Included
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            We currently support more than 10 cryptocurrencies to do activity
            within the application
          </p>
          <h4 className="inline-block py-px mt-4 text-ls font-semibold tracking-wider text-teal-900  uppercase rounded-full bg-teal-accent-400">
            Supported Cryptocurrencies
          </h4>
        </div>
        <div className="grid gap-10  lg:max-w-screen-lg sm:grid-cols-4 lg:grid-cols-8 partners">
          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-1 rounded-full  p-2 shadow-md border logo_transition"
              src="/images/sand.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">Sand</h3>
          </div>

          <div className="flex  flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition "
              src="/images/eos.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl  absolute mt-20 uppercase">eos</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/chl.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">chl</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/ebtc.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">ebtc</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/eeth.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">eeth</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/sense.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">
              sense
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/dapp.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">dapp</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/kanda.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">
              kanda
            </h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/vig.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">vig</h3>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition"
              src="/images/puml.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl absolute mt-20 uppercase">puml</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCurrenciesIncluded;
