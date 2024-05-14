import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import '../TicketsList.css'; 

const TicketsList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { from, to, departure, return: returnDate, oneWay } = queryString.parse(location.search);

  const [tickets, setTickets] = useState([
    { id: 1, from: 'İzmir', fromId: 2, to: 'İstanbul', toId: 1, departure: '08:00', arrival: '10:00' },
    { id: 2, from: 'İstanbul', fromId: 1, to: 'İzmir', toId: 2, departure: '09:00', arrival: '10:30' },
    { id: 3, from: 'İzmir', fromId: 2, to: 'Ankara', toId: 3, departure: '09:30', arrival: '10:45' },
    { id: 4, from: 'Ankara', fromId: 3, to: 'İzmir', toId: 2, departure: '10:00', arrival: '11:00' },
    { id: 5, from: 'İstanbul', fromId: 1, to: 'Ankara', toId: 3, departure: '09:30', arrival: '10:45' },
    { id: 6, from: 'Ankara', fromId: 3, to: 'İstanbul', toId: 1, departure: '10:00', arrival: '11:00' },
  ]);

  const filteredTickets = tickets.filter(ticket => {
    return ticket.fromId === Number(from) && ticket.toId === Number(to);
  });

  const handleBuyClick = id => {
    navigate(`/payment`);
  };

  return (
    <div className="tickets-container">
      {filteredTickets.length > 0 ? (
        filteredTickets.map(ticket => (
          <div key={ticket.id} className="ticket">
            <div className="ticket-detail"><strong>Departure Point:</strong> <span>{ticket.from}</span></div>
            <div className="ticket-detail"><strong>Destination:</strong> <span>{ticket.to}</span></div>
            <div className="ticket-detail"><strong>Departure Time:</strong> <span>{ticket.departure}</span></div>
            <div className="ticket-detail"><strong>Arrival Time:</strong> <span>{ticket.arrival}</span></div>
            <button onClick={() => handleBuyClick(ticket.id)}>Buy</button>
          </div>
        ))
      ) : (
        <p>No tickets available for the selected route.</p>
      )}
    </div>
  );
};

export default TicketsList;
