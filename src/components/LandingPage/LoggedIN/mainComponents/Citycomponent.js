import SearchForm from './SearchForm';
import Weather from './Weather';
import Map from './Map';
import DisplayedInfo from './DisplayedInfo';
import Unsplashimg from './Unsplashimg';
import { Component } from 'react';
import axios from 'axios';
// import Header from '../../loggedOut/Header';
// import LogoutButton from '../../../user/LogoutButton';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
// import Profile from './../../../user/Profile';
import UseServices from '../../../UseServices';
import Header from '../../Header';
// import { Route, Routes } from 'react-router-dom';
// import UserProfile from '../../../User/UserProfile';
// import AboutUS from '../../About';
// import Blogs from './../../../Blogs'





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
		const requestUrl = `${process.env.REACT_APP_PORT}/city?searchQuery=${userInput}`;
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
				<Header />
				{/* <Routes>
					<Route path='/' element={<Header />} >
						<Route path='profile' element={<UserProfile />} />
						<Route path='about' element={<AboutUS />} />
						<Route path='blog' element={<Blogs />} />
					</Route> 

				</Routes>*/}
				<div
					className='p-5 text-center bg-image d-flex align-items-center'
					style={{ height: 'auto', minHeight: '25rem' }}
				>
					<MDBContainer >
						<MDBRow>
							<MDBCol >
								<SearchForm display={this.displayLocation} />
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
								<MDBRow>
									<UseServices />
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