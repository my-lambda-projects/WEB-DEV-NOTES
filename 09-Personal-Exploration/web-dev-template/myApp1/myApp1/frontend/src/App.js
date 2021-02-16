import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Blank from "./components/Blank/Blank";

import MasterDetail from "./components/MasterDetail/MasterDetail";

//TODO Web Template Studio: Add routes for your new pages here.
const App = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Blank } />
          <Route path = "/MasterDetail" component = { MasterDetail } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
}

export default App;
