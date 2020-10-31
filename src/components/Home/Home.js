import React from "react";
import Nav from "../Nav/Nav";
import About from "./About/About";
import Header from "./Header";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <hr />
      <About></About>
      <hr />
      <Services></Services>
    </div>
  );
};

export default Home;
