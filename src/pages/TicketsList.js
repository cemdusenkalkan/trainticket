// TicketsList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../TicketsList.css'; // Make sure this CSS file exists and is imported

const TicketsList = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/payment'); // Assuming '/payment' is the route for the PaymentPage
  };

  const tickets = [1, 2, 3, 4]; // Placeholder for ticket IDs

  return (
    <div className="tickets-container">
      {/* Render your tickets here */}
      {tickets.map((ticketId) => (
        <div key={ticketId} className="ticket">
          <h3>Ticket {ticketId}</h3>
          <button onClick={() => handleBuyClick(ticketId)}>Buy</button>
        </div>
      ))}
    </div>
  );
};

export default TicketsList;
