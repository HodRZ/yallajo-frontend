import "./App.css";
import React from "react";
// import axios from 'axios';
<<<<<<< HEAD
import Blogs from './components/Blogs'
import Citycomponent from './components/LandingPage/LoggedIN/mainComponents/Citycomponent';
// import AuthButtons from './components/user/AuthButtons';
// import { MDBRow } from 'mdb-react-ui-kit';
// import Header from './components/LandingPage/loggedOut/Header'
import MainLoggedOut from './components/LandingPage/loggedOut/MainLoggedOut';
import { useAuth0 } from '@auth0/auth0-react';
// import Profile from './components/user/Profile';
// import Test from './components/test';
// import LoginButton from './components/user/LoginButton';
=======
import Citycomponent from './components/Citycomponent';
>>>>>>> origin/UI

function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <>
<<<<<<< HEAD
      {!isAuthenticated &&
        <MainLoggedOut />}
      {isAuthenticated &&
        <Citycomponent />}
      {/* <Test /> */}
      {/* <Profile /> */}
      <Blogs />
=======
    <Citycomponent />
>>>>>>> origin/UI
    </>
  );
}

export default App;
