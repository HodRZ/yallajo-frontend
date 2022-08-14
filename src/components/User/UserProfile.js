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
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state({
      profileData: {},
    });
  }

  getData = async () => {
    const profileData = await axios
      .get(`${process.env.REACT_APP_PORT || "http://localhost:3001"}/profile`)
      .catch(function (err) {
        console.log(err);
      });
    this.setState({
      profileData: profileData.data,
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <>
        {this.state.profileData &&
          this.state.profileData.map((profile) => {
            return (
              <MDBCard>
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay"
                >
                  <MDBCardImage src={profile.img} fluid alt="..." />
                  <a>
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    ></div>
                  </a>
                </MDBRipple>
                <MDBCardBody>
                  <MDBCardTitle>{profile.name}</MDBCardTitle>
                  {/* <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText> */}
                  <MDBBtn href="#">Add Service</MDBBtn>
                  <MDBBtn href="#">Add Artical</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            );
          })}
      </>
    );
  }
}
export default UserProfile;
