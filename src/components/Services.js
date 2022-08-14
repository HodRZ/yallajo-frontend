import React, { Component } from 'react'
import {
	MDBRow,
	MDBCol,
	MDBInput,
	 MDBCheckbox,
	MDBBtn
} from 'mdb-react-ui-kit';
import axios from 'axios';



export class Services extends Component {



	handleSubmit = (e) => {
		e.preventDefault();
		const title = e.target.title.value;
		const type = e.target.type1.value;
		const price = e.target.price.value;
		const description = e.target.description.value;
		const imageUrl = e.target.imageUrl.value;

		const data = {
			title: title,
			type: type,
			price: price,
			description: description,
			imageUrl: imageUrl
		}
		console.log(data);
		 await	axios.post('http://localhost3001/services/', data).catch(function (error){console.log(error)})
	}
	render() {

		return (
			<form onSubmit={this.handleSubmit}>
				<MDBRow className='mb-4'>

					<MDBCol size='auto'>
						
						 							
							<MDBCheckbox id='type1' label='carRental'  />
						</MDBCol><MDBCol size='auto'>
							<MDBCheckbox id='type2' label=' roomRental'  />
						</MDBCol><MDBCol size='auto'>
							<MDBCheckbox id='type3' label='tourGuide'  value='tourGuide' /> 

					</MDBCol>
					<MDBCol>
						<MDBInput id='title' label='Title' />
					</MDBCol>
				</MDBRow>

				<MDBInput wrapperClass='mb-4' textarea id='description' rows={4} label='Description' />
				<MDBInput wrapperClass='mb-4' id='imageUrl' label='imageUrl' />
				<MDBInput wrapperClass='mb-4' id='price' label='price ' />



				<MDBBtn className='mb-4' type='submit' block>
					Submit
				</MDBBtn>
			</form>



		)
	}
}


export default Services;