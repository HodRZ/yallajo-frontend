import React, { Component } from 'react';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';
import Header from './LandingPage/Header';
import { Link } from 'react-router-dom';


class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogData: []
        }
    }
    getData = async () => {
        const blogData = await axios.get(`${process.env.REACT_APP_PORT}/blog`).catch(function (err) { console.log(err) })
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
                <Header />
                {this.state.blogData &&
                    this.state.blogData.map((article) => {
                        return (
                            <MDBCard>
                                <MDBCardImage src={article.image} position='top' alt={article.keyword} />
                                <MDBCardBody>
                                    <MDBCardTitle>{article.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {article.content}
                                    </MDBCardText>
                                    <Link to={`/blog/${article._id}`} style={{ textDecoration: "none", color: 'white' }}><MDBBtn color='dark' style={{ marginLeft: "50px" }}>Edit</MDBBtn></Link>
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