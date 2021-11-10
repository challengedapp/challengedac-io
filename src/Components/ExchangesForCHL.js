import React from "react";

function ExchangesForCHL() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className=" mb-10 lg:max-w-xl ">
          <h2 className="inline-block py-px mb-4 text-2xl font-semibold tracking-wider text-teal-900  uppercase rounded-full bg-teal-accent-400">
            Exchanges for Challengedac
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Buy, sell, trade CHL TOKEN on any of the listed exchanges
          </p>
          <h4 className="inline-block py-px mt-4 text-ls font-semibold tracking-wider text-teal-900  uppercase rounded-full bg-teal-accent-400">
            CHL Supported Exchanges
          </h4>
        </div>
        <div className="grid gap-10  lg:max-w-screen-lg sm:grid-cols-4 lg:grid-cols-8 partners">
          <div className="flex  flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition "
              src="/images/alcor.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl  absolute mt-20 uppercase">
              alcor
            </h3>
          </div>

          <div className="flex  flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition "
              src="/images/newdex.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl  absolute mt-20 uppercase">
              newdex
            </h3>
          </div>

          <div className="flex  flex-col items-center">
            <img
              className="object-cover w-20 h-20 mb-2 rounded-full p-2 shadow-md border logo_transition "
              src="/images/wombat.png"
              alt="Person"
            />
            <h3 className="font-bold text-xl  absolute mt-20 uppercase">
              wombat
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangesForCHL;
