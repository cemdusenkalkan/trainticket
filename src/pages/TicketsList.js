import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../TicketsList.css'; 

const TicketsList = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([
    { id: 1, from: 'İzmir', to: 'İstanbul', departure: '08:00', arrival: '10:00' },
    { id: 2, from: 'İstanbul', to: 'İzmir', departure: '09:00', arrival: '10:30' },
    { id: 3, from: 'İzmir', to: 'Ankara', departure: '09:30', arrival: '10:45' },
    { id: 4, from: 'Ankara', to: 'İzmir', departure: '10:00', arrival: '11:00' },
    { id: 5, from: 'İstanbul', to: 'Ankara', departure: '09:30', arrival: '10:45' },
    { id: 6, from: 'Ankara', to: 'İstanbul', departure: '10:00', arrival: '11:00' },
  ]);

  const handleBuyClick = id => {
    navigate(`/payment`);
  };

  const handleStepClick = step => {
    if (step === 1) {
      navigate(``);
    }
  };

  return (
    <div className="tickets-container">
  {tickets.map(ticket => (
    <div key={ticket.id} className="ticket">
      <div className="ticket-detail"><strong>Departure Point:</strong> <span>{ticket.from}</span></div>
      <div className="ticket-detail"><strong>Destination:</strong> <span>{ticket.to}</span></div>
      <div className="ticket-detail"><strong>Departure Time:</strong> <span>{ticket.departure}</span></div>
      <div className="ticket-detail"><strong>Arrival Time:</strong> <span>{ticket.arrival}</span></div>
      <button onClick={() => handleBuyClick(ticket.id)}>Buy</button>
    </div>
  ))}
</div>

  );
};

export default TicketsList;
