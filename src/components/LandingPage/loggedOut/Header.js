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
                style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px' }}
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