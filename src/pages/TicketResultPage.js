import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Ticket.css';
import ticketImage from '../img/ticket.png';

function TicketResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticketId, ticketOwner, ticketDate } = location.state;

  const handleCancel = () => {
    // Here you can add logic to cancel the ticket
    alert('Ticket has been cancelled.');
    navigate('/');
  };

  return (
    <div className="ticket-container">
      <div className="ticket">
        <div className="ticket-logo">
          <img src={ticketImage} alt="Ticket" />
        </div>
        <div className="ticket-info">
          <p><strong>Ticket ID:</strong> {ticketId}</p>
          <p><strong>Ticket Owner:</strong> {ticketOwner}</p>
          <p><strong>Ticket Date:</strong> {ticketDate}</p>
          <p><strong>From:</strong> Istanbul</p>
          <p><strong>To:</strong> Ankara</p>
          <p><strong>Departure Time:</strong> 09:00 AM</p>
          <button className="cancel-button" onClick={handleCancel}>Cancel Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default TicketResultPage;
