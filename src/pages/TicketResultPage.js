import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Ticket.css'; // Make sure to create and import this CSS file

function TicketResultPage() {
  const location = useLocation();
  const { ticketId, ticketOwner, ticketDate } = location.state;

  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="ticket-logo">
          {/* Your SVG logo goes here */}
        </div>
        <div className="ticket-info">
          <p>Ticket ID: {ticketId}</p>
          <p>Ticket Owner: {ticketOwner}</p>
          <p>Ticket Date: {ticketDate}</p>
        </div>
      </div>
    </div>
  );
}

export default TicketResultPage;
