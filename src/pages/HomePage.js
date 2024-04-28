import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import StepsToBookTickets from '../components/StepsToBookTickets';
import FAQ from '../components/FAQ';
import backgroundImage from '../trainman.png';
import '../styles.css';

const HomePage = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('one-way');

  return (
    <div className="home-page">
      <NavigationBar />
      <div className="search-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h2>Bilet Al?</h2>
        <h3>Geliyom?</h3>
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
          <input 
            type="text" 
            placeholder="From" 
            value={fromStation} 
            onChange={(e) => setFromStation(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="To" 
            value={toStation} 
            onChange={(e) => setToStation(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Departure Date" 
            value={departureDate} 
            onChange={(e) => setDepartureDate(e.target.value)}
          />
          <button type="button">Search tickets</button>
        </div>
      </div>
      <StepsToBookTickets />
      <FAQ />
      {/* Other components or content */}
    </div>
  );
};

export default HomePage;
