import axios from 'axios';
import React, { Component } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowCard from './ShowCard';
import {
	MDBTabs,
	MDBTabsItem,
	MDBTabsLink,
	MDBTabsContent,
	MDBTabsPane
} from 'mdb-react-ui-kit';



export class UseServices extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showCar: false,
			showRoom: false,
			showGiude: false,
			carData: {},
			roomData: {},
			giudeData: {}
		}
	}

	handleGetCarService = (e) => {
		e.preventDefault();
		// const carData = await axios.get('http://localhost:3001/service?type=car').catch(function (error) { "write the error function here" });
		this.setState({
			// carData: carData,
			showCar: true
		})
	}

	handleGetRoomService = async (e) => {
		e.preventDefault();
		const roomData = await axios.get('http://localhost:3001/service?type=room').catch(function (error) { "write the error function here" });
		this.setState({
			roomData: roomData,
			showRoom: true
		})
	}

	handleGetGiudeService = async (e) => {
		e.preventDefault();
		const giudeData = await axios.get('http://localhost:3001/service?type=guide').catch(function (error) { "write the error function here" });
		this.setState({
			giudeData: giudeData,
			showGiude: true
		})
	}



	render() {
		return (
			<>
				<MDBTabs pills className='mb-3'>
					<MDBTabsItem>
						<MDBTabsLink onClick={this.handleGetCarService} >
							Car Rental
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink onClick={this.handleGetRoomService}>
							Room Rental
						</MDBTabsLink>
					</MDBTabsItem>
					<MDBTabsItem>
						<MDBTabsLink onClick={this.handleGetGiudeService} >
							Tour Guide
						</MDBTabsLink>
					</MDBTabsItem>
				</MDBTabs>

				<MDBTabsContent>
					<MDBTabsPane show={this.state.showCar}>
						<ShowCard />
					</MDBTabsPane>
					<MDBTabsPane show={this.state.showRoom} >
						<ShowCard />
					</MDBTabsPane>
					<MDBTabsPane show={this.state.showGiude} >
						<ShowCard />
					</MDBTabsPane>
				</MDBTabsContent>


				{/* <button onClick={this.handleGetCarService} type="car" class="btn btn-primary btn-rounded">Car Rentel</button>
				<button onClick={this.handleGetRoomService} type="rental" class="btn btn-secondary btn-rounded">Room Rentel</button>
				<button onClick={this.handleGetGiudeService} type="guide" class="btn btn-success btn-rounded">tour Giude</button>
				<ShowCard /> */}
				{/* <BrowserRouter>

					<Routes >
						<Route
							exact path="/car"
							element={<ShowCard />}
						>

						</Route>
						<Route
							exact path="/room"
							element={<ShowCard />}
						>

						</Route>

						<Route
							exact path="/guide"
							element={<ShowCard />}
						>

						</Route>
					</Routes>
			</BrowserRouter> */}
			</>
		);
	}
}


export default UseServices



