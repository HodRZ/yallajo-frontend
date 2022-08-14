import React, { Component } from 'react';


import {
    MDBInput,
    MDBBtn
} from 'mdb-react-ui-kit';


class BlogPost extends Component {
    handleSubmit = async (e) => {

        const data = {
            title: e.target.title.value,
            keyword: e.target.keyword.value,
            image: e.target.image.value,
            content: e.target.content.value
        };

        axios.post('http://localhost3001/services/', data).catch(function (error) { console.log(error) })


    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <MDBInput id='title' wrapperClass='mb-4' label='Title' />
                <MDBInput id='keyworrd' wrapperClass='mb-4' label='City Name' />
                <MDBInput id='image' wrapperClass='mb-4' label='Image URL' />

                <MDBInput wrapperClass='mb-4' textarea id='content' rows={4} label='Contet' />


                <MDBBtn type='submit' className='mb-4' block>
                    submit
                </MDBBtn>
            </form>
        );
    }


}
export default BlogPost;