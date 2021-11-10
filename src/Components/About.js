import React from "react";
import CryptoCurrenciesIncluded from "./CryptoCurrenciesIncluded";
import ExchangesForCHL from "./ExchangesForCHL";
import WalletForCHL from "./WalletForCHL";

function About() {
  return (
    <div className="container m-auto deposites">
      <CryptoCurrenciesIncluded />
      <hr />
      <WalletForCHL />
      <hr />
      <ExchangesForCHL />
    </div>
  );
}

export default About;
