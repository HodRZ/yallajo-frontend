import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';

class CarRental extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomRental: []
        }
    }
    handleGetCarService = async () => {

        const Data = await axios.get(`${process.env.REACT_APP_PORT}/service?searchQuery=roomRental`).catch(function (error) { console.log(error) });
        this.setState({
            roomRental: Data.data
        })
    }
    componentDidMount() {
        this.handleGetCarService()
    }
    render() {
        console.log(this.state)
        return (
            <>

                {this.state.roomRental &&
                    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>

                        {this.state.roomRental.map((car) => {
                            return < MDBCol >
                                <MDBCard className='h-100'>
                                    <MDBCardImage
                                        src={car.image}
                                        alt='...'
                                        position='top'
                                        fluid
                                    />
                                    <MDBCardBody>
                                        <MDBCardTitle>{car.title}</MDBCardTitle>
                                        <MDBCardText>
                                            This is a longer card with supporting text below as a natural lead-in to additional content.
                                            This content is a little bit longer.
                                        </MDBCardText>
                                        <MDBBtn href='#'>Go somewhere</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        })}
                    </MDBRow>
                }
            </>
        );
    }
}

export default CarRental;
