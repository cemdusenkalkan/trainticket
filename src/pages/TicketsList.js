import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TicketsList.css';

const TicketsList = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([
    { id: 1, from: 'Fatih', to: 'Beylikdüzü', departure: '08:00', arrival: '10:00' },
    { id: 2, from: 'Bakırköy', to: 'Kadıköy', departure: '09:00', arrival: '10:30' },
    { id: 3, from: 'Üsküdar', to: 'Taksim', departure: '09:30', arrival: '10:45' },
    { id: 4, from: 'Beşiktaş', to: 'Sarıyer', departure: '10:00', arrival: '11:00' },
  ]);

  // Function to navigate for ticket purchase
  const handleBuyClick = (id) => {
    navigate(`/payment`); // Using the dynamic route '/payment/:id' to navigate to the payment page
  };

  const handleStepClick = (step) => {
    if (step === 1) {
      navigate(``);
    }
  };

  return (
    <div>
      <div className="progress-steps">
        <span onClick={() => handleStepClick(1)} className="active-step">1. Select train</span>
        <span className="arrow">→</span>
        <span className="disabled-step">2. Select seats</span>
        <span className="arrow">→</span>
        <span className="disabled-step">3. Passengers</span>
        <span className="arrow">→</span>
        <span className="disabled-step">4. Reservation</span>
      </div>
      <div className="tickets-container">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket">
            <div>Departure Point: {ticket.from}</div>
            <div>Destination: {ticket.to}</div>
            <div>Departure Time: {ticket.departure}</div>
            <div>Arrival Time: {ticket.arrival}</div>
            <button onClick={() => handleBuyClick(ticket.id)}>Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketsList;