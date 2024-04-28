import React, { useState } from 'react';
import StepsToBookTickets from '../components/StepsToBookTickets';
import FAQ from '../components/FAQ';
import backgroundImage from '../trainman.png';
import '../styles.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import date picker styling
import { Dropdown } from 'react-bootstrap'; // Assuming you're using React Bootstrap for dropdown
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HomePage = () => {
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [departureDate, setDepartureDate] = useState(null); // Changed to null
  const [returnDate, setReturnDate] = useState(null); // Changed to null
  const [selectedOption, setSelectedOption] = useState('one-way');
  const cities = ['Istanbul', 'Izmir', 'Ankara'];
  const navigate = useNavigate(); // Add this line to get the navigate function

  const handleSearchTickets = () => {
    navigate('/ticket'); // Navigate to the TicketsList page
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
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-from">
              From
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {cities.map((city, index) => (
                <Dropdown.Item key={index} onClick={() => setFromStation(city)}>
                  {city}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-to">
              To
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {cities.map((city, index) => (
                <Dropdown.Item key={index} onClick={() => setToStation(city)}>
                  {city}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

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
