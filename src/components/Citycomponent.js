import SearchForm from './SearchForm';
import Weather from './Weather';
import Map from './Map';
import DisplayedInfo from './DisplayedInfo';
import Unsplashimg from './Unsplashimg';
import { Component } from 'react';
import axios from 'axios';




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
				<SearchForm display={this.displayLocation} />
				{this.state.showData &&
					<>
						<DisplayedInfo name={this.state.cityName} />
						<Map className='pic' source={this.state.imgSrc} />
						<Unsplashimg className='img' sourceimg={this.state.imgSrcUns} />
					</>}
				{this.state.showWeather && <Weather weatherData={this.state.weather} />}

				{this.state.showErr && <p>Enter valid Value Please</p>}
			</>
		)
	}
} export default Citycomponent;

// Made by ruba