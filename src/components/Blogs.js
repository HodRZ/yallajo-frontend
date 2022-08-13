import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
//rcc 
class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogData: []
        }
    }
    getData = async () => {
        const blogData = await axios.get(`${process.env.REACT_APP_PORT || 'http://localhost:3001'} ` / blog).catch(function (err) { console.log(err) })
        this.setState({
            blogData: blogData.data
        })

    }
    componentDidMount() {
        this.getData()
    }
    render() {
        return (
            <>


                {this.state.blogData &&
                    this.state.blogData.map((article) => {
                        return (
                            <MDBCard>
                                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                                <MDBCardBody>
                                    <MDBCardTitle>this is title</MDBCardTitle>
                                    <MDBCardText>
                                        this is text
                                    </MDBCardText>
                                    <MDBBtn href='#'>Button</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        )
                    })

                }
            </>
        )

    }
}

export default Blogs;

// create by Ahmed Awamleh
// branch "FORM"