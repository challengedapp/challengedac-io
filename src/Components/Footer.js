import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="">
      <div className="relative mt-16 bg-deep-purple-accent-400 shadow-md border">
        <hr />
        <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="grid gap-14 row-gap-16 mb-8 lg:grid-cols-4 m-auto">
            <div className="md:max-w-md lg:col-span-2">
              <a
                href="/"
                aria-label="Go home"
                title="Company"
                className="inline-flex items-center"
              >
                <svg
                  className="w-8 text-teal-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  stroke="currentColor"
                  fill="none"
                >
                  <rect x="3" y="1" width="7" height="12" />
                  <rect x="3" y="17" width="7" height="6" />
                  <rect x="14" y="1" width="7" height="6" />
                  <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase text_overlay">
                  Challengedapp
                </span>
              </a>
              <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-deep-purple-50">
                  Every day the world is becoming more accustomed to the
                  convenience and efficiency that applications bring to our
                  lives! As their usage have grown, the shortcomings contained
                  in the current systems have become easier to see.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 lg:col-span-2 md:grid-cols-3">
              <div className="mr-10">
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Faqs
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/gettingstart"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Getting Started
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/withdraw"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      How Withdraw Funds
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/deposite"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      How Deposit Funds
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  About Us
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/about"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Cryptocurrencies Included
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Wallets For CHL
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Exchanges For CHL
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="ml-14 social">
                <p className="font-semibold tracking-wide text-teal-accent-400">
                  Social
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="https://t.me/Challenge_DAC"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/challengeDac/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/ChallengeDac"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCnYWlP_UT6k5EIfuLSD3Spg"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/challengedac/"
                      className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                    >
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
            <p className="text-sm text-gray-700">
              © Copyright 2018 ChallengeDAC Inc. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <a
                href="https://twitter.com/ChallengeDac"
                className="transition-colors text-2xl duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/challengedac"
                className="transition-colors text-2xl duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/challengeDac"
                className="transition-colors text-2xl duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <i className="fab fa-facebook-square"></i>
              </a>

              <a
                href="https://www.youtube.com/channel/UCnYWlP_UT6k5EIfuLSD3Spg"
                className="transition-colors text-2xl duration-300
                text-deep-purple-100 hover:text-teal-accent-400"
              >
                <i className="fab fa-youtube"></i>
              </a>

              <a
                href="https://t.me/Challenge_DAC"
                className="transition-colors text-2xl duration-300 text-deep-purple-100 hover:text-teal-accent-400"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
