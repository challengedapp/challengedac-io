import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GettingStart from "./GettingStart";
import DepositeFunds from "./DepositeFunds";
import WithdrawFunds from "./WithdrawFunds";
import About from "./About";
import TermsCondition from "./TermsCondition";
import NotFound from "./NotFound";

function App() {
  var [toggle, setToggle] = useState(false);
  var [menu, setMenu] = useState(false);
  var handleOpenToggle = () => {
    setToggle(true);
  };
  var handleCloseToggle = () => {
    setToggle(false);
  };
  var handleOpenMenu = () => {
    setMenu(true);
  };
  var handleCloseMenu = () => {
    setMenu(false);
  };
  return (
    <div>
      <header>
        <Header
          menu={menu}
          toggle={toggle}
          handleOpenToggle={handleOpenToggle}
          handleCloseToggle={handleCloseToggle}
          handleOpenMenu={handleOpenMenu}
          handleCloseMenu={handleCloseMenu}
        />
      </header>
      <main onClick={handleCloseToggle}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/gettingstarted" exact>
            <GettingStart />
          </Route>

          <Route path="/deposits" exact>
            <DepositeFunds />
          </Route>

          <Route path="/withdraw" exact>
            <WithdrawFunds />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/terms-condition" exact>
            <TermsCondition />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
