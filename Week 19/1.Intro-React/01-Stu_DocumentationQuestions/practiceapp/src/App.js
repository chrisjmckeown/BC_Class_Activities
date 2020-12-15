import React, { Fragment } from "react";
import HelloDiv from "./components/HelloDiv";
import HelloReact from "./components/HelloReact";
import HelloBootstrap from "./components/HelloBootstrap";
import JSXVariables from "./components/JSXVariables";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
        <Header />
        <Section />
      </div>
      <JSXVariables />
      <HelloDiv />
      <HelloReact />
      <HelloBootstrap />
    </Fragment>
  );
}

export default App;
