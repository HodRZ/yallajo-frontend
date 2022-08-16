import axios from 'axios';
import {
    MDBBtn,
    MDBInput
} from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'



export default function EditBlog() {

    const { id } = useParams();
    const [blog, setBlog] = useState();

    async function fetchData() {
        const { data } = await axios.get(`${process.env.REACT_APP_PORT}/blog/${id}`).catch(function (error) { console.log(error) })
        setBlog(data)
    }

    const updateBlog = async (e) => {
        const data = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'keyword': e.target.keyword.value,
            'image': e.target.image.value
        }
        await axios.put(`${process.env.REACT_APP_PORT}/blog/${id}`, { data })
    }


    useEffect(() => {
        fetchData();
    })
    return (
        <form onSubmit={updateBlog}>
            <MDBInput id='title' wrapperClass='mb-4' label='Title' value={blog?.title} />
            <MDBInput type='text' id='keyword' wrapperClass='mb-4' label='City Name' value={blog?.keyword} />
            <MDBInput type='text' id='image' wrapperClass='mb-4' label='Image URL' value={blog?.image} />
            <textarea wrapperClass='mb-4' textarea id='content' rows={9} cols={90} label='Content' value={blog?.content} />



            <MDBBtn type='submit' className='mb-4' block>
                Submit Edit
            </MDBBtn>
        </form>
    );
}

