import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Download from "./Components/Download";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Download />
      <Footer />
    </>
  );
}

export default App;
