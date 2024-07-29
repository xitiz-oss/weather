import { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setCity, fetchWeather }) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setCity(input);
        fetchWeather(input);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter city"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
