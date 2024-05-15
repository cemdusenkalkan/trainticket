import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdOutlineDateRange } from 'react-icons/md';
import '../TicketsList.css';

const DateSelector = ({ selectedDate, setSelectedDate }) => {
  const navigate = useNavigate();
  const today = new Date();
  const prevDay = new Date(selectedDate);
  prevDay.setDate(prevDay.getDate() - 1);
  const nextDay = new Date(selectedDate);
  nextDay.setDate(nextDay.getDate() + 1);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateUrlDate(date);
  };

  const updateUrlDate = (date) => {
    const params = new URLSearchParams(window.location.search);
    params.set('departure', date.toISOString());
    navigate(`${window.location.pathname}?${params.toString()}`, { replace: true });
  };

  const handleModifySearch = () => {
    navigate('/');
  };

  return (
    <div className="date-selector">
      <button
        onClick={() => handleDateChange(prevDay)}
        disabled={prevDay < today}
        className={prevDay < today ? 'disabled' : ''}
      >
        {prevDay.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
      </button>
      <button className="active">
        {selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
      </button>
      <button onClick={() => handleDateChange(nextDay)}>
        {nextDay.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
      </button>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd MMM yyyy"
        minDate={new Date()}
        customInput={
          <button className="calendar-button">
            <MdOutlineDateRange />
          </button>
        }
      /> 
      {/* 
      <button onClick={handleModifySearch}>Modify search</button>
      */ }
    </div>
  );
};

const TicketsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, to, departure } = queryString.parse(location.search);

  const [tickets, setTickets] = useState([
    { id: 1, from: 'İzmir', fromId: 2, to: 'İstanbul', toId: 1, departure: '08:00', arrival: '10:00' },
    { id: 2, from: 'İstanbul', fromId: 1, to: 'İzmir', toId: 2, departure: '09:00', arrival: '10:30' },
    { id: 3, from: 'İzmir', fromId: 2, to: 'Ankara', toId: 3, departure: '09:30', arrival: '10:45' },
    { id: 4, from: 'Ankara', fromId: 3, to: 'İzmir', toId: 2, departure: '10:00', arrival: '11:00' },
    { id: 5, from: 'İstanbul', fromId: 1, to: 'Ankara', toId: 3, departure: '09:30', arrival: '10:45' },
    { id: 6, from: 'Ankara', fromId: 3, to: 'İstanbul', toId: 1, departure: '10:00', arrival: '11:00' },
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date(departure));

  const cities = {
    1: 'İstanbul',
    2: 'İzmir',
    3: 'Ankara',
    4: 'Antalya'
  };

  const filteredTickets = tickets.filter(ticket => {
    return ticket.fromId === Number(from) && ticket.toId === Number(to);
  });

  const handleBuyClick = id => {
    navigate(`/payment`);
  };

  const handleStepClick = (step) => {
    if (step === 1) {
      navigate(``);
    }
  };


  return (
    <div className="container">



      <div className="row">
        <div className="col-12 mb-4">
            <div className="progress-steps">
              <span onClick={() => handleStepClick(1)} className="active-step">1. Select train</span>
              <span className="arrow">→</span>
              <span className="disabled-step">2. Select seats</span>
              <span className="arrow">→</span>
              <span className="disabled-step">3. Passengers</span>
              <span className="arrow">→</span>
              <span className="disabled-step">4. Reservation</span>
            </div>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
            <h5 className="journey-info">{cities[from]} → {cities[to]} {selectedDate.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}</h5>
            <DateSelector selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </div>
      </div>

     


      <div className="row">
        <div className="col-md-3">
          <div className="border p-3">
            <h5>Filter</h5>
            <p>Grid: 3</p>
          </div>
        </div>
        <div className="col-md-9">
            <div className="tickets-container">
              {filteredTickets.length > 0 ? (
                filteredTickets.map(ticket => (
                  <div key={ticket.id} className="ticket mb-3">
                    <div className="ticket-detail"><strong>Departure Point:</strong> <span>{ticket.from}</span></div>
                    <div className="ticket-detail"><strong>Destination:</strong> <span>{ticket.to}</span></div>
                    <div className="ticket-detail"><strong>Departure Time:</strong> <span>{ticket.departure}</span></div>
                    <div className="ticket-detail"><strong>Arrival Time:</strong> <span>{ticket.arrival}</span></div>
                    <button className="btn btn-primary mt-2" onClick={() => handleBuyClick(ticket.id)}>Buy</button>
                  </div>
                ))
              ) : (
                <p>No tickets available for the selected route.</p>
              )}
            </div>
          </div>
        </div>
      </div>

  );
};

export default TicketsList;
