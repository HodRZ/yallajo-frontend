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


class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogData: []
        }
    }
    getData = async () => {
        const blogData = await axios.get(`${process.env.REACT_APP_PORT || 'http://localhost:3001'}/blog`).catch(function (err) { console.log(err) })
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
                                <MDBCardImage src={article.image} position='top' alt={article.keyword} />
                                <MDBCardBody>
                                    <MDBCardTitle>{article.title}</MDBCardTitle>
                                    <MDBCardText>
                                        {article.content}
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