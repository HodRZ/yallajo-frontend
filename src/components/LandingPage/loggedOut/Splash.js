import React, { } from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import AuthButtons from '../../User/AuthButtons'

export default function Splash() {
    return (
        <div
            className='p-5 text-center bg-image d-flex align-items-center'
            style={{ backgroundColor: 'orange', height: '400px' }}
        >
            <MDBContainer fluid>


                <MDBRow className='align-items-center'>
                    <MDBCol >
                        <h1 className='mb-3'>Plan Your Trip</h1>

                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol >
                        <AuthButtons />
                    </MDBCol>
                </MDBRow>

            </MDBContainer>
        </div>


    );
}