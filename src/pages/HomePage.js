import React, { useState } from 'react';
import StepsToBookTickets from '../components/StepsToBookTickets';
import FAQ from '../components/FAQ';
import backgroundImage from '../trainman.png';
import '../styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState('one-way');
  const cities = ['Istanbul', 'Izmir', 'Ankara'];
  const navigate = useNavigate();

  // Separate visibility states for each dropdown
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleSearchTickets = () => {
    navigate('/ticket');
  };

  const handleCitySelect = (city, setStation, setShowSuggestions) => {
    setStation(city);
    setShowSuggestions(false);  // Hide suggestions after selection
  };

  const filteredCities = (input) => {
    if (!input) return [];
    return cities.filter(city => city.toLowerCase().startsWith(input.toLowerCase()));
  };

  return (
    <div className="home-page">
      <div
        className="search-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>

        <h2>traintrack</h2>
        <h3 className='slogan'>Ride the Rails to Adventure - Your Journey Begins Here!</h3>
        <div className="search-options">
          <label>
            <input 
              type="radio" 
              name="tripType" 
              value="one-way"
              checked={selectedOption === 'one-way'}
              onChange={() => setSelectedOption('one-way')}
            />
            One way
          </label>
          <label>
            <input 
              type="radio" 
              name="tripType" 
              value="roundtrip"
              checked={selectedOption === 'roundtrip'}
              onChange={() => setSelectedOption('roundtrip')}
            />
            Roundtrip
          </label>
        </div>
        <div className="search-fields">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="From"
              value={fromStation}
              onChange={(e) => {
                setFromStation(e.target.value);
                setShowFromSuggestions(true);
              }}
              onFocus={() => setShowFromSuggestions(true)}
              onBlur={() => setTimeout(() => setShowFromSuggestions(false), 100)}
              className="station-input"
            />
            {showFromSuggestions && (
              <div className="suggestions-list">
                {filteredCities(fromStation).map(city => (
                  <div key={city} onClick={() => handleCitySelect(city, setFromStation, setShowFromSuggestions)} className="suggestion-item">{city}</div>
                ))}
              </div>
            )}
          </div>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="To"
              value={toStation}
              onChange={(e) => {
                setToStation(e.target.value);
                setShowToSuggestions(true);
              }}
              onFocus={() => setShowToSuggestions(true)}
              onBlur={() => setTimeout(() => setShowToSuggestions(false), 100)}
              className="station-input"
            />
            {showToSuggestions && (
              <div className="suggestions-list">
                {filteredCities(toStation).map(city => (
                  <div key={city} onClick={() => handleCitySelect(city, setToStation, setShowToSuggestions)} className="suggestion-item">{city}</div>
                ))}
              </div>
            )}
          </div>

          <DatePicker
            selected={departureDate}
            onChange={(date) => setDepartureDate(date)}
            placeholderText="Departure Date"
            className="date-picker"
          />

          {selectedOption === 'roundtrip' && (
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              placeholderText="Return Date"
              className="date-picker"
            />
          )}

          <button type="button" onClick={handleSearchTickets}>Search</button>
        </div>
      </div>
      <StepsToBookTickets />
      <FAQ />
    </div>
  );
};

export default HomePage;
