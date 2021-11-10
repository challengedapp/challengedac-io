import React from "react";

function ReceiveRewards() {
  return (
    <div>
      <div className="container flex flex-col px-6 py-10 mx-auto receive_rewards space-y-6 lg:py-16 lg:flex-row lg:items-center lg:space-x-6 ">
        <div className="w-full lg:w-1/2 ">
          <div className="lg:max-w-2xl  py-20">
            <h2 className="text-2xl font-medium text-center tracking-wide text-gray-800 dark:text-white lg:text-3xl ">
              Receive Rewards Just For Downloading
            </h2>
            <p className=" text-gray-600 text-center w-9/12 m-auto dark:text-gray-300 my-6">
              The challenge community is committed to proving numbers a variety
              of challenges that users can participate in without them having to
              risk any of their own tokens.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 ">
          <img
            className=" w-full max-w-2xl rounded-md"
            src="/images/winner.svg"
            alt="glasseshoto"
          />
        </div>
      </div>
    </div>
  );
}

export default ReceiveRewards;
