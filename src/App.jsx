import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Active_Actions from "./components/Active_Actions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Active_Actions />
      <Footer />
    </>
  );
}

export default App;
