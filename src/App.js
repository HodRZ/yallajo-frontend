import "./App.css";
import React from "react";
// import axios from 'axios';
import Blogs from "./components/Blogs";
import Citycomponent from "./components/Citycomponent";
import AboutUS from "./components/AboutUs";

function App() {
  return (
    <>
      <Blogs />
      <Citycomponent />
      <AboutUS />
    </>
  );
}

export default App;
