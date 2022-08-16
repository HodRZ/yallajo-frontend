import SearchForm from './SearchForm';
import Weather from './Weather';
import Map from './Map';
import DisplayedInfo from './DisplayedInfo';
import Unsplashimg from './Unsplashimg';
import { Component } from 'react';
import axios from 'axios';
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import UseServices from '../../../UseServices';
import Header from '../../Header';
import { withAuth0 } from '@auth0/auth0-react';






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
	}
	createUser = async () => {
		const newUser = {
			name: this.props.auth0.user.name,
			email: this.props.auth0.user.email,
			image: this.props.auth0.user.picture
		}

		const found = await axios.post(`${process.env.REACT_APP_PORT}/user`, newUser).catch(function (error) { console.log(error) })
		console.log(found)
	}
	componentDidMount() {
		this.createUser()
	}
	render() {
		return (
			<>
				<Header />
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
} export default withAuth0(Citycomponent);
