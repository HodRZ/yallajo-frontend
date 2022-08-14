import SearchForm from './SearchForm';
import Weather from './Weather';
import Map from './Map';
import DisplayedInfo from './DisplayedInfo';
import Unsplashimg from './Unsplashimg';
import { Component } from 'react';
import axios from 'axios';
// import Header from '../../loggedOut/Header';
import LogoutButton from '../../../user/LogoutButton';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Profile from './../../../user/Profile';





class Citycomponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cityName: '',
			latitude: '',
			longitude: '',
			imgSrc: '',
			showData: false,
			showErr: false,
			weather: [],
			showWeather: false,

		}
	}

	displayLocation = async (event) => {
		event.preventDefault();
		const userInput = event.target.form1.value;
		const requestUrl = `http://localhost:3001/city?searchQuery=${userInput}`;
		const serverData = await axios.get(requestUrl);
		this.setState({

			cityName: userInput,
			latitude: serverData.data.lat,
			longitude: serverData.data.lon,
			imgSrc: serverData.data.map,
			imgSrcUns: serverData.data.cityImg,
			showData: true,
			showErr: false,
			weather: serverData.data.weatherForecast,
			showWeather: true,

		})
		// console.log("hi jordan");
		// console.log(userInput);

	}

	render() {
		return (
			<>
				<div
					className='p-5 text-center bg-image d-flex align-items-center'
					style={{ backgroundColor: 'orange', height: 'auto' }}
				>
					<MDBContainer >
						<MDBRow>
							<MDBCol md='7'>
								<SearchForm display={this.displayLocation} />
							</MDBCol>
							<MDBCol md='3'>
								<Profile />
							</MDBCol>
							<MDBCol md='2'>
								<LogoutButton />
							</MDBCol>
						</MDBRow>

						{this.state.showData &&
							<>
								<MDBRow>
									<DisplayedInfo name={this.state.cityName} />
								</MDBRow>
								<MDBRow>
									<MDBCol md='6'>
										<Map source={this.state.imgSrc} />
									</MDBCol>
									<MDBCol md='2'>
										<Weather weatherData={this.state.weather} />
									</MDBCol>
									<MDBCol md='4'>
										<Unsplashimg sourceimg={this.state.imgSrcUns} />
									</MDBCol>
								</MDBRow>
							</>}
					</MDBContainer>
					{this.state.showErr && <p>Enter valid Value Please</p>}
				</div>
			</>

		)
	}
} export default Citycomponent;

// Made by ruba