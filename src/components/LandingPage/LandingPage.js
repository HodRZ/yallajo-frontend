import React, { Component } from 'react';
import Header from './Header';
import { withAuth0 } from '@auth0/auth0-react';
import Citycomponent from './LoggedIN/mainComponents/Citycomponent';
import MainLoggedOut from './loggedOut/MainLoggedOut';
import Footer from './Footer'


class LandingPage extends Component {
    render() {
        const { isAuthenticated } = this.props.auth0;
        return (
            <>
                <Header />
                {
                    !isAuthenticated &&
                    <MainLoggedOut />
                }
                {
                    isAuthenticated &&
                    <Citycomponent />
                }
                <Footer />
            </>
        );
    }
}

export default withAuth0(LandingPage);