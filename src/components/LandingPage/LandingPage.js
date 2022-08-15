import React, { Component } from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import Citycomponent from './LoggedIN/mainComponents/Citycomponent';
import MainLoggedOut from './loggedOut/MainLoggedOut';
import Footer from './Footer'
import {
    Routes,
    Route,
    // Link
} from "react-router-dom";
import CarRental from './LoggedIN/mainComponents/Services/CarRental'
import TourGuide from './LoggedIN/mainComponents/Services/TourGuide'
import RoomRental from './LoggedIN/mainComponents/Services/RoomRental'
import Profile from '../user/Profile';
// import UserProfile from '../User/UserProfile';
// import Profile from '../user/Profile';
class LandingPage extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>
                <Header />
                <Routes>
                    <Route path='/profile' element={<Profile />} />

                    {
                        !isAuthenticated &&
                        <Route path='/' element={<MainLoggedOut />} />
                    }
                    {isAuthenticated &&
                        <Route path='/' element={<Citycomponent />} >
                            <Route path='/carRental' element={<CarRental />} />
                            <Route path='/tourGuide' element={<TourGuide />} />
                            <Route path='/roomRental' element={<RoomRental />} />
                        </Route>
                    }

                </Routes>
                <Footer />
            </>
        );
    }
}

export default withAuth0(LandingPage);