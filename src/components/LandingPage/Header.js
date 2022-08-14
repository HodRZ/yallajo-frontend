// import React, { useState } from 'react';
// import {
//     MDBNavbar,
//     MDBNavbarNav,
//     MDBNavbarItem,
//     MDBNavbarLink,
//     MDBNavbarToggler,
//     MDBContainer,
//     MDBIcon,
//     MDBCollapse,
//     // MDBBtn
// } from 'mdb-react-ui-kit';
// import AuthButtons from './../../user/AuthButtons'
export default function Header() {
    // const [showBasic, setShowBasic] = useState(false);

    return (
        <header>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: "url('https://universes.art/fileadmin/_migrated/gridelement_uploads/00-1-IMG_0972-2000-750-2_01.jpg')", height: '400px' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>YallaJo</h1>
                            {/* <h4 className='mb-3'></h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}