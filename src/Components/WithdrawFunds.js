import React from "react";

function WithdrawFunds() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800 deposites currency_included">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-full lg:mt-12 sm:mt-24">
              <div className=" m-auto mt-6 text-gray-500 dark:text-gray-400 lg:max-w-4xl">
                <h2 className="text-3xl my-4 font-bold text-red-800 dark:text-gray-100">
                  How withdraw funds
                </h2>
                Withdraw your tokens at any time, to any wallet, exchange or
                place where you want to use your rewards{" "}
                <h3 className="font-bold  text-blue-900 mt-6 dark:text-indigo-400">
                  Withdraw Cryptocurrencies
                </h3>{" "}
                <p className="mt-2">
                  To withdraw any of the cryptocurrencies supported within the
                  application you must:
                </p>
                <p className="mt-2">
                  - Go to the profile section within the application
                </p>
                <p className="mt-2">
                  - Select at the bottom of the screen “TRANSFER”
                </p>
                <h4 className="mt-8 font-bold text-blue-900 ">
                  By pressing this button you will get:
                </h4>
                <p className="mt-2">
                  - Select Token: Select the currency you want to withdraw
                </p>
                <p className="mt-2">
                  Account point: Show the amount token available within the
                  application
                </p>
                <p className="mt-2">
                  Withdraw Amount: Specify the amount you want to withdraw, that
                  does not exceed the amount available within the application
                </p>
                <p className="mt-2">
                  To Account: Name to whom the tokens to be withdrawn are
                  directed (your wallet address)
                </p>
                <p className="mt-2">Memo: Identification message if required</p>
              </div>

              <div className="w-4/6  m-auto">
                <video
                  className="border mt-4"
                  src="/images/withdra.mp4"
                  autoPlay
                  loop
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WithdrawFunds;
