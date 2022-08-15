import React from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  //   MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { withAuth0 } from '@auth0/auth0-react';
import Header from "../LandingPage/Header";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: {},
      user: this.props.auth0.user
    };
  }

  getData = async () => {
    const responseData = await axios
      .get(`${(process.env.REACT_APP_PORT && "http://localhost:3001") ? process.env.REACT_APP_PORT : "http://localhost:3001"}/user?email=${this.state.user.email}`) //params to be extracted and added here
      .catch(function (err) {
        console.log(err);
      });
    this.setState({
      profileData: responseData.data,
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state.user)
    return (
      <>
        <Header />
        {this.state.profileData &&

          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image hover-overlay"
            >
              <MDBCardImage src={this.state.profileData.image} fluid alt="..." />
              <a href='/'>
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>{this.state.profileData.name}</MDBCardTitle>
              {/* <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText> */}
              <MDBBtn href="#">Add Service</MDBBtn>
              <MDBBtn href="#">Add Artical</MDBBtn>
            </MDBCardBody>
          </MDBCard>

        }
      </>
    );
  }
}
export default withAuth0(UserProfile);
