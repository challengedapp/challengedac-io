import React from "react";
import { NavLink } from "react-router-dom";

function Header(props) {
  var {
    handleOpenToggle,
    toggle,
    handleCloseToggle,
    menu,
    handleOpenMenu,
    handleCloseMenu,
  } = props;
  return (
    <div classNameName="">
      <nav className="border-b dark:border-gray-700 fixed w-full bg-white z-20 nav_bg">
        <div className="container px-6 py-2 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-8/12">
              <img
                className="w-2/12"
                src="/images/brandlogo.png"
                alt="company_logo"
              />
              <h1 className="text-2xl ml-2 font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 text_overlay">
                <NavLink to="/">Challengedapp</NavLink>
              </h1>
            </div>

            <div className="lg:hidden">
              {menu === true ? (
                <button
                  onClick={handleCloseMenu}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-2xl focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                >
                  <i class="fas fa-times"></i>
                </button>
              ) : (
                <button
                  onClick={handleOpenMenu}
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 text-2xl focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                >
                  <i class="fas fa-bars"></i>
                </button>
              )}
            </div>
          </div>

          {menu === true ? (
            <div className="items-center lg:flex  mr-12 challenge_nav">
              <div className="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:space-x-16 ">
                <p className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
                  <NavLink to="/">Home</NavLink>
                </p>
                <p className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
                  <NavLink to="/about">About</NavLink>
                </p>
                <p
                  onClick={handleOpenToggle}
                  className="font-medium cursor-pointer text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline flex items-center guide relative"
                >
                  Guide
                  <button className="relative z-10 ml-1 inline-block  text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </p>
                <p className="dis_nav">
                  <NavLink to="/gettingstarted">Gettig Started</NavLink>
                </p>
                <p className="dis_nav">
                  <NavLink to="/deposits"> How Deposit Funds</NavLink>
                </p>
                <p className="dis_nav">
                  <NavLink to="/withdraw">How Withdraw Funds</NavLink>
                </p>
                <p className="dis_nav">
                  <NavLink to="/terms-condition">Terms & Conditions</NavLink>
                </p>

                {toggle === true ? (
                  <div className="absolute lg:top-8 sm:top-32 lg:right-72 guide_display">
                    <div className="">
                      <div className=" z-20 w-48 py-2 mt-7  bg-white rounded-md shadow-xl dark:bg-gray-800 box_shadow">
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/gettingstarted">
                            Gettig Started
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/deposits">
                            {" "}
                            How Deposit Funds
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/withdraw">
                            How Withdraw Funds
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/terms-condition">
                            Terms & Conditions
                          </NavLink>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <a
                  href="/images/chl_whitepaper.pdf"
                  download
                  class="font-medium  border py-1 bg-red-700 text-white rounded-md px-4 white_paper"
                >
                  <i className="fas fa-cloud-download-alt"></i> White Paper
                </a>
              </div>
            </div>
          ) : (
            <div className="items-center lg:flex  mr-12 challenge_nav">
              <div className="flex flex-col mt-4 space-y-8 lg:flex-row lg:items-center lg:mt-0 lg:space-y-0 lg:space-x-16 guide_display_none">
                <p className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
                  <NavLink to="/">Home</NavLink>
                </p>
                <p className="block font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline">
                  <NavLink to="/about">About</NavLink>
                </p>
                <p
                  onClick={handleOpenToggle}
                  className="font-medium cursor-pointer text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-400 hover:underline flex items-center guide"
                >
                  Guide
                  <button className="relative z-10 ml-1 inline-block  text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                </p>

                {toggle === true ? (
                  <div className="absolute lg:top-8 sm:top-32 lg:right-72 guide_display">
                    <div className="">
                      <div className=" z-20 w-48 py-2 mt-7  bg-white rounded-md shadow-xl dark:bg-gray-800 box_shadow">
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/gettingstarted">
                            Gettig Started
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/deposits">
                            {" "}
                            How Deposit Funds
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/withdraw">
                            How Withdraw Funds
                          </NavLink>{" "}
                        </p>
                        <p
                          onClick={handleCloseToggle}
                          className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                          {" "}
                          <NavLink to="/terms-condition">
                            Terms & Conditions
                          </NavLink>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
                <a
                  href="/images/chl_whitepaper.pdf"
                  download
                  className="font-medium  border py-1 bg-red-700 text-white rounded-md px-4 white_paper"
                >
                  <i className="fas fa-cloud-download-alt"></i> White Paper
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
