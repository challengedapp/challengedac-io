import React from "react";

function DepositeFunds() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-800 deposites currency_included">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-full lg:mt-12 sm:mt-24">
              <div className=" m-auto mt-6 text-gray-500 dark:text-gray-400 lg:max-w-4xl">
                <h2 className="text-3xl my-4 font-bold text-red-800 dark:text-gray-100">
                  How to deposit funds
                </h2>
                The deposit of funds is necessary for the creation of new
                challenges, send to friends and start users within the
                application{" "}
                <h3 className="font-bold  text-blue-900 mt-6 dark:text-indigo-400">
                  Deposit Cryptocurrencies
                </h3>{" "}
                <p className="mt-2">
                  Currently challengedac has more than 10 cryptocurrencies
                  usable within the application to carry out activity within it
                  and withdrawable at any time, for this you must:
                </p>
                <p className="mt-2">
                  - Go to the profile section within the application
                </p>
                <p className="mt-2">
                  - Select at the bottom of the screen “ADD”
                </p>
                <h4 className="mt-8 font-bold text-blue-900 ">
                  By pressing this button you will get:
                </h4>
                <p className="mt-2">
                  - Deposit Account: Name of the account to whom you must send
                  the cryptocurrency you want
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
                  Memo: Message that you must include for the identification of
                  funds accreditation
                </p>
                <p className="mt-2">
                  Make sure that you are actually sending any of the
                  cryptocurrencies accepted within the application, any error,
                  omission or negligence when entering these fields can cause
                  the total loss of the cryptocurrency to be deposited.
                </p>
              </div>

              <div className="w-4/6  m-auto">
                <img src="/images/howtodeposit.png" className="border mt-4" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DepositeFunds;
