import "./App.css";
import React from "react";
// import axios from 'axios';
import Blogs from "./components/Blogs";
import Citycomponent from "./components/Citycomponent";
import UserProfile from "./components/User/UserProfile";

function App() {
  return (
    <>
      <UserProfile />
      <Blogs />
      <Citycomponent />
    </>
  );
}

export default App;
