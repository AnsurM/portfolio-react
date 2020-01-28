import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Service";
import Blog from "./Components/Blog";
import Experiences from "./Components/Experiences";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <div className="dark-vertion">
      <Header />
      <Home />
      <About />
      <Service />
      <Skills />
      <Experiences />
      <Portfolio />
      {/* <Pricing /> */}
      <Blog />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
