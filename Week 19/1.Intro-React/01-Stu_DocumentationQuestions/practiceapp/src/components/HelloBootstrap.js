import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

function HelloBootstrap() {
  return (
    <Fragment>
      <Navbar />
      <Jumbotron />
      <Card />
      <Card />
    </Fragment>
  );
}

export default HelloBootstrap;
