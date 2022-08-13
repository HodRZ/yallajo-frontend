import SearchForm from './components/SearchForm';
import Weather from './components/Weather';
import Map from './components/Map';
import DisplayedInfo from './components/DisplayedInfo';
import Unsplashimg from './components/Unsplashimg';




class Citycomponent extends React.Component{
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
			latitude: serverData.lat,
			longitude: serverData.lon,
			imgSrc: serverData.map,
			imgSrcUns: serverData.cityImage,
			showData: true,
			showErr: false,
			weather: serverData.weatherForecast,
			showWeather: true,

		})
		// console.log("hi jordan");
		// console.log(userInput);

	


	}



	


	render() {

		return (
			< div className='App'>

				<br></br>
				<SearchForm display={this.displayLocation} />
				{this.state.showData &&
					<>
						<DisplayedInfo name={this.state.cityName} />
						<Map className='pic' source={this.state.imgSrc} />
                        <Unsplashimg className='img' sourceimg={this.state.imgSrcUns}/>
					</>}
				{this.state.showWeather && <Weather weatherData={this.state.weather} />}

				{this.state.showErr && <p>Enter valid Value Please</p>}
			</div>
		)
	}
}export default Citycomponent ;

// Made by ruba