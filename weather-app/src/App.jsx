import  { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const apiKey = 'af82cb129f56555a4e2016e15ebfa31a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

function App() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get(`${apiUrl}${city}&appid=${apiKey}`);
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching the weather data:', error);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Weather App</h1>
                <SearchBar setCity={setCity} fetchWeather={fetchWeather} />
                {weather && <WeatherInfo weather={weather} />}
            </header>
        </div>
    );
}

export default App;
